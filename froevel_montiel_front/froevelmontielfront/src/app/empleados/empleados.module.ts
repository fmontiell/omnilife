import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmpleadosRoutingModule } from './empleados-routing.module';
import { IndexComponent } from './index/index.component';
import { CrearComponent } from './crear/crear.component';
import { EditarComponent } from './editar/editar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ConsultarComponent } from './consultar/consultar.component';



@NgModule({
  declarations: [
    IndexComponent,
    CrearComponent,
    EditarComponent,
    ConsultarComponent
  ],
  imports: [
    CommonModule,
    EmpleadosRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class EmpleadosModule { }
