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
  data : Observable <any>;

  constructor(public http: HttpClient) {
    this.listSizeSubject = new Subject();
    this._listSize = this.listSizeSubject.asObservable();
    console.log('Hello ShoppingServiceProvider Provider');
  }

  get listSize(){
    return this._listSize;
  }

  getProducts(){
    return this.products;
  }


  public addItem(product){
    this.products.push(product);
    this.listSizeSubject.next(this.products.length);//next method updates the stream value
  }

  public removeItem(product){
    let index = this.products.indexOf(product);
    console.log("remove en shop", index);
    if (index > -1) {
      this.products.splice(index, 1);
      this.listSizeSubject.next(this.products.length);
      console.log("el largo",this.products.length);
    }
  }
  public removeAll(){    
      this.products = null;
  }

  sendRequest(userid,comment,foodweeks,products,fecha){
    var url = "http://ctrlztest.com.ar/mascotasya/apirest/request-create.php";
    let jsonProduct = JSON.stringify(products)
  
    let data = new FormData();
    data.append('userid', userid);
    data.append('comment', comment);
    data.append('foodweeks', foodweeks);
    data.append('products', jsonProduct);
    data.append('daterequest', fecha);
    
   /*  console.log('productos', data.get(jsonProduct));
    console.log('commet', data.get(comment));
    console.log('foodweeks', data.get(foodweeks));
    console.log('daterequest', data.get(fecha)); */
    
    this.data = this.http.post(url, data);
    this.data.subscribe(data =>{
      console.log(data);
    })
  }

}
