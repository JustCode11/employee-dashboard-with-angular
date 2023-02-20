import { Component, OnInit } from '@angular/core';
import { faCapsules, faPlane, faThumbtack, faPaperclip, faBars, faGrip } from '@fortawesome/free-solid-svg-icons';
import { faClock } from '@fortawesome/free-regular-svg-icons';

import { Employee } from 'src/app/models/Employee';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-personnel',
  templateUrl: './personnel.component.html',
  styleUrls: ['./personnel.component.scss']
})
export class PersonnelComponent implements OnInit {
  faCapsules = faCapsules;
  faPlane = faPlane;
  faThumbtack = faThumbtack;
  faPaperclip = faPaperclip;
  faClock = faClock;
  faBars = faBars;
  faGrip = faGrip;

  employees: Employee[] = [];
  all: Employee[] = [];
  numberAtWork: number;
  numberDayOff: number;
  numberVacation: number;
  numberIll: number;

  viewToggle: string = "grid";
  searchTerm: string;

  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
    // this.taskService.getTasks().subscribe((tasks) => (this.tasks = tasks));
    this.employeeService.getEmployees().subscribe((employees) => {
      this.employees = employees;
      this.all = employees;
      this.numberAtWork = employees.filter((employee) => employee.status == "work").length;
      this.numberDayOff = employees.filter((employee) => employee.status == "dayOff").length;
      this.numberVacation = employees.filter((employee) => employee.status == "vacation").length;
      this.numberIll = employees.filter((employee) => employee.status == "ill").length;
    });
  }

  toggleGridView(): void {
    this.viewToggle = "grid";
  }

  toggleListView(): void {
    this.viewToggle = "list";
  }

  search(searchTerm: string) {
    this.searchTerm = searchTerm;
    if (this.searchTerm !== "") {
      this.employees = this.all.filter((employee) => employee.name.toLowerCase().includes(searchTerm.toLowerCase()) || employee.job.toLowerCase().includes(searchTerm.toLowerCase()) || employee.email.toLowerCase().includes(searchTerm.toLowerCase()));
    } else {
      this.employees = this.all;
    }
    console.log(this.searchTerm);
  }
}
