import { Sanduiche } from "./interfaceSanduiche";
import { Pepperoni, QueijoMussarelaRalado } from "./decorator";
// Implementação do sanduíche base (Frango Assado)
class FrangoAssado implements Sanduiche {
  getDescricao(): string {
    return "Sanduíche de Frango Assado";
  }

  getCusto(): number {
    return 4.5;
  }
}


// Criando o sanduíche composto
let sanduiche: Sanduiche = new FrangoAssado();
sanduiche = new Pepperoni(sanduiche);
sanduiche = new QueijoMussarelaRalado(sanduiche);

// Obtendo a descrição e o custo final do sanduíche
console.log(sanduiche.getDescricao() + " custa $" + sanduiche.getCusto().toFixed(2) + ".\n");
