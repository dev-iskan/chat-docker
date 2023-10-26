<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

/**
 * @property int $id
 * @property string $text
 * @property int $user_id
 */
class Message extends Model
{
    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }
}
