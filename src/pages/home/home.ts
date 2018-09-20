import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { PRODUCTS } from './../../data/product-mok';
import { MARCAS } from './../../data/marcas-mok';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  images : any;
  products : any = PRODUCTS;
  marcas : any = MARCAS;

  constructor(public navCtrl: NavController) {
    this.images=['https://www.encantadordeperros.es/wp-content/uploads/2016/12/6-805x452.jpg', 'https://www.encantadordeperros.es/wp-content/uploads/2016/12/6-805x452.jpg', 'https://www.encantadordeperros.es/wp-content/uploads/2016/12/6-805x452.jpg']
  }


}
