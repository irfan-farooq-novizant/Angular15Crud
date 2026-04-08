import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  emp1: string[] = ["Irfan Farooq", "Software Engineer", "Angular Developer", "MCA"];
  emp2: string[] = ["John Doe", "Project Manager", "Java Developer", "B.Tech"];
  emp3: string[] = ["Jane Smith", "UX Designer", "Frontend Developer", "M.Sc"];

  getEmp1(): string[] {
    return this.emp1;
  }

  getEmp2(): string[] {
    return this.emp2;
  }

  getEmp3(): string[] {
    return this.emp3;
  }

  updateEmployees(location: string): void {
    this.emp1.push(location);
    this.emp2.push(location);
    this.emp3.push(location);
  }

  constructor() { }
}
