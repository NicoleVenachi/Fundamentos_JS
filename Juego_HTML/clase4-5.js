 //Traigo elementos html
const btnEmpezar = document.getElementById('btnEmpezar')
const celeste = document.getElementById('celeste')
const naranja = document.getElementById('naranja')
const verde = document.getElementById('verde')
const violeta = document.getElementById('violeta')
const ULTIMO_NIVEL = 3

class Juego { //clase con logia del video juego

  constructor() {
    this.inicializar = this.inicializar.bind(this)
    this.inicializar()
    this.generarSecuencia()
    setTimeout(this.siguienteNivel, 500)
  }   //Cuando se instancia un objeto, implementa estos metodos, inicializa, genera secuencia y va al siguiente lvl (1 por defecto)

  inicializar() {
    this.toggleBtnEmpezar()
    this.nivel = 1
    this.elegirColor = this.elegirColor.bind(this)
    this.siguienteNivel = this.siguienteNivel.bind(this)
    this.colores = {
      celeste,
      naranja,
      verde,
      violeta
    } // a cada key le asigna como value el elemento html con el mismo nombre
  } //inicializa el juego, asignando el lvl, guardando colores/botones y eliminando botor empezar

  toggleBtnEmpezar() {
    if( btnEmpezar.classList.contains('hide') ){
      btnEmpezar.classList.remove('hide')
    }
    else {
      btnEmpezar.classList.add('hide')
    }

  }
  generarSecuencia() {
    this.secuencia = new Array(10).fill(0).map(n => Math.floor(Math.random() * 4))

  } //desde que se inicializa genero la secuencia a iluminar

  siguienteNivel() {
    this.subNivel = 0 //Cada que avanza de nivel, su secuencia oprimida regresa a cero
    this.iluminarSecuencia() //ilumino secuencia
    this.agregarEventosClick() // escucho los botones
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

  transformarColorANumero(color) {
    switch (color) {
      case 'celeste':
          return 0
        break;
      case 'violeta':
          return 1
        break;
      case 'naranja':
          return 2
        break;
      case 'verde':
          return 3
        break;
      default:

        break;

    }
  } //transforma color a numero

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
  } //Vuelve al color previo a iluminar

  agregarEventosClick() {
    this.colores.celeste.addEventListener('click', this.elegirColor)
    this.colores.naranja.addEventListener('click', this.elegirColor)
    this.colores.verde.addEventListener('click', this.elegirColor)
    this.colores.violeta.addEventListener('click', this.elegirColor)
  } //Eventos de interaccion

  eliminarEventosClick() {
    this.colores.celeste.removeEventListener('click', this.elegirColor)
    this.colores.naranja.removeEventListener('click', this.elegirColor)
    this.colores.verde.removeEventListener('click', this.elegirColor)
    this.colores.violeta.removeEventListener('click', this.elegirColor)
  }

  elegirColor (ev) {
    const nombreColor = ev.target.dataset.color //obtengo color oprimido
    const numeroColor = this.transformarColorANumero(nombreColor)//obtengo el numero del color
    // los elementos html al asignarles la clase data-color, creo el dataset.color, el cual almacena este valor
    this.iluminarColor(nombreColor)

    if (numeroColor === this.secuencia[this.subNivel]){
      this.subNivel++
      if (this.subNivel === this.nivel){
        this.nivel++
        this.eliminarEventosClick()
        if (this.nivel === (ULTIMO_NIVEL +1)) {
          this.ganoElJuego()
        } //si alcanza lvl max
        else {
          setTimeout(this.siguienteNivel, 1500)
        } //si no alcanza lvl max
      }  //Hago acciones para cuando la secuencia se hace bien, y se llega o noa lvl max
    } //acerto
    else {
      this.perdioElJuego()
    }//perdio


  } //verifico que se orpima el color correcto, hago accioner para cuando la secuencia se hace bien, mal  o se llega a lvl max

  ganoElJuego() {
    // alert('Ganaste')
    // this.inicializar()

    swal({ //devuelve promesa
      icon: 'success',
      title: 'Felicitaciones',
      text: 'Ganaste el juego!'
    })
    .then(this.inicializar) //su cierre es la accion asincrona
  } //gana el juego, se inicializa de nuevo

  perdioElJuego() {
    // this.eliminarEventosClick()
    // alert('Perdiste')
    // this.inicializar()

    swal({ //devuelve promesa
      icon: 'error',
      title: 'Perdiste',
      text: 'Lo lamentamos, perdiste el Juego :( '
    })
    .then(() => {
          this.eliminarEventosClick()
          this.inicializar()
        })
  }

}

function empezarJuego() {
  window.juego = new Juego()
} //OnClick empieza Juego, inicializando un objeto de la clase Juego
