//Declarando váriaveis com resultado UNDEFINED.
let boolean;
let bigint;
let string;
let symbol;

console.log(boolean);
console.log(bigint);
console.log(string);
console.log(symbol,'\n');

//Tornando o resultado null

boolean = null;
bigint = null;
string = null;
symbol = null;

console.log(boolean);
console.log(bigint);
console.log(string);
console.log(symbol,'\n');

//recebendo valores de cada tipo

boolean = true;
bigint = 12345678901234567890n;
string = "olá";
symbol =  Symbol("representa um symbol");

console.log(boolean);
console.log(bigint);
console.log(string);
console.log(symbol);