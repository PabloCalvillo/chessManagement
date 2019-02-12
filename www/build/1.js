webpackJsonp([1],{

/***/ 505:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResultadosPageModule", function() { return ResultadosPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__resultados__ = __webpack_require__(507);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ResultadosPageModule = /** @class */ (function () {
    function ResultadosPageModule() {
    }
    ResultadosPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__resultados__["a" /* ResultadosPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__resultados__["a" /* ResultadosPage */]),
            ],
        })
    ], ResultadosPageModule);
    return ResultadosPageModule;
}());

//# sourceMappingURL=resultados.module.js.map

/***/ }),

/***/ 507:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResultadosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_historial_equipos_historial_equipos__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modal_jornada_modal_jornada__ = __webpack_require__(290);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angularfire2_database__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angularfire2__);
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
 * Generated class for the ResultadosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ResultadosPage = /** @class */ (function () {
    function ResultadosPage(navCtrl, navParams, _jornadas, afDB, fbApp) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._jornadas = _jornadas;
        this.afDB = afDB;
        this.fbApp = fbApp;
        this.equipo = [];
        this.equipos = this._jornadas.cargar_pendientes();
    }
    ResultadosPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ResultadosPage');
    };
    ResultadosPage.prototype.ionViewWillEnter = function () {
        this.equipos = this._jornadas.cargar_pendientes();
    };
    ResultadosPage.prototype.details = function (equipo) {
        var _this = this;
        equipo.jugadores.forEach(function (player) {
            // console.log(player)
            _this.fbApp.database().ref().child('users').child(player).once('value', function (LUL) {
                _this.equipo.push(LUL.val());
            });
        });
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__modal_jornada_modal_jornada__["a" /* ModalJornadaPage */], { "equipo": this.equipo });
    };
    ResultadosPage.prototype.goToHome = function () {
        this.navCtrl.popToRoot();
        console.log("Navigating to: HomePage");
    };
    var _a, _b, _c, _d, _e;
    ResultadosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-resultados',template:/*ion-inline-start:"C:\Users\pere_\Data - Downloads - Stuff\Ionic\chessManagement\src\pages\resultados\resultados.html"*/'<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Resultados</ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button color="primary" (click)="goToHome()">Home <ion-icon name="home"></ion-icon></button></ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n  <ion-list>\n\n\n\n    <ion-item *ngFor="let equipo of equipos | async; let i = index" (click)="details(equipo)">\n\n    <ion-item>\n\n      <ion-avatar item-start>\n\n        <img src="../../assets/imgs/options/poll-solid.svg">\n\n      </ion-avatar>\n\n      <h2>{{equipo.nombre}}</h2>\n\n      <ion-note item-end>\n\n        {{equipo.ciudad}} ({{ equipo.local }})\n\n      </ion-note>\n\n      </ion-item>\n\n    </ion-item>\n\n\n\n  </ion-list>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\pere_\Data - Downloads - Stuff\Ionic\chessManagement\src\pages\resultados\resultados.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__providers_historial_equipos_historial_equipos__["a" /* HistorialEquiposProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_historial_equipos_historial_equipos__["a" /* HistorialEquiposProvider */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__["AngularFireDatabase"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__["AngularFireDatabase"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5_angularfire2__["FirebaseApp"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_angularfire2__["FirebaseApp"]) === "function" && _e || Object])
    ], ResultadosPage);
    return ResultadosPage;
}());

//# sourceMappingURL=resultados.js.map

/***/ })

});
//# sourceMappingURL=1.js.map