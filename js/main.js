
const cartAside = document.querySelector('#cartAside');
const cartIconBtnApertura = document.querySelector('#cartIconBtnApt');
const cartIconBtnCierre = document.querySelector('#cartIconBtnCie');

cartIconBtnApertura.addEventListener('click',toggleCartAside);
cartIconBtnCierre.addEventListener('click',toggleCartAside);

function toggleMobileMenu() {
    mobileMenu.classList.toggle('inactive');
}
function toggleCartAside() {
    cartAside.classList.toggle('inactive');
    
}








/* btnCalcularEdad.addEventListener('click',calculaEdad)

function calculaEdad(name,apellido,edad) {
    console.log(inpNombre.value);
    console.log(inpApellido.value);    
}
 */

















