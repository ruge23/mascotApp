webpackJsonp([9],{

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConsultasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ConsultasPage = /** @class */ (function () {
    function ConsultasPage(navCtrl, navParams, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.todo = {};
    }
    ConsultasPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ConsultasPage');
    };
    ConsultasPage.prototype.showAlert = function () {
        var alert = this.alertCtrl.create({
            title: 'Enviado!',
            subTitle: 'Estaremos contestando a tu email en la brevedad',
            buttons: ['GRACIAS']
        });
        alert.present();
        this.refresh();
    };
    ConsultasPage.prototype.refresh = function () {
        this.todo['title'] = '';
        this.todo['tipo'] = '';
        this.todo['description'] = '';
    };
    ConsultasPage.prototype.logForm = function () {
        console.log(this.todo);
        this.showAlert();
    };
    ConsultasPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-consultas',template:/*ion-inline-start:"C:\xampp\htdocs\mascotasya\app\mascotApp\src\pages\consultas\consultas.html"*/'<ion-header>\n\n  <ion-navbar color="royal">\n\n    <ion-title>\n\n      Consultas\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <ion-card>\n\n    <form (ngSubmit)="logForm()">\n\n      <ion-item>\n\n        <ion-label floating>Titutlo</ion-label>\n\n        <ion-input type="text" [(ngModel)]="todo.title" name="title"></ion-input>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label floating>Tipo</ion-label>        \n\n        <ion-select [(ngModel)]="todo.tipo" name="tipo">\n\n          <ion-option value="reclamo">Reclamo</ion-option>\n\n          <ion-option value="consulta">Consulta</ion-option>\n\n        </ion-select>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label floating>Descripcion</ion-label>\n\n        <ion-textarea [(ngModel)]="todo.description" name="description"></ion-textarea>\n\n      </ion-item>\n\n      <button ion-button type="submit" full>Enviar</button>\n\n    </form>\n\n  </ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\xampp\htdocs\mascotasya\app\mascotApp\src\pages\consultas\consultas.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], ConsultasPage);
    return ConsultasPage;
}());

//# sourceMappingURL=consultas.js.map

/***/ }),

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FavoritesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_product_product__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__interna_product_interna_product__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_favorite_favorite__ = __webpack_require__(49);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var FavoritesPage = /** @class */ (function () {
    function FavoritesPage(navCtrl, navParams, favorite, productProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.favorite = favorite;
        this.productProvider = productProvider;
        this.userid = "1";
        this.getProducts(this.userid);
    }
    FavoritesPage.prototype.ionViewWillEnter = function () {
        this.getProducts(this.userid);
    };
    FavoritesPage.prototype.getProducts = function (userid) {
        var _this = this;
        this.favorite.getAllFavorites(userid)
            .subscribe(function (products) { console.log('a', products), _this.products = products['data']; });
    };
    FavoritesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FavoritesPage');
    };
    FavoritesPage.prototype.goToProduct = function (product) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__interna_product_interna_product__["a" /* InternaProductPage */], product);
    };
    FavoritesPage.prototype.removeFromCart = function (item) {
        var index = this.products.indexOf(item);
        if (index > -1) {
            this.products.splice(index, 1);
        }
        var index1 = this.products.indexOf(item);
        if (index1 > -1) {
            this.products.splice(index1, 1);
        }
        console.log("antes");
        this.favorite.deleteToFavorite(this.userid, item.id).subscribe(function (x) { return console.log("listo"); });
        console.log("despues");
    };
    FavoritesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-favorites',template:/*ion-inline-start:"C:\xampp\htdocs\mascotasya\app\mascotApp\src\pages\favorites\favorites.html"*/'<ion-header>\n\n    <ion-navbar style="max-height: 56px !important;" color="royal" >\n\n        <button ion-button icon-only menuToggle>\n\n            <ion-icon name="menu"></ion-icon>\n\n          </button>\n\n      <ion-title>\n\n        Favoritos\n\n      </ion-title>\n\n      <ion-buttons end>\n\n        <button ion-button icon-only>\n\n          <ion-icon name="search"></ion-icon>\n\n        </button>\n\n      </ion-buttons>\n\n    </ion-navbar>\n\n  </ion-header>\n\n\n\n\n\n<ion-content>\n\n  <ion-list>\n\n    <ion-item *ngFor="let item of products" (click)="goToProduct(item)">\n\n      <ion-thumbnail item-start>\n\n        <img src="{{item.imageSrc}}">\n\n      </ion-thumbnail>\n\n      <h2>{{item.name}}</h2>\n\n      <p>${{item.price}}</p>\n\n      <button ion-button icon-only item-end (click)="removeFromCart(item)">\n\n        <ion-icon name="trash"></ion-icon>\n\n      </button>\n\n    </ion-item>\n\n  </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\xampp\htdocs\mascotasya\app\mascotApp\src\pages\favorites\favorites.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_4__providers_favorite_favorite__["a" /* FavoriteProvider */],
            __WEBPACK_IMPORTED_MODULE_2__providers_product_product__["a" /* ProductProvider */]])
    ], FavoritesPage);
    return FavoritesPage;
}());

//# sourceMappingURL=favorites.js.map

/***/ }),

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the MasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MasPage = /** @class */ (function () {
    function MasPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    MasPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MasPage');
    };
    MasPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-mas',template:/*ion-inline-start:"C:\xampp\htdocs\mascotasya\app\mascotApp\src\pages\mas\mas.html"*/'<ion-header>\n\n    <ion-navbar style="max-height: 56px !important;" color="royal" >\n\n        <button ion-button icon-only menuToggle>\n\n            <ion-icon name="menu"></ion-icon>\n\n          </button>\n\n      <ion-title>\n\n        Perfil\n\n      </ion-title>\n\n      <ion-buttons end>\n\n        <button ion-button icon-only>\n\n          <ion-icon name="search"></ion-icon>\n\n        </button>\n\n      </ion-buttons>\n\n    </ion-navbar>\n\n  </ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\xampp\htdocs\mascotasya\app\mascotApp\src\pages\mas\mas.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], MasPage);
    return MasPage;
}());

//# sourceMappingURL=mas.js.map

/***/ }),

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs_tabs__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__consultas_consultas__ = __webpack_require__(112);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MenuPage = /** @class */ (function () {
    function MenuPage(navCtrl, navParams, appCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.appCtrl = appCtrl;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_2__tabs_tabs__["a" /* TabsPage */];
        this.pages = [
            { title: 'Perfil', pageName: 'MasPage', tabComponent: 'MasPage', index: 4, icon: 'contact', isMenu: true },
            { title: 'Home', pageName: 'HomePage', tabComponent: 'HomePage', index: 0, icon: 'mascotapp-home', isMenu: true },
            { title: 'Favoritos', pageName: 'FavoritesPage', tabComponent: 'FavoritesPage', index: 1, icon: 'mascotapp-favoritos', isMenu: true },
            { title: 'Carrito', pageName: 'ShopCartPage', tabComponent: 'ShopCartPage', index: 2, icon: 'mascotapp-carrito', isMenu: true },
            { title: 'Pendientes', pageName: 'PendientesPage', tabComponent: 'PendientesPage', index: 3, icon: 'mascotapp-pendientes', isMenu: true },
            { title: 'Soporte', pageName: 'ConsultasPage', icon: 'chatbubbles', isMenu: false }
        ];
    }
    MenuPage.prototype.openPage = function (page) {
        var params = {};
        if (page.isMenu) {
            if (page.index) {
                params = { tabIndex: page.index };
            }
            if (this.nav.getActiveChildNav() && page.index != undefined) {
                this.nav.getActiveChildNav().select(page.index);
            }
            else {
                this.nav.setRoot(page.pageName, params);
            }
        }
        else {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__consultas_consultas__["a" /* ConsultasPage */]);
        }
    };
    MenuPage.prototype.isActive = function (page) {
        /* let childNav = this.nav.getActiveChildNav();
    
        if(childNav){
          if(childNav.getSelected() && childNav.getSelected().root === page.tabComponent){
            return 'royal';
          }
          return;
        } */
    };
    MenuPage.prototype.logout = function () {
        this.appCtrl.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Nav */])
    ], MenuPage.prototype, "nav", void 0);
    MenuPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-menu',template:/*ion-inline-start:"C:\xampp\htdocs\mascotasya\app\mascotApp\src\pages\menu\menu.html"*/'<ion-menu [content]="content">\n\n  <ion-header>\n\n    <ion-toolbar color="royal">\n\n      <ion-title>Menu</ion-title>\n\n    </ion-toolbar>\n\n  </ion-header>\n\n \n\n  <ion-content>\n\n    <ion-list>\n\n      <button ion-item detail-none block menuClose *ngFor="let p of pages" (click)="openPage(p)">\n\n        <ion-icon item-start [name]="p.icon" color="iconMenu"></ion-icon>\n\n        {{ p.title }}\n\n      </button>\n\n    </ion-list>\n\n \n\n  </ion-content>\n\n \n\n  <ion-footer>\n\n    <ion-toolbar>\n\n      <ion-row align-items-center>\n\n        <ion-col>\n\n          <button ion-button full clear icon-left (click)="logout()">\n\n            <ion-icon name="sign-out">\n\n            </ion-icon>\n\n            Logout</button>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-toolbar>\n\n  </ion-footer>\n\n \n\n</ion-menu>\n\n \n\n<ion-nav #content main [root]="rootPage"></ion-nav>\n\n'/*ion-inline-end:"C:\xampp\htdocs\mascotasya\app\mascotApp\src\pages\menu\menu.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */]])
    ], MenuPage);
    return MenuPage;
}());

