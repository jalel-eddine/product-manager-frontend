(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _categories_categories_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./categories/categories.component */ "./src/app/categories/categories.component.ts");
/* harmony import */ var _categorie_categorie_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./categorie/categorie.component */ "./src/app/categorie/categorie.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    {
        path: '',
        redirectTo: 'categories',
        pathMatch: 'full'
    }, {
        path: 'login',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"]
    }, {
        path: 'categories',
        component: _categories_categories_component__WEBPACK_IMPORTED_MODULE_3__["CategoriesComponent"]
    }, {
        path: 'categorie/:id',
        component: _categorie_categorie_component__WEBPACK_IMPORTED_MODULE_4__["CategorieComponent"]
    }, {
        path: 'categorie',
        component: _categorie_categorie_component__WEBPACK_IMPORTED_MODULE_4__["CategorieComponent"]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n  <a class=\"navbar-brand\" href=\"#\">Navbar</a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item active\">\n        <a class=\"nav-link\" routerLink= \"/categories\">Categories <span class=\"sr-only\">(current)</span></a>\n      </li>\n\n     \n        <li class=\"nav-item\">\n           <a class=\"nav-link\" routerLink= \"/categorie\">Categorie</a>\n        </li>\n     \n      \n      <!--\n          <li class=\"nav-item\">\n             <a class=\"nav-link disabled\" href=\"#\">Disabled</a>\n          </li>\n      -->\n      \n    </ul>\n    \n      <li class=\"nav-item form-inline my-2 my-lg-0\">\n        <button class=\"btn btn-outline-success my-2 my-sm-0\" type=\"button\" routerLink=\"/login\">Login</button>\n      </li>\n   \n    \n  </div>\n</nav> \n\n\n<router-outlet>    \n</router-outlet> "

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'front-end-app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _categories_categories_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./categories/categories.component */ "./src/app/categories/categories.component.ts");
/* harmony import */ var _categorie_categorie_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./categorie/categorie.component */ "./src/app/categorie/categorie.component.ts");
/* harmony import */ var _services_catesgorie_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/catesgorie.service */ "./src/app/services/catesgorie.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _produits_produits_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./produits/produits.component */ "./src/app/produits/produits.component.ts");
/* harmony import */ var _produit_produit_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./produit/produit.component */ "./src/app/produit/produit.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"],
                _categories_categories_component__WEBPACK_IMPORTED_MODULE_7__["CategoriesComponent"],
                _categorie_categorie_component__WEBPACK_IMPORTED_MODULE_8__["CategorieComponent"],
                _produits_produits_component__WEBPACK_IMPORTED_MODULE_12__["ProduitsComponent"],
                _produit_produit_component__WEBPACK_IMPORTED_MODULE_13__["ProduitComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_3__["HttpModule"]
            ],
            providers: [
                _services_catesgorie_service__WEBPACK_IMPORTED_MODULE_9__["CategorieService"],
                _services_auth_service__WEBPACK_IMPORTED_MODULE_11__["AuthenticationService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/categorie/categorie.component.css":
/*!***************************************************!*\
  !*** ./src/app/categorie/categorie.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NhdGVnb3JpZS9jYXRlZ29yaWUuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/categorie/categorie.component.html":
/*!****************************************************!*\
  !*** ./src/app/categorie/categorie.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p></p>\r\n\r\n<div class=\" container-fluid login-register outer-div col-md-4 border\"   > \r\n\r\n    <div class=\"card-header\"> Categorie\r\n           \r\n    </div >\r\n    <div class=\"card-body\">\r\n            <form #f=\"ngForm\" (ngSubmit)=\"onSaveCat(f.value)\">\r\n                <div class=\"form-group\">\r\n                <label for=\"idCategorie\">ID Categorie :  </label> <br>\r\n                <input type=\"text\" class=\"form-control\"  name=\"idCategorie\" [(ngModel)]=\"cate.idCategorie\">  \r\n                 \r\n                <!-- <label for=\"idCategorie\"> {{cate.idCategorie}} </label>  -->\r\n                </div>\r\n\r\n                <div class=\"form-group\">\r\n                <label >Nom Categorie</label>\r\n                <input type=\"text\" class=\"form-control\"  name=\"nomCategorie\" [(ngModel)]=\"cate.nomCategorie\" >   <!--  [ngModelOptions]=\"{standalone: true}\" -->\r\n                </div>\r\n\r\n                <div class=\"form-group\">\r\n                    <label for=\"nomImageCategorie\">Nom Image Categorie</label>\r\n                    <input type=\"text\" class=\"form-control\" id=\"nomImageCategorie\" name=\"nomImageCategorie\" [(ngModel)]=\"cate.nomImageCategorie\" > <!-- [(ngModel)]=\"cate.nomImageCategorie\" [ngModelOptions]=\"{standalone: true}\" name=\"nomImageCategorie\" -->\r\n                </div>\r\n\r\n                <div class=\"form-group\">\r\n                    <label for=\"typeCategorie\">Type Categorie</label>\r\n                    <input type=\"text\" class=\"form-control\" id=\"typeCategorie\" name=\"typeCategorie\" [(ngModel)]=\"cate.typeCategorie\" > <!-- [(ngModel)]=\"cate.typeCategorie\" [ngModelOptions]=\"{standalone: true}\" name=\"typeCategorie\" -->\r\n                </div>\r\n\r\n                <button type=\"submit\" [disabled]=\"!f.valid\" class=\"btn btn-primary\">Save</button>\r\n            </form>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/categorie/categorie.component.ts":
/*!**************************************************!*\
  !*** ./src/app/categorie/categorie.component.ts ***!
  \**************************************************/
/*! exports provided: CategorieComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategorieComponent", function() { return CategorieComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_catesgorie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/catesgorie.service */ "./src/app/services/catesgorie.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CategorieComponent = /** @class */ (function () {
    function CategorieComponent(http, catService, route) {
        this.http = http;
        this.catService = catService;
        this.route = route;
    }
    CategorieComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.id = this.route.snapshot.params['id'];
        this.catService.editCat(this.id)
            .subscribe(function (data) {
            _this.cate = data;
            //console.log("---------------------------------------------") ;
            console.log(_this.cate);
        }, function (err) {
            console.log(err);
        });
    };
    CategorieComponent.prototype.onSaveCat = function (cate) {
        this.catService.saveCat(cate)
            .subscribe(function (resp) {
            cate = resp;
        }, function (err) {
            console.log(err);
        });
    };
    CategorieComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-categorie',
            template: __webpack_require__(/*! ./categorie.component.html */ "./src/app/categorie/categorie.component.html"),
            styles: [__webpack_require__(/*! ./categorie.component.css */ "./src/app/categorie/categorie.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _services_catesgorie_service__WEBPACK_IMPORTED_MODULE_2__["CategorieService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], CategorieComponent);
    return CategorieComponent;
}());



