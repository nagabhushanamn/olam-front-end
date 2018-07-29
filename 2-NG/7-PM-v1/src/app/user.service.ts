import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  login(user) {
    let url = 'http://localhost:3000/api/Users/login';
    return this.http.post(url, user)
  }


}
