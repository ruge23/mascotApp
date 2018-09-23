import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { MasPage } from './../mas/mas';
import { PendientesPage } from './../pendientes/pendientes';
import { FavoritesPage } from '../favorites/favorites';
import { ShopCartPage } from '../shop-cart/shop-cart';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = FavoritesPage;
  tab3Root = ShopCartPage;
  tab4Root = PendientesPage;
  tab5Root = MasPage;
  
  constructor() {

  }
}
