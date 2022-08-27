/*
Dado un string y un numero, repetir el string tantas veces como el numero indique.


Ejemplo:
repiteme("carlos", 2)
//Devuelve:
carlos carlos
*/

function repiteme(texto, cantidad){
    let repetir = "";
    for(let i = 0; i < cantidad; i++){
        repetir += `${texto} \n`;
    }
    return repetir;
}

console.log(repiteme("Angelica", 3))


// Funcion prototipo
String.prototype.repiteme = function(cantidad){
    let repetir = "";
    for(let i = 0; i < cantidad; i++){
        repetir += this;
    }
    return repetir;
}

console.log("Carlos Ramirez ".repiteme(55))