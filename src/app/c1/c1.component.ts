import { Component, OnInit } from '@angular/core';
import { Producto } from '../producto';

@Component({
  selector: 'app-c1',
  templateUrl: './c1.component.html',
  styleUrls: ['./c1.component.css']
})
export class C1Component implements OnInit {

  mensaje:string="hola soy un mensaje";
  p1:Producto;
  constructor() {

    this.p1= new Producto(1,"ordenador",200);

   }

  ngOnInit(): void {
  }

}