//# sourceMappingURL=menu.js.map

/***/ }),

/***/ 116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PendientesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__interna_product_interna_product__ = __webpack_require__(34);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PendientesPage = /** @class */ (function () {
    function PendientesPage(navCtrl, navParams, storage, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.alertCtrl = alertCtrl;
        this._cartPendient = [];
    }
    PendientesPage.prototype.addToPendient = function (item) {
        this._cartPendient.push(item);
    };
    PendientesPage.prototype.removeFromPendient = function (item) {
        var index = this._cartPendient.indexOf(item);
        if (index > -1) {
            this._cartPendient.splice(index, 1);
        }
    };
    PendientesPage.prototype.addToCart = function (item) {
        this.addToCart_mesaage();
        this.removeFromPendient(item);
        this.storage.set('product-list', item);
    };
    PendientesPage.prototype.addToCart_mesaage = function () {
        var alert = this.alertCtrl.create({
            title: 'Product Add!',
            subTitle: 'Producto agregado al Carrito!',
            buttons: ['OK']
        });
        alert.present();
    };
    PendientesPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.storage.get('pending-list').then(function (val) {
            if (val != null) {
                _this.addToPendient(val);
                _this.storage.set('pending-list', null);
            }
        });
    };
    PendientesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PendingCart');
    };
    PendientesPage.prototype.goToProduct = function (product) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__interna_product_interna_product__["a" /* InternaProductPage */], product);
    };
    PendientesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-pendientes',template:/*ion-inline-start:"C:\xampp\htdocs\mascotasya\app\mascotApp\src\pages\pendientes\pendientes.html"*/'<ion-header>\n\n    <ion-navbar style="max-height: 56px !important;" color="royal" >\n\n        <button ion-button icon-only menuToggle>\n\n            <ion-icon name="menu"></ion-icon>\n\n          </button>\n\n      <ion-title>\n\n        Pendientes\n\n      </ion-title>\n\n      <ion-buttons end>\n\n        <button ion-button icon-only>\n\n          <ion-icon name="search"></ion-icon>\n\n        </button>\n\n      </ion-buttons>\n\n    </ion-navbar>\n\n  </ion-header>\n\n\n\n<ion-content>\n\n  <ion-card>\n\n    <ion-list *ngIf="_cartPendient">\n\n       <div style="margin-top: 20px;" *ngFor="let item of _cartPendient">\n\n         <ion-row>\n\n          <ion-col>\n\n            <ion-item-sliding>\n\n              <ion-item class="row-completed">\n\n                <ion-thumbnail item-left>\n\n                  <img src="{{item.imageSrc}}">\n\n                </ion-thumbnail>\n\n                <h5>\n\n                  {{item.name}}\n\n                </h5>\n\n                <p>{{item.brand}}</p>\n\n              </ion-item>\n\n            </ion-item-sliding>\n\n          </ion-col> \n\n         </ion-row>\n\n         <!-- <ion-row>\n\n           <ion-col>\n\n              <ion-icon name="trash" float-right (click)="removeFromPendient(item)"></ion-icon>\n\n              <ion-icon name="mascotapp-carrito" float-left></ion-icon>\n\n           </ion-col>\n\n         </ion-row> -->\n\n          <!-- <div style="height:1px;width:100%;background-color:#DDDDDD"></div>-->\n\n          <ion-toolbar>\n\n              <ion-buttons left>\n\n                <button ion-button solid small color="add" (click)="removeFromPendient(item)">\n\n                    <ion-col>\n\n                      <ion-icon float-left name="trash"></ion-icon>\n\n                    </ion-col>\n\n                    <ion-col>\n\n                      <div float-right style="font-size: 1rem;">Eliminar</div>\n\n                    </ion-col>\n\n                </button>\n\n              </ion-buttons>\n\n              <ion-buttons right>\n\n                <button ion-button solid small color="button" (click)="addToCart(item)">\n\n                    <ion-col>\n\n                        <ion-icon float-left name="mascotapp-carrito"></ion-icon>\n\n                      </ion-col>\n\n                      <ion-col>\n\n                        <div float-right style="font-size: 1rem;" >Agregar al carrito</div>\n\n                      </ion-col>\n\n                </button>\n\n              </ion-buttons>\n\n            </ion-toolbar>\n\n        </div> \n\n      </ion-list>\n\n  </ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\xampp\htdocs\mascotasya\app\mascotApp\src\pages\pendientes\pendientes.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], PendientesPage);
    return PendientesPage;
}());

//# sourceMappingURL=pendientes.js.map

/***/ }),

