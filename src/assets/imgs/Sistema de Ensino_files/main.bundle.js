webpackJsonp(["main"],{

/***/ "../../../../../package.json":
/***/ (function(module, exports) {

module.exports = {"name":"coruscant","version":"1.3.2","license":"MIT","scripts":{"ng":"ng","start":"ng serve","start:dev":"ng s -e _dev","build":"ng build","test":"ng test","lint":"ng lint","e2e":"ng e2e"},"private":true,"dependencies":{"@angular/animations":"^4.4.5","@angular/common":"^4.4.5","@angular/compiler":"^4.4.5","@angular/core":"^4.4.5","@angular/forms":"^4.4.5","@angular/http":"^4.4.5","@angular/platform-browser":"^4.4.5","@angular/platform-browser-dynamic":"^4.4.5","@angular/router":"^4.4.5","angular-calendar":"^0.20.1","angular2-busy":"^2.0.4","angular2-text-mask":"^8.0.4","angular4-drag-drop":"^1.1.2","brmasker":"^1.0.19","core-js":"^2.5.1","cpf-mask-ng2":"^1.0.0","date-fns":"^1.29.0","hammerjs":"^2.0.8","lodash":"^4.17.4","ng2-cpf-cnpj":"^0.1.1","ng2-currency-mask":"^5.3.1","ng2-date-picker":"^2.5.1","ng2-device-detector":"^1.0.0","ng2-file-upload":"^1.2.1","ng2-pagination":"^2.0.2","ng2-scroll-to":"^1.0.7","ng2-toastr":"^4.1.2","ngx-bootstrap":"^1.9.3","ngx-chips":"~1.5.11","ngx-editor":"^3.2.1","raven-js":"^3.19.1","tixif-ngx-busy":"0.0.5","zone.js":"^0.8.18"},"devDependencies":{"@angular/cli":"^1.4.7","@angular/compiler-cli":"^4.4.5","@types/gapi":"0.0.35","@types/gapi.auth2":"0.0.47","@types/jasmine":"2.5.38","@types/lodash":"^4.14.87","@types/node":"^6.0.89","codelyzer":"~2.0.0","concurrently":"^3.5.0","jasmine-core":"~2.5.2","jasmine-spec-reporter":"~3.2.0","karma":"~1.4.1","karma-chrome-launcher":"~2.1.1","karma-cli":"~1.0.1","karma-coverage-istanbul-reporter":"^0.2.0","karma-jasmine":"~1.1.0","karma-jasmine-html-reporter":"^0.2.2","ngx-swiper-wrapper":"^4.6.6","protractor":"~5.1.0","rxjs":"^5.5.6","ts-node":"~2.0.0","tslint":"~4.5.0","typescript":"~2.3.0"}}

/***/ }),

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"app/modules/classroom/classroom.module": [
		"../../../../../src/app/modules/classroom/classroom.module.ts",
		"common",
		"classroom.module"
	],
	"app/modules/content/content.module": [
		"../../../../../src/app/modules/content/content.module.ts",
		"content.module",
		"common"
	],
	"app/modules/dashboard/dashboard.module": [
		"../../../../../src/app/modules/dashboard/dashboard.module.ts",
		"common",
		"dashboard.module"
	],
	"app/modules/dummy/dummy.module": [
		"../../../../../src/app/modules/dummy/dummy.module.ts",
		"dummy.module"
	],
	"app/modules/file/file.module": [
		"../../../../../src/app/modules/file/file.module.ts",
		"common",
		"file.module"
	],
	"app/modules/gasp/gasp.module": [
		"../../../../../src/app/modules/gasp/gasp.module.ts",
		"common",
		"gasp.module"
	],
	"app/modules/login/login.module": [
		"../../../../../src/app/modules/login/login.module.ts",
		"common",
		"login.module"
	],
	"app/modules/persona/persona.module": [
		"../../../../../src/app/modules/persona/persona.module.ts",
		"common",
		"persona.module"
	],
	"app/modules/planner/planner.module": [
		"../../../../../src/app/modules/planner/planner.module.ts",
		"common",
		"planner.module"
	],
	"app/modules/settings/settings.module": [
		"../../../../../src/app/modules/settings/settings.module.ts",
		"common",
		"settings.module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "../../../../../src/app/components/midia-modal/midia-modal.component.html":
/***/ (function(module, exports) {

module.exports = "<span class=\"icon-btn-fechar\" (click)='bsModalRef.hide()'></span>\n<br>\n<div class=\"modal-body\" *ngIf='t'>\n    <div *ngIf='t.content_player.player === \"VIDEO\"'>\n        <video src=\"{{ t.repositories.view_link }}\" autoplay controls controlsList=\"nodownload\"></video>\n    </div>\n\n    <div *ngIf='t.content_player.player === \"MODAL-IFRAME\"'>\n        <iframe [src]=\"clearUrl(t.repositories.view_link)\" frameborder=\"0\" scrolling=\"no\"></iframe>\n    </div>\n\n    <div *ngIf='t.content_player.player === \"AUDIO\"'>\n        <img src=\"../../assets/img/icon_musica.png\" class=\"icon-audio\" />\n        <audio src=\"{{ t.repositories.view_link }}\" autoplay controls controlsList=\"nodownload\"></audio>\n    </div>    \n\n    <div *ngIf='t.content_player.player === \"IMAGE\"'>\n        <img [src]=\"clearUrl(t.repositories.view_link)\" class=\"image-default\">\n    </div>    \n\n    <div *ngIf='t.content_player.player === \"PDF\"'>\n        <iframe [src]=\"clearUrl(t.repositories.view_link)\" frameborder=\"0\" scrolling=\"no\"></iframe>    \n    </div>\n    <div *ngIf='t.content_player.player === \"SWF\"'>\n        <object>\n            <param name=\"movie\" value=\"/assets/swf/preloader.swf\">\n            <param name=\"wmode\" value=\"direct\">\n            <param name=\"allowfullscreen\" value=\"true\">\n            <param name=\"allowscriptaccess\" value=\"always\">\n            <param name=\"flashvars\" value=\"main={{ t.repositories.view_link }}\">\n            <embed src=\"/assets/swf/preloader.swf\" type=\"application/x-shockwave-flash\" wmode=\"direct\" allowfullscreen=\"true\" allowscriptaccess=\"always\" >\n        </object>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/midia-modal/midia-modal.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".notfound-content {\n  color: #F76D8D;\n  text-align: center; }\n\n.modal-body {\n  padding: 10px;\n  padding-top: 0;\n  margin: 0 auto;\n  position: initial;\n  text-align: center;\n  background-color: #fff; }\n\n.icon-btn-fechar {\n  border: 1px solid #fff;\n  border-radius: 50%;\n  background: #fff;\n  margin-right: -20px; }\n\nvideo {\n  max-width: 1024px;\n  width: 100%; }\n\niframe, object {\n  max-width: 1024px;\n  width: 100%;\n  height: 740px; }\n\n.icon-audio {\n  display: table;\n  width: 200px;\n  margin: 0 auto; }\n\n.image-default {\n  max-width: 1024px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/midia-modal/midia-modal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MidiaModalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_bootstrap_modal_modal_options_class__ = __webpack_require__("../../../../ngx-bootstrap/modal/modal-options.class.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MidiaModalComponent = (function () {
    function MidiaModalComponent(bsModalRef, sanitizer) {
        this.bsModalRef = bsModalRef;
        this.sanitizer = sanitizer;
        this.hideElement = true;
    }
    MidiaModalComponent.prototype.ngOnInit = function () {
        this.hideElement = false;
    };
    MidiaModalComponent.prototype.clearUrl = function (url) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    };
    return MidiaModalComponent;
}());
MidiaModalComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-midia-modal',
        template: __webpack_require__("../../../../../src/app/components/midia-modal/midia-modal.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/midia-modal/midia-modal.component.scss")],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ngx_bootstrap_modal_modal_options_class__["a" /* BsModalRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ngx_bootstrap_modal_modal_options_class__["a" /* BsModalRef */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["DomSanitizer"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["DomSanitizer"]) === "function" && _b || Object])
], MidiaModalComponent);

