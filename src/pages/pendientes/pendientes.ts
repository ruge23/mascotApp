import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { InternaProductPage } from '../interna-product/interna-product';

@IonicPage()
@Component({
  selector: 'page-pendientes',
  templateUrl: 'pendientes.html',
})
export class PendientesPage {

  public listProducts: any[];
  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage) {
    if (this.storage.get("pending-list")) {
      storage.get('pending-list').then((val) => {
        this.listProducts = val;
      });
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PendingCart');
  }

  goToProduct(product){
    this.navCtrl.push(InternaProductPage, product);
  }
}
