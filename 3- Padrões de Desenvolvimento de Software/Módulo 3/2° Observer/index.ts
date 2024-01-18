import { Observer } from './observer';
import { TextEditor } from './textEditor';

const textEditor = new TextEditor();

// Observador para exibir mensagem quando o editor for aberto
class OpenObserver implements Observer {
  update(): void {
    console.log('Evento: Editor aberto');
  }
}

textEditor.addObserver(new OpenObserver());

textEditor.open();

let lineNumber = 0;
let userInput = 'EOF';

// Simulação de entrada do usuário, inserindo linhas até encontrar "EOF"
while (userInput !== 'EOF') {
  userInput = 'Linha ' + lineNumber++;
  textEditor.insertLine(lineNumber, userInput);
}

// Observador para exibir mensagem quando o conteúdo for salvo
class SaveObserver implements Observer {
  update(): void {
    console.log('Evento: Conteúdo salvo');
  }
}

textEditor.addObserver(new SaveObserver());

textEditor.saveToFile();
textEditor.printContent();
