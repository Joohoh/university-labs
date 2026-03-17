/* Desenvolver um algoritmo para ler os comprimentos dos três
lados de um triângulo (L1, L2 e L3) e calcular a área do
triângulo de acordo com a fórmula: 
ÁREA = √(T * (T - L1) * (T - L2) * (T - L3)), onde T = (L1 + L2 + L3) / 2. */

function calcularAreaTriangulo(l1, l2, l3) {
    const t = (l1 + l2 + l3) / 2;
    const area = Math.sqrt(t * (t - l1) * (t - l2) * (t - l3));
    return area;
}

const prompt = require("prompt-sync")();

const l1 = Number(prompt("Digite o comprimento do lado 1 do triângulo:"));
const l2 = Number(prompt("Digite o comprimento do lado 2 do triângulo:"));
const l3 = Number(prompt("Digite o comprimento do lado 3 do triângulo:"));

const area = calcularAreaTriangulo(l1, l2, l3);

console.log(`A área do triângulo é: ${area.toFixed(2)} m².`);