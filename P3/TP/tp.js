//-- Obtención del canvas y de los elementos HTML a usar
const canvas = document.getElementById("ctiro");
const ctx = canvas.getContext("2d");

//-- Dimensiones canvas
canvas.width = 700;
canvas.height = 400;

//-- Declaración de variables y objetos
//-- Coordenadas iniciales del proyectil
let xop = 0;
let yop = canvas.height - 50;
let xp = xop;
let yp = yop;

//-- Coordenadas iniciales del objetivo
let xomin = canvas.width - (canvas.width - 200);
let xomax = canvas.width;
let xo = getRandomInt(xomin, xomax); //getRandomXO(xomin,xomax);
let yo = 370;

//-- Velocidad del proyectil
let velp = 1;

//-- Acceder al botón de disparo
const btnLanzar = document.getElementById("btnLanzar");

//-- función para pintar el proyectil
function dibujarP(x, y, lx, ly, color) {

    //-- Pintando el proyectil
    ctx.beginPath();

    //-- Definir un rectángulo de dimensiones lx x ly,
    ctx.rect(x, y, lx, ly);

    //-- Color de relleno del rectángulo
    ctx.fillStyle = color;

    //-- Mostrar el relleno
    ctx.fill();

    //-- Mostrar el trazo del rectángulo
    ctx.stroke();

    ctx.closePath();
}

//-- Dibujar el proyectil en la posición inicial
dibujarP(xop, yop, 50, 50, "green"); // Pintar el proyectil

//-- Función principal de actualización
function lanzar() {
  //-- Implementación del algoritmo de animación:

  //-- 1) Actualizar posición de los elementos
  xp += velp;
  yp += -velp;

  //-- 2) Borrar el canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  //-- 3) Pintar los elementos en el canvas
  dibujarP(xp, yp, 50, 50, "black"); // Pintar el proyectil

  //-- 4) Repetir
  requestAnimationFrame(lanzar);
}

//-- Otras funciones....
//-- Función de retrollamada del botón de disparo
btnLanzar.onclick = () => {
    lanzar();
}

//-- Función genera numero aleatorio para la pos del onjetivo
function getRandomInt(min, max){
    boton.innerText = Math.floor(Math.random() * (max - min)) + min;
  }

//-- Hay que llamar a update la primera vez
//lanzar();