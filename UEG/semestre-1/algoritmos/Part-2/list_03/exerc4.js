/* 4. A Companhia de Pulverização Faz Tudo Ltda utiliza aviões para
pulverizar lavouras. Os custos de pulverização dependem do tipo de
praga e da área contratada conforme o esquema:
Tipo 1: pulverização contra ervas daninhas, R$ 50,00 por acre;
Tipo 2: pulverização contra gafanhotos, R$ 100,00 por acre;
Tipo 3: pulverização contra broca, R$ 150,00 por acre;
Tipo 4: pulverização contra tudo acima, R$ 250,00 por acre.

Se a área a ser pulverizada é maior que 350 acres, o fazendeiro
recebe um desconto de 5%. Em adição, qualquer fazendeiro cujo
custo total, sem desconto, ultrapasse R$ 10.750,00 recebe um
desconto de 10% sobre o valor que ultrapassar os R$ 10.750,00.
Preparar um programa que leia as seguintes informações:

● Nome do fazendeiro;
● Tipo de pulverização (de 1 a 4);
● Área a ser pulverizada.

O programa deve ainda calcular o custo final da pulverização e
escrever o nome do fazendeiro e o valor a ser pago. */

function calcularCustoPulverizacao(nome, tipo, area){

    let valorTotal = 0

    switch(Number(tipo, area)){
        
        case 1: valorTotal = area * 50;
        break;
        case 2: valorTotal = area * 100;
        break;
        case 3: valorTotal = area * 150;
        break;
        case 4: valorTotal = area * 250;
        break;
    } 
    
    if(area > 350) {
        valorTotal * 0.95}
    if(valorTotal > 10750) {
        valorTotal = valorTotal - ((valorTotal - 10750) * 0.10)
    }

    return `O fazendeiro ${nome} deve pagar R$ ${valorTotal.toFixed(2)}`
}

const prompt = require("prompt-sync")();

let opcao = "S";

do{

    const nomeFazendeiro = prompt("Digite o nome do Fazendeiro: ");
    
    console.log("Qual o tipo de praga?");
    console.log("1: Ervas daninhas | 2: Gafanhotos | 3: Broca | 4: Todos");

    const tipoPulverizacao = Number(prompt("Opção: "));
    const areaPulverizacao = Number(prompt("Qual a área a ser pulverizada (em acres)? "));

    // Chama a função correta e imprime o retorno dela
    const resultado = calcularCustoPulverizacao(nomeFazendeiro, tipoPulverizacao, areaPulverizacao);
    console.log(`${resultado}`);

    opcao = prompt("Deseja continuar? [S/N]: ").toUpperCase();

}while(opcao === "S")
    if(opcao === "N") return console.log("Programa encerrado!");