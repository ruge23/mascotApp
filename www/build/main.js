webpackJsonp([5],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__tabs_tabs__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_auth_auth__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(15);
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
            name: 'user',
            pw: 'user'
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
                var alert_1 = _this.alertCtrl.create({
                    title: 'Login Failed',
                    message: 'Please check your credentials',
                    buttons: ['OK']
                });
                alert_1.present();
            }
        });
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/home/rodrigo/tutorialIonic/mascotApp/mascotApp/src/pages/login/login.html"*/'<ion-content padding>\n  <ion-list class="vertical-align-content">\n    <ion-item class="top">\n      <img src="../../assets/imgs/elementos/logo/logo-corto.png">\n    </ion-item>\n    <ion-item>\n      <ion-label fixed>Username</ion-label>\n      <ion-input type="text" [(ngModel)]="user.name"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label fixed>Password</ion-label>\n      <ion-input type="password" [(ngModel)]="user.pw"></ion-input>\n    </ion-item>\n    <ion-item class="botton" style="align-items: center !important;">\n      <button ion-button full (click)="loginUser()" color="royal">Entrar</button>\n    </ion-item>  \n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/home/rodrigo/tutorialIonic/mascotApp/mascotApp/src/pages/login/login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* AlertController */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
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
            selector: 'page-mas',template:/*ion-inline-start:"/home/rodrigo/tutorialIonic/mascotApp/mascotApp/src/pages/mas/mas.html"*/'<!--\n  Generated template for the MasPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>mas</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/home/rodrigo/tutorialIonic/mascotApp/mascotApp/src/pages/mas/mas.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], MasPage);
    return MasPage;
}());

//# sourceMappingURL=mas.js.map

/***/ }),

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PendientesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
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
 * Generated class for the PendientesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PendientesPage = /** @class */ (function () {
    function PendientesPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    PendientesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PendientesPage');
    };
    PendientesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-pendientes',template:/*ion-inline-start:"/home/rodrigo/tutorialIonic/mascotApp/mascotApp/src/pages/pendientes/pendientes.html"*/'<!--\n  Generated template for the PendientesPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>pendientes</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/home/rodrigo/tutorialIonic/mascotApp/mascotApp/src/pages/pendientes/pendientes.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], PendientesPage);
    return PendientesPage;
}());

//# sourceMappingURL=pendientes.js.map

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(100);
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
            selector: 'page-modal',template:/*ion-inline-start:"/home/rodrigo/tutorialIonic/mascotApp/mascotApp/src/pages/modal/modal.html"*/'<ion-content text-center class="vertical-align-content">\n    <ion-grid>\n        <ion-row>\n            <ion-col>\n                <img src="../../assets/imgs/elementos/logo/logo-blanco.png" alt="">\n            </ion-col>\n        </ion-row>\n        <ion-row>\n            <ion-col>\n                <img (click)="presentModal()" src="../../assets/imgs/elementos/logo/logo-corto.png" alt="">\n            </ion-col>\n        </ion-row>\n        <ion-row center>\n            <ion-col>\n                <img (click)="presentModal()" src="../../assets/imgs/flecha.png" alt="">\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n</ion-content>'/*ion-inline-end:"/home/rodrigo/tutorialIonic/mascotApp/mascotApp/src/pages/modal/modal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */]])
    ], ModalPage);
    return ModalPage;
}());

//# sourceMappingURL=modal.js.map

/***/ }),

/***/ 113:
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
webpackEmptyAsyncContext.id = 113;

/***/ }),

