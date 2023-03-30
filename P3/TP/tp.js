//-- Declaración de variables y objetos

//-- Obtención del canvas y de los elementos HTML a usar

//-- Función principal de actualización
function update() 
{
  //-- Implementación del algoritmo de animación:

  //-- 1) Actualizar posición de los elementos

  //-- 2) Borrar el canvas

  //-- 3) Pintar los elementos en el canvas

  //-- 4) Repetir
  requestAnimationFrame(update);
}

//-- Otras funciones....

//-- Hay que llamar a update la primera vez
update();