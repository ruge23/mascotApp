import { AuthProvider } from './../../providers/auth/auth';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

import { AboutPage } from './../about/about';
import { MenuPage } from './../menu/menu';
//import { TabsPage } from './../tabs/tabs';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  user = {
    name: '',
    pw: ''
  }

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private authProvider: AuthProvider,
    private alertCtrl: AlertController
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  loginUser() {
    this.authProvider.login(this.user.name, this.user.pw)
      .subscribe(success => {
        console.log("login",success);
        if (success['data']) {
          console.log("mi id:",success['data']);
          this.authProvider.setUserId(success['data']);
          this.navCtrl.push(MenuPage);
        }
        else {
          let alert = this.alertCtrl.create({
            title: 'Ingreso fallido!',
            message: 'Por favor verifica tu usuario o contraseña',
            buttons: ['OK']
          });
          alert.present();
        }
      })
  }

  goToRegister() {
    this.navCtrl.push(AboutPage);
  }
}
