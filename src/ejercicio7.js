let nombres = ["luis", "felipe", "carlos", "jorge", "esteban", "juan"];
let nombrelar = nombres[0];
for (let i = 1; i < nombres.length; i++){
    console.log("Nombre actual: " + nombres[i])
    if (nombres[i].length > nombrelar.length)
        nombrelar = nombres[i];
}
console.log("El nombre más largo es: " + nombrelar);