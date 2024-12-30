import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee, EmployeeService } from '../employee.service';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Location } from '@angular/common';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzFormModule } from 'ng-zorro-antd/form';
import { FormsModule } from '@angular/forms';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-employee-form',
  standalone: true,
  imports: [NzCardModule,NzFormModule,FormsModule,ReactiveFormsModule,NzIconModule],
  templateUrl: './employee-form.component.html',
  styleUrl: './employee-form.component.css'
})
export class EmployeeFormComponent implements OnInit {
  employee: Employee = { id: 0, name: '', position: '', department: '' };
  isEditMode: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private employeeService: EmployeeService,
    private msg: NzMessageService,
    private location: Location
  ) {}

  ngOnInit(): void {
    const employeeId = this.route.snapshot.paramMap.get('id');
    if (employeeId) {
      this.isEditMode = true;
      this.getEmployee(Number(employeeId));
    }
  }

  getEmployee(id: number): void {
    this.employeeService.getEmployeeById(id).subscribe((data) => {
      this.employee = data;
    });
  }

  saveEmployee(): void {
    if (this.isEditMode) {
      this.updateEmployee();
    } else {
      this.addEmployee();
    }
  }

  addEmployee(): void {
    this.employeeService.addEmployee(this.employee).subscribe(() => {
      this.msg.success('Employee added successfully!');
      this.router.navigate(['/']);
    });
  }

  updateEmployee(): void {
    this.employeeService.updateEmployee(this.employee.id, this.employee).subscribe(() => {
      this.msg.success('Employee updated successfully!');
      this.router.navigate(['/']);
    });
  }

  goBack(): void {
    this.location.back();
  }
}