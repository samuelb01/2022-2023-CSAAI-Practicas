//-- Declaración de variables y objetos
//-- Posición del elemento a animar
let x = 0;
let y = 0;
let lx = 175;
let ly = 75;
let color = "green";


//-- Obtención del canvas y de los elementos HTML a usar
const canvas = document.getElementById("ctiro");
const ctx = canvas.getContext("2d");

//-- Dimensiones canvas
canvas.width = 400;
canvas.height = 200;

//-- Función que dibuja proyectil
function dibujarP(x, y, lx, ly, color) {
    ctx.beginPath();
    ctx.rect(x, y, lx, ly)
    ctx.fillStyle = color;
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
}

//-- Función principal de actualización
function update() {
    //-- Implementación del algoritmo de animación:

    //-- 2) Borrar el canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    //-- 3) Dibujar los elementos visibles
    dibujarP(x, y, lx, ly, color);

    //-- 4) Repetir
    requestAnimationFrame(update);
}

//-- Otras funciones....

//-- Hay que llamar a update la primera vez
update();












































// //-- Declaración de variables y objetos
// //-- Coordenadas iniciales del proyectil
// let xop = 5;
// let yop = 345;
// let xp = xop;
// let yp = yop;

// //-- Coordenadas iniciales del objetivo
// let xomin = 200;
// let xomax = 770;
// let xo = 500; //getRandomXO(xomin,xomax);
// let yo = 370;

// //-- Obtención del canvas y de los elementos HTML a usar
// const canvas = document.getElementById("ctiro");
// const ctx = canvas.getContext("2d");
// //-- Acceder al botón de disparo
// const btnLanzar = document.getElementById("btnLanzar");
// //-- Acceder al botón de inicio
// const btnIniciar = document.getElementById("btnIniciar");

// //-- Función de retrollamada del botón de disparo
// btnLanzar.onclick = () => {
//     lanzar();
// }

// //-- Función de retrollamada del botón iniciar
// btnIniciar.onclick = () => {
//     location.reload();
// }

// //-- función para pintar el proyectil
// function dibujarP(x,y,lx,ly,color) {

//     //-- Pintando el proyectil
//     ctx.beginPath();

//     //-- Definir un rectángulo de dimensiones lx x ly,
//     ctx.rect(x, y, lx, ly);

//     //-- Color de relleno del rectángulo
//     ctx.fillStyle = color;

//     //-- Mostrar el relleno
//     ctx.fill();

//     //-- Mostrar el trazo del rectángulo
//     ctx.stroke();

//     ctx.closePath();
// }

// //-- función para pintar el objetivo
// function dibujarO(x,y) {

//     //-- Pintando el objetivo
//     ctx.beginPath();

//     //-- Dibujar un circulo: coordenadas x,y del centro
//     //-- Radio, Angulo inicial y angulo final
//     ctx.arc(x, y, 25, 0, 2 * Math.PI);
//     ctx.strokeStyle = 'blue';
//     ctx.lineWidth = 2;
//     ctx.fillStyle = 'red';

//     //-- Dibujar el relleno
//     ctx.fill()    

//     //-- Dibujar el trazo
//     ctx.stroke();

//     ctx.closePath();
// }

// //-- Dibujar el objetivo
// dibujarO(xo,yo); // Pintar el objetivo

// //-- Dibujar el proyectil
// dibujarP(xop, yop, 50, 50, "green"); // Pintar el proyectil

// //-- Velocidad del proyectil
// let velp = 1;

// //-- Función principal de actualización
// function lanzar() 
// {
//   //-- Implementación del algoritmo de animación:

//   //-- 1) Actualizar posición de los elementos
//   xp = xp + velp;

//   //-- 2) Borrar el canvas
//   ctx.clearRect(0, 0, canvas.width, canvas.height);

//   //-- 3) Pintar los elementos en el canvas
//   dibujarO(xo,yo); // Pintar el objetivo

//   dibujarP(xp, yp, 50, 50, "blue"); // Pintar el proyectil

//   //-- 4) Repetir
//   requestAnimationFrame(lanzar);
// }

// //-- Otras funciones....

// //-- Hay que llamar a update la primera vez
// lanzar();