function duplicar(arreglo){
    let tamaño = arreglo.length-1; //Tamaño del arreglo
    let aux = []; //Nuevo arreglo
    while(tamaño>=0){
        aux[tamaño]=arreglo[tamaño]*2;
        tamaño--;
    }
    return aux;
}
let arreglo = [1,2,3,4,5,6,7];//Declaracion del arreglo
let resultado = duplicar(arreglo);//Guardar el nuevo arreglo
console.log("Arreglo original: ",arreglo);
console.log("Nuevo arreglo: ",resultado);