/* 9. Fazer um programa para ler o salário bruto de vários
funcionários da empresa GynSoftware, para cada um destes
funcionários calcular e escrever o valor o valor final do INSS
em conformidade com a tabela abaixo:

Salário Bruto Alíquota
Até R$ 1.412,00 7,5%
De R$ 1.412,01 até R$ 2.666,68 9,0%
De R$ 2.666,69 até R$ 4.000,03 12,0%
Acima de R$ 4.000,04 14,0% */

//ENTRADA
const prompt = require("prompt-sync")();
const quantidade = Number(prompt(`Digite a quantidade de funcionários: `));

//PROCESSAMENTO
function calcularInss(quantidade){
    let inss = 0;
    for(let contador = 1; contador <= quantidade; contador++){
        let salarioBruto = Number(prompt(`Digite o salário bruto do funcionário: `));
        if(salarioBruto <= 1412){
            inss = salarioBruto * 0.075;
        }else if(salarioBruto <= 2666.68){
            inss = salarioBruto * 0.09;
        }else if(salarioBruto <= 4000.03){
            inss = salarioBruto * 0.12;
        }else {
            inss = salarioBruto * 0.14;
        }
        console.log(`O funcionario de salário ${salarioBruto.toFixed(2)}, tem descontado o valor de ${inss.toFixed(2)} em INSS`);
    }
}

//SAIDA
calcularInss(quantidade);