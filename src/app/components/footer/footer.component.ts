import {Component, OnInit} from '@angular/core';
import {Constrains} from '../../app.constraints';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  private text = Constrains.text;
  private author = Constrains.author;

  constructor() { }

  ngOnInit() {
  }

}
