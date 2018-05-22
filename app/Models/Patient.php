<?php

namespace App\Models;

class Patient extends Model
{
    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsToMany
     */
    public function properties()
    {
        return $this->belongsToMany(Property::class)
            ->withPivot(['value'])
            ->withTimestamps();
    }
}
