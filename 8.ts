//Eduardo Danilo Rodriguez Portillo
//1646323

class Persona {
    private nombre: string;
    private edad: number;
    private ciudad: string;

    constructor(nombre: string, edad: number, ciudad: string) {
        this.nombre = nombre;
        this.edad = edad;
        this.ciudad = ciudad;
    }

    // Setters
    public setNombre(nombre: string): void {
        this.nombre = nombre;
    }

    public setEdad(edad: number): void {
        this.edad = edad;
    }

    public setCiudad(ciudad: string): void {
        this.ciudad = ciudad;
    }

    // Getters
    public getNombre(): string {
        return this.nombre;
    }

    public getEdad(): number {
        return this.edad;
    }

    public getCiudad(): string {
        return this.ciudad;
    }
}

export { Persona };