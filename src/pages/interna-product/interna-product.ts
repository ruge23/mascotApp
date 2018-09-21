import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-interna-product',
  templateUrl: 'interna-product.html',
})
export class InternaProductPage {

  detailProduct : any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.detailProduct = this.navParams.data;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InternaProductPage');
  }

}
