/**
Dado un numero entero, invertirlo y devuelve de nuevo el entero

ejemplo:
invertirNumero(67)  // Devuelve: 76
*/

function invertirNumero(numero){
    //0 parseamos el numero a entero
    //1 convertimos el numuero a cadena
    //2 El método split() divide un objeto de tipo String en un array (vector) de cadenas mediante la separación de la cadena en subcadenas.
    //3 El método reverse() invierte el orden de los elementos de un array. El primer elemento pasa a ser el último y el último pasa a ser el primero.
    //4 El método join() une todos los elementos de una matriz (o un objeto similar a una matriz) en una cadena y devuelve esta cadena.
    //5 Math.sign(numero) obtiene el simbolo y le deja el mismo simbolo en caso de ser negativo 
    const revertir = parseInt(numero.toString().split("").reverse().join("")) * Math.sign(numero);
    console.log(typeof revertir)
    return revertir;
}


console.log(invertirNumero(43))