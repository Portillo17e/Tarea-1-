//Eduardo Danilo Rodriguez Portillo
//1646323

function factorial(n: number): number {
    if (n === 0) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

console.log("Factorial de 5: ", factorial(5));