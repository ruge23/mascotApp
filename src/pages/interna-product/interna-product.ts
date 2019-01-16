import { TabsPage } from './../tabs/tabs';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { ShopCartPage } from '../shop-cart/shop-cart';
import { Storage } from '@ionic/storage';
import { PhotoViewer } from '@ionic-native/photo-viewer';

import { FavoriteProvider } from './../../providers/favorite/favorite';
import { ShoppingServiceProvider } from '../../providers/shopping-service/shopping-service';

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
    private storage: Storage,
    private shopprovider: ShoppingServiceProvider,
    private photoViewer: PhotoViewer
  ) {
      this.detailProduct = this.navParams.data;
      this.isChecked = (this.detailProduct.fav != 0);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InternaProductPage');
  }

  expand(image){
    //console.log('entro',String(image))
    var options = {
      share: true, // default is false
      closeButton: false, // default is true
      copyToReference: true // default is false

    };
    this.photoViewer.show(image, 'My image product', options);
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
    //this.storage.set("product-list", product);
    this.shopprovider.addItem(product);    
   

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
