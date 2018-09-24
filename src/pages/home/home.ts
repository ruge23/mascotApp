import { Component, ViewChild } from '@angular/core';
import { NavController, Slides } from 'ionic-angular';

import { PRODUCTS } from './../../data/product-mok';
import { MARCAS } from './../../data/marcas-mok';
import { InternaProductPage } from '../interna-product/interna-product';
import { SLIDES } from '../../data/slides-mok';
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
  products : any = PRODUCTS;
  marcas : any = MARCAS;
  errorMessage: string;


  constructor(public navCtrl: NavController,private productProvider: ProductProvider ) {
    this.products = productProvider.getProducts().subscribe(
      products => console.log(products.data)
    );
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


}
