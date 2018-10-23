import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Nav, App } from 'ionic-angular';

import { TabsPage } from './../tabs/tabs';
import { LoginPage } from './../login/login';
import { ConsultasPage } from './../consultas/consultas';
import { MasPage } from './../mas/mas';
import { PendientesPage } from './../pendientes/pendientes';
import { ShopCartPage } from './../shop-cart/shop-cart';
import { FavoritesPage } from './../favorites/favorites';
import { HomePage } from './../home/home';

export interface PageInterface{
  title: string;
  pageName: string;
  tabComponent?: any;
  index?: number;
  icon: string;
  isMenu: boolean;
}

@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {

  rootPage= TabsPage;

  pages : PageInterface[] = [
    {title: 'Perfil', pageName: 'MasPage', tabComponent: 'MasPage', index: 4, icon: 'contact', isMenu: true},        
    {title: 'Home', pageName: 'HomePage', tabComponent: 'HomePage', index: 0, icon: 'mascotapp-home', isMenu: true},    
    {title: 'Favoritos', pageName: 'FavoritesPage', tabComponent: 'FavoritesPage', index: 1, icon: 'mascotapp-favoritos', isMenu: true},        
    {title: 'Carrito', pageName: 'ShopCartPage', tabComponent: 'ShopCartPage', index: 2, icon: 'mascotapp-carrito', isMenu: true},        
    {title: 'Pendientes', pageName: 'PendientesPage', tabComponent: 'PendientesPage', index: 3, icon: 'mascotapp-pendientes', isMenu: true},        
    {title: 'Soporte', pageName: 'ConsultasPage', icon: 'chatbubbles', isMenu: false}
  ]

  @ViewChild(Nav) nav: Nav;

  constructor(public navCtrl: NavController, public navParams: NavParams, private appCtrl: App) {
  }

  openPage(page: PageInterface){
    let params = {};

    if(page.isMenu){
      if(page.index){
        params = {tabIndex : page.index}
      }
  
      if(this.nav.getActiveChildNav() && page.index != undefined){
        this.nav.getActiveChildNav().select(page.index);
      }else{
        this.nav.setRoot(page.pageName, params);
      }
      
    }else{
      this.navCtrl.push(ConsultasPage);
    }

  }

  isActive(page: PageInterface){
    /* let childNav = this.nav.getActiveChildNav();

    if(childNav){
      if(childNav.getSelected() && childNav.getSelected().root === page.tabComponent){
        return 'royal';
      }
      return;
    } */
  }

  logout(){
    this.appCtrl.getRootNav().setRoot(LoginPage);
  }

}
