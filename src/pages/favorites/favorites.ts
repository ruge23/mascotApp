import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProductProvider } from '../../providers/product/product';

import { InternaProductPage } from '../interna-product/interna-product';

@IonicPage()
@Component({
  selector: 'page-favorites',
  templateUrl: 'favorites.html',
})
export class FavoritesPage {

  products : any[];

  constructor(public navCtrl: NavController, public navParams: NavParams, private productProvider: ProductProvider) {
    this.getProducts();
  }

  getProducts(){
    this.productProvider.getProducts().subscribe(
      products => {console.log('a',products['data']),this.products =products['data']}
    )
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FavoritesPage');
  }

  goToProduct(product){
    this.navCtrl.push(InternaProductPage, product);
  }
}
