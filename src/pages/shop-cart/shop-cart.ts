import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { InternaProductPage } from '../interna-product/interna-product';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the ShopCartPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-shop-cart',
  templateUrl: 'shop-cart.html',
})
export class ShopCartPage {
  public listProducts: any[];
  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage) {
    if (this.storage.get("product-list")) {
      storage.get('product-list').then((val) => {
        this.listProducts = val;
      });
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ShopCartPage');
  }

  goToProduct(product){
    this.navCtrl.push(InternaProductPage, product);
  }

}
