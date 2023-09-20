var numero1 = 2;
var numero2 = 5;
var operador = '+';
var resultado = 0;

function saudacao() {
    console.log("Bem vindo a calculadora")
}

function calculadora(numero1, numero2, operador) {
    if (operador == '+') {
        return numero1 + numero2;

    } else if (operador == '-') {
        return numero1 - numero2;
    }
}
const multiplicacao = (numero1, numero2) => numero1 * numero2;
const divisao = (numero1, numero2) => numero1 / numero2

saudacao()
resultado = calculadora(numero1, numero2, operador)
console.log(`${numero1} ${operador} ${numero2} = ${resultado}`)//soma

resultado = calculadora(numero1, numero2, '-')//alterando o valor da varável operador
console.log(`${numero1} ${operador} ${numero2} = ${resultado}`)//subtração

console.log(`${numero1} * ${numero2} = ${multiplicacao(numero1, numero2)}`)//divisão
console.log(`${numero1} / ${numero2} = ${divisao(numero1, numero2)}`)//multiplicação