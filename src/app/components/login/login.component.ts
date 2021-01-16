import {Component, ViewChild} from '@angular/core';
import {AppService} from '../../app.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {Constrains} from '../../app.constraints';
import {NgForm} from '@angular/forms';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  @ViewChild('f', {static: false}) loginForm: NgForm;

  constructor(private appService: AppService, private modalService: NgbModal) {
  }

  private userChanged: Subscription;

  public loginText = Constrains.loginText;
  public passwordText = Constrains.passwordText;
  public logInButton = Constrains.logInButton;
  public goToSignUp = Constrains.goToSignUp;
  public signUpTitle = Constrains.signUpTitle;
  public invalidCredentials = Constrains.invalidCredentials;

  onSubmit() {
    this.appService.signIn(this.loginForm.value.login, this.loginForm.value.password);
    this.userChanged = this.appService.userChanged.subscribe(
      () => this.modalService.dismissAll()
    );
  }

  open(signUp) {
    this.modalService.dismissAll();
    this.modalService.open(signUp, {centered: true});
  }

}