var _a, _b;
//# sourceMappingURL=midia-modal.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host >>> .popover.bottom>.arrow {\n    left: calc(85% - 5px) !important;\n}\n\n:host >>> .popover {\n\ttop: 60px !important;\n    margin-left: -134px;\n\tmargin-top: 18px;\n\twidth: 400px;\n\tmax-width: 400px !important;\n\tmax-height: none;\n\theight: initial;\n    padding: initial;\n\n}\n\n:host >>> .popover .popover-content {\n\tpadding: initial;\n} \n\n@media (max-width: 1024px) {\n\t:host >>> .popover.bottom>.arrow {\n\t    left: calc(90% - 5px) !important;\n\t}\n\n\t:host >>> .popover {\n\t\tmargin-left: -154px;\n\t}\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = " <div id=\"navbar-content\" class=\"navbar-content\" *ngIf='auth.authenticated' [ngBusy]='busy'> \n  <div class=\"closePopover\" *ngIf='mouseover' (click)='mouseover=false' (click)=\"popUser?.hide()\" (click)=\"popNotification?.hide()\"></div>\n  <div class=\"header-primary\">\n\n    <div class=\"school-name\">\n      <h1>\n        <a *ngIf='!isMobile' href [routerLink]=\"['dashboard/home']\" class=\"title\" > {{ schoolName }} </a>\n        <a *ngIf='isMobile' href [routerLink]=\"['publicacoes-recursos']\" class=\"title\" > {{ schoolName }} </a>\n      </h1>\n\n      <p> <span class=\"caret\"></span> \n        <a *ngIf='moduleName && !isMobile' href [routerLink]=\"['dashboard/home']\">Início</a>\n        <span *ngIf='!moduleName || isMobile'>Início</span>\n        <span *ngIf='moduleName && moduleName !== \"Home\"' ><small>•</small> \n          <span *ngIf='!subModuleName'>{{ moduleName }}</span>\n          <a  *ngIf='subModuleName' [routerLink]='moduleLink'>{{ moduleName }}</a> \n        </span>\n        <span id='subModuleName' *ngIf='subModuleName && subModuleName !== \"Home\"' >• {{ subModuleName }} </span></p>\n      </div>\n\n      <div class=\"module-name\">\n        <h1> {{ moduleName }} <span class=\"help\">?</span></h1>\n      </div>\n\n      <div class=\"header-user\">\n\n        <div class=\"notification-icon\" \n        [popover]=\"notificationPopover\" \n        placement=\"bottom\"\n        #popNotification=\"bs-popover\"\n        (click)='mouseover=true'>\n\n        <div *ngIf='notification'>{{ notification.length }}</div>\n        <span class=\"icon-notificacao\"></span>\n      </div>\n      <img \n        class=\"avatar-default\" \n        src=\"{{auth?.currentUser?.info?.person.avatar ? auth?.currentUser?.info?.person.avatar : './assets/img/default_avatar.png'}}\" \n        alt=\"\" \n        [popover]=\"userPopover\"\n        placement=\"bottom\"\n        #popUser=\"bs-popover\"\n        (click)='mouseover=true'\n      >\n    </div>\n\n    <ng-template #notificationPopover>\n\n      <div id='notificationPopover'>\n        <div *ngFor='let n of notification; let i=index'>\n\n          <div class=\"notificationMessage\" *ngIf=\"i<4\">\n            <img src=\"./assets/img/default_avatar.png\" alt=\"\">\n            <p>{{ n.message }}</p>\n            <span>{{ n.date }}</span>\n          </div>\n\n          <div class=\"btn notificationAll\" *ngIf=\"i>4\">\n            Ver todas as notificações\n          </div>\n\n        </div>\n      </div>\n\n    </ng-template>\n    \n    <ng-template #userPopover>\n\n      <div *ngIf='auth.authenticated' id='userPopover'>\n        <div class=\"avatarPopover btn\">\n          <img *ngIf=\"auth?.currentUser?.info?.person.avatar === null\" src=\"./assets/img/default_avatar.png\" alt=\"\">\n          <img *ngIf=\"auth?.currentUser?.info?.person.avatar\" src=\"{{auth?.currentUser?.info?.person.avatar}}\" alt=\"\">\n          <div (click)='changePhoto()' style=\"display: none;\"><em class=\"icon-camera\"></em></div>\n        </div>\n\n        <div class=\"namePopover\">{{ auth?.currentUser?.info?.person?.name }}</div>\n        <p class=\"emailPopover\">{{ auth?.currentUser?.info?.person?.email }}</p>\n        <div class=\"btn btn-danger rolesPopover\"> {{ auth?.currentUser?.info?.role_description }} </div>\n        <hr/>\n        <div class=\"profile-name\">\n          Sobre você:<br/>\n          <div [routerLink]=\"['configuracoes']\" (click)=\"popUser?.hide()\" (click)='mouseover=false'>Meu perfil</div>\n        </div>\n        <div class=\"profile-name\" *ngIf='auth?.currentUser?.info?.role_id  === 3'>\n          Perfil dos seus filhos:<br/>\n          <div class=\"student\" *ngFor=\"let s of auth?.currentUser?.info?.students\">\n          <div [routerLink]=\"['configuracoes/aluno', s.student_id]\" (click)=\"popUser?.hide()\" (click)='mouseover=false'>{{s.student.name}}</div>\n          </div>\n        </div>\n        <div class=\"btn exitPopover\" (click)='logout()'>Sair</div>\n      </div>\n\n    </ng-template>\n  </div>\n\n  <div class=\"header-secondary\">\n    <ng-container *ngIf='auth.activated || auth?.currentUser?.info?.role_id  === 6'>\n      <div *ngIf='years' class=\"header-year btn-group\" dropdown>\n        <div *ngIf='years.length === 1' class=\"empty-dropdown\">\n          <span class=\"icon-calendario\"></span> \n          {{ yearChoise.year }}\n        </div>\n\n        <span *ngIf='years.length > 1' dropdown>\n          <div (id)='yearChoise' dropdownToggle class=\"btn dropdownToggle\">\n            <span class=\"icon-calendario\"></span> \n            <span class=\"years\"> {{ yearChoise.year }} </span>\n            <span class=\"icon-seta-drop\"></span>\n          </div>\n\n          <ul *dropdownMenu class=\"dropdown-menu\">\n            <li *ngFor=\"let y of years\">\n              <a class=\"dropdown-item\" [ngClass]=\"(y.id===yearChoise.id)? 'chose' : '' \" (click)='changeYear(y)' >\n                <span *ngIf='y.id===yearChoise.id' class=\"icon-check\"></span> {{ y.year }}\n              </a>\n            </li>\n          </ul>\n        </span>\n      </div>\n    </ng-container>\n    <ng-container *ngIf='auth.activated'>\n      <div *ngIf='groups' class=\"header-periods btn-group\" dropdown>\n        <div *ngIf='groups.length === 1' class=\"empty-dropdown\">\n          <span class=\"icon-livro\"></span>\n          <span class=\"group-discipline\">{{ groupsChoise.group.name }} - {{ groupsChoise.discipline }}</span>\n        </div>\n\n        <span *ngIf='groups.length > 1' dropdown>\n          <div (id)='groupsChoise' dropdownToggle class=\"btn dropdownToggle\">\n            <span class=\"icon-livro\"></span>\n            <span class=\"group-discipline\">{{ groupsChoise.group.name }} - {{ groupsChoise.discipline }}</span>\n            <span class=\"icon-seta-drop\"></span>\n          </div>\n          <ul *dropdownMenu class=\"dropdown-menu\">\n            <li *ngFor=\"let g of groups\">\n              <a class=\"dropdown-item\" [ngClass]=\"(g.id===groupsChoise.id)? 'chose' : '' \" (click)='changeGroups(g)' >\n                <span *ngIf='g.id===groupsChoise.id' class=\"icon-check\"></span> \n                {{ g.group.name }} - {{ g.discipline }}\n              </a>\n            </li>\n          </ul>\n        </span>\n      </div>\n    </ng-container>\n    <ng-container *ngIf='auth.activated'>\n      <div *ngIf='periods' class=\"header-periods periods btn-group\" dropdown>\n        <div *ngIf='periods.length === 1' class=\"empty-dropdown\">\n          <span class=\"icon-livro\"></span>\n          {{ periodsChoise?.period }} - {{ periodsChoise?.period_abbr }} - {{ periodsChoise?.description }}\n        </div>\n\n        <span *ngIf='periods.length > 1' dropdown>\n          <div (id)='periodsChoise' dropdownToggle class=\"btn dropdownToggle\">\n            <!-- <span class=\"icon-livro\"></span> -->\n            {{ periodsChoise?.period }} - {{ periodsChoise?.period_abbr }} - {{ periodsChoise?.description }}\n            <span class=\"icon-seta-drop\"></span>\n          </div>\n          <ul *dropdownMenu class=\"dropdown-menu\">\n            <li *ngFor=\"let p of periods\">\n              <a class=\"dropdown-item\" [ngClass]=\"(p.id===periodsChoise.id)? 'chose' : '' \" (click)='changePeriods(p)' >\n                <span *ngIf='p.id===periodsChoise.id' class=\"icon-check\"></span> \n                {{ p?.period }} - {{ p?.period_abbr }} - {{ p?.description }} <!-- AJUSTAR -->\n              </a>\n            </li>\n          </ul>\n        </span>\n      </div>\n    </ng-container>\n    <div *ngIf='!isMobile' class=\"header-return\">\n      <div id='back-button' dropdownToggle class=\"btn btn-default\" (click)='returnPage()'>Voltar</div>\n    </div>\n\n    <div *ngIf='roles && roles.length > 1' class=\"header-roles btn-group\" dropdown>\n      <span dropdown>\n        <div (id)='rolesChoise' dropdownToggle class=\"btn dropdownToggle\">\n          <span class=\"icon-visualizar\"></span> \n          Visualizar como {{ rolesChoise.description }} \n          <span class=\"icon-seta-drop\"></span>\n        </div>\n        <ul *dropdownMenu class=\"dropdown-menu\">\n          <li *ngFor=\"let r of roles\">\n            <a class=\"dropdown-item\" [ngClass]=\"(r.id===rolesChoise.id)? 'chose' : '' \" (click)='changeRoles(r)' >\n              <span *ngIf='r.id===rolesChoise.id' class=\"icon-check\"></span> {{ r.description }}\n            </a>\n          </li>\n        </ul>\n      </span>\n    </div>\n\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@media only screen and (max-width: 1024px) {\n  :host > > > .popover {\n    margin-left: -154px; } }\n\nhr {\n  border-top: 1px solid #B5B5B5;\n  width: 95%;\n  margin-top: 30px; }\n\n.tooltip-text {\n  width: 300px; }\n\n.navbar-content {\n  background: #ffffff;\n  position: fixed;\n  float: right;\n  min-height: 147px;\n  min-width: 1024px;\n  margin-left: 66px;\n  z-index: 999;\n  top: 0; }\n\n.btn-danger {\n  background-color: #EE6D52;\n  border-color: #EE6D52;\n  font-weight: 200; }\n\n.header-primary {\n  min-height: 88px; }\n\n.header-secondary {\n  min-height: 58px;\n  display: flow-root;\n  border-top: 1px #fff solid; }\n\n.header-secondary, .header-primary {\n  border-bottom: 1px #E6E6E6 solid; }\n\n.navbar-content, .header-primary, .header-secondary {\n  min-width: 1000px;\n  width: 99%; }\n\n.school-name h1 {\n  margin-top: 25px;\n  margin-bottom: 7px;\n  padding-right: 22px;\n  border-right: 1px #E6E6E6 solid; }\n\n.school-name p {\n  font-size: 13px;\n  font-family: openLight;\n  color: #A5A5A5;\n  letter-spacing: 0.2px; }\n  .school-name p span {\n    font-weight: normal; }\n\n.module-name {\n  margin: 5px 0 5px 0;\n  padding-left: 0; }\n\n.header-year li a:hover, .header-periods li a:hover, .header-roles li a:hover {\n  background-color: #00ACEC;\n  color: #f7f7f7 !important; }\n\n.header-year li a:active, .header-periods li a:active, .header-roles li a:active {\n  background-color: #0F3C64; }\n\n.header-periods, .header-year, .header-roles, .header-return, .avatar {\n  margin-top: 10px;\n  margin-bottom: 5px; }\n\n.header-return {\n  margin-top: 8px; }\n\n.header-year div, .header-periods div, .header-roles div {\n  border: none;\n  border-radius: 0;\n  border-right: 1px #E6E6E6 solid;\n  padding-right: 23px; }\n\n.header-periods {\n  padding-left: 11px; }\n\n.header-roles div {\n  border-left: 1px #E6E6E6 solid; }\n\nli a, .header-periods li a, .header-roles li a, .header-year div, .header-periods div, .header-roles div {\n  color: #B6B6B6;\n  font-size: 14px;\n  font-weight: 200; }\n\n.avatar-default {\n  padding: 0;\n  zoom: 1; }\n\n.avatar-default, .avatarPopover, .avatarPopover img, .notificationMessage img {\n  border-radius: 50%; }\n\n.avatarPopover {\n  width: 102px;\n  height: 102px;\n  float: left;\n  margin: 17px;\n  margin-top: -20px;\n  position: relative;\n  overflow: hidden; }\n  .avatarPopover img {\n    margin-left: -12px;\n    margin-top: -6px;\n    width: 100px;\n    height: 100px; }\n  .avatarPopover div {\n    display: table;\n    overflow: hidden;\n    font-size: 13px;\n    margin-left: -12px;\n    margin-top: -39px;\n    padding-top: 6px;\n    width: 100px;\n    height: 50px;\n    color: #E6E6E6;\n    background-color: rgba(101, 101, 101, 0.5);\n    float: left;\n    border-bottom-left-radius: 9em;\n    border-bottom-right-radius: 9em;\n    position: relative;\n    -webkit-transition: background-color 0.1s ease-in-out, color 0.2s ease-in-out;\n    -webkit-transition-timing-function: linear;\n    transition: background-color 0.1s ease-in-out, color 0.2s ease-in-out;\n    transition-timing-function: linear; }\n    .avatarPopover div:hover {\n      color: #00ACEC; }\n    .avatarPopover div:active {\n      color: #0F3C64; }\n  .avatarPopover:hover img {\n    cursor: default !important; }\n\n.exitPopover, .notificationAll {\n  display: block;\n  text-align: right;\n  padding: 19px 29px;\n  margin: 0px;\n  border-top-right-radius: 0;\n  border-top-left-radius: 0;\n  border-bottom-right-radius: 5px;\n  border-bottom-left-radius: 5px;\n  background-color: #F7F7F7; }\n  .exitPopover:hover, .notificationAll:hover {\n    background-color: #D5D5D5;\n    border-color: #D5D5D5; }\n  .exitPopover:active, .notificationAll:active {\n    background: #95989A;\n    border-color: #95989A;\n    color: #fff; }\n\n.namePopover, .emailPopover {\n  margin-left: 30%;\n  display: block; }\n\n.rolesPopover {\n  margin-left: 33%;\n  display: table; }\n\n.emailPopover {\n  font-size: 12px; }\n\n.namePopover {\n  font-size: 18px;\n  margin-top: 40px;\n  margin-left: 30%; }\n\n.rolesPopover {\n  padding: 1px 9px;\n  border-radius: 50px;\n  margin-right: 25%;\n  margin-bottom: 20px;\n  cursor: default;\n  height: 25px;\n  width: auto;\n  min-width: 150px; }\n\n.gearPopover {\n  float: right;\n  margin-top: -2px;\n  margin-right: 10px;\n  color: #B6B6B6; }\n  .gearPopover:hover {\n    color: #D5D5D5; }\n  .gearPopover:active {\n    color: #95989A; }\n\n.notification-icon, .avatar-default, .notificationMessage img {\n  width: 50px;\n  height: 50px;\n  margin: 10px; }\n\n.notification-icon {\n  float: left;\n  padding: 0;\n  margin-top: 21.5px;\n  margin-right: -1px;\n  padding-left: 16px;\n  color: #B6B6B6;\n  display: none; }\n  .notification-icon div {\n    background-color: #EE6D52;\n    color: #FFFFFF;\n    border-radius: 3px;\n    font-size: 12px;\n    padding: 1px 6px;\n    margin-top: 18px;\n    margin-left: 15px;\n    float: right;\n    position: fixed;\n    width: 19px;\n    height: 19px; }\n\n.icon-notificacao {\n  font-size: 17px; }\n  .icon-notificacao:hover {\n    color: #797979; }\n  .icon-notificacao:active {\n    color: #95989A; }\n\n.school-name, .module-name {\n  float: left;\n  margin-left: 21px; }\n  .school-name .title, .module-name .title {\n    font-family: openSemibold; }\n  .school-name a, .module-name a {\n    font-family: openRegular;\n    font-weight: 100; }\n  .school-name h1, .module-name h1 {\n    color: #0F3C64;\n    font-family: openRegular; }\n\n.header-user, .header-roles, .header-return {\n  float: right; }\n\n.header-user {\n  margin-right: 75px;\n  padding-top: 8px; }\n  .header-user .avatar-default {\n    cursor: pointer; }\n\n.header-roles {\n  margin-right: 20px; }\n\n.header-return {\n  margin-right: 86px; }\n  .header-return .btn-default {\n    width: 69px;\n    height: 39px;\n    font-weight: 200;\n    padding-top: 8px;\n    border-radius: 8px;\n    border: 2px solid #b6b6b6; }\n    .header-return .btn-default:hover {\n      border: 2px solid #939393; }\n    .header-return .btn-default:active {\n      background: #939393;\n      border: 2px solid #939393; }\n\nspan .icon-calendario, span .icon-visualizar {\n  float: left;\n  margin-right: 12px;\n  font-size: 17px; }\n\nspan .icon-livro {\n  font-size: 15px; }\n\nspan .years {\n  position: relative;\n  top: 2px; }\n\nspan .group-discipline {\n  position: relative;\n  top: -6px;\n  padding-left: 10px; }\n\n.school-name .caret {\n  -webkit-transform: rotate(-90deg);\n  transform: rotate(-90deg);\n  margin-top: -2px;\n  font-weight: 200;\n  zoom: 0.9;\n  margin-left: 0px; }\n\np span small {\n  font-size: 85%;\n  top: -1px;\n  position: relative; }\n\nspan div {\n  padding-bottom: 0; }\n\n.notificationMessage {\n  color: #8F8F8F;\n  margin: 3px 3px;\n  padding: 9px;\n  height: 87px;\n  width: 342px;\n  text-align: inherit;\n  border-bottom: 1px #B5B5B5 solid;\n  transition: background-color 0.3s, background-color 0.3s; }\n  .notificationMessage img {\n    float: left;\n    margin-top: 0px; }\n  .notificationMessage span {\n    font-size: 11px; }\n  .notificationMessage p {\n    font-size: 14px; }\n  .notificationMessage:hover {\n    background-color: #D8F2FC;\n    transition: background-color 0.3s, background-color 0.3s; }\n\n.profile-name {\n  font-size: 12px;\n  color: #8F8F8F;\n  margin-left: 30px;\n  line-height: 1.6;\n  width: 400px;\n  display: inline; }\n  .profile-name div {\n    font-size: 14px;\n    color: #5A5D5F;\n    padding-left: 40px;\n    line-height: 2; }\n    .profile-name div:hover {\n      cursor: pointer;\n      background: #00ACEC;\n      color: #fff; }\n  .profile-name .student {\n    padding-left: 0; }\n\n.notificationAll {\n  text-align: center;\n  color: #7C7C7C; }\n\n.icon-check {\n  font-size: 5px;\n  font-weight: bold; }\n\n.module-name, .header-secondary, .navbar-content, .notificationMessage:hover {\n  color: #0F3C64;\n  font-family: openLight; }\n\n#userPopover {\n  color: #656565; }\n\n.help, .avatar, .avatarPopover, .avatarPopover img, .notificationMessage img, .exitPopover, .notificationAll, .gearPopover, .notification-icon, .avatar, .notificationMessage img, .notificationMessage {\n  cursor: pointer; }\n\n.header-year, .header-periods {\n  float: left;\n  padding-left: 10px; }\n\n.periods {\n  margin-top: 12px; }\n  .periods span div {\n    padding: 9px 22px 11px 11px;\n    height: 36px; }\n  .periods .icon-seta-drop {\n    top: -2px !important; }\n\n.header-periods span .icon-seta-drop {\n  top: -8px;\n  position: relative; }\n\n.header-periods .open .dropdown-menu {\n  min-width: 100%;\n  max-height: 450px;\n  overflow-x: hidden;\n  overflow-y: auto;\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n  line-height: 2; }\n\n.dropdown-menu > li > a {\n  line-height: 2;\n  text-align: left; }\n\n.header-year .open .dropdown-menu {\n  min-width: 100%;\n  margin-right: -5px;\n  border-top-left-radius: 0;\n  border-top-right-radius: 0; }\n\n.header-roles .open .dropdown-menu {\n  min-width: 100%; }\n\n.help {\n  float: right;\n  font-size: 11px;\n  color: #FFF;\n  border-radius: 50%;\n  border: #BFBFBF 2px solid;\n  background-color: #BFBFBF;\n  padding: 2px 4px 0px;\n  margin: -10px 10px;\n  text-align: center;\n  display: none; }\n  .help:hover {\n    border: #A7A7A7 2px solid; }\n  .help:active {\n    background-color: #A7A7A7; }\n\n.form-control:focus {\n  border: 0;\n  outline: 0;\n  box-shadow: none; }\n\n.icon-seta-drop {\n  font-size: 4px;\n  margin-left: 5px; }\n\n.empty-dropdown {\n  display: inline-block;\n  padding: 2px 12px;\n  margin-top: 3px;\n  font-size: 14px;\n  vertical-align: middle;\n  cursor: default; }\n  .empty-dropdown span {\n    float: left;\n    padding-right: 10px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__routes_menu__ = __webpack_require__("../../../../../src/app/routes/menu.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__routes_api_routes__ = __webpack_require__("../../../../../src/app/routes/api.routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_raven_js__ = __webpack_require__("../../../../raven-js/src/singleton.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_raven_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_raven_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_app_services_auth_auth_service__ = __webpack_require__("../../../../../src/app/services/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_app_services_metric_metric_service__ = __webpack_require__("../../../../../src/app/services/metric/metric.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_app_services_http_http_service__ = __webpack_require__("../../../../../src/app/services/http/http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ng2_device_detector__ = __webpack_require__("../../../../ng2-device-detector/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var NavbarComponent = (function () {
    function NavbarComponent(auth, http, router, location, metric, deviceInfo) {
        this.auth = auth;
        this.http = http;
        this.router = router;
        this.location = location;
        this.metric = metric;
        this.deviceInfo = deviceInfo;
        this.notification = [
            { message: 'Dummy User publicou a edição de dezembro da Revista FTD', date: '5 horas atrás' },
            { message: 'Dummy User publicou a edição de dezembro da Revista FTD', date: '5 horas atrás' },
            { message: 'Dummy User publicou a edição de dezembro da Revista FTD', date: '5 horas atrás' },
            { message: 'Dummy User publicou a edição de dezembro da Revista FTD', date: '5 horas atrás' },
            { message: 'Dummy User publicou a edição de dezembro da Revista FTD', date: '5 horas atrás' },
            { message: 'Dummy User publicou a edição de dezembro da Revista FTD', date: '5 horas atrás' },
        ];
        this.mouseover = false;
        this.avatar = '';
        this.isMobile = false;
        if ('includes' in Array()) {
            this.isMobile = ['ipad', 'iphone', 'ipod', 'android'].includes(deviceInfo.device);
        }
        else {
            this.isMobile = false;
        }
    }
    NavbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.events.subscribe(function (event) {
            _this.locationPath = _this.location.path();
            if (_this.auth.authenticated) {
                _this.avatar = (Object(__WEBPACK_IMPORTED_MODULE_9_lodash__["has"])(_this.auth.currentUser, 'info.person.avatar'))
                    ? _this.auth.currentUser.info.person.avatar : './assets/img/default_avatar.png';
                _this.setDropdownInfos();
            }
            if (event instanceof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* NavigationEnd */] && _this.auth.authenticated) {
                __WEBPACK_IMPORTED_MODULE_3__routes_menu__["a" /* MENU */].map(function (m) {
                    if (!m.submenu) {
                        if (m.routerLink === _this.locationPath.split('/')[1]) {
                            _this.moduleName = m.label;
                            _this.moduleLink = m.routerLink;
                            return;
                        }
                        else if (m.routerLink === 'dashboard/home') {
                            _this.moduleName = null;
                            _this.subModuleName = null;
                        }
                    }
                    else {
                        m.submenu.every(function (submenuItem) {
                            if (submenuItem.routerLink === _this.locationPath.replace('/', '')) {
                                _this.moduleName = submenuItem.label;
                                _this.moduleLink = submenuItem.routerLink;
                                return false;
                            }
                            return true;
                        });
                    }
                });
                var split = _this.locationPath.split('/');
                if (split[4]) {
                    _this.subModuleName = split[4];
                }
                else if (split[2]) {
                    _this.subModuleName = split[2];
                }
                else {
                    _this.subModuleName = null;
                }
                _this.subModuleName = (_this.subModuleName) ? _this.subModuleName.charAt(0).toUpperCase() + _this.subModuleName.slice(1) : null;
            }
        });
    };
    NavbarComponent.prototype.setDropdownInfos = function () {
        var currentUser = this.auth.currentUser;
        this.schoolName = currentUser.info.school_name.toLocaleUpperCase();
        this.years = currentUser.info.years;
        this.roles = currentUser.info.roles;
        this.periods = currentUser.info.periods;
        this.groups = currentUser.info.groups;
        this.yearChoise = this.years.find(function (y) { return y.id === currentUser.info.school_year_id; });
        this.rolesChoise = this.roles.find(function (r) { return r.id === currentUser.info.role_id; });
        this.periodsChoise = this.periods.find(function (p) { return p.id === currentUser.info.school_period_id; });
        this.groupsChoise = this.groups.find(function (g) { return g.id === currentUser.info.group_discipline_person_id; });
    };
    NavbarComponent.prototype.dropdownResource = function (url, body) {
        var _this = this;
        this.busy = this.http.post(url, body)
            .toPromise()
            .then(function (response) {
            _this.busy = _this.auth.updateCurrentUser(response.json().data, function () {
                // Notify Google Analytics after change user credentials
                _this.metric.notifyAnalytics();
                window.location.reload();
            });
        });
    };
    NavbarComponent.prototype.changeYear = function (year) {
        this.dropdownResource(__WEBPACK_IMPORTED_MODULE_4__routes_api_routes__["a" /* API_ROUTES */].user.years.url(), { id: year.id });
    };
    NavbarComponent.prototype.changePeriods = function (period) {
        this.dropdownResource(__WEBPACK_IMPORTED_MODULE_4__routes_api_routes__["a" /* API_ROUTES */].user.periods.url(), { id: period.id });
    };
    NavbarComponent.prototype.changeGroups = function (group) {
        this.dropdownResource(__WEBPACK_IMPORTED_MODULE_4__routes_api_routes__["a" /* API_ROUTES */].user.groups.url(), { id: group.id });
    };
    NavbarComponent.prototype.changeRoles = function (role) {
        this.dropdownResource(__WEBPACK_IMPORTED_MODULE_4__routes_api_routes__["a" /* API_ROUTES */].user.roles.url(), { id: role.id });
    };
    NavbarComponent.prototype.changePhoto = function () {
        console.info('changePhoto');
    };
    NavbarComponent.prototype.returnPage = function () {
        window.history.back();
    };
    NavbarComponent.prototype.logout = function () {
        __WEBPACK_IMPORTED_MODULE_5_raven_js__["setUserContext"]({});
        this.auth.signOut();
    };
    return NavbarComponent;
}());
NavbarComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-navbar-cnt',
        template: __webpack_require__("../../../../../src/app/components/navbar/navbar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/navbar/navbar.component.css"), __webpack_require__("../../../../../src/app/components/navbar/navbar.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_6_app_services_auth_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6_app_services_auth_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_8_app_services_http_http_service__["a" /* HttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8_app_services_http_http_service__["a" /* HttpService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common__["Location"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common__["Location"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_7_app_services_metric_metric_service__["a" /* MetricService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7_app_services_metric_metric_service__["a" /* MetricService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_10_ng2_device_detector__["a" /* Ng2DeviceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_10_ng2_device_detector__["a" /* Ng2DeviceService */]) === "function" && _f || Object])
], NavbarComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=navbar.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/notfound/notfound.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".notfound-content {\n\tcolor: #F76D8D;\n\ttext-align: center;\n\tmargin-top: 25%;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/notfound/notfound.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"notfound-content\">\n  <h2><strong>404</strong> NOT-FOUND-COMPONENT</h2>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/notfound/notfound.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotFoundComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var NotFoundComponent = (function () {
    function NotFoundComponent() {
    }
    return NotFoundComponent;
}());
NotFoundComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-notfound',
        template: __webpack_require__("../../../../../src/app/components/notfound/notfound.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/notfound/notfound.component.css")],
    })
], NotFoundComponent);

