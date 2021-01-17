import {Component, OnInit} from '@angular/core';
import {Constrains} from '../../app.constraints';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  private stateText = Constrains.stateText;
  private states = Constrains.statesText;
  private priceText = Constrains.priceText;
  private deliveryOptions = Constrains.deliveryOptionsText;
  private personalText = Constrains.personalText;
  private shipmentText = Constrains.shipmentText;
  private localization = Constrains.localization;
  private rangeText = Constrains.rangeText;

  constructor() { }

  ngOnInit() {
  }

}
