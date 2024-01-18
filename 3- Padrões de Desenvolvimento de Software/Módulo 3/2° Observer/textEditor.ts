// TextEditor.ts
import { Editor } from './editor';

export class TextEditor extends Editor {
  private lines: string[] = [];

  insertLine(lineNumber: number, text: string): void {
    this.lines.splice(lineNumber, 0, text);
    this.notify();
  }

  removeLine(lineNumber: number): void {
    if (lineNumber >= 0 && lineNumber < this.lines.length) {
      this.lines.splice(lineNumber, 1);
      this.notify();
    }
  }

  saveToFile(): void {
    console.log('Conteúdo salvo no arquivo:');
    console.log(this.lines.join('\n'));
  }

  printContent(): void {
    console.log('Conteúdo do TextEditor:');
    console.log(this.lines.join('\n'));
  }
}
