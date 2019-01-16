import { HttpClient } from '@angular/common/http';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { tap } from 'rxjs/operators/tap';


@Injectable()
export class ProductProvider {
  public brands: any;
  public prods: any;
  constructor(public http: HttpClient, public http2: Http) {
    console.log('Hello ProductProvider Provider');
  }

  getProducts(userid,local): Observable<iProduct> {
    let url = "http://ctrlztest.com.ar/mascotasya/apirest/product-all-location.php?location="+local+"&userid="+userid;
    console.log(url);
    return this.http.get<iProduct>(url);
  }

  getBrand(): any {
    return this.http.get("http://ctrlztest.com.ar/mascotasya/apirest/brand-all.php")
      .pipe(tap(response => this.brands = response['data']));
  }

  getSlidesProd(): Observable<any>{
    return this.http.get("http://ctrlztest.com.ar/mascotasya/apirest/slider-all.php")
    .pipe(tap(res => res['data']));
  }

  sendConsulta(userId, mensaje):Observable<any>{
    return this.http.get("http://ctrlztest.com.ar/mascotasya/apirest/send-support.php?userid="+userId+"&mensaje="+mensaje)
    .pipe(tap(res => res['data']));
  }

/* 
  getLocalBrands() {
    this.storage.get("brands").then((val) => {
      if(val != null && val != undefined){
        return JSON.parse(val);
      }
    })
  }
  getLocalProducts() {
  this.storage.get("prods").then((val) => {
    if(val != null && val != undefined){
      return JSON.parse(val);
    }    
  })
  } */

}

export class iProduct {
  id: number;
  name: string;
  description: string;
  composition: string;
  price: number;
  units: number;
  imageSrc: string;
  rate: number;
  brand: string;
  fav: boolean;
  amount: number = 1;
  forDog: boolean;
  forCat: boolean;
  forAdult: boolean;
  forPuppy: boolean;
}