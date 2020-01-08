/* Múltiples request por cada personaje de la API */

const API_URL = 'https://swapi.co/api/' //API API_URL
const PEOPLE_URL = 'people/:id' // id de la persona a llamar en la API

const opts = {crossDomain: true} // peticion a otra página

function obtenerPersonaje(id, callback) {
  const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
  $.get(url, opts, function (people) {
    console.log(`Hola yo soy, ${people.name}`)
  }) //callback 1
  if (callback) {
    callback()
  } //callback 2
}

obtenerPersonaje(1, function () {
  obtenerPersonaje(2)
  }
)
