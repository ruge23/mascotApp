import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-consultas',
  templateUrl: 'consultas.html',
})
export class ConsultasPage {

  todo = {}

  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConsultasPage');
  }
  
  showAlert() {
    const alert = this.alertCtrl.create({
      title: 'Enviado!',
      subTitle: 'Estaremos contestando a tu email en la brevedad',
      buttons: ['GRACIAS']
    });
    alert.present();
    this.refresh()
  }

  refresh(){
    this.todo['title'] = '';
    this.todo['tipo'] = '';
    this.todo['description'] = '';
  }

  logForm() {
    console.log(this.todo)
    this.showAlert();
  }

}
