/* 2. Desenvolver um algoritmo para calcular e imprimir o preço final de um
carro. O valor do preço inicial de fábrica é fornecido por um meio de
entrada. O carro pode ter as seguintes opções:
● (S,N) Ar condicionado: R$ 1750,00
● (S,N) Pintura Metálica: R$ 800,00
● (S,N) Vidro Elétrico: R$ 1200,00
● (S,N) Direção Hidráulica: R$ 2000,00.
Obs.: Usuário ideal - ele não irá digitar valores incorretos. */

function calcularValorCarro(precoInicial) {
    let total = precoInicial;

    if (prompt("Ar condicionado? (S/N): ") === "S") {
        total = total + 1750.00;
    }
    if (prompt("Pintura Metálica? (S/N): ") === "S") {
        total = total + 800.00;
    }
    if (prompt("Vidro Elétrico? (S/N): ") === "S") {
        total = total + 1200.00;
    }
    if (prompt("Direção Hidráulica? (S/N): ") === "S") {
        total = total + 2000.00;
    }

    return total;
}

const prompt = require("prompt-sync")();

let precoBase = Number(prompt("Digite o preço de fábrica: "));
let precoFinal = calcularValorCarro(precoBase);

console.log(`O preço final é: R$ ${precoFinal.toFixed(2)}`);