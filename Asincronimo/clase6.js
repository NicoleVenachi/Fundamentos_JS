/* Múltiples request por cada personaje de la API */

const API_URL = 'https://swapi.co/api/' //API API_URL
const PEOPLE_URL = 'people/:id' // id de la persona a llamar en la API

const opts = {crossDomain: true} // peticion a otra página

function obtenerPersonaje(id, callback) {
  const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
  $.get(url, opts, callback).fail(function () {
    console.log(`Error al traer el personaje ${id}, y los siguientes`)
  })

}

obtenerPersonaje(1, function (personaje) { //recibe info pj del request
  console.log(`Hola yo soy, ${personaje.name}`)

  obtenerPersonaje(2, function (personaje){
      console.log(`Hola yo soy, ${personaje.name}`)

      obtenerPersonaje(3, function (personaje){
          console.log(`Hola yo soy, ${personaje.name}`)
          obtenerPersonaje(4, function (personaje){
              console.log(`Hola yo soy, ${personaje.name}`)
            })
        })
    })
})
