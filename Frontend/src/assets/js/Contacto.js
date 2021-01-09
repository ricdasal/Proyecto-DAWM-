
 /* Guardar datos de contactanos */
const formulario = document.querySelector("#DatosContacto");
var datos  = [];
var objeto = {};

formulario.addEventListener('submit', (evento) => {
  evento.preventDefault();
  const datos = new FormData(evento.currentTarget);

  objeto({
    name: datos.get('name'),
    lastname: datos.get('apellido'),
    email: datos.get('mail'),
    dateBirth: datos.get('fecha'),
    city: datos.get('ciudad'),
    provincia: datos.get('provincias'),
    comentario: datos.get('comments'),
    promociones: datos.get('promociones')
  });
})