import {Component} from '@angular/core';
import {AppService} from '../../app.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private appService: AppService, private modalService: NgbModal) {}

  loginError = '';
  login: string;
  password: string;

  assignLogin(value: string) {
    this.login = value;
  }

  assignPassword(value: string) {
    this.password = value;
  }

  signIn() {
    this.appService.signIn(this.login);
    setTimeout( () => {
      if (this.appService.user !== undefined && this.appService.user !== null) {
        this.appService.loggedUser = this.login;
        this.loginError = '';
        this.modalService.dismissAll();
      } else {
        this.loginError = 'Niepoprawne dane logowania';
      }
    }, 500);
  }
}
