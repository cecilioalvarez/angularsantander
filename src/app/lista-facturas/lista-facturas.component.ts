import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Factura } from '../factura';
import { FacturaRESTService } from '../factura-rest.service';

@Component({
  selector: 'app-lista-facturas',
  templateUrl: './lista-facturas.component.html',
  styleUrls: ['./lista-facturas.component.css']
})
export class ListaFacturasComponent implements OnInit {

  listaFacturas:Factura[]=[];
  constructor(private servicio:FacturaRESTService,private router:Router) {


    servicio.BuscarTodos().subscribe((datos)=> {

      this.listaFacturas=datos;
    })

   }

  ngOnInit(): void {
  }

  borrar(numero:number) {
    //la peticion ajax termina
    this.servicio.Borrar(numero).subscribe((datos)=>{
        //no existe para este ambito
        //una borrados los datos la lista se vuelve a cargar con las modificaciones
        this.servicio.BuscarTodos().subscribe((otrosdatos)=> {

              this.listaFacturas=otrosdatos;
        })
    })
  }

  detalle(numero:number) {

    this.router.navigate(["detalle",numero]);
   
  
  }
  nuevo() {
    this.router.navigate(["formularionuevo"]);
  }
}
