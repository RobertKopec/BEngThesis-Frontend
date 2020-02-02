import {Component, ViewChild} from '@angular/core';
import {AppService} from '../../app.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {Constrains} from '../../app.constraints';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-create-advert',
  templateUrl: './create-advert.component.html',
  styleUrls: ['./create-advert.component.scss']
})
export class CreateAdvertComponent {

  @ViewChild('f', {static: false}) singUpForm: NgForm;

  private title = Constrains.title;
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

  constructor(private appService: AppService, private modalService: NgbModal) { }

  onSubmit() {
  }

  // createAdvert() {
  //   this.createAdvertError = '';

  //     this.appService.createAdvert(
  //       // tslint:disable-next-line:max-line-length
  //       this.title, this.descriptionInputRef.nativeElement.value, this.price, new Date(), this.category, this.number, this.address, this.state, this.picture, this.personal, this.shipment, this.appService.user
  //     );
  //     this.modalService.dismissAll();
  //   }
  // }
}
