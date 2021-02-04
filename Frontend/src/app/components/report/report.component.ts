import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proveedor } from '../../interfaces/empresa.interface';
import { ProductoService } from './../../services/producto.service';
import { Producto } from './../../interfaces/producto.interface';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {
  productos_info: Producto[] = []; //para llenar el dropdownlist
  productos: any[] = [];
  proveedores: Proveedor[] = []; //para llenar la tabla de proveedor

  datos_filtrados: Producto[] = []
  productoFilter: any = { nombre: "", fecha: "" };
  filters: any = { nombre: "", fecha: ""};

  constructor(private productoSvc: ProductoService, private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.getProducto();
  }

  private getProducto(): void {
    this.productoSvc.buscarProducto().subscribe( (res:any) => {
      this.productos_info = res;
      this.datos_filtrados = res;
      let conjunto = new Set();
      for(let producto of this.productos_info){
        conjunto.add(producto.Nombre);
      }
      this.productos = Array.from(conjunto);
    });
  }


  requerimientoPorProducto(producto: string): void {
    this.productoSvc.buscarProveedorInfo(producto).subscribe( (res:any) => {
      this.proveedores = res;
    });
  }

  updateFilters(): void {
    this.filters = Object.assign({}, this.productoFilter);
  }

}
