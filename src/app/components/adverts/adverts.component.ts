import {Component, OnInit} from '@angular/core';
import {AppService} from '../../app.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {Constrains} from '../../app.constraints';

@Component({
  selector: 'app-adverts',
  templateUrl: './adverts.component.html',
  styleUrls: ['./adverts.component.scss']
})
export class AdvertsComponent implements OnInit {
  private details = Constrains.details;

  constructor(private appService: AppService, private modalService: NgbModal) {
  }

  ngOnInit() {
    this.appService.getAdverts();
  }

  getAdverts() {
    return this.appService.filteredAdverts;
  }

  open(advertDetails) {
    this.modalService.open(advertDetails, {centered: true, size: 'lg'});
  }
}
