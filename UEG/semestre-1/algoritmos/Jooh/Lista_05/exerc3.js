/* Fazer um algoritmo que obtenha o raio e a altura de um
cilindro e que calcule e escreva o seu volume e sua área.
AREA = 2 * PI * raio * (altura + raio)
VOLUME = PI * raio ** 2 * altura
*/

function calcularArea(raio, altura){
    return (2 * Math.PI * raio * (altura + raio));   
}

function calcularVolume(raio, altura){
    return (Math.PI * raio ** 2 * altura);  
}

const prompt = require("prompt-sync")();

const raio = Number(prompt("Digite o valor do raio: "));
const altura = Number(prompt("Digite o valor da altura: "));

const area = calcularArea(raio, altura);
const volume = calcularVolume(raio, altura);

console.log(`O valor da área é de: ${area.toFixed(2)}`);
console.log(`O valor do volume é de: ${volume.toFixed(2)} `); 