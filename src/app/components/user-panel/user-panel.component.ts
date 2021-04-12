import {Component, OnInit} from '@angular/core';
import {Constrains} from '../../app.constraints';
import {Subscription} from 'rxjs';
import {AppService} from '../../app.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {AdvertModel} from '../../models/advert.model';

@Component({
  selector: 'app-user-panel',
  templateUrl: './user-panel.component.html',
  styleUrls: ['./user-panel.component.scss']
})
export class UserPanelComponent implements OnInit {
  public details = Constrains.details;
  public editUser = Constrains.editUser;
  public menageUsers = Constrains.menageUsers;
  public userEditTitle = Constrains.userEditTitle;
  public adminPanelTitle = Constrains.adminPanelTitle;
  public advertEditTitle = Constrains.advertEditTitle;
  public noAdverts = Constrains.noAdverts;

  public usersAdverts: AdvertModel[] = [];
  private usersAdvertsChanged: Subscription;

  constructor(public appService: AppService, private modalService: NgbModal) {
  }

  ngOnInit() {
    this.appService.getUsersAdverts(this.appService.user.userId);

    this.usersAdvertsChanged = this.appService.usersAdvertsChanged.subscribe(
      () => {
        this.usersAdverts = this.appService.usersAdverts;
      }
    );
  }

  open(modal): void {
    this.modalService.open(modal, {centered: true, size: 'lg'});
  }

  show(modal): void {
    this.modalService.open(modal, {centered: true});
  }

  removeAdvert(advertId): void {
    this.appService.removeAdvert(advertId, this.appService.user.userId);
  }
}
