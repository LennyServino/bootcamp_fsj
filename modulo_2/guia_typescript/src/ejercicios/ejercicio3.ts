/*  
    Crea una clase llamada Canción:
    Atributos: título, género de la canción y un atributo privado que se llame autor.

    Métodos: 
    •	Crear un constructor que reciba como parámetros el título y género de la canción.
    •	Utiliza los métodos get y set para recibir e imprimir la propiedad autor. 
    •	Crea un método para mostrar los datos de la canción. 
*/

export class Canción {
    titulo: string;
    genero: string;
    private autor: string;

    constructor(titulo: string, genero: string) {
        this.titulo = titulo;
        this.genero = genero;
        this.autor = '';
    }

    getAutor() {
        return this.autor;
    }

    setAutor(autor: string) {
        this.autor = autor;
    }

    mostrarDatosCancion(): void {
        console.log(`Titulo: ${this.titulo} \nGenero: ${this.genero} \nAutor: ${this.getAutor()}`);
    }
}