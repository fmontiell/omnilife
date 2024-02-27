import { Component, OnInit } from '@angular/core';
import { Empleado } from '../empleado';
import { EmpleadoService } from '../empleado.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  empleados: Empleado[] = [];

  constructor(public empleadoService: EmpleadoService) { }

  ngOnInit(): void {
    this.empleadoService.getAll().subscribe((data: Empleado[])=>{
      this.empleados = data;
      console.log(this.empleados);
    })
  }


  borrarEmpleado(id){
    this.empleadoService.delete(id).subscribe(res => {
         this.empleados = this.empleados.filter(item => item.id !== id);
         console.log('Empleado borrado!');
    })
  }

}
