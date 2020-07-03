import { Component, OnInit } from '@angular/core';
import { animate, trigger, query, transition, style, group } from '@angular/animations'

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  animations: [
    trigger('aboutAnimation', [
      transition('void => *', [
        group([          
          query('h1.title',[
            style({ opacity: 0, transform: 'translateX(-100px)' }), animate('.7s ease-out')
          ]),
          query('p',[
            style({ opacity: 0, transform: 'translateY(100px)' }), animate('.7s ease-out')
          ]),
          query('a.btn',[
            style({ opacity: 0, transform: 'translateY(100px)' }), animate('.7s ease-out')
          ])
        ])
      ])
    ])
  ]
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