/***/ 117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShopCartPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__interna_product_interna_product__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_favorite_favorite__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_shopping_service_shopping_service__ = __webpack_require__(88);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the ShopCartPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ShopCartPage = /** @class */ (function () {
    function ShopCartPage(navCtrl, navParams, favorite, storage, shoppingService, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.favorite = favorite;
        this.storage = storage;
        this.shoppingService = shoppingService;
        this.alertCtrl = alertCtrl;
        this.items = 1;
        this._cart = [];
        this.foodweeks = "";
        this.dataProduct = [];
        this.dataProd = [];
        this.products = {};
    }
    ShopCartPage.prototype.onItemSelection = function (id, event) {
        var product = {};
        var newProd = this._cart.find(function (prod) { return prod.id === id; });
        newProd['cant'] = event;
        this.dataProduct.push(newProd);
        this.dataProduct.map(function (prod) {
            product['productid'] = prod.id;
            product['amount'] = prod.cant;
        });
        this.dataProd.push(product);
        console.log('event', this.dataProd);
    };
    ShopCartPage.prototype.presentAlert = function () {
        var _this = this;
        var datarequest = new Date();
        /* let dia = datarequest.getDate().toString();
        let mes = datarequest.getMonth().toString();
        let age = datarequest.getFullYear().toString();
        let fecha = dia+"/"+mes+"/"+age; */
        var alert = this.alertCtrl.create({
            title: "\n            <div style=\"margin: 0 auto; text-align:center; align-items:center;\">\n                <img class=\"imgPedido\" src=\"../../assets/imgs/check.png\">\n                <h6>Tu pedido fue enviado!</h6>\n            </div>\n          ",
            subTitle: "<strong>Semanas que te dura este pedido?</strong>",
            inputs: [
                {
                    type: 'radio',
                    label: '2 semanas',
                    value: '2',
                    checked: true
                },
                {
                    type: 'radio',
                    label: '3 semanas',
                    value: '3',
                },
                {
                    type: 'radio',
                    label: '4 semanas',
                    value: '4',
                }
            ],
            buttons: [
                {
                    text: 'Gracias!',
                    role: 'ok',
                    handler: function (data) {
                        _this.foodweeks = data;
                        console.log('Value checked', data);
                        //this.sendPedido("1",this.comment,this.foodweeks);
                        console.log('envio', _this.comment, _this.foodweeks, _this.dataProd, datarequest);
                        _this.favorite.sendRequest("1", _this.comment, _this.foodweeks, _this.dataProd, datarequest);
                    }
                },
            ]
        });
        alert.present();
    };
    ShopCartPage.prototype.addToCart = function (item) {
        var stock = [];
        var newObj = Object.assign.apply(Object, [{}].concat(Object.keys(item).map(function (k) {
            if (k === 'units') {
                for (var i = 1; i <= item[k]; i++) {
                    stock.push(i);
                }
            }
            (_a = {}, _a[k] = item[k], _a);
            var _a;
        })));
        item.stock = stock;
        this._cart.push(item);
        this.shoppingService.addItem(item);
    };
    ShopCartPage.prototype.addTotalxPedido = function (price, cant) {
        var resultado;
        if (this.products) {
            var precio = Number(price);
            var cantidad = Number(cant);
            resultado = precio * cantidad;
            this.resultadoTotal += resultado;
            //console.log(this.resultadoTotal);
            return resultado;
        }
        else {
            return 0;
        }
    };
    ShopCartPage.prototype.removeFromCart = function (item) {
        var index = this._cart.indexOf(item);
        if (index > -1) {
            this._cart.splice(index, 1);
            this.shoppingService.removeItem(item);
        }
        var index1 = this.dataProduct.indexOf(item);
        if (index1 > -1) {
            this.dataProduct.splice(index1, 1);
        }
    };
    ShopCartPage.prototype.addTotal = function () {
        var total = 0;
        if (this._cart.length > 0) {
            this._cart.map(function (item) {
                total += Number(item.price);
            });
            return total;
        }
        else {
            return total;
        }
    };
    ShopCartPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.conProduct = false;
        this.storage.get('product-list').then(function (val) {
            if (val != null) {
                _this.storage.set('product-add', _this.items++);
                _this.conProduct = true;
                _this.addToCart(val);
                console.log('shop', _this._cart);
                _this.storage.set('product-list', null);
            }
        });
    };
    ShopCartPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ShopCartPage');
    };
    ShopCartPage.prototype.goToProduct = function (product) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__interna_product_interna_product__["a" /* InternaProductPage */], product);
    };
    ShopCartPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-shop-cart',template:/*ion-inline-start:"C:\xampp\htdocs\mascotasya\app\mascotApp\src\pages\shop-cart\shop-cart.html"*/'<ion-header>\n\n    <ion-navbar style="max-height: 56px !important;" color="royal" >\n\n        <button ion-button icon-only menuToggle>\n\n            <ion-icon name="menu"></ion-icon>\n\n          </button>\n\n      <ion-title>\n\n        Shop-Cart\n\n      </ion-title>\n\n      <ion-buttons end>\n\n        <button ion-button icon-only>\n\n          <ion-icon name="search"></ion-icon>\n\n        </button>\n\n      </ion-buttons>\n\n    </ion-navbar>\n\n  </ion-header>\n\n\n\n\n\n<ion-content>\n\n  <ion-card>\n\n      <ion-list no-lines *ngIf="_cart">\n\n         <div *ngFor="let item of _cart">\n\n           <ion-row>\n\n            <ion-col>\n\n              <ion-item-sliding>\n\n                <ion-item class="row-completed">\n\n                  <ion-thumbnail item-left>\n\n                      <img src="{{item.imageSrc}}">\n\n                  </ion-thumbnail>\n\n                  <h5>\n\n                    {{item.name}}\n\n                  </h5>\n\n                  <p>{{item.brand}}</p>\n\n                  <ion-icon name="trash" item-right (click)="removeFromCart(item)"></ion-icon>\n\n                </ion-item>\n\n              </ion-item-sliding>\n\n            </ion-col> \n\n           </ion-row>\n\n           <ion-row class="align-items-flex-end">\n\n             <ion-col></ion-col>\n\n             <ion-col>\n\n               <ion-item>\n\n                 <h2 class="royal">$ {{item.price}}</h2>\n\n               </ion-item>\n\n             </ion-col>\n\n             <ion-col>\n\n                <ion-item>\n\n                  <ion-label>Cantidad: </ion-label>\n\n                  <ion-select (ionChange)="onItemSelection(item.id, $event)" name="cantidad">\n\n                    <ion-option *ngFor="let i of item.stock" [value]="i">{{i}}</ion-option>                      \n\n                  </ion-select>\n\n                </ion-item>\n\n             </ion-col>\n\n           </ion-row>\n\n            <div style="height:1px;width:100%;background-color:#DDDDDD"></div>\n\n          </div>\n\n      \n\n        </ion-list>\n\n\n\n  </ion-card>\n\n\n\n \n\n  \n\n  <ion-card>\n\n    <ion-list no-lines *ngIf="conProduct">\n\n      <div>\n\n        <ion-card-header>\n\n          Resumen del Pedido:\n\n        </ion-card-header>\n\n        <ion-card-content *ngFor="let item of _cart">\n\n          <ion-row>\n\n            <ion-col>\n\n              <p float-left>{{item.name}}</p>\n\n            </ion-col>\n\n            <ion-col>\n\n              <p> x {{products.cantidad}}</p>\n\n            </ion-col>\n\n            <ion-col>\n\n              <div float-right *ngIf="products.cantidad">$ {{addTotalxPedido(item.price,products.cantidad)}}</div>\n\n            </ion-col>\n\n          </ion-row>\n\n        </ion-card-content>\n\n        <ion-row class="lineaTotal"></ion-row>        \n\n         \n\n        <ion-row class="lineaTotal"></ion-row>\n\n        <ion-row>\n\n          <ion-col>\n\n            <h2 float-left>Total</h2>\n\n          </ion-col>\n\n          <ion-col>\n\n            <h2 float-right>$ {{resultadoTotal}}</h2>\n\n          </ion-col>\n\n        </ion-row>\n\n      </div>\n\n    </ion-list>\n\n  </ion-card>\n\n\n\n  <!-- <ion-list>\n\n      <ion-item *ngFor="let item of listProducts" (click)="goToProduct(item)">\n\n        <ion-card>\n\n          <ion-item>\n\n            <ion-row>\n\n              <ion-col>\n\n                <ion-thumbnail item-start>\n\n                  <img src="{{item.imageSrc}}">\n\n                </ion-thumbnail>\n\n              </ion-col>\n\n              <ion-col>\n\n                <ion-card-header>\n\n                  <div>{{item.name}}</div>\n\n                </ion-card-header>\n\n              </ion-col>\n\n              <ion-col>\n\n                <ion-icon float-right name="trash"></ion-icon>\n\n              </ion-col>\n\n            </ion-row>\n\n          </ion-item>\n\n        </ion-card>\n\n      </ion-item>\n\n      <ion-item-options side="left">\n\n        <button ion-button color="danger">\n\n          <ion-icon name="text"></ion-icon>\n\n          Borrar\n\n        </button>\n\n      </ion-item-options>\n\n  </ion-list> -->\n\n  <ion-card>\n\n    <ion-card-header>\n\n      Dejanos tu comentario:\n\n    </ion-card-header>\n\n    <ion-item>\n\n      <ion-label floating>Mensaje</ion-label>\n\n      <ion-textarea [(ngModel)]="comment"></ion-textarea>\n\n    </ion-item>\n\n  </ion-card>\n\n</ion-content>\n\n<ion-footer>\n\n    <ion-toolbar>\n\n        <button ion-button full color="add" (click)="presentAlert()">Realizar Pedido</button>\n\n      </ion-toolbar>\n\n</ion-footer>'/*ion-inline-end:"C:\xampp\htdocs\mascotasya\app\mascotApp\src\pages\shop-cart\shop-cart.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_4__providers_favorite_favorite__["a" /* FavoriteProvider */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_5__providers_shopping_service_shopping_service__["a" /* ShoppingServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], ShopCartPage);
    return ShopCartPage;
}());

