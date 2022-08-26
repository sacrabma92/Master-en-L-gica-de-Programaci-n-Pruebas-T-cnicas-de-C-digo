/** 
  Dibujar un cuadrado hueco con asteriscos
  
  //Devuelve
   ****
   *  *
   *  *
   **** 
 */

function tapas(numero){
    let lado = "";
    for(let i = 0; i < numero; i++){
        lado += "*";
    }
    return lado;
}
   
function cuadrado(numero){
  //Dibuja la tapa de arriba
  let dibujo = tapas(numero) + "\n";
  let contenido = ""

  // Le quitamos los asteriscos de las esquinas para que quede valor exacto al numero
  for(let i = 0; i < numero - 2; i++){
    //Añadimos la tapa de la izquierda
    contenido = "2";
    // Añade los espacios de la mitad del cuadrado. Le restanos dos para quitarle los espacios sobrantes
    for(let x =0; x < numero - 2; x++){
      contenido += " ";
    }
    // Añade la tapa de la derecha del cuadrado
    contenido += "9";

    dibujo += contenido  + "\n";
  }

  //Dibuja la tapa de abajo
  dibujo += tapas(numero);

  return dibujo;
}
   
console.log(cuadrado(50))