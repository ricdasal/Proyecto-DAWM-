// import { Proveedor } from '../interfaces/empresa.interface';
// import { Producto } from './../interfaces/producto.interface';
// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http'

// @Injectable({
//   providedIn: 'root'
// })
// export class LoginService {

//   constructor(private http: HttpClient) { }

//   buscarProducto() { //info de la base relacional
//     return this.http.get<Producto[]>("http://localhost:3000/producto/all");
//   }

//   buscarProveedorInfo(producto: string) {
//     if(producto){
//       return this.http.get<Proveedor>(`http://localhost:3000/proveedor/${producto}`);
//     }

//   }
// }