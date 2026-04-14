/* 3. Um endocrinologista deseja controlar a saúde de seus pacientes e,
para isso, ele utiliza o índice de massa corporal (IMC). Sabe-se que o
IMC é calculado através da seguinte fórmula: 

IMC = peso / altura ** 2

onde: peso é dado em Kg e altura é dada em metros.
Criar um programa que apresente o nome do paciente, seu IMC e sua
faixa de risco, baseando-se na seguinte tabela:

IMC Faixa de Risco
abaixo de 20 abaixo do peso ideal
a partir de 20 até 25 peso normal
acima de 25 até 30 excesso de peso
acima de 30 até 35 obesidade
acima de 35 obesidade mórbida */

function calcularIMC(nome, peso, altura) {
    const imc = peso / Math.pow(altura, 2);

    if (imc < 20) {
        return `Paciente: ${nome} | IMC: ${imc.toFixed(2)} | Faixa de risco: abaixo do peso ideal`;
    } else if (imc <= 25) {
        return `Paciente: ${nome} | IMC: ${imc.toFixed(2)} | Faixa de risco: peso normal`;
    } else if (imc <= 30) {
        return `Paciente: ${nome} | IMC: ${imc.toFixed(2)} | Faixa de risco: excesso de peso`;
    } else if (imc <= 35) {
        return `Paciente: ${nome} | IMC: ${imc.toFixed(2)} | Faixa de risco: obesidade`;
    } else {
        return `Paciente: ${nome} | IMC: ${imc.toFixed(2)} | Faixa de risco: obesidade mórbida`;
    }
}

const prompt = require("prompt-sync")();

let opcao = "S";

do {
    const nomePaciente = prompt("Digite o nome do paciente: ");
    const pesoPaciente = Number(prompt("Digite o peso do paciente (em Kg): "));
    const alturaPaciente = Number(prompt("Digite a altura do paciente (em metros): "));
    
    const resultado = calcularIMC(nomePaciente, pesoPaciente, alturaPaciente);
    console.log(resultado);
    
    opcao = prompt("Deseja continuar? [S/N]: ").toUpperCase();

} while (opcao === "S");
if (opcao === "N") return console.log("Programa encerrado!");