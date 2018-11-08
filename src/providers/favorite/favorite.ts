import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http, Response,Request } from '@angular/http';
import { tap } from 'rxjs/operators/tap';


@Injectable()
export class FavoriteProvider {

  data : Observable <any>;

  constructor(public http: HttpClient) {
    console.log('Hello FavoriteProvider Provider');
  }

  getAllFavorites(userid):any{
    return this.http.get("http://ctrlztest.com.ar/mascotasya/apirest/user-favorites.php?userid="+userid)
      .pipe(tap(response => response['data']));
  }

  addToFavorite(userId, productId){
    var url = "http://ctrlztest.com.ar/mascotasya/apirest/user-create-favorite.php";
    let postData = new FormData();
    postData.append('userid', userId);
    postData.append('productid', productId)
    this.data = this.http.post(url, postData);
    this.data.subscribe(data =>{
      console.log(data);
    })
  }

  deleteToFavorite(userid, productid){
    var url = "http://ctrlztest.com.ar/mascotasya/apirest/user-delete-favorite.php";
    let postData = new FormData();
    postData.append('userid', userid);
    postData.append('productid', productid)
    this.data = this.http.post(url, postData);
    this.data.subscribe(data =>{
      console.log(data);
    })
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
