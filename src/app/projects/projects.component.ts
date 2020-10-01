import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataService } from '../commons/data.service';
import {
  trigger,
  transition,
  query,
  stagger,
  animateChild,
  animate,
  style,
} from '@angular/animations';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  animations: [
    trigger('projectsAnim', [
      transition('void => *', [
        query('@cardAnim', [stagger('.1s', animateChild())]),
      ]),
    ]),
    trigger('cardAnim', [
      transition(':enter', [
        style({ opacity: 0, transform: 'scale(.3)' }),
        animate('.4s ease-out'),
      ]),
    ]),
  ],
})
export class ProjectsComponent implements OnInit, OnDestroy {
  repos: Array<any>;
  selected: any;
  error: any;
  sub: Subscription;
  constructor(private service: DataService) {}

  ngOnInit(): void {
    this.getRepos();
  }

  getRepos() {
    this.sub = this.service.getRepositories().subscribe(
      (res) => (this.repos = res as Array<any>),
      (err) => (this.error = err)
    );
  }

  retry() {
    this.sub.unsubscribe();
    this.error = null;
    this.getRepos();
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
  closeDetails = () => (this.selected = null);
  selectproject = (i) => (this.selected = this.repos[i]);
}
