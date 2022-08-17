/**
 * Dada una palabra, buscarla en una frase y devolver cuantas veces aparece en ella.
 * La frase y la palabra deben ser parametros de una funcion.
 * 
 * Ejemplos:
 * coincidencias("hola soy una palabra en una frase, PALABRA.", "palabra") //Devuelve 2
 * conincidencias("soy la frase", "carlos") // Devuelve 0
 */

function coincidencias(cadena, busqueda){
    // Quitamos del texto los caracteres !¡.,- y lo dejamos en minusculas
    let texto_limpio = cadena.toLowerCase().replace(/[!¡.,-]/gi, "");
    let resultado = 0;

    // MIramos que el texto incluya la palabra que buscamos si es asi entramos en el if
    if(texto_limpio.includes(busqueda)){
        // Separamos el texto que esten separados por espacio y creamos un array
        let palabras = texto_limpio.split(" ");
        let mapa = {};
        // Recorremos el arreglo sepaarado si la palabra esta le sumamos uno. Si es la primera vez la inicializamos en 1.
        for(let palabra of palabras){
            if(mapa[palabra]){
                mapa[palabra]++
            }else{
                mapa[palabra] = 1;
            }
        }
        //Retornamos el resultado que es la suma de las palabras que estamos buscando
        resultado = mapa[busqueda]
    }else{
        resultado = 0
    }
    return resultado;
}

console.log("Numero de coincidencias: ",coincidencias("hola soy una palabra en una frase, PALABRA.", "palabra"))
