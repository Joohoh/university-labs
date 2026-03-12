/*Ler dois números inteiros quaisquer para as variáveis A e B.
Efetuar a troca dos valores de forma que A passe a
armazenar o valor de B e que B passe armazenar o valor de
A. Imprimir os valores trocados. */

function trocarVariaveis(a, b){
    return [b, a];
}

const prompt = require("prompt-sync")();
let a = parseInt(prompt("Digite um valor inteiro para A: "));
let b = parseInt(prompt("Digite um valor inteiro para B: "));

[a, b] = trocarVariaveis(a, b);

console.log(`O novo valor de A é: ${a} e de B é ${b}`);
