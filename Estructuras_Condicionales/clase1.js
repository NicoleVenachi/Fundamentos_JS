var x = 4, y = '4'
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
imprimirProfesiones(nicole)
