/* Fazer um programa que:
A. calcule o valor do cosseno de x através de 20 termos da série
seguinte:

cosseno(x) = 1 - x^2/2! + x^4/4! - x^6/6! + x^8/8! - ...

B. calcule a diferença entre o valor calculado no item a e o valor
fornecido pela função COS(X);
C. imprima o que foi calculado nos itens a e b.
Observação: o valor de x é fornecido como entrada. */

const prompt = require("prompt-sync")();

let numero = Number(prompt(`Digite um numero: `));

function calcularCos(x){

    let fatorial = 1;
    let valor = 1;
    let contador = 2;
    let sinal = -1;
    let cosseno = 1;

    const valorX = Math.cos(x)

    while(valor <= 20){
        fatorial *= contador * (contador - 1);

        let termo = Math.pow(x, contador) / fatorial;

        cosseno += sinal * termo;
        
        contador += 2;
        sinal *= -1;
        valor++;
    }

    let subtracao = cosseno - valorX;

    console.log(`Valor de X em 20 termos é de: ${cosseno.toFixed(5)}`);
    console.log(`Diferença de valor de x e da função COS(x) é de: ${Math.round(subtracao)}`);

}

calcularCos(numero);