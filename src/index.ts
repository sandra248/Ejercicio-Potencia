let base: number = Number(prompt("Ingrese un número para la BASE"));
let exponente: number = Number(prompt("Ingrese un numero para el EXPONENTE"));
let resultado: number = 1;

for (let num: number = 0; num < exponente; num++) {
  resultado = resultado * base;
}
console.log("El resultado es:", resultado);