//# sourceMappingURL=notfound.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/sidebar/sidebar.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf='auth.authenticated'>\n\t<div class=\"sidebar-content\" [ngStyle]=\"{'min-width': largLogo + 'px'}\">\n\t\t<div class=\"logo\">\n\t\t\t<span class=\"icon-icon-ftd\" [routerLink]='[\"dashboard/home\"]' *ngIf=\"!selected\"> </span>\n\t\t\t<span class='ftd-logo' [routerLink]='[\"dashboard/home\"]' *ngIf=\"selected\"> \n\t\t\t<img src=\"./assets/img/logo.svg\" />\n\t\t\t</span>\n\t\t</div>\n\t\t<ng-container *ngIf='auth.activated'>\n\t\t<div class=\"closeMenu\" *ngIf=\"mouseover\" (mouseover)=\"mouseover=false\"></div>\n\t\t<div class=\"icon-seta-drop openTextMenu\" *ngIf=\"!selected\" (click)=\"toogleMenu()\"></div>\n\t\t<div class=\"cont\" (click)=\"toogleMenu()\">\n\t\t<div class=\"text-exit\" *ngIf=\"selected\">Esconder menu</div>\n\t\t<div class=\"icon-seta-drop closeTextMenu\" *ngIf=\"selected\"></div>\n\t\t</div>\n\t\t</ng-container>\n\t</div>\n\t<div class=\"sidebar-content-menu\" *ngIf='auth.activated'>\n\t\t<div class=\"menu\">\t\n\t\t\t<span *ngFor=\"let n of menu\">\n\t\t\t\t<div *ngIf='n.icon && n.roleGuard.indexOf(role.activeRole) > -1 && (isMobile && n.routerLink === \"publicacoes-recursos\" || !isMobile)' (mouseover)=\"select(n.label);\">\n\t\t\t\t\t<ng-container *ngIf=\"n.routerLink !== null\">\n\t\t\t\t\t\t<div (mouseover)=\"mouseover=true\" style=\"padding: 15px;\" [ngStyle]=\"{'min-width': larg + 'px'}\" [routerLink]=\"n.routerLink\" [routerLinkActive]=\"['active-router']\" class=\"{{ n.icon }}\" title=\"{{n.label}}\">\n\t\t\t\t\t\t\t<span (mouseover)=\"mouseover=false\" *ngIf=\"selected\" class=\"text-color\">{{n.label}}</span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</ng-container>\n\n\t\t\t\t\t<ng-container *ngIf=\"n.routerLink === null\">\n\t\t\t\t\t\t<div *ngIf=\"!n.externalLink\" (mouseover)=\"mouseover=true\" style=\"padding: 15px;\" [ngStyle]=\"{'min-width': larg + 'px'}\" class=\"{{ n.icon }}\" title=\"{{n.label}}\"\n\t\t\t\t\t\t\t[ngClass]=\"{ 'active-router' : isActivated(n.label) }\">\n\t\t\t\t\t\t\t<span (mouseover)=\"mouseover=false\" *ngIf=\"selected\" class=\"text-color\">{{n.label}}</span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div *ngIf=\"n.externalLink\" (mouseover)=\"mouseover=true\" (click)=\"openWindow(n.externalLink)\" style=\"padding: 15px;\" [ngStyle]=\"{'min-width': larg + 'px'}\" [routerLink]=\"n.routerLink\" class=\"{{ n.icon }}\" title=\"{{n.label}}\">\n\t\t\t\t\t\t\t<span (mouseover)=\"mouseover=false\" *ngIf=\"selected\" class=\"text-color\">{{n.label}}</span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</ng-container>\n\t\t\t\t\t\n\t\t\t\t\t<div class=\"submenu\" [ngClass]=\"{active: isActive(n.label)}\" [ngStyle]=\"{'left': sublarg + 'px'}\" (mouseover)=\"select(n.label);\" *ngIf='mouseover && n.submenu'>\n\t\t\t\t\t\t<div class=\"sub\" style=\"display:none;\" >\n\t\t\t\t\t\t\t<ul class=\"order\">\n\t\t\t\t\t\t\t\t<div *ngFor=\"let sub of n.submenu\">\n\t\t\t\t\t\t\t\t\t<li *ngIf='sub.roleGuard.indexOf(role.activeRole) > -1' [routerLink]=\"sub.routerLink\">{{sub.label}}</li>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div> \n\t\t\t</span>\n\t\t</div>\n\t\t<div class=\"icon-ftd-footer\" [ngStyle]=\"{'width': iconToogle + 'px'}\"></div>\n\t\t<div *ngIf='version' [ngStyle]=\"{'width': iconToogle + 'px'}\" class=\"version\">v.{{ version }}</div>\n\t</div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/sidebar/sidebar.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".sidebar-content {\n  width: 66px;\n  float: left;\n  top: 0;\n  position: fixed;\n  background: #ffffff;\n  height: 146px;\n  border-right: 1px #E6E6E6 solid;\n  z-index: 99;\n  border-bottom: 1px solid #E6E6E6; }\n  .sidebar-content .logo {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    height: 88px;\n    position: relative;\n    background: #fff;\n    z-index: 0;\n    cursor: pointer;\n    border-bottom: 1px solid #E6E6E6; }\n    .sidebar-content .logo .icon-icon-ftd {\n      cursor: pointer;\n      position: relative;\n      top: 20px;\n      left: 6px; }\n      .sidebar-content .logo .icon-icon-ftd:before {\n        zoom: 3; }\n    .sidebar-content .logo .ftd-logo {\n      text-align: center;\n      margin: 0 auto; }\n      .sidebar-content .logo .ftd-logo img {\n        width: 115px;\n        position: relative;\n        top: 8px; }\n\n.icon-Group-363:before {\n  color: #fff;\n  zoom: 3.8;\n  text-align: center;\n  position: relative;\n  top: 4px;\n  left: 4.2px; }\n\n.icon-logo-open:before {\n  zoom: 3.8;\n  color: #fff;\n  position: relative;\n  left: 14px;\n  top: 4px; }\n\n.sidebar-content-menu {\n  position: fixed;\n  background: #fff;\n  top: 146px;\n  height: 100%;\n  border-right: 1px #E6E6E6 solid;\n  z-index: 99;\n  min-width: 66px; }\n\nsection {\n  position: relative;\n  height: 100%; }\n\n.icon-seta-drop {\n  -webkit-transform: rotate(270deg);\n          transform: rotate(270deg);\n  zoom: 0.5;\n  color: #b3b3b3;\n  position: relative;\n  cursor: pointer;\n  left: 6px; }\n\n.cont {\n  padding: 12px;\n  cursor: pointer; }\n  .cont .text-exit {\n    font-size: 13px;\n    color: #828282;\n    width: 100px;\n    display: table;\n    margin-left: 60px;\n    margin-top: 10px; }\n\n.closeTextMenu {\n  -webkit-transform: rotate(90deg);\n          transform: rotate(90deg);\n  position: relative;\n  top: 175px;\n  left: 140px; }\n\n.icon-ftd-footer {\n  zoom: 1.2;\n  margin: 20px 6px;\n  text-align: center;\n  margin-top: -160px; }\n\n.version {\n  margin-top: -20px;\n  position: relative; }\n\n.menu-toggle {\n  position: relative;\n  float: left;\n  top: 30px;\n  left: 15px; }\n\n.menu .active-router span {\n  color: #00ACEC !important; }\n\n.menu {\n  height: 100%;\n  min-height: 650px;\n  border-bottom: 2px solid #fff; }\n  .menu span a div {\n    border-bottom: 1px solid #fff;\n    height: 65px; }\n    .menu span a div:before {\n      font-size: 17px; }\n  .menu div span {\n    font-family: openRegular;\n    font-size: 14px;\n    left: 11px;\n    position: relative;\n    vertical-align: super;\n    top: -1px;\n    color: #828282; }\n  .menu div:hover {\n    background: #EDF9FD;\n    color: #00ACEC !important;\n    outline: none; }\n    .menu div:hover .text-color {\n      color: #00ACEC !important; }\n  .menu span {\n    cursor: pointer; }\n\n.menu div:hover > span a div {\n  color: #0F3C64 !important; }\n  .menu div:hover > span a div:before {\n    color: #0F3C64; }\n\ndiv a {\n  color: #b3b3b3;\n  transition: color 0.6s; }\n  div a:hover {\n    color: #103d65;\n    cursor: pointer; }\n\n.submenu {\n  position: absolute;\n  width: 230px;\n  padding: 0 !important;\n  margin-top: -61px;\n  border: none !important; }\n  .submenu:hover {\n    background: #fff !important; }\n  .submenu .sub {\n    height: auto; }\n    .submenu .sub .order div {\n      height: auto !important; }\n\n.sub-container {\n  background: #fff; }\n\n.order {\n  padding-top: 5px;\n  list-style: none;\n  padding: 0;\n  margin-bottom: -1px;\n  padding-top: 5px;\n  border: 1px #E6E6E6 solid;\n  padding-bottom: 5px;\n  font-weight: 200; }\n  .order li {\n    padding: 15px;\n    font-size: 14px;\n    color: #828282 !important;\n    transition: color 0.6s; }\n    .order li:hover {\n      background: #EDF9FD;\n      color: #00ACEC !important;\n      cursor: pointer; }\n\n.icon-planejador {\n  padding: 16px !important;\n  padding-left: 18px !important; }\n\n.icon-publicacoes {\n  padding: 18px !important;\n  padding-right: 0 !important;\n  padding-top: 19px !important; }\n  .icon-publicacoes:before {\n    font-size: 16px !important;\n    padding-left: 0.3px; }\n\n.icon-pessoas {\n  padding: 18px !important;\n  padding-right: 0 !important;\n  padding-top: 20px !important;\n  font-size: 17px;\n  padding-left: 17px !important; }\n  .icon-pessoas .text-color {\n    top: -4px !important;\n    left: 5px !important; }\n\n.icon-aulas {\n  padding: 14px !important;\n  zoom: 1.11;\n  padding-top: 20px !important;\n  padding-right: 0 !important;\n  padding-left: 13.8px !important; }\n  .icon-aulas:before {\n    padding-left: 2.3px;\n    margin-right: -3.3px; }\n  .icon-aulas span {\n    top: -5px !important; }\n\n.icon-gestor {\n  padding-left: 18px !important;\n  color: #95989A;\n  padding-top: 18px !important;\n  zoom: 0.98;\n  padding-right: 0 !important; }\n  .icon-gestor:before {\n    padding-left: 1.5px; }\n\n.icon-arquivo {\n  padding: 20px !important;\n  padding-right: 0 !important;\n  font-size: 17px;\n  padding-left: 17px !important; }\n  .icon-arquivo .text-color {\n    top: -4px !important;\n    left: 5px !important; }\n\n.icon-leitores {\n  padding: 14px !important;\n  zoom: 1.11;\n  padding-top: 20px !important;\n  padding-right: 0 !important;\n  padding-left: 13.8px !important; }\n  .icon-leitores:before {\n    padding-left: 2.3px;\n    margin-right: -3.3px; }\n  .icon-leitores span {\n    top: -5px !important; }\n\n.active-router {\n  color: #00ACEC !important;\n  background: #EDF9FD !important;\n  outline: none; }\n  .active-router:hover {\n    outline: none; }\n\n.closeMenu {\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  background: #000;\n  opacity: 0;\n  z-index: -1; }\n\n.active {\n  color: blue;\n  outline: none;\n  list-style: none;\n  left: 65px; }\n  .active div {\n    display: block !important;\n    background: #fff !important; }\n\n@media only screen and (max-width: 1024px) {\n  /**/ }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/sidebar/sidebar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidebarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__routes_menu__ = __webpack_require__("../../../../../src/app/routes/menu.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_services_auth_auth_service__ = __webpack_require__("../../../../../src/app/services/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_app_services_role_role_service__ = __webpack_require__("../../../../../src/app/services/role/role.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__environments_version__ = __webpack_require__("../../../../../src/environments/version.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_device_detector__ = __webpack_require__("../../../../ng2-device-detector/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var SidebarComponent = (function () {
    function SidebarComponent(auth, role, location, _router, deviceInfo) {
        this.auth = auth;
        this.role = role;
        this.location = location;
        this._router = _router;
        this.deviceInfo = deviceInfo;
        this.isMobile = false;
        this.version = __WEBPACK_IMPORTED_MODULE_6__environments_version__["a" /* VERSION */];
        this.menu = __WEBPACK_IMPORTED_MODULE_3__routes_menu__["a" /* MENU */];
        this.isMobile = ['ipad', 'iphone', 'ipod', 'android'].includes(deviceInfo.device);
    }
    SidebarComponent.prototype.ngOnInit = function () { };
    SidebarComponent.prototype.select = function (item) {
        this.selectedw = (this.selectedw === item ? null : item);
    };
    SidebarComponent.prototype.isActive = function (item) {
        return this.selectedw === item;
    };
    SidebarComponent.prototype.toogleMenu = function (item) {
        if (this.selected = !this.selected) {
            this.largLogo = '256'; // '201';
            this.larg = '230'; // '201';
            this.sublarg = '255';
            if (!this.isMobile) {
                document.getElementById('ajusteDashMenu').style.marginLeft = '190px';
                document.getElementById('ajusteDashSection').style.marginLeft = '190px';
                document.getElementById('navbar-content').style.width = '89%';
            }
            this.iconToogle = '200';
        }
        else {
            this.largLogo = '54'; // '201';
            this.larg = '54';
            this.sublarg = '65';
            if (!this.isMobile) {
                document.getElementById('ajusteDashMenu').style.marginLeft = '0';
                document.getElementById('ajusteDashSection').style.marginLeft = '0';
                document.getElementById('navbar-content').style.width = '99%';
            }
            this.iconToogle = '0';
        }
    };
    SidebarComponent.prototype.onMouseOver = function (mouseover) {
        this.mouseover = true;
    };
    SidebarComponent.prototype.isActivated = function (label) {
        var currentUrl = this._router.url.toLowerCase();
        return (currentUrl.indexOf(label.toLowerCase()) === -1) ? false : true;
    };
    /**
     * Abrir link externo
     * @param {string} externalLink
     */
    SidebarComponent.prototype.openWindow = function (externalLink) {
        window.open(externalLink, '_blank');
    };
    return SidebarComponent;
}());
SidebarComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-sidebar-cnt',
        template: __webpack_require__("../../../../../src/app/components/sidebar/sidebar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/sidebar/sidebar.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4_app_services_auth_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_app_services_auth_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5_app_services_role_role_service__["a" /* RoleService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_app_services_role_role_service__["a" /* RoleService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common__["Location"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_common__["Location"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_7_ng2_device_detector__["a" /* Ng2DeviceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7_ng2_device_detector__["a" /* Ng2DeviceService */]) === "function" && _e || Object])
], SidebarComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=sidebar.component.js.map

