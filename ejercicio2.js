/**Enunciado Ejercicio 2:
 * Dada una cadena de texto, comparar si es un palindromo o no.
 * Los palindromos son palabras que se leen igual aun estando invertidas.
 * Por ejemplo: ana, bob, otto, allivessevilla
 * 
 * No teneren cuenta espacios o simbolos raros.
 */

function palindromo(palabra){
    let invertido = palabra.split("").reverse().join("")
    return invertido === palabra;
}

console.log(palindromo("ana"))