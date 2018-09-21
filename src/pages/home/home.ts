import { Component, ViewChild } from '@angular/core';
import { NavController, Slides } from 'ionic-angular';

import { PRODUCTS } from './../../data/product-mok';
import { MARCAS } from './../../data/marcas-mok';
import { InternaProductPage } from '../interna-product/interna-product';
import { SLIDES } from '../../data/slides-mok';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild('slides') slides: Slides;

  images : any = SLIDES;
  products : any = PRODUCTS;
  marcas : any = MARCAS;

  constructor(public navCtrl: NavController) {

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
