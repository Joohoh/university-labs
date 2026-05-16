/* Fazer um algoritmo que:
● Leia dois números inteiros positivos (N1, N2);
● Calcule e escreva para este par de números (N1, N2), o máximo
divisor comum.
Obs.: utilizar o método das divisões sucessivas. */

const prompt = require("prompt-sync")();

const numero1 = Math.abs(Number(prompt(`Digite um valor para A: `)));
const numero2 = Math.abs(Number(prompt(`Digite um valor para B: `)));

function calcularMaximoDivisorComum(n1, n2) {
    
    while (n2 !== 0) {
        let resto = n1 % n2; 
        n1 = n2; 
        n2 = resto; 
    }

    return n1;
}

console.log(`O MDC de ${numero1} e ${numero2} é: ${calcularMaximoDivisorComum(numero1, numero2)}`);