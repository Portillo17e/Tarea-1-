//Eduardo Danilo Rodriguez Portillo
//1646323

import { Persona } from './8';

let persona = new Persona("Miguel", 30, "Guatemala");

console.log("Nombre: ", persona.getNombre());
console.log("Edad: ", persona.getEdad());
console.log("Ciudad: ", persona.getCiudad());

persona.setNombre("Ana");
persona.setEdad(25);
persona.setCiudad("Madrid");

console.log("Nuevo Nombre: ", persona.getNombre());
console.log("Nueva Edad: ", persona.getEdad());
console.log("Nueva Ciudad: ", persona.getCiudad());