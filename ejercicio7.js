/**
 Dados dos numeros, devolver cuantos numeros IMPARES hay entre ellos.
 */

 function numeros(num1, num2){
    let contador = 0;
        while(num1 < num2){
            if(num1 % 2 !== 0) contador++;
                // console.log(`El numero ${num1} es impar`)
            num1++
        }
    return contador
}


console.log("Numeros impares ", numeros(1,100))