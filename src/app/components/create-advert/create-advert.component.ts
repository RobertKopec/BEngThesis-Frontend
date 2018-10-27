import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {AppService} from '../../app.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-create-advert',
  templateUrl: './create-advert.component.html',
  styleUrls: ['./create-advert.component.scss']
})
export class CreateAdvertComponent implements OnInit {

  @ViewChild('descriptionInput') descriptionInputRef: ElementRef;

  title;
  description;
  price;
  createDate;
  category;
  number;
  address;
  state;
  picture;
  personal;
  shipment;
  user;

  constructor(private appService: AppService, private modalService: NgbModal) { }

  ngOnInit() {
  }

  createAdvert() {
    this.appService.createAdvert(
      // tslint:disable-next-line:max-line-length
      this.title, this.descriptionInputRef.nativeElement.value, this.price, new Date(), this.category, this.number, this.address, this.state, this.picture, this.personal, this.shipment, this.appService.user
    );
    this.modalService.dismissAll();
  }

  assignTitle(title: string) {
    this.title = title;
  }

  assignCategory(category: string) {
    this.category = category;
  }

  assignState(state: string) {
    this.state = state;
  }

  assignPrice(price: string) {
    this.price = Number(price);
  }

  assignAddress(address: string) {
    this.address = address;
  }

  assignPicture(picture: string) {
    this.picture = picture;
  }

  assignPersonal(personal: string) {
    this.personal = personal;
  }

  assignShipment(shipment: string) {
    this.shipment = shipment;
  }

  assignNumber(number: string) {
    this.number = number;
  }
}
