import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { productos, response } from 'src/app/models/models.model';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {
  public url = environment.url;

  constructor(public http: HttpClient) { }

  getProductos() {
    return this.http.get<response>(this.url + 'pconceptos')
  }

  postProductos(data: productos) {
    return this.http.post<response>(this.url + 'pconceptos', data)
  }

  deleteProductos(id: number) {
    return this.http.post<response>(this.url + 'pconceptos/delete/' + id, id)
  }

  getOperacion() {
    return this.http.get<response>(this.url + 'poperacion')
  }

  postOperacion(data: productos) {
    return this.http.post<response>(this.url + 'poperacion', data)
  }

  getOperacionAgrupados() {
    return this.http.get<response>(this.url + 'poperacion/agrupados')
  }
}
