/*
Dado un array, dividirlo en tantos sub-arrays como se necesario basandonos en un numero que indique su tamaño.

Dividirlo en arrays de X elementos.

Ejemplo:
divideArray([7,8,9,10,7], 2)

//Devuelve:
[[7,8], [9,10],7]
*/

function divideArray(arreglo_principal, cantidad){
    let arreglos = []; // Declaramos 
    // Recorremos todo el arreglo
    for(let elemento of arreglo_principal){
        let ultimo = arreglos[arreglos.length - 1]

        if(!ultimo || ultimo.length === cantidad){
            arreglos.push([elemento])
        }else{
            ultimo.push(elemento)
        }
        console.log(arreglos)
    }
    return arreglos
}


console.log(divideArray([1,2,3,4,5,6,7,291], 3));