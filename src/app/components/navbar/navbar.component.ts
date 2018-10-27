import {Component} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {AppService} from '../../app.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  isCollapsed = true;
  navbarOpen = false;

  constructor(private modalService: NgbModal, private appService: AppService) {}

    toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

  open(login) {
    this.modalService.open(login, { centered: true });
  }

  show(crateAdvert) {
    this.modalService.open(crateAdvert, { centered: true, size: 'lg' });
  }

  getLogin(): string {
    return this.appService.loggedUser;
  }

  signOut() {
    delete(this.appService.loggedUser);
  }

}
