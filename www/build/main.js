webpackJsonp([7],{

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FavoritesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_product_product__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__interna_product_interna_product__ = __webpack_require__(33);
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
    function FavoritesPage(navCtrl, navParams, productProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.productProvider = productProvider;
        this.getProducts();
    }
    FavoritesPage.prototype.getProducts = function () {
        var _this = this;
        this.productProvider.getProducts().subscribe(function (products) { console.log('a', products['data']), _this.products = products['data']; });
    };
    FavoritesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FavoritesPage');
    };
    FavoritesPage.prototype.goToProduct = function (product) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__interna_product_interna_product__["a" /* InternaProductPage */], product);
    };
    FavoritesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-favorites',template:/*ion-inline-start:"/home/rodrigo/tutorialIonic/mascotApp/github/mascotApp/src/pages/favorites/favorites.html"*/'<ion-header>\n    <ion-navbar style="max-height: 56px !important;" color="royal" >\n      <ion-title>\n        Favoritos\n      </ion-title>\n      <ion-buttons end>\n        <button ion-button icon-only>\n          <ion-icon name="search"></ion-icon>\n        </button>\n      </ion-buttons>\n    </ion-navbar>\n  </ion-header>\n\n\n<ion-content>\n  <ion-list>\n    <ion-item *ngFor="let item of products" (click)="goToProduct(item)">\n      <ion-thumbnail item-start>\n        <img src="{{item.imageSrc}}">\n      </ion-thumbnail>\n      <h2>{{item.name}}</h2>\n      <p>{{item.brand}}</p>\n      <button ion-button clear item-end> ${{item.price}}</button>\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/home/rodrigo/tutorialIonic/mascotApp/github/mascotApp/src/pages/favorites/favorites.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_product_product__["a" /* ProductProvider */]])
    ], FavoritesPage);
    return FavoritesPage;
}());

//# sourceMappingURL=favorites.js.map

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__tabs_tabs__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_auth_auth__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




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
            .then(function (success) {
            if (success) {
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_0__tabs_tabs__["a" /* TabsPage */]);
            }
            else {
                var alert = _this.alertCtrl.create({
                    title: 'Ingreso fallido!',
                    message: 'Por favor verifica tu usuario o contraseña',
                    buttons: ['OK']
                });
                alert.present();
            }
        });
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/home/rodrigo/tutorialIonic/mascotApp/github/mascotApp/src/pages/login/login.html"*/'<ion-content padding>\n  <div class="content"></div>\n    <ion-list>\n      <ion-item no-lines class="top">\n          <ion-col>\n            <ion-icon float-right name="close" color="primary" style="font-size: 1.5em;"></ion-icon>\n          </ion-col>\n        <ion-row style="text-align: center;">\n          <ion-col>\n            <img class="imgLogo" src="../../assets/imgs/elementos/logo/logo-corto.png">\n          </ion-col>\n        </ion-row>\n      </ion-item>\n      <ion-item class="email">\n        <ion-label floating>Email</ion-label>\n        <ion-input type="text" [(ngModel)]="user.name"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label floating>Password</ion-label>\n        <ion-input type="password" [(ngModel)]="user.pw"></ion-input>\n      </ion-item>\n      <ion-item no-lines style="text-align: center !important;">\n        <button ion-button (click)="loginUser()" color="royal">Entrar</button>\n      </ion-item>\n      <ion-item class="botton">\n        <ion-row>\n          <ion-col style="text-align: center;">\n            <p>Olvidaste tu contraseña?</p>\n          </ion-col>\n        </ion-row>  \n      </ion-item>\n    </ion-list>\n</ion-content>\n'/*ion-inline-end:"/home/rodrigo/tutorialIonic/mascotApp/github/mascotApp/src/pages/login/login.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["g" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["h" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["h" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__providers_auth_auth__["a" /* AuthProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__providers_auth_auth__["a" /* AuthProvider */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* AlertController */]) === "function" && _d || Object])
    ], LoginPage);
    return LoginPage;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
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
            selector: 'page-mas',template:/*ion-inline-start:"/home/rodrigo/tutorialIonic/mascotApp/github/mascotApp/src/pages/mas/mas.html"*/'<ion-header>\n    <ion-navbar style="max-height: 56px !important;" color="royal" >\n      <ion-title>\n        Mas\n      </ion-title>\n      <ion-buttons end>\n        <button ion-button icon-only>\n          <ion-icon name="search"></ion-icon>\n        </button>\n      </ion-buttons>\n    </ion-navbar>\n  </ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/home/rodrigo/tutorialIonic/mascotApp/github/mascotApp/src/pages/mas/mas.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], MasPage);
    return MasPage;
}());

