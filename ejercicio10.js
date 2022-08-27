/*
Dado un número, mostrar una escalera con escalares de "[-]" usando el numero para los niveles de la escalera.
*/

function escalera(num){

    let escalera_completa = "";
    // La escalera comienza con el nivel 1
    for(let nivel = 1; nivel <= num; nivel++){
        let escalones = "";
        // Colocamos de forma horizontal la cantidad de escalones
        for(let escalon = 1; escalon <= nivel; escalon++){
            escalones += "[-]";
        }
        // Almacenamos la escalera en la variables
        escalera_completa += escalones + "\n";
    }
    //Retornamos toda la escalera construida
    return escalera_completa
}

console.log(escalera(7))
