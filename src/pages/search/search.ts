import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { InternaProductPage } from '../interna-product/interna-product';

/**
 * Generated class for the SearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage {
  private allproducts: any;
  private productsfiltered: any;
  searchQuery: string = '';
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.allproducts = navParams.data;
    this.productsfiltered = this.allproducts;
  }

  getItems(ev: any) {
    // Reset items back to all of the items
    

    // set val to the value of the searchbar
    const val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.productsfiltered = this.allproducts.filter((item) => {
        return (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchPage');
  }

  goToInterna(product){
    this.navCtrl.push(InternaProductPage, product);
  }

}
