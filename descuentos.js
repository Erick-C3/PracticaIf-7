/*
    25% descuento para carnes
    50% descuento para lacteos
    70% descuento para enlatados

    recibimos:
        - tipo de producto
        - valor del producto 
        
    calcular:
        - precio final con descuento correspondiente
*/

const DESCUENTO_CARNE = 0.25;// 25%
const DESCUENTO_LACTEO = 0.4; // 50%
const DESCUENTO_ENLATADOS = 0.7; // 70%

const BASE_PORCENTAJE = 100;

const NOMBRE_PRODUCTO_CARNE = "carne";
const NOMBRE_PRODUCTO_LACTEO = "lacteo";
const NOMBRE_PRODUCTO_ENLATADO = "enlatado";

const DECIMALES_PRECIO_FINAL = 3;

// vectores - arrays  // grafos // base de datos relacionales y no relaciones
/* const MSJ_DESCUENTO_LACTEO = DESCUENTO_LACTEO*100 + "%"; // otra forma
const MSJ_DESCUENTO_CARNE = "25%";
const MSJ_DESCUENTO_ENLATADO = "70%"; */

let tipoProducto = "tipo de producto por def";
/* let valorProducto = "precio por def"; */

/* let precioFinal = "precio final por def"; */

/**
 * calcula el precio final
 * @param {Number} valorDescuento del tipo de producto a comprar
 * @returns el precio final
 */
function calcularPrecioFinal(valorDescuento){
    let valorProducto = document.querySelector("#precio_producto").value;
    let precioFinal = valorProducto * (1 - valorDescuento);
    return Number(precioFinal.toFixed(DECIMALES_PRECIO_FINAL));
}

/**
 * Pasa el valor de descuento de decimales a porcentaje
 * @param {Number} valorDescuento del tipo de producto a comprar
 * @returns valor de descuento expresado en porcentaje
 */
function descuentoMostrar(valorDescuento){
    return (valorDescuento * BASE_PORCENTAJE);
}

/**
 * Muestra informacion del precio final en la pagina
 * @param {Number} valorDescuento del tipo de producto a comprar
 */
function mostrarPrecioFinal(valorDescuento){
    document.querySelector("#precio_final").innerHTML = `
    <h5>Precio final del producto: $${calcularPrecioFinal(valorDescuento)}</h5>
    <h6>Descuento aplicado: ${ descuentoMostrar(valorDescuento)} </h6>
    `;
}

/**
 * Muestra el mensaje correspondiente en caso de que no se detecte el producto
 */
function mostrarMsjErrorTipoProducto(){
    document.querySelector("#precio_final").innerHTML = `
    <h5>Tipo de producto ingresado incorrectos o no esta en la lista</h5>
    `;
}

/**
 * Realiza la compra segun el tipo de producto detectado
 */
function realizarCompra(){
    tipoProducto = document.querySelector("#tipo_producto").value;
    switch (tipoProducto) {
        case NOMBRE_PRODUCTO_LACTEO:
            mostrarPrecioFinal( DESCUENTO_LACTEO);
            break;
        case NOMBRE_PRODUCTO_CARNE:
            mostrarPrecioFinal( DESCUENTO_CARNE);
            break;
        case NOMBRE_PRODUCTO_ENLATADO:
            mostrarPrecioFinal( DESCUENTO_ENLATADOS);
            break;    
        default:
            mostrarMsjErrorTipoProducto();            
    }
}