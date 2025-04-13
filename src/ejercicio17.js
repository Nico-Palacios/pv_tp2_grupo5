
function contadorAlerta(string){
    let contador = 0;
    for ( i = 0; i < string.length; i++){
        if(string[i] == 'a' || string[i] == 'A')
            contador++;
    }
console.log("La letra 'a' aparece " + contador + " veces." );
}
let auxiliar="manzana";
console.log("palabra ingresada: " + auxiliar)
contadorAlerta(auxiliar);