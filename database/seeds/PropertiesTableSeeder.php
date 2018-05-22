<?php

use Illuminate\Database\Seeder;
use App\Models\PropertyType;
use App\Models\Property;

class PropertiesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $commonTypeId = PropertyType::where('name', 'Allgemein')->first()->id;

        Property::create([
            'name' => 'Größe',
            'property_type_id' => $commonTypeId,
        ]);

        Property::create([
            'name' => 'Gewicht',
            'property_type_id' => $commonTypeId,
        ]);

        $vitalsTypeId = PropertyType::where('name', 'Vitalwerte')->first()->id;

        Property::create([
            'name' => 'Atmung',
            'property_type_id' => $vitalsTypeId,
        ]);

        Property::create([
            'name' => 'Temperatur',
            'property_type_id' => $vitalsTypeId,
        ]);

        Property::create([
            'name' => 'Puls',
            'property_type_id' => $vitalsTypeId,
        ]);

        Property::create([
            'name' => 'O2',
            'property_type_id' => $vitalsTypeId,
        ]);

        $medicinesTypeId = PropertyType::where('name', 'Medikamente')->first()->id;

        Property::create([
            'name' => 'Arimidex',
            'property_type_id' => $medicinesTypeId,
        ]);

        Property::create([
            'name' => 'Nolvadex',
            'property_type_id' => $medicinesTypeId,
        ]);

        Property::create([
            'name' => 'Clomid',
            'property_type_id' => $medicinesTypeId,
        ]);
    }
}
