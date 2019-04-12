import {Component, ViewChild} from '@angular/core';
import {AppService} from '../../app.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {Constrains} from '../../app.constraints';
import {NgForm} from '@angular/forms';
import {UserModel} from '../../models/user.model';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {
  @ViewChild('f') singUpForm: NgForm;

  constructor(private appService: AppService, private modalService: NgbModal) {
  }

  private loginText = Constrains.loginText;
  private passwordText = Constrains.passwordText;
  private emailText = Constrains.emailText;
  private usernameText = Constrains.usernameText;
  private addressText = Constrains.addressText;
  private telNumberText = Constrains.telNumberText;
  private signUpButton = Constrains.signUpButton;

  private invalidLogin = Constrains.invalidLogin;
  private invalidPassword = Constrains.invalidPassword;
  private invalidEmail = Constrains.invalidEmail;
  private invalidUserName = Constrains.invalidUserName;
  private invalidAddress = Constrains.invalidAddress;
  private invalidTelNumber = Constrains.invalidTelNumber;

  private onlyLetters = Constrains.onlyLetters;
  private phoneNumber = Constrains.phoneNumber;
  private passwordValidation = Constrains.passwordValidation;

  private user: UserModel;

  onSubmit() {
    this.user = new UserModel(
      this.singUpForm.value.login,
      this.singUpForm.value.password,
      this.singUpForm.value.email,
      this.singUpForm.value.userName,
      this.singUpForm.value.address,
      this.singUpForm.value.telNumber);
    this.appService.signUp(this.user);
    this.modalService.dismissAll();
  }
}