//# sourceMappingURL=shop-cart.js.map

/***/ }),

/***/ 118:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(54);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the ModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ModalPage = /** @class */ (function () {
    function ModalPage(navCtrl, navParams, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
    }
    ModalPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ModalPage');
    };
    ModalPage.prototype.presentModal = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
        modal.present();
    };
    ModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-modal',template:/*ion-inline-start:"C:\xampp\htdocs\mascotasya\app\mascotApp\src\pages\modal\modal.html"*/'<ion-content text-center class="vertical-align-content">\n\n    <ion-grid>  \n\n        <ion-row>\n\n            <ion-col>\n\n                <img class="img1" src="../../assets/imgs/elementos/logo/logo-blanco.png" alt="">\n\n            </ion-col>\n\n        </ion-row>\n\n        <ion-row>\n\n        </ion-row>\n\n        <ion-row>\n\n            <ion-col>\n\n                <img class="img2" (click)="presentModal()" src="../../assets/imgs/elementos/logo/logo-corto.png" alt="">\n\n            </ion-col>\n\n        </ion-row>\n\n        <ion-row center>\n\n            <ion-col>\n\n                <img class="img3" (click)="presentModal()" src="../../assets/imgs/flecha.png" alt="">\n\n            </ion-col>\n\n        </ion-row>\n\n    </ion-grid>\n\n</ion-content>'/*ion-inline-end:"C:\xampp\htdocs\mascotasya\app\mascotApp\src\pages\modal\modal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */]])
    ], ModalPage);
    return ModalPage;
}());

//# sourceMappingURL=modal.js.map

/***/ }),

/***/ 127:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 127;

/***/ }),

