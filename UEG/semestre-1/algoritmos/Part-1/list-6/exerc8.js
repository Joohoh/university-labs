/* Escrever um algoritmo que lê:
● a percentagem do IPI a ser acrescido no valor das peças;
● o código da peça 1, valor unitário da peça 1, quantidade
de peças 1;
● o código da peça 2, valor unitário da peça 2, quantidade
de peças 2; 
O algoritmo deve calcular o valor total a ser pago e apresentar o
resultado.
FORMULA = (valor_peca1 * quant_peca1 + valor_peca2 * quant_peca2) * (IPI / 100 + 1);
*/

function calcularValorTotal(porcentagemIPI, codigoPeca1, valorPeca1, quantidadePeca1, codigoPeca2, valorPeca2, quantidadePeca2) {
    const valorTotal = (valorPeca1 * quantidadePeca1 + valorPeca2 * quantidadePeca2) * (porcentagemIPI / 100 + 1);
    return valorTotal;
}

const prompt = require("prompt-sync")();
const porcentagemIPI = Number(prompt("Digite a percentagem do IPI: "));
const codigoPeca1 = parseInt(prompt("Digite o código da peça 1: "));
const valorPeca1 = Number(prompt("Digite o valor unitário da peça 1: "));
const quantidadePeca1 = Number(prompt("Digite a quantidade da peça 1: "));
const codigoPeca2 = parseInt(prompt("Digite o código da peça 2: "));
const valorPeca2 = Number(prompt("Digite o valor unitário da peça 2: "));
const quantidadePeca2 = Number(prompt("Digite a quantidade da peça 2: "));

const valorTotal = calcularValorTotal(porcentagemIPI, codigoPeca1, valorPeca1, quantidadePeca1, codigoPeca2, valorPeca2, quantidadePeca2);

console.log(`O valor total a ser pago é: R$ ${valorTotal.toFixed(2)}`);