import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { CrearComponent } from './crear/crear.component';
import { ConsultarComponent } from './consultar/consultar.component';

const routes: Routes = [
  {
    path:'empleados', redirectTo:'empleados/index', pathMatch: 'full'
  },
  {
    path:'empleados/index', component: IndexComponent
  },
  {
    path:'empleados/crear/:idEmpleado', component: CrearComponent
  },
  {
    path:'empleados/consultar/:idEmpleado', component: ConsultarComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmpleadosRoutingModule { }
