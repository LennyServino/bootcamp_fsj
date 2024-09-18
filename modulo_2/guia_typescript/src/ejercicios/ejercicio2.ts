/*  Crear una clase Calculadora que contendrá los siguientes métodos:
•	Sumar
•	Restar
•	Multiplicar
•	Dividir
•	Potencia
•	Factorial
*/

export class Calculadora {
    sumar(a: number, b: number): number {
        return a + b;
    }

    restar(a: number, b: number): number {
        return a - b;
    }

    multiplicar(a: number, b: number): number {
        return a * b;
    }

    dividir(a: number, b: number): number {
        return a / b;
    }

    potencia(a: number, b: number): number {
        return Math.pow(a, b);
    }

    factorial(a: number): number {
        let factorial = 1;
        for (let i = 1; i <= a; i++) {
            factorial = factorial * i;
        }
        return factorial;
    }
}