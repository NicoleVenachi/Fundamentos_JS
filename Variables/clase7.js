var nicole = {
  nombre: 'Nicole',
  apellido: 'Venachi',
  edad: '21',
}
var ludwing = {
  nombre: 'Ludwing',
  apellido: 'Palomino',
  edad:'21'
}

function imprimirNombreEnMayusculas(persona) {
  var {nombre} = persona
  console.log(nombre.toUpperCase())
}
imprimirNombreEnMayusculas(nicole)
