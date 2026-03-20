/* 2. Fazer um programa que calcule e escreva o custo de uma viagem.
Sabe-se que o veículo a ser usado faz 12,5 Km por litro de gasolina e
que o litro de gasolina custa R$6,20. O valor do tempo de viagem e a
velocidade média do veículo devem ser fixadas por atribuição em
variáveis constantes.
Distância = tempo de viagem * velocidade média;
Quantidade de litros = distância / 12,5 */

const tempoViagem = 2;
const velocidadeMedia = 12.5;
const distancia = tempoViagem * velocidadeMedia;
const quantidadeLitros = distancia / 12.5;
const gasolinaLitro = 6.20;
const custoViagem = quantidadeLitros * gasolinaLitro;

console.log("Disntancia percorrida = " + distancia + " Km");
console.log("Quantidade de gasolina gasta = " + quantidadeLitros + " litros");
console.log("Custo da viagem = R$ " + custoViagem);