import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent {
  value: string;
  @Input() classes: string;
  @Input() placeholder: string;
  @Input() type: string;

  @Output() update: EventEmitter<string> = new EventEmitter<string>();

  onUpdate(): void {
    this.update.emit(this.value);
  }
}
