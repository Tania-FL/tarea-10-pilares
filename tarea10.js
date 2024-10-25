//EJERCICIO 1//

class Producto {
    constructor(nombre, precio, cantidad) {
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = cantidad;
    }

    valorTotalInventario() {
        return this.precio * this.cantidad;
    }

    mostrarInformacion() {
        return `Información del Producto:\n` +
               `Nombre: ${this.nombre}\n` +
               `Precio: $${this.precio.toFixed(2)}\n` +
               `Cantidad en inventario: ${this.cantidad}\n` +
               `Valor total en inventario: $${this.valorTotalInventario().toFixed(2)}`;
    }
}


function main() {
  
    const producto1 = new Producto("Blusa", 12, 45);
    const producto2 = new Producto("Jeans", 26, 55);
    
 
    console.log(producto1.mostrarInformacion());
    console.log();
    console.log(producto2.mostrarInformacion());
}

main();
