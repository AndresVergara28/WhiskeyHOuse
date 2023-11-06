renderProducts(whiskeys);


function renderProducts(whiskeys) {
    for (const whiskey of whiskeys) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        productCard.innerHTML =
            `
            <div class="product-card-image">
                    <img src=${whiskey.image} alt="Imagen referencia de ${whiskey.category}" class="product-image">
            </div>
            <div class="product-card-information">
                    <h3 class="product-name">${whiskey.name}</h3>
                    <h3 class="product-second-name">${whiskey.secondName}</h3>
                    <h4 class="product-category">${whiskey.category}</h4>
                    <p class="product-volume">${whiskey.volume}</p>
                    <p class="product-price">${whiskey.price} COP</p>
            </div>           
            `
        const addToCartImg = document.createElement('img');
        addToCartImg.setAttribute('src', '../recursos/iconos/carritoMas.png');
        addToCartImg.setAttribute('id', `${whiskey.codigo}`);
        addToCartImg.classList.add('add-to-card-button');
        addToCartImg.addEventListener('click', addToContainerCart)
        productCardContainerList.appendChild(productCard);
        productCard.appendChild(addToCartImg);
    }
}

function getIndex(el) {
    for (let index = 0; index < carritoCompras.length; index++) {
        const codigo = carritoCompras[index].codigo;
        if ((codigo === el.codigo)) {
            return index;
        }
    }
}

function actualizarTotal(valor) {
    totalDisplay.innerText = valor + ' COP';
}

function addToContainerCart(e) {
    const codigo = parseInt(e.target.id);
    const isThisInCart = (carritoCompras.find((el) => el.codigo === codigo)) ? true : false;
    const whiskey = whiskeys.find((el) => el.codigo === codigo);

    if (!isThisInCart) {
        const itemAñadido = {
            codigo: whiskey.codigo,
            name: whiskey.name,
            secondName: whiskey.secondName,
            category: whiskey.category,
            price: whiskey.price,
            volume: whiskey.volume,
            image: whiskey.image,
            count: 1,
            total: whiskey.price,
        };
        carritoCompras.push(itemAñadido);
        Swal.fire(
            '¡Añadido al Carrito!',
            `${itemAñadido.name} ${itemAñadido.secondName} ${itemAñadido.volume}`,
            'success'
        );
        renderizarEnCarrito(itemAñadido);
        localStorage.setItem(`carritoCompras`, JSON.stringify(carritoCompras));
        const newTotalFactura = carritoCompras.reduce((acumulador, el) => acumulador + el.total, 0);
        actualizarTotal(newTotalFactura);
    } else {


        const position = getIndex(whiskey);
        carritoCompras[position].total += carritoCompras[position].price;
        carritoCompras[position].count++;
        localStorage.setItem(`carritoCompras`, JSON.stringify(carritoCompras));
        const newCantidad = carritoCompras[position].count;
        const newTotal = carritoCompras[position].total;
        const newTotalFactura = carritoCompras.reduce((acumulador, el) => acumulador + el.total, 0);
        actualizarTotal(newTotalFactura);
        actualizarCant(newCantidad, newTotal, codigo);
        return
    }

    function actualizarCant(quantity, total, codigo) {
        const quantityOut = document.getElementById(`quantity_product_${codigo}`);
        const totalOut = document.getElementById(`total_product_${codigo}`);
        quantityOut.innerText = quantity;
        totalOut.innerText = total + ' COP';
    }


}

