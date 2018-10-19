import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent {
  @Input() classes: string;
  @Input() text: string;
  @Input() value: string;
  @Input() options: object;
}
