// Interfaces do Hipertexto 4 (exemplo)
interface Pato {
    grasnar(): void;
    voar(): void;
  }
  
  interface Galinha {
    cacarejar(): void;
    voar(): void;
  }
  
  // Implementação de Pato
  class PatoComum implements Pato {
    grasnar(): void {
      console.log('Pato está grasnando');
    }
  
    voar(): void {
      console.log('Pato está voando');
    }
  }
  
  // Adapter para adaptar Pato para Galinha
  class AdaptadorPato implements Galinha {
    private pato: Pato;
  
    constructor(pato: Pato) {
      this.pato = pato;
    }
  
    cacarejar(): void {
      this.pato.grasnar(); 
    }
  
    voar(): void {
      this.pato.voar();
    }
  }
  
  // Demonstração do uso do Adapter
  class AdaptadorPatoDemo {
    static main() {
      const patoComum = new PatoComum();
      const adaptadorParaGalinha = new AdaptadorPato(patoComum);
  
      console.log('Pato:');
      patoComum.grasnar();
      patoComum.voar();
  
      console.log('\nGalinha (usando AdaptadorPato):');
      adaptadorParaGalinha.cacarejar();
      adaptadorParaGalinha.voar();
    }
  }
  
  // Executando a demonstração
  AdaptadorPatoDemo.main();
  