import { TabsPage } from './../tabs/tabs';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { ShopCartPage } from '../shop-cart/shop-cart';
import { Storage } from '@ionic/storage';

import { FavoriteProvider } from './../../providers/favorite/favorite';

@IonicPage()
@Component({
  selector: 'page-interna-product',
  templateUrl: 'interna-product.html',
})
export class InternaProductPage {

  isChecked :boolean;
  public detailProduct: any;
  listProducts = [];
  private listPendings: any[] = [];
  
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController,
    private favorite: FavoriteProvider,
    private storage: Storage
  ) {
      this.detailProduct = this.navParams.data;
      this.isChecked = (this.detailProduct.fav != 0);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InternaProductPage');
  }

  addProduct_cart() {
    const alert = this.alertCtrl.create({
      title: 'Producto Agregado!',
      subTitle: 'Producto agregado al carrito de compras!',
      buttons: ['OK']
    });
    alert.present();
  }

  addProduct_pendient(){
    const alert = this.alertCtrl.create({
      title: 'Producto pendiente!',
      subTitle: 'Producto agregado como Pendiente!',
      buttons: ['OK']
    });
    alert.present();
  }

  addToFavorites(userid, productid){
    if(this.isChecked){
      this.favorite.deleteToFavorite(userid, productid);
      this.isChecked = false;
    }else{
      this.favorite.addToFavorite(userid, productid);
      this.isChecked = true;
    }
  }

  goToComprar(product) {
    this.addProduct_cart();
    //agregar a la lista del carrito
    console.log("add product", product);
    this.storage.set("product-list", product);
        
    /*     this.listProducts.push(product);
    if (this.storage.get("product-list")) {
      this.storage.get('product-list').then((val) => {
        console.log(val)
        this.listProducts = val;
      });
    }else{
      this.storage.set("product-list", this.listProducts);
    } */

    /* this.storage.get('product-list').then((val) => {
      this.listProducts = val;
      this.listProducts.push(product);
      this.storage.set("product-list", this.listProducts);
      //this.listProducts.push(val);
      console.log('localSotage=>val', val);
    }); */
    

   /*  this.listProducts.push(product);
    console.log("add product: ", this.listProducts); */

  }

  goToPending(product) {
    this.addProduct_pendient();
    console.log("inicio",this.listPendings);
    //
    this.storage.set("pending-list", product);
    //
     /* if (this.storage.get("pending-list")) {
      this.storage.get('pending-list').then((val) => {
       this.listPendings = JSON.parse(val);
       
      });
      console.log("antes",this.listPendings);
     
      console.log("despues",this.listPendings);
    }
    if(this.listPendings == null){
      this.listPendings =[];
    } 
    this.listPendings.push(product);
    this.storage.set("pending-list", JSON.stringify(this.listPendings)); */

    /* console.log("antes: ",  this.listPendings);
    console.log("prod: ", product);
    this.listPendings.push(product);
    console.log("despues: ",  this.listPendings);
    /* this.storage.get('pending-list').then((val) => {
      console.log("antes: ", val);
    }); 

     */
/* 
    this.storage.get('pending-list').then((val) => {
      console.log("despues: ", val);
    }); */
  }

}
