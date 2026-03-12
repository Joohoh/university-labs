/* Uma pessoa resolveu fazer uma aplicação programada. Para
calcular seu rendimento, ela deverá fornecer o valor constante
da aplicação mensal, a taxa e o número de meses. Sabe-se
que a fórmula usada para este cálculo é:

valoracumulado=((1+i^n - 1))/i * P

onde i = taxa, P = aplicação mensal e n = número de meses. */

function calcularRendimento(valorAplicacaoMensal, taxa, numeroMeses){
    const taxaDecimal = taxa / 100;
    const rendimento = (((1 + taxaDecimal) ** numeroMeses - 1) / taxaDecimal) * valorAplicacaoMensal;
    return rendimento;
}

const prompt = require("prompt-sync")();
const valorAplic = Number(prompt("Digite o valor que foi aplicado: R$ "));
const tx = Number(prompt("Digite o valor da taxa: "));
const numMeses = Number(prompt("Digite a quantidade de meses: "));

const rendimentoTotal = calcularRendimento(valorAplic, tx, numMeses);

console.log(`O valor do seu rendimento final é de: R$ ${rendimentoTotal.toFixed(2)}`);
