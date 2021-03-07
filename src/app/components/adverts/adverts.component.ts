import {Component, OnInit} from '@angular/core';
import {AppService} from '../../app.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {Constrains} from '../../app.constraints';
import {AdvertModel} from '../../models/advert.model';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-adverts',
  templateUrl: './adverts.component.html',
  styleUrls: ['./adverts.component.scss']
})
export class AdvertsComponent implements OnInit {
  public details = Constrains.details;
  public noAdverts = Constrains.noAdverts;
  public allAdverts: AdvertModel[] = [];

  private advertsChanged: Subscription;

  constructor(private appService: AppService, private modalService: NgbModal) {
  }

  ngOnInit() {
    this.appService.getAdverts();

    this.advertsChanged = this.appService.filteredAdvertsChanged.subscribe(
      () => {
        this.allAdverts = this.appService.filteredAdverts;
      }
    );
  }

  open(advertDetails): void {
    this.modalService.open(advertDetails, {centered: true, size: 'lg'});
  }
}
