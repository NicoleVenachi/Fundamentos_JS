//Traigo elementos html
const btnEmpezar = document.getElementById('btnEmpezar')
const celeste = document.getElementById('celeste')
const naranja = document.getElementById('naranja')
const verde = document.getElementById('verde')
const violeta = document.getElementById('violeta')

class Juego { //clase con logia del video juego

  constructor() {
    this.inicializar()
    this.generarSecuencia()
    this.siguienteNivel()
  }   //Cuando se instancia un objeto, implementa estos metodos, inicializa, genera secuencia y va al siguiente lvl (1 por defecto)

  inicializar() {
    btnEmpezar.classList.add('hide')
    this.nivel = 1
    this.colores = {
      celeste,
      naranja,
      verde,
      violeta
    } // a cada key le asigna como value el elemento html con el mismo nombre
  } //inicializa el juego, asignando el lvl, guardando colores/botones y eliminando botor empezar

  generarSecuencia() {
    this.secuencia = new Array(10).fill(0).map(n => Math.floor(Math.random() * 4))

  } //desde que se inicializa genero la secuencia a iluminar

  siguienteNivel() {
    this.iluminarSecuencia()
  } //cuando se llega al sgte nivel, se ilumina la nueva secuencia

  transformarNumeroAColor(numero) {
    switch (numero) {
      case 0:
          return 'celeste'
        break;
      case 1:
          return 'violeta'
        break;
      case 2:
          return 'naranja'
        break;
      case 3:
          return 'verde'
        break;
      default:

        break;

    }
  } //transforma número random a color

  iluminarSecuencia() {
    for (let i = 0; i < this.nivel; i++) {
      const color = this.transformarNumeroAColor(this.secuencia[i])  //debo usar let y no var,sino siempre se queda el resultado final de la sucuencia, asi con let o const el color se mantiene en todo el  bloque.
      setTimeout(() => this.iluminarColor(color), 1000 * i ) // los colores no se llaman de una, depende del color/patron
    }

  } //recorre el array de 1-10 veces (segun el lvl), iluminando la secuencia segun el lvl

  iluminarColor(color) {
    console.log(color)
    this.colores[color].classList.add('light') // a cualquier color le agrego su correpsondiente clase light
    setTimeout(() => this.apagarColor(color), 350) //trasn agregar light la quito
  } // ilumina un color en particular de los posibles, durante un tiempo

  apagarColor(color) {
    this.colores[color].classList.remove('light')
  }
}

function empezarJuego() {
  window.juego = new Juego()
} //OnClick empieza Juego, inicializando un objeto de la clase Juego
