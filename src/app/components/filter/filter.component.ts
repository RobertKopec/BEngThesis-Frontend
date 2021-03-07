import {Component, OnInit} from '@angular/core';
import {Constrains} from '../../app.constraints';
import {AppService} from '../../app.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  public stateText = Constrains.stateText;
  public states = Constrains.statesText.slice(1);
  public priceText = Constrains.priceText;
  public deliveryOptions = Constrains.deliveryOptionsText;
  public personalText = Constrains.personalText;
  public shipmentText = Constrains.shipmentText;
  public localization = Constrains.localization;
  public rangeText = Constrains.rangeText;
  public tagText = Constrains.tagText;
  public addTagText = Constrains.addTagText;

  public filterTagsCounts: number[];

  constructor(public appService: AppService) {
  }

  ngOnInit() {
    this.appService.filter.price = new Array<number>(2);
    this.appService.filter.tags.push('');
    this.filterTagsCounts = new Array(this.appService.filter.tags.length);
  }

  addNewTag() {
    this.appService.filter.tags.push('');
    this.filterTagsCounts = new Array(this.appService.filter.tags.length);
  }

  setStateFilterValue(e, stateValue: string): void {
    if (e) {
      this.appService.filter.states.push(stateValue);
    } else {
      this.appService.filter.states.splice(this.appService.filter.states.indexOf(stateValue), 1);
    }
  }
}
