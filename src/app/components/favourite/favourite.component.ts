import {Component, OnInit} from '@angular/core';
import {AppService} from '../../app.service';
import {Subscription} from 'rxjs';
import {Constrains} from '../../app.constraints';
import {FavouriteModel} from '../../models/favourite.model';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.scss']
})

export class FavouriteComponent implements OnInit {
  public details = Constrains.details;
  public noFavourites = Constrains.noFavourites;
  public favouriteAdverts: FavouriteModel[] = [];

  private favouriteChanged: Subscription;

  constructor(public appService: AppService, private modalService: NgbModal) {
  }

  ngOnInit() {
    this.appService.getFavouriteAdverts(this.appService.user.userId);

    this.favouriteChanged = this.appService.favouritesChanged.subscribe(
      () => {
        this.favouriteAdverts = this.appService.favourites;
      }
    );
  }

  open(advertDetails): void {
    this.modalService.open(advertDetails, {centered: true, size: 'lg'});
  }
}
