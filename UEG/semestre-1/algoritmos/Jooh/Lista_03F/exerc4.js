function calcularPrestacaoAtrasada(valorPrestacao, taxaJuros, tempoAtraso){
    const resultado = valorPrestacao + (valorPrestacao * (taxaJurosDecimal / 100) * tempoAtraso);
    return resultado;
}

const prompt = require("prompt-sync")();
const valPrestacao = Number(prompt("Digite o valor da prestação atual: R$ "));
const txJuros = Number(prompt("Digite o valor da taxa de juros: "));
const tempAtraso = Number(prompt("Digite o tempo de atraso: "));

const valorFinalPrestacao = calcularPrestacaoAtrasada(valPrestacao, txJuros, tempAtraso);

console.log(`O valor da parcela atualizada é de: R$ ${valorFinalPrestacao}`);
