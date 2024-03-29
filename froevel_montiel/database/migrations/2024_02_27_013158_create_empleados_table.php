<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateEmpleadosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('empleados', function (Blueprint $table) {
            $table->id();

            $table->string('codigo');
            $table->string('nombre');
            $table->double('salarioDolares');
            $table->double('salarioPesos');
            $table->string('direccion');
            $table->string('estado');
            $table->string('ciudad');
            $table->string('celular');
            $table->string('correo');
            $table->boolean('activo');
            $table->boolean('eliminado');

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('empleados');
    }
}
