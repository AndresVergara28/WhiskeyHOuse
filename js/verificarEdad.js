const inpNombre = document.querySelector('#nombre');
const inpApellido = document.querySelector('#apellido');
const inpNacimiento = document.querySelector('#nacimiento');
const outEdad = document.querySelector('#verificarEdadOutput');
const btnCalcularEdad = document.querySelector('#verificarEdadButton');
const form = document.querySelector('#form')

const usuarios = [];
form.addEventListener('submit', verificar);
form.addEventListener('reset', limpiar);

function verificar(event) {
    event.preventDefault();
    const formulario = event.target.children;
    const infoUsuario = {
        nombre: formulario[0].children[1].value,
        apellido: formulario[1].children[1].value,
        fechaNacimiento: formulario[2].children[1].value,
    } 
    usuarios.push(infoUsuario);
    const fechaNacimiento = new Date(inpNacimiento.value);
    const diferencia = (new Date() - fechaNacimiento) / (1000 * 60 * 60 * 24 * 365.25);
    const edad = Math.floor(diferencia);
    let isMayorEdad = false;
    
    while (isMayorEdad === false) {
        if (edad >= 18) {
            isMayorEdad = true;
            outEdad.classList.remove('inactive');
            outEdad.innerText =`${infoUsuario.nombre} ${infoUsuario.apellido} tienes ${edad} años por tanto eres Mayor de Edad. Puedes navegar sin problema`;
            return
        } else {
            outEdad.classList.remove('inactive');
            outEdad.innerText =`${infoUsuario.nombre} ${infoUsuario.apellido} tienes ${edad} años por tanto eres Menor de Edad. No puedes navegar`;
            return
        }
    }
}

function limpiar() {
    outEdad.classList.add('inactive');
}