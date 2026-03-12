/* O custo ao consumidor de um carro novo é a soma do custo
de fábrica com a percentagem do distribuidor e dos impostos
(aplicados ao custo de fábrica). Supondo que a percentagem
do distribuidor seja de 12% do preço de fábrica e os impostos
de 30% do preço de fábrica, fazer um programa para ler o
custo de fábrica de um carro e imprimir o custo ao
consumidor. */

function calcularCustoCarroConsumidor(custoFabrica){
    const resultado = custoFabrica + (custoFabrica * 0.12) + (custoFabrica * 0.30);
    return resultado;
}

const prompt = require("prompt-sync")();
const custoFabrica = Number(prompt("Digite o valor de custo do veículo: R$ "));

const custoFinal = calcularCustoCarroConsumidor(custoFabrica);

console.log(`O custo final é de: R$ ${custoFinal}`);
