/* Ler 200 números inteiros e imprimir quantos são pares e
quantos são ímpares. */

//ENTRADA
const prompt = require("prompt-sync")();

//PROCESSAMENTO
function imprimirParesImpares(){
    let quantidadePar = 0;
    let quantidadeImpar = 0;
    for(let contador = 1; contador <= 200; contador++){
        let numero = Number(prompt(`Digite um numero: `));
        if(numero % 2 == 0){
            quantidadePar++;
        }else{
            quantidadeImpar++;
        }
    }
    console.log(`A quantidade de números pares digitados é de: ${quantidadePar}`);
    console.log(`A quantidade de números ímpares digitados é de: ${quantidadeImpar}`);
}

//SAIDA
imprimirParesImpares();