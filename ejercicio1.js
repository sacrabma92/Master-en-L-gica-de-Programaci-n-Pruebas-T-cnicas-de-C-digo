/**
 * Dado un número, devolver su tabla de multiplicar completa
*/

function tablaMultiplicar(num){
    console.log(`# Tabla del ${num}`);

    for(let i = 1; i <= 10; i++){
        console.log(`${i} + ${num} = ${i*num}`)
    }
}

tablaMultiplicar(4);