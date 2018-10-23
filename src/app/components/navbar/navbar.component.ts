import { Component} from '@angular/core';
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

  open(content) {
    this.modalService.open(content, { centered: true });
  }
}
