//Busca Linear
function linear(array, numbuscado) {
    for(let i = 0; i< array.length; i++){
        if(array[i] === numbuscado){
            return i;
        }
    }return -1;
}

const lista = [15, 8, 10, 25, 12, 30, 5, 20, 18, 7];
const numero = 20;
let indice = linear(lista, numero);

if(indice !== -1){
    console.log(`O número ${numero} foi encontrado no indice: ${indice}`)
}else{
    console.log("Número não encontrado")
}
