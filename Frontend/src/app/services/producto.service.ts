import { Character } from '../interfaces/empresa.interface';
import { Producto } from './../interfaces/producto.interface';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  constructor(private http: HttpClient) { }

  buscarProducto() { //info de la base relacional
    return this.http.get<Producto[]>("http://localhost:3000/producto/all");
  }

  buscarCharacterInfo(id: string) {//sin uso
    if(id){
      return this.http.get<Character>(`https://rickandmortyapi.com/api/character/${id}`);
    }

  }
}
