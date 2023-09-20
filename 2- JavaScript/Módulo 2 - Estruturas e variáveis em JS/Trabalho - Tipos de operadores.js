let operacao = prompt("Digite a operação que deseja fazer: (adição = + | subtração = - | multiplicação = * | divisão = / | )");
let n1 = parseInt(prompt("Digite o primeiro termo da operação:"));
let n2 = parseInt(prompt("Digite o segundo termo da operação:"));
let res = 0;
let resto =n1%n2

if(operacao == '+'){
    res = n1 + n2
     console.log(`${n1} + ${n2} = ${res}`)
}else if(operacao == '-') {
    res = n1-n2
    console.log(`${n1} - ${n2} = ${res}`)
}else if(operacao == '*'){
    res = n1*n2
    console.log(`${n1} x ${n2} = ${res}`)
}else if(operacao == '/'){
    res = parseInt(n1/n2)
    console.log(`${n1} / ${n2} = ${res}`)
    if (resto != 0) {
        console.log(`resto da divisão: ${resto}`)
    }
}else{
    console.log("operação invalida!")
}