//# sourceMappingURL=mas.js.map

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PendientesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__interna_product_interna_product__ = __webpack_require__(33);
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
    function PendientesPage(navCtrl, navParams, storage) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        if (this.storage.get("pending-list")) {
            storage.get('pending-list').then(function (val) {
                _this.listProducts = val;
            });
        }
    }
    PendientesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PendingCart');
    };
    PendientesPage.prototype.goToProduct = function (product) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__interna_product_interna_product__["a" /* InternaProductPage */], product);
    };
    PendientesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-pendientes',template:/*ion-inline-start:"/home/rodrigo/tutorialIonic/mascotApp/github/mascotApp/src/pages/pendientes/pendientes.html"*/'<ion-header>\n    <ion-navbar style="max-height: 56px !important;" color="royal" >\n      <ion-title>\n        Pendientes\n      </ion-title>\n      <ion-buttons end>\n        <button ion-button icon-only>\n          <ion-icon name="search"></ion-icon>\n        </button>\n      </ion-buttons>\n    </ion-navbar>\n  </ion-header>\n\n<ion-content>\n    <ion-card>\n        <ion-list no-lines *ngIf="listProducts">\n           <div *ngFor="let item of listProducts">\n             <ion-row>\n              <ion-col>\n                <ion-item-sliding>\n                  <ion-item (click)="toggleItem(item)" class="row-completed">\n                    <ion-thumbnail item-left>\n                        <img src="{{item.imageSrc}}">\n                    </ion-thumbnail>\n                    <h5>\n                      {{item.name}}\n                    </h5>\n                    <p>{{item.brand}}</p>\n                    <ion-icon name="trash" item-right></ion-icon>\n                  </ion-item>\n                </ion-item-sliding>\n              </ion-col> \n             </ion-row>\n            </div>\n          </ion-list>\n        </ion-card>\n</ion-content>\n'/*ion-inline-end:"/home/rodrigo/tutorialIonic/mascotApp/github/mascotApp/src/pages/pendientes/pendientes.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
    ], PendientesPage);
    return PendientesPage;
}());

