/* Dados os pontos A e B, cujas coordenadas A(x1,y1) e
B(x2,y2), que serão informadas via teclado, desenvolver um
programa que calcule a distância entre A e B.
distancia = raiz quadrada( (x2 - x1)^2 + (y2 - y1)^2) ) */

const prompt = require("prompt-sync")();

const pontoAX = Number(prompt("Digite o valor de x do ponto A: "));
const pontoAY = Number(prompt("Digite o valor de y do ponto A: "));
const pontoBX = Number(prompt("Digite o valor de x do ponto B: "));
const pontoBY = Number(prompt("Digite o valor de y do ponto B: "));

const distancia = Math.sqrt((pontoAX - pontoBX) ** 2 + (pontoAY - pontoBY) ** 2);

console.log(`A distancia entre esses pontos é: ${distancia.toFixed(2)}`);
