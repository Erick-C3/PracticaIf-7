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


function mostrarPrecioFinal(valorDescuento){
    let valorProducto = document.querySelector("#precio_producto").value;
    let precioFinal = valorProducto * (1 - valorDescuento);
    document.querySelector("#precio_final").innerHTML = `
    <h5>Precio final del producto: $${precioFinal.toFixed(DECIMALES_PRECIO_FINAL)}</h5>
    <h6>Descuento aplicado: ${valorDescuento * BASE_PORCENTAJE} </h6>
    `;
}

function calcularPrecioFinal(){
    tipoProducto = document.querySelector("#tipo_producto").value;
  
    if( tipoProducto == NOMBRE_PRODUCTO_LACTEO){
        mostrarPrecioFinal( DESCUENTO_LACTEO);//todo lo que esta entre parentesis es un argumento
        /* precioFinal = valorProducto * (1 - DESCUENTO_LACTEO);
        document.querySelector("#precio_final").innerHTML = `
        <h5>Precio final del producto: $${precioFinal.toFixed(DECIMALES_PRECIO_FINAL)}</h5>
        <h6>Descuento aplicado: 50% </h6>
        `; */
    }else if(tipoProducto == NOMBRE_PRODUCTO_CARNE){
        mostrarPrecioFinal( DESCUENTO_CARNE);
        /* precioFinal = valorProducto * (1 - DESCUENTO_CARNE);
        document.querySelector("#precio_final").innerHTML = `
        <h5>Precio final del producto: $${precioFinal.toFixed(DECIMALES_PRECIO_FINAL)}</h5>
        <h6>Descuento aplicado: 25% </h6>
        `; */
    }else if(tipoProducto == NOMBRE_PRODUCTO_ENLATADO){
        mostrarPrecioFinal( DESCUENTO_ENLATADOS)
        /* precioFinal = valorProducto * (1 - DESCUENTO_ENLATADOS);
        document.querySelector("#precio_final").innerHTML = `
        <h5>Precio final del producto: $${precioFinal.toFixed(DECIMALES_PRECIO_FINAL)}</h5>
        <h6>Descuento aplicado: 70% </h6>
        `; */
    }else{        
        document.querySelector("#precio_final").innerHTML = `
        <h5>Tipo de producto o precio ingresado incorrectos</h5>
        `;
    }
}