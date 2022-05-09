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
const DESCUENTO_LACTEO = 0.5; // 50%
const DESCUENTO_ENLATADOS = 0.7; // 70%

const NOMBRE_PRODUCTO_CARNE = "carne";
const NOMBRE_PRODUCTO_LACTEO = "lacteo";
const NOMBRE_PRODUCTO_ENLATADO = "enlatado";

let tipoProducto = "tipo de producto por def";
let valorProducto = "precio por def";

let precioFinal = "precio final por def";

function calcularPrecioFinal(){
    tipoProducto = document.querySelector("#tipo_producto").value;
    valorProducto = document.querySelector("#precio_producto").value;

    if( tipoProducto == NOMBRE_PRODUCTO_LACTEO){
        precioFinal = valorProducto * (1 - DESCUENTO_LACTEO);
        document.querySelector("#precio_final").innerHTML = `
        <h5>Precio final del producto: $${precioFinal}</h5>
        <h6>Descuento aplicado: 50% </h6>
        `;
    }else if(tipoProducto == NOMBRE_PRODUCTO_CARNE){
        precioFinal = valorProducto * (1 - DESCUENTO_CARNE);
        document.querySelector("#precio_final").innerHTML = `
        <h5>Precio final del producto: $${precioFinal}</h5>
        <h6>Descuento aplicado: 25% </h6>
        `;
    }else if(tipoProducto == NOMBRE_PRODUCTO_ENLATADO){
        precioFinal = valorProducto * (1 - DESCUENTO_ENLATADOS);
        document.querySelector("#precio_final").innerHTML = `
        <h5>Precio final del producto: $${precioFinal}</h5>
        <h6>Descuento aplicado: 70% </h6>
        `;
    }else{        
        document.querySelector("#precio_final").innerHTML = `
        <h5>Tipo de producto o precio ingresado incorrectos</h5>
        `;
    }
}