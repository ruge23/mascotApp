import { HttpClient } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { tap } from 'rxjs/operators/tap';


@Injectable()
export class ProductProvider {

  constructor(public http: HttpClient) {
    console.log('Hello ProductProvider Provider');
  }

  getProducts(userid,local): any {
    /*  this.http.get("http://ctrlztest.com.ar/mascotasya/apirest/product-all.php")
                     .map(this.extractData); */
    return this.http.get("http://ctrlztest.com.ar/mascotasya/apirest/product-all-location.php?location="+local+"&userid="+userid)
      .pipe(tap(response => response["data"]));
  }

  getBrand():any{
    return this.http.get("http://ctrlztest.com.ar/mascotasya/apirest/brand-all.php")
      .pipe(tap(response => response['data']));
  }

}
