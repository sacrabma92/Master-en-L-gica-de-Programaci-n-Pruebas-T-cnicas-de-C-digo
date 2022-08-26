/*
Dado un número, mostrar una escalera con escalares de "[-]" usando el numero para los niveles de la escalera.
*/

function escalera(num){

    let escalera_completa = "";

    for(let nivel = 1; nivel <= num; nivel++){
        let escalones = "";
        for(let escalon = 1; escalon <= nivel; escalon++){
            escalones += "[-]";
        }
        escalera_completa += escalones + "\n";
    }
    return escalera_completa
}

console.log(escalera(7))
