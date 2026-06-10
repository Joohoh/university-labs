/* Fazer um programa para entrar com 100 números inteiros e
imprimir a raiz quadrada de cada um dos números lidos. */

//ENTRADA
const prompt = require("prompt-sync")();

//PROCESSAMENTO
function tirarRaizNumeros(){
    let raiz = 0;
    for(let contador = 1; contador <= 100; contador++){
        let numero = Number(prompt(`Digite um número: `));
        raiz = Math.sqrt(numero);
        console.log(`A raiz de ${numero} é ${raiz.toFixed(4)}`);
    }
    
}

//SAIDA
tirarRaizNumeros();