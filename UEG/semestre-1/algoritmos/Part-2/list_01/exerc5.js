/* 5. Desenvolver um algoritmo que leia os coeficientes (A, B e C) de uma
equação do segundo grau ( Ax ** 2 + Bx + C = 0) e que calcule suas
raízes. O algoritmo deve mostrar, quando possível, o valor das raízes
calculadas e a classificação das mesmas: “RAÍZES IMAGINÁRIAS”,
“RAIZ ÚNICA” ou “RAÍZES DISTINTAS”. */

function calcularRaizes (A, B, C){
    const delta = B ** 2 - 4 * A * C

    //Opção 1 - Estrutura condicional simples
    //if(delta < 0) return "RAIZES IMAGINARIAS";

    //if(delta > 0) {
    //    const raiz1 = (-B + Math.sqrt(delta)) / (2 * A);
    //    const raiz2 = (-B - Math.sqrt(delta)) / (2 * A);
    //    return "RAÍZES DISTINTAS: x1 = " + raiz1.toFixed(3) + " e x2 = " + raiz2.toFixed(3);
    //}
    
    //if(delta === 0) {
    //    const raiz = -B / (2 * A);  
    //    return "RAIZ UNICA: x = " + raiz.toFixed(3);
    //} 

    if(delta < 0) return "RAIZES IMAGINARIAS";
    else if(delta > 0) {
            const raiz1 = (-B + Math.sqrt(delta)) / (2 * A);
            const raiz2 = (-B - Math.sqrt(delta)) / (2 * A);
            return "RAÍZES DISTINTAS: x1 = " + raiz1.toFixed(3) + " e x2 = " + raiz2.toFixed(3);}
            else  if(delta === 0) {
                const raiz = -B / (2 * A);  
                return "RAIZ UNICA: x = " + raiz.toFixed(3);}   
}

const prompt = require("prompt-sync")();

const coeficienteA = Number(prompt("Digite um valor para A: "));
const coeficienteB = Number(prompt("Digite um valor para B: "));
const coeficienteC = Number(prompt("Digite um valor para C: "));

const resultado = calcularRaizes(coeficienteA, coeficienteB, coeficienteC);

console.log(`${resultado}`);



