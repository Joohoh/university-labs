/* 7. Elabore um algoritmo que calcule o valor a ser pago por um produto
considerando o preço normal de etiqueta e a escolha da condição de
pagamento. Utilize os códigos da tabela a seguir para saber qual a
condição de pagamento escolhida e efetuar o cálculo adequado.

Código Condições de Pagamento
1 À vista, dinheiro ou cheque, 10% de desconto
2 À vista, cartão de crédito, 5% de desconto
3 Em 2 vezes, preço normal da etiqueta sem juros
4 Em 3 vezes, preço normal da etiqueta + 10% de juros */

function calcularValor(preco, condicao){

    if(condicao === 1) return preco * 0.90;
    if(condicao === 2) return preco * 0.95;
    if(condicao === 3) return preco / 2;
    if(condicao === 4) return (preco * 1.10) / 3;
}

const prompt = require("prompt-sync")();

const precoProduto = Number(prompt("Digite o valor a ser pago: "));

console.log("Digite a condição de pagamento: \n" + 
    "1 - À vista em dinheiro ou cheque; \n" +
    "2 - À vista em cartão de crédito; \n" +
    "3 - Em 2 vezes; \n" + 
    "4 - Em 3 vezes; \n"
);
const condicaoPagamento = Number(prompt("Opção: "));

const resultado = calcularValor(precoProduto, condicaoPagamento);

console.log(`Na condição ${condicaoPagamento}, o valor fica em: R$ ${resultado.toFixed(2)}`);

