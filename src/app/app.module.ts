import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { IonicStorageModule } from '@ionic/storage';
import { ScreenOrientation } from '@ionic-native/screen-orientation';
import { PhotoViewer } from '@ionic-native/photo-viewer';

import { AboutPage } from '../pages/about/about';
import { ConsultasPage } from './../pages/consultas/consultas';
import { LoginPage } from './../pages/login/login';
import { HomePage } from '../pages/home/home';
import { MasPage } from './../pages/mas/mas';
import { PendientesPage } from './../pages/pendientes/pendientes';
import { TabsPage } from '../pages/tabs/tabs';
import { InternaProductPage } from './../pages/interna-product/interna-product';
import { AccordionComponent } from './../components/accordion/accordion';
import { ModalPage } from './../pages/modal/modal';
import { MenuPage } from './../pages/menu/menu';

import { IonicImageViewerModule } from 'ionic-img-viewer';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AuthProvider } from '../providers/auth/auth';
import { FavoritesPage } from '../pages/favorites/favorites';
import { ShopCartPage } from '../pages/shop-cart/shop-cart';
import { ProductProvider } from '../providers/product/product';
import { HttpModule } from '@angular/http'
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FavoriteProvider } from '../providers/favorite/favorite';
import { ShoppingServiceProvider } from '../providers/shopping-service/shopping-service';
import { SearchPage } from '../pages/search/search';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ConsultasPage,
    HomePage,
    TabsPage,
    LoginPage,
    PendientesPage,
    MasPage,
    InternaProductPage,
    AccordionComponent,
    ModalPage,
    FavoritesPage,
    ShopCartPage,
    MenuPage,
    SearchPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),    
    IonicStorageModule.forRoot(),
    IonicImageViewerModule,
    HttpModule,
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ConsultasPage,
    HomePage,
    TabsPage,
    LoginPage,
    PendientesPage,
    MasPage,
    InternaProductPage,
    AccordionComponent,
    ModalPage,
    FavoritesPage,
    ShopCartPage,
    MenuPage,
    SearchPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ScreenOrientation,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    PhotoViewer,
    AuthProvider,
    ProductProvider,
    FavoriteProvider,
    ShoppingServiceProvider
  ]
})
export class AppModule {}
