import { Component, OnInit } from '@angular/core';
import { Factura } from '../factura';
import { FacturaRESTService } from '../factura-rest.service';

@Component({
  selector: 'app-c6',
  templateUrl: './c6.component.html',
  styleUrls: ['./c6.component.css']
})
export class C6Component implements OnInit {

  listaFacturas:Factura[]=[];
  constructor(private servicio:FacturaRESTService) {

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

    this.servicio.Detalle(numero).subscribe((datos)=> {

        console.log(datos);
    })
  
  }

}
