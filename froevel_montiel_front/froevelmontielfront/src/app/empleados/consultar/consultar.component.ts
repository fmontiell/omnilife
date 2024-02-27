import { Component, OnInit } from '@angular/core';
import { Empleado } from '../empleado';
import { FormGroup } from '@angular/forms';
import { EmpleadoService } from '../empleado.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbProgressbarModule } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-consultar',
  templateUrl: './consultar.component.html',
  styleUrls: ['./consultar.component.css'],
  
})
export class ConsultarComponent implements OnInit {

  id: number;
  empleado: Empleado;
  form: FormGroup;

  proy: any;

  constructor(public empleadoService: EmpleadoService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {

    this.id = this.route.snapshot.params['idEmpleado'];
    if(this.id != 0){
      console.log(this.id);
      this.empleadoService.find(this.id).subscribe((data: Empleado)=>{
        this.empleado = data;
      });


      this.empleadoService.proyeccion(this.id).subscribe((dataProy: any)=>{
        this.proy = dataProy;
      });
    }

  }

}
