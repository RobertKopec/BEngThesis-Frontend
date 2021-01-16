import {Component, ViewChild} from '@angular/core';
import {AppService} from '../../app.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {Constrains} from '../../app.constraints';
import {NgForm} from '@angular/forms';
import {AdvertModel} from '../../models/advert.model';

@Component({
  selector: 'app-create-advert',
  templateUrl: './create-advert.component.html',
  styleUrls: ['./create-advert.component.scss']
})
export class CreateAdvertComponent {

  @ViewChild('f', {static: false}) createAdvertForm: NgForm;

  private titleText = Constrains.title;
  private descriptionText = Constrains.descriptionText;
  private categoryText = Constrains.categoryText;
  private categories = Constrains.categories;
  private stateText = Constrains.stateText;
  private states = Constrains.states;
  private priceText = Constrains.priceText;
  private addressText = Constrains.addressText;
  private pictureText = Constrains.pictureText;
  private deliveryOptions = Constrains.deliveryOptions;
  private personalText = Constrains.personalText;
  private shipmentText = Constrains.shipmentText;
  private telNumberText = Constrains.telNumberText;
  private submit = Constrains.submit;

  private onlyDigits = Constrains.onlyDigits;
  private phoneNumber = Constrains.phoneNumber;

  private invalidAddress = Constrains.invalidAddress;
  private invalidTelNumber = Constrains.invalidTelNumber;
  private invalidTitle = Constrains.invalidTitle;
  private invalidDescription = Constrains.invalidDescription;
  private invalidPrice = Constrains.invalidPrice;
  private invalidState = Constrains.invalidState;
  private invalidCategory = Constrains.invalidCategory;
  private invalidPhoto = Constrains.invalidPhoto;

  constructor(private appService: AppService, private modalService: NgbModal) {
  }

  private advert: AdvertModel;

  onSubmit() {
    console.log(this.appService.user);
    this.createAdvertModelInstance();
    this.appService.createAdvert(this.advert);
    this.modalService.dismissAll();
  }

  createAdvertModelInstance(): void {
    this.advert = new AdvertModel(
      this.createAdvertForm.value.title,
      this.createAdvertForm.value.description,
      this.createAdvertForm.value.price,
      new Date(),
      this.createAdvertForm.value.category,
      this.createAdvertForm.value.telNumber,
      this.createAdvertForm.value.city,
      this.createAdvertForm.value.state,
      this.createAdvertForm.value.picture,
      this.createAdvertForm.value.personal,
      this.createAdvertForm.value.shipment,
      this.appService.user,
    );
  }
}
