<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\EmpleadosController;
use App\Http\Controllers\AuthController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/


Route::get('/empleados', EmpleadosController::class .'@index')->name('empleados.index');
Route::post('/empleados/create', EmpleadosController::class . '@store')->name('empleados.store');
Route::post('/empleados/delete', EmpleadosController::class .'@destroy')->name('empleados.destroy');
Route::get('/empleados/proyeccion/{empleado}', EmpleadosController::class .'@proyeccion')->name('empleados.proyeccion');
Route::get('/empleados/{empleado}', EmpleadosController::class .'@show')->name('empleados.show');



Route::post('/login', [AuthController::class, 'login'])->name('login');
