/* 6. Criar um algoritmo que leia o nome, o número da conta e o saldo
bancário total semestral de uma pessoa e calcule a tarifa bancária em
que a mesma se enquadra:
● Básica (saldo médio mensal inferior a R$ 1.000,00) tarifa de R$
25,00;
● Prata (saldo médio mensal entre R$ 1.000,01 e R$ 2.000,00)
tarifa de R$ 20,00;
● Ouro (saldo médio mensal entre R$ 2.000,01 e R$ 3.500,00)
tarifa de R$ 13,00;
● Prêmio (saldo médio mensal superior a R$ 3.500,00) tarifa
isenta.
Obs.: Usuário ideal - ele não irá digitar valores incorretos. */

function calcularTarifa(saldo){
    const saldoMensal = saldo / 6
    if(saldoMensal <= 1000) return "tarifa bancária tipo Básica de R$ 25,00."
    if(saldoMensal <= 2000) return "tarifa bancária tipo Prata de R$ 20,00."
    if(saldoMensal <= 3500) return "tarifa bancária tipo Ouro de R$ 13,00."
    return "tarifa bancária tipo Prêmio isenta."
}

const prompt = require("prompt-sync")();

const nome = prompt("Digite seu nome: ");
const numeroConta = Number(prompt("Digite o número da conta: "));
const saldoBancario = Number(prompt("Digite seu saldo bancário: "));

const resultado = calcularTarifa(saldoBancario);

console.log(`Olá ${nome}, a conta ${numeroConta} se enquadra na ${resultado}`);