/***/ 168:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/consultas/consultas.module": [
		307,
		8
	],
	"../pages/favorites/favorites.module": [
		308,
		7
	],
	"../pages/interna-product/interna-product.module": [
		315,
		6
	],
	"../pages/login/login.module": [
		313,
		5
	],
	"../pages/mas/mas.module": [
		309,
		4
	],
	"../pages/menu/menu.module": [
		310,
		3
	],
	"../pages/modal/modal.module": [
		311,
		2
	],
	"../pages/pendientes/pendientes.module": [
		312,
		1
	],
	"../pages/shop-cart/shop-cart.module": [
		314,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 168;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 169:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_shopping_service_shopping_service__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__mas_mas__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pendientes_pendientes__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__favorites_favorites__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shop_cart_shop_cart__ = __webpack_require__(117);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var TabsPage = /** @class */ (function () {
    function TabsPage(navCtrl, navParams, storage, shoppingService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.shoppingService = shoppingService;
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_7__favorites_favorites__["a" /* FavoritesPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_8__shop_cart_shop_cart__["a" /* ShopCartPage */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_6__pendientes_pendientes__["a" /* PendientesPage */];
        this.tab5Root = __WEBPACK_IMPORTED_MODULE_5__mas_mas__["a" /* MasPage */];
        this.myIndex = navParams.data.tabIndex || 0;
        //this.countCarItem = this.storage.get('products-add') ? this.storage.get('products-add').then((val)=> this.badge = val) : this.badge = 0;
        //this.countCarItem();
    }
    TabsPage.prototype.ngOnInit = function () {
        this.count$ = this.shoppingService.listSize;
    };
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\xampp\htdocs\mascotasya\app\mascotApp\src\pages\tabs\tabs.html"*/'<ion-tabs [selectedIndex]="myIndex">\n\n  <ion-tab [root]="tab1Root" tabTitle="Home" tabIcon="mascotapp-home"></ion-tab>\n\n  <ion-tab [root]="tab2Root" tabTitle="Favoritos" tabIcon="mascotapp-favoritos"></ion-tab>\n\n  <ion-tab [root]="tab3Root" [tabBadge]="count$ | async" tabBadgeStyle="danger" tabTitle="Carrito" tabIcon="mascotapp-carrito"></ion-tab>\n\n  <ion-tab [root]="tab4Root" tabTitle="Pendientes" tabIcon="mascotapp-pendientes"></ion-tab>\n\n  <ion-tab [root]="tab5Root" tabTitle="Perfil" tabIcon="contact"></ion-tab>\n\n</ion-tabs>\n\n'/*ion-inline-end:"C:\xampp\htdocs\mascotasya\app\mascotApp\src\pages\tabs\tabs.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_0__providers_shopping_service_shopping_service__["a" /* ShoppingServiceProvider */]])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 170:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__interna_product_interna_product__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__data_slides_mok__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_product_product__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_auth_auth__ = __webpack_require__(89);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//import { PRODUCTS } from './../../data/product-mok';
//import { MARCAS } from './../../data/marcas-mok';




var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, alertCtrl, loadingCtrl, productProvider, authProvider) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.productProvider = productProvider;
        this.authProvider = authProvider;
        this.images = __WEBPACK_IMPORTED_MODULE_3__data_slides_mok__["a" /* SLIDES */];
        //this.presentAlert();
        this.getLocalidades();
        this.getAllBrand();
    }
    /* ionViewWillEnter(){
      this.getProducts();
    } */
    HomePage.prototype.presentLoading = function () {
        var loader = this.loadingCtrl.create({
            content: "Espere por favor...",
            duration: 3000
        });
        loader.present();
    };
    HomePage.prototype.getLocalidades = function () {
        var _this = this;
        this.authProvider.getLocalidades().subscribe(function (x) {
            _this.localidades = x['data'];
            _this.presentAlert(_this.localidades);
            //console.log('localidades',this.localidades);
        });
    };
    HomePage.prototype.presentAlert = function (localidades) {
        var _this = this;
        //console.log('ALERT!!!')
        var alert = this.alertCtrl.create();
        alert.setTitle('Elige tu Localidad');
        //alert.addInput({type: 'radio', label: '2', value: '2'});
        localidades.map(function (local) {
            var lo = local.localidad;
            //console.log(lo);
            alert.addInput({ type: 'radio', label: lo, value: lo });
        });
        alert.addButton({
            text: 'OK',
            handler: function (data) {
                _this.getProducts(2, data);
                console.log('Site:', data);
                _this.presentLoading();
            }
        });
        alert.present();
    };
    HomePage.prototype.goToInterna = function (product) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__interna_product_interna_product__["a" /* InternaProductPage */], product);
    };
    HomePage.prototype.next = function () {
        this.slides.slideNext();
    };
    HomePage.prototype.prev = function () {
        this.slides.slidePrev();
    };
    HomePage.prototype.getProducts = function (userid, local) {
        var _this = this;
        this.productProvider.getProducts(userid, local).subscribe(function (products) { /* console.log('a',products['data'] ),*/ _this.products = products['data']; });
    };
    HomePage.prototype.getAllBrand = function () {
        var _this = this;
        this.productProvider.getBrand()
            .subscribe(function (brand) { /* console.log('b',brand['data'] ),*/ _this.marcas = brand['data']; });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('slides'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Slides */])
    ], HomePage.prototype, "slides", void 0);
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\xampp\htdocs\mascotasya\app\mascotApp\src\pages\home\home.html"*/'<ion-header>\n\n  <ion-navbar color="royal">\n\n    <ion-row>\n\n      <ion-col>\n\n        <ion-buttons float-left>\n\n          <button ion-button icon-only menuToggle>\n\n            <ion-icon name="menu"></ion-icon>\n\n          </button>\n\n        </ion-buttons>\n\n      </ion-col>\n\n      <!-- <ion-col class="imageHeader"> -->\n\n        <img style="width: 150px; height: 40px;" src="../../assets/imgs/elementos/logo/logo-blanco.png">\n\n      <!-- </ion-col> -->\n\n      <ion-col>\n\n        <ion-buttons float-right>\n\n          <button ion-button icon-only>\n\n            <ion-icon name="search"></ion-icon>\n\n          </button>\n\n        </ion-buttons>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <ion-slides style="height: 232px !important;" *ngIf="images"  autoplay="5000" loop="false" speed="500" class="slides" pager="true">\n\n    <ion-slide class="slideBanner" *ngFor="let image of images">\n\n      <img class="banner" src="{{image.img}}" alt="Product Image">\n\n    </ion-slide>\n\n  </ion-slides>\n\n   <!--  <ion-fab right bottom>\n\n      <button ion-fab color="add"><ion-icon name="add"></ion-icon></button>\n\n    </ion-fab> -->\n\n    <ion-item>\n\n     <!-- <ion-badge color="secondary"></ion-badge> -->\n\n     <ion-grid text-center>\n\n       <ion-row wrap>\n\n           <ion-badge class="apply" color="light">\n\n             <div float-left style="width: 105px; text-align: center;margin-top: 6px;">\n\n               <h3>GANE 10% OFF</h3>\n\n               <p>En tu primer compra</p>\n\n             </div>\n\n           <ion-col>\n\n             <button style="height: 35px;" ion-button float-right color="royal">Aplicar Cupón</button>\n\n           </ion-col>\n\n          </ion-badge>\n\n         </ion-row>\n\n      </ion-grid>\n\n    </ion-item>\n\n    <ion-slides style="height: 230px !important;" *ngIf="products" loop="false" slidesPerView="2.5">\n\n      <ion-slide *ngFor="let product of products">\n\n        <ion-card class="cardProduct" (click)="goToInterna(product)">\n\n          <img class="imgProduct" src="{{product.imageSrc}}" alt="Product Image">\n\n          <ion-card-title>\n\n              <p>Ranking</p>\n\n          </ion-card-title>\n\n          <p>\n\n             $ {{product.price}}\n\n          </p>\n\n          <p>\n\n            <button ion-button class="buyProduct" color="royal">COMPRAR</button>\n\n          </p>\n\n        </ion-card>\n\n      </ion-slide>\n\n    </ion-slides>\n\n    <ion-card style="height: 165px !important;">\n\n      <ion-card-header style="text-align: center;">\n\n        <ion-col>\n\n          <ion-icon float-left name="arrow-back" class="btnPrev" (click)="prev()"></ion-icon>\n\n        </ion-col>\n\n        <ion-col>\n\n          Nuestras Marcas\n\n        </ion-col>\n\n        <ion-col>\n\n            <ion-icon float-right name="arrow-forward" class="btnPrev" (click)="next()"></ion-icon>\n\n        </ion-col>\n\n      </ion-card-header>\n\n      <ion-card-content class="marcasContent">\n\n        <div class="marcasContent">\n\n          <ion-slides #slides *ngIf="marcas" loop="false" slidesPerView="2">\n\n            <ion-slide *ngFor="let marca of marcas">\n\n              <img src="http://ctrlztest.com.ar/mascotasya/admin/{{marca.imageSrc}}" alt="Sponsor Image">\n\n            </ion-slide>\n\n          </ion-slides>\n\n        </div>\n\n      </ion-card-content>\n\n    </ion-card>\n\n    <ion-card class="cards-list-demo">\n\n      <ion-card-header>\n\n        OPORTUNIDADES ESPECIALES\n\n      </ion-card-header>\n\n      <ion-slides style="height: 230px !important;" *ngIf="products" loop="false" slidesPerView="2.5">\n\n        <ion-slide *ngFor="let product of products">\n\n          <ion-card class="cardProduct" (click)="goToInterna(product)">\n\n            <img class="imgProduct" src="{{product.imageSrc}}" alt="Product Image">\n\n            <ion-card-title>\n\n                <p>Ranking</p>\n\n            </ion-card-title>\n\n            <p>\n\n               $ {{product.price}}\n\n            </p>\n\n            <p>\n\n              <button ion-button class="buyProduct" color="royal">COMPRAR</button>\n\n            </p>\n\n            </ion-card>\n\n          </ion-slide>\n\n      </ion-slides>\n\n    </ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\xampp\htdocs\mascotasya\app\mascotApp\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_product_product__["a" /* ProductProvider */], __WEBPACK_IMPORTED_MODULE_5__providers_auth_auth__["a" /* AuthProvider */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 171:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AboutPage = /** @class */ (function () {
    function AboutPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    AboutPage.prototype.popView = function () {
        this.navCtrl.pop();
    };
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"C:\xampp\htdocs\mascotasya\app\mascotApp\src\pages\about\about.html"*/'<ion-content padding>\n\n  <div class="content"></div>\n\n    <ion-list>\n\n      <ion-item no-lines class="top">\n\n          <ion-col>\n\n            <ion-icon float-right name="close" color="primary" style="font-size: 1.5em;" (click)="popView()"></ion-icon>\n\n          </ion-col>\n\n        <ion-row style="text-align: center;">\n\n          <ion-col>\n\n            <img class="imgLogo" src="../../assets/imgs/elementos/logo/logo-corto.png">\n\n          </ion-col>\n\n        </ion-row>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label floating>Nombre</ion-label>\n\n        <ion-input type="text"></ion-input>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label floating>Apellido</ion-label>\n\n        <ion-input type="text"></ion-input>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label floating>Direccion</ion-label>\n\n        <ion-input type="text"></ion-input>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label floating>Localidad</ion-label>\n\n        <ion-input type="text"></ion-input>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label floating>Telefono</ion-label>\n\n        <ion-input type="tel"></ion-input>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label floating>Email</ion-label>\n\n        <ion-input type="email"></ion-input>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label floating>Contraseña</ion-label>\n\n        <ion-input type="password"></ion-input>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label floating>Repetir Contraseña</ion-label>\n\n        <ion-input type="password"></ion-input>\n\n      </ion-item>\n\n      <ion-item class="botton" no-lines style="text-align: center !important;">\n\n        <button ion-button (click)="registerUser()" color="royal">Guardar</button>\n\n      </ion-item>\n\n    </ion-list>\n\n</ion-content>\n\n\n\n'/*ion-inline-end:"C:\xampp\htdocs\mascotasya\app\mascotApp\src\pages\about\about.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 215:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(236);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 236:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(288);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_about_about__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_consultas_consultas__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_login_login__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_home_home__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_mas_mas__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_pendientes_pendientes__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_tabs_tabs__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_interna_product_interna_product__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_accordion_accordion__ = __webpack_require__(305);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_modal_modal__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_menu_menu__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_status_bar__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_splash_screen__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__providers_auth_auth__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_favorites_favorites__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_shop_cart_shop_cart__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__providers_product_product__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__angular_http__ = __webpack_require__(306);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__angular_common_http__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__providers_favorite_favorite__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__providers_shopping_service_shopping_service__ = __webpack_require__(88);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_consultas_consultas__["a" /* ConsultasPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_pendientes_pendientes__["a" /* PendientesPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_mas_mas__["a" /* MasPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_interna_product_interna_product__["a" /* InternaProductPage */],
                __WEBPACK_IMPORTED_MODULE_13__components_accordion_accordion__["a" /* AccordionComponent */],
                __WEBPACK_IMPORTED_MODULE_14__pages_modal_modal__["a" /* ModalPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_favorites_favorites__["a" /* FavoritesPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_shop_cart_shop_cart__["a" /* ShopCartPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_menu_menu__["a" /* MenuPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/consultas/consultas.module#ConsultasPageModule', name: 'ConsultasPage', segment: 'consultas', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/favorites/favorites.module#FavoritesPageModule', name: 'FavoritesPage', segment: 'favorites', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/mas/mas.module#MasPageModule', name: 'MasPage', segment: 'mas', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/menu/menu.module#MenuPageModule', name: 'MenuPage', segment: 'menu', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/modal/modal.module#ModalPageModule', name: 'ModalPage', segment: 'modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/pendientes/pendientes.module#PendientesPageModule', name: 'PendientesPage', segment: 'pendientes', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/shop-cart/shop-cart.module#ShopCartPageModule', name: 'ShopCartPage', segment: 'shop-cart', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/interna-product/interna-product.module#InternaProductPageModule', name: 'InternaProductPage', segment: 'interna-product', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_22__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_23__angular_common_http__["b" /* HttpClientModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_consultas_consultas__["a" /* ConsultasPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_pendientes_pendientes__["a" /* PendientesPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_mas_mas__["a" /* MasPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_interna_product_interna_product__["a" /* InternaProductPage */],
                __WEBPACK_IMPORTED_MODULE_13__components_accordion_accordion__["a" /* AccordionComponent */],
                __WEBPACK_IMPORTED_MODULE_14__pages_modal_modal__["a" /* ModalPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_favorites_favorites__["a" /* FavoritesPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_shop_cart_shop_cart__["a" /* ShopCartPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_menu_menu__["a" /* MenuPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_16__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_17__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_18__providers_auth_auth__["a" /* AuthProvider */],
                __WEBPACK_IMPORTED_MODULE_21__providers_product_product__["a" /* ProductProvider */],
                __WEBPACK_IMPORTED_MODULE_24__providers_favorite_favorite__["a" /* FavoriteProvider */],
                __WEBPACK_IMPORTED_MODULE_25__providers_shopping_service_shopping_service__["a" /* ShoppingServiceProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 270:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SLIDES; });
var SLIDES = [
    {
        img: '../assets/imgs/elementos/slider/slider1.jpg'
    },
    {
        img: '../assets/imgs/elementos/slider/slider2.jpg'
    },
    {
        img: '../assets/imgs/elementos/slider/slider3.jpg'
    },
];
//# sourceMappingURL=slides-mok.js.map

/***/ }),

