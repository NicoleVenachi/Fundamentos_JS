var nicole = {
  nombre: 'Nicole',
  apellido: 'Venachi',
  edad: 21,
  peso: 62
}

console.log(`Al inicio del año ${nicole.nombre} pesa ${nicole.peso}`)

const INCREMENTO_PESO = 0.3
const DIAS_DEL_ANO = 365
const META = nicole.peso - 3

var dias = 0
const aumentarDePeso = persona => persona.peso += INCREMENTO_PESO
const adelgazar = persona => persona.peso -= INCREMENTO_PESO
const comeMucho = () => Math.random() < 0.3 //true o false 30% de los dias
const realizaDeporte = () => Math.random() < 0.4 //true o false 40% de los dias

while (nicole.peso > META) {
  if(comeMucho()){
    //aumentar de peso
    aumentarDePeso(nicole)
  }
  if(realizaDeporte()){
    adelgazar(nicole)
  }

  dias += 1
}

console.log(`Pasaron ${dias} hasta que ${nicole.nombre} disminuyo ${META}kg`)
