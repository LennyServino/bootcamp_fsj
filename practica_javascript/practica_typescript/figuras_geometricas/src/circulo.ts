import FigurasGeometricas from "./figuras";

export class Circulo extends FigurasGeometricas {
    radio: number;

    constructor(radio: number) {
        super();
        this.radio = radio;
    }

    //Sobreescribimos el metodo
    calcularArea(): void {
        let result = Math.PI * Math.pow(this.radio, 2);
        console.log(`El area del circulo es ${result.toFixed(2)}`);
        
    }
}