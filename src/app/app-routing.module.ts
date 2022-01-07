import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetalleComponent } from './detalle/detalle.component';
import { FormularioNuevoComponent } from './formulario-nuevo/formulario-nuevo.component';
import { ListaFacturasComponent } from './lista-facturas/lista-facturas.component';

const routes: Routes = [
// un componente encargado del listado
{path:"lista", component:ListaFacturasComponent},
{path:"formularionuevo", component:FormularioNuevoComponent},
{path:"detalle/:numero", component:DetalleComponent}



];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
