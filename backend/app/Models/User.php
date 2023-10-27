<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

/**
 * @property int $id
 * @property string $name
 * @property string $user_agent
 * @method static Builder|User query()
 */
class User extends Model
{
    protected $fillable = [
        'name',
        'user_agent'
    ];
    public function messages(): HasMany
    {
        return $this->hasMany(Message::class);
    }
}
