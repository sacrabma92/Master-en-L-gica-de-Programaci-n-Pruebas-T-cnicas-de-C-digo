/**
 * Dada una cadena de texto, darle la vuelta e invertir el ordern de sus caracteres, sin usar metodos propios del lenguaje, solo estructuras de control.
 */

// Primera solucion
const invertir1 = cadena =>{
    let invertido = "";

    for(let letra of cadena){
        invertido = letra + invertido;
    }
    return invertido;
}


// Segunda solucion
const invertir2 = cadena => {
    let invertida = "";

    for(let i = cadena.length -1; i >= 0; i--){
        invertida += cadena[i]
    }
    return invertida;
}

console.log(invertir1("carlos"))