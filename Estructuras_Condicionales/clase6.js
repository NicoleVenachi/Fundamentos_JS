var contador = 0

const llueve = () => Math.random() < 0.25 //se cumple el 25% de las veces
do {
  contador++
} while(!llueve()) //se hace mientras no llueve

console.log(`Fui a ver si llovía ${contador} veces`)
