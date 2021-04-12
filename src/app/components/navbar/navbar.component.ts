import {Component} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {AppService} from '../../app.service';
import {Constrains} from '../../app.constraints';
import {UserModel} from '../../models/user.model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  public loginTitle = Constrains.loginTitle;
  public createAdvertTitle = Constrains.createAdvert;
  public favouriteTitle = Constrains.favourite;
  public userPanelTitle = Constrains.userPanel;
  public categories = Constrains.categories;

  public isCollapsed = true;
  public isNavbarOpen = false;
  public search: string;
  public category: string;

  constructor(private modalService: NgbModal, public appService: AppService) {
  }

  toggleNavbar() {
    this.isNavbarOpen = !this.isNavbarOpen;
  }

  open(login) {
    this.modalService.open(login, {centered: true});
  }

  show(crateAdvert) {
    this.modalService.open(crateAdvert, {centered: true, size: 'lg'});
  }

  getLoggedUser(): UserModel {
    return this.appService.user;
  }

  signOut() {
    delete (this.appService.user);
  }
}
