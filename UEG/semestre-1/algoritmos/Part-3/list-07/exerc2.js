/* 2. Fazer um programa para entrar com 15 números inteiros e
imprimir o quadrado de cada um dos números lidos. */

//ENTRADA
const prompt = require("prompt-sync")();

//PROCESSAMENTO
function elevarNumeros(){
    let quadrado = 0;
    for(let contador = 1; contador <= 15; contador++){
        let numero = Number(prompt(`Digite um número: `));
        quadrado = numero**2;
        console.log(`O quadrado de ${numero} é ${quadrado}`);
    }
    
}

//SAIDA
elevarNumeros();