function renderizarEnCarrito(el) {
    /*    <div class="product-card">
     <div class="product-card-image">
         <img src="../recursos/imagenes/deluxe12años1000.png" alt="">
     </div>
     <div class="product-card-information-container">
         <div class="product-card-information">
             <h3 class="product-name">Bucanas</h3>
             <h3 class="product-second-name">Deluxe 12 años</h3>
             <h4 class="product-category">Whiskey</h4>
             <p class="product-volume">750ml</p>
             <p class="product-price">150000 COP</p>
         </div>
         <div class="product-card-modificar">
             <p class="restar">-</p>
             <p class="cantidad">X</p>
             <p class="sumar">+</p>
         </div>
     </div>
 </div> */

    const productCard = document.createElement('div');
    productCard.classList.add('product-card');
    productCard.setAttribute('id', `cont_id_${el.codigo}`);
    /* Creando div class= 'product-card-image' */
    const divProductCartImage = document.createElement('div');
    divProductCartImage.classList.add('product-card-image');
    /* Creando img src ='' class ='product-image' */
    const imgCarrito = document.createElement('img');
    imgCarrito.classList.add('product-image');
    imgCarrito.setAttribute('src', el.image);
    /* Agregando la imagen al div class = 'product-card-image' */
    divProductCartImage.appendChild(imgCarrito);
    /* --------------------------------------- */
    /* Creando div class = 'product-card-information-container */
    const divProductCardInformationContainer = document.createElement('div');
    divProductCardInformationContainer.classList.add('product-card-information-container');
    /* Crenaod el primer div interno de div class ='product-card-information-container */
    const divPrimerInterno = document.createElement('div');
    divPrimerInterno.classList.add('product-card-information');
    /* Creando elementos internos del primerInterno = ' product-card-information' */
    const productName = document.createElement('h3');
    productName.classList.add('product-name');
    productName.innerText = el.name;
    divPrimerInterno.appendChild(productName);
    const productSecondName = document.createElement('h3');
    productSecondName.classList.add('product-second-name');
    productSecondName.innerText = el.secondName;
    divPrimerInterno.appendChild(productSecondName);
    const productCategory = document.createElement('h4');
    productCategory.classList.add('product-category');
    productCategory.innerText = el.category;
    divPrimerInterno.appendChild(productCategory);
    const productVolume = document.createElement('p');
    productVolume.classList.add('product-volume');
    productVolume.innerText = el.volume;
    divPrimerInterno.appendChild(productVolume);
    const productPrice = document.createElement('p');
    productPrice.classList.add('product-price');
    productPrice.setAttribute('id', `total_product_${el.codigo}`);
    productPrice.innerText = el.total + ' COP';
    divPrimerInterno.appendChild(productPrice);
    /* Creando segundo interno de div class = 'product-card-information-container' */
    const divSegundoInterno = document.createElement('div');
    divSegundoInterno.classList.add('product-card-modificar');
    /* Creando elementos interno del segundo Div interno */
    const restarSign = document.createElement('p');
    restarSign.classList.add('restar');
    restarSign.setAttribute('id', `res_btn_${el.codigo}`);
    restarSign.innerText = '-';
    restarSign.addEventListener('click', reducirCantidad);
    divSegundoInterno.appendChild(restarSign);
    const cantidad = document.createElement('p');
    cantidad.classList.add('cantidad');
    cantidad.setAttribute('id', `quantity_product_${el.codigo}`);
    cantidad.innerText = el.count;
    divSegundoInterno.appendChild(cantidad);
    const sumarSign = document.createElement('p');
    sumarSign.classList.add('sumar');
    sumarSign.setAttribute('id', `sum_btn_${el.codigo}`);
    sumarSign.innerText = '+';
    sumarSign.addEventListener('click', agregarCantidad);
    divSegundoInterno.appendChild(sumarSign);
    divProductCardInformationContainer.appendChild(divPrimerInterno);
    divProductCardInformationContainer.appendChild(divSegundoInterno);
    /* Agregando  Div al Div productCard */
    productCard.appendChild(divProductCartImage);
    productCard.appendChild(divProductCardInformationContainer);
    /* Agregando productCart a la Contenedor de productos del carrito */
    productCardContainerCart.appendChild(productCard);
}

for (let index = 0; index < carritoCompras.length; index++) {
    const product = carritoCompras[index];
    renderizarEnCarrito(product);
    const newTotalFactura = carritoCompras.reduce((acumulador, el) => acumulador + el.total, 0);
    actualizarTotal(newTotalFactura);

}


function actualizarCant(quantity, total, codigo) {
    const quantityOut = document.getElementById(`quantity_product_${codigo}`);
    const totalOut = document.getElementById(`total_product_${codigo}`);
    quantityOut.innerText = quantity;
    totalOut.innerText = total + ' COP';
}

function agregarCantidad(e) {
    e.preventDefault();
    const codigo = Number((e.target.id).slice(8));
    const item = carritoCompras.find((el) => el.codigo === codigo);
    const position = getIndex(item);

    carritoCompras[position].total += carritoCompras[position].price;
    carritoCompras[position].count++;
    localStorage.setItem(`carritoCompras`, JSON.stringify(carritoCompras))

    const newQuantity = carritoCompras[position].count;
    const newTotal = carritoCompras[position].total;
    const newTotalFactura = carritoCompras.reduce((acumulador, el) => acumulador + el.total, 0);
    actualizarCant(newQuantity, newTotal, codigo);
    actualizarTotal(newTotalFactura);
}

function reducirCantidad(e) {
    e.preventDefault();
    const codigo = Number((e.target.id).slice(8));
    const item = carritoCompras.find((el) => el.codigo === codigo);
    const position = getIndex(item);
    if (carritoCompras[position].count > 0) {
        carritoCompras[position].total -= carritoCompras[position].price;
        carritoCompras[position].count--;
        localStorage.setItem(`carritoCompras`, JSON.stringify(carritoCompras));

        if (carritoCompras[position].total == 0) {
            const newTotalFactura = carritoCompras.reduce((acumulador, el) => acumulador + el.total, 0);
            const newQuantity = carritoCompras[position].count;
            const newTotal = carritoCompras[position].total;
            actualizarCant(newQuantity, newTotal, codigo);
            actualizarTotal(newTotalFactura);
            const contenedorInDOm = document.getElementById(`cont_id_${codigo}`);
            contenedorInDOm.remove();
            carritoCompras.splice(position, 1);
            localStorage.setItem(`carritoCompras`, JSON.stringify(carritoCompras));
            return;
        };
        const newQuantity = carritoCompras[position].count;
        const newTotal = carritoCompras[position].total;
        const newTotalFactura = carritoCompras.reduce((acumulador, el) => acumulador + el.total, 0);
        actualizarCant(newQuantity, newTotal, codigo);
        actualizarTotal(newTotalFactura);
    };


}



