class Computador {
    constructor(marca, cor, armazenamento) {
        this.marca = marca;
        this.cor = cor;
        this.armazenamento = armazenamento;
        this.ligado = false;
    }

    ligar() {
        this.ligado = true;
        console.log('ligando...');
    }
    desligar() {
        this.ligado = false;
        console.log('desligando...');
    }

    abrirAplicativo(aplicativo) {
        if (this.ligado) {
            console.log(`abrindo o ${aplicativo}`)
        } else {
            console.log('O computador não está ligado')
        }
    }
}


class TV {
    constructor(marca, cor, resulocao ) {
        this.marca = marca;
        this.cor = cor;
        this.resulocao = resulocao;
        this.ligado = false;
        this.canal = 5;
    }

    ligarTv() {
        this.ligado = true;
        console.log('ligando TV...');
    }

    desligarTv() {
        this.ligado = false;
        console.log('desligando TV...');
    }

    mudarCanal(canal) {
        if (this.ligado) {
            this.canal = canal;
            console.log(`mudando canal para ${this.canal}`)
        } else {
            console.log('TV não está ligado')

        }

    }
}

// Classes abstratas
class Ebook {
    constructor(titulo, autor, paginas) {
      this.titulo = titulo;
      this.autor = autor;
      this.paginas = paginas;
    }
  
    obterFormato() {
      throw new Error("O método 'obterFormato' deve ser implementado pelas subclasses.");
    }
  
    obterNumeroDePaginas() {
      throw new Error("O método 'obterNumeroDePaginas' deve ser implementado pelas subclasses.");
    }
  }
  
  class Musica {
    constructor(titulo, artista) {
      this.titulo = titulo;
      this.artista = artista;
    }
  
    obterGenero() {
      throw new Error("O método 'obterGenero' deve ser implementado pelas subclasses.");
    }
  
    reproduzir() {
      throw new Error("O método 'reproduzir' deve ser implementado pelas subclasses.");
    }
  }
  