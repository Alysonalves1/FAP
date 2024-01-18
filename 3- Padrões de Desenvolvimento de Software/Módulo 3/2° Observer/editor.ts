import { Subject } from './subject';

export class Editor extends Subject {
  open(): void {
    console.log('Editor aberto');
    this.notify();
  }
}
