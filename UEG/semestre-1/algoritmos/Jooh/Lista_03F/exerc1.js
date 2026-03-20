function calcularPontos(x1, x2, y1, y2){
    const pontos = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
    return pontos;
}

const prompt = require("prompt-sync")();
const a1 = Number(prompt("Digite o ponto A1: "));
const a2 = Number(prompt("Digite o ponto A2: "));
const b1 = Number(prompt("Digite o ponto B1: "));
const b2 = Number(prompt("Digite o ponto B2: "));

const distancia = calcularPontos(a1, a2, b1, b2);

console.log(`A distancia entre os pontos é de: ${distancia.toFixed(2)}`);