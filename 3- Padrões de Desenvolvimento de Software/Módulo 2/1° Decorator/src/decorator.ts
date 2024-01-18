import { Sanduiche } from "./interfaceSanduiche";
export{Pepperoni, QueijoMussarelaRalado};

 class Pepperoni implements Sanduiche {
    private sanduiche: Sanduiche;

    constructor(sanduiche: Sanduiche) {
        this.sanduiche = sanduiche;
    }

    getDescricao(): string {
        return this.sanduiche.getDescricao() + " com Pepperoni";
    }

    getCusto(): number {
        return this.sanduiche.getCusto() + 0.99;
    }
}

// Decorator para adicionar Queijo Mussarela Ralado ao sanduíche
 class QueijoMussarelaRalado implements Sanduiche {
    private sanduiche: Sanduiche;

    constructor(sanduiche: Sanduiche) {
        this.sanduiche = sanduiche;
    }

    getDescricao(): string {
        return this.sanduiche.getDescricao() + " e Queijo Mussarela Ralado";
    }

    getCusto(): number {
        return this.sanduiche.getCusto() + 2.0;
    }
}