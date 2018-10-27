import {Component, EventEmitter, Input, Output} from '@angular/core';

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

  @Output() update: EventEmitter<string> = new EventEmitter<string>();

  onUpdate(): void {
    this.update.emit(this.value);
  }
}
