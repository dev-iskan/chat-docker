<?php

namespace App\Http\Controllers\Chat;

use App\Exceptions\ApiException;
use App\Http\Controllers\Controller;
use App\Http\Resources\Chat\UserResource;
use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    /**
     * @throws ApiException
     */
    public function me(Request $request): UserResource
    {
        $name = $request->input('name');

        $userAgent = $request->header('User-Agent');
        if ($userAgent == null) {
            throw new ApiException('User-Agent is required', 400);
        }

        $user = User::query()
            ->where('name', '=', $name)
            ->where('user_agent', '=', $userAgent)
            ->first();
        if ($user === null) {
            $user = new User();
            $user->name = $name;
            $user->user_agent = $userAgent;
            $user->save();
        }

        return new UserResource($user);
    }
}
