import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { InternaProductPage } from '../interna-product/interna-product';

@IonicPage()
@Component({
  selector: 'page-pendientes',
  templateUrl: 'pendientes.html',
})
export class PendientesPage {

  _cartPendient= [];
  
  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage, public alertCtrl: AlertController) {
  }

  addToPendient(item){
    this._cartPendient.push(item);
  }

  removeFromPendient(item) {
    let index = this._cartPendient.indexOf(item);
    if (index > -1) {
      this._cartPendient.splice(index, 1);
    }
  }

  addToCart(item){
    this.addToCart_mesaage();
    this.removeFromPendient(item)
    this.storage.set('product-list', item);
  }

  addToCart_mesaage(){
    const alert = this.alertCtrl.create({
      title: 'Product Add!',
      subTitle: 'Producto agregado al Carrito!',
      buttons: ['OK']
    });
    alert.present();
  }

  ionViewWillEnter(){
    this.storage.get('pending-list').then((val) => {
      if(val != null){
        this.addToPendient(val);
        this.storage.set('pending-list', null)
      }
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PendingCart');
  }

  goToProduct(product){
    this.navCtrl.push(InternaProductPage, product);
  }
}
