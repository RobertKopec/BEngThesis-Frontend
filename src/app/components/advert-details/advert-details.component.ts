import {Component, Input, OnInit} from '@angular/core';
import {AppService} from '../../app.service';
import {Constrains} from '../../app.constraints';

@Component({
  selector: 'app-advert-details',
  templateUrl: './advert-details.component.html',
  styleUrls: ['./advert-details.component.scss']
})
export class AdvertDetailsComponent implements OnInit {

  private descriptionText = Constrains.descriptionText;
  private categoryText = Constrains.categoryText;
  private stateText = Constrains.stateText;
  private priceText = Constrains.priceText;
  private addressText = Constrains.addressText;
  private telNumberText = Constrains.telNumberText;
  private deliveryOptions = Constrains.deliveryOptions;

  advert: object;

  @Input() index: number;

  constructor(private appService: AppService) {
    this.advert = this.appService.filteredAdverts;
    console.log(this.index);
    console.log(this.advert);
  }

  ngOnInit() {

  }

  delivery() {

  }
}
