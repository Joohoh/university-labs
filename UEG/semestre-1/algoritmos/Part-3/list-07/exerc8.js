/* 8. Fazer um programa para ler os seguintes dados de vários
pacientes: nome, peso, altura e sexo. calcule e escreva:
● O IMC do paciente deve ser calculado com a seguinte: IMC = PESO / ALTURA ** 2
● Identificar também a faixa de peso do paciente conforme
critério definido na tabela abaixo:
IMC Faixa de Risco
abaixo de 20 abaixo do peso ideal
a partir de 20 até 25 peso normal
acima de 25 até 30 excesso de peso
acima de 30 até 35 obesidade
acima de 35 obesidade mórbida
● O peso ideal do paciente com base nas fórmulas abaixo:
Peso ideal = ( 72.7 × altura ) − 58 - para os homens;
Peso ideal = ( 62.1 × altura ) − 44.7 - para as mulheres. */

//ENTRADA
const prompt = require("prompt-sync")();
const quantidade = Number(prompt(`Digite o número de pacientes: `));

//PROCESSAMENTO
function imprimirIMC(quantidade){
    let pesoIdeal = 0;
    let imc = 0;
    for(let contador = 1; contador <= quantidade; contador++){
        let nome = prompt(`Digite o nome do paciente: `);
        let peso = Number(prompt(`Digite o peso do paciente: `));
        let altura = Number(prompt(`Digite a altura do paciente em metros: `));
        let sexo = prompt(`Digite o sexo do paciente [F|M]: `);
        imc = peso / (altura ** 2);
        if(sexo == `F`){
            pesoIdeal = (62.1 * altura) - 44.7;
        } else{
            pesoIdeal = (72.7 * altura) - 58;
        }
        console.log(`Paciente ${nome} | Peso ${peso}kg | Altura ${altura} | IMC ${imc.toFixed(2)} |Peso Ideal ${pesoIdeal.toFixed(2)} |  `)
        if(imc < 20){
                console.log(` -- Faixa de risco => abaixo do peso ideal --`);
            }else if(imc <= 25){
                console.log(` -- Faixa de risco => peso normal --`);
            }else if(imc <= 30){
                console.log(` -- Faixa de risco => excesso de peso --`);
            }else if(imc <=35){
                console.log(` -- Faixa de risco => obesidade --`);
            }else console.log(` -- Faixa de risco => obesidade mórbida--`);
    }
}

//PROCESSAMENTO
imprimirIMC(quantidade);