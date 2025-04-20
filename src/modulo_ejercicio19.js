export function mostrardatos(){
        const nombre = document.querySelector(`#nombre`).value;
        const apellido = document.querySelector(`#apellido`).value;
        const libreta = document.querySelector(`#libreta`).value;
        if (nombre!=""&&apellido!=""&&libreta!="")
    alert(`Los datos ingresados son:\nNombre: ${nombre}\nApellido: ${apellido}\nLibreta Universitaria: ${libreta}`);
}
