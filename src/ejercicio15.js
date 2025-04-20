function retornar_mes(num_Ent){
    switch (num_Ent) {
        case 1:alert("ENERO")
        break;
        case 2:alert("FEBRERO")
        break;
        case 3:alert("MARZO")
        break;
        case 4:alert("ABRIL")
        break;
        case 5:alert("MAYO")
        break;
        case 6:alert("JUNIO")
        break;
        case 7:alert("JULIO")
        break;
        case 8:alert("AGOSTO")
        break;
        case 9:alert("SEPTIEMBRE")
        break;
        case 10:alert("OCTUBRE")
        break;
        case 11:alert("NOVIEMBRE")
        break;
        case 12:alert("DICIEMBRE")
        break;
        default:alert("No es un mes.");
            break;
    }
}
retornar_mes(Number(prompt("Escriba un numero entero, para determinar el mes: ")));
