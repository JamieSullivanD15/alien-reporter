webpackJsonp([0],{

/***/ 264:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SightingsPageModule", function() { return SightingsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sightings__ = __webpack_require__(265);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SightingsPageModule = (function () {
    function SightingsPageModule() {
    }
    return SightingsPageModule;
}());
SightingsPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__sightings__["a" /* SightingsPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__sightings__["a" /* SightingsPage */]),
        ],
    })
], SightingsPageModule);

//# sourceMappingURL=sightings.module.js.map

/***/ }),

/***/ 265:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SightingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_data_data__ = __webpack_require__(195);
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
  Main Component of application.
  Holds all data to be displayed as well as
  navigation functions and data provider.
*/
var SightingsPage = (function () {
    function SightingsPage(navCtrl, http, dataProvider) {
        this.navCtrl = navCtrl;
        this.http = http;
        this.dataProvider = dataProvider;
        this.alienSightings = [];
        this.sighting = {};
        this.editing = false;
        this.viewing = false;
        this.reorderButton = 'Reorder';
        // Upon startup, assign alienSightings the data returned from dataProvider.
        this.alienSightings = this.dataProvider.getSightings();
    }
    /*
      When the item is dragged and dropped into the new position, the (ionItemReorder) event is emitted.
      This event provides the initial index (from) and the new index (to) of the reordered item.
      For example, if the first item is dragged to the fifth position, the event will emit {from: 0, to: 4}
    */
    SightingsPage.prototype.reorderItem = function (indexes) {
        this.sighting.form = Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* reorderArray */])(this.sighting.form, indexes);
    };
    /*
      Toggles between sighting list and sighting object details.
      Passes an index of clicked item and assigns the sighting to be viewed by
      pulling corresponding object from alienSightings array.
    */
    SightingsPage.prototype.toggleView = function (index) {
        this.sighting = this.alienSightings[index];
        this.viewing = !this.viewing;
    };
    /*
      Toggles the reorder button on and off.
      If button is active it allows the the form elements in a sighting object to be reordered
      by dragging and dropping.
    */
    SightingsPage.prototype.toggleReorder = function () {
        this.editing = !this.editing;
        this.editing ? this.reorderButton = 'Done' : this.reorderButton = 'Reorder';
    };
    // Navigation function that returns to sighting list and resets the reorder button to default value.
    SightingsPage.prototype.back = function () {
        this.editing = false;
        this.editing ? this.reorderButton = 'Done' : this.reorderButton = 'Reorder';
        this.viewing = !this.viewing;
    };
    return SightingsPage;
}());
SightingsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-sightings',template:/*ion-inline-start:"C:\Users\Jamie Sullivan\Documents\GitHub\alien-reporter\src\pages\sightings\sightings.html"*/'<ion-header no-padding no-border>\n\n  <ion-navbar no-padding color="primary">\n    <ion-row no-padding justify-content-center>\n      <ion-col col-4 col-md-2 no-padding text-center> <img src="assets/imgs/alien-logo.png" alt=""></ion-col>\n      <ion-col col-8 col-md-10 class="app-header" no-padding align-self-center> Alien Reporter </ion-col>\n    </ion-row>\n  </ion-navbar>\n\n</ion-header>\n\n<!--\n  Main content consists of a grid with a single row and column.\n  The column contains a list of all sightings that were found in JSON endpoint\n  and a div which contains all information associated with a particular sighting.\n  Switching between the views is done with a boolean named \'viewing\'.\n-->\n\n<ion-content no-padding class="content">\n\n  <ion-grid class="main" no-padding>\n    <ion-row no-padding>\n\n      <ion-col>\n        <!-- List of all sightings, show if viewing sighting details is not active -->\n        <ion-list no-padding class="sightings-list" *ngIf="!viewing">\n          <ion-row class="list-header">Sightings</ion-row>\n\n          <ion-item no-padding class="sightings-list-labels">\n            <ion-row justify-content-start>\n              <ion-col col-3 col-xl-2 text-center>Form ID</ion-col>\n              <ion-col col-6 col-xl-2 text-center>Date</ion-col>\n              <ion-col col-3 col-xl-2 text-center>Editor</ion-col>\n            </ion-row>\n          </ion-item>\n\n          <button ion-item no-padding *ngFor="let sighting of alienSightings; let i = index" (click)="toggleView(i)">\n            <ion-row justify-content-start>\n              <ion-col col-3 col-xl-2 text-center>{{sighting.formId}}</ion-col>\n              <ion-col col-6 col-xl-2 text-center>{{sighting.date}}</ion-col>\n              <ion-col col-3 col-xl-2 text-center>{{sighting.lastChangedBy}}</ion-col>\n            </ion-row>\n          </button>\n        </ion-list>\n        <!-- // Sighting list end -->\n\n        <!-- Sighting details, show if viewing sighting details is active -->\n        <div class="sighting" *ngIf="viewing" >\n          <ion-row class="list-header">Form ID: {{sighting.formId}}</ion-row>\n\n          <ion-row>Date: {{sighting.date}}</ion-row>\n          <ion-row>Time: {{sighting.time}}</ion-row>\n          <ion-row>Editor: {{sighting.lastChangedBy}}</ion-row>\n\n          <!-- Form details with reorderable list-->\n          <ion-list class="sighting-form"  [reorder]="editing" (ionItemReorder)="reorderItem($event)" no-padding>\n            <ion-item *ngFor="let item of sighting.form" no-padding>\n              <ion-row no-padding class="sighting-form-id">{{item.id}}</ion-row>\n              <ion-row no-padding>\n                <ion-col col-12 col-lg-2>{{item.caption}}</ion-col>\n                <ion-col col-12 col-lg-2>{{item.type}}</ion-col>\n              </ion-row>\n            </ion-item>\n          </ion-list>\n\n          <ion-row justify-content-start>\n            <button ion-button clear no-padding (click)="back()">\n              <ion-icon name="arrow-back"></ion-icon> Back\n            </button>\n            <button ion-button clear no-padding (click)="toggleReorder()">\n              {{reorderButton}}\n            </button>\n          </ion-row>\n\n        </div>\n        <!-- // Sighting form details end -->\n        </ion-col>\n\n    </ion-row>\n  </ion-grid>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Jamie Sullivan\Documents\GitHub\alien-reporter\src\pages\sightings\sightings.html"*/
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__providers_data_data__["a" /* DataProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__providers_data_data__["a" /* DataProvider */]) === "function" && _c || Object])
], SightingsPage);

var _a, _b, _c;
//# sourceMappingURL=sightings.js.map

/***/ })

});
//# sourceMappingURL=0.js.map