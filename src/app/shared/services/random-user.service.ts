import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RandomUserService {
  baseUrl = 'https://randomuser.me/api/';

  constructor(private http: HttpClient) { }

  getSomeRandomUsers(): Observable<any> {
    return this.http.get(this.baseUrl + '?results=5&nat=us');
  }
}
