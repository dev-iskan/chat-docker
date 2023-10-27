<?php

namespace Database\Seeders;

use App\Models\Message;
use App\Models\User;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $user = new User();
        $user->name = 'Iskan';
        $user->user_agent = 'Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:87.0) Gecko/20100101 Firefox/87.0';
        $user->save();

        $user = new User();
        $user->name = 'Maksud';
        $user->user_agent = 'Mozilla/5.0 (Linux; Android 10; Pixel 4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.82 Mobile Safari/537.36';
        $user->save();

        $user = new User();
        $user->name = 'Dima';
        $user->user_agent = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0.3 Safari/605.1.15';
        $user->save();


        $message = new Message();
        $message->user_id = 1;
        $message->text = 'Hello guys';
        $message->save();

        $message = new Message();
        $message->user_id = 2;
        $message->text = 'Hello!';
        $message->save();

        $message = new Message();
        $message->user_id = 3;
        $message->text = 'Hi';
        $message->save();

        $message = new Message();
        $message->user_id = 1;
        $message->text = 'How are you?';
        $message->save();

        $message = new Message();
        $message->user_id = 2;
        $message->text = 'Not bad, now you?';
        $message->save();

        $message = new Message();
        $message->user_id = 3;
        $message->text = 'Me to -_-';
        $message->save();
    }
}
