/* Ler uma quantidade de chuva dada em polegadas e imprimir o
equivalente em milímetros (1 polegada = 25,4 mm). */

function calcularMilimetros(polegadas) {
    const resultado = polegadas * 25.4;
    return resultado;
}

const prompt = require('prompt-sync')();

const polegadas = Number(prompt("Digite a quantidade de chuva em polegadas:"));

const milimetros = calcularMilimetros(polegadas);

console.log(`A quantidade de chuva em milímetros é: ${milimetros.toFixed(2)} mm`);