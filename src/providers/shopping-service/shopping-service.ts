import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { iProduct } from '../product/product';

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
      this.products = [];
      this.listSizeSubject.next(this.products.length);
  }

  sendRequest(request):Observable<any>{
    var url = "http://ctrlztest.com.ar/mascotasya/apirest/request-create.php";
    let jsonProductos = [];
    console.log("request",request.products);
    request.products.map((prod) => {
      let product = {};
      console.log("req am id", prod.id, prod.amount);
      product['productid'] = prod.id;
      product['amount'] = prod.amount;
      jsonProductos.push(product);
    })    
    
    let jsonProduct = JSON.stringify(jsonProductos)
  
    let fdata = new FormData();
    fdata.append('userid', request.userid);
    fdata.append('comment', request.comment);
    fdata.append('foodweeks', request.foodweeks);
    fdata.append('products', jsonProduct);
    fdata.append('daterequest', request.daterequest);
    fdata.append('deliverydays', request.deliverydays);
    fdata.append('deliverytime', request.deliverytime);
    fdata.append('isimportant', (request.isimportant ? "1" : "0"));
    /*
    if(!empty($_POST["userid"]) && !empty($_POST["comment"]) && !empty($_POST["foodweeks"])
     && !empty($_POST["daterequest"]) && !empty($_POST["products"]) && !empty($_POST["deliverytime"])
     && !empty($_POST["deliverydays"]) && !empty($_POST["isimportant"]))
    */
     console.log(fdata);
   return this.http.post(url, fdata);
    // this.data.subscribe(data =>{
    //   console.log(data);
    // })
  }

  

}
export class cartRequest{
  userid: number;
  comment: string;
  foodweeks: string;
  products: iProduct[];
  daterequest: Date;
  deliverytime: string;
  deliverydays: string;
  isimportant: boolean;
}
