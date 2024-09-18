export class CabeceraPagina {
	private titulo: string;
	private color: string;
	private fuente: string;
	private alineacion: 'centrado' | 'derecha' | 'izquierda';

	constructor(titulo: string, color: string, fuente: string) {
		this.titulo = titulo;
		this.color = color;
		this.fuente = fuente;
		this.alineacion = 'izquierda'; // Valor por defecto
	}

	obtenerPropiedades(): { titulo: string, color: string, fuente: string } {
		return {
			titulo: this.titulo,
			color: this.color,
			fuente: this.fuente
		};
	}

	establecerAlineacion(alineacion: 'centrado' | 'derecha' | 'izquierda'): void {
		this.alineacion = alineacion;
	}

	imprimirPropiedades(): void {
		console.log(`Título: ${this.titulo}`);
		console.log(`Color: ${this.color}`);
		console.log(`Fuente: ${this.fuente}`);
		console.log(`Alineación: ${this.alineacion}`);
	}
}

