/* O valor aproximado de π pode ser calculado usando-se a série:

S = 1/1^3 - 1/3^3 + 1/5^3 - 1/7^3 + 1/9^3 -... 

sendo 

pi = raiz cubica S * 32

Fazer um programa para calcular e escrever o valor de π com 1000
termos. */


function calcularPi() {             

    let denominador = 1;         
    let sinal = 1;
    let s = 0;          

    
    for(valor = 1; valor <= 1000; valor++) {
        
        let termo = 1 / Math.pow(denominador, 3);

        s += sinal * termo;

        denominador += 2;   
        sinal *= -1;        
    }

    let pi = Math.cbrt(s * 32);
    
    console.log(`O valor aproximado de PI com 1000 termos é: ${pi.toFixed(4)}`);
}

calcularPi();
