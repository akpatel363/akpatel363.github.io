import { Component, Input, EventEmitter, Output } from '@angular/core';
import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';

@Component({
  selector: 'project-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
  animations: [
    trigger('detailsAnim', [
      state(
        'void',
        style({ opacity: 0, transform: 'translate(-50%,50%) scaleY(0)' })
      ),
      state(
        '*',
        style({ opacity: 1, transform: 'translate(-50%,-50%) scaleY(1)' })
      ),
      transition('void <=> *', [animate('.2s ease-out')]),
    ]),
  ],
})
export class DetailsComponent {
  @Input() p: any;
  @Output() close = new EventEmitter<boolean>();
  constructor() {}
  closeDetails = () => this.close.emit(true);
}
