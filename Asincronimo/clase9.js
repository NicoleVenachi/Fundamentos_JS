/* Múltiples request por cada personaje de la API */

const API_URL = 'https://swapi.co/api/' //API API_URL
const PEOPLE_URL = 'people/:id' // id de la persona a llamar en la API

const opts = {crossDomain: true} // peticion a otra página

//retorna promesa, no recibe callback como  parametro
function obtenerPersonaje(id) {

  return new Promise(function (resolve, reject) {
    const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
    $.get(url, opts, function (data) {
      resolve(data) //cuando llegue la data resuelvo la promesa
    })
    .fail(() => reject(id))
  })

}

function onError(id){
  console.log(`Error al traer el personaje ${id}`)
}

function obtenerPersonajes() {
  var ids = [1, 2, 3, 4, 5, 6, 7]
  var promesas = ids.map(id => obtenerPersonaje(id))
  
  Promise
    .all(promesas)
    .then(personajes => console.log(personajes))
    .catch(id => console.log(`Fallo al traer el personaje número ${id}`))
}

obtenerPersonajes()


// obtenerPersonaje(1)
//   .then(personaje => {
//     console.log(`El personaje 1 es el ${personaje.name}`)
//     return obtenerPersonaje(2)
//   })
//   .then(personaje2 => {
//     console.log(`El personaje 2 es el ${personaje2.name}`)
//     return obtenerPersonaje(3)
//   })
//   .then(personaje3 => {
//     console.log(`El personaje 3 es el ${personaje3.name}`)
//   })
//   .catch(onError) //la puedo pasar por regerencia o invocar
