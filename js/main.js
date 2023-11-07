
/* INDEX.HTML*/
const quanValueIcoIndex = document.getElementById('quantity-value-icon-index');
const cartAsideProd = document.getElementById('cart-aside-product');
const cartAsideApeProd = document.getElementById('cart-aside-ope-product');
const cartAsideCieProd = document.getElementById('cart-aside-cie-product');

cartAsideApeProd.addEventListener('click',toggleCartAsideProduct);
cartAsideCieProd.addEventListener('click',toggleCartAsideProduct);

function toggleCartAsideProduct() {
    cartAsideProd.classList.toggle('inactive');
    
}

console.log(localStorage.carritoCompras);







/* btnCalcularEdad.addEventListener('click',calculaEdad)

function calculaEdad(name,apellido,edad) {
    console.log(inpNombre.value);
    console.log(inpApellido.value);    
}
 */

















