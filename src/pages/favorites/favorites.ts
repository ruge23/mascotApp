import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { InternaProductPage } from '../interna-product/interna-product';

@IonicPage()
@Component({
  selector: 'page-favorites',
  templateUrl: 'favorites.html',
})
export class FavoritesPage {

  public listProducts: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.listProducts = [{
      name: "Eukanuba 20kg",
      brand: "Eukanuba"
    },{
      name: "Dogui 20kg",
      brand: "American"
    },{
      name: "Chachacha 20kg",
      brand: "Clanson"
    },{
      name: "DogChow 20kg",
      brand: "American"
    },];
  }



  ionViewDidLoad() {
    console.log('ionViewDidLoad FavoritesPage');
  }

  goToProduct(product){
    this.navCtrl.push(InternaProductPage, product);
  }
}
