//Declarar una función con nombre calcularMayor() y pasarle como parámetros (numero1,numero2). Dentro de la función mostrar un alert que diga cuál de los números ingresados es mayor. En caso de ser iguales, tendrá que indicarlo a través de un alert también.
//Invocar la función y enviar los argumentos con diferentes números para probar.

function calcularMayor(numero1,numero2){
    if (numero1 > numero2){
        alert(`El primer número (${numero1}) es mayor`);
    }else if (numero1 < numero2){
        alert(`El segundo número (${numero2}) es mayor`);
    }else{
        alert(`Los números ingresados son iguales`);
    }
}

calcularMayor(5, 7);




