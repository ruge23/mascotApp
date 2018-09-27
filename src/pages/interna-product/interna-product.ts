import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { ShopCartPage } from '../shop-cart/shop-cart';
import { Storage } from '@ionic/storage';


@IonicPage()
@Component({
  selector: 'page-interna-product',
  templateUrl: 'interna-product.html',
})
export class InternaProductPage {

  public detailProduct: any;
  private listProducts: any[] = [];
  private listPendings: any[] = [];
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController,
    private storage: Storage) {
    this.detailProduct = this.navParams.data;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InternaProductPage');
  }

  addProduct_cart() {
    const alert = this.alertCtrl.create({
      title: 'New Product Add!',
      subTitle: 'Producto agregado al carrito de compras!',
      buttons: ['OK']
    });
    alert.present();
  }

  goToComprar(product) {
    this.addProduct_cart();
    //agregar a la lista del carrito
    console.log("add product");

    if (this.storage.get("product-list")) {
      this.storage.get('product-list').then((val) => {
        this.listProducts = val;
      });
    }

    console.log("add product: ", product);
    this.listProducts.push(product);
    this.storage.set("product-list", this.listProducts);

  }

  goToPending(product) {
    console.log("inicio",this.listPendings);
    //
     if (this.storage.get("pending-list")) {
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
    this.storage.set("pending-list", JSON.stringify(this.listPendings));

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
