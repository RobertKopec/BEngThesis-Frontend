import {Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {AppService} from '../../app.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit, OnDestroy {
  @ViewChild('message', {static: false}) messageRef: ElementRef;
  // private subscription: Subscription;
  messageChanged: Subscription;
  private element = this.messageRef.nativeElement;

  // private alertMessage: string;

  constructor(private appService: AppService) {
  }

  ngOnInit(): void {
    // this.alertMessage = this.appService.alertMessage; // first subscription fix
    // this.subscription = this.appService.alertMessageChanged.subscribe(
    //   () => {
    //     this.alertMessage = this.appService.alertMessage;
    //     console.log(this.alertMessage);
    //   }
    // );

    this.messageChanged = this.appService.messageChanged.subscribe(
      (message) => {
        if (message.type === 'ERROR') {
          this.addErrorMessage(message.text);
        } else if (message.type === 'SUCCESS') {
          this.addSuccessMessage(message.text);
        }
      }
    );
  }

  addErrorMessage(message) {
    this.clearClass();
    this.element.classList.add('alert-danger', 'notification', 'alert');
    this.element.innerHTML = message;
  }

  addSuccessMessage(message) {
    this.clearClass();
    this.element.classList.add('alert-success', 'notification', 'alert');
    this.element.innerHTML = message;
  }

  clearClass() {
    this.element.innerHTML = '';
    this.appService.message = {text: '', type: ''};

    if (this.element.classList.contains('alert-danger')) {
      this.element.classList.remove('alert-danger', 'notification', 'alert');
    } else if (this.element.classList.contains('alert-success')) {
      this.element.classList.remove('alert-success', 'notification', 'alert');
    }
  }

  ngOnDestroy(): void {
    this.messageChanged.unsubscribe();
  }
}