/***/ }),

/***/ "../../../../../src/app/config/busy.config.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DEFAULT_CONFIG; });
var spinnerTemplate = "\n      <div class=\"spinner-background\">\n        <div class=\"spinner-center\">\n            <div class=\"spinner\">\n            <div class=\"spinner-wrapper\">\n                <div class=\"rotator\">\n                <div class=\"inner-spin\"></div>\n                <div class=\"inner-spin\"></div>\n                </div>\n            </div>\n            </div>\n          </div>\n      </div>\n    ";
var DEFAULT_CONFIG = {
    template: spinnerTemplate,
    delay: 200,
    minDuration: 600,
    backdrop: true,
    message: '',
    wrapperClass: ''
};
//# sourceMappingURL=busy.config.js.map

/***/ }),

/***/ "../../../../../src/app/modules/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#page {\n  display: -ms-grid;\n  display: grid;\n  width: 100%;\n  grid-template-areas: \"app-sidebar-cnt app-navbar-cnt\"\n                       \"app-sidebar-cnt  section\"\n                       \"app-sidebar-cnt  section\";\n  -ms-grid-rows: 50px 1fr 30px;\n      grid-template-rows: 50px 1fr 30px;\n  -ms-grid-columns: 65px 1fr;\n      grid-template-columns: 65px 1fr;\n}\n#page > app-sidebar-cnt {\n  grid-area: app-sidebar-cnt;\n  position: fixed;\n  height: 100%;\n  width: 65px;  \n  z-index: 9999;\n}\n#page > app-navbar-cnt {\n  grid-area: app-navbar-cnt;\n  background-color: #8ca0ff;\n  position: fixed;\n  min-height: 147px;\n  z-index: 2;\n}\n#page > section {\n  grid-area: section;\n}\n.app-component {\n    display: block;\n    margin-right: auto;\n    margin-left: auto;\n    width: 25em;\n    height: auto;\n    padding: 7px;\n    margin-top: 147px;\n}\n#ajusteDashMenu{\n  z-index: 1002 !important;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/modules/app.component.html":
/***/ (function(module, exports) {

module.exports = "<section id=\"page\">\n<app-sidebar-cnt id=\"sidebar\"></app-sidebar-cnt>\n<app-navbar-cnt id=\"ajusteDashMenu\"></app-navbar-cnt>\n\n<section id=\"sectionMainContent\">\n  <div class=\"main-content\" id=\"ajusteDashSection\">\n    <app-main-content></app-main-content>\n  </div>\n</section>\n</section>\n"

/***/ }),

