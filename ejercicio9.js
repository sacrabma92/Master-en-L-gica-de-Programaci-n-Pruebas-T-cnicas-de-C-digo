/**
Dados dos arrays, devolver array con solo los elementos comunes entre ambos. 

Ejemplos:
elementosComunes([4,5,6,7], [7,8,9,5]) //Devuelve : [5, 7]
 */

function elementosComunes(arreglo1, arreglo2){
    //Filtrar los elementos. elemento = numero del arreglo1
    const filtrado = arreglo1.filter(elemento =>{
        //arreglo2 mira si esta el elemento del arreglo1
        return arreglo2.includes(elemento)
    });
    return(filtrado)
}

console.log(elementosComunes([4,5,6,7], [7,8,9,5]));
console.log(elementosComunes(["carlos","paco", "angelica"], ["carlos","angelica","jorge", "mauricio"]));