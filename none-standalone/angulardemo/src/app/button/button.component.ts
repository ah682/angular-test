import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
  standalone: false
})
export class ButtonComponent {
  @Output() toggleVisibility = new EventEmitter<void>();

  handleClick() {
    this.toggleVisibility.emit();
  }
}
