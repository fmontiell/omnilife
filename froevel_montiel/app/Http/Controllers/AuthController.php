<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    /**
     * Función que se encarga de recibir los datos del formulario de login, comprobar que el usuario existe y
     * en caso correcto logar al usuario
     */
    public function login(Request $request)
    {

        $request->validate([
            'email' => 'required',
            'password' => 'required',
        ]);


        $credentials = $request->only('email', 'password');

        if (Auth::attempt($credentials)) {
            return true;
        }


        return redirect("/")->withSuccess('Los datos introducidos no son correctos');
    }
}
