/* 
    Crea una clase llamada Cuenta y va contener lo siguiente:
    Atributos: nombre, cantidad, tipo de cuenta y número de cuenta.
    Métodos: 
    •Crear un constructor que reciba como parámetros el nombre, cantidad, tipo de cuenta y número de cuenta.

    •Crea un método llamado depositar y en base a la cantidad ingresada en el constructor haz una condición de que si la cantidad es menor a $5.00 que se imprima un mensaje que el valor a depositar debe ser mayor a $5.00 y sino solo imprima un mensaje de que se ha depositado correctamente y la cantidad depositada.
    
    •Crea un método llamado retirar, que reciba un parámetro llamado valor y en base a eso tienes que restar la cantidad menos el valor ingresado e imprimir un mensaje de lo que ha retirado y cuanto le queda en su cuenta.
    Nota: Para el método retirar debes de validar que lo que se retire sea mayor de $5.00 ya que si no hay efectivo debes de tirar un mensaje que no hay nada en la cuenta.

    •Crea un método para mostrar los datos de su nombre, tipo de cuenta y número de cuenta. 

    •Define un objeto de la clase Cuenta y llama sus métodos.
*/

export class Cuenta {
    nombre: string;
    cantidad: number;
    tipoCuenta: string;
    numeroCuenta: number;

    constructor(nombre: string, cantidad: number, tipoCuenta: string, numeroCuenta: number) {
        this.nombre = nombre;
        this.cantidad = cantidad;
        this.tipoCuenta = tipoCuenta;
        this.numeroCuenta = numeroCuenta;
    }

    depositar(cantidad: number): void {
        if (cantidad < 5) {
            console.log('El valor a depositar debe ser mayor a $5.00');
        } else {
            this.cantidad += cantidad;
            console.log(`Se ha depositado correctamente la cantidad de $${cantidad}`);
        }
    }

    retirar(valor: number): void {
        if (valor >= 5) {
            if (valor > this.cantidad) {
                console.log('No hay suficiente efectivo en la cuenta');
            } else {
                this.cantidad -= valor;
                console.log(`Se ha retirado la cantidad de $${valor}, le queda en su cuenta $${this.cantidad}`);
            }
        } else {
            console.log('El valor a retirar debe ser mayor a $5.00');
        }
    }

    mostrarDatos(): void {
        console.log(`Nombre: ${this.nombre}\nTipo de cuenta: ${this.tipoCuenta}\nNúmero de cuenta: ${this.numeroCuenta}`);
    }
}