import {Component} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {AppService} from '../../app.service';
import {Constrains} from '../../app.constraints';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  private loginTitle = Constrains.loginTitle;
  private createAdvertTitle = Constrains.createAdvert;
  private categories = Constrains.categories;

  isCollapsed = true;
  navbarOpen = false;
  category;
  search;

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
    return this.appService.loggedUserName;
  }

  signOut() {
    delete (this.appService.loggedUserName);
  }

  assignCategory(category: string) {
    this.category = category;
  }

  assignSearch(search: string) {
    this.search = search;
  }

  filter() {
    this.appService.filteredAdverts = [];
    const regexSearch = new RegExp(this.search, 'i');
    const regexCategory = new RegExp(this.category, 'i');
    for (const advert of this.appService.adverts) {
      if (regexSearch.test(advert.title) && regexCategory.test(advert.category)) {
        this.appService.filteredAdverts.push(advert);
      }
    }
  }

  // filterReset() {
  //   this.appService.filteredAdverts = this.appService.adverts;
  //   for (const advert of this.appService.adverts) {
  //       this.appService.filteredAdverts.push(advert);
  //   }
  // }

}
