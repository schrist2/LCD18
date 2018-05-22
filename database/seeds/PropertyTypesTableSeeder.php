<?php

use Illuminate\Database\Seeder;
use App\Models\PropertyType;

class PropertyTypesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        PropertyType::create([
            'name' => 'Allgemein',
        ]);

        PropertyType::create([
            'name' => 'Vitalwerte',
        ]);

        PropertyType::create([
            'name' => 'Medikamente',
        ]);
    }
}
