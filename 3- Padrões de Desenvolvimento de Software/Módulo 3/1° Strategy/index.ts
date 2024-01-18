// Interface Strategy
interface OperacaoStrategy {
    execute(num1: number, num2: number): number;
  }
  
  // implementando o Strategy
  class Soma implements OperacaoStrategy {
    execute(num1: number, num2: number): number {
      return num1 + num2;
    }
  }
  
  class Subtracao implements OperacaoStrategy {
    execute(num1: number, num2: number): number {
      return num1 - num2;
    }
  }
  
  class Multiplicacao implements OperacaoStrategy {
    execute(num1: number, num2: number): number {
      return num1 * num2;
    }
  }
  
  // utilizando o Strategy
  class Calculadora {
    private estrategia: OperacaoStrategy;
  
    constructor(estrategia: OperacaoStrategy) {
      this.estrategia = estrategia;
    }
  
    setEstrategia(estrategia: OperacaoStrategy): void {
      this.estrategia = estrategia;
    }
  
    realizarOperacao(num1: number, num2: number): void {
      const resultado = this.estrategia.execute(num1, num2);
      console.log(`Resultado da operação: ${resultado}`);
    }
  }
  
  const calculadora = new Calculadora(new Soma());
  
  const operacao = "multiplicacao";
  
  switch (operacao.toLowerCase()) {
    case "soma":
      calculadora.setEstrategia(new Soma());
      break;
    case "subtracao":
      calculadora.setEstrategia(new Subtracao());
      break;
    case "multiplicacao":
      calculadora.setEstrategia(new Multiplicacao());
      break;
    default:
      console.log("Operação inválida");
      break;
  }
  
  calculadora.realizarOperacao(10, 5);
  