/***/ "../../../../../src/app/modules/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_toastr_ng2_toastr__ = __webpack_require__("../../../../ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_toastr_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng2_toastr_ng2_toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_raven_js__ = __webpack_require__("../../../../raven-js/src/singleton.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_raven_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_raven_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_device_detector__ = __webpack_require__("../../../../ng2-device-detector/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_app_services_auth_auth_service__ = __webpack_require__("../../../../../src/app/services/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_app_services_metric_metric_service__ = __webpack_require__("../../../../../src/app/services/metric/metric.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var AppComponent = (function () {
    function AppComponent(auth, metric, router, route, deviceInfo, toastr, vRef) {
        this.auth = auth;
        this.metric = metric;
        this.router = router;
        this.route = route;
        this.deviceInfo = deviceInfo;
        /** @var title techincal title */
        this.title = 'Coruscant';
        /** @var route_module_id the route module id (defined at route config */
        this.route_module_id = 0;
        this.router.events.subscribe(function (event) {
            if (event instanceof __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* NavigationEnd */]) {
                // ga('set', 'page', event.urlAfterRedirects);
                // ga('send', 'pageview');
            }
        });
        toastr.setRootViewContainerRef(vRef);
        if (this.auth.authenticated === false) {
            this.router.navigate(['/']);
        }
    }
    AppComponent.prototype.isDeviceInvalid = function (OSName) {
        return (OSName) ?
            ['blackberry', 'windows-phone', 'ps4', 'vita', 'chromecast', 'apple-tv', 'google-tv'].includes(OSName)
            : false;
    };
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        var deviceInfo = this.deviceInfo;
        var browserVersion = Number(deviceInfo.browser_version.split('.')[0]);
        // console.log(deviceInfo);
        // console.log(this.isDeviceInvalid(deviceInfo.device));
        // Check if the browser is chrome and if is an valid os platform
        if ((deviceInfo.browser !== 'chrome') ||
            (deviceInfo.browser === 'chrome' && browserVersion < 57) ||
            (this.isDeviceInvalid(deviceInfo.device))) {
            if (['ipad', 'iphone', 'ipod', 'android'].includes(this.deviceInfo.device)) {
                this.router.navigate(['/publicacoes-recursos']);
            }
            else {
                this.router.navigate(['/incompativel']);
            }
        }
        if (this.auth.currentUser) {
            __WEBPACK_IMPORTED_MODULE_3_raven_js__["setUserContext"]({ username: this.auth.currentUser.info.username, id: this.auth.currentUser.user_id });
            __WEBPACK_IMPORTED_MODULE_3_raven_js__["setExtraContext"]({ session: this.auth.currentUser.info });
        }
        this.router.events.subscribe(function (event) {
            if (event instanceof __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* NavigationEnd */]) {
                var url_to = event.url.split('/')[1];
                _this.route_module_id = _this.resolveModuleIdFromRoute();
                // If change the module id
                if (_this.route_module_id !== _this.current_module_id) {
                    console.log("%cRegister Changing module: " + url_to + " - " + _this.route_module_id, 'background:#eee; padding:5px');
                    _this.current_module_id = _this.route_module_id;
                    _this.auth.setCurrentModuleId(_this.current_module_id);
                    // If is production env - track analytics
                    if (!Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["isDevMode"])()) {
                        _this.metric.notifyAnalytics();
                    }
                }
            }
        });
        this.getOS();
    };
    AppComponent.prototype.getOS = function () {
        var userAgent = window.navigator.userAgent, platform = window.navigator.platform, macosPlatforms = ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K'], windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE'];
        var os = null;
        if (macosPlatforms.indexOf(platform) !== -1) {
            os = 'Mac OS';
        }
        else if (windowsPlatforms.indexOf(platform) !== -1) {
            os = 'Windows';
            var btn = document.createElement("LINK");
            var att = document.createAttribute("href");
            att.value = '../assets/styles/windows.css';
            btn.setAttributeNode(att);
            document.head.appendChild(btn);
        }
        return os;
    };
    /**
     * Try retrieve the module_id form route definition
     * @return module_id the id of the module defined at the app routes file
    */
    AppComponent.prototype.resolveModuleIdFromRoute = function () {
        var root = this.router.routerState.snapshot.root;
        var module_id = 0;
        while (root) {
            if (root.children && root.children.length) {
                root = root.children[0];
            }
            else if (root.data && root.data['module_id']) {
                module_id = root.data['module_id'];
                root = false;
            }
            else {
                root = false;
            }
        }
        return module_id;
    };
    AppComponent.prototype.logout = function () {
        this.auth.signOut();
    };
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/modules/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/modules/app.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5_app_services_auth_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_app_services_auth_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_6_app_services_metric_metric_service__["a" /* MetricService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6_app_services_metric_metric_service__["a" /* MetricService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* ActivatedRoute */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4_ng2_device_detector__["a" /* Ng2DeviceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_ng2_device_detector__["a" /* Ng2DeviceService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_2_ng2_toastr_ng2_toastr__["ToastsManager"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ng2_toastr_ng2_toastr__["ToastsManager"]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewContainerRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewContainerRef"]) === "function" && _g || Object])
], AppComponent);

var _a, _b, _c, _d, _e, _f, _g;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/modules/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export RavenErrorHandler */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_hammerjs__ = __webpack_require__("../../../../hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_toastr_ng2_toastr__ = __webpack_require__("../../../../ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_toastr_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_ng2_toastr_ng2_toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_tixif_ngx_busy__ = __webpack_require__("../../../../tixif-ngx-busy/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_tixif_ngx_busy___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_tixif_ngx_busy__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ngx_bootstrap_tooltip__ = __webpack_require__("../../../../ngx-bootstrap/tooltip/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ng2_device_detector__ = __webpack_require__("../../../../ng2-device-detector/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ng2_pagination__ = __webpack_require__("../../../../ng2-pagination/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ng2_pagination___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_ng2_pagination__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_ngx_bootstrap__ = __webpack_require__("../../../../ngx-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_raven_js__ = __webpack_require__("../../../../raven-js/src/singleton.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_raven_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_raven_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_auth_auth_service__ = __webpack_require__("../../../../../src/app/services/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_metric_metric_service__ = __webpack_require__("../../../../../src/app/services/metric/metric.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_role_role_service__ = __webpack_require__("../../../../../src/app/services/role/role.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__services_toaster_toaster_service__ = __webpack_require__("../../../../../src/app/services/toaster/toaster.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__services_toaster_msg_service__ = __webpack_require__("../../../../../src/app/services/toaster/msg.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__services_toaster_friendly_errors__ = __webpack_require__("../../../../../src/app/services/toaster/friendly.errors.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__services_uploader_uploader_service__ = __webpack_require__("../../../../../src/app/services/uploader/uploader.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__services_useful_useful_service__ = __webpack_require__("../../../../../src/app/services/useful/useful.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/modules/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_navbar_navbar_component__ = __webpack_require__("../../../../../src/app/components/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__components_sidebar_sidebar_component__ = __webpack_require__("../../../../../src/app/components/sidebar/sidebar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__components_notfound_notfound_component__ = __webpack_require__("../../../../../src/app/components/notfound/notfound.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__components_midia_modal_midia_modal_component__ = __webpack_require__("../../../../../src/app/components/midia-modal/midia-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__app_component__ = __webpack_require__("../../../../../src/app/modules/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__routes_app_routes__ = __webpack_require__("../../../../../src/app/routes/app.routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__services_http_http_service__ = __webpack_require__("../../../../../src/app/services/http/http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__config_busy_config__ = __webpack_require__("../../../../../src/app/config/busy.config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__environments_version__ = __webpack_require__("../../../../../src/environments/version.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__services_useful_download_service__ = __webpack_require__("../../../../../src/app/services/useful/download.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
































__WEBPACK_IMPORTED_MODULE_12_raven_js__["config"]('https://89aa265089aa489b82c697f05d0e87d1@sentry.io/241130', {
    release: __WEBPACK_IMPORTED_MODULE_30__environments_version__["a" /* VERSION */],
    shouldSendCallback: function () {
        return (['coruscant-hml.nm.ftd.com.br', 'se.ftd.com.br'].indexOf(window.location.hostname) !== -1) && (!__WEBPACK_IMPORTED_MODULE_20__services_useful_useful_service__["a" /* UsefulService */].detectIE());
    },
})
    .install();
var RavenErrorHandler = (function () {
    function RavenErrorHandler() {
    }
    RavenErrorHandler.prototype.handleError = function (error) {
        var isTextResponse = (error.message && error.message.toLowerCase().indexOf('response') > -1);
        var isResponse = error instanceof __WEBPACK_IMPORTED_MODULE_5__angular_http__["g" /* Response */];
        ;
        console.error(error);
        if (!isTextResponse && !isResponse) {
            __WEBPACK_IMPORTED_MODULE_12_raven_js__["captureException"](error);
        }
    };
    return RavenErrorHandler;
}());

var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_26__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_21__dashboard_dashboard_component__["a" /* DashboardComponent */],
            __WEBPACK_IMPORTED_MODULE_22__components_navbar_navbar_component__["a" /* NavbarComponent */],
            __WEBPACK_IMPORTED_MODULE_23__components_sidebar_sidebar_component__["a" /* SidebarComponent */],
            __WEBPACK_IMPORTED_MODULE_24__components_notfound_notfound_component__["a" /* NotFoundComponent */],
            __WEBPACK_IMPORTED_MODULE_25__components_midia_modal_midia_modal_component__["a" /* MidiaModalComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["BrowserModule"],
            __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_27__routes_app_routes__["a" /* APP_ROUTES */],
            __WEBPACK_IMPORTED_MODULE_5__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_http__["d" /* JsonpModule */],
            __WEBPACK_IMPORTED_MODULE_7_tixif_ngx_busy__["BusyModule"].forRoot(__WEBPACK_IMPORTED_MODULE_29__config_busy_config__["a" /* DEFAULT_CONFIG */]),
            __WEBPACK_IMPORTED_MODULE_8_ngx_bootstrap_tooltip__["a" /* TooltipModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_6_ng2_toastr_ng2_toastr__["ToastModule"].forRoot(),
            __WEBPACK_IMPORTED_MODULE_11_ngx_bootstrap__["c" /* BsDropdownModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_10_ng2_pagination__["Ng2PaginationModule"],
            __WEBPACK_IMPORTED_MODULE_11_ngx_bootstrap__["g" /* PopoverModule */].forRoot()
        ],
        exports: [],
        providers: [
            __WEBPACK_IMPORTED_MODULE_17__services_toaster_msg_service__["a" /* MsgService */],
            __WEBPACK_IMPORTED_MODULE_18__services_toaster_friendly_errors__["a" /* FriendlyErrorsService */],
            __WEBPACK_IMPORTED_MODULE_13__services_auth_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_15__services_role_role_service__["a" /* RoleService */],
            __WEBPACK_IMPORTED_MODULE_28__services_http_http_service__["a" /* HttpService */],
            __WEBPACK_IMPORTED_MODULE_9_ng2_device_detector__["a" /* Ng2DeviceService */],
            __WEBPACK_IMPORTED_MODULE_16__services_toaster_toaster_service__["a" /* ToasterService */],
            __WEBPACK_IMPORTED_MODULE_19__services_uploader_uploader_service__["a" /* UploaderService */],
            __WEBPACK_IMPORTED_MODULE_14__services_metric_metric_service__["a" /* MetricService */],
            __WEBPACK_IMPORTED_MODULE_31__services_useful_download_service__["a" /* Download */],
            { provide: __WEBPACK_IMPORTED_MODULE_4__angular_common__["LocationStrategy"], useClass: __WEBPACK_IMPORTED_MODULE_4__angular_common__["PathLocationStrategy"] },
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ErrorHandler"], useClass: RavenErrorHandler },
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["LOCALE_ID"], useValue: 'pt-BR' }
        ],
        entryComponents: [__WEBPACK_IMPORTED_MODULE_25__components_midia_modal_midia_modal_component__["a" /* MidiaModalComponent */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_26__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/modules/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/modules/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var DashboardComponent = (function () {
    function DashboardComponent() {
    }
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-main-content',
        template: __webpack_require__("../../../../../src/app/modules/dashboard/dashboard.component.html")
    })
], DashboardComponent);

//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ "../../../../../src/app/routes/api.routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return API_ROUTES; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");

var host = __WEBPACK_IMPORTED_MODULE_0__environments_environment__["a" /* environment */].apiHost;
var API_ROUTES = {
    login: {
        url: function () {
            return host + "/login";
        }
    },
    logout: {
        url: function () {
            return host + "/logout";
        }
    },
    school: {
        index: {
            url: function (school_id) {
                return host + ("/school/" + (school_id ? school_id : ''));
            }
        },
        discipline: {
            url: function (discipline_id) {
                return host + ("/school/discipline/" + (discipline_id ? discipline_id : ''));
            }
        },
        holidays: {
            index: {
                url: function (school_holiday_id) {
                    return host + ("/school/holiday/" + (school_holiday_id ? school_holiday_id : ''));
                }
            },
        },
        event: {
            index: {
                url: function (event_id) {
                    return host + ("/event/" + (event_id ? event_id : ''));
                }
            },
        },
        holidayAll: {
            index: {
                url: function (school_year_id) {
                    return host + ("/school/holiday/all/" + (school_year_id ? school_year_id : ''));
                }
            },
        },
    },
    discipline: {
        index: {
            url: function (discipline_id) {
                return host + ("/discipline/" + (discipline_id ? discipline_id : ''));
            }
        },
    },
    user: {
        index: {
            url: function () {
                return host + "/user";
            }
        },
        years: {
            url: function () {
                return host + "/user/years";
            }
        },
        periods: {
            url: function () {
                return host + "/user/periods";
            }
        },
        groups: {
            url: function () {
                return host + "/user/groups";
            }
        },
        roles: {
            url: function () {
                return host + "/user/roles";
            }
        },
        sessions: {
            url: function () {
                return host + "/user/sessions";
            },
            renewed: {
                url: function () {
                    return host + "/user/sessions/renewed";
                }
            }
        },
        revalidation: {
            url: function () {
                return host + "/user/revalidation";
            }
        },
    },
    content: {
        favorite: {
            url: function () {
                return host + "/content/favorite";
            }
        },
        publications: {
            url: function () {
                return host + "/content/publications";
            }
        },
        resources: {
            url: function () {
                return host + "/content/resources";
            }
        },
        disciplines: {
            url: function () {
                return host + "/content/disciplines";
            }
        },
        license: {
            url: function () {
                return host + "/user/content/license";
            }
        },
    },
    planner: {
        map: {
            index: {
                url: function (map_id) {
                    return host + ("/planner/map/" + (map_id ? map_id : ''));
                }
            },
            rename: {
                url: function (map_id) {
                    return host + ("/planner/map/" + map_id + "/rename");
                }
            },
            toggleAssociation: {
                url: function (map_id) {
                    return host + ("/planner/map/" + map_id + "/toggleassociation");
                }
            },
            toggleShare: {
                url: function (map_id) {
                    return host + ("/planner/map/" + map_id + "/toggleshare");
                }
            },
            download: {
                url: function (map_id) {
                    return host + ("/planner/map/" + map_id + "/download");
                }
            }
        },
        sequence: {
            index: {
                url: function (sequence_id) {
                    return host + ("/planner/sequence/" + (sequence_id ? sequence_id : ''));
                }
            },
            rename: {
                url: function (sequence_id) {
                    return host + ("/planner/sequence/" + sequence_id + "/rename");
                }
            },
            file: {
                index: {
                    url: function (sequence_id, file_id) {
                        return host + ("/planner/sequence/" + sequence_id + "/file/" + (file_id ? file_id : ''));
                    }
                },
                toggleAssociation: {
                    url: function (sequence_id, file_id) {
                        return host + ("/planner/sequence/" + sequence_id + "/file/" + file_id + "/toggleassociation");
                    }
                },
            },
            download: {
                url: function (sequence_id, file_id) {
                    return host + ("/planner/sequence/" + sequence_id + "/file/" + file_id + "/download");
                }
            },
            toggleShare: {
                url: function (sequence_id) {
                    return host + ("/planner/sequence/" + sequence_id + "/toggleshare");
                }
            },
            duplicate: {
                url: function (sequence_id) {
                    return host + ("/planner/sequence/" + sequence_id + "/duplicate");
                }
            },
            class: {
                url: function (sequence_id, class_id) {
                    return host + ("/planner/sequence/" + sequence_id + "/class/" + (class_id ? class_id : ''));
                }
            },
            item: {
                url: function (sequence_id, item_id) {
                    return host + ("/planner/sequence/" + sequence_id + "/item/" + item_id);
                }
            },
            resource: {
                url: function (sequence_id, resource_id) {
                    return host + ("/planner/sequence/" + sequence_id + "/resource/" + (resource_id ? resource_id : ''));
                }
            },
            add: {
                url: function (map_id) {
                    return host + ("/planner/map/" + map_id + "/sequences/add");
                }
            },
            remove: {
                url: function (map_id) {
                    return host + ("/planner/map/" + map_id + "/sequences/remove");
                }
            }
        }
    },
    class: {
        index: {
            url: function (class_id) {
                return host + ("/class/" + (class_id ? class_id : ''));
            }
        },
        asset: {
            url: function (class_id) {
                return host + ("/class/" + class_id + "/asset");
            }
        },
        publish: {
            url: function (class_id) {
                return host + ("/class/" + class_id + "/publish");
            }
        },
        finish: {
            url: function (class_id) {
                return host + ("/class/" + class_id + "/finish");
            }
        },
        presence: {
            url: function (class_id) {
                return host + ("/class/" + class_id + "/presence");
            },
            enable: function (class_id) {
                return host + ("/class/" + class_id + "/presence/enable");
            },
            toggle: function (class_id, presence_id) {
                return host + ("/class/" + class_id + "/presence/" + presence_id + "/toggle");
            }
        },
    },
    calendar: {
        index: {
            url: function () {
                return host + "/calendar";
            }
        },
        months: {
            url: function () {
                return host + "/calendar/months";
            }
        },
        showICS: {
            url: function (person_id) {
                return host + ("/calendar/ics/person/" + person_id);
            }
        },
        exportICS: {
            url: function () {
                return host + ("/calendar/ics?date_start=" + (new Date().getFullYear() - 1) + "-01-01&date_end=" + new Date().getFullYear() + "-12-30");
            }
        },
    },
    event: {
        index: {
            url: function () {
                return host + "/group/discipline/event";
            }
        },
        types: {
            url: function () {
                return host + "/group/discipline/event/type";
            }
        }
    },
    group: {
        person: {
            index: {
                url: function () {
                    return host + "/group/discipline/person";
                }
            },
            teachers: {
                url: function () {
                    return host + "/group/discipline/person/teachers";
                }
            },
        },
        teacher: {
            url: function (group_discipline_id) {
                return host + ("/group/discipline/" + group_discipline_id + "/teacher");
            }
        },
        student: {
            index: {
                url: function () {
                    return host + "/group/discipline/student";
                }
            },
            presenceReport: {
                url: function (person_id) {
                    return host + ("/group/discipline/student/" + person_id + "/presence/report");
                }
            }
        },
        note: {
            index: {
                url: function (note_id) {
                    return host + ("/group/discipline/note/" + (note_id ? note_id : ''));
                }
            },
            togglepin: {
                url: function (note_id) {
                    return host + ("/group/discipline/note/" + note_id + "/togglepin");
                }
            }
        },
        planner: {
            show: {
                url: function (group_discipline_id) {
                    return host + ("/group/discipline/" + group_discipline_id + "/planner_map");
                },
            }
        }
    },
    gasp: {
        exam: {
            index: {
                url: function (exam_id) {
                    return host + ("/gasp/exam/" + (exam_id ? exam_id : ''));
                }
            },
            student: {
                url: function (exam_id) {
                    return host + ("/gasp/exam/student/" + (exam_id ? exam_id : ''));
                },
                respond: function (exam_id) {
                    return host + ("/gasp/exam/student/respond/" + exam_id);
                },
                finish: function (exam_id) {
                    return host + ("/gasp/exam/student/respond/" + exam_id + "/finish");
                },
                answer: function (exam_id, question_id) {
                    return host + ("/gasp/exam/student/respond/" + exam_id + "/answer/" + question_id);
                }
            },
            duplicate: {
                url: function (exam_id) {
                    return host + ("/gasp/exam/" + exam_id + "/duplicate");
                }
            },
            verison: {
                url: function (exam_id) {
                    return host + ("/gasp/exam/" + exam_id + "/version");
                }
            },
            ready: {
                url: function (exam_id) {
                    return host + ("/gasp/exam/" + exam_id + "/ready");
                }
            },
            apply: {
                url: function (exam_id) {
                    return host + ("/gasp/exam/" + exam_id + "/apply");
                }
            },
            question: {
                url: function (exam_id, exam_question_id) {
                    return host + ("/gasp/exam/" + exam_id + "/question/" + (exam_question_id ? exam_question_id : ''));
                }
            },
            examVersions: {
                url: function (exam_id, tab_selected) {
                    return host + ("/gasp/exam/" + exam_id + "/version/" + tab_selected);
                }
            },
            answer: {
                url: function (exam_student_id, answer_id) {
                    return host + ("/gasp/exam/" + exam_student_id + "/student/answer/" + (answer_id ? answer_id : ''));
                }
            },
            finishEvaluation: {
                url: function (exam_student_id) {
                    return host + ("/gasp/exam/" + exam_student_id + "/student");
                }
            },
            download: {
                url: function (exam_id, V) {
                    return host + ("/gasp/exam/" + exam_id + "/download");
                },
                answers: function (exam_id, V) {
                    return host + ("/gasp/exam/" + exam_id + "/download/answers");
                },
                student: function (exam_student_id, V) {
                    return host + ("/gasp/exam/" + exam_student_id + "/download/student");
                }
            }
        },
        question: {
            index: {
                url: function (question_id) {
                    return host + ("/gasp/question/" + (question_id ? question_id : ''));
                }
            },
            discipline: {
                url: function () {
                    return host + "/gasp/question/discipline";
                }
            },
            level: {
                url: function () {
                    return host + "/gasp/question/level";
                }
            },
            source: {
                url: function () {
                    return host + "/gasp/question/source";
                }
            },
            type: {
                url: function () {
                    return host + "/gasp/question/type";
                }
            },
            year: {
                url: function () {
                    return host + "/gasp/question/year";
                }
            },
            denounce: {
                url: function () {
                    return host + "/gasp/question/denounce";
                }
            },
        }
    },
    person: {
        index: {
            url: function (person_id) {
                return host + ("/person/" + (person_id ? person_id : ''));
            }
        },
        avatar: {
            url: function (person_id) {
                return host + ("/person/" + (person_id ? person_id : '') + "/avatar");
            }
        },
        address: {
            store: {
                url: function (person_id) {
                    return host + ("/person/" + (person_id ? person_id : '') + "/address");
                }
            },
            update: {
                url: function (address_id) {
                    return host + ("/person/address/" + (address_id ? address_id : ''));
                }
            }
        },
        phone: {
            url: function (person_id) {
                return host + ("/person/" + (person_id ? person_id : '') + "/phone");
            }
        },
        password: {
            url: function () {
                return host + "/person/password";
            }
        },
        teacher: {
            students: {
                url: function (teacher_id) {
                    return host + ("/person/" + (teacher_id ? teacher_id : '') + "/students");
                }
            },
        },
        codex: {
            url: function () {
                return host + "/person/codex";
            }
        },
    },
    metric: {
        url: function () {
            return host + "/analytics/event-logs";
        }
    },
    file: {
        index: {
            url: function (file_id) {
                return host + ("/file/manager/" + (file_id ? file_id : ''));
            }
        },
        person: {
            url: function () {
                return host + "/file/manager/person";
            }
        },
        share: {
            url: function () {
                return host + "/file/manager/share";
            }
        },
        folder: {
            url: function (folder_id) {
                return host + ("/file/manager/folder/" + (folder_id ? folder_id : ''));
            }
        },
        group: {
            url: function (group_discipline_id) {
                return host + ("/file/manager/person/share?group_discipline_id=" + (group_discipline_id ? group_discipline_id : ''));
            }
        }
    },
    state: {
        url: function () {
            return host + "/state";
        }
    },
    city: {
        url: function (city_code) {
            return host + ("/city/" + (city_code ? city_code : ''));
        }
    },
    phone: {
        url: function () {
            return host + "/phone/type";
        }
    },
    integration_partners: {
        files: {
            url: function () {
                // return host + `/integration_partners/files/${id ? id : ''}`;
                return host + "/integration-partners/files";
            }
        },
    },
    education: {
        year: {
            url: function () {
                return host + "/education/year";
            },
        }
    },
    uc: {
        tags: {
            url: function () {
                return host + "/universal_classification/tags";
            },
        }
    }
};
//# sourceMappingURL=api.routes.js.map

/***/ }),

/***/ "../../../../../src/app/routes/app.routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return APP_ROUTES; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_notfound_notfound_component__ = __webpack_require__("../../../../../src/app/components/notfound/notfound.component.ts");


var ROUTES = [
    { path: '', redirectTo: 'login', pathMatch: 'full', data: { module_id: 0 } },
    { path: 'login', loadChildren: 'app/modules/login/login.module#LoginModule', data: { module_id: 0 } },
    { path: 'dashboard', loadChildren: 'app/modules/dashboard/dashboard.module#DashboardModule', data: { module_id: 0 } },
    { path: 'aula', loadChildren: 'app/modules/classroom/classroom.module#ClassroomModule', data: { module_id: 4 } },
    { path: 'planejador', loadChildren: 'app/modules/planner/planner.module#PlannerModule', data: { module_id: 3 } },
    { path: 'publicacoes-recursos', loadChildren: 'app/modules/content/content.module#ContentModule', data: { module_id: 6 } },
    { path: 'central-turma', loadChildren: 'app/modules/persona/persona.module#PersonaModule', data: { module_id: 8 } },
    { path: 'configuracoes', loadChildren: 'app/modules/settings/settings.module#SettingsModule', data: { module_id: 22 } },
    { path: 'atividades', loadChildren: 'app/modules/gasp/gasp.module#GaspModule', data: { module_id: 20 } },
    { path: 'arquivos', loadChildren: 'app/modules/file/file.module#FileModule', data: { module_id: 11 } },
    { path: 'incompativel', loadChildren: 'app/modules/dummy/dummy.module#DummyModule', data: { module_id: 0 } },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_1__components_notfound_notfound_component__["a" /* NotFoundComponent */], pathMatch: 'full', data: { module_id: 0 }, }
];
var APP_ROUTES = __WEBPACK_IMPORTED_MODULE_0__angular_router__["d" /* RouterModule */].forRoot(ROUTES);
//# sourceMappingURL=app.routes.js.map

/***/ }),

/***/ "../../../../../src/app/routes/menu.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MENU; });
var MENU = [
    {
        label: 'Início',
        routerLink: 'dashboard/home',
        submenu: null,
    },
    {
        label: 'Configurações',
        routerLink: 'configuracoes',
        submenu: null
    },
    {
        icon: 'icon-publicacoes',
        label: 'Publicações e Recursos',
        tooltip: 'Publicações e Recursos',
        routerLink: 'publicacoes-recursos',
        submenu: null,
        roleGuard: ['STUD', 'COOR', 'TCHT', 'TECS', 'SCRT', 'ADMH', 'PRNC']
    },
    {
        icon: 'icon-planejador',
        label: 'Planejador de Aulas',
        tooltip: 'Planejador de Aulas',
        routerLink: 'planejador',
        submenu: null,
        roleGuard: ['TCHT', 'COOR', 'COOR', 'SCRT', 'ADMH', 'PRNC']
    },
    {
        icon: 'icon-aulas',
        label: 'Aula',
        tooltip: 'Aula',
        routerLink: 'aula',
        submenu: null,
        roleGuard: ['STUD', 'COOR', 'TCHT', 'TECS', 'SCRT', 'ADMH', 'PRNC']
    },
    {
        icon: 'icon-gestor',
        label: 'Atividades',
        tooltip: 'Atividades',
        routerLink: null,
        submenu: [{
                label: 'Biblioteca de Atividades',
                tooltip: 'Biblioteca de Atividades',
                routerLink: 'atividades/biblioteca',
                roleGuard: ['COOR', 'TCHT', 'TECS', 'SCRT', 'ADMH']
            }, {
                label: 'Atividades Aplicadas',
                tooltip: 'Atividades Aplicadas',
                routerLink: 'atividades/aplicadas',
                roleGuard: ['STUD', 'COOR', 'TCHT', 'ADMH', 'PRNC']
            }],
        roleGuard: ['STUD', 'COOR', 'TCHT', 'ADMH', 'PRNC']
    },
    {
        icon: 'icon-pessoas',
        label: 'Central da Turma',
        tooltip: 'Central da Turma',
        routerLink: 'central-turma',
        submenu: null,
        roleGuard: ['STUD', 'PARN', 'TCHT', 'COOR', 'SCRT', 'ADMH', 'PRNC']
    },
    {
        icon: 'icon-arquivo',
        label: 'Arquivos',
        tooltip: 'Arquivos',
        routerLink: 'arquivos',
        submenu: null,
        roleGuard: ['STUD', 'COOR', 'TCHT', 'ADMH']
    },
    {
        icon: 'icon-leitores',
        label: 'Leitores',
        tooltip: 'Leitores',
        routerLink: null,
        externalLink: 'http://leitores.ftd.com.br/',
        submenu: null,
        roleGuard: ['STUD', 'COOR', 'TCHT', 'ADMH']
    },
];
//# sourceMappingURL=menu.js.map

/***/ }),

/***/ "../../../../../src/app/services/auth/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__routes_api_routes__ = __webpack_require__("../../../../../src/app/routes/api.routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_device_detector__ = __webpack_require__("../../../../ng2-device-detector/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AuthService = (function () {
    function AuthService(http, router, deviceInfo) {
        this.http = http;
        this.router = router;
        this.deviceInfo = deviceInfo;
        this.apiUrl = __WEBPACK_IMPORTED_MODULE_3__routes_api_routes__["a" /* API_ROUTES */].login.url();
        this.options = { headers: new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]() };
        this.user = null;
        this.current_module_id = 0;
        this.brands = ['se', 'trilhas', 'sme', 'sim', 'integra'];
    }
    Object.defineProperty(AuthService.prototype, "currentModuleId", {
        // Return the current module id
        get: function () {
            return this.current_module_id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthService.prototype, "authenticated", {
        // Returns true if user is logged in
        get: function () {
            return this.currentUser !== null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthService.prototype, "activated", {
        // Returns true if user has activated the codex to the current school year
        get: function () {
            if (this.currentUser) {
                return this.currentUser.info.school_year_activated;
            }
            return false;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthService.prototype, "currentUser", {
        // Try load from localStorage and return current user data
        get: function () {
            if (this.user === null) {
                return this.user = localStorage.hasOwnProperty('currentUser') ? JSON.parse(localStorage.getItem('currentUser')) : null;
            }
            return this.user;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Return the brand (selo, marca, produto) of the current user (see parseUserBrand method)
     *
     * @return user_brand an string that describes the user brand
    */
    AuthService.prototype.getUserBrand = function () {
        if (this.user_brand) {
            return this.user_brand;
        }
        return this.user_brand = this.parseUserBrand();
    };
    /**
     * Define the user brand based on url_logout value stored at localStorage. These value depends of each skin the user was come from.
     * The user authenticates from different skins, each skin is dedicated to one brand (selo), when the skin redirects the user to the system,
     * it should define a logout url, where the system will send the user after logout. We are parsing the url_logout to define
     * the user brand (the first domain definition).
     *
     * @return brand an string that describes the user brand
    */
    AuthService.prototype.parseUserBrand = function () {
        if (localStorage.url_logout) {
            var url = localStorage.url_logout;
            url = url.replace('http://', '').replace('https://', '');
            var brand = url.split('.')[0];
            if (brand in this.brands) {
                return brand;
            }
        }
        return this.brands[0];
    };
    AuthService.prototype.emailLogin = function (username, password, schoolcode, provider) {
        var request = {
            username: username,
            password: password,
            schoolcode: schoolcode,
            provider: (provider) ? provider : 'local'
        };
        return this.http.post(this.apiUrl, request, { headers: new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]() }).toPromise();
    };
    /**
     * Define the current module id
     * @param module_id
    */
    AuthService.prototype.setCurrentModuleId = function (module_id) {
        return this.current_module_id = module_id;
    };
    AuthService.prototype.setCurrentUser = function (user) {
        localStorage.setItem('currentUser', JSON.stringify(user));
        this.user = user;
    };
    AuthService.prototype.destroyCurrentUser = function () {
        localStorage.clear();
        this.user = null;
    };
    // Login an user with a session token created previously, in general to enable login from another domain (skins)
    AuthService.prototype.previousTokenLogin = function (token, url_logout) {
        var _this = this;
        this.options.headers.set('Authorization', "Bearer " + token);
        return this.http.post(__WEBPACK_IMPORTED_MODULE_3__routes_api_routes__["a" /* API_ROUTES */].user.sessions.renewed.url(), null, this.options)
            .toPromise()
            .then(function (response) {
            var user = response.json().data;
            if (user && user.token) {
                if (url_logout) {
                    localStorage.setItem('url_logout', url_logout);
                }
                return _this.updateCurrentUser(user);
            }
        })
            .catch(function (err) {
            return err;
        });
    };
    AuthService.prototype.updateCurrentUser = function (user, callback) {
        var _this = this;
        if (callback === void 0) { callback = function () { }; }
        var options = { headers: new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]() };
        options.headers.set('Accept', "application/json");
        options.headers.set('Authorization', "Bearer " + user.token);
        var groupsObservable = this.http.get(__WEBPACK_IMPORTED_MODULE_3__routes_api_routes__["a" /* API_ROUTES */].user.groups.url(), options)
            .toPromise()
            .then(function (response) {
            user.info.groups = response.json().data;
        });
        var periodsObservable = this.http.get(__WEBPACK_IMPORTED_MODULE_3__routes_api_routes__["a" /* API_ROUTES */].user.periods.url(), options)
            .toPromise()
            .then(function (response) {
            user.info.periods = response.json().data;
        });
        var rolesObservable = this.http.get(__WEBPACK_IMPORTED_MODULE_3__routes_api_routes__["a" /* API_ROUTES */].user.roles.url(), options)
            .toPromise()
            .then(function (response) {
            user.info.roles = response.json().data;
        });
        var yearsObservable = this.http.get(__WEBPACK_IMPORTED_MODULE_3__routes_api_routes__["a" /* API_ROUTES */].user.years.url(), options)
            .toPromise()
            .then(function (response) {
            user.info.years = response.json().data;
        });
        return Promise.all([groupsObservable, periodsObservable, rolesObservable, yearsObservable])
            .then(function (response) {
            _this.setCurrentUser(user);
            if (window.location.pathname === '/login') {
                console.info({
                    title: 'LOGIN',
                    method: 'POST',
                    data: user
                });
                if (['ipad', 'iphone', 'ipod', 'android'].includes(_this.deviceInfo.device)) {
                    _this.router.navigate(['/publicacoes-recursos']);
                }
                else {
                    _this.router.navigate(['/dashboard/home']);
                }
            }
            callback();
        });
    };
    // Sends email allowing user to reset password
    AuthService.prototype.resetPassword = function (email) {
        return email;
    };
    // Logout
    AuthService.prototype.signOut = function () {
        if (this.user) {
            // kill api session token
            this.options.headers.set('Authorization', "Bearer " + this.currentUser.token);
            this.http.post(__WEBPACK_IMPORTED_MODULE_3__routes_api_routes__["a" /* API_ROUTES */].logout.url(), null, this.options)
                .toPromise()
                .catch(function (err) { });
        }
        var url_logout = localStorage.getItem('url_logout');
        this.destroyCurrentUser();
        if (url_logout) {
            window.location.replace(url_logout);
        }
        else {
            this.router.navigate(['/login']);
        }
    };
    return AuthService;
}());
AuthService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_6_ng2_device_detector__["a" /* Ng2DeviceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6_ng2_device_detector__["a" /* Ng2DeviceService */]) === "function" && _c || Object])
], AuthService);

var _a, _b, _c;
//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/http/http.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_throw__ = __webpack_require__("../../../../rxjs/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_throw__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__toaster_msg_service__ = __webpack_require__("../../../../../src/app/services/toaster/msg.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__toaster_friendly_errors__ = __webpack_require__("../../../../../src/app/services/toaster/friendly.errors.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__auth_auth_service__ = __webpack_require__("../../../../../src/app/services/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_lodash__);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var HttpService = (function (_super) {
    __extends(HttpService, _super);
    function HttpService(auth, toastr, friendlyErrorsService, backend, options, injector) {
        var _this = _super.call(this, backend, options) || this;
        _this.auth = auth;
        _this.toastr = toastr;
        _this.friendlyErrorsService = friendlyErrorsService;
        return _this;
    }
    HttpService.prototype.request = function (url, options) {
        url.headers.set('Content-Type', 'application/json');
        url.headers.set('Accept', 'application/json');
        if (this.auth.currentUser) {
            url.headers.set('Authorization', "Bearer " + this.auth.currentUser.token);
        }
        else {
            url.headers.delete('Authorization');
        }
        return _super.prototype.request.call(this, url, options).catch(this.catchAuthError(this));
    };
    HttpService.prototype.catchAuthError = function (self) {
        var _this = this;
        // we have to pass HttpService's own instance here as `self`
        return function (res) {
            if (res.status == 401 && ['session-not-found', 'unauthenticated'].includes(res.json().errors[0])) {
                // if not authenticated
                _this.auth.destroyCurrentUser();
                _this.auth.signOut();
            }
            if (res.status > 400) {
                var _errors = res.json().errors;
                if (__WEBPACK_IMPORTED_MODULE_9_lodash__["isArray"](_errors)) {
                    _errors.map(function (_e) {
                        _this.toastr.error(_this.friendlyErrorsService.error(_e), 'Um erro ocorreu');
                    });
                }
                else {
                    _this.toastr.error(_this.friendlyErrorsService.error(_errors), 'Um erro ocorreu');
                }
            }
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(res);
        };
    };
    return HttpService;
}(__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]));
HttpService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_8__auth_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__auth_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_6__toaster_msg_service__["a" /* MsgService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__toaster_msg_service__["a" /* MsgService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_7__toaster_friendly_errors__["a" /* FriendlyErrorsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__toaster_friendly_errors__["a" /* FriendlyErrorsService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["j" /* XHRBackend */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["j" /* XHRBackend */]) === "function" && _d || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* RequestOptions */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* RequestOptions */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"]) === "function" && _g || Object])
], HttpService);

var _a, _b, _c, _d, _f, _g;
//# sourceMappingURL=http.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/metric/metric.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MetricService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__routes_api_routes__ = __webpack_require__("../../../../../src/app/routes/api.routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_services_auth_auth_service__ = __webpack_require__("../../../../../src/app/services/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_app_services_http_http_service__ = __webpack_require__("../../../../../src/app/services/http/http.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MetricService = (function () {
    function MetricService(http, auth, location) {
        this.http = http;
        this.auth = auth;
        this.location = location;
        this.endpoint = __WEBPACK_IMPORTED_MODULE_3__routes_api_routes__["a" /* API_ROUTES */].metric.url();
        this.routes_disabled = ['login',];
    }
    Object.defineProperty(MetricService.prototype, "disabled_routes", {
        /**
         * a list of routes that should not notify metrics
        */
        get: function () {
            return this.routes_disabled;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Build a track id based on current user auth service object
     * @param metric_id a number that describe the metric_id
    */
    MetricService.prototype.buildTrackId = function (metric_id) {
        if (Object(__WEBPACK_IMPORTED_MODULE_2_lodash__["has"])(this.auth.currentUser, 'info.school_id')) {
            var track_id = [];
            try {
                track_id.push(Object(__WEBPACK_IMPORTED_MODULE_2_lodash__["has"])(this.auth.currentUser, 'application_id') ? this.auth.currentUser.application_id : 1); // Application
                track_id.push(this.auth.currentModuleId); // Module
                track_id.push((metric_id) ? metric_id : 1); // Metric
                track_id.push(Object(__WEBPACK_IMPORTED_MODULE_2_lodash__["has"])(this.auth.currentUser, 'info.school_id') ? this.auth.currentUser.info.school_id : 0); // School
                track_id.push(Object(__WEBPACK_IMPORTED_MODULE_2_lodash__["has"])(this.auth.currentUser, 'info.person_id') ? this.auth.currentUser.info.person_id : 0); // Person
                track_id.push(Object(__WEBPACK_IMPORTED_MODULE_2_lodash__["has"])(this.auth.currentUser, 'info.user_id') ? this.auth.currentUser.info.user_id : 0); // User
                track_id.push(Object(__WEBPACK_IMPORTED_MODULE_2_lodash__["has"])(this.auth.currentUser, 'info.role_id') ? this.auth.currentUser.info.role_id : 0); // Role
                track_id.push(Object(__WEBPACK_IMPORTED_MODULE_2_lodash__["has"])(this.auth.currentUser, 'info.education_level_id') ? this.auth.currentUser.info.education_level_id : 0); // Education Level
                track_id.push(Object(__WEBPACK_IMPORTED_MODULE_2_lodash__["has"])(this.auth.currentUser, 'info.education_year_id') ? this.auth.currentUser.info.education_year_id : 0); // Education Year
                track_id.push(Object(__WEBPACK_IMPORTED_MODULE_2_lodash__["has"])(this.auth.currentUser, 'info.discipline_id') ? this.auth.currentUser.info.discipline_id : 0); // Discipline
                track_id.push(Object(__WEBPACK_IMPORTED_MODULE_2_lodash__["has"])(this.auth.currentUser, 'info.group_id') ? this.auth.currentUser.info.group_id : 0); // Group
                track_id.push(Object(__WEBPACK_IMPORTED_MODULE_2_lodash__["has"])(this.auth.currentUser, 'info.school_year_id') ? this.auth.currentUser.info.school_year_id : 0); // School Year
                track_id.push(Object(__WEBPACK_IMPORTED_MODULE_2_lodash__["has"])(this.auth.currentUser, 'info.group_discipline_id') ? this.auth.currentUser.info.group_discipline_id : 0); // Group Discipline
            }
            catch (error) {
                return null;
            }
            return track_id.join('.');
        }
        return null;
    };
    /**
     * Notify the remote api about metric events (module access and user events)
     * @param event_type
     * @param metric_id
     * @param extra_data
    */
    MetricService.prototype.notifyApi = function (event_type, metric_id, extra_data) {
        event_type = (event_type) ? event_type : 2;
        metric_id = (metric_id) ? metric_id : 1;
        extra_data = (extra_data) ? extra_data : {};
        var track_id = this.buildTrackId(metric_id);
        var data = { 'event_type': event_type, 'track_id': track_id };
        if (event_type == 1) {
            data.extra_data = extra_data;
        }
        this.http.post(this.endpoint, data)
            .toPromise()
            .catch(function (error) {
        });
    };
    /**
     * Notify Google Analytics about page view
    */
    MetricService.prototype.notifyAnalytics = function () {
        if (this.disabled_routes.indexOf(this.location.path()) === -1 && this.auth.currentUser) {
            var track_id = this.buildTrackId();
            console.log({
                title: 'GOOGLE ANALYTICS',
                url: this.location.path(),
                method: 'GET',
                payload: {
                    user: this.auth.currentUser.info.person.name,
                    role: this.auth.currentUser.info.role,
                    school: this.auth.currentUser.info.school_name,
                    track_id: track_id
                }
            });
            ga('set', 'page', this.location.path());
            ga('set', 'location', window.location.href);
            ga('set', 'dimension1', this.auth.currentUser.info.school_name);
            ga('set', 'dimension2', this.auth.currentUser.info.role);
            ga('set', 'dimension3', this.auth.currentUser.info.person.name);
            ga('set', 'dimension4', track_id);
            ga('send', 'pageview');
        }
    };
    return MetricService;
}());
MetricService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5_app_services_http_http_service__["a" /* HttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_app_services_http_http_service__["a" /* HttpService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4_app_services_auth_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_app_services_auth_auth_service__["a" /* AuthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common__["Location"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common__["Location"]) === "function" && _c || Object])
], MetricService);

var _a, _b, _c;
//# sourceMappingURL=metric.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/role/role.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoleService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_services_auth_auth_service__ = __webpack_require__("../../../../../src/app/services/auth/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RoleService = (function () {
    function RoleService(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    RoleService.prototype.roleGate = function () {
        var url = this.router.url.split('/');
        //     'ADMN': // Administrador
        //     'COOR': // Coordenacao Pedagogica
        //     'PRNC': // Direcao
        //     'EDTR': // Editor
        //     'TCHT': // Professor
        //     'ADMH': // Administrador de grupo de escola
        //     'TECS': // TÃ©cnica da escola
        //     'SCRT': // Secretaria
        //     'PARN': // Pais / Responsaveis
        //     'STUD': // Aluno
        switch (url[1]) {
            case 'planejador':
                return this.activeRole !== ('STUD' || 'PARN' || 'TECS' || 'SCRT' || 'ADMH' || 'PRNC');
            case 'publicacoes-recursos':
                return this.activeRole !== ('STUD' || 'PARN' || 'TECS' || 'SCRT' || 'ADMH' || 'PRNC');
            case 'aula':
                return this.activeRole !== ('TECS' || 'SCRT' || 'ADMH' || 'PRNC');
            case 'atividades':
                var _gate = true;
                switch (url[2]) {
                    case 'biblioteca':
                        _gate = this.activeRole !== ('STUD' || 'PARN' || 'TECS' || 'SCRT' || 'ADMH' || 'PRNC');
                        break;
                    case 'aplicadas':
                        _gate = this.activeRole !== ('PARN' || 'TECS' || 'SCRT' || 'ADMH' || 'PRNC');
                        break;
                    case 'respondendo':
                        _gate = this.activeRole === 'STUD';
                        break;
                    case 'central-turma':
                        return this.activeRole !== ('STUD' || 'PARN' || 'PRNC' || 'COOR' || 'TCHT');
                }
                return _gate;
            default:
                return true;
        }
    };
    Object.defineProperty(RoleService.prototype, "activeRole", {
        get: function () {
            if (this.auth.currentUser !== null) {
                return this.auth.currentUser.info.role;
            }
            return null;
        },
        enumerable: true,
        configurable: true
    });
    return RoleService;
}());
RoleService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_app_services_auth_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_app_services_auth_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _b || Object])
], RoleService);

var _a, _b;
//# sourceMappingURL=role.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/toaster/friendly.errors.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FriendlyErrorsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FriendlyErrorsService = (function () {
    function FriendlyErrorsService() {
    }
    FriendlyErrorsService.prototype.error = function (error_code, default_message) {
        var error_message = default_message ? default_message : 'Não foi possível realizar a operação';
        switch (error_code) {
            case 'answer-exam-allowed':
                error_message = 'Resposta da atividade não permitida.';
                break;
            case 'asset-is-required':
                error_message = 'Item é requirido.';
                break;
            case 'cant-create-the-task':
                error_message = 'Não foi possível criar a tarefa.';
                break;
            case 'cant-store-the-event':
                error_message = 'Não foi possível salvar o evento.';
                break;
            case 'class-not-found':
                error_message = 'Aula não encontrada.';
                break;
            case 'credentials-not-found':
                error_message = 'Credenciais não encontradas.';
                break;
            case 'default-holidays-not-found':
                error_message = 'Feriados não encontrados.';
                break;
            case 'disciplines-not-found':
                error_message = 'Disciplinas não encontradas.';
                break;
            case 'duplicate-entry':
                error_message = 'Entrada duplicada.';
                break;
            case 'empty-school-year-list':
                error_message = 'Lista de ano letivo vazia.';
                break;
            case 'error-importing-holidays':
                error_message = 'Erro durante a importação de feriados.';
                break;
            case 'error-inserting-person':
                error_message = 'Erro ao inserir pessoa.';
                break;
            case 'error-on-creating-group-discipline-person':
                error_message = 'Erro ao inserir pessoa na turma.';
                break;
            case 'event-not-found':
                error_message = 'Evento não encontrado.';
                break;
            case 'events-not-found':
                error_message = 'Eventos não encontrados.';
                break;
            case 'exam-already-answered':
                error_message = 'Atividade já respondida.';
                break;
            case 'exam-already-applicated':
                error_message = 'Atividade já aplicada.';
                break;
            case 'exam-expired':
                error_message = 'Atividade expirada.';
                break;
            case 'exam-is-template':
                error_message = 'Modelo de atividade.';
                break;
            case 'exam-not-found':
                error_message = 'Atividade não encontrada.';
                break;
            case 'exam-not-is-template':
                error_message = 'Atividade não é um modelo.';
                break;
            case 'exam-question-not-found':
                error_message = 'Questão de atividade não encontrada.';
                break;
            case 'exam-student-not-found':
                error_message = 'Atividade de aluno não encontrada.';
                break;
            case 'exam-time-up':
                error_message = 'Tempo da atividade expirou.';
                break;
            case 'file-cant-be-stored':
                error_message = 'Arquivo não pode ser armazenado.';
                break;
            case 'file-not-found':
                error_message = 'Arquivo não encontrado.';
                break;
            case 'group-discipline-person-not-exist':
                error_message = 'Turma não existente.';
                break;
            case 'group-discipline-without-classes':
                error_message = 'A turma não tem aulas suficientes para aplicar esse mapa.';
                break;
            case 'group-not-found':
                error_message = 'Turma não encontrada.';
                break;
            case 'invalid-file':
                error_message = 'Arquivo inválido.';
                break;
            case 'invalid-school-year':
                error_message = 'Ano letivo inválido.';
                break;
            case 'invalid-track_id':
                error_message = 'Código de rastreio inválido.';
                break;
            case 'less-classes-than-sequences':
                error_message = 'Menos aulas que sequências.';
                break;
            case 'map-not-found':
                error_message = 'Mapa não encontrado.';
                break;
            case 'map-not-allowed':
                error_message = 'Acesso ao Mapa não permitido.';
                break;
            case 'map-not-published':
                error_message = 'Mapa não publicado.';
                break;
            case 'map-without-classes':
                error_message = 'Mapa sem aulas.';
                break;
            case 'map-without-sequences':
                error_message = 'Mapa sem sequências.';
                break;
            case 'not-allowed':
                error_message = 'Ação não permitida.';
                break;
            case 'not-created':
                error_message = 'Não foi possível criar.';
                break;
            case 'not-deleted':
                error_message = 'Não foi possível excluir.';
                break;
            case 'not-exist-questions':
                error_message = 'Questões inexistentes.';
                break;
            case 'note-not-found':
                error_message = 'Anotação não encontrada.';
                break;
            case 'presence-not-found':
                error_message = 'Presença não encontrada.';
                break;
            case 'question-already-added':
                error_message = 'Questão já adicionada.';
                break;
            case 'question-not-found':
                error_message = 'Questão não encontrada.';
                break;
            case 'resource-not-created':
                error_message = 'Não foi possível criar o recurso.';
                break;
            case 'resource-not-found':
                error_message = 'Recurso não foi encontrado.';
                break;
            case 'school-year-not-found':
                error_message = 'Ano escolar não foi encontrado.';
                break;
            case 'schools-not-found':
                error_message = 'Escolas não encontradas.';
                break;
            case 'sequence-class-not-found':
                error_message = 'Sequência da aula não encontrada.';
                break;
            case 'sequence-file-not-found':
                error_message = 'Arquivos de sequência não encontrada.';
                break;
            case 'sequence-file-not-saved':
                error_message = 'Não foi possível criar o arquivo da sequência.';
                break;
            case 'sequence-not-found':
                error_message = 'Não há sequência didática disponível.';
                break;
            case 'session-not-found':
                error_message = 'Sessão não encontrada.';
                break;
            case 'student-exam-not-found':
                error_message = 'Atividade do aluno não encontrada.';
                break;
            case 'user-already-exists':
                error_message = 'Usuário já existe.';
                break;
            case 'user-not-found':
                error_message = 'Usuário não encontrado.';
                break;
            case 'user-without-distribution-channel':
                error_message = 'Usuário sem canais de distribuição.';
                break;
            case 'version-limit-has-been-reached':
                error_message = 'Limite da versão alcançado.';
                break;
            case 'version-limited':
                error_message = 'Versão limitada.';
                break;
            case 'map-with-group-discipline-can-not-be-deleted':
                error_message = 'Mapa com turma associada não pode ser deletado';
                break;
            case 'content-cant-be-licensed':
                error_message = 'A publicação não pode ser vinculada!';
                break;
            case 'current_password_is_not_valid':
                error_message = 'Senha atual incorreta';
                break;
            case 'The current password field is required.':
                error_message = 'Campo current_password é obrigatório';
                break;
            case 'limit-file-exceeded':
                error_message = 'O tamanho máximo permitido é 20MB';
                break;
            case 'already-map-associated':
                error_message = 'Já há um mapa associado às aulas dessa matéria';
                break;
            case 'students-not-found':
            case 'not-exist-students':
                error_message = 'Não foi encontrado alunos para essa turma';
                break;
            case 'corrupted-auth-token':
            case 'invalid-auth-token':
            case 'expired-auth-token':
            case 'server-error':
                error_message = 'Houve um problema. Tente novamente.';
                break;
            case 'invalid-school-code':
            case 'empty-school':
                error_message = 'Acesso negado. Código da escola inválido.';
                break;
            case 'invalid-user':
            case 'invalid-credentials':
                error_message = 'Seu usuário ou senha estão incorretos.';
                break;
            case 'access-not-allowed':
                error_message = 'Acesso negado.';
                break;
            case 'school-with-no-year-list':
                error_message = 'Acesso negado. Ano letivo não cadastrado.';
                break;
            case 'school-with-no-group-disciplines':
                error_message = 'Acesso negado. Nenhuma turma cadastrada.';
                break;
            case 'empty-group-discipline':
            case 'empty-group-discipline-person':
                error_message = 'Acesso negado. Usuário sem turma.';
                break;
            case 'school-year-has-no-periods':
                error_message = 'Acesso negado. Período letivo incompleto.';
                break;
            case 'empty-school-year':
                error_message = 'Acesso negado. Ano escolar incompleto.';
                break;
            case 'invalid-school':
                error_message = 'Acesso negado. Código da escola inválido.';
                break;
            case 'persons-already-shared':
                error_message = 'Arquivo já compartilhado com a turma/aluno.';
                break;
        }
        return error_message;
    };
    return FriendlyErrorsService;
}());
FriendlyErrorsService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
], FriendlyErrorsService);

//# sourceMappingURL=friendly.errors.js.map

/***/ }),

/***/ "../../../../../src/app/services/toaster/msg.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MsgService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_toastr_ng2_toastr__ = __webpack_require__("../../../../ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_toastr_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ng2_toastr_ng2_toastr__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MsgService = (function () {
    function MsgService(toastr, toastOpts) {
        this.toastr = toastr;
        this.toastOpts = toastOpts;
        this.toastOpts.toastLife = 8000;
        this.toastOpts.positionClass = 'toast-bottom-right';
        this.toastOpts.showCloseButton = true;
    }
    MsgService.prototype.success = function (message, title) {
        this.toastr.success(message, title);
    };
    MsgService.prototype.info = function (message, title) {
        this.toastr.info(message, title);
    };
    MsgService.prototype.warning = function (message, title) {
        this.toastr.warning(message, title);
    };
    MsgService.prototype.error = function (message, title) {
        this.toastr.error(message, title);
    };
    return MsgService;
}());
MsgService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ng2_toastr_ng2_toastr__["ToastsManager"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ng2_toastr_ng2_toastr__["ToastsManager"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ng2_toastr_ng2_toastr__["ToastOptions"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ng2_toastr_ng2_toastr__["ToastOptions"]) === "function" && _b || Object])
], MsgService);

