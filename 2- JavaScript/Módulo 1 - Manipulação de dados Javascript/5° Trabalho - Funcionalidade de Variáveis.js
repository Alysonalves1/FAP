//calculo de média
let nota = 0;
let media =0;
alert("Digite suas notas sendo de 0 a 10.")
for(i=1; i<= 3;i++){
    nota += Number(prompt(`Digite a ${i}° nota: `))
}

media = nota/(i-1)
console.log(media)
