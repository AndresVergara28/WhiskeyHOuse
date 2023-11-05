const carritoCompras = [];


function verificarEdad() {
    let fechaNacimiento = new Date(prompt('Por Favor digita tu fecha de nacimiento en el formato (aaaa-mm-dd):'));
    let isMayorEdad = false;
    let diferencia;
    while (isMayorEdad === false) {
        diferencia = (new Date() - fechaNacimiento) / (1000 * 60 * 60 * 24 * 365);
        if (diferencia > 18) {
            isMayorEdad = true;
        } else {
            fechaNacimiento = new Date(prompt('Por Favor digitala nuevamente (aaaa-mm-dd):'));
        }
    }


    return console.log('Tu fecha de nacimiento es: ' + (fechaNacimiento.getDate() + 1) + '/' + (fechaNacimiento.getMonth() + 1) + '/' + (fechaNacimiento.getFullYear()) + ' por tanto tienes ' + Math.floor(diferencia)) + 'años';
}

function mostrarCatalogo() {
    for (const whiskey of whiskeys) {
        console.log('Para realizar la comprar seleccionar numero de Codigo:');
        console.log('Cod:' + whiskey.codigoProducto + ' - ' + whiskey.nombreProducto + ' - ' + whiskey.volumenProducto + ' - ' + whiskey.precioProducto);
    }
    let firstDecision = parseInt(prompt('Digita 1 para comprar o 2 para saltar:'));

    if (firstDecision === 1) {
        let codProductChosen = parseInt(prompt('Digite el Cod del producto que desea añadir al carrito: '));
        whiskeys[codProductChosen].addToCart();
        let secondDecision = parseInt(prompt('¿Desea seguir comprando? Digite 1 = SI , 2 = NO'));
        while (secondDecision === 1) {
            let codProductChosen = parseInt(prompt('Digite el Cod del producto que desea añadir al carrito: '));
            whiskeys[codProductChosen].addToCart();
            secondDecision = parseInt(prompt('¿Desea seguir comprando? Digite 1 = SI , 2 = NO'));
        }

    } else { return (console.log('Catalogo de productos mostrado')) };
};

function finalizarPedido() {
    const resultadoReduce = carritoCompras.reduce((acumulador, el) => acumulador + el.precioProducto, 0);
    for (const item of carritoCompras) {
        console.log(item);
    }

    console.log('El total de su pedido seria: '+ resultadoReduce + ' COP');
}   

class Producto {
    constructor(codigoProducto, categoriaProducto, marcaProducto, nombreProducto, volumenProducto, precioProducto) {
        this.codigoProducto = codigoProducto;
        this.categoriaProducto = categoriaProducto.toUpperCase();
        this.marcaProducto = marcaProducto.toUpperCase();
        this.nombreProducto = nombreProducto.toUpperCase();
        this.volumenProducto = volumenProducto;
        this.precioProducto = parseInt(precioProducto);
        this.vendido = false;
    }


    generarFactura() {
        alert('Acabas de comprar un ' + this.categoriaProducto + ' de la casa ' + this.marcaProducto + '. Referencia: ' + this.nombreProducto + ' x ' + this.volumenProducto + ' a un valor de: ' + this.precioProducto + ' COP');

    }
    addToCart() {
        this.vendido = true;
        carritoCompras.push(this);
    }
}

const whiskeys = [];

whiskeys.push(new Producto(0, "Whiskey", 'Buchanas', 'Deluxe 12 años', '750 ml', 142500));
whiskeys.push(new Producto(1, "Whiskey", 'Buchanas', 'Master', '750 ml', 167700));
whiskeys.push(new Producto(2, "Whiskey", 'Buchanas', 'Two souls', '750 ml', 176800));
whiskeys.push(new Producto(3, "Whiskey", 'Buchanas', 'Deluxe 12 años', '1 litro', 211400));
whiskeys.push(new Producto(4, "Whiskey", 'Buchanas', 'Master', '1 litro', 181500));
whiskeys.push(new Producto(5, "Whiskey", 'Buchanas', 'Special reserve', '750 ml', 345100));
whiskeys.push(new Producto(6, "Whiskey", 'Buchanas', 'Deluxe 12 años', '375 ml', 82000));
whiskeys.push(new Producto(7, "Whiskey", 'Buchanas', 'Red Seal', '750 ml', 800000));



verificarEdad();
mostrarCatalogo();
finalizarPedido();












