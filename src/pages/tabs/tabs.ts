import { ShoppingServiceProvider } from './../../providers/shopping-service/shopping-service';
import { NavController, NavParams } from 'ionic-angular';
import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
import { AboutPage } from '../about/about';
import { HomePage } from '../home/home';
import { MasPage } from './../mas/mas';
import { PendientesPage } from './../pendientes/pendientes';
import { FavoritesPage } from '../favorites/favorites';
import { ShopCartPage } from '../shop-cart/shop-cart';
import { Observable } from 'rxjs/Observable';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  
  tab1Root = HomePage;
  tab2Root = FavoritesPage;
  tab3Root = ShopCartPage;
  tab4Root = PendientesPage;
  tab5Root = MasPage;
  count$: Observable<number>;
  myIndex:number;
  badge: number;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage, public shoppingService: ShoppingServiceProvider) {
    this.myIndex = navParams.data.tabIndex || 0;
    //this.countCarItem = this.storage.get('products-add') ? this.storage.get('products-add').then((val)=> this.badge = val) : this.badge = 0;
    //this.countCarItem();
  }
  
  ngOnInit(){  
    this.count$ = this.shoppingService.listSize;
  }
  /* ionViewDidLoad(){
  } */


}
