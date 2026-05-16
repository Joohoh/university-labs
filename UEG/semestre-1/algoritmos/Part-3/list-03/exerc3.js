/* Fazer um programa que leia um número inteiro positivo, calcule e
escreva se o número lido é um número perfeito ou não. Número
perfeito é aquele cuja soma de seus divisores, exceto ele próprio, é
igual ao número.
i. Exemplo: 6 é um número perfeito porque 1 + 2 + 3 = 6.
a. 8 não é um número perfeito porque 1 + 2 + 4 = 7. */

const prompt = require("prompt-sync")();

// PROCESSAMENTO
function calcularNumeroPerfeito(numero){
    let somaDivisores = 0;

    for(let valor = 1; valor < numero; valor++){
        if (numero % valor === 0){
            somaDivisores += valor;
        }
    }

    if (somaDivisores === numero) {
        console.log(`O número ${numero} é perfeito.`);
    } else {
        console.log(`O número ${numero} não é perfeito.`);
    }
}

// ENTRADA DE DADOS
let numero = Number(prompt(`Digite um valor: `));

// SAIDA
calcularNumeroPerfeito(numero);