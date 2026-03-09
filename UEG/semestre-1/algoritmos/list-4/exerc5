/* O custo ao consumidor de um carro novo é a soma do custo
de fábrica com a percentagem do distribuidor e dos impostos
(aplicados ao custo de fábrica). Supondo que a percentagem
do distribuidor seja de 12% do preço de fábrica e os impostos
de 30% do preço de fábrica, fazer um programa para ler o
custo de fábrica de um carro e imprimir o custo ao
consumidor. */

const prompt = require("prompt-sync")();

const custoDeFabrica = Number(prompt("Digite o custo de fábrica do carro: "));
const porcentagemDoDistribuidor = 0.12;
const impostos = 0.30;

const custoAoConsumidor = custoDeFabrica + (custoDeFabrica * porcentagemDoDistribuidor) + (custoDeFabrica * impostos);

console.log(`O custo ao consumidor do carro é: ${custoAoConsumidor.toFixed(2)}`);
