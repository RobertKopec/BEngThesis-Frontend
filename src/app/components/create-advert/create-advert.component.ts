import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {AppService} from '../../app.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {Constrains} from '../../app.constraints';
import {NgForm} from '@angular/forms';
import {AdvertModel} from '../../models/advert.model';
import {UserModel} from '../../models/user.model';

@Component({
  selector: 'app-create-advert',
  templateUrl: './create-advert.component.html',
  styleUrls: ['./create-advert.component.scss']
})
export class CreateAdvertComponent implements OnInit {
  @Input() advertToEdit: AdvertModel;
  @Input() editMode: boolean;

  @ViewChild('f', {static: false}) createAdvertForm: NgForm;

  public titleText = Constrains.advertTitleText;
  public descriptionText = Constrains.descriptionText;
  public categoryText = Constrains.categoryText;
  public categories = Constrains.categories;
  public stateText = Constrains.stateText;
  public states = Constrains.statesText;
  public priceText = Constrains.priceText;
  public cityText = Constrains.cityText;
  public pictureText = Constrains.pictureText;
  public deliveryOptions = Constrains.deliveryOptionsText;
  public personalText = Constrains.personalText;
  public shipmentText = Constrains.shipmentText;
  public telNumberText = Constrains.telNumberText;
  public tagText = Constrains.tagText;
  public addTagText = Constrains.addTagText;
  public submit = Constrains.submitText;

  public onlyDigits = Constrains.onlyDigits;
  public phoneNumber = Constrains.phoneNumber;

  public invalidCity = Constrains.invalidCity;
  public invalidTelNumber = Constrains.invalidTelNumber;
  public invalidTitle = Constrains.invalidTitle;
  public invalidDescription = Constrains.invalidDescription;
  public invalidPrice = Constrains.invalidPrice;
  public invalidState = Constrains.invalidState;
  public invalidCategory = Constrains.invalidCategory;
  public invalidPicture = Constrains.invalidPicture;

  public cityFromUser: string;
  public telNumberFromUser: string;

  public advert: AdvertModel;
  public advertTags: string[];
  public advertTagsCounts: number[];
  public isEditMode = false;

  constructor(private appService: AppService, private modalService: NgbModal) {
    this.cityFromUser = this.appService.user.city;
    this.telNumberFromUser = this.appService.user.telNumber;
  }

  ngOnInit() {
    this.isEditMode = this.editMode === true;
    if (this.isEditMode && this.advertToEdit) {
      this.advert = this.advertToEdit;
      this.advertTags = this.deserializeTags(this.advert.tags);
    } else {
      this.advert = this.createAdvertModelInstance(0, '', '', 0, '', this.appService.user.telNumber, this.appService.user.city,
        '', '', false, false, '', this.appService.user.userName, this.appService.user);
      this.advertTags = ['', ''];
    }
    this.advertTagsCounts = new Array(this.advertTags.length);
  }

  onSubmit() {
    if (this.isEditMode)
      this.appService.updateAdvert(this.createAdvertModelInstance(this.advert.tradeAdvertId, this.createAdvertForm.value.title,
        this.createAdvertForm.value.description, this.createAdvertForm.value.price,
        this.createAdvertForm.value.category, this.createAdvertForm.value.telNumber, this.createAdvertForm.value.city,
        this.createAdvertForm.value.state, this.createAdvertForm.value.picture, this.createAdvertForm.value.personal,
        this.createAdvertForm.value.shipment, this.serializeTags(), this.advert.userName, this.advert.user));
    else
      this.appService.createAdvert(this.createAdvertModelInstance(this.advert.tradeAdvertId, this.createAdvertForm.value.title,
        this.createAdvertForm.value.description, this.createAdvertForm.value.price,
        this.createAdvertForm.value.category, this.createAdvertForm.value.telNumber, this.createAdvertForm.value.city,
        this.createAdvertForm.value.state, this.createAdvertForm.value.picture, this.createAdvertForm.value.personal,
        this.createAdvertForm.value.shipment, this.serializeTags(), this.advert.userName, this.advert.user));
    this.modalService.dismissAll();
  }

  createAdvertModelInstance(tradeAdvertId: number, title: string, description: string, price: number, category: string,
                            telNumber: string, city: string, state: string, picture: string, personal: boolean, shipment: boolean, tags: string, userName: string,
                            user: UserModel): AdvertModel {
    return new AdvertModel(
      tradeAdvertId,
      title,
      description,
      price,
      category,
      telNumber,
      city,
      state,
      picture,
      personal,
      shipment,
      tags,
      userName,
      user);
  }

  addNewTag() {
    this.advertTags.push('');
    this.advertTagsCounts = new Array(this.advertTags.length);
  }

  private serializeTags(): string {
    for (const tag of this.advertTags) {
      if (tag === undefined || tag === '') {
        this.advertTags.splice(this.advertTags.indexOf(tag), 1);
      }
    }
    return this.advertTags.toString();
  }

  private deserializeTags(tags: string): string[] {
    return tags.split(',');
  }
}
