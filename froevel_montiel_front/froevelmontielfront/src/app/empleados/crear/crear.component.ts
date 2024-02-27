import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { EmpleadoService } from '../empleado.service';
import { Empleado } from '../empleado';


@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.css']
})
export class CrearComponent implements OnInit {

  id: number;
  empleado: Empleado;
  form: FormGroup;

  constructor(public empleadoService: EmpleadoService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {

    this.form = new FormGroup({
      id:  new FormControl(''),
      codigo:  new FormControl('', [ Validators.required ]),
      nombre:  new FormControl('', [ Validators.required, Validators.pattern('^[a-zA-Z \-\']+') ]),
      salarioDolares: new FormControl('', [ Validators.required, Validators.pattern("^[0-9]*$") ]),
      salarioPesos: new FormControl('',  [ Validators.required, Validators.pattern("^[0-9]*$") ]),
      direccion:  new FormControl('', [ Validators.required ]),
      estado:  new FormControl('', [ Validators.required ]),
      ciudad:  new FormControl('', [ Validators.required ]),
      celular: new FormControl('', [ Validators.required, Validators.pattern("^[0-9]*$") ]),
      correo: new FormControl('', [ Validators.required, Validators.email ]),
      activo: new FormControl('1'),
      eliminado: new FormControl('0')
      

    });


    this.id = this.route.snapshot.params['idEmpleado'];
    if(this.id != 0){
      console.log(this.id);
      this.empleadoService.find(this.id).subscribe((data: Empleado)=>{
        this.empleado = data;


        this.form.patchValue({
          id: this.empleado.id,
          codigo:  this.empleado.codigo,
          nombre:  this.empleado.nombre,
          direccion:  this.empleado.direccion,
          salarioDolares: this.empleado.salarioDolares,
          salarioPesos: this.empleado.salarioPesos,
          estado:  this.empleado.estado,
          ciudad:  this.empleado.ciudad,
          celular: this.empleado.celular,
          correo: this.empleado.correo,
          activo: this.empleado.activo,
          eliminado: this.empleado.eliminado
          
        });
      });

      

    }

    

    //this.form.controls['salarioPesos'].disable();


    

  }

  get f(){
    return this.form.controls;
  }

  submit(){
    console.log(this.form.value);
    this.empleadoService.create(this.form.value).subscribe(res => {
         console.log('Empleado creado!');
         this.router.navigateByUrl('empleados/index');
    })
  }

  actualizarSalarioPesos(){
    this.empleadoService.getTipoCambio().subscribe(res => {
      console.log(res.bmx.series[0].datos[0].dato);
      
      this.form.patchValue({
        salarioPesos: Number(Number(res.bmx.series[0].datos[0].dato) * Number(this.form.controls['salarioDolares'].value)).toFixed(0)
    });
    
 })
  }

}
