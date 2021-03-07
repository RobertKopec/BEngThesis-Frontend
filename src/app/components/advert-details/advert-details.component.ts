import {Component, Input, OnInit} from '@angular/core';
import {Constrains} from '../../app.constraints';
import {AdvertModel} from '../../models/advert.model';

@Component({
  selector: 'app-advert-details',
  templateUrl: './advert-details.component.html',
  styleUrls: ['./advert-details.component.scss']
})
export class AdvertDetailsComponent implements OnInit {

  public descriptionText = Constrains.descriptionText;
  public categoryText = Constrains.categoryText + ':';
  public stateText = Constrains.stateText + ':';
  public priceText = Constrains.priceText + ':';
  public cityText = Constrains.cityText + ':';
  public telNumberText = Constrains.telNumberText + ':';
  public deliveryOptions = Constrains.deliveryOptionsText;

  @Input() index: number;
  @Input() advert: AdvertModel;

  public advertTags: string[];

  ngOnInit() {
    this.advertTags = this.advert.tags.split(',');
  }
}
