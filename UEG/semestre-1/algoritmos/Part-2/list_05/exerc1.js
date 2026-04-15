/* Elabore um algoritmo que leia dois números inteiros e a operação
aritmética desejada; calcule, então, a resposta adequada. Utilize os
símbolos da tabela a seguir para saber qual a operação aritmética
escolhida.

Símbolo Operação Aritmética
+ Adição
- Subtração
* Multiplicação
/ Divisão */

function calcularOperacoes(operacao, num1, num2) {
    let resultado = 0;

    switch (operacao) {
        case 1: 
            resultado = num1 + num2; 
            break;
        case 2: 
            resultado = num1 - num2; 
            break;
        case 3: 
            resultado = num1 * num2; 
            break;
        case 4: 
            if (num2 !== 0) {
                resultado = num1 / num2;
            } else {
                return "Erro: Divisão por zero!";
            }
            break;
        default:
            return "Operação Inválida";
    }

    return resultado;
}

const prompt = require("prompt-sync")();

let opcao = "S";

do{ 
    console.log(`Qual operação aritmética deseja fazer? 
    1 - Adição |+| 
    2 - Subtração |-| 
    3 - Multiplicação |*| 
    4 - Divisão |/|`);

    const operacao = Number(prompt(`Opção: `));
    const numero1 = Number(prompt(`Digite um número inteiro: `));
    const numero2 = Number(prompt(`Digite outro número inteiro: `));

    console.log(`Resultado: ${calcularOperacoes(operacao, numero1, numero2)}`);

    opcao = prompt("Deseja continuar? [S/N]: ").toUpperCase();
} while (opcao === "S");

if (opcao === "N") {
    console.log("Programa encerrado!");
}
