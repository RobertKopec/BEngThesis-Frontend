import {Component, OnDestroy, OnInit} from '@angular/core';
import {AppService} from '../../app.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit, OnDestroy {

  private subscription: Subscription;
  private alertMessage: string;

  constructor(private appService: AppService) {
  }

  ngOnInit(): void {
    this.alertMessage = this.appService.alertMessage; // first subscription fix
    this.subscription = this.appService.alertMessageChanged.subscribe(
      () => {
        this.alertMessage = this.appService.alertMessage;
        console.log(this.alertMessage);
      }
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
