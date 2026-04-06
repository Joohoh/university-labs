/* 1. Fazer um programa que calcule e escreva o custo de uma
viagem. Sabe-se que o veículo a ser usado faz 12,5 Km por
litro de gasolina e que o litro de gasolina custa R$6,20. O
usuário irá fornecer o tempo de viagem e a velocidade média
do veículo.
Distância = tempo de viagem * velocidade média;
Quantidade de litros = distância / 12,5. */

const prompt = require("prompt-sync")();

const tempoDeViagem = prompt("Digite o tempo de viagem: ");
const velocidadeMedia = prompt("Digite a velocidade média: ");

const distancia = tempoDeViagem * velocidadeMedia;
const quantidadeDeLitros = distancia / 12.5;
const custoDeViagem = quantidadeDeLitros * 6.20;

console.log(`Sua viagem custou R$ ${custoDeViagem}`);
