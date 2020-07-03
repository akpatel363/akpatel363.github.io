import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
  @Input() p:any
  constructor() { }

  ngOnInit(): void {
  }

}
