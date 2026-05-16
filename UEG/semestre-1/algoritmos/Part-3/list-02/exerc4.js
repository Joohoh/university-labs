/*
4. Escrever um programa para gerar e escrever uma tabela com os
valores do seno de um ângulo A em radianos, utilizando a série de
Mac-Laurin truncada, apresentada a seguir:
SEN A = A - A^3/6 + A^5/120 - A^7/5040

Condições: os valores dos ângulos A devem variar de 0,0 a 3,3,
inclusive de 0,3 em 0,3.
*/

function somarWhile(seno){
    let valor = 0.0;
    
    while(valor <= 3.3) {
    let seno = valor - (valor ** 3 / 6) + (valor ** 5 / 120) - (valor ** 7 / 5040);
    console.log(`Para x = ${valor.toFixed(1)}, o seno aproximado é: ${seno.toFixed(4)}`);
    valor+=0.3;     
    }
}

function somarDoWhile(){
    let valor = 0.0;

    do{
    let seno = valor - (valor ** 3 / 6) + (valor ** 5 / 120) - (valor ** 7 / 5040);
    console.log(`Para x = ${valor.toFixed(1)}, o seno aproximado é: ${seno.toFixed(4)}`);
    valor+=0.3; 
    }while(valor <= 3.3)
}

function somarFor(){
    let valor = 0.0;
    
    for(valor = 0.0; valor <= 3.3; valor+=0.3) {
    let seno = valor - (valor ** 3 / 6) + (valor ** 5 / 120) - (valor ** 7 / 5040);
    console.log(`Para x = ${valor.toFixed(1)}, o seno aproximado é: ${seno.toFixed(4)}`); 
    } 
}


const prompt = require("prompt-sync")();

console.log(`\n---EM WHILE---`)
somarWhile();
console.log(`\n---EM DO WHILE---`)
somarDoWhile();
console.log(`\n---EM FOR---`)
somarFor(); 
