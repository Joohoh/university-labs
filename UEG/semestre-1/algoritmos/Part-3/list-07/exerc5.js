/* Fazer um programa para ler 20 números inteiros e imprimir
para cada um destes números se ele é par ou ímpar. */

//ENTRADA
const prompt = require("prompt-sync")();

//PROCESSAMENTO
function imprimirParImpar(){
    for(let contador = 1; contador <= 20; contador++){
        let numero = Number(prompt(`Digite um numero: `));
        if(numero%2==0){
            console.log(`O ${numero} é par!`)
        }else{ console.log(`O ${numero} é ímpar!`)}
    }
}

imprimirParImpar();