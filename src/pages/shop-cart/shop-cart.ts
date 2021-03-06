import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, List } from 'ionic-angular';
import { InternaProductPage } from '../interna-product/interna-product';
import { Storage } from '@ionic/storage';

import { FavoriteProvider } from './../../providers/favorite/favorite';
import { ShoppingServiceProvider, cartRequest } from '../../providers/shopping-service/shopping-service';
import { HomePage } from '../home/home';
import { Observable } from 'rxjs/Observable';
import { iProduct } from '../../providers/product/product';
import { AuthProvider } from '../../providers/auth/auth';
/**
 * Generated class for the ShopCartPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-shop-cart',
  templateUrl: 'shop-cart.html',
})
export class ShopCartPage {

  items: number = 1;
  _cart: iProduct[];
  foodweeks: string = "";
  deliverydays: string = "";
  deliverytime: string = "";
  deliverytime2: string = "";
  dataProduct = [];
  dataProd = [];
  products = {};
  comment: string;
  resultadoTotal: number;
  conProduct: boolean;
  chkImportant: boolean;
  cantidadProd = 1;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private favorite: FavoriteProvider,
    private storage: Storage,
    public shoppingService: ShoppingServiceProvider,
    private alertCtrl: AlertController,
    private authprovider: AuthProvider
  ) {

  }

  ionViewWillEnter() {
    this._cart = this.shoppingService.getProducts();
    this.conProduct = (this._cart.length > 0);
    console.log("carrito", this._cart);
    this.calculateTotal();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ShopCartPage');
  }

  onItemSelection(id, event) {
    this.cantidadProd = 1;
    const newProd = this._cart.find(prod => prod.id == id)
    newProd['amount'] = event;
    this.cantidadProd = event;
    this.calculateTotal();
  }

  mensaje(){
    let alert = this.alertCtrl.create({
      title: 'Escribe tu mensaje',
      inputs:[
        {
          type: 'textarea',
          name: 'about',
          placeholder: 'Escribe tu mensaje',
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Ok',
          handler: data => {
            console.log(data);
            this.comment = data[0];
          }
        }
      ]
    });
    alert.present();
  }


  realizarPedido() {
    let datarequest = new Date();

    let alert = this.alertCtrl.create({
      title: `
            <div style="margin: 0 auto; text-align:center; align-items:center;">
                <img class="imgPedido" src="../../assets/imgs/check.png">
                <h6>Tu pedido fue enviado!</h6>
            </div>
          `,
      subTitle: `<strong>Semanas que te dura este pedido?</strong>`,
      inputs: [
        {
          type: 'radio',
          label: '2 semanas',
          value: '2',
          checked: true
        },
        {
          type: 'radio',
          label: '3 semanas',
          value: '3',
        },
        {
          type: 'radio',
          label: '4 semanas',
          value: '4',
        }
      ],
      buttons: [
        {
          text: 'Gracias!',
          role: 'ok',
          handler: data => {
            this.foodweeks = data;
            this.storage.get("_uid_").then(x => {
              let req = new cartRequest();

              req.userid = x;
              req.comment = this.comment;
              req.foodweeks = this.foodweeks;
              req.products = this._cart;
              req.daterequest = datarequest;
              req.deliverydays = this.deliverydays;
              req.deliverytime = this.deliverytime;
              req.isimportant = this.chkImportant;
              this.shoppingService.sendRequest(req).subscribe(x => {
                console.log("termino", x);
                this.removeAll();
                this.navCtrl.push(HomePage);
              });

            });
          }
        },
      ]
    });
    alert.present();

  }
  removeAll() {
    this.shoppingService.removeAll();
    this._cart = [];
    this.comment = "";
    this.deliverydays = "";
    this.deliverytime = "";
    this.chkImportant = false;
  }

  convertToArray(number) {
    let ret = [];
    for (var i = 1; i <= number; i++) {
      ret.push(i);
    }
    return ret;
  }



  removeFromCart(item) {
    console.log("rodri")
    let index = this._cart.indexOf(item);
    console.log("remove from", index);
    if (index > -1) {
      this.shoppingService.removeItem(item);
      this._cart.splice(index, 1);
      this.conProduct = (this._cart.length > 0);
      this.calculateTotal();
      console.log("remove from shopservice");
    }
    /* 
    let index1 = this.dataProduct.indexOf(item);
    if (index1 > -1) {
      this.dataProduct.splice(index1, 1);
    } */
  }

  calculateTotal() {
    let total = 0;
    if (this._cart.length > 0) {
      this._cart.map((item) => {
        total += item.price * (item.amount > 0 ? item.amount : 0);
      })
      this.resultadoTotal = total;
    } else {
      this.resultadoTotal = total;
    }
  }



  goToProduct(product) {
    this.navCtrl.push(InternaProductPage, product);
  }

}
