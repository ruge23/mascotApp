//import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators/tap';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Storage } from '@ionic/storage';

export interface User {
  name: string;
  role: number;
}

@Injectable()
export class AuthProvider {

  currentUser: User;

  constructor(public http: HttpClient, public storage: Storage) {
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
 
  setUserId(userid){
    this.storage.set("_uid_",userid);

  }

  public selectedlocation: string = "";
  
  getselectedlocation(){
    return this.selectedlocation;
  }
  
  setselectedlocation(sl){
    this.selectedlocation = sl;
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
