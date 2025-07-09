import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoggerService {
  private name!: string;

  constructor() {
    console.log('LoggerService initialized');
  }

  setName(name: string): void {
    debugger;
    this.name = name;
    localStorage.setItem('name', this.name);
    console.log('Name is set', this.name);
  }

  getName(): string {
    debugger;
    if (localStorage.getItem('name')) {
      const localName = localStorage.getItem('name');
      console.log(`Name = ${localName}`);
    }
    return this.name;
  }
}
