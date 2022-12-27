let importe = 250;
for (let i = 1; i <= 3; i++) {
    let cantidad = prompt("Ingrese la cantidad de empanadas que quiera.");
    let intento = i + " " + "de 3"
    if (cantidad >= 6 && cantidad <= 24) {
        alert("El pedido fue realizado con exito, el total a pagar es de $" + importe * cantidad);
        break;
    }
    else {
        alert("La cantidad ingresada no es correcta, por favor vuelva a realizar la operacion. " + intento);
    }
}