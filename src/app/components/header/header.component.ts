import { Component } from '@angular/core';
import { faBell } from '@fortawesome/free-regular-svg-icons';
import { faGear, faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  faBell = faBell;
  faGear = faGear;
  faArrowRightFromBracket = faArrowRightFromBracket;
}
