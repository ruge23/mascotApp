import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

/*
  Generated class for the ShoppingServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

@Injectable()
export class ShoppingServiceProvider {
  products: any =[];
  private listSizeSubject: Subject<number>;
  private _listSize: Observable<number>;

  constructor(public http: HttpClient) {
    this.listSizeSubject = new Subject();
    this._listSize = this.listSizeSubject.asObservable();
    console.log('Hello ShoppingServiceProvider Provider');
  }

  get listSize(){
    return this._listSize;
  }

  public addItem(product){
    this.products.push(product);
    this.listSizeSubject.next(this.products.length);//next method updates the stream value
  }

  public removeItem(product){
    let index = this.products.indexOf(product);
    if (index > -1) {
      this.products.splice(index, 1);
      this.listSizeSubject.next(this.products.length);
    }
  }

}
