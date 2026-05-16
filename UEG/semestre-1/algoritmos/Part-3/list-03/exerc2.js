/* 2. O número primo é aquele que somente é divisível por ele mesmo e
pela unidade. Fazer um programa que leia um número inteiro positivo,
calcule e escreva se este é um número primo ou não. */

const prompt = require("prompt-sync")();

// PROCESSAMENTO
function calcularNumeroPrimo(numero){
    let divisores = 0;

    for(valor = 1; valor <= numero; valor++){
      
        if (numero % valor === 0){
           divisores++
        }
    }
        if (divisores === 2) {
        console.log(`O número ${numero} é primo.`);
        }      
        else {
        console.log(`O número ${numero} não é primo (ele tem ${divisores} divisores).`);
        }
      
}

// ENTRADA DE DADOS
let numero = Number(prompt(`Digite um valor: `));

// SAIDA
calcularNumeroPrimo(numero);