/***/ 288:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_modal_modal__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_observable_timer__ = __webpack_require__(296);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_observable_timer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_observable_timer__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
//import { HomePage } from './../pages/home/home';





//import { LoginPage } from './../pages/login/login';
//import { TabsPage } from '../pages/tabs/tabs';

var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        var _this = this;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_modal_modal__["a" /* ModalPage */];
        this.showSplash = true;
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
            Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_observable_timer__["timer"])(3000).subscribe(function () { return _this.showSplash = false; });
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\xampp\htdocs\mascotasya\app\mascotApp\src\app\app.html"*/'<div *ngIf="showSplash" class="splash">\n\n    <div class="spinner"></div>\n\n</div>\n\n<ion-nav [root]="rootPage"></ion-nav>\n\n'/*ion-inline-end:"C:\xampp\htdocs\mascotasya\app\mascotApp\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 305:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccordionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
 * Generated class for the AccordionComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var AccordionComponent = /** @class */ (function () {
    function AccordionComponent(renderer) {
        this.renderer = renderer;
        this.accordionExpanded = false;
    }
    AccordionComponent.prototype.ngOnInit = function () {
        console.log(this.cardContent.nativeElement);
        //this.renderer.setElementStyle(this.cardContent.nativeElement, "transition", "max-height 500ms, padding 500ms"); 
        this.renderer.setElementStyle(this.cardContent.nativeElement, "webkitTransition", "max-height 500ms, padding 500ms");
    };
    AccordionComponent.prototype.toggleAccordion = function () {
        if (this.accordionExpanded) {
            this.renderer.setElementStyle(this.cardContent.nativeElement, "max-height", "0px");
            this.renderer.setElementStyle(this.cardContent.nativeElement, "padding", "0px 16px");
            //this.renderer.setElementStyle(this.cardContent.naticeElement, "padding", "0px 16px")
        }
        else {
            this.renderer.setElementStyle(this.cardContent.nativeElement, "max-height", "500px");
            this.renderer.setElementStyle(this.cardContent.nativeElement, "padding", "13px 16px");
            //this.renderer.setElementStyle(this.cardContent.naticeElement, "padding", "13px 16px")
        }
        this.accordionExpanded = !this.accordionExpanded;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])("cc"),
        __metadata("design:type", Object)
    ], AccordionComponent.prototype, "cardContent", void 0);
    AccordionComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'accordion',template:/*ion-inline-start:"C:\xampp\htdocs\mascotasya\app\mascotApp\src\components\accordion\accordion.html"*/'<ion-card>\n\n  <ion-card-header (click)="toggleAccordion()">\n\n    Especificaciones\n\n  </ion-card-header>\n\n  <ion-card-content #cc>\n\n    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum \n\n    has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer \n\n    took a galley of type and scrambled it to make a type specimen book. It has survived not only \n\n    five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. \n\n    It was popularised in the 1960s with the release of Letraset sheets containing \n\n    Lorem Ipsum passages, and more recently with desktop publishing software like Aldus \n\n    PageMaker including versions of Lorem Ipsum. \n\n  </ion-card-content>\n\n</ion-card>\n\n<!-- <ion-card>\n\n  <ion-card-header (click)="toggleAccordion()">\n\n    Resumen\n\n  </ion-card-header>\n\n  <ion-card-content #cc>\n\n    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum \n\n    has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer \n\n    took a galley of type and scrambled it to make a type specimen book. It has survived not only \n\n    five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. \n\n    It was popularised in the 1960s with the release of Letraset sheets containing \n\n    Lorem Ipsum passages, and more recently with desktop publishing software like Aldus \n\n    PageMaker including versions of Lorem Ipsum. \n\n  </ion-card-content>\n\n</ion-card>\n\n<ion-card>\n\n  <ion-card-header (click)="toggleAccordion()">\n\n    Detalles\n\n  </ion-card-header>\n\n  <ion-card-content #cc>\n\n    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum \n\n    has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer \n\n    took a galley of type and scrambled it to make a type specimen book. It has survived not only \n\n    five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. \n\n    It was popularised in the 1960s with the release of Letraset sheets containing \n\n    Lorem Ipsum passages, and more recently with desktop publishing software like Aldus \n\n    PageMaker including versions of Lorem Ipsum. \n\n  </ion-card-content>\n\n</ion-card>\n\n<ion-card>\n\n  <ion-card-header (click)="toggleAccordion()">\n\n    Consejos\n\n  </ion-card-header>\n\n  <ion-card-content #cc>\n\n    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum \n\n    has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer \n\n    took a galley of type and scrambled it to make a type specimen book. It has survived not only \n\n    five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. \n\n    It was popularised in the 1960s with the release of Letraset sheets containing \n\n    Lorem Ipsum passages, and more recently with desktop publishing software like Aldus \n\n    PageMaker including versions of Lorem Ipsum. \n\n  </ion-card-content>\n\n</ion-card> -->'/*ion-inline-end:"C:\xampp\htdocs\mascotasya\app\mascotApp\src\components\accordion\accordion.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* Renderer */]])
    ], AccordionComponent);
    return AccordionComponent;
}());

//# sourceMappingURL=accordion.js.map

/***/ }),

