class Persona {
  constructor(nombre, apellido, altura) {
    this.nombre = nombre
    this.apellido = apellido
    this.altura = altura
  }
  saludar(fn) {
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
    if (fn) {
      fn(this.nombre, this.apellido, false)
    }
  }
  soyAlto() {
    return this.altura >= 1.8
  }
}

class Desarrollador extends Persona{
  constructor(nombre, apellido, altura) {
    super(nombre,apellido,altura)
  }
  saludar(fn) {
   console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y soy desarrollador/fn`)
   if (fn) {
     fn(this.nombre, this.apellido, true)
   }
  }
}

function responderSaludo(nombre, apellido, esDev) {
  console.log(`Buen día ${nombre} ${apellido}`)
  if (esDev) {
    console.log(`Ah mirá, no sabía que eras desarrollador`)
  }
}



var nicole = new Desarrollador('Nicole', 'Venachi', 1.75)
var sacha = new Persona('Sacha', 'Lifszyc', 1.82)
var erika = new Persona('Erika', 'Luna', 1.69)

nicole.saludar(responderSaludo)
sacha.saludar(responderSaludo)
erika.saludar(responderSaludo)
