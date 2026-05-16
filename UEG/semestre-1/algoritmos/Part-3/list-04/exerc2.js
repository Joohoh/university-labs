/* Um número inteiro positivo é triangular se este for o resultado do
produto de três números naturais consecutivos.
Por exemplo, o número 120 é triangular porque 120 = 4*5*6.
Fazer um programa que:
● leia um número inteiro;
● verifique se o número é ou não triangular. Se for imprimir:
“Número Triangular” senão imprimir: “Número não Triangular”. */

const prompt = require('prompt-sync')();

// ENTRADA
const numero = Number(prompt('Digite um número inteiro: '));

// PROCESSAMENTO
function verificarTriangular(numero) {
    for (let valor = 1; valor * (valor + 1) * (valor + 2) <= numero; valor++) {
        if (valor * (valor + 1) * (valor + 2) === numero) {
            return `${valor} * ${valor + 1} * ${valor + 2}`;
        }
    }

}

// SAÍDA
if (verificarTriangular(numero)) {
    console.log('Número Triangular');
} else {
    console.log('Número não Triangular');
}