/***/ 154:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/interna-product/interna-product.module": [
		281,
		4
	],
	"../pages/login/login.module": [
		282,
		3
	],
	"../pages/mas/mas.module": [
		283,
		2
	],
	"../pages/modal/modal.module": [
		284,
		1
	],
	"../pages/pendientes/pendientes.module": [
		285,
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
webpackAsyncContext.id = 154;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 155:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__about_about__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact_contact__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__mas_mas__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pendientes_pendientes__ = __webpack_require__(102);
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
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_1__about_about__["a" /* AboutPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_2__contact_contact__["a" /* ContactPage */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_5__pendientes_pendientes__["a" /* PendientesPage */];
        this.tab5Root = __WEBPACK_IMPORTED_MODULE_4__mas_mas__["a" /* MasPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/rodrigo/tutorialIonic/mascotApp/mascotApp/src/pages/tabs/tabs.html"*/'<ion-tabs>\n  <ion-tab [root]="tab1Root" tabTitle="Home" tabIcon="mascotapp-home"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="Favoritos" tabIcon="mascotapp-favoritos"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Carrito" tabIcon="mascotapp-carrito"></ion-tab>\n  <ion-tab [root]="tab4Root" tabTitle="Pendientes" tabIcon="mascotapp-pendientes"></ion-tab>\n  <ion-tab [root]="tab5Root" tabTitle="Mas" tabIcon="mascotapp-mas"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/home/rodrigo/tutorialIonic/mascotApp/mascotApp/src/pages/tabs/tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 156:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
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
            selector: 'page-about',template:/*ion-inline-start:"/home/rodrigo/tutorialIonic/mascotApp/mascotApp/src/pages/about/about.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      About\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/home/rodrigo/tutorialIonic/mascotApp/mascotApp/src/pages/about/about.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 157:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
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
            selector: 'page-contact',template:/*ion-inline-start:"/home/rodrigo/tutorialIonic/mascotApp/mascotApp/src/pages/contact/contact.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Contact\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-list-header>Follow us on Twitter</ion-list-header>\n    <ion-item>\n      <ion-icon name="ionic" item-start></ion-icon>\n      @ionicframework\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/home/rodrigo/tutorialIonic/mascotApp/mascotApp/src/pages/contact/contact.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
    ], ContactPage);
    return ContactPage;
}());

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_product_mok__ = __webpack_require__(252);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__data_marcas_mok__ = __webpack_require__(253);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__interna_product_interna_product__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__data_slides_mok__ = __webpack_require__(254);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var HomePage = /** @class */ (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
        this.images = __WEBPACK_IMPORTED_MODULE_5__data_slides_mok__["a" /* SLIDES */];
        this.products = __WEBPACK_IMPORTED_MODULE_2__data_product_mok__["a" /* PRODUCTS */];
        this.marcas = __WEBPACK_IMPORTED_MODULE_3__data_marcas_mok__["a" /* MARCAS */];
    }
    HomePage.prototype.goToInterna = function (product) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__interna_product_interna_product__["a" /* InternaProductPage */], product);
    };
    HomePage.prototype.next = function () {
        this.slides.slideNext();
    };
    HomePage.prototype.prev = function () {
        this.slides.slidePrev();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('slides'),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Slides */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Slides */]) === "function" && _a || Object)
    ], HomePage.prototype, "slides", void 0);
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/home/rodrigo/tutorialIonic/mascotApp/mascotApp/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar style="max-height: 56px !important;" color="royal" >\n    <ion-title>\n      <img src="../../assets/imgs/elementos/logo/logo-blanco.png">\n    </ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only>\n        <ion-icon name="search"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-fab class="cc" right middle>\n    <button class="slidebutton">\n      <ion-badge class="buttonSlide" color="button">Comprar</ion-badge>\n    </button>\n  </ion-fab>\n  <ion-slides style="height: 200px !important;" *ngIf="images"  autoplay="5000" loop="true" speed="500" class="slides" pager="true">\n    <ion-slide class="slideBanner" *ngFor="let image of images">\n      <img class="banner" src="{{image.img}}" alt="Product Image">\n    </ion-slide>\n    </ion-slides>\n    <ion-fab right bottom>\n      <button ion-fab color="add"><ion-icon name="add"></ion-icon></button>\n    </ion-fab>\n    <ion-item>\n     <!-- <ion-badge color="secondary"></ion-badge> -->\n     <ion-grid text-center>\n       <ion-row wrap>\n           <ion-badge class="apply" color="light">\n           <ion-col>\n             <div float-left style="width: 110px; text-align: center; padding-top: 15px;">\n               <h3>Gane 10% OFF</h3>\n               <p>En tu primer compra</p>\n             </div>\n           </ion-col>\n           <ion-col>\n             <button ion-button float-right color="royal">Apply Cupon</button>\n           </ion-col>\n          </ion-badge>\n         </ion-row>\n      </ion-grid>\n    </ion-item>\n    <ion-slides style="height: 230px !important;" *ngIf="products" loop="true" slidesPerView="2.5">\n      <ion-slide *ngFor="let product of products">\n        <ion-card class="cardProduct" (click)="goToInterna(product)">\n          <img class="imgProduct" src="{{product.img}}" alt="Product Image">\n          <ion-card-title>\n              <p>Ranking</p>\n          </ion-card-title>\n          <p>\n             $ {{product.price}}\n          </p>\n          <p>\n            <button ion-button class="buyProduct" color="royal">COMPRAR</button>\n          </p>\n        </ion-card>\n      </ion-slide>\n    </ion-slides>\n    <ion-card>\n      <ion-card-header style="text-align: center; padding-bottom: 0px;">\n        <ion-col>\n          <ion-icon float-left name="arrow-back" class="btnPrev" (click)="prev()"></ion-icon>\n        </ion-col>\n        <ion-col>\n          Nuestras Marcas\n        </ion-col>\n        <ion-col>\n            <ion-icon float-right name="arrow-forward" class="btnPrev" (click)="next()"></ion-icon>\n        </ion-col>\n      </ion-card-header>\n      <ion-card-content class="marcasContent">\n        <div class="marcasContent">\n          <ion-slides #slides *ngIf="marcas" loop="true" slidesPerView="2">\n            <ion-slide *ngFor="let marca of marcas">\n              <img src="{{marca.img}}" alt="Sponsor Image">\n            </ion-slide>\n          </ion-slides>\n        </div>\n      </ion-card-content>\n    </ion-card>\n    <ion-card class="cards-list-demo">\n      <ion-card-header>\n        OPORTUNIDADES ESPECIALES\n      </ion-card-header>\n      <ion-slides style="height: 230px !important;" *ngIf="products" loop="true" slidesPerView="2.5">\n        <ion-slide *ngFor="let product of products">\n          <ion-card class="cardProduct" (click)="goToInterna(product)">\n            <img class="imgProduct" src="{{product.img}}" alt="Product Image">\n              <ion-card-title>\n                Ranking\n              </ion-card-title>\n              <p>\n                {{product.price}}\n              </p>\n              <p>\n                <button class="buyProduct" ion-button color="royal">COMPRAR</button>\n              </p>\n            </ion-card>\n          </ion-slide>\n      </ion-slides>\n    </ion-card>\n</ion-content>\n'/*ion-inline-end:"/home/rodrigo/tutorialIonic/mascotApp/mascotApp/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]) === "function" && _b || Object])
    ], HomePage);
    return HomePage;
    var _a, _b;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 159:
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

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(226);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 226:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_about_about__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_login_login__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_mas_mas__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_pendientes_pendientes__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_tabs_tabs__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_interna_product_interna_product__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_accordion_accordion__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_modal_modal__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_status_bar__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_splash_screen__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__providers_auth_auth__ = __webpack_require__(159);
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
                __WEBPACK_IMPORTED_MODULE_4__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_pendientes_pendientes__["a" /* PendientesPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_mas_mas__["a" /* MasPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_interna_product_interna_product__["a" /* InternaProductPage */],
                __WEBPACK_IMPORTED_MODULE_12__components_accordion_accordion__["a" /* AccordionComponent */],
                __WEBPACK_IMPORTED_MODULE_13__pages_modal_modal__["a" /* ModalPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/interna-product/interna-product.module#InternaProductPageModule', name: 'InternaProductPage', segment: 'interna-product', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/mas/mas.module#MasPageModule', name: 'MasPage', segment: 'mas', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/modal/modal.module#ModalPageModule', name: 'ModalPage', segment: 'modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/pendientes/pendientes.module#PendientesPageModule', name: 'PendientesPage', segment: 'pendientes', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_pendientes_pendientes__["a" /* PendientesPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_mas_mas__["a" /* MasPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_interna_product_interna_product__["a" /* InternaProductPage */],
                __WEBPACK_IMPORTED_MODULE_12__components_accordion_accordion__["a" /* AccordionComponent */],
                __WEBPACK_IMPORTED_MODULE_13__pages_modal_modal__["a" /* ModalPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_14__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_15__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_16__providers_auth_auth__["a" /* AuthProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 252:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PRODUCTS; });
var PRODUCTS = [
    {
        img: '../assets/imgs/elementos/productos/producto1.jpg',
        price: 400,
        name: 'Alimento - Perro Adulto!'
    },
    {
        img: '../assets/imgs/elementos/productos/producto2.jpg',
        price: 400,
        name: 'Alimento - Perro Adulto!'
    },
    {
        img: '../assets/imgs/elementos/productos/producto3.jpg',
        price: 400,
        name: 'Alimento - Perro Adulto!'
    },
    {
        img: '../assets/imgs/elementos/productos/producto4.jpg',
        price: 400,
        name: 'Alimento - Perro Adulto!'
    },
    {
        img: '../assets/imgs/elementos/productos/producto5.jpg',
        price: 400,
        name: 'Alimento - Perro Adulto!'
    },
    {
        img: '../assets/imgs/elementos/productos/producto6.jpg',
        price: 400,
        name: 'Alimento - Perro Adulto!'
    },
    {
        img: '../assets/imgs/elementos/productos/producto7.jpg',
        price: 400,
        name: 'Alimento - Perro Adulto!'
    },
    {
        img: '../assets/imgs/elementos/productos/producto8.jpg',
        price: 400,
        name: 'Alimento - Perro Adulto!'
    }
];
//# sourceMappingURL=product-mok.js.map

/***/ }),