/***/ }),

/***/ "./src/app/categories/categories.component.css":
/*!*****************************************************!*\
  !*** ./src/app/categories/categories.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NhdGVnb3JpZXMvY2F0ZWdvcmllcy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/categories/categories.component.html":
/*!******************************************************!*\
  !*** ./src/app/categories/categories.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" style=\"padding-top:5% ;\">\n  <div class=\"card\" >\n      <div class=\"card-body\">\n          <h5 class=\"card-title\">List des categories</h5>\n  <table class=\"table table-striped\">\n      <thead class=\"thead-dark \">\n        <tr>\n          <th scope=\"col\">ID</th>\n          <th scope=\"col\">nomCategorie</th>\n          <th scope=\"col\">Description</th>\n          <th scope=\"col\">nomImageCategorie</th>\n        \n        </tr>\n      </thead>\n      <tbody>\n        <tr id=\"Categorie\" *ngFor=\"let lc of listCategories \">  \n          <td >{{lc.idCategori}}</td>\n          <td>{{lc.nomCategorie}}</td>\n          <td>{{lc.description}}</td>\n          <td>{{lc.nomImageCategorie}}</td>\n        \n \n          <td>\n            <button *ngIf=\"isAdmin()\" type=\"submit\" (click)=\"onEdite(lc.idCategori)\" class=\"btn btn-primary\">Editer</button>\n          </td>\n          \n        </tr>\n      </tbody>\n    </table>\n  </div>\n</div>\n</div>"

/***/ }),

/***/ "./src/app/categories/categories.component.ts":
/*!****************************************************!*\
  !*** ./src/app/categories/categories.component.ts ***!
  \****************************************************/
/*! exports provided: CategoriesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesComponent", function() { return CategoriesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_catesgorie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/catesgorie.service */ "./src/app/services/catesgorie.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CategoriesComponent = /** @class */ (function () {
    function CategoriesComponent(http, catService, authService, router) {
        this.http = http;
        this.catService = catService;
        this.authService = authService;
        this.router = router;
    }
    CategoriesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.catService.listeCat()
            .subscribe(function (data) {
            _this.listCategories = data;
        }, function (err) {
            _this.authService.logout();
            _this.router.navigateByUrl('/login');
            console.log(err);
        });
    };
    CategoriesComponent.prototype.onEdite = function (id) {
        this.router.navigateByUrl('/categorie/' + id);
        console.log('-------------------------------' + id);
    };
    CategoriesComponent.prototype.isAdmin = function () {
        return this.authService.isAdmin();
    };
    CategoriesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-categories',
            template: __webpack_require__(/*! ./categories.component.html */ "./src/app/categories/categories.component.html"),
            styles: [__webpack_require__(/*! ./categories.component.css */ "./src/app/categories/categories.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _services_catesgorie_service__WEBPACK_IMPORTED_MODULE_2__["CategorieService"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], CategoriesComponent);
    return CategoriesComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p></p>\n\n<div class=\" container-fluid login-register outer-div col-md-4 border\" > \n\n  <div class=\"card-body\">\n\n      <div class=\"alert alert-danger\" *ngIf=\"mode==1\">\n          <strong>Bad credentiel ! </strong>invalid username or password\n      </div>\n\n  <form #f=\"ngForm\" (ngSubmit)=\"onLogin(f.value)\"  >   \n    <div class=\"form-group\">\n      <label for=\"exampleInputEmail1\">username</label>\n      <input type=\"text\" class=\"form-control\" id=\"usernamelogin\"  placeholder=\"username\" ngModel name=\"username\">\n\n    </div>\n    <div class=\"form-group\">\n      <label for=\"exampleInputPassword1\">Password</label>\n      <input type=\"password\" class=\"form-control\" id=\"exampleInputPassword1\" placeholder=\"Password\" ngModel name=\"password\">\n    </div>\n\n    <button type=\"submit\" class=\"btn btn-primary\">log In</button>\n  </form>\n\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService, router) {
        this.authService = authService;
        this.router = router;
        this.mode = 0;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onLogin = function (user) {
        var _this = this;
        ;
        this.authService.login(user)
            .subscribe(function (resp) {
            var jwt = resp.headers.get('Authorization');
            console.log("***********************************");
            console.log(jwt);
            console.log("***********************************");
            _this.authService.saveToken(jwt);
            _this.router.navigateByUrl('/categories');
        }, function (err) {
            _this.mode = 1;
        });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/produit/produit.component.css":
/*!***********************************************!*\
  !*** ./src/app/produit/produit.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1aXQvcHJvZHVpdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/produit/produit.component.html":
/*!************************************************!*\
  !*** ./src/app/produit/produit.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  produit works!\n</p>\n"

/***/ }),

/***/ "./src/app/produit/produit.component.ts":
/*!**********************************************!*\
  !*** ./src/app/produit/produit.component.ts ***!
  \**********************************************/
/*! exports provided: ProduitComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProduitComponent", function() { return ProduitComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProduitComponent = /** @class */ (function () {
    function ProduitComponent() {
    }
    ProduitComponent.prototype.ngOnInit = function () {
    };
    ProduitComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-produit',
            template: __webpack_require__(/*! ./produit.component.html */ "./src/app/produit/produit.component.html"),
            styles: [__webpack_require__(/*! ./produit.component.css */ "./src/app/produit/produit.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ProduitComponent);
    return ProduitComponent;
}());



/***/ }),

/***/ "./src/app/produits/produits.component.css":
/*!*************************************************!*\
  !*** ./src/app/produits/produits.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1aXRzL3Byb2R1aXRzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/produits/produits.component.html":
/*!**************************************************!*\
  !*** ./src/app/produits/produits.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  produits works!\n</p>\n"

/***/ }),

