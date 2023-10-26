<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

/**
 * @property int $id
 * @property string $name
 * @property string $user_agent
 */
class User extends Model
{
    public function messages(): HasMany
    {
        return $this->hasMany(Message::class);
    }
}
