import { Component, OnInit } from '@angular/core';
import { Producto } from '../producto';
import { ProductosService } from '../productos.service';

@Component({
  selector: 'app-c5',
  templateUrl: './c5.component.html',
  styleUrls: ['./c5.component.css']
})
export class C5Component implements OnInit {

  listaProductos:Producto[]=[]
  nuevoProducto:Producto={} as Producto
  constructor(private servicio:ProductosService) { 

      this.listaProductos=servicio.BuscarTodos();

  }

  ngOnInit(): void {
  }

  borrar(producto:Producto) {
  
    this.servicio.Borrar(producto);
  
  }
  insertar() {
    let nuevo:Producto={} as Producto;
    Object.assign(nuevo,this.nuevoProducto);
    this.servicio.Insertar(nuevo);
    this.nuevoProducto={} as Producto;

  }

}
