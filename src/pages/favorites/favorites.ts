import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProductProvider } from '../../providers/product/product';

import { InternaProductPage } from '../interna-product/interna-product';
import { FavoriteProvider } from './../../providers/favorite/favorite';

@IonicPage()
@Component({
  selector: 'page-favorites',
  templateUrl: 'favorites.html',
})
export class FavoritesPage {

  products : any[];
  userid : string = "1";

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private favorite: FavoriteProvider, 
    private productProvider: ProductProvider) {
    this.getProducts(this.userid);
  }

  ionViewWillEnter(){
    this.getProducts(this.userid);      
  }

  getProducts(userid){
    this.favorite.getAllFavorites(userid)
      .subscribe(
        products => {console.log('a',products),this.products =products['data']}
      )
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FavoritesPage');
  }

  goToProduct(product){
    this.navCtrl.push(InternaProductPage, product);
  }

  removeFromCart(item) {
    let index = this.products.indexOf(item);
    if (index > -1) {
      this.products.splice(index, 1);
    }
    let index1 = this.products.indexOf(item);
    if(index1 > -1){
      this.products.splice(index1, 1);
    }
    console.log("antes");
    this.favorite.deleteToFavorite(this.userid,item.id).subscribe(x => console.log("listo"));
    console.log("despues");
  }
}
