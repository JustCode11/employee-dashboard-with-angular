import { Component, Input } from '@angular/core';
import { faCapsules, faPlane, faThumbtack, faPaperclip, faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
import { Employee } from '../../models/Employee';

@Component({
  selector: 'app-employee-card',
  templateUrl: './employee-card.component.html',
  styleUrls: ['./employee-card.component.scss']
})
export class EmployeeCardComponent {
  @Input() employee: Employee;
  faCapsules = faCapsules;
  faPlane = faPlane;
  faThumbtack = faThumbtack;
  faPaperclip = faPaperclip;
  faEllipsisVertical = faEllipsisVertical;

  constructor() { }
}
