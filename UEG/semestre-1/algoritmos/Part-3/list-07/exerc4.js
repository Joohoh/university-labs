/* 4. Criar um programa que imprima a tabela de conversão de
graus Celsius e Fahrenheit para o intervalo desejado pelo
usuário. O algoritmo deve solicitar ao usuário o limite superior,
o limite inferior do intervalo e o decremento. Fórmula de
conversão: C =5 (F - 32) / 9. */

//ENTRANDA
const prompt = require("prompt-sync")();
const limiteSuperior = Number(prompt(`Digite o limite superior: `));
const limiteInferior = Number(prompt(`Digite o limite inferior: `));
const decremento = Number(prompt(`Digite o decremento: `));

//PROCESSAMENTO
function imprimirTabela(limiteSuperior, limiteInferior, decremento){
    let resultado = limiteSuperior;
    console.log(`-------------------------------`);
    console.log(`| Temperatura F | Temperatura em C |`)
    for(let contador = 1; limiteSuperior >= limiteInferior; contador++){
        let celsius = limiteSuperior;
        celsius =  5 * (limiteSuperior - 32) / 9;
        console.log(`       ${limiteSuperior}º           ${celsius.toFixed(2)}º        `);
        limiteSuperior -= decremento;
    }

}

//SAIDA
imprimirTabela(limiteSuperior, limiteInferior, decremento);