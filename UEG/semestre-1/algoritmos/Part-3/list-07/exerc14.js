/* 14. Um comerciante deseja fazer o levantamento do lucro das
mercadorias que ele comercializa. Para isto, mandou digitar
uma linha para cada mercadoria com nome, preço de compra
e preço de venda das mesmas. Fazer um programa que:
determine e escreva quantas mercadorias proporcionam:

lucro < 10%
10% ≤ lucro ≤ 20%
lucro > 20% 

Determine e escreva também o valor total de compras e de
vendas de todas as mercadorias, assim como o lucro total.
Observação: o aluno deve adotar um flag.*/

//ENTRADA
const prompt = require("prompt-sync")();

//PROCESSAMENTO
function verificarLucros(){
    let lucros = 0;
    let opcao = `S`;
    let quantidade1 = 0;
    let quantidade2 = 0;
    let quantidade3 = 0;
    let compras = 0;
    let vendas = 0;
    while(opcao === `S`){
        let nome = (prompt(`Digite o nome da mercadoria: `));
        let precoCompra = Number(prompt(`Digite o preço de compra: `));
        let precoVenda = Number(prompt(`Digite o preço de venda: `));

        console.log(`Mercadoria: ${nome} | Preço de compra: ${precoCompra.toFixed(2)} | Preço de venda: ${precoVenda.toFixed(2)}`);

        let lucro = precoVenda - precoCompra;
        let dezPorCento = precoCompra * 0.10;
        let vintePorCento = precoCompra * 0.20;

        if(lucro > vintePorCento){
            quantidade3++; 
        }else if(lucro >= dezPorCento){
            quantidade2++; 
        }else{
            quantidade1++; 
        }
        compras += precoCompra;
        vendas += precoVenda;
        opcao = prompt(`Deseja continuar: [S | N]? `);
    }
    let lucroTotal = vendas - compras;
    console.log(`${quantidade1} mercadoria(s) com lucro menor que 10%.`);
    console.log(`${quantidade2} mercadoria(s) com lucro maior ou igual a 10%, mas menor ou igual a 20%.`);
    console.log(`${quantidade3} mercadoria(s) com lucro maior que 20%.`);
    console.log(`Total de compras: R$ ${compras.toFixed(2)} e total de vendas: R$ ${vendas.toFixed(2)}, sendo o lucro de: R$ ${lucroTotal.toFixed(2)}`);
}

//SAIDA
verificarLucros();