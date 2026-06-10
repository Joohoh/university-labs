/* 10. Fazer um programa para ler o salário bruto de vários
funcionários da empresa GynSoftware, para cada um destes
funcionários calcular e escrever o valor o valor final do IRPF
em conformidade com a tabela abaixo:

Salário Bruto Alíquota
Até R$ 2.259,20 Isento
De R$ 2.259,21 até R$ 2.826,65 7,5%
De R$ 2.826,66 até R$ 3.751,05 15%
De R$ 3.751,06 até R$ 4.664,68 22,5%
Acima de R$ 4.664,68 27,5% */

//ENTRADA
const prompt = require("prompt-sync")();
const quantidade = Number(prompt(`Digite a quantidade de funcionários: `));

//PROCESSAMENTO
function calcularIRPF(quantidade){
    let irpf = 0;
    for(let contador = 1; contador <= quantidade; contador++){
        let salarioBruto = Number(prompt(`Digite o salário bruto do funcionário: `));
        if(salarioBruto <= 2259.20){
            irpf = 0;
        }else if(salarioBruto <= 2826.65){
            irpf = salarioBruto * 0.075;
        }else if(salarioBruto <= 3751.05){
            irpf = salarioBruto * 0.15;
        }else if(salarioBruto <= 4664.68){
            irpf = salarioBruto * 0.225;    
        }else {
            irpf = salarioBruto * 0.275;
        }
        console.log(`O funcionario de salário ${salarioBruto.toFixed(2)}, tem descontado o valor de ${irpf.toFixed(2)} em IRPF`);
    }
}

//SAIDA
calcularIRPF(quantidade);