var _a, _b;
//# sourceMappingURL=msg.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/toaster/toaster.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export CustomOption */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToasterService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_toastr_ng2_toastr__ = __webpack_require__("../../../../ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_toastr_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ng2_toastr_ng2_toastr__);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var CustomOption = (function (_super) {
    __extends(CustomOption, _super);
    function CustomOption() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.animate = 'flyRight'; // you can pass any options to override defaults
        _this.newestOnTop = false;
        _this.showCloseButton = true;
        _this.dismiss = 'auto';
        _this.positionClass = 'toast-bottom-center';
        return _this;
    }
    return CustomOption;
}(__WEBPACK_IMPORTED_MODULE_1_ng2_toastr_ng2_toastr__["ToastOptions"]));

var ToasterService = (function (_super) {
    __extends(ToasterService, _super);
    function ToasterService() {
        /**
         * Setar ViewContainerRef em toda classe que usar este service.
         *
         * import { ViewContainerRef } from '@angular/core';
         * constructor (vcr: ViewContainerRef, private toastr: ToasterService) {
         *     toastr.setRootViewContainerRef(vcr);
         * }
         */
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.config = {
            dismiss: 'auto',
            enableHTML: false,
            titleClass: '',
            messageClass: '',
            toastLife: 3500,
            showCloseButton: false,
            positionClass: 'toast-bottom-right',
        };
        return _this;
    }
    ToasterService.prototype.call = function (type, message, title, options) {
        options = options ? options : this.config;
        switch (type) {
            case 'success':
                return _super.prototype.success.call(this, message, title, options);
            case 'error':
                return _super.prototype.error.call(this, message, title, options);
            case 'warning':
                return _super.prototype.warning.call(this, message, title, options);
            case 'info':
                return _super.prototype.info.call(this, message, title, options);
            default:
                return _super.prototype.custom.call(this, message, title, options);
        }
    };
    return ToasterService;
}(__WEBPACK_IMPORTED_MODULE_1_ng2_toastr_ng2_toastr__["ToastsManager"]));
ToasterService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
], ToasterService);

