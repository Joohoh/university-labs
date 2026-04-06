/* O número 3025 possui a seguinte característica:
● 30 + 25 = 55
● 55**2 = 3025

Fazer um algoritmo que leia um número inteiro de 4 dígitos e calcule
se este tem a característica descrita acima.
Obs.: Usuário ideal - ele não irá digitar valores incorretos. */

function calcularCaracteristica(valor){
    const quociente = Math.trunc(valor / 100);
    const resto = valor % 100;
    const soma = quociente + resto;
    const resultadoElevacao = soma ** 2;

    //Opção 1 - Estrutura condicional simples
    if(resultadoElevacao === valor) return "Possui a característica descrita.";
    if(resultadoElevacao !== valor) return "Não possui a característica descrita.";

    //Opção 2 - Estrutura condicional composta
    // if(resultadoElevacao === valor) return "Possui a característica descrita.";
    // else return "Não possui a característica descrita.";
}

const prompt = require("prompt-sync")();

const numero = Number(prompt("Digite um numero com 4 algoritmos: "));

const resultado = calcularCaracteristica(numero);

console.log(`O numéro: ${numero} -> ${resultado}`);