import { Component, ViewChild } from '@angular/core';
import { NavController, Slides, AlertController, LoadingController } from 'ionic-angular';

//import { PRODUCTS } from './../../data/product-mok';
//import { MARCAS } from './../../data/marcas-mok';
import { InternaProductPage } from '../interna-product/interna-product';
import { SLIDES } from '../../data/slides-mok';
import { LOCALIDADES } from './../../data/localidades-mok';
import { ProductProvider } from '../../providers/product/product';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  @ViewChild('slides') slides: Slides;
  private productList: any[];
  private caca: any[];
  images : any = SLIDES;
  products : any[];
  marcas : any[];
  localidades : any[] = LOCALIDADES;

  constructor(
    public navCtrl: NavController,
    private alertCtrl: AlertController,
    public loadingCtrl: LoadingController,
    private productProvider: ProductProvider 
  ) {
    this.presentAlert();
    this.getAllBrand();
  }
  
  ionViewWillEnter(){
    this.getProducts();
  }

  presentLoading() {
    const loader = this.loadingCtrl.create({
      content: "Espere por favor...",
      duration: 3000
    });
    loader.present();
  }

  presentAlert(){
    //console.log('ALERT!!!')
    let alert = this.alertCtrl.create();
    alert.setTitle('Elige tu Localidad');
    //alert.addInput({type: 'radio', label: '2', value: '2'});
    this.localidades.map((local)=>{
      alert.addInput({type: 'radio', label: local.name, value: local.name});
    })
    alert.addButton({
      text: 'OK',
      handler: data => {
        console.log('Site:', data);
        this.presentLoading();
      }
    });
    alert.present()
  }

  goToInterna(product){
    this.navCtrl.push(InternaProductPage, product);
  }

  next() {
    this.slides.slideNext();
  }

  prev() {
    this.slides.slidePrev();
  }

  getProducts(){
    this.productProvider.getProducts().subscribe(
      products => {console.log('a',products['data']),this.products =products['data']}
    )
  }

  getAllBrand(){
    this.productProvider.getBrand()
      .subscribe(brand => {console.log('b',brand['data']),this.marcas = brand['data']})
  }

}
