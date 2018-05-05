<?php

use Illuminate\Database\Seeder;
use Laraspace\User;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        User::create([
            'email' => 'canmehmetcp@gmail.com',
            'name' => 'Can Mehmet',
            'role' => 'admin',
            'password' => bcrypt('123321qwe')
        ]);

        User::create([
            'email' => 'test@test.com',
            'name' => 'Test User',
            'role' => 'user',
            'password' => bcrypt('123321qwe')
        ]);

       
    }
}
