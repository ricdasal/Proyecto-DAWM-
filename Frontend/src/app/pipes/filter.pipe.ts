import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(productos: any, productoFilter: any): any {
    let fechaFiltro = new Date(productoFilter.fecha);
    fechaFiltro.setDate(fechaFiltro.getDate()+1);
    let nombreFiltro = productoFilter.nombre;
    const resultado = [];
    // console.log(fechaFiltro.toString()=="Invalid Date");

    if(nombreFiltro.lenght==0 && fechaFiltro.toString()=="Invalid Date"){
      // console.log("NADA");

      return productos;
    }

    for(const p of productos){
      // if(nombreFiltro > 1 || fechaFiltro.toString()!="Invalid Date"){
      let ingreso = new Date(p.FechaIngreso).toString();
      // console.log(`f ..${ingreso}..fecha..${fechaFiltro}..bool${fechaFiltro.toString()==ingreso}`);

      if(p.Nombre.toLowerCase().indexOf(nombreFiltro.toLowerCase()) > -1 || ingreso == fechaFiltro.toString()){
        // console.log("entra");

        resultado.push(p);
      }

      // }else if(fechaFiltro.toString()!="Invalid Date"){
      //   let ingreso = new Date(p.FechaIngreso).toString();
      //   if(ingreso = fechaFiltro.toString()){
      //     resultado.push(p);
      //   }
      // }
    }
    return resultado;

    // return productos.filter(p => {
    //   let ingreso = new Date(p.FechaIngreso).toString();
    //   let fechaFiltro = new Date(productoFilter.fecha);
    //   fechaFiltro.setDate(fechaFiltro.getDate()+1);
    //   let nombreFiltro = productoFilter.nombre;
    //   console.log(`fecha ${ingreso} ,,,,fechaFiltro ${fechaFiltro} bool ${ingreso==fechaFiltro.toString()}`);
    //   if(productoFilter.nombre.length > 1 || fechaFiltro.toString()!="Invalid Date"){
    //     return (p.Nombre.toLowerCase().indexOf(nombreFiltro.toLowerCase()) >= 0 || ingreso == fechaFiltro.toString());
    //   }
    //   return productos;
    // });
    // let nombre = productoFilter.nombre;
    // let fecha = productoFilter.fecha;
    // if(productoFilter.nombre)
    // const resultados = [];
    // for(const filtro of productos){
    //   console.log("productoFilter")
    //   if (filtro.Nombre.toLowerCase().indexOf(productoFilter.nombre.toLowerCase()) > -1){
    //     resultados.push(filtro);
    //   }
    // }
    // return resultados;
  }

}