/***/ 34:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InternaProductPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_favorite_favorite__ = __webpack_require__(49);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var InternaProductPage = /** @class */ (function () {
    function InternaProductPage(navCtrl, navParams, alertCtrl, favorite, storage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.favorite = favorite;
        this.storage = storage;
        this.listProducts = [];
        this.listPendings = [];
        this.detailProduct = this.navParams.data;
        this.isChecked = (this.detailProduct.fav != 0);
    }
    InternaProductPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad InternaProductPage');
    };
    InternaProductPage.prototype.addProduct_cart = function () {
        var alert = this.alertCtrl.create({
            title: 'Producto Agregado!',
            subTitle: 'Producto agregado al carrito de compras!',
            buttons: ['OK']
        });
        alert.present();
    };
    InternaProductPage.prototype.addProduct_pendient = function () {
        var alert = this.alertCtrl.create({
            title: 'Producto pendiente!',
            subTitle: 'Producto agregado como Pendiente!',
            buttons: ['OK']
        });
        alert.present();
    };
    InternaProductPage.prototype.addToFavorites = function (userid, productid) {
        if (this.isChecked) {
            this.favorite.deleteToFavorite(userid, productid);
            this.isChecked = false;
        }
        else {
            this.favorite.addToFavorite(userid, productid);
            this.isChecked = true;
        }
    };
    InternaProductPage.prototype.goToComprar = function (product) {
        this.addProduct_cart();
        //agregar a la lista del carrito
        console.log("add product", product);
        this.storage.set("product-list", product);
        /*     this.listProducts.push(product);
        if (this.storage.get("product-list")) {
          this.storage.get('product-list').then((val) => {
            console.log(val)
            this.listProducts = val;
          });
        }else{
          this.storage.set("product-list", this.listProducts);
        } */
        /* this.storage.get('product-list').then((val) => {
          this.listProducts = val;
          this.listProducts.push(product);
          this.storage.set("product-list", this.listProducts);
          //this.listProducts.push(val);
          console.log('localSotage=>val', val);
        }); */
        /*  this.listProducts.push(product);
         console.log("add product: ", this.listProducts); */
    };
    InternaProductPage.prototype.goToPending = function (product) {
        this.addProduct_pendient();
        console.log("inicio", this.listPendings);
        //
        this.storage.set("pending-list", product);
        //
        /* if (this.storage.get("pending-list")) {
         this.storage.get('pending-list').then((val) => {
          this.listPendings = JSON.parse(val);
          
         });
         console.log("antes",this.listPendings);
        
         console.log("despues",this.listPendings);
       }
       if(this.listPendings == null){
         this.listPendings =[];
       }
       this.listPendings.push(product);
       this.storage.set("pending-list", JSON.stringify(this.listPendings)); */
        /* console.log("antes: ",  this.listPendings);
        console.log("prod: ", product);
        this.listPendings.push(product);
        console.log("despues: ",  this.listPendings);
        /* this.storage.get('pending-list').then((val) => {
          console.log("antes: ", val);
        });
    
         */
        /*
            this.storage.get('pending-list').then((val) => {
              console.log("despues: ", val);
            }); */
    };
    InternaProductPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-interna-product',template:/*ion-inline-start:"C:\xampp\htdocs\mascotasya\app\mascotApp\src\pages\interna-product\interna-product.html"*/'<ion-header>\n\n\n\n  <ion-navbar color="royal">\n\n    <ion-title>Detalles</ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button icon-only>\n\n        <ion-icon name="share"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n    <ion-buttons end>\n\n      <button ion-button icon-only>\n\n        <ion-icon name="search"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n  <ion-item>\n\n    <!-- <ion-badge color="secondary"></ion-badge> -->\n\n    <ion-grid text-center>\n\n        <ion-row wrap>\n\n            <ion-badge color="light">\n\n            <ion-col>\n\n              <div float-left style="width: 110px; text-align: center; padding-top: 15px;">\n\n                <h3>Gane 10% OFF</h3>\n\n                <p>En tu primer compra</p>\n\n              </div>\n\n            </ion-col>\n\n            <ion-col>\n\n              <button ion-button float-right color="royal">Apply Cupon</button>\n\n            </ion-col>\n\n           </ion-badge>\n\n        <ion-col>\n\n          <h2>{{detailProduct.name}}</h2> - <h2>{{detailProduct.brand}}</h2>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row>\n\n        <ion-col>\n\n          <img src="{{detailProduct.imageSrc}}" alt="Image Product">\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row>\n\n        <ion-col>\n\n          <ion-icon float-left name="expand"></ion-icon>\n\n        </ion-col>\n\n        <ion-col>\n\n          <ion-icon float-right [color]="isChecked ? \'danger\' : \'dark\'" name="heart" name="heart" (click)="addToFavorites(1,detailProduct.id)"></ion-icon>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row>\n\n        <ion-badge color="light">\n\n          <ion-col>\n\n            <h2 class="price">$ {{detailProduct.price}}</h2>\n\n          </ion-col>\n\n        </ion-badge>\n\n      </ion-row>\n\n    </ion-grid>\n\n  </ion-item>\n\n  <ion-item>\n\n    <ion-label>Cantidad</ion-label>\n\n    <ion-select [(ngModel)]="toppings" okText="Okay" cancelText="Dismiss">\n\n      <ion-option>\n\n        <ion-row>\n\n          <ion-col>\n\n            <div float-left>7 Unidades</div>\n\n          </ion-col>\n\n          <ion-col>\n\n            <div float-right>$400</div>\n\n          </ion-col>\n\n        </ion-row>\n\n      </ion-option>\n\n      <ion-option>\n\n        <ion-row>\n\n          <ion-col>\n\n            <div float-left>14 Unidades</div>\n\n          </ion-col>\n\n          <ion-col>\n\n            <div float-right>$900</div>\n\n          </ion-col>\n\n        </ion-row>\n\n      </ion-option>\n\n      <ion-option>\n\n          <ion-row>\n\n              <ion-col>\n\n                <div float-left>21 Unidades</div>\n\n              </ion-col>\n\n              <ion-col>\n\n                <div float-right>$1200</div>\n\n              </ion-col>\n\n            </ion-row>\n\n      </ion-option>\n\n      <ion-option>\n\n          <ion-row>\n\n              <ion-col>\n\n                <div float-left>28 Unidades</div>\n\n              </ion-col>\n\n              <ion-col>\n\n                <div float-right>$2500</div>\n\n              </ion-col>\n\n            </ion-row>\n\n      </ion-option>\n\n    </ion-select>\n\n  </ion-item>\n\n  <ion-list>\n\n    <accordion></accordion>\n\n    <accordion></accordion>\n\n    <accordion></accordion>    \n\n  </ion-list>\n\n</ion-content>\n\n<ion-footer>\n\n    <ion-toolbar>\n\n      <ion-buttons left>\n\n        <button ion-button solid small color="primary" (click)="goToPending(detailProduct)">\n\n            <ion-col>\n\n              <ion-icon float-left name="mascotapp-pendientes"></ion-icon>\n\n            </ion-col>\n\n            <ion-col>\n\n              <div float-right style="font-size: 1rem;">Agregar a Pendientes</div>\n\n            </ion-col>\n\n        </button>\n\n      </ion-buttons>\n\n      <ion-buttons right>\n\n        <button ion-button solid small color="button" (click)="goToComprar(detailProduct)">\n\n            <ion-col>\n\n                <ion-icon float-left name="mascotapp-carrito"></ion-icon>\n\n              </ion-col>\n\n              <ion-col>\n\n                <div float-right style="font-size: 1rem;" >Agregar al carrito</div>\n\n              </ion-col>\n\n        </button>\n\n      </ion-buttons>\n\n  \n\n    </ion-toolbar>\n\n  </ion-footer>'/*ion-inline-end:"C:\xampp\htdocs\mascotasya\app\mascotApp\src\pages\interna-product\interna-product.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_favorite_favorite__["a" /* FavoriteProvider */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
    ], InternaProductPage);
    return InternaProductPage;
}());

//# sourceMappingURL=interna-product.js.map

/***/ }),

