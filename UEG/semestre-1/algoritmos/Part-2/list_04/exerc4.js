/* 4. Elabore um programa que calcule o valor final a ser pago em uma
compra feita na loja Vende Tudo, em sua promoção de final de ano.
Os produtos da loja possuem uma etiqueta colorida com o preço
unitário deste. Utilize a tabela a seguir para saber como efetuar o
cálculo adequado. Deve ser lido a cor da etiqueta, a quantidade do
produto e o seu valor unitário. Calcule e imprima o valor final do
produto com base na tabela abaixo.

Cor da Etiqueta

Quantidade de
Produtos

Desconto Final

Verde Até 10 5%
Verde Acima de 10 10%
Amarelo Até 5 15%
Amarelo Acima de 10 20% */ 

function calcularValorFinal(cor, quantidade, valorUnitario) {
    let valorTotal = quantidade * valorUnitario;

    if (cor === "verde") {
        if (quantidade <= 10) {
            return valorTotal - (valorTotal * 0.05);
        } else {
            return valorTotal - (valorTotal * 0.10);
        }
    } else if (cor === "amarelo") {
        if (quantidade <= 5) {
            return valorTotal - (valorTotal * 0.15);
        } else {
            return valorTotal - (valorTotal * 0.20);
        }
    }
}

const prompt = require("prompt-sync")();

let opcao = "S";

do {
    const corEtiqueta = prompt("Digite a cor da etiqueta (verde ou amarelo): ").toLowerCase();
    const quantidadeProduto = Number(prompt("Digite a quantidade do produto: "));
    const valorUnitarioProduto = Number(prompt("Digite o valor unitário do produto: "));
    
    const valorFinal = calcularValorFinal(corEtiqueta, quantidadeProduto, valorUnitarioProduto);
    console.log(`Valor final do produto: R$ ${valorFinal.toFixed(2)}`);
    
    opcao = prompt("Deseja continuar? [S/N]: ").toUpperCase();
} while (opcao === "S");

if (opcao === "N") {
    console.log("Programa encerrado!");
}