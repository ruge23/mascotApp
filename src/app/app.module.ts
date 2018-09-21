import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { LoginPage } from './../pages/login/login';
import { HomePage } from '../pages/home/home';
import { MasPage } from './../pages/mas/mas';
import { PendientesPage } from './../pages/pendientes/pendientes';
import { TabsPage } from '../pages/tabs/tabs';
import { InternaProductPage } from './../pages/interna-product/interna-product';
import { AccordionComponent } from './../components/accordion/accordion';
import { ModalPage } from './../pages/modal/modal';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AuthProvider } from '../providers/auth/auth';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage,
    PendientesPage,
    MasPage,
    InternaProductPage,
    AccordionComponent,
    ModalPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage,
    PendientesPage,
    MasPage,
    InternaProductPage,
    AccordionComponent,
    ModalPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthProvider
  ]
})
export class AppModule {}
