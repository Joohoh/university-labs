/* 1. Fazer um algoritmo que leia um número inteiro positivo e mostre uma
mensagem indicando se este número é par ou ímpar.
Obs.: Usuário ideal - ele não irá digitar valores incorretos. */

function calcularParImpar(valor){
    const resto = valor % 2;
    
    //Opção 1 - Estrutura condicional simples
    if (resto === 0){
        return "PAR";
    }
    if (resto !== 0)
        return "IMPAR";
    
    //Opção 2 - Estrutura condicional composta
    // if(resto === 0) return "par";
    // else return "impar";
}

const prompt = require("prompt-sync")();

const numero = Number(prompt("Numero: "));

const resposta = calcularParImpar(numero);

console.log(`O número ${numero} é: ${resposta}`);