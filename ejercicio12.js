/*
Dado un número mostrar todos los números desde ese al 0 de 8 en 8 en una lista con guione y cada numero debe empezar por n°
*/

function hastaCero(num){
    let numero = "";

    for(let i = num; i >= 0; i -= 8){
        numero += `- n° ${i} \n`
    }

    return numero
}


console.log(hastaCero(100))
console.log("---- FIN ----")

// Otra version

function hastaCerro(numero){
    let resultado = `--- Del ${numero} al 0 ----\n`;

    while(numero > 0){
        resultado += `- n°${numero}\n`;
        numero -= 8;
    }
    resultado += "--- FIN ----";

    return resultado;
}

console.log(hastaCerro(1000))