/* Muitos países estão passando a utilizar o sistema métrico.
Fazer um algoritmo para executar as seguintes conversões:
Ler uma temperatura dada em graus Fahrenheit e imprimir o
equivalente em Celsius: fahrenheit = 9/5 * C + 32. */

function calcularCelsius(fahrenheit) {
    const resultado = (5 / 9) * (fahrenheit - 32);
    return resultado;
}

const prompt = require("prompt-sync")();

const fahrenheit = Number(prompt("Digite a temperatura em graus Fahrenheit:"));

const celsius = calcularCelsius(fahrenheit);

console.log(`A temperatura em graus Celsius é: ${celsius.toFixed(2)}°C`);