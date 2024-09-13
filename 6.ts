//Eduardo Danilo Rodriguez Portillo
//1646323

let numeros: number[] = [1, 2, 3, 4, 5];
let suma: number = 0;

numeros.forEach((num) => {
    console.log(num);
    suma += num;
});

console.log("Suma total: ", suma);