//# sourceMappingURL=pendientes.js.map

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShopCartPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__interna_product_interna_product__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(47);
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
    function ShopCartPage(navCtrl, navParams, storage) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        if (this.storage.get("product-list")) {
            storage.get('product-list').then(function (val) {
                _this.listProducts = val;
            });
        }
    }
    ShopCartPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ShopCartPage');
    };
    ShopCartPage.prototype.goToProduct = function (product) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__interna_product_interna_product__["a" /* InternaProductPage */], product);
    };
    ShopCartPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-shop-cart',template:/*ion-inline-start:"/home/rodrigo/tutorialIonic/mascotApp/github/mascotApp/src/pages/shop-cart/shop-cart.html"*/'<ion-header>\n    <ion-navbar style="max-height: 56px !important;" color="royal" >\n      <ion-title>\n        Shop-Cart\n      </ion-title>\n      <ion-buttons end>\n        <button ion-button icon-only>\n          <ion-icon name="search"></ion-icon>\n        </button>\n      </ion-buttons>\n    </ion-navbar>\n  </ion-header>\n\n\n<ion-content>\n  <ion-card>\n      <ion-list no-lines *ngIf="listProducts">\n         <div *ngFor="let item of listProducts">\n           <ion-row>\n            <ion-col>\n              <ion-item-sliding>\n                <ion-item (click)="toggleItem(item)" class="row-completed">\n                  <ion-thumbnail item-left>\n                      <img src="{{item.imageSrc}}">\n                  </ion-thumbnail>\n                  <h5>\n                    {{item.name}}\n                  </h5>\n                  <p>{{item.brand}}</p>\n                  <ion-icon name="trash" item-right></ion-icon>\n                </ion-item>\n              </ion-item-sliding>\n            </ion-col> \n           </ion-row>\n           <ion-row class="align-items-flex-end">\n             <ion-col></ion-col>\n             <ion-col>\n               <ion-item>\n                 <h2 class="royal">$ {{item.price}}</h2>\n               </ion-item>\n             </ion-col>\n             <ion-col>\n                <ion-item>\n                    <ion-label>Cantidad: x</ion-label>\n                    <ion-select>\n                      <ion-option>1</ion-option>\n                      <ion-option>2</ion-option>\n                      <ion-option>3</ion-option>\n                      <ion-option>4</ion-option>\n                      <ion-option>5</ion-option>                      \n                    </ion-select>\n                  </ion-item>\n             </ion-col>\n           </ion-row>\n            <div style="height:1px;width:100%;background-color:#DDDDDD"></div>\n          </div>\n      \n        </ion-list>\n\n  </ion-card>\n  <ion-card>\n      <ion-row>\n        <ion-col>\n          <ion-icon style="font-size: 2em" float-left name="card"></ion-icon>\n          <p style="text-align: center;" float-right>ADICIONAR UN CUPON O VALE</p>\n        </ion-col>\n      </ion-row>\n    </ion-card>\n    <ion-card>\n        <ion-row>\n          <ion-col>\n            <ion-icon style="font-size: 2em" float-left name="calculator"></ion-icon>\n            <p style="text-align: center;" float-right>CALCULAR ENVIO</p>\n          </ion-col>\n        </ion-row>\n      </ion-card>\n  \n  <ion-card>\n    <ion-list no-lines *ngIf="listProducts">\n      <div *ngFor="let item of listProducts">\n        <ion-card-header>\n          Resumen del Pedido:\n        </ion-card-header>\n        <ion-card-content>\n          <ion-row>\n            <ion-col>\n              <p float-left>{{item.name}}</p>\n            </ion-col>\n            <ion-col>\n              <div float-right>$ {{item.price}}</div>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col>\n              <p float-left>Envio</p>\n            </ion-col>\n            <ion-col>\n              <div float-right>a Calcular</div>\n            </ion-col>\n          </ion-row>\n          <ion-row class="lineaTotal"></ion-row>\n          <ion-row>\n              <ion-col>\n                <h2 float-left>Total</h2>\n              </ion-col>\n              <ion-col>\n                <h2 float-right>$ {{item.price}}</h2>\n              </ion-col>\n            </ion-row>\n        </ion-card-content>\n      </div>\n    </ion-list>\n  </ion-card>\n\n  <!-- <ion-list>\n      <ion-item *ngFor="let item of listProducts" (click)="goToProduct(item)">\n        <ion-card>\n          <ion-item>\n            <ion-row>\n              <ion-col>\n                <ion-thumbnail item-start>\n                  <img src="{{item.imageSrc}}">\n                </ion-thumbnail>\n              </ion-col>\n              <ion-col>\n                <ion-card-header>\n                  <div>{{item.name}}</div>\n                </ion-card-header>\n              </ion-col>\n              <ion-col>\n                <ion-icon float-right name="trash"></ion-icon>\n              </ion-col>\n            </ion-row>\n          </ion-item>\n        </ion-card>\n      </ion-item>\n      <ion-item-options side="left">\n        <button ion-button color="danger">\n          <ion-icon name="text"></ion-icon>\n          Borrar\n        </button>\n      </ion-item-options>\n  </ion-list> -->\n</ion-content>\n<ion-footer>\n    <ion-toolbar>\n        <button ion-button full color="button">COMRPAR</button>\n      </ion-toolbar>\n</ion-footer>'/*ion-inline-end:"/home/rodrigo/tutorialIonic/mascotApp/github/mascotApp/src/pages/shop-cart/shop-cart.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */]])
    ], ShopCartPage);
    return ShopCartPage;
}());

//# sourceMappingURL=shop-cart.js.map

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(105);
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
            selector: 'page-modal',template:/*ion-inline-start:"/home/rodrigo/tutorialIonic/mascotApp/github/mascotApp/src/pages/modal/modal.html"*/'<ion-content text-center class="vertical-align-content">\n    <ion-grid>  \n        <ion-row>\n            <ion-col>\n                <img class="img1" src="../../assets/imgs/elementos/logo/logo-blanco.png" alt="">\n            </ion-col>\n        </ion-row>\n        <ion-row>\n        </ion-row>\n        <ion-row>\n            <ion-col>\n                <img class="img2" (click)="presentModal()" src="../../assets/imgs/elementos/logo/logo-corto.png" alt="">\n            </ion-col>\n        </ion-row>\n        <ion-row center>\n            <ion-col>\n                <img class="img3" (click)="presentModal()" src="../../assets/imgs/flecha.png" alt="">\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n</ion-content>'/*ion-inline-end:"/home/rodrigo/tutorialIonic/mascotApp/github/mascotApp/src/pages/modal/modal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */]])
    ], ModalPage);
    return ModalPage;
}());

