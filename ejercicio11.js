/*
Dado un texto y una busqueda, cesurar todas las coincidencias de la busqueda en el texto con [-CENSURADO]

Si el texto y la busqueda están vacios mostrar
"No puedes leer el texto y la busqueda" en el caso de que ambos parametros no lleguen.
*/

function censurado(texto= false, censura = false){
    let resultado = "";
    // Si el texto y censura son false. NO llego parametros. false && false -> entra
    if(!texto && !censurado){
        resultado = "No puedes leer el texto y la busqueda";
        // false && true -> entra
    }else if(!texto && censura){
        resultado = "No puedes leer el texto";
        // true && false -> entra
    }else if(texto && !censura){
        resultado = "No puedes hacer la busqueda"
        // Si pasaron el texto y la busqueda
    }else if(texto && censura){
        // RegExp - hacer una expresion regular de forma sencilla
        resultado = texto.replace(new RegExp(censura, 'gi'), "[-CENSURADO-]")
    }

    

    return resultado;
}

console.log(censurado("Hola soy una busqueda", "busqueda"))