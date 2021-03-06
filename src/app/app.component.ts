//import { HomePage } from './../pages/home/home';
import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { ModalPage } from './../pages/modal/modal';
//import { LoginPage } from './../pages/login/login';
//import { TabsPage } from '../pages/tabs/tabs';

import { timer } from 'rxjs/observable/timer';
import { AuthProvider } from '../providers/auth/auth';
import { Storage } from '@ionic/storage';
//import { HomePage } from '../pages/home/home';
import { MenuPage } from '../pages/menu/menu';
import { ScreenOrientation } from '@ionic-native/screen-orientation';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = ModalPage;

  showSplash = true;

  constructor(
    platform: Platform, 
    statusBar: StatusBar, 
    splashScreen: SplashScreen,
    screenOrientation: ScreenOrientation, 
    storage: Storage
  ) {
    platform.ready().then(() => {
      
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();

      screenOrientation.lock(screenOrientation.ORIENTATIONS.PORTRAIT);
      
      timer(3000).subscribe(()=> this.showSplash = false)
      storage.get("_uid_").then(x => {
        if(x > 0){
         this.rootPage = MenuPage; 
        }
      });
    });
  }
}