//# sourceMappingURL=modal.js.map

/***/ }),

/***/ 120:
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
webpackEmptyAsyncContext.id = 120;

/***/ }),

/***/ 161:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/favorites/favorites.module": [
		296,
		6
	],
	"../pages/interna-product/interna-product.module": [
		297,
		5
	],
	"../pages/login/login.module": [
		298,
		4
	],
	"../pages/mas/mas.module": [
		299,
		3
	],
	"../pages/modal/modal.module": [
		300,
		2
	],
	"../pages/pendientes/pendientes.module": [
		301,
		1
	],
	"../pages/shop-cart/shop-cart.module": [
		302,
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
webpackAsyncContext.id = 161;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 163:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_home__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mas_mas__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pendientes_pendientes__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__favorites_favorites__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shop_cart_shop_cart__ = __webpack_require__(108);
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
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_1__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_4__favorites_favorites__["a" /* FavoritesPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_5__shop_cart_shop_cart__["a" /* ShopCartPage */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_3__pendientes_pendientes__["a" /* PendientesPage */];
        this.tab5Root = __WEBPACK_IMPORTED_MODULE_2__mas_mas__["a" /* MasPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/rodrigo/tutorialIonic/mascotApp/github/mascotApp/src/pages/tabs/tabs.html"*/'<ion-tabs>\n  <ion-tab [root]="tab1Root" tabTitle="Home" tabIcon="mascotapp-home"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="Favoritos" tabIcon="mascotapp-favoritos"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Carrito" tabIcon="mascotapp-carrito"></ion-tab>\n  <ion-tab [root]="tab4Root" tabTitle="Pendientes" tabIcon="mascotapp-pendientes"></ion-tab>\n  <ion-tab [root]="tab5Root" tabTitle="Mas" tabIcon="mascotapp-mas"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/home/rodrigo/tutorialIonic/mascotApp/github/mascotApp/src/pages/tabs/tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 164:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_marcas_mok__ = __webpack_require__(265);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__interna_product_interna_product__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__data_slides_mok__ = __webpack_require__(266);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_product_product__ = __webpack_require__(81);
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




var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, productProvider) {
        this.navCtrl = navCtrl;
        this.productProvider = productProvider;
        this.images = __WEBPACK_IMPORTED_MODULE_4__data_slides_mok__["a" /* SLIDES */];
        this.marcas = __WEBPACK_IMPORTED_MODULE_2__data_marcas_mok__["a" /* MARCAS */];
        this.getProducts();
    }
    HomePage.prototype.goToInterna = function (product) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__interna_product_interna_product__["a" /* InternaProductPage */], product);
    };
    HomePage.prototype.next = function () {
        this.slides.slideNext();
    };
    HomePage.prototype.prev = function () {
        this.slides.slidePrev();
    };
    HomePage.prototype.getProducts = function () {
        var _this = this;
        this.productProvider.getProducts().subscribe(function (products) { console.log('a', products['data']), _this.products = products['data']; });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('slides'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Slides */])
    ], HomePage.prototype, "slides", void 0);
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/home/rodrigo/tutorialIonic/mascotApp/github/mascotApp/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar color="royal" >\n      <ion-col>\n        <ion-buttons float-left>\n          <button ion-button icon-only>\n            <ion-icon name="menu"></ion-icon>\n          </button>\n        </ion-buttons>\n        <img float-rigth height="35px" src="../../assets/imgs/elementos/logo/logo-blanco.png">\n      </ion-col>\n        <ion-buttons end>\n          <button ion-button icon-only>\n            <ion-icon name="search"></ion-icon>\n          </button>\n        </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-fab style="right: 50px !important;" class="cc" right middle>\n    <ion-badge class="comprar" ion-fab fab-fixed color="button">\n      Comprar\n    </ion-badge>\n    <ion-fab-list>\n        <button ion-fab><ion-icon name="mascotapp-carrito"></ion-icon></button>\n        <button ion-fab><ion-icon name="mascotapp-favoritos"></ion-icon></button>\n        <button ion-fab><ion-icon name="mascotapp-home"></ion-icon></button>\n        <button ion-fab><ion-icon name="mascotapp-pendientes"></ion-icon></button>\n      </ion-fab-list>\n  </ion-fab>\n  <ion-slides style="height: 215px !important;" *ngIf="images"  autoplay="5000" loop="true" speed="500" class="slides" pager="true">\n    <ion-slide class="slideBanner" *ngFor="let image of images">\n      <img class="banner" src="{{image.img}}" alt="Product Image">\n    </ion-slide>\n    </ion-slides>\n   <!--  <ion-fab right bottom>\n      <button ion-fab color="add"><ion-icon name="add"></ion-icon></button>\n    </ion-fab> -->\n    <ion-item>\n     <!-- <ion-badge color="secondary"></ion-badge> -->\n     <ion-grid text-center>\n       <ion-row wrap>\n           <ion-badge class="apply" color="light">\n           <ion-col>\n             <div float-left style="width: 105px; text-align: center; padding-top: 18px;">\n               <h3>GANE 10% OFF</h3>\n               <p>En tu primer compra</p>\n             </div>\n           </ion-col>\n           <ion-col>\n             <button style="height: 35px;" ion-button float-right color="royal">Aplicar Cupón</button>\n           </ion-col>\n          </ion-badge>\n         </ion-row>\n      </ion-grid>\n    </ion-item>\n    <ion-slides style="height: 230px !important;" *ngIf="products" loop="true" slidesPerView="2.5">\n      <ion-slide *ngFor="let product of products">\n        <ion-card class="cardProduct" (click)="goToInterna(product)">\n          <img class="imgProduct" src="{{product.imageSrc}}" alt="Product Image">\n          <ion-card-title>\n              <p>Ranking</p>\n          </ion-card-title>\n          <p>\n             $ {{product.price}}\n          </p>\n          <p>\n            <button ion-button class="buyProduct" color="royal">COMPRAR</button>\n          </p>\n        </ion-card>\n      </ion-slide>\n    </ion-slides>\n    <ion-card>\n      <ion-card-header style="text-align: center; padding-bottom: 0px;">\n        <ion-col>\n          <ion-icon float-left name="arrow-back" class="btnPrev" (click)="prev()"></ion-icon>\n        </ion-col>\n        <ion-col>\n          Nuestras Marcas\n        </ion-col>\n        <ion-col>\n            <ion-icon float-right name="arrow-forward" class="btnPrev" (click)="next()"></ion-icon>\n        </ion-col>\n      </ion-card-header>\n      <ion-card-content class="marcasContent">\n        <div class="marcasContent">\n          <ion-slides #slides *ngIf="marcas" loop="true" slidesPerView="2">\n            <ion-slide *ngFor="let marca of marcas">\n              <img src="{{marca.img}}" alt="Sponsor Image">\n            </ion-slide>\n          </ion-slides>\n        </div>\n      </ion-card-content>\n    </ion-card>\n    <ion-card class="cards-list-demo">\n      <ion-card-header>\n        OPORTUNIDADES ESPECIALES\n      </ion-card-header>\n      <ion-slides style="height: 230px !important;" *ngIf="products" loop="true" slidesPerView="2.5">\n        <ion-slide *ngFor="let product of products">\n          <ion-card class="cardProduct" (click)="goToInterna(product)">\n            <img class="imgProduct" src="{{product.imageSrc}}" alt="Product Image">\n            <ion-card-title>\n                <p>Ranking</p>\n            </ion-card-title>\n            <p>\n               $ {{product.price}}\n            </p>\n            <p>\n              <button ion-button class="buyProduct" color="royal">COMPRAR</button>\n            </p>\n            </ion-card>\n          </ion-slide>\n      </ion-slides>\n    </ion-card>\n</ion-content>\n'/*ion-inline-end:"/home/rodrigo/tutorialIonic/mascotApp/github/mascotApp/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_5__providers_product_product__["a" /* ProductProvider */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 165:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthProvider; });
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
//import { HttpClient } from '@angular/common/http';

