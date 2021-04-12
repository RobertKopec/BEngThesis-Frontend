import {Component, Input, OnInit} from '@angular/core';
import {Constrains} from '../../app.constraints';
import {AdvertModel} from '../../models/advert.model';
import {AppService} from '../../app.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-advert-details',
  templateUrl: './advert-details.component.html',
  styleUrls: ['./advert-details.component.scss']
})
export class AdvertDetailsComponent implements OnInit {

  @Input() advert: AdvertModel;

  public descriptionText = Constrains.descriptionText;
  public categoryText = Constrains.categoryText + ':';
  public stateText = Constrains.stateText + ':';
  public priceText = Constrains.priceText + ':';
  public cityText = Constrains.cityText + ':';
  public telNumberText = Constrains.telNumberText + ':';
  public deliveryOptions = Constrains.deliveryOptionsText;

  private favouritesChanged: Subscription;
  public advertTags: string[];
  public favourite: boolean;

  constructor(public appService: AppService) {
  }

  ngOnInit() {
    this.advertTags = this.advert.tags.split(',');

    this.favouritesChanged = this.appService.favouritesChanged.subscribe(
      () => {
        this.favourite = this.appService.isFavourite(this.advert.tradeAdvertId);
      }
    );
  }

  removeAdvert(advertId): void {
    this.appService.removeAdvert(advertId, null);
  }
}
