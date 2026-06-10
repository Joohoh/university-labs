/* 15. Em um frigorífico existem vários bois em seu curral de
espera. Cada boi traz preso no seu pescoço um cartão
contendo um número de identificação e seu peso em Kg.
Implementar um programa que escreva o número e o peso do
boi mais gordo e do boi mais magro (não é necessário
armazenar os dados de todos os bois). Calcular e escrever
também a média de peso dos 19000 bois.*/

//ENTRADA
const prompt = require("prompt-sync")();

//PROCESSAMENTO
function calcularBois(){
    let pesoMaior = 0;
    let pesoMenor = 9999; // pesoMenor = peso em if(contador === 1)
    let numeroBoiMaior = 0;
    let numeroBoiMenor = 0;
    let media = 0;
    for(let contador = 1; contador <= 3; contador++){
        let numero = Number(prompt(`Digite o numero de indentificação do boi: `));
        let peso = Number(prompt(`Digite o peso do boi: `));

        if(pesoMaior < peso){
            pesoMaior = peso;
            numeroBoiMaior = numero;
        }
        if(pesoMenor > peso){
            pesoMenor = peso;
            numeroBoiMenor = numero;
        }

        media += peso;
    }
    media = media / 3;
    console.log(`O boi de maior peso é o: ${numeroBoiMaior} com ${pesoMaior} kg.`);
    console.log(`O boi de menor peso é o: ${numeroBoiMenor} com ${pesoMenor} kg.`);
    console.log(`Média em kg: ${media.toFixed(2)}`);
}

//SAIDA
calcularBois();