var AuthProvider = /** @class */ (function () {
    function AuthProvider() {
        console.log('Hello AuthProvider Provider');
    }
    AuthProvider.prototype.login = function (name, pw) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (name === 'user' && pw === 'user') {
                _this.currentUser = {
                    name: name,
                    role: 0
                };
                resolve(true);
            }
            else {
                resolve(false);
            }
        });
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
        __metadata("design:paramtypes", [])
    ], AuthProvider);
    return AuthProvider;
}());

//# sourceMappingURL=auth.js.map

/***/ }),

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(230);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 230:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_about_about__ = __webpack_require__(292);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_contact_contact__ = __webpack_require__(293);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_login_login__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_home_home__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_mas_mas__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_pendientes_pendientes__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_tabs_tabs__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_interna_product_interna_product__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_accordion_accordion__ = __webpack_require__(294);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_modal_modal__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_status_bar__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_splash_screen__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__providers_auth_auth__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_favorites_favorites__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_shop_cart_shop_cart__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__providers_product_product__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__angular_http__ = __webpack_require__(295);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__angular_common_http__ = __webpack_require__(162);
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
                __WEBPACK_IMPORTED_MODULE_6__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_pendientes_pendientes__["a" /* PendientesPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_mas_mas__["a" /* MasPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_interna_product_interna_product__["a" /* InternaProductPage */],
                __WEBPACK_IMPORTED_MODULE_13__components_accordion_accordion__["a" /* AccordionComponent */],
                __WEBPACK_IMPORTED_MODULE_14__pages_modal_modal__["a" /* ModalPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_favorites_favorites__["a" /* FavoritesPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_shop_cart_shop_cart__["a" /* ShopCartPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/favorites/favorites.module#FavoritesPageModule', name: 'FavoritesPage', segment: 'favorites', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/interna-product/interna-product.module#InternaProductPageModule', name: 'InternaProductPage', segment: 'interna-product', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/mas/mas.module#MasPageModule', name: 'MasPage', segment: 'mas', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/modal/modal.module#ModalPageModule', name: 'ModalPage', segment: 'modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/pendientes/pendientes.module#PendientesPageModule', name: 'PendientesPage', segment: 'pendientes', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/shop-cart/shop-cart.module#ShopCartPageModule', name: 'ShopCartPage', segment: 'shop-cart', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_21__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_22__angular_common_http__["b" /* HttpClientModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_pendientes_pendientes__["a" /* PendientesPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_mas_mas__["a" /* MasPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_interna_product_interna_product__["a" /* InternaProductPage */],
                __WEBPACK_IMPORTED_MODULE_13__components_accordion_accordion__["a" /* AccordionComponent */],
                __WEBPACK_IMPORTED_MODULE_14__pages_modal_modal__["a" /* ModalPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_favorites_favorites__["a" /* FavoritesPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_shop_cart_shop_cart__["a" /* ShopCartPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_15__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_16__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_17__providers_auth_auth__["a" /* AuthProvider */],
                __WEBPACK_IMPORTED_MODULE_20__providers_product_product__["a" /* ProductProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 265:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MARCAS; });
var MARCAS = [
    {
        img: '../assets/imgs/elementos/marcas/brand-logo1_light.png',
    },
    {
        img: '../assets/imgs/elementos/marcas/brand-logo2_light.png',
    },
    {
        img: '../assets/imgs/elementos/marcas/brand-logo3_light.png',
    },
    {
        img: '../assets/imgs/elementos/marcas/brand-logo4_light.png',
    },
    {
        img: '../assets/imgs/elementos/marcas/brand-logo5_light.png',
    },
    {
        img: '../assets/imgs/elementos/marcas/brand-logo6_light.png'
    }
];
//# sourceMappingURL=marcas-mok.js.map

/***/ }),

