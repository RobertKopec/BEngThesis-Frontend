import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {AppService} from '../../app.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {Constrains} from '../../app.constraints';
import {NgForm} from '@angular/forms';
import {UserModel} from '../../models/user.model';
import {FavouriteModel} from '../../models/favourite.model';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  @ViewChild('f', {static: false}) singUpForm: NgForm;

  @Input() editMode: boolean;
  @Input() userToEdit: UserModel;

  public passwordText = Constrains.passwordText;
  public emailText = Constrains.emailText;
  public usernameText = Constrains.usernameText;
  public cityText = Constrains.cityText;
  public telNumberText = Constrains.telNumberText;
  public roleText = Constrains.roleText;
  public signUpButton = Constrains.signUpButton;
  public updateButton = Constrains.updateButton;

  public invalidPassword = Constrains.invalidPassword;
  public invalidEmail = Constrains.invalidEmail;
  public invalidUserName = Constrains.invalidUserName;
  public invalidCity = Constrains.invalidCity;
  public invalidTelNumber = Constrains.invalidTelNumber;
  public invalidRole = Constrains.invalidRole;

  public onlyLetters = Constrains.onlyLetters;
  public phoneNumber = Constrains.phoneNumber;
  public passwordValidation = Constrains.passwordValidation;
  public roleValidation = Constrains.roleValidation;

  public loginTitle = Constrains.loginTitle;
  public goToLogIn = Constrains.goToLogIn;

  public isEditMode = false;
  public user: UserModel;

  constructor(public appService: AppService, private modalService: NgbModal) {
  }

  ngOnInit() {
    this.isEditMode = this.editMode === true;
    if (this.isEditMode && this.userToEdit) {
      this.user = this.userToEdit;
    } else if (this.isEditMode && !this.userToEdit) {
      this.user = this.appService.user;
    } else {
      this.user = this.createUserModelInstance(0, '', '', '', '', '', 'user', []);
    }
  }

  onSubmit() {
    if (this.isEditMode)
      this.appService.updateUser(this.createUserModelInstance(this.user.userId, this.singUpForm.value.password, this.singUpForm.value.email,
        this.singUpForm.value.userName, this.singUpForm.value.city, this.singUpForm.value.telNumber,
        this.user.role, this.user.favourites));
    else
      this.appService.signUp(this.createUserModelInstance(this.user.userId, this.singUpForm.value.password, this.singUpForm.value.email,
        this.singUpForm.value.userName, this.singUpForm.value.city, this.singUpForm.value.telNumber,
        this.user.role, this.user.favourites));
    this.modalService.dismissAll();
  }

  createUserModelInstance(userId: number, password: string, email: string, userName: string, city: string,
                          telNumber: string, role: string, favourites: FavouriteModel[]): UserModel {
    return new UserModel(
      userId,
      password,
      email,
      userName,
      city,
      telNumber,
      role,
      favourites
    );
  }

  open(logIn) {
    this.modalService.dismissAll();
    this.modalService.open(logIn, {centered: true});
  }
}
