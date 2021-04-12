import {Component, OnInit} from '@angular/core';
import {Constrains} from '../../app.constraints';
import {Subscription} from 'rxjs';
import {AppService} from '../../app.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {UserModel} from '../../models/user.model';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.scss']
})
export class AdminPanelComponent implements OnInit {
  public editUser = Constrains.editUser;
  public userEditTitle = Constrains.userEditTitle;
  public noUsers = Constrains.noUsers;

  public users: UserModel[] = [];

  private usersChanged: Subscription;

  constructor(public appService: AppService, private modalService: NgbModal) {
  }

  ngOnInit() {
    this.appService.getUsers();

    this.usersChanged = this.appService.usersChanged.subscribe(
      () => {
        this.users = this.appService.users;
      }
    );
  }

  show(modal): void {
    this.modalService.open(modal, {centered: true});
  }

  removeUser(userId): void {
    this.appService.removeUser(userId);
  }
}
