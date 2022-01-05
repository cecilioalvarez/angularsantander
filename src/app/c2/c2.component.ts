import { Component, OnInit } from '@angular/core';
import { Producto } from '../producto';

@Component({
  selector: 'app-c2',
  templateUrl: './c2.component.html',
  styleUrls: ['./c2.component.css']
})
export class C2Component implements OnInit {
  
  p1:Producto = {} as Producto
  constructor() { }
  
  ngOnInit(): void {
  }
  pulsar() {

    //alert("has pulsado");
    this.p1= new Producto(2,"tablet",300);
  }
}
