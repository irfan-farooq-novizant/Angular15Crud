import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-emp-info',
  templateUrl: './emp-info.component.html',
  styleUrls: ['./emp-info.component.css'],
  providers: [DataService]
})

export class EmpInfoComponent {

  info1: string[] = [];
  info2: string[] = [];
  info3: string[] = [];

  empUpdated = false;

  constructor(private dataService: DataService) {
    
  }

  getInfo1(): void {
    this.info1 = this.dataService.getEmp1();
  }

  getInfo2(): void {
    this.info2 = this.dataService.getEmp2();
  }

  getInfo3(): void {
    this.info3 = this.dataService.getEmp3();
  }

  updateInfo(empForm: any): void {
    this.dataService.updateEmployees(empForm.value.location);
    this.empUpdated = true;
  }
}
