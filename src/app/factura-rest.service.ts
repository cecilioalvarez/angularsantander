import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Factura } from './factura';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class FacturaRESTService {

  constructor(private http: HttpClient) { }

  public BuscarTodos():Observable<Factura[]> {
    
    return this.http.get<Factura[]>("http://localhost:3000/facturas");

  }
}
