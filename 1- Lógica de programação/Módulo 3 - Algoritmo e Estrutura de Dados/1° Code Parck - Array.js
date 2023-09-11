let nome = ['lucas','Alyson','Matheus','Danilo','Marcos','Jhonatas','Léticia','Francisco','Marcela','Jenifer'];
let idade = [10,22,30,16,27,50,6,21,64,34];
let corFavorita = ['vermelho','amarelo','azul','laranja','verde','marrom','preto','lilas','branco','rosa'];

console.log(nome, idade, corFavorita)

idade.splice(3,1,18)
corFavorita.splice(1,1,"cinza")
console.log(nome, idade, corFavorita)
