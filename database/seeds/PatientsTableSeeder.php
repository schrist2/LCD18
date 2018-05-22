<?php

use App\Models\Property;
use Illuminate\Database\Seeder;
use Faker\Generator as Faker;
use App\Models\Patient;

class PatientsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run(Faker $faker)
    {
        for ($i = 0; $i < 30; $i++) {
            $patient = Patient::create([
                'first_name' => $faker->firstName,
                'last_name' => $faker->lastName,
                'birthdate' => $faker->dateTimeThisCentury,
                'gender' => $faker->randomElement(['m', 'f', 'x']),
            ]);

            foreach (Property::ofType('Vitalwerte')->get() as $property) {
                for ($j = 0; $j < 5; $j++) {
                    $patient->properties()->attach($property->id, [
                        'value' => $faker->numberBetween(1, 100),
                        'time' => $faker->dateTimeBetween('-10 days'),
                    ]);
                }
            }

            foreach (Property::ofType('Medikamente')->get()->random(2) as $property) {
                $patient->properties()->attach($property->id, [
                    'value' => $faker->numberBetween(1, 100).' mg',
                    'time' => $faker->dateTimeBetween('-1 day', '+1 day'),
                ]);
            }
        }

    }
}
