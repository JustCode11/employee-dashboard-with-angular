import { Component } from '@angular/core';
import { faUsers, faGear } from '@fortawesome/free-solid-svg-icons';
import { faCompass, faBell, faCalendarXmark } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {
  faUsers = faUsers;
  faCompass = faCompass;
  faBell = faBell;
  faCalendarXmark = faCalendarXmark;
  faGear = faGear;
}
