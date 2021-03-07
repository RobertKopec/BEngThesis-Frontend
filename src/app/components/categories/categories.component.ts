import {Component} from '@angular/core';
import {AppService} from '../../app.service';
import {Constrains} from '../../app.constraints';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent {

  public categories = Constrains.categories;

  constructor(private appService: AppService) {
  }

  filter(buttonText: string) {
    this.appService.filteredAdverts = [];
    const regexSearch = new RegExp(buttonText, 'i');
    for (const advert of this.appService.adverts) {
      if (regexSearch.test(advert.category)) {
        this.appService.filteredAdverts.push(advert);
      }
    }
  }
}
