//13. Escribir una función llamada mostrarArreglo que reciba un arreglo numérico como parámetro e imprima cada elemento en una línea a parte.

function mostrarArreglo(arreglo){ // Declaramos la función

    for(let i = 0 ; i < arreglo.length ; i++){ //Recorremos el arreglo 
        console.log(arreglo[i]); // Mostramos los elementos por consola
    }
}

let array = [34, 72, 15, 89, 5, 61, 93, 28, 50, 77]; //Declaramos el arreglo

mostrarArreglo(array); //Llamamos a la función