//# sourceMappingURL=toaster.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/uploader/uploader.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UploaderService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_file_upload__ = __webpack_require__("../../../../ng2-file-upload/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ng2_file_upload__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_services_auth_auth_service__ = __webpack_require__("../../../../../src/app/services/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// const URL = 'https://evening-anchorage-3159.herokuapp.com/api/';
var URL = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].apiHost + '/show-post';
var UploaderService = (function () {
    function UploaderService(auth) {
        this.auth = auth;
        this.uploader = new __WEBPACK_IMPORTED_MODULE_1_ng2_file_upload__["FileUploader"]({
            url: URL,
            maxFileSize: 31457280,
            authTokenHeader: 'Authorization',
            authToken: "Bearer " + this.auth.currentUser.token,
            method: 'POST',
            additionalParameter: { param: 'some param' },
            disableMultipart: false,
            removeAfterUpload: true
        });
    }
    return UploaderService;
}());
UploaderService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_app_services_auth_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_app_services_auth_auth_service__["a" /* AuthService */]) === "function" && _a || Object])
], UploaderService);

var _a;
//# sourceMappingURL=uploader.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/useful/download.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Download; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_services_http_http_service__ = __webpack_require__("../../../../../src/app/services/http/http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Download = (function () {
    function Download(http) {
        var _this = this;
        this.http = http;
        this.getFileNameByUrl = function (url) {
            var isFile = /\.[\w]{2,5}/g;
            var getFileName = /([\w\-]*(\.[\w]{2,5}))/gim;
            if (isFile.test(url)) {
                var match = url.match(getFileName);
                if (match && match.length) {
                    return match[match.length - 1];
                }
            }
        };
        this.saveAs = function (dataUrl, fileName) {
            if (dataUrl) {
                var a = document.createElement('a');
                a.setAttribute('href', dataUrl);
                a.setAttribute('download', fileName);
                document.body.appendChild(a);
                a.click();
                document.body.removeChild(a);
            }
            else {
                throw new Error('dataUrl is undefined.');
            }
        };
        this.toDataURL = function (url) {
            return _this.http.get(url, { responseType: __WEBPACK_IMPORTED_MODULE_2__angular_http__["h" /* ResponseContentType */].Blob })
                .toPromise()
                .then(function (response) { return response.blob(); })
                .then(function (blob) { return new Promise(function (resolve, reject) {
                var reader = new FileReader();
                reader.onloadend = function () { return resolve(reader.result); };
                reader.onerror = reject;
                reader.readAsDataURL(blob);
            }); });
        };
    }
    return Download;
}());
Download = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_app_services_http_http_service__["a" /* HttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_app_services_http_http_service__["a" /* HttpService */]) === "function" && _a || Object])
], Download);

var _a;
//# sourceMappingURL=download.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/useful/useful.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsefulService; });
var UsefulService = {
    detectIE: function () {
        var ua = window.navigator.userAgent;
        var msie = ua.indexOf('MSIE ');
        var trident = ua.indexOf('Trident/');
        var edge = ua.indexOf('Edge/');
        if (msie > 0 || trident > 0 || edge > 0) {
            return true;
        }
        // other browser
        return false;
    },
    handleResponse: function (res) {
        if (res.ok) {
            return res.json().data;
        }
        return Promise.reject(res.statusText);
    }
};
//# sourceMappingURL=useful.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false,
    apiHost: 'http://naboo-local.nm.ftd.com.br/api'
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/environments/version.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VERSION; });
var VERSION = __webpack_require__("../../../../../package.json").version;
//# sourceMappingURL=version.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_modules_app_module__ = __webpack_require__("../../../../../src/app/modules/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_modules_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ "../../../../webpack/hot ^\\.\\/log$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./log": "../../../../webpack/hot/log.js"
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "../../../../webpack/hot ^\\.\\/log$";

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("../../../../webpack-dev-server/client/index.js?http://localhost:4300");
module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map