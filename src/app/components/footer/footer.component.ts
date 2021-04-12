import {Component} from '@angular/core';
import {Constrains} from '../../app.constraints';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  public text = Constrains.text;
  public author = Constrains.author;

  constructor() {
  }
}
