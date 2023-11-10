const productCardContainerList = document.querySelector('.products-section-container');
const productCardContainerCart = document.querySelector('#carrito-de-compras');
const totalDisplay = document.querySelector('#total_display');
class Producto {
    constructor(codigo, name, secondName, category, volume, price, image) {
        this.codigo = codigo;
        this.name = name;
        this.secondName = secondName;
        this.category = category;
        this.volume = volume;
        this.price = parseInt(price);
        this.image = image;
    }
}

const whiskeys = [];
whiskeys.push(new Producto(0, 'Buchanas', 'Deluxe 12 años', 'Whiskey', '750 ml', 142500, '../recursos/imagenes/deluxe12años750.png'));
whiskeys.push(new Producto(1, 'Buchanas', 'Deluxe Master', 'Whiskey', '750 ml', 167700, '../recursos/imagenes/deluxeMaster750.png'));
whiskeys.push(new Producto(2, 'Buchanas', 'Two souls', 'Whiskey', '750 ml', 176800, '../recursos/imagenes/deluxeTwoSoul750.png'));
whiskeys.push(new Producto(3, 'Buchanas', 'Deluxe 12 años', 'Whiskey', '1 Litro', 211400, '../recursos/imagenes/deluxe12años1000.png'));
whiskeys.push(new Producto(4, 'Buchanas', 'Deluxe Master', 'Whiskey', '1 Litro', 181500, '../recursos/imagenes/deluxeMaster1000.png'));
whiskeys.push(new Producto(5, 'Buchanas', 'Special reserve', 'Whiskey', '750 ml', 345100, '../recursos/imagenes/specialReserve750.png'));
whiskeys.push(new Producto(6, 'Buchanas', 'Deluxe 12 años', 'Whiskey', '375 ml', 82000, '../recursos/imagenes/deluxe12años375.png'));
whiskeys.push(new Producto(7, 'Buchanas', 'Red Seal', 'Whiskey', '750 ml', 800000, '../recursos/imagenes/redSealBlended750.png'));
whiskeys.push(new Producto(8, 'Jhonnie Walker', 'Red Label', 'Whiskey', '750 ml', 70100, '../recursos/imagenes/redLabel750.png'));
whiskeys.push(new Producto(9, 'Jhonnie Walker', 'Black Label', 'Whiskey', '750 ml', 145000, '../recursos/imagenes/blackLabel750.png'));
whiskeys.push(new Producto(10, 'Jhonnie Walker', 'Blue Label', 'Whiskey', '750 ml', 1098900, '../recursos/imagenes/blueLabel750.png'));
whiskeys.push(new Producto(11, 'Jhonnie Walker', 'Gold Label', 'Whiskey', '750 ml', 237000, '../recursos/imagenes/goldLabel750.png'));
whiskeys.push(new Producto(12, 'Jhonnie Walker', 'Red Label', 'Whiskey', '1 Litro', 90000, '../recursos/imagenes/redLabel750.png'));
whiskeys.push(new Producto(13, 'Jhonnie Walker', 'Black Label', 'Whiskey', '1 Litro', 184000, '../recursos/imagenes/blackLabel750.png'));
whiskeys.push(new Producto(14, 'The Famous Grouse', 'The Famous Grouse', 'Whiskey', '750 ml', 76500, '../recursos/imagenes/famous750.png'));
whiskeys.push(new Producto(15, 'Macallan', 'Double Cask 12 años', 'Whiskey', '750 ml', 465600, '../recursos/imagenes/macallan750.png'));

const carritoCompras =JSON.parse(localStorage.getItem('carritoCompras')) || [];


/* const objetoInStorage = JSON.parse(localStorage.carritoCompras);
for (let index = 0; index < objetoInStorage.length; index++) {
    const element = objetoInStorage[index];
    carritoCompras.push(element);
    
}; */




