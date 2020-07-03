import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'project-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
  animations: [
    trigger('detailsAnim', [
      state('void', style({ opacity: 0, transform: 'translate(-50%, -50%) scale(.3)' })),
      state('*', style({ opacity: 1, transform: 'translate(-50%, -50%) scale(1)' })),
      transition('void <=> *', [
        animate('.2s ease-out')
      ])
    ])
  ]
})
export class DetailsComponent implements OnInit {
  @Input() p: any
  @Output() close = new EventEmitter<boolean>()
  constructor() { }

  ngOnInit(): void { }

  closeDetails() {
    this.close.emit(true)
  }
}
