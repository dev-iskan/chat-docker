<?php

namespace App\Http\Controllers\Chat;

use App\Exceptions\ApiException;
use App\Http\Controllers\Controller;
use App\Http\Resources\Chat\MessageResource;
use App\Models\Message;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;
use phpcent\Client;

class MessageController extends Controller
{
    public function index(Request $request): AnonymousResourceCollection
    {
        $messages = Message::query()
            ->with('user')
            ->orderBy('id', 'desc')
            ->paginate(100);
        return MessageResource::collection($messages);
    }

    public function store(Request $request): MessageResource
    {
        $this->validate($request, [
            'user_id' => 'required|integer|min:1',
            'text' => 'required|string|max:1000'
        ]);

        $user = User::query()->find($request->input('user_id'));
        if ($user === null) {
            throw new ApiException('User not found', 404);
        }

        $message = new Message();
        $message->text = $request->input('text');
        $message->user()->associate($user);
        $message->save();

        $client = new Client(config('services.centrifugo.domain'));
        $client->setApiKey(config('services.centrifugo.api_key'));

        $client->publish('chat', [
            'text' => $message->text,
            'user_id' => $message->user_id,
            'user_name' => $user->name,
            'created_at' => $message->created_at->toString(),
        ]);

        return new MessageResource($message);
    }
}