/***/ 266:
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

/***/ 284:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_modal_modal__ = __webpack_require__(109);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





//import { LoginPage } from './../pages/login/login';
//import { TabsPage } from '../pages/tabs/tabs';
var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_modal_modal__["a" /* ModalPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/rodrigo/tutorialIonic/mascotApp/github/mascotApp/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/home/rodrigo/tutorialIonic/mascotApp/github/mascotApp/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 292:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
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
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"/home/rodrigo/tutorialIonic/mascotApp/github/mascotApp/src/pages/about/about.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      About\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/home/rodrigo/tutorialIonic/mascotApp/github/mascotApp/src/pages/about/about.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 293:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContactPage = /** @class */ (function () {
    function ContactPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ContactPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contact',template:/*ion-inline-start:"/home/rodrigo/tutorialIonic/mascotApp/github/mascotApp/src/pages/contact/contact.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Contact\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-list-header>Follow us on Twitter</ion-list-header>\n    <ion-item>\n      <ion-icon name="ionic" item-start></ion-icon>\n      @ionicframework\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/home/rodrigo/tutorialIonic/mascotApp/github/mascotApp/src/pages/contact/contact.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
    ], ContactPage);
    return ContactPage;
}());

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 294:
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
            selector: 'accordion',template:/*ion-inline-start:"/home/rodrigo/tutorialIonic/mascotApp/github/mascotApp/src/components/accordion/accordion.html"*/'<ion-card>\n  <ion-card-header (click)="toggleAccordion()">\n    Especificaciones\n  </ion-card-header>\n  <ion-card-content #cc>\n    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum \n    has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer \n    took a galley of type and scrambled it to make a type specimen book. It has survived not only \n    five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. \n    It was popularised in the 1960s with the release of Letraset sheets containing \n    Lorem Ipsum passages, and more recently with desktop publishing software like Aldus \n    PageMaker including versions of Lorem Ipsum. \n  </ion-card-content>\n</ion-card>\n<!-- <ion-card>\n  <ion-card-header (click)="toggleAccordion()">\n    Resumen\n  </ion-card-header>\n  <ion-card-content #cc>\n    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum \n    has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer \n    took a galley of type and scrambled it to make a type specimen book. It has survived not only \n    five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. \n    It was popularised in the 1960s with the release of Letraset sheets containing \n    Lorem Ipsum passages, and more recently with desktop publishing software like Aldus \n    PageMaker including versions of Lorem Ipsum. \n  </ion-card-content>\n</ion-card>\n<ion-card>\n  <ion-card-header (click)="toggleAccordion()">\n    Detalles\n  </ion-card-header>\n  <ion-card-content #cc>\n    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum \n    has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer \n    took a galley of type and scrambled it to make a type specimen book. It has survived not only \n    five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. \n    It was popularised in the 1960s with the release of Letraset sheets containing \n    Lorem Ipsum passages, and more recently with desktop publishing software like Aldus \n    PageMaker including versions of Lorem Ipsum. \n  </ion-card-content>\n</ion-card>\n<ion-card>\n  <ion-card-header (click)="toggleAccordion()">\n    Consejos\n  </ion-card-header>\n  <ion-card-content #cc>\n    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum \n    has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer \n    took a galley of type and scrambled it to make a type specimen book. It has survived not only \n    five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. \n    It was popularised in the 1960s with the release of Letraset sheets containing \n    Lorem Ipsum passages, and more recently with desktop publishing software like Aldus \n    PageMaker including versions of Lorem Ipsum. \n  </ion-card-content>\n</ion-card> -->'/*ion-inline-end:"/home/rodrigo/tutorialIonic/mascotApp/github/mascotApp/src/components/accordion/accordion.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* Renderer */]])
    ], AccordionComponent);
    return AccordionComponent;
}());

