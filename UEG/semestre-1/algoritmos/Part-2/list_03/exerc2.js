/* 2. Desenvolver um programa para calcular a conta de água para a
SANEAGO. O custo da água varia dependendo do tipo do consumidor
- residencial, comercial ou industrial.
A regra para calcular a conta é:
a. Residencial: R$ 5,00 de taxa mais R$ 0,55 por m3 gastos;
b. Comercial: R$ 150,00 de taxa mais R$ 1,25 por m3 gastos;
c. Industrial: R$ 280,00 de taxa mais R$ 2,54 por m3 gastos; 
O programa deverá ler o número da conta do cliente, seu tipo
(residencial, comercial e industrial) e o seu consumo de água em
metros cubos. Como resultado imprimir a conta do cliente e o valor em
real a ser pago pelo mesmo.*/

function calcularContaDeAgua(valor, tipo){

    switch(valor, tipo){
        case "a": return "Tipo Residencial - Valor a ser pago: R$ " 
        + ((valor * 0.55 + 5) + valor).toFixed(2); 
        case "b": return "Tipo Comercial - Valor a ser pago: R$ " 
        + ((valor * 1.25 + 150) + valor).toFixed(2);
        case "c": return "Tipo Industrial - Valor a ser pago: R$ " 
        + ((valor * 2.54 + 280) + valor).toFixed(2);
    }

}

const prompt = require("prompt-sync")();

let opcao = "S";

do{
    console.log("Qual o tipo de consumidor? \n" + 
    "a. Residencial: R$ 5,00 de taxa mais R$ 0,55 por m3 gastos;\n" +
    "b. Comercial: R$ 150,00 de taxa mais R$ 1,25 por m3 gastos; \n" +
    "c. Industrial: R$ 280,00 de taxa mais R$ 2,54 por m3 gastos;" 
    );

    const contaCliente = Number(prompt("Digite o número da conta-cliente: "));
    const tipoConsumidor = (prompt("Opção: "));
    const valorBase = Number(prompt("Digite o gasto em m³: "));

    console.log(`Conta: ${contaCliente} - ${calcularContaDeAgua(valorBase, tipoConsumidor)}`);
    opcao = prompt("Deseja continuar? [S,N]: ").toUpperCase();

}while(opcao === "S");
    if(opcao === "N") return console.log("Programa encerrado");