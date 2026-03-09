/* Uma pessoa resolveu fazer uma aplicação programada. Para
calcular seu rendimento, ela deverá fornecer o valor constante
da aplicação mensal, a taxa e o número de meses. Sabe-se
que a fórmula usada para este cálculo é:

valoracumulado=((1+i^n - 1))/i * P

onde i = taxa, P = aplicação mensal e n = número de meses. */

const prompt = require("prompt-sync")();

const aplicacaoMensal = Number(prompt("Digite o valor da sua aplicação mensal: "));
const numeroDeMeses = Number(prompt("Digite a quantidade de meses de aplicação: "));
const taxa = Number(prompt("Digite o valor da taxa mensal: "));

const valorAcumulado = (((1 + taxa)** numeroDeMeses - 1) / taxa) * aplicacaoMensal; 

console.log(`Seu rendimento foi de: R$ ${valorAcumulado.toFixed(2)}`);

