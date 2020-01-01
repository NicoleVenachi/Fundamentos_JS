var nicole = {
  nombre: 'Nicole',
  apellido: 'Venachi',
  edad: 21,
  peso: 62
}

console.log(`Al inicio del año ${nicole.nombre} pesa ${nicole.peso}`)

const INCREMENTO_PESO = 0.2
const DIAS_DEL_ANO = 365


const aumentarDePeso = persona => persona.peso += INCREMENTO_PESO
const adelgazar = persona => persona.peso -= INCREMENTO_PESO
for (var i = 1; i <= DIAS_DEL_ANO; i++) {
  var random = Math.random()

  if (random < 0.25) {
    //aumenta el peso
    aumentarDePeso(nicole)
  }
  else if (random <0.5) {
    //adelgaza
    adelgazar(nicole)
  }

}

console.log(`Al final del año ${nicole.nombre} pesa ${nicole.peso.toFixed(1)}`)
