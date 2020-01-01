const MAYORIA_DE_EDAD = 18
var nicole = {
  nombre: 'Nicole',
  edad: 21,
  ingeniero: true,
  cocinero: false,
  cantante: false,
  rapero: true,
  guitarrista: false,
  gonorrea: true
}

var roberto = {
  nombre: 'Roberto',
  edad: 17
}

function imprimirProfesiones(persona) {
  console.log(`${persona.nombre} es:`)

  if (persona.ingeniero) {
    console.log('ingeniero')
  }
  if (persona.cocinero) {
    console.log('cantante')
  }
  if (persona.cantante) {
    console.log('cantante')
  }
  if (persona.rapero) {
    console.log('rapero')
  }
  if (persona.guitarrista) {
    console.log('guitarrista')
  }
  if (persona.gonorrea) {
    console.log('gonorrea')
  }
}
/*
var esMayorDeEdad = function (persona) {
  return persona.edad >= MAYORIA_DE_EDAD
}
*/
const esMayorDeEdad = persona => persona.edad >= MAYORIA_DE_EDAD
const esMenorDeEdad = persona => !esMayorDeEdad(persona)
function imprimirSiEsMayorDeEdad(persona) {
  if (esMayorDeEdad(persona)) {
    console.log(`${persona.nombre} es mayor de edad`)
  }
  else {
    console.log(`${persona.nombre} no es mayor de edad`)
  }
}

function permitirAcceso(persona) {
  if (esMenorDeEdad) {
    console.log('Acceso Denegado')
  }
}
