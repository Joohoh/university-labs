/* O número 3025 possui a seguinte característica:

30 + 25 = 55
55 * 55 = 3025

Fazer um programa que pesquise e imprima todos os números de
quatro algarismos que apresentam tal característica. */

// PROCESSAMENTO
console.log('Números de quatro algarismos que apresentam a característica:');

function verificarCaracteristica(numero) {
    for (let valor = 1000; valor <= 9999; valor++) {
        let parte1 = Math.floor(valor / 100);
        let parte2 = valor % 100;
        let soma = parte1 + parte2;
        let quadrado = soma * soma;
        if (quadrado === valor) {
            console.log(`${valor} -> ${parte1} + ${parte2} = ${soma}, ${soma} * ${soma} = ${quadrado}`);
        }
    }
}

// SAIDA
verificarCaracteristica();