/***/ 49:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FavoriteProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators_tap__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators_tap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators_tap__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FavoriteProvider = /** @class */ (function () {
    function FavoriteProvider(http) {
        this.http = http;
        console.log('Hello FavoriteProvider Provider');
    }
    FavoriteProvider.prototype.getAllFavorites = function (userid) {
        return this.http.get("http://ctrlztest.com.ar/mascotasya/apirest/user-favorites.php?userid=" + userid)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators_tap__["tap"])(function (response) { return response['data']; }));
    };
    FavoriteProvider.prototype.addToFavorite = function (userId, productId) {
        var url = "http://ctrlztest.com.ar/mascotasya/apirest/user-create-favorite.php";
        var postData = new FormData();
        postData.append('userid', userId);
        postData.append('productid', productId);
        this.data = this.http.post(url, postData);
        this.data.subscribe(function (data) {
            console.log(data);
        });
    };
    FavoriteProvider.prototype.deleteToFavorite = function (userid, productid) {
        var url = "http://ctrlztest.com.ar/mascotasya/apirest/user-delete-favorite.php";
        var postData = new FormData();
        postData.append('userid', userid);
        postData.append('productid', productid);
        return this.http.post(url, postData);
    };
    FavoriteProvider.prototype.sendRequest = function (userid, comment, foodweeks, products, fecha) {
        var url = "http://ctrlztest.com.ar/mascotasya/apirest/request-create.php";
        var jsonProduct = JSON.stringify(products);
        var data = new FormData();
        data.append('userid', userid);
        data.append('comment', comment);
        data.append('foodweeks', foodweeks);
        data.append('products', jsonProduct);
        data.append('daterequest', fecha);
        /*  console.log('productos', data.get(jsonProduct));
         console.log('commet', data.get(comment));
         console.log('foodweeks', data.get(foodweeks));
         console.log('daterequest', data.get(fecha)); */
        this.data = this.http.post(url, data);
        this.data.subscribe(function (data) {
            console.log(data);
        });
    };
    FavoriteProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], FavoriteProvider);
    return FavoriteProvider;
}());

//# sourceMappingURL=favorite.js.map

/***/ }),

/***/ 54:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_auth_auth__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__about_about__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__menu_menu__ = __webpack_require__(115);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





//import { TabsPage } from './../tabs/tabs';
var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, navParams, authProvider, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.authProvider = authProvider;
        this.alertCtrl = alertCtrl;
        this.user = {
            name: '',
            pw: ''
        };
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage.prototype.loginUser = function () {
        var _this = this;
        this.authProvider.login(this.user.name, this.user.pw)
            .subscribe(function (success) {
            console.log("login", success);
            if (success['data']) {
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__menu_menu__["a" /* MenuPage */]);
            }
            else {
                var alert_1 = _this.alertCtrl.create({
                    title: 'Ingreso fallido!',
                    message: 'Por favor verifica tu usuario o contraseña',
                    buttons: ['OK']
                });
                alert_1.present();
            }
        });
    };
    LoginPage.prototype.goToRegister = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__about_about__["a" /* AboutPage */]);
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"C:\xampp\htdocs\mascotasya\app\mascotApp\src\pages\login\login.html"*/'<ion-content padding>\n\n  <div class="content"></div>\n\n    <ion-list>\n\n      <ion-item no-lines class="top">\n\n        <ion-row style="text-align: center;"> \n\n          <ion-col>\n\n            <ion-icon float-right name="close" color="primary" style="margin-top: 30px; font-size: 1.5em;"></ion-icon>\n\n            <img class="imgLogo" src="../../assets/imgs/elementos/logo/logo-corto.png">\n\n          </ion-col>\n\n        </ion-row>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label floating>Usuario</ion-label>\n\n        <ion-input type="text" [(ngModel)]="user.name"></ion-input>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label floating>Password</ion-label>\n\n        <ion-input type="password" [(ngModel)]="user.pw"></ion-input>\n\n      </ion-item>\n\n      <ion-item no-lines style="text-align: center !important;">\n\n        <button class="entrar" ion-button (click)="loginUser()" color="royal">Entrar</button>\n\n      </ion-item>\n\n      <ion-item no-lines style="text-align: center !important;">\n\n        <p style="font-size: 0.7em;"><strong>Ingresa con:</strong></p>\n\n        <div style="width: 195px; height: 55px; margin: 0 auto;">\n\n          <button class="demas" float-left ion-button icon-start color="facebook">\n\n            <ion-icon name="logo-facebook"></ion-icon>\n\n          </button>\n\n          <button class="demas" float-right ion-button icon-start color="google">\n\n            <ion-icon name="logo-google"></ion-icon>\n\n          </button>\n\n        </div>\n\n      </ion-item>      \n\n      <ion-item class="botton">\n\n        <ion-row>\n\n          <ion-col style="text-align: center;">\n\n            <p float-left style="font-size: 0.6em;"><strong>Olvidaste tu contraseña?</strong></p>\n\n          </ion-col>\n\n          <ion-col style="text-align: center;" (click)="goToRegister()">\n\n            <p float-right style="font-size: 0.6em;"><strong>Registrate</strong></p>\n\n          </ion-col>\n\n        </ion-row>  \n\n      </ion-item>\n\n    </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\xampp\htdocs\mascotasya\app\mascotApp\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_0__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 86:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(266);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators_tap__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators_tap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators_tap__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProductProvider = /** @class */ (function () {
    function ProductProvider(http) {
        this.http = http;
        console.log('Hello ProductProvider Provider');
    }
    ProductProvider.prototype.getProducts = function (userid, local) {
        /*  this.http.get("http://ctrlztest.com.ar/mascotasya/apirest/product-all.php")
                         .map(this.extractData); */
        return this.http.get("http://ctrlztest.com.ar/mascotasya/apirest/product-all-location.php?location=" + local + "&userid=" + userid)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators_tap__["tap"])(function (response) { return response["data"]; }));
    };
    ProductProvider.prototype.getBrand = function () {
        return this.http.get("http://ctrlztest.com.ar/mascotasya/apirest/brand-all.php")
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators_tap__["tap"])(function (response) { return response['data']; }));
    };
    ProductProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], ProductProvider);
    return ProductProvider;
}());

//# sourceMappingURL=product.js.map

/***/ }),

/***/ 88:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShoppingServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the ShoppingServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ShoppingServiceProvider = /** @class */ (function () {
    function ShoppingServiceProvider(http) {
        this.http = http;
        this.products = [];
        this.listSizeSubject = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"]();
        this._listSize = this.listSizeSubject.asObservable();
        console.log('Hello ShoppingServiceProvider Provider');
    }
    Object.defineProperty(ShoppingServiceProvider.prototype, "listSize", {
        get: function () {
            return this._listSize;
        },
        enumerable: true,
        configurable: true
    });
    ShoppingServiceProvider.prototype.addItem = function (product) {
        this.products.push(product);
        this.listSizeSubject.next(this.products.length); //next method updates the stream value
    };
    ShoppingServiceProvider.prototype.removeItem = function (product) {
        var index = this.products.indexOf(product);
        if (index > -1) {
            this.products.splice(index, 1);
            this.listSizeSubject.next(this.products.length);
        }
    };
    ShoppingServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], ShoppingServiceProvider);
    return ShoppingServiceProvider;
}());

//# sourceMappingURL=shopping-service.js.map

/***/ }),

/***/ 89:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_operators_tap__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_operators_tap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_operators_tap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(42);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
//import { HttpClient } from '@angular/common/http';



var AuthProvider = /** @class */ (function () {
    function AuthProvider(http) {
        this.http = http;
        console.log('Hello AuthProvider Provider');
    }
    AuthProvider.prototype.login = function (name, pw) {
        var _this = this;
        return this.http.get("http://ctrlztest.com.ar/mascotasya/apirest/validate-user.php?user=" + name + "&pass=" + pw)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_1_rxjs_operators_tap__["tap"])(function (response) {
            if (response['data']) {
                _this.currentUser = {
                    name: name,
                    role: 0
                };
            }
        }));
    };
    AuthProvider.prototype.getLocalidades = function () {
        return this.http.get("http://ctrlztest.com.ar/mascotasya/apirest/locations-all.php")
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_1_rxjs_operators_tap__["tap"])(function (response) { return response['data']; }));
    };
    AuthProvider.prototype.isLoggedIn = function () {
        return this.currentUser != null;
    };
    AuthProvider.prototype.isUser = function () {
        return this.currentUser.role === 0;
    };
    AuthProvider.prototype.logout = function () {
        this.currentUser = null;
    };
    AuthProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
    ], AuthProvider);
    return AuthProvider;
}());

//# sourceMappingURL=auth.js.map

/***/ })

},[215]);
//# sourceMappingURL=main.js.map