/* Criar um algoritmo que, dado o número da conta corrente com
três dígitos, retorne o dígito verificador, o qual é calculado da
seguinte maneira:
Exemplo: número da conta: 235;
Somar o número da conta com seu inverso: 235 + 532 = 767;
Multiplicar cada dígito pela sua ordem posicional e somar
estes resultados: 767 
7* 1 + 6 * 2 + 7 * 3 = 7 + 12 + 21 = 40;
O último digito desse resultado é o dígito verificador da conta
(40 → 0);
O número da conta passa a ser 235 – 0.*/

function calcularDigitoVerificador(numeroConta){
    let valor = numeroConta; 
    
    // Inverter o número da conta (Exemplo: 231 → 132)
    let unidade = valor % 10; // Pega o 1 do número 231
    valor = Math.trunc(valor / 10); //  Sobra o 23 do número 231
    let dezena = valor % 10; // Pega o 3 do número 231
    valor = Math.trunc(valor / 10); // Sobra o 2 do número 231
    let centena = valor % 10; // Pega o 2 do número 231
    let numeroContaInvertido = (unidade * 100) + (dezena * 10) + centena; // Número invertido: 132
    
    // Somar o número da conta com seu inverso
    let soma = numeroConta + numeroContaInvertido; // Exemplo: 231 + 132 = 363

    // Isolar o último dígito do resultado da soma
    let auxiliar = soma; // Exemplo: 363
    
    let isolado1 = auxiliar % 10; // Pega o 3 do número 363
    auxiliar = Math.trunc(auxiliar / 10); // Sobra o 36 do número 363
    let isolado2 = auxiliar % 10; // Pega o 6 do número 363
    auxiliar = Math.trunc(auxiliar / 10); // Sobra o 3 do número 363
    let isolado3 = auxiliar % 10; // Pega o 3 do número 363

    // Multiplicar cada dígito pela sua ordem posicional e somar estes resultados
    let resultado = (isolado3 * 1) + (isolado2 * 2) + (isolado1 * 3); // Exemplo: 3*1 + 6*2 + 3*3 = 3 + 12 + 9 = 24

    // O último dígito desse resultado é o dígito verificador da conta
    let digitoVerificador = resultado % 10; // Exemplo: 24 → 4

    return digitoVerificador;

}

  const prompt = require("prompt-sync")();
  const numeroConta = parseInt(prompt("Digite o número da conta corrente (3 dígitos): "));

  const digitoVerificador = calcularDigitoVerificador(numeroConta);

  console.log(`O dígito verificador da conta ${numeroConta} é: ${digitoVerificador}`);



    
