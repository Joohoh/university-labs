/* 1. Fazer um programa para entrar com 10 números inteiros e
imprimir a metade de cada um dos números lidos. */

//ENTRADA
const prompt = require("prompt-sync")();

//PROCESSAMENTO
function dividirNumeros(){
    let divisor = 0;
    for(let contador = 1; contador <= 10; contador++){
        let numero = Number(prompt(`Digite um número: `));
        divisor = numero/2;
        console.log(`A metade de ${numero} é ${divisor}`);
    }
    
}

//SAIDA
dividirNumeros();