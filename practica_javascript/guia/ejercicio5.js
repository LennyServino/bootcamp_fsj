/* Realizar una función para una tienda de coches en donde se deberá calcular:
Si el coche a la venta es un FORD FIESTA, aplicar un 5% de descuento en la compra. Si el
coche a la venta es un FORD FOCUS, el descuento será del 10% y si es un FORD ESCAPE
el descuento será del 20%. Mostrar en html el coche seleccionado y el descuento que se
aplicara en base a lo que selecciono el usuario */
function calcularDescuento() {
    let descuento = 0;
    const coche = document.getElementById('coche').value;

    switch (coche) {
        case 'FORD FIESTA':
            descuento = 5;
            break;
        case 'FORD FOCUS':
            descuento = 10;
            break;
        case 'FORD ESCAPE':
            descuento = 20;
            break;
    }

    document.getElementById('resultado').textContent = `El coche seleccionado es ${coche} y el descuento que se aplicara es del ${descuento}%`;
}