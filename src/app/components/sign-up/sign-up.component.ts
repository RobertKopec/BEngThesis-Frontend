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
  @ViewChild('f', {static: false}) singUpForm: NgForm;

  constructor(private appService: AppService, private modalService: NgbModal) {
  }

  public loginText = Constrains.loginText;
  public passwordText = Constrains.passwordText;
  public emailText = Constrains.emailText;
  public usernameText = Constrains.usernameText;
  public cityText = Constrains.cityText;
  public telNumberText = Constrains.telNumberText;
  public signUpButton = Constrains.signUpButton;

  public invalidLogin = Constrains.invalidLogin;
  public invalidPassword = Constrains.invalidPassword;
  public invalidEmail = Constrains.invalidEmail;
  public invalidUserName = Constrains.invalidUserName;
  public invalidCity = Constrains.invalidCity;
  public invalidTelNumber = Constrains.invalidTelNumber;

  public onlyLetters = Constrains.onlyLetters;
  public phoneNumber = Constrains.phoneNumber;
  public passwordValidation = Constrains.passwordValidation;
  public loginValidation = Constrains.loginValidation;

  public loginTitle = Constrains.loginTitle;
  public goToLogIn = Constrains.goToLogIn;

  private user: UserModel;

  onSubmit() {
    this.createUserModelInstance();
    this.appService.signUp(this.user);
    this.modalService.dismissAll();
  }

  createUserModelInstance(): void {
    this.user = new UserModel(
      this.singUpForm.value.login,
      this.singUpForm.value.password,
      this.singUpForm.value.email,
      this.singUpForm.value.userName,
      this.singUpForm.value.city,
      this.singUpForm.value.telNumber);
  }

  open(logIn) {
    this.modalService.dismissAll();
    this.modalService.open(logIn, {centered: true});
  }
}
