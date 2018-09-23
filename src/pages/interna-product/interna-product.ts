import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ShopCartPage } from '../shop-cart/shop-cart';
import { Storage } from '@ionic/storage';


@IonicPage()
@Component({
  selector: 'page-interna-product',
  templateUrl: 'interna-product.html',
})
export class InternaProductPage {

  public detailProduct: any;
  private listProducts: any[];
  private listPendings: any[];
  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage) {
    this.detailProduct = this.navParams.data;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InternaProductPage');
  }

asfasf(){
  console.log("asfs");
}

  goToComprar(product) {
    //agregar a la lista del carrito
   console.log("add product");
    this.listProducts = [];
    if (this.storage.get("product-list")) {
      this.storage.get('product-list').then((val) => {
        this.listProducts = val;
      });
    }

    this.listProducts.push(product);
    this.storage.set("product-list", this.listProducts);
  
  }

  goToPending(product) {
    //agregar a la lista del carrito
    console.log("add pending");
   
    this.listPendings = [];
    if (this.storage.get("pending-list")) {
      this.storage.get('pending-list').then((val) => {
        this.listPendings = val;
      });
    }

    this.listPendings.push(product);
    this.storage.set("pending-list", this.listPendings);
  
  }

}
