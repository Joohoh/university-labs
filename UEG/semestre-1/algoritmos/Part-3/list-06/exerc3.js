/* Uma das maneiras de se conseguir a raiz quadrada de um número é
subtrair do número os ímpares consecutivos a partir de 1, até que o
resultado da subtração seja menor ou igual a zero. O número de vezes que
se conseguir fazer a subtração é a raiz quadrada exata(resultado 0) ou
aproximado do número(resultado negativo).
Exemplo: Raiz quadrada de 16 → 
16 – 1 =15; → 1
15 – 3 = 12; → 2
12 – 5 = 7; → 3
7 – 7 = 0 ; → 4
A raiz de 16 é 4. */

const prompt = require("prompt-sync")();

const numero = Number(prompt(`Digite um número: `));

function calcularRaizQuadrada(num) {
    let subtracao = 1;
    let contador = 0;  
    let resultado = num;

    while (resultado > 0) {
        resultado -= subtracao; 
        subtracao += 2;         
        contador++;             
    }

    return contador;
}

const raiz = calcularRaizQuadrada(numero);

console.log(`A raiz quadrada (exata ou aproximada) de ${numero} é: ${raiz}`);