/**
 * ¿Cuanto es el X por ciento de X numero?
 * Ejemplo:
 * tantoPorCiento(20, 100) //Devuelve: 20
 * tantoPorCiento(43, 897) //Devuelve: 385.71
 */

let tantoPorCiento = (porcentaje, valor) => {
    let totalPorcentaje = 0;

    totalPorcentaje = valor * (porcentaje / 100);
    return totalPorcentaje;
}

console.log(tantoPorCiento(43, 897))