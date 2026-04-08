import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecordsService {

    info1: string[] = ["Irfan Farooq", 'irfanf33@gmail.com', '+923001234567'];
    info2: string[] = ["John Doe", 'johndoe@gmail.com', '+923007890123'];
    info3: string[] = ["Jane Smith", 'janesmith@gmail.com', '+923004567890'];

  constructor() { }

  getInfo1(): string[] {
    return this.info1;
  }

  getInfo2(): string[] {
    return this.info2;
  }

  getInfo3(): string[] {
    return this.info3;
  }
}
