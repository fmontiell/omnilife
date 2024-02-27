import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import {  Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Empleado } from './empleado'; 

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  private apiURL = "http://127.0.0.1:8000/empleados";
  private apiURLBanxico = "https://www.banxico.org.mx/SieAPIRest/service/v1/series/SF43718/datos";

  httpOptions = {
     headers: new HttpHeaders({
       'Content-Type': 'application/json'
     })
  }

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<Empleado[]> {
   return this.httpClient.get<Empleado[]>(this.apiURL)
   .pipe(
     catchError(this.errorHandler)
   )
 }

 create(empleado: any): Observable<Empleado> {
   return this.httpClient.post<Empleado>(this.apiURL+'/create', JSON.stringify(empleado), this.httpOptions)
   .pipe(
     catchError(this.errorHandler)
   )
 }

 find(id: any): Observable<Empleado> {
   return this.httpClient.get<Empleado>(this.apiURL + '/'+ id)
   .pipe(
     catchError(this.errorHandler)
   )
 }

 update(id: any, empleado: any): Observable<Empleado> {
   return this.httpClient.put<Empleado>(this.apiURL + id, JSON.stringify(empleado), this.httpOptions)
   .pipe(
     catchError(this.errorHandler)
   )
 }

 delete(empleado: any){
   

   return this.httpClient.post<Empleado>(this.apiURL+'/delete', JSON.stringify(empleado), this.httpOptions)
   .pipe(
     catchError(this.errorHandler)
   )
 }

 proyeccion(id: any): Observable<Empleado> {
  return this.httpClient.get<Empleado>(this.apiURL + '/proyeccion/'+ id)
  .pipe(
    catchError(this.errorHandler)
  )
  }




 getTipoCambio(): Observable<any> {

  const headers = new HttpHeaders()
   .set('Bmx-Token', 'dc3775d0664a195ea6dc31b00d3fdda4edfab97475d475a1450d613c49a6c133');

  return this.httpClient.get<any>(this.apiURLBanxico+'/2024-02-26/2024-02-26', 
  {headers: headers})
  .pipe(
    catchError(this.errorHandler)
  )
}

 errorHandler(error: any) {
   let errorMessage = '';
   if(error.error instanceof ErrorEvent) {
     errorMessage = error.error.message;
   } else {
     errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
   }
   return throwError(errorMessage);
 }


}