/***/ 253:
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

/***/ 254:
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

/***/ 272:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_modal_modal__ = __webpack_require__(103);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/rodrigo/tutorialIonic/mascotApp/mascotApp/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/home/rodrigo/tutorialIonic/mascotApp/mascotApp/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 280:
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
            selector: 'accordion',template:/*ion-inline-start:"/home/rodrigo/tutorialIonic/mascotApp/mascotApp/src/components/accordion/accordion.html"*/'<ion-card>\n  <ion-card-header (click)="toggleAccordion()">\n    Especificaciones\n  </ion-card-header>\n  <ion-card-content #cc>\n    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum \n    has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer \n    took a galley of type and scrambled it to make a type specimen book. It has survived not only \n    five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. \n    It was popularised in the 1960s with the release of Letraset sheets containing \n    Lorem Ipsum passages, and more recently with desktop publishing software like Aldus \n    PageMaker including versions of Lorem Ipsum. \n  </ion-card-content>\n</ion-card>\n<!-- <ion-card>\n  <ion-card-header (click)="toggleAccordion()">\n    Resumen\n  </ion-card-header>\n  <ion-card-content #cc>\n    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum \n    has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer \n    took a galley of type and scrambled it to make a type specimen book. It has survived not only \n    five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. \n    It was popularised in the 1960s with the release of Letraset sheets containing \n    Lorem Ipsum passages, and more recently with desktop publishing software like Aldus \n    PageMaker including versions of Lorem Ipsum. \n  </ion-card-content>\n</ion-card>\n<ion-card>\n  <ion-card-header (click)="toggleAccordion()">\n    Detalles\n  </ion-card-header>\n  <ion-card-content #cc>\n    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum \n    has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer \n    took a galley of type and scrambled it to make a type specimen book. It has survived not only \n    five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. \n    It was popularised in the 1960s with the release of Letraset sheets containing \n    Lorem Ipsum passages, and more recently with desktop publishing software like Aldus \n    PageMaker including versions of Lorem Ipsum. \n  </ion-card-content>\n</ion-card>\n<ion-card>\n  <ion-card-header (click)="toggleAccordion()">\n    Consejos\n  </ion-card-header>\n  <ion-card-content #cc>\n    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum \n    has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer \n    took a galley of type and scrambled it to make a type specimen book. It has survived not only \n    five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. \n    It was popularised in the 1960s with the release of Letraset sheets containing \n    Lorem Ipsum passages, and more recently with desktop publishing software like Aldus \n    PageMaker including versions of Lorem Ipsum. \n  </ion-card-content>\n</ion-card> -->'/*ion-inline-end:"/home/rodrigo/tutorialIonic/mascotApp/mascotApp/src/components/accordion/accordion.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* Renderer */]])
    ], AccordionComponent);
    return AccordionComponent;
}());

