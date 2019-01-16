import { ProductProvider } from './../../providers/product/product';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

@IonicPage()
@Component({
  selector: 'page-consultas',
  templateUrl: 'consultas.html',
})
export class ConsultasPage {

  //todo = {}
  mensaje:string;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    private service : ProductProvider,
    public storage: Storage,
    private alertCtrl: AlertController
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConsultasPage');
  }

  sendConsulta(){
    this.storage.get("_uid_").then((val) => {
      this.service.sendConsulta(val,this.mensaje).subscribe(x=>{
        if(x['status'] == 200){
          this.showAlert();
        }else{
          console.log('error');
        }
      })
    });

   
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
    this.mensaje ="";
  }

}
