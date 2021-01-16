import {Component, ViewChild} from '@angular/core';
import {AppService} from '../../app.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {Constrains} from '../../app.constraints';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  @ViewChild('f', {static: false}) loginForm: NgForm;

  constructor(private appService: AppService, private modalService: NgbModal) {
  }

  private loginText = Constrains.loginText;
  private passwordText = Constrains.passwordText;
  private logIn = Constrains.logIn;
  private signUpText = Constrains.signUpText;
  private signUpTitle = Constrains.signUpTitle;

  private invalidLogin = Constrains.invalidLogin;
  private invalidPassword = Constrains.invalidPassword;
  private invalidCredentials = Constrains.invalidCredentials;

  private login: string;
  private password: string;
  private isValid = true;

  onSubmit() {
    if (this.checkValidation()) {
      this.login = this.loginForm.value.login;
      this.password = this.loginForm.value.password;

      this.appService.signIn(this.login, this.password);
      setTimeout(() => {
        // tslint:disable-next-line:max-line-length
        if (this.appService.user !== undefined && this.appService.user.login === this.login && this.appService.user.password === this.password) {
          this.appService.loggedUser = this.appService.user.login;
          this.modalService.dismissAll();
        } else {
          // this.appService.setAlert(this.invalidCredentials);
        }
      }, 500);
    }
  }

  open(signUp) {
    this.modalService.dismissAll();
    this.modalService.open(signUp, {centered: true});
  }

  checkValidation(): boolean {
    if (this.loginForm.controls.login.status !== 'VALID') {
      // this.appService.setAlert(this.invalidLogin);
      return this.isValid = false;
    }

    if (this.loginForm.controls.password.status !== 'VALID') {
      // this.appService.setAlert(this.invalidPassword);
      return this.isValid = false;
    } else {
      return this.isValid = true;
    }
  }
}
