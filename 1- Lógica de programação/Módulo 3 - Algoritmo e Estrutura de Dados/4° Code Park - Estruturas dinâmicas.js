class Pessoa {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
        this.filhos = [];
    }

    adicionarFilho(filho) {
        this.filhos.push(filho);
    }

    getInfo() {
        let info = `Nome: ${this.nome}, Idade: ${this.idade}`;
        
        if (this.filhos.length > 0) {
            const filhos = this.filhos.map(filho => filho.nome).join(', ');
            info += `, Filho(s): ${filhos}`;
        }
        
        return info;
    }
}

// Criar instâncias de pessoas
const pessoa1 = new Pessoa("João", 30);
const pessoa2 = new Pessoa("Maria", 25);
const pessoa3 = new Pessoa("Pedro", 5);
const pessoa4 = new Pessoa("Laura", 3);

// Construir a lista encadeada
pessoa1.adicionarFilho(pessoa3); // João é pai de Pedro
pessoa1.adicionarFilho(pessoa4); // João também é pai de Laura

// Exemplo de como acessar informações na lista encadeada
console.log(pessoa1.getInfo()); // Saída: Nome: João, Idade: 30, Filho(s): Pedro, Laura
console.log(pessoa2.getInfo()); // Saída: Nome: Maria, Idade: 25
console.log(pessoa3.getInfo()); // Saída: Nome: Pedro, Idade: 5
console.log(pessoa4.getInfo()); // Saída: Nome: Laura, Idade: 3
