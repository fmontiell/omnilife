<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Empleados extends Model
{
    use HasFactory;

    protected $fillable = [
        'codigo', 'nombre', 'salarioDolares', 'salarioPesos', 'direccion', 'estado', 'ciudad','celular','correo','activo', 'eliminado'
    ];



}
