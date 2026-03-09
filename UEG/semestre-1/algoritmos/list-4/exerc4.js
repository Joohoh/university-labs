/*Ler dois números inteiros quaisquer para as variáveis A e B.
Efetuar a troca dos valores de forma que A passe a
armazenar o valor de B e que B passe armazenar o valor de
A. Imprimir os valores trocados. */

const prompt = require("prompt-sync")();

let A = Number(prompt("Digite um valor para A: "));
let B = Number(prompt("Digite um valor para B: "));

//Criar uma variável temporaria para poder fazer essa conversão
let temp = A;
A = B;
B = temp;

// Jeito moderno de fazer
// [A, B] =  [B, A];

console.log(`O valor de 'A' é: ${A} e o valor de 'B' é: ${B}`);