/***/ "./src/app/produits/produits.component.ts":
/*!************************************************!*\
  !*** ./src/app/produits/produits.component.ts ***!
  \************************************************/
/*! exports provided: ProduitsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProduitsComponent", function() { return ProduitsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProduitsComponent = /** @class */ (function () {
    function ProduitsComponent() {
    }
    ProduitsComponent.prototype.ngOnInit = function () {
    };
    ProduitsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-produits',
            template: __webpack_require__(/*! ./produits.component.html */ "./src/app/produits/produits.component.html"),
            styles: [__webpack_require__(/*! ./produits.component.css */ "./src/app/produits/produits.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ProduitsComponent);
    return ProduitsComponent;
}());



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var angular2_jwt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular2-jwt */ "./node_modules/angular2-jwt/angular2-jwt.js");
/* harmony import */ var angular2_jwt__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angular2_jwt__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthenticationService = /** @class */ (function () {
    function AuthenticationService(http) {
        this.http = http;
        this.host = "http://localhost:9000";
    }
    AuthenticationService.prototype.login = function (user) {
        return this.http.post(this.host + "/auth", user, { observe: "response" });
    };
    AuthenticationService.prototype.saveToken = function (jwt) {
        this.jwtToken = jwt;
        localStorage.setItem('token', jwt);
        var jwtHelper = new angular2_jwt__WEBPACK_IMPORTED_MODULE_2__["JwtHelper"]();
        this.roles = jwtHelper.decodeToken(this.jwtToken).roles;
        this.username = jwtHelper.decodeToken(this.jwtToken).sub;
    };
    AuthenticationService.prototype.loadToken = function () {
        this.jwtToken = localStorage.getItem('token');
    };
    AuthenticationService.prototype.logout = function () {
        //this.jwtToken=null;
        localStorage.removeItem('token');
        //localStorage.clear() ;
    };
    AuthenticationService.prototype.isAuthenticated = function () {
        this.jwtToken = localStorage.getItem('token');
        var jwtHelper = new angular2_jwt__WEBPACK_IMPORTED_MODULE_2__["JwtHelper"]();
        if (this.jwtToken == null) {
            return false;
        }
        return !jwtHelper.isTokenExpired(this.jwtToken);
    };
    AuthenticationService.prototype.isAdmin = function () {
        for (var _i = 0, _a = this.roles; _i < _a.length; _i++) {
            var r = _a[_i];
            if (r.authority == 'ADMIN')
                return true;
        }
        return false;
    };
    AuthenticationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], AuthenticationService);
    return AuthenticationService;
}());



/***/ }),

/***/ "./src/app/services/catesgorie.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/catesgorie.service.ts ***!
  \************************************************/
/*! exports provided: CategorieService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategorieService", function() { return CategorieService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CategorieService = /** @class */ (function () {
    function CategorieService(http) {
        this.http = http;
        this.host = "http://localhost:9000/api";
    }
    CategorieService.prototype.loadToken = function () {
        this.jwtToken = localStorage.getItem('token');
    };
    CategorieService.prototype.listeCat = function () {
        if (this.jwtToken == null)
            this.loadToken();
        return this.http.get(this.host + '/categories');
    };
    CategorieService.prototype.editCat = function (id) {
        return this.http.get(this.host + "/categories/" + id);
    };
    /*
   chercherProduits(mc:string){
       return this.http.get(this.host+"/produits/search/by-designation?x=%"+mc+"%")
   }*/
    CategorieService.prototype.saveCat = function (c) {
        console.log("---------------------------------------------");
        return this.http.post(this.host + '/creatCat', c, { observe: 'response' });
    };
    CategorieService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], CategorieService);
    return CategorieService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Jalel Eddine\Desktop\AngularApp\front-end-app\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map