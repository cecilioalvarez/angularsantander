import { Injectable } from '@angular/core';
import { Producto } from './producto';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  private listaProducto:Producto[]=[];
  constructor() { 

    this.listaProducto.push( new Producto(1,"ordenador",200));
    this.listaProducto.push( new Producto(2,"tablet",300));
  }

  public BuscarTodos():Producto[] {

    return this.listaProducto;
  }

  public Borrar(producto:Producto):void {

    let posicion=this.listaProducto.indexOf(producto);
    this.listaProducto.splice(posicion,1);
  }

  public Insertar(producto:Producto):void {

    this.listaProducto.push(producto);

  }
}
