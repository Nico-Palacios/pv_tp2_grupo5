import { seleccionar } from "/src/modulo_ejercicio20.js";

document.getElementById('pais').addEventListener('change', function(e) {
    const pais = e.target.value;
    seleccionar(pais)
    const capital = document.getElementById('capital').value;
    console.log(`El pais ${pais} y la ciudad ${capital} han sido seleccionados.`);
});

