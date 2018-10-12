import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {

  @Input() classes: string;
  @Input() text: string;
  @Input() iconNameArray: string;
  @Input() iconSize: string;
}
