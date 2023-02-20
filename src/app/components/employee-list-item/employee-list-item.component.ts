import { Component, Input } from '@angular/core';
import { faCapsules, faPlane, faThumbtack, faPaperclip, faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
import { Employee } from 'src/app/models/Employee';

@Component({
  selector: 'app-employee-list-item',
  templateUrl: './employee-list-item.component.html',
  styleUrls: ['./employee-list-item.component.scss']
})
export class EmployeeListItemComponent {
  @Input() employee: Employee;
  faCapsules = faCapsules;
  faPlane = faPlane;
  faThumbtack = faThumbtack;
  faPaperclip = faPaperclip;
  faEllipsisVertical = faEllipsisVertical;

  constructor() { }


}