//# sourceMappingURL=accordion.js.map

/***/ }),

/***/ 33:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InternaProductPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(47);
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
    function InternaProductPage(navCtrl, navParams, alertCtrl, storage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.storage = storage;
        this.detailProduct = this.navParams.data;
    }
    InternaProductPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad InternaProductPage');
    };
    InternaProductPage.prototype.addProduct_cart = function () {
        var alert = this.alertCtrl.create({
            title: 'New Product Add!',
            subTitle: 'Producto agregado al carrito de compras!',
            buttons: ['OK']
        });
        alert.present();
    };
    InternaProductPage.prototype.goToComprar = function (product) {
        var _this = this;
        this.addProduct_cart();
        //agregar a la lista del carrito
        console.log("add product");
        this.listProducts = [];
        if (this.storage.get("product-list")) {
            this.storage.get('product-list').then(function (val) {
                _this.listProducts = val;
            });
        }
        this.listProducts.push(product);
        this.storage.set("product-list", this.listProducts);
    };
    InternaProductPage.prototype.goToPending = function (product) {
        var _this = this;
        //agregar a la lista del carrito
        console.log("add pending");
        this.listPendings = [];
        if (this.storage.get("pending-list")) {
            this.storage.get('pending-list').then(function (val) {
                _this.listPendings = val;
            });
        }
        this.listPendings.push(product);
        this.storage.set("pending-list", this.listPendings);
    };
    InternaProductPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-interna-product',template:/*ion-inline-start:"/home/rodrigo/tutorialIonic/mascotApp/github/mascotApp/src/pages/interna-product/interna-product.html"*/'<ion-header>\n\n  <ion-navbar color="royal">\n    <ion-title>Detalles</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only>\n        <ion-icon name="share"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-buttons end>\n      <button ion-button icon-only>\n        <ion-icon name="search"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <ion-item>\n    <!-- <ion-badge color="secondary"></ion-badge> -->\n    <ion-grid text-center>\n        <ion-row wrap>\n            <ion-badge color="light">\n            <ion-col>\n              <div float-left style="width: 110px; text-align: center; padding-top: 15px;">\n                <h3>Gane 10% OFF</h3>\n                <p>En tu primer compra</p>\n              </div>\n            </ion-col>\n            <ion-col>\n              <button ion-button float-right color="royal">Apply Cupon</button>\n            </ion-col>\n           </ion-badge>\n        <ion-col>\n          <h2>{{detailProduct.name}}</h2> - <h2>{{detailProduct.brand}}</h2>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <img src="{{detailProduct.imageSrc}}" alt="Image Product">\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <ion-icon float-left name="expand"></ion-icon>\n        </ion-col>\n        <ion-col>\n          <ion-icon float-right name="heart"></ion-icon>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-badge color="light">\n          <ion-col>\n            <h2 class="price">$ {{detailProduct.price}}</h2>\n          </ion-col>\n        </ion-badge>\n      </ion-row>\n    </ion-grid>\n  </ion-item>\n  <ion-item>\n    <ion-label>Cantidad</ion-label>\n    <ion-select [(ngModel)]="toppings" okText="Okay" cancelText="Dismiss">\n      <ion-option>\n        <ion-row>\n          <ion-col>\n            <div float-left>7 Unidades</div>\n          </ion-col>\n          <ion-col>\n            <div float-right>$400</div>\n          </ion-col>\n        </ion-row>\n      </ion-option>\n      <ion-option>\n        <ion-row>\n          <ion-col>\n            <div float-left>14 Unidades</div>\n          </ion-col>\n          <ion-col>\n            <div float-right>$900</div>\n          </ion-col>\n        </ion-row>\n      </ion-option>\n      <ion-option>\n          <ion-row>\n              <ion-col>\n                <div float-left>21 Unidades</div>\n              </ion-col>\n              <ion-col>\n                <div float-right>$1200</div>\n              </ion-col>\n            </ion-row>\n      </ion-option>\n      <ion-option>\n          <ion-row>\n              <ion-col>\n                <div float-left>28 Unidades</div>\n              </ion-col>\n              <ion-col>\n                <div float-right>$2500</div>\n              </ion-col>\n            </ion-row>\n      </ion-option>\n    </ion-select>\n  </ion-item>\n  <ion-list>\n    <accordion></accordion>\n    <accordion></accordion>\n    <accordion></accordion>    \n  </ion-list>\n</ion-content>\n<ion-footer>\n    <ion-toolbar>\n      <ion-buttons left>\n        <button ion-button solid small color="primary" (click)="goToPending(detailProduct)">\n            <ion-col>\n              <ion-icon float-left name="mascotapp-pendientes"></ion-icon>\n            </ion-col>\n            <ion-col>\n              <div float-right style="font-size: 1rem;">Agregar a Pendientes</div>\n            </ion-col>\n        </button>\n      </ion-buttons>\n      <ion-buttons right>\n        <button ion-button solid small color="button" (click)="goToComprar(detailProduct)">\n            <ion-col>\n                <ion-icon float-left name="mascotapp-carrito"></ion-icon>\n              </ion-col>\n              <ion-col>\n                <div float-right style="font-size: 1rem;" >Agregar al carrito</div>\n              </ion-col>\n        </button>\n      </ion-buttons>\n  \n    </ion-toolbar>\n  </ion-footer>'/*ion-inline-end:"/home/rodrigo/tutorialIonic/mascotApp/github/mascotApp/src/pages/interna-product/interna-product.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
    ], InternaProductPage);
    return InternaProductPage;
}());

//# sourceMappingURL=interna-product.js.map

/***/ }),

/***/ 81:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(260);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators_tap__ = __webpack_require__(261);
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
    ProductProvider.prototype.getProducts = function () {
        /*  this.http.get("http://ctrlztest.com.ar/mascotasya/apirest/product-all.php")
                         .map(this.extractData); */
        return this.http.get("http://ctrlztest.com.ar/mascotasya/apirest/product-all.php")
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators_tap__["tap"])(function (response) { return response["data"]; }));
    };
    ProductProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], ProductProvider);
    return ProductProvider;
}());

//# sourceMappingURL=product.js.map

/***/ })

},[209]);
//# sourceMappingURL=main.js.map