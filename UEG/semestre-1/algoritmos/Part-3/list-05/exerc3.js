/* Fazer um programa que calcule o valor de ex através da série:

e^x = x^0 + x^1/1! + x^2/2! + x^3/3! + ...

de modo que o mesmo difira do valor calculado através da função EXP de,
no máximo, 0,0001. O valor de x deve ser lido de uma unidade de entrada.
O algoritmo deverá escrever o valor de x, o valor calculado através da
série, o valor dado pela função EXP e o número de termos utilizados da
série. */

const prompt = require("prompt-sync")();

let numero = Number(prompt(`Digite um numero: `));

function calcularEx(numerador){

    let fatorial = 1;
    let serie = 1;
    let valor = 1;
    let termo = 1;

    const valorX = Math.exp(numerador)

    while(Math.abs(valorX - serie) > 0.0001){
        fatorial *= valor;

        termo = Math.pow(numerador, valor) / fatorial;
        
        serie += termo;
        valor++
    }

    console.log(`Valor de X: ${numero}`);
    console.log(`Valor pela série: ${serie.toFixed(6)}`);
    console.log(`Valor pela função EXP: ${valorX.toFixed(6)}`);
    console.log(`Número de termos utilizados: ${valor}`);

}

calcularEx(numero);

