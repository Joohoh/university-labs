/* 2. Fazer um algoritmo que calcule e imprima o salário reajustado de um
funcionário de acordo com as seguintes regras:
● Salários de até R$ 1412,00 reajuste de 50%;
● Salários maiores que R$ 1412,00 reajuste de 40%.
Obs.: Usuário ideal - ele não irá digitar valores incorretos. */

function calcularReajuste(salario){

    // //Opção 1 - Estrutura condicional simples
    //if (salario <= 1412) return (salario * 1.50);
    //if (salario > 1412) return (salario * 1.40);

    //Opção 2 - Estrutura condicional composta
    if (salario <= 1412) return salario * 1.50;
    else return salario * 1.40;
}

const prompt = require("prompt-sync")();

const salario = Number(prompt("Digite o valor do salário: "));

const resultado = calcularReajuste(salario);

console.log(`O valor reajustado de ${salario} é de ${resultado.toFixed(2)}`);