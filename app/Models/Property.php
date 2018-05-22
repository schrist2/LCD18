<?php

namespace App\Models;

class Property extends Model
{
    /**
     * @var array
     */
    public $with = ['propertyType'];

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function propertyType()
    {
        return $this->belongsTo(PropertyType::class);
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsToMany
     */
    public function patients()
    {
        return $this->belongsToMany(Patient::class)
            ->withPivot(['value'])
            ->withTimestamps();
    }

    /**
     * @param  \Illuminate\Database\Eloquent\Builder $query
     * @param  string $typeName
     * @return mixed
     */
    public function scopeOfType($query, $typeName)
    {
        return $query->whereHas('propertyType', function ($query) use ($typeName) {
            $query->where('name', $typeName);
        });
    }
}
