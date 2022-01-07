
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Factura } from '../factura';
import { FacturaRESTService } from '../factura-rest.service';
import { Location } from '@angular/common'
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {

  fdetalle:Factura={} as Factura;
  constructor(private servicio:FacturaRESTService, private location:Location,private route: ActivatedRoute) { 



  }

  ngOnInit(): void {

    this.route.paramMap.subscribe((parametros)=> {

      let numero:number =parametros.get("numero") as unknown as number;
      this.servicio.BuscarUno(numero).subscribe((datos)=> {


        this.fdetalle=datos;
      })
     

    })

  }
 volver() {

    this.location.back();
 }
 

}
