
//-- Punto de entrada: una vez cargada la página se llama a esta
console.log("Aquí comienza tu código JS...")

//-- Variables
var secretcode = document.getElementsByClassName("password")
var botones = document.getElementsByClassName("digito")
var start = true
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
    let rnum = getRandomInt(4);
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
            guess++;
        }
        
        console.log(guess);
        pos++;
    }
    
    if (guess == 4) {
        crono.stop();
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
        }
        evaluar(ev.target.value);
    }
}

