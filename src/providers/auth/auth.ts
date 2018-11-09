//import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LOCALIDADES } from '../../data/localidades-mok';
import { tap } from 'rxjs/operators/tap';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

export interface User {
  name: string;
  role: number;
}

@Injectable()
export class AuthProvider {

  currentUser: User;

  constructor(public http: HttpClient) {
    console.log('Hello AuthProvider Provider');
  }

  login(name: string, pw: string): Observable<any> {
    return this.http.get("http://ctrlztest.com.ar/mascotasya/apirest/validate-user.php?user=" + name + "&pass=" + pw)
      .pipe(tap(response => {
        if (response['data']) {
          this.currentUser = {
            name: name,
            role: 0
          };
        }
     
      }));
  }

  getLocalidades(): Observable<any> {
    return this.http.get("http://ctrlztest.com.ar/mascotasya/apirest/locations-all.php")
      .pipe(tap(response => response['data']));
  }

  isLoggedIn() {
    return this.currentUser != null;
  }

  isUser() {
    return this.currentUser.role === 0;
  }

  logout() {
    this.currentUser = null;
  }

}
