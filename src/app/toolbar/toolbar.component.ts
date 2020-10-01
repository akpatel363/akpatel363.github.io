import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent {
  @ViewChild('social') social: ElementRef;
  @ViewChild('icon') icon: ElementRef;
  constructor() {}
  toggle() {
    this.social.nativeElement.classList.toggle('active');
    this.icon.nativeElement.classList.toggle('fa-times');
    this.icon.nativeElement.classList.toggle('fa-user');
  }
}
