/* Uma locadora de charretes cobra R$8,50 de taxa para cada 3
horas de uso destas e R$3,50 para cada hora abaixo destas 3
horas. Fazer um algoritmo que, dado a quantidade de horas
que a charrete foi usada, calcule e escreva quanto o cliente
tem de pagar. */

function calcularValor(horas) {
    const tarifaBase = 8.50;
    const tarifaHora = 3.50;
    const horasBase = 3;

    const horasExtras = Math.trunc(horas / horasBase);
    const horasRestantes = horas % horasBase;
    const resultado = (horasExtras * tarifaBase) + (horasRestantes * tarifaHora);
    return resultado;

}

const prompt = require("prompt-sync")();

const horas = Number(prompt("Digite a quantidade de horas que a charrete foi usada:"));

const valorPagar = calcularValor(horas);

console.log(`O valor que o cliente tem de pagar é: R$${valorPagar.toFixed(2)}`);
