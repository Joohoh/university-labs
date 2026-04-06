 /* Fazer um programa que calcule e escreva para duas constantes
numéricas (numero1 e numero2) fixadas por atribuição os seguintes
itens:

● resultado1 = numero1 + numero2; -> adição
● resultado2 = numero1 - numero2; -> subtração
● resultado3 = numero1 * numero2; -> multiplicação
● resultado4 = numero1 / numero2; -> divisão - quociente
● resultado5 = numero1 % numero2 -> divisão - resto
● resultado6 = numero1
numero2
; -> potência
● resultado7 = Raiz quadrada(numero1);
● resultado8 = Raiz Cúbica(numero2). */

const numero1 = 9;
const numero2 = 2;

console.log("Número A = " + numero1 , " - Número B = " + numero2);

const resultado1 = numero1 + numero2;
console.log("Resultado Adição = " + resultado1);

const resultado2 = numero1 - numero2;
console.log("Resultado Subtração  = " + resultado2);

const resultado3 = numero1 * numero2;
console.log("Resultado Multiplicação  = " + resultado3);

const resultado4 = numero1 / numero2;
console.log("Resultado Divisão  = " + resultado4);

const resultado5 = numero1 % numero2;
console.log("Resto = " + resultado5);

const resultado6 = numero1 ** numero2;
console.log("Potencialização = " + resultado6);

const resultado7 = Math.sqrt(numero1);
console.log("Raiz quadrada = " + resultado7);

const resultado8 = Math.cbrt(numero1);
console.log("Raiz cubica = " + resultado8);
