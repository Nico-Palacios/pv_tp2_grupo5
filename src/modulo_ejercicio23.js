export function radios(){
    const radios = document.querySelectorAll(`input[name="lenguaje"]`);
    const resultado = document.getElementById(`resultado`);
        radios.forEach(radio =>{
            radio.addEventListener('change', () => {
                resultado.textContent = radio.value;
                console.log("Lemguaje seleccionado:", radio.value);
    });
});
}