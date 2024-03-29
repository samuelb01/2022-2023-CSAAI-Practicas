//-- Variables
var secretcode = document.getElementsByClassName("password");
var botones = document.getElementsByClassName("digito");
var cronom = document.getElementById("cronometro");
var start = true;
var guess = 0;

//-- Elementos de la gui
const gui = {
    display : document.getElementById("cronometro"),
    start : document.getElementById("start"),
    stop : document.getElementById("stop"),
    reset : document.getElementById("reset")
}

//-- Definir un objeto cronómetro
const crono = new Crono(gui.display);

//---- Configurar las funciones de retrollamada

//-- Arranque del cronometro
gui.start.onclick = () => {
    console.log("Start!!");
    crono.start();
}
  
//-- Detener el cronómetro
gui.stop.onclick = () => {
    console.log("Stop!");
    crono.stop();
    start = true;
}

//-- Reset del cronómetro
gui.reset.onclick = () => {
    console.log("Reset!");
    crono.reset();
    //-- Recarga la página para volver a empezar
    window.location.reload(); 
}

//-- Array que almacena números secretos
const secretkey = [];

//-- Generar números aleatorios con un valor máximo
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

//-- Generamos números secretos y los almacenamos en un array
for (let i = 0; i < 4; i++) {
    let rnum = getRandomInt(10);
    secretkey.push(rnum.toString());
}


//-- Mostramos el contenido del array de números secretos en la consola
console.log(secretkey)

//-- evaluar
function evaluar(valor) {
    var pos = 0;
    for (let key of secretkey) {
        if (key == valor) {
            secretcode[pos].innerHTML = key;
            secretcode[pos].style.color = "green";
            guess++;
        }
        
        console.log(guess);
        pos++;
    }
    
    if (guess == 4) {
        crono.stop();
        cronom.style.color = "green";
    }
}

//-- Pulsaciones
for (let boton of botones) {
    boton.onclick = (ev) => {
        if (start == true) {
            console.log(start);
            crono.start();
            start = false;
            console.log(start);
            cronom.style.color = "red";
        }
        evaluar(ev.target.value);
    }
}

