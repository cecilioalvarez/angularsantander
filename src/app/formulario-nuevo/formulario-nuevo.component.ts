import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Factura } from '../factura';
import { FacturaRESTService } from '../factura-rest.service';

@Component({
  selector: 'app-formulario-nuevo',
  templateUrl: './formulario-nuevo.component.html',
  styleUrls: ['./formulario-nuevo.component.css']
})
export class FormularioNuevoComponent implements OnInit {

  nuevaFactura={} as Factura;
  constructor(private servicio:FacturaRESTService,private router:Router) { }

  ngOnInit(): void {
  }

  insertar() {

    this.servicio.Insertar(this.nuevaFactura).subscribe(()=> {

      this.router.navigate(["lista"]);
    })
  }

}
