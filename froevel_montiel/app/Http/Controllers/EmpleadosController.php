<?php

namespace App\Http\Controllers;

use App\Models\Empleados;
use Illuminate\Http\Request;


class EmpleadosController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $empleados = Empleados::all();
        return $empleados;
        //return view('empleados.index', compact('empleados'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
       /* $request->validate([
            'codigo' => 'required',
            'nombre' => 'required',
            'salarioDolares' => 'required',
            'salarioPesos' => 'required',
            'direccion' => 'required',
            'estado' => 'required',
            'ciudad' => 'required',
            'celular' => 'required',
            'correo' => 'required',
            'activo' => 'required',

        ]);
       */

       Empleados::create($request->all());

        return redirect()->route('empleados.index')
            ->with('success','Empleado creado');


    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $empleado = Empleados::find($id);
        return $empleado;
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
