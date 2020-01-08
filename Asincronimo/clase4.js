/* Uso JQuery para consultar API de SW */

const API_URL = 'https://swapi.co/api/' //API API_URL
const PEOPLE_URL = 'people/:id' // id de la persona a llamar en la API

const lukeUrl = `${API_URL}${PEOPLE_URL.replace(':id', 1)}`
const opts = {crossDomain: true} // peticion a otra página
const onResponse = function (data) {
  console.log(arguments)
  console.log(`Hola yo soy, ${data.name}`)
}
//El arguments es array con los aprametros que recibe la funcion
//El parametro, al ser el primero, tiene la data de la peticion

$.get(lukeUrl, opts, onResponse)  //request con JQUERY. Primero acepta URL completa de la peticion, segundo a donde hago la peticion, tercero callback (ejecutada si request es exitoso).
