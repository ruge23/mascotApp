import { Component, ViewChild } from '@angular/core';
import { NavController, Slides, AlertController, LoadingController } from 'ionic-angular';

//import { PRODUCTS } from './../../data/product-mok';
//import { MARCAS } from './../../data/marcas-mok';
import { InternaProductPage } from '../interna-product/interna-product';
import { ProductProvider, iProduct } from '../../providers/product/product';
import { AuthProvider } from '../../providers/auth/auth';
import { SearchPage } from '../search/search';
import { Storage } from '@ionic/storage';
import { ConsultasPage } from '../consultas/consultas';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  @ViewChild('slides') slides: Slides;

  images: any = [];
  products: iProduct[];
  productsFiltered: iProduct[];
  marcas: any;
  localidades: any[];
  chkCachorro: boolean = true;
  chkAdulto: boolean = true;
  chkPerro: boolean = true;
  chkGato: boolean = true;
  urlImg:string ="http://ctrlztest.com.ar/mascotasya/apirest/";

  constructor(
    public navCtrl: NavController,
    private alertCtrl: AlertController,
    public loadingCtrl: LoadingController,
    private productProvider: ProductProvider,
    private authProvider: AuthProvider,
    private storage: Storage) {

    this.getSlides();
    this.checkIfCache();
    //this.getLocalidades();
    this.getAllBrand();
  }


  checkIfCache() {
    this.storage.get("prods").then((val) => {
      if (val != null && val != undefined) {
        this.products = JSON.parse(val);
        this.productsFiltered = this.products;
      }
      else {
        this.getLocalidades();
      }

    });
  }
  /* ionViewWillEnter(){
    this.getProducts();
  } */

  getSlides(){
    this.productProvider.getSlidesProd().subscribe((x=>{
      console.log('slides',x['data']);
      this.images = x['data'];
    }))
  }

  presentLoading() {
    const loader = this.loadingCtrl.create({
      content: "Espere por favor...",
      duration: 3000
    });
    loader.present();
  }

  getLocalidades() {
    this.authProvider.getLocalidades().subscribe(x => {
      this.localidades = x['data'];
      this.presentAlert(this.localidades);
      //console.log('localidades',this.localidades);
    })
  }

  goToSoporte(){
    this.navCtrl.push(ConsultasPage);
  }
  
  onFilterChange() {
    console.log('entrooo');
    this.productsFiltered = [];
    if (this.chkAdulto || this.chkCachorro || this.chkPerro || this.chkGato) {
      if (this.chkAdulto) {
        let filter1 = this.products.filter(proj =>
          (proj.forAdult == this.chkAdulto) == true);
        
        filter1.map(x => {
          if (!this.productsFiltered.find(f => f.id == x.id)) {
            this.productsFiltered.push(x);
          }
        });
      }
      if (this.chkCachorro) {
        let filter2 = this.products.filter(proj1 =>
          (proj1.forPuppy == this.chkCachorro) == true);
        
        filter2.map(x => {
          if (!this.productsFiltered.find(f => f.id == x.id)) {
            this.productsFiltered.push(x);
          }
        });
      }
      if (this.chkGato) {
        let filter3 = this.products.filter(proj2 =>
          (proj2.forCat == this.chkGato) == true);

        filter3.map(x => {
          if (!this.productsFiltered.find(f => f.id == x.id)) {
            this.productsFiltered.push(x);
          }
        });
      }
      if (this.chkPerro) {
        let filter4 = this.products.filter(proj3 =>
          (proj3.forDog == this.chkPerro) == true);

        filter4.map(x => {
          if (!this.productsFiltered.find(f => f.id == x.id)) {
            this.productsFiltered.push(x);
          }
        });
      }
    }
    else{
      this.productsFiltered =this.products;
    }
  }

  presentAlert(localidades) {
    //console.log('ALERT!!!')
    let alert = this.alertCtrl.create();
    alert.setTitle('Elige tu Localidad');
    //alert.addInput({type: 'radio', label: '2', value: '2'});
    localidades.map(local => {
      let lo = local.localidad;
      //console.log(lo);
      alert.addInput({ type: 'radio', label: lo, value: lo })
    });

    alert.addButton({
      text: 'OK',
      handler: data => {
        console.log("localidad", data);
        this.storage.get("_uid_").then(x => {
        this.getProducts(x, data);
        });
        this.authProvider.setselectedlocation(data);
        this.presentLoading();
      }
    });
    alert.present()
  }

  goToInterna(product) {
    this.navCtrl.push(InternaProductPage, product);
  }

  goToSearch() {
    this.navCtrl.push(SearchPage, this.products);
  }

  next() {
    this.slides.slideNext();
  }

  prev() {
    this.slides.slidePrev();
  }

  getProducts(userid, local) {

    this.productProvider.getProducts(userid, local).subscribe(products => {
      console.log("came from api");
      this.products = products['data'];
      this.storage.set("prods", JSON.stringify(this.products));
      this.productsFiltered = this.products;
    });
  }

  getAllBrand() {
    this.productProvider.getBrand()
      .subscribe(brand => { this.marcas = brand['data'] })
  }

}