//# sourceMappingURL=accordion.js.map

/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InternaProductPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
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
    function InternaProductPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.detailProduct = this.navParams.data;
    }
    InternaProductPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad InternaProductPage');
    };
    InternaProductPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-interna-product',template:/*ion-inline-start:"/home/rodrigo/tutorialIonic/mascotApp/mascotApp/src/pages/interna-product/interna-product.html"*/'<ion-header>\n\n  <ion-navbar color="royal">\n    <ion-title>Detalles</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only>\n        <ion-icon name="share"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-buttons end>\n      <button ion-button icon-only>\n        <ion-icon name="search"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <ion-item>\n    <!-- <ion-badge color="secondary"></ion-badge> -->\n    <ion-grid text-center>\n        <ion-row wrap>\n            <ion-badge color="light">\n            <ion-col>\n              <div float-left style="width: 110px; text-align: center; padding-top: 15px;">\n                <h3>Gane 10% OFF</h3>\n                <p>En tu primer compra</p>\n              </div>\n            </ion-col>\n            <ion-col>\n              <button ion-button float-right color="royal">Apply Cupon</button>\n            </ion-col>\n           </ion-badge>\n        <ion-col>\n          <h2>{{detailProduct.name}}</h2>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <img src="{{detailProduct.img}}" alt="Image Product">\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <ion-icon float-left name="expand"></ion-icon>\n        </ion-col>\n        <ion-col>\n          <ion-icon float-right name="heart"></ion-icon>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-item>\n  <ion-item>\n    <ion-label>Cantidad</ion-label>\n    <ion-select [(ngModel)]="toppings" okText="Okay" cancelText="Dismiss">\n      <ion-option>\n        <ion-row>\n          <ion-col>\n            <div float-left>7 Unidades</div>\n          </ion-col>\n          <ion-col>\n            <div float-right>$400</div>\n          </ion-col>\n        </ion-row>\n      </ion-option>\n      <ion-option>\n        <ion-row>\n          <ion-col>\n            <div float-left>14 Unidades</div>\n          </ion-col>\n          <ion-col>\n            <div float-right>$900</div>\n          </ion-col>\n        </ion-row>\n      </ion-option>\n      <ion-option>\n          <ion-row>\n              <ion-col>\n                <div float-left>21 Unidades</div>\n              </ion-col>\n              <ion-col>\n                <div float-right>$1200</div>\n              </ion-col>\n            </ion-row>\n      </ion-option>\n      <ion-option>\n          <ion-row>\n              <ion-col>\n                <div float-left>28 Unidades</div>\n              </ion-col>\n              <ion-col>\n                <div float-right>$2500</div>\n              </ion-col>\n            </ion-row>\n      </ion-option>\n    </ion-select>\n  </ion-item>\n  <ion-list>\n    <accordion></accordion>\n    <accordion></accordion>\n    <accordion></accordion>    \n  </ion-list>\n</ion-content>\n<ion-footer>\n    <ion-toolbar>\n      <ion-buttons left>\n        <button ion-button solid small color="primary">\n            <ion-col>\n              <ion-icon float-left name="mascotapp-pendientes"></ion-icon>\n            </ion-col>\n            <ion-col>\n              <div float-right style="font-size: 1rem;">Agregar a Pendientes</div>\n            </ion-col>\n        </button>\n      </ion-buttons>\n      <ion-buttons right>\n        <button ion-button solid small color="button">\n            <ion-col>\n                <ion-icon float-left name="mascotapp-carrito"></ion-icon>\n              </ion-col>\n              <ion-col>\n                <div float-right style="font-size: 1rem;">Comprar Ahora</div>\n              </ion-col>\n        </button>\n      </ion-buttons>\n  \n    </ion-toolbar>\n  </ion-footer>'/*ion-inline-end:"/home/rodrigo/tutorialIonic/mascotApp/mascotApp/src/pages/interna-product/interna-product.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], InternaProductPage);
    return InternaProductPage;
}());

//# sourceMappingURL=interna-product.js.map

/***/ })

},[203]);
//# sourceMappingURL=main.js.map