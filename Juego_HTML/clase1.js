//Traigo elementos html
const btnEmpezar = document.getElementById('btnEmpezar')
const celeste = document.getElementById('celeste')
const naranja = document.getElementById('naranja')
const verde = document.getElementById('verde')
const violeta = document.getElementById('violeta')

class Juego { //clase con logia del video juego
  constructor() {
    this.inicializar()
  }
  inicializar() {
    btnEmpezar.classList.add('hide')
  }
}

function empezarJuego() {
  var juego = new Juego()
}
