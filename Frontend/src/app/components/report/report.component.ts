import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { take } from 'rxjs/operators';
import { Character } from './../../interfaces/character.interface';
import { ProductoService } from './../../services/producto.service';
import { Producto } from './../../interfaces/producto.interface';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {
  productos: Producto[] = []; //para llenar el dropdownlist
  datos_filtrados: Producto[] = []
  // character: Character = null; //para llenar la tabla
  productoFilter: any = { nombre: "", fecha: "" };
  filters: any = { nombre: "", fecha: ""};

  constructor(
    private productoSvc: ProductoService, private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.getProducto();
  }

  private getProducto(): void {
    this.productoSvc.buscarProducto().subscribe( (res:any) => {
      // this.productos = res.results;
      this.productos = res;
      this.datos_filtrados = res;
    })
  }


  // requerimientoPorCaracter(id: string): void {
  //   this.productoSvc.buscarCharacterInfo(id).subscribe( (res:any) => {
  //     this.character = res;
  //   });
  // }

  updateFilters(): void {
    this.filters = Object.assign({}, this.productoFilter);
  }

}
