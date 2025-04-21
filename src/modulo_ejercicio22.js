export function manejarInput(event) {
    const textoIngresado = event.target.value;
    const displayTexto = document.getElementById('displayTexto');

    
    displayTexto.textContent = textoIngresado;

    if (textoIngresado.length > 20) {
        displayTexto.style.backgroundColor = '#ffcccc'; 
    } else {
        displayTexto.style.backgroundColor = '#e9ecef';
    }
}