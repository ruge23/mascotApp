import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';

import { LoginPage } from './../login/login';
import { HomePage } from '../home/home';
import { AuthProvider } from '../../providers/auth/auth';
/**
 * Generated class for the ModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modal',
  templateUrl: 'modal.html',
})
export class ModalPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController, public authProvider: AuthProvider) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalPage');
  }

  presentModal() {
    const modal = this.modalCtrl.create(LoginPage);
    modal.present();
  }

}
