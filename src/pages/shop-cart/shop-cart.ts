import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { InternaProductPage } from '../interna-product/interna-product';
import { Storage } from '@ionic/storage';

import { FavoriteProvider } from './../../providers/favorite/favorite';
import { ShoppingServiceProvider } from '../../providers/shopping-service/shopping-service';
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

  items:number = 1;
  _cart = [];
  foodweeks:string = "";
  dataProduct=[];
  dataProd = [];
  products = {};
  comment:string;
  resultadoTotal:number;
  conProduct:boolean;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private favorite: FavoriteProvider,      
    private storage: Storage,
    public shoppingService: ShoppingServiceProvider,
    private alertCtrl: AlertController,
  ) {

  }

  onItemSelection(id, event) {
    let product = {};
    const newProd = this._cart.find(prod => prod.id === id)
    newProd['cant'] = event;
    this.dataProduct.push(newProd);
    this.dataProduct.map((prod)=>{
      product['productid'] = prod.id;
      product['amount'] = prod.cant;      
    })
    this.dataProd.push(product);
    console.log('event', this.dataProd);
  }  

  
  presentAlert(){
    let datarequest = new Date();
    /* let dia = datarequest.getDate().toString();
    let mes = datarequest.getMonth().toString();
    let age = datarequest.getFullYear().toString();
    let fecha = dia+"/"+mes+"/"+age; */
    
    let alert = this.alertCtrl.create({
      title:`
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
            console.log('Value checked', data);
            //this.sendPedido("1",this.comment,this.foodweeks);
            console.log('envio', this.comment, this.foodweeks, this.dataProd, datarequest);
            this.favorite.sendRequest("1",this.comment,this.foodweeks,this.dataProd,datarequest)
          }
        },
      ]
    });
    alert.present();
  }

  addToCart(item){
    let stock = [];
    let newObj = Object.assign({}, ...Object.keys(item).map(k => {
      if(k === 'units'){
        for(let i=1; i<= item[k];i++){
          stock.push(i);
        }  
      }
      ({[k]: item[k]})
    }));
    item.stock = stock;
    this._cart.push(item);
    this.shoppingService.addItem(item)
  }

  addTotalxPedido(price, cant){
    let resultado:number;
    if(this.products){
      let precio = Number(price);
      let cantidad = Number(cant);
      resultado = precio*cantidad;
      this.resultadoTotal += resultado;
      //console.log(this.resultadoTotal);
      return resultado;    
    }else{
      return 0;
    }
  }

  removeFromCart(item) {
    let index = this._cart.indexOf(item);
    if (index > -1) {
      this._cart.splice(index, 1);
      this.shoppingService.removeItem(item);
    }
    let index1 = this.dataProduct.indexOf(item);
    if(index1 > -1){
      this.dataProduct.splice(index1, 1);
    }
  }

  addTotal(){
    let total=0;
    if(this._cart.length > 0){
      this._cart.map((item)=>{
        total += Number(item.price);
      })
      return total;
    }else{
      return total;
    }
  }

  ionViewWillEnter(){
    this.conProduct = false;
    this.storage.get('product-list').then((val) => {
      if(val != null){
        this.storage.set('product-add', this.items++)
        this.conProduct = true;
        this.addToCart(val);
        console.log('shop',this._cart);
        this.storage.set('product-list', null)
      }
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ShopCartPage');

  }

  goToProduct(product) {
    this.navCtrl.push(InternaProductPage, product);
  }

}
