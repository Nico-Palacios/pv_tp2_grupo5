export function radios(){
        radios.forEach(radio =>{
            radio.addEventListener('change', () => {
                resultado.textContent = radio.value;
                console.log("Lemguaje seleccionado:", radio.value);
    });
});
}