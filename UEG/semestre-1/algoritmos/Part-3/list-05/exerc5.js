/*  1. Fazer um programa que:
A. calcule o valor do cosseno de x através de 20 termos da série
seguinte:

seno(x) = x - x^3/3! + x^5/5! - x^7/7! +...

B. calcule a diferença entre o valor calculado no item a e o valor
fornecido pela função SIN(X);
C. imprima o que foi calculado nos itens a e b.
Observação: o valor de x é fornecido como entrada. */

const prompt = require("prompt-sync")();

let numero = Number(prompt(`Digite um numero: `));

function calcularCos(x){

    let fatorial = 1;
    let valor = 1;
    let contador = 3;
    let sinal = -1;
    let sine = x;

    const valorX = Math.sin(x)

    while(valor < 20){
        fatorial *= contador * (contador - 1);

        let termo = Math.pow(x, contador) / fatorial;

        sine += sinal * termo;
        
        contador += 2;
        sinal *= -1;
        valor++;
    }

    let subtracao = sine - valorX;

    console.log(`Valor de X em 20 termos é de: ${sine.toFixed(5)}`);
    console.log(`Diferença de valor de x e da função Sin(x) é de: ${Math.round(subtracao)}`);

}

calcularCos(numero);