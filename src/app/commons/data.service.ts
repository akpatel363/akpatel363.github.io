import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators'
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private http: HttpClient) { }
  getRepositories = () => this.http.get('https://api.github.com/users/akpatel363/repos').pipe(catchError(this.handleError))
  private handleError(error) {
    return throwError("Check your internet connction.")
  }
}
