//Traigo elementos html
const btnEmpezar = document.getElementById('btnEmpezar')
const celeste = document.getElementById('celeste')
const naranja = document.getElementById('naranja')
const verde = document.getElementById('verde')
const violeta = document.getElementById('violeta')

class Juego { //clase con logia del video juego
  constructor() {
    //Cuando se inicializa un objeto, implementa estos metodos
    this.inicializar()
    this.generarSecuencia()
  }
  inicializar() {
    btnEmpezar.classList.add('hide')
    this.nivel = 1
    this.colores = {
      celeste,
      violeta,
      naranja,
      verde
    }
  }
  generarSecuencia() {
    this.secuencia = new Array(10).fill(0).map(n => Math.floor(Math.random() * 4))
  }
}

function empezarJuego() {
  window.juego = new Juego()
}
