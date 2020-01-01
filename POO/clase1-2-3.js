function Persona(nombre, apellido, altura) {
  this.nombre = nombre
  this.apellido = apellido
  this.altura = altura
}

Persona.prototype.saludar = function () {
  console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
}
Persona.prototype.soyAlto = function() {
  return this.altura >= 1.8
}
//Persona.prototype.soyAlto = () => this.altura >= 1.8

var nicole = new Persona('Nicole', 'Venachi', 1.75)
var sacha = new Persona('Sacha', 'Lifszyc', 1.82)
