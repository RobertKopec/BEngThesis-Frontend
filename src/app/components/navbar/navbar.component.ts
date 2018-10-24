import {Component} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  isCollapsed = true;
  navbarOpen = false;

  constructor(private modalService: NgbModal) {}

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

  open(login) {
    this.modalService.open(login, { centered: true });
  }

  show(crateAdvert) {
    this.modalService.open(crateAdvert, { centered: true, size: 'lg' });
  }
}
