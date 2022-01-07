import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaFacturasComponent } from './lista-facturas/lista-facturas.component';

const routes: Routes = [
// un componente encargado del listado
{path:"lista", component:ListaFacturasComponent},


];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
