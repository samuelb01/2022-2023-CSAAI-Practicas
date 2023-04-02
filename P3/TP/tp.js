//-- Elementos de la gui
const gui = {
  display : document.getElementById("cronometro")
}

//-- Definir un objeto cronómetro
const crono = new Crono(gui.display);

//-- Declaración de variables y objetos
//-- Obtención del canvas y de los elementos HTML a usar
const canvas = document.getElementById("ctiro");
const ctx = canvas.getContext("2d");

//-- Dimensiones canvas
canvas.width = 700;
canvas.height = 400;

//-- Valores interfaz
// Velocidad
const vel_range = document.getElementById("vel_range");
const vel_range_disp = document.getElementById("vel_range_disp");
vel_range_disp.innerHTML = vel_range.value;

// Ángulo
const ang_range = document.getElementById("ang_range");
const ang_range_disp = document.getElementById("ang_range_disp");
ang_range_disp.innerHTML = ang_range.value;

//-- Coordenadas iniciales del proyectil
let xop = 0;
let yop = 50;
let xp;
let yp;

//-- Coordenadas iniciales del objetivo
let xomin = canvas.width - (canvas.width - 200);
let xomax = canvas.width - 25;
let xo = Number(getRandomInt(xomin, xomax)); //getRandomXO(xomin,xomax);
let yo = 370;

//--Declaración de velocidad y ángulo
let velp, angp;

//-- Gravedad terrestre y tiempo
const gt = 9.8;
let t = 0;

//-- Variable para controlar el uso de botones
var block = 0; //-- 0 = no bloqueo; 1 = bloqueo

//-- Variables de altura (h) y anchura (w) del proyectil para calcular colisión
//-- Variable radio (r) para calculo de colisión
let h, w, r;

//-- Variables para el punto de perímetro del proyectil más
//    cercano a la circunferencia objetivo (px, py)
let px, py;

//-- Acceder al botón de disparo
const btnLanzar = document.getElementById("btnLanzar");

//-- Acceder al botón de inicio
const btnIniciar = document.getElementById("btnIniciar");

//-- función para pintar el objetivo
function dibujarO(x,y) {
  //Radio circunferencia objetivo
  r = 25;

  //-- Pintando el objetivo
  ctx.beginPath();

  //-- Dibujar un circulo: coordenadas x,y del centro
  //-- Radio, Angulo inicial y angulo final
  ctx.arc(x, y, r, 0, 2 * Math.PI);
  ctx.strokeStyle = 'blue';
  ctx.lineWidth = 2;
  ctx.fillStyle = 'red';

  //-- Dibujar el relleno
  ctx.fill()    

  //-- Dibujar el trazo
  ctx.stroke();

  ctx.closePath();
}

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

    w = x;
    h = y;
}

function dibujarTiroP() {
  xp = xop + velp * Math.cos(angp * Math.PI / 180) * t; //Se calcula posición x del proyectil
  yp = yop + velp * Math.sin(angp * Math.PI / 180) * t - 0.5 * gt * t * t; //Se calcula posición y del proyectil
  t += 0.1; //La simulación avanza cada 0.1 segundos, para más lento disminuir éste número
}

//-- Dibujar el objetivo
dibujarO(xo,yo); // Pintar el objetivo
console.log(xo);
console.log(yo);

//-- Dibujar el proyectil en la posición inicial
dibujarP(xop, canvas.height-yop, 50, 50, "green"); // Pintar el proyectil

//-- Función principal de actualización
function lanzar() {
  //-- Implementación del algoritmo de animación:
  if (xp + 50 > canvas.width || xp < 0 || yp > canvas.height || yp - 50 < 0) {
    location.reload();
  }

  //-- Velocidad y ángulo incial del proyectil
  if (block == 0) {
    velp = Number(vel_range.value);
    angp = Number(ang_range.value);
  }

  //-- Comprobar si hay colisión
  // Círculo con centro en (xo, yo) y radio r
  // Rectángulo con esquina superior izquierda en (xop, yop) ancho w y altura h
  // Punto del perímetro del rectángulo más cercano a la circunferencia en (px,py)
  px = xo; // En principio son iguales
  if ( px < xop ) px = xop;
  if ( px > xop + w ) px = xop + w;
  py = yo;
  if ( py < yop ) py = yop;
  if ( py > yop + h ) py = yop + h;
  distancia = Math.sqrt( (xo - px)*(xo - px) + (yo - py)*(yo - py) );
  if ( distancia < r ) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.font = "25px Arial";
    ctx.fillStyle = 'yellow'
    ctx.fillText("Texto sólido", 10, 30);
  }

  //-- 1) Actualizar posición de los elementos
  dibujarTiroP();
  //-- 2) Borrar el canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  //-- 3) Pintar los elementos en el canvas
  dibujarO(xo,yo); // Pintar el objetivo

  dibujarP(xp, canvas.height-yp, 50, 50, "red"); // Pintar el proyectil

  //-- 4) Repetir
  block = 1;
  requestAnimationFrame(lanzar);
}

//-- Otras funciones....
console.log(block);
//-- Función de retrollamada del botón de disparo
btnLanzar.onclick = () => {
  if (block == 0) {
    lanzar();
  }
  block = 1;
}

//-- Función de retrollamada del botón de inicio
btnIniciar.onclick = () => {
  location.reload();
}

//-- Función genera numero aleatorio para la pos del onjetivo
function getRandomInt(min, max){
  return Math.floor(Math.random() * (max - min)) + min;
}

//-- Función para mostrar valore de la interfaz de velocidad
vel_range.oninput = () => {
  vel_range_disp.innerHTML = vel_range.value;
}  

//-- Función para mostrar valor de la interfaz ángulo
ang_range.oninput = () => {
  ang_range_disp.innerHTML = ang_range.value;
}  

//-- Hay que llamar a update la primera vez
//lanzar();