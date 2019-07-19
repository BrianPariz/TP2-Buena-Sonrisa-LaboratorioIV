(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-principal></app-principal>\r\n<simple-notifications></simple-notifications>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/componentes/cabecera/cabecera.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/componentes/cabecera/cabecera.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg text-uppercase\" id=\"mainNav\">\r\n    <div class=\"container\">\r\n        <a class=\"navbar-brand mx-lg-1\" routerLink=\"\">Buena Sonrisa</a>\r\n        <button class=\"navbar-toggler navbar-toggler-right text-uppercase font-weight-bold text-white rounded\"\r\n            type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarResponsive\" aria-controls=\"navbarResponsive\"\r\n            aria-expanded=\"false\" id=\"btnMenuToggle\">\r\n            Menú\r\n            <i class=\"fa fa-bars\"></i>\r\n        </button>\r\n        <div class=\"collapse navbar-collapse\" id=\"navbarResponsive\">\r\n            <ul class=\"navbar-nav ml-auto\">\r\n                <!-- <li class=\"nav-item mx-0 mx-lg-1\"\r\n                    *ngIf=\"estaLogeado && administrador\">\r\n                    <a class=\"nav-link py-3 px-0 px-lg-3 rounded\" routerLink=\"/chat\">Chat</a>\r\n                </li> -->\r\n                <li class=\"nav-item mx-0 mx-lg-1\"\r\n                    *ngIf=\"estaLogeado && administrador\">\r\n                    <a class=\"nav-link py-3 px-0 px-lg-3 rounded\" routerLink=\"/administracion\">Administración</a>\r\n                </li>\r\n                <li class=\"nav-item mx-0 mx-lg-1\"\r\n                    *ngIf=\"estaLogeado && cliente\">\r\n                    <a class=\"nav-link py-3 px-0 px-lg-3 rounded\" routerLink=\"/turnos\">Turnos</a>\r\n                </li>\r\n                <li class=\"nav-item mx-0 mx-lg-1\" *ngIf=\"!estaLogeado\">\r\n                    <a class=\"nav-link py-3 px-0 px-lg-3 rounded\" routerLink=\"/registrarse\">Creá tu cuenta</a>\r\n                </li>\r\n                <li class=\"nav-item mx-0 mx-lg-1\" *ngIf=\"!estaLogeado\">\r\n                    <a class=\"nav-link py-3 px-0 px-lg-3 rounded\" routerLink=\"/logearse\">Ingresá</a>\r\n                </li>\r\n                <li class=\"nav-item mx-0 mx-lg-1\" *ngIf=\"estaLogeado\">\r\n                    <a class=\"nav-link py-3 px-0 px-lg-3 rounded\">\r\n                        <img src=\"{{usuarioService.usuario.ImagenUrl}}\" class=\"img-responsive user-img\">\r\n                        <span class=\"\">{{usuarioService.usuario.Nombre}}</span>\r\n                    </a>\r\n                </li>\r\n                <li class=\"nav-item mx-0 mx-lg-1\" *ngIf=\"estaLogeado\" (click)=\"Deslogearse()\">\r\n                    <a class=\"nav-link py-3 px-0 px-lg-3 rounded\" routerLink=\"\">Cerrar sesión</a>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n    </div>\r\n</nav>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/componentes/chat/chat.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/componentes/chat/chat.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"h-100 chat\">\r\n  <div class=\"container h-100\">\r\n    <div class=\"row justify-content-md-center h-100\">\r\n      <div class=\"card-wrapper\">\r\n        <div class=\"card fat\">\r\n          <div class=\"card-body\" style=\"text-align: center;\">\r\n            <form>\r\n              <ul *ngFor=\"let mensaje of mensajes | async\" class=\"ulChatUser\">\r\n\r\n                <li *ngIf=\"mensaje.UserUid != this.usuarioService.usuario.Uid; else liMe\">\r\n                  <div class=\"divChatUser\">\r\n                    <a class=\"nav-link py-3 px-0 px-lg-3 rounded\">\r\n                      <img src=\"{{mensaje.UrlImagen}}\" class=\"img-responsive user-img\">\r\n                      <span class=\"\">{{mensaje.Nombre}}: {{ mensaje.Mensaje }}</span>\r\n                    </a>\r\n                  </div>\r\n                </li>\r\n\r\n                <ng-template #liMe>\r\n                  <li>\r\n                    <div class=\"divChatUserMe\">\r\n                      <a class=\"nav-link py-3 px-0 px-lg-3 rounded\">\r\n                        <img src=\"{{mensaje.UrlImagen}}\" class=\"img-responsive user-img\">\r\n                        <span class=\"\">{{mensaje.Nombre}}: {{ mensaje.Mensaje }}</span>\r\n                      </a>\r\n                    </div>\r\n                  </li>\r\n                </ng-template>\r\n\r\n              </ul>\r\n\r\n              <mat-form-field class=\"example-full-width\">\r\n                <input matInput [(ngModel)]=\"this.mensaje.Mensaje\" name=\"inputMsj\" placeholder=\"Escribe tu mensaje..\"\r\n                  autofocus>\r\n              </mat-form-field>\r\n\r\n              <button mat-raised-button color=\"primary\" (click)=\"NuevoMensaje()\">Enviar</button>\r\n\r\n            </form>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/componentes/error404/error404.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/componentes/error404/error404.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"notfound\">\n  <div class=\"notfound\">\n    <div class=\"notfound-404\">\n      <h1>404</h1>\n    </div>\n    <h2>Uhh! no se encontró la página</h2>\n    <p>La página que estás buscando probablemente fue removida, su nombre cambió o está temporalmente inhabilitada. <a routerLink=\"\">Volver al inicio</a></p>\n  </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/componentes/inicio/inicio.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/componentes/inicio/inicio.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"notfound\">\r\n    <div class=\"notfound\">\r\n      <div class=\"notfound-404\">\r\n        <!-- <h1>Bienvenido a Buena Sonrisa</h1> -->\r\n      <h2>Bienvenido a Buena Sonrisa</h2>\r\n      </div>\r\n    </div>\r\n  </div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/componentes/lista-usuarios/lista-usuarios.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/componentes/lista-usuarios/lista-usuarios.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"h-100 mt-4\">\n  <div class=\"container h-100\">\n    <div class=\"row justify-content-md-center h-100\">\n\n      <mat-form-field>\n        <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filtrar\">\n      </mat-form-field>\n\n      <table mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\">\n\n        <ng-container matColumnDef=\"Imágen\">\n          <th mat-header-cell *matHeaderCellDef> Imágen </th>\n          <td mat-cell *matCellDef=\"let element\">\n            <a class=\"nav-link py-3 px-0 px-lg-3 rounded\">\n              <img src=\"{{element.ImagenUrl}}\" class=\"img-responsive user-img\">\n            </a>\n          </td>\n        </ng-container>\n\n        <!-- Nombre Column -->\n        <ng-container matColumnDef=\"Nombre\">\n          <th mat-header-cell *matHeaderCellDef> Nombre </th>\n          <td mat-cell *matCellDef=\"let element\"> {{element.Nombre}} </td>\n        </ng-container>\n\n        <!-- Email Column -->\n        <ng-container matColumnDef=\"Email\">\n          <th mat-header-cell *matHeaderCellDef> Email </th>\n          <td mat-cell *matCellDef=\"let element\"> {{element.Email}} </td>\n        </ng-container>\n\n        <!-- Perfil Column -->\n        <ng-container matColumnDef=\"Perfil\">\n          <th mat-header-cell *matHeaderCellDef> Perfil </th>\n          <td mat-cell *matCellDef=\"let element\"> {{element.Perfil}} </td>\n        </ng-container>\n\n        <ng-container matColumnDef=\"Activo\">\n          <th mat-header-cell *matHeaderCellDef> Activo </th>\n          <td mat-cell *matCellDef=\"let element\">\n            <button mat-flat-button color=\"primary\" *ngIf=\"!element.Activo\"\n              (click)=\"activarDesactivar(element.Uid)\">Activar</button>\n            <button mat-flat-button color=\"primary\" *ngIf=\"element.Activo\"\n              (click)=\"activarDesactivar(element.Uid)\">Desactivar</button>\n          </td>\n        </ng-container>\n\n        <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n        <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n      </table>\n    </div>\n  </div>\n</section>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/componentes/login/login.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/componentes/login/login.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"h-100 login-pagina\">\r\n  <div class=\"container h-100\">\r\n    <div class=\"row justify-content-md-center h-100\">\r\n      <div class=\"card-wrapper\">\r\n        <div class=\"brand\">\r\n          <img src=\"/assets/img/logoDentista.png\">\r\n        </div>\r\n        <div class=\"card fat\">\r\n          <div class=\"card-body\">\r\n            <h4 class=\"card-title\">Entrá a tu cuenta</h4>\r\n            <form (ngSubmit)=\"f.form.valid && Logearse()\" #f=\"ngForm\" novalidate>\r\n\r\n              <div class=\"form-group\">\r\n                <label for=\"email\">Dirección de Email</label>\r\n\r\n                <input id=\"email\" type=\"email\" class=\"form-control\" name=\"email\" [(ngModel)]=\"emailModel\"\r\n                #email=\"ngModel\" [ngClass]=\"{ 'is-invalid': f.submitted && email.invalid }\" required autofocus>\r\n                <div *ngIf=\"f.submitted && email.invalid\" class=\"invalid-feedback\">\r\n                  <div *ngIf=\"email.errors.required\">Ingrese el Email</div>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"form-group\">\r\n                <label for=\"password\">Contraseña\r\n                  <!-- <a href=\"forgot.html\" class=\"float-right\">\r\n                    Te olvidaste la contraseña?\r\n                  </a> -->\r\n                </label>\r\n                <input id=\"password\" type=\"password\" class=\"form-control\" name=\"password\" [(ngModel)]=\"passwordModel\"\r\n                #password=\"ngModel\" [ngClass]=\"{ 'is-invalid': f.submitted && password.invalid }\" required>\r\n                <div *ngIf=\"f.submitted && password.invalid\" class=\"invalid-feedback\">\r\n                  <div *ngIf=\"password.errors.required\">Ingrese la contraseña</div>\r\n                </div>\r\n              </div>\r\n\r\n              <form class=\"margin-bottom\">\r\n                <div class=\"custom-control custom-checkbox\">\r\n                  <input type=\"checkbox\" class=\"custom-control-input\" id=\"customCheck\" name=\"remember\">\r\n                  <label class=\"custom-control-label\" for=\"customCheck\">Recordarme</label>\r\n                </div>\r\n              </form>\r\n\r\n              <div class=\"form-group no-margin\">\r\n                <button type=\"submit\" class=\"btn btn-primary btn-block\">\r\n                  Ingresar\r\n                </button>\r\n              </div>\r\n              <div class=\"margin-top20 text-center\">\r\n                Todavía no tenés una cuenta? <a routerLink=\"/registrarse\">Creá tu cuenta</a>\r\n              </div>\r\n            </form>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/componentes/pie/pie.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/componentes/pie/pie.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <footer class=\"footer text-center\">\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n\r\n            <div class=\"col-lg-6 mb-5 mb-lg-0\">\r\n                <h4 class=\"text-uppercase mb-4\">Brian Pariz en la Web</h4>\r\n                <a class=\"btn btn-outline-light btn-social mx-1\" href=\"https://github.com/BrianPariz\" target=\"_blank\">\r\n                    <i class=\"fa fa-github\"></i>\r\n                </a>\r\n                <a class=\"btn btn-outline-light btn-social mx-1\"\r\n                    href=\"https://steamcommunity.com/profiles/76561198110052261/\" target=\"_blank\">\r\n                    <i class=\"fa fa-steam\"></i>\r\n                </a>\r\n                <a class=\"btn btn-outline-light btn-social mx-1\"\r\n                    href=\"https://www.linkedin.com/in/brian-pariz-585643143/\" target=\"_blank\">\r\n                    <i class=\"fa fa-linkedin\"></i>\r\n                </a>\r\n            </div>\r\n\r\n            <div class=\"col-lg-6\">\r\n                <h4 class=\"text-uppercase mb-4\">Acerca de Sala de Juego</h4>\r\n                <p class=\"lead mb-0\">Sala de Juegos es una página de juegos a la que cualquier persona puede acceder,\r\n                    creada por la <a class=\"color_primary\" href=\"http://www.fra.utn.edu.ar/\" target=\"_blank\">UTNFra</a>\r\n                    y mejorada por\r\n                    <a class=\"color_primary\" href=\"https://saladejuegos-brianpariz.000webhostapp.com/QuienSoy\">Brian\r\n                        Pariz</a>.</p>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</footer> -->\r\n\r\n<section class=\"copyright py-4 text-center text-white\">\r\n    <div class=\"container\">\r\n        <small>Copyright &copy; Sala de Juegos - Brian Pariz 2019</small>\r\n    </div>\r\n</section>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/componentes/principal/principal.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/componentes/principal/principal.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-cabecera></app-cabecera>\r\n\r\n<router-outlet></router-outlet>\r\n\r\n<!-- <app-pie></app-pie> -->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/componentes/registro/registro.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/componentes/registro/registro.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"h-100 registro-pagina\">\r\n  <div class=\"container h-100\">\r\n    <div class=\"row justify-content-md-center h-100\">\r\n      <div class=\"card-wrapper registro-pagina\">\r\n        <div class=\"brand\">\r\n          <img src=\"/assets/img/logoDentista.png\">\r\n        </div>\r\n        <div class=\"card fat\">\r\n          <div class=\"card-body\">\r\n            <h4 class=\"card-title\">Creá tu cuenta</h4>\r\n            <form (ngSubmit)=\"f.form.valid && acepTYC.valid && Registrarse()\" #f=\"ngForm\" novalidate>\r\n\r\n              <div class=\"form-group\">\r\n                <label for=\"name\">Nombre</label>\r\n                <input type=\"text\" class=\"form-control\" name=\"name\" id=\"name\" [(ngModel)]=\"nombreModel\"\r\n                  #name=\"ngModel\" [ngClass]=\"{ 'is-invalid': f.submitted && name.invalid }\" required autofocus>\r\n                <div *ngIf=\"f.submitted && name.invalid\" class=\"invalid-feedback\">\r\n                  <div *ngIf=\"name.errors.required\">Nombre requerido</div>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"form-group\">\r\n                <label for=\"email\">Dirección de Email</label>\r\n                <input type=\"email\" class=\"form-control\" name=\"email\" id=\"email\" [(ngModel)]=\"emailModel\"\r\n                  #email=\"ngModel\" [ngClass]=\"{ 'is-invalid': f.submitted && email.invalid }\" required>\r\n                <div *ngIf=\"f.submitted && email.invalid\" class=\"invalid-feedback\">\r\n                  <div *ngIf=\"email.errors.required\">Email requerido</div>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"form-group\">\r\n                <label for=\"password\">Contraseña</label>\r\n                <input type=\"password\" class=\"form-control\" name=\"password\" id=\"password\" [(ngModel)]=\"passwordModel\"\r\n                  #password=\"ngModel\" [ngClass]=\"{ 'is-invalid': f.submitted && password.invalid }\" required>\r\n                <div *ngIf=\"f.submitted && password.invalid\" class=\"invalid-feedback\">\r\n                  <div *ngIf=\"password.errors.required\">Contraseña requerida</div>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"form-group\">\r\n                <label for=\"perfil\">Perfil</label>\r\n                <select class=\"form-control\" name=\"perfil\" id=\"perfil\">\r\n                  <option [ngValue]=\"Cliente\">Cliente</option>\r\n                  <option [ngValue]=\"Recepcionista\">Recepcionista</option>\r\n                  <option [ngValue]=\"Especialista\">Especialista</option>\r\n                  <option [ngValue]=\"Administrador\">Administrador</option>\r\n                </select>\r\n              </div>\r\n\r\n              <!-- carga de imágen -->\r\n\r\n              <form class=\"form-group\">\r\n                <label for=\"customFile\">Imágen</label>\r\n                <div class=\"custom-file\">\r\n                  <input type=\"file\" class=\"custom-file-input\" id=\"customFile\" accept=\".png, .jpg\"\r\n                    (change)=\"ImagenCargada($event)\">\r\n                  <label class=\"custom-file-label\" for=\"customFile\">{{imgName}}</label>\r\n                </div>\r\n              </form>\r\n\r\n              <input #imgUsuario type=\"hidden\" [value]=\"urlImagen | async\">\r\n\r\n              <!-- *************** -->\r\n\r\n              <form class=\"margin-bottom\">\r\n                <div class=\"custom-control custom-checkbox\">\r\n                  <input type=\"checkbox\" class=\"custom-control-input\" id=\"customCheck\" name=\"customCheck\"\r\n                    [(ngModel)]=\"accepted\" #acepTYC=\"ngModel\"\r\n                    [ngClass]=\"{ 'is-invalid': f.submitted && acepTYC.invalid }\" required>\r\n                  <label class=\"custom-control-label\" for=\"customCheck\">Acepto los términos y\r\n                    condiciones</label>\r\n                </div>\r\n              </form>\r\n\r\n              <div class=\"form-group no-margin\">\r\n\r\n                <ng-container *ngIf=\"(urlImagen | async) || noCargando; else registroDeshabilitado\">\r\n                  <button type=\"submit\" class=\"btn btn-primary btn-block\">\r\n                    Registrarse\r\n                  </button>\r\n                </ng-container>\r\n\r\n                <ng-template #registroDeshabilitado>\r\n                  <button type=\"submit\" disabled=true class=\"btn btn-secondary btn-block\">\r\n                    Registrarse\r\n                  </button>\r\n                </ng-template>\r\n\r\n              </div>\r\n              <div class=\"margin-top20 text-center\">\r\n                Ya tenés una cuenta? <a routerLink=\"/logearse\">Ingresá</a>\r\n              </div>\r\n            </form>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/componentes/turno-creacion/turno-creacion.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/componentes/turno-creacion/turno-creacion.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card-wrapper\">\n  <div class=\"card fat\">\n    <div class=\"card-body\">\n      <h4 class=\"card-title\">Crear Turno</h4>\n      <form [formGroup]=\"formTurnos\" (ngSubmit)=\"CrearTurno()\" #f=\"ngForm\" novalidate>\n\n        <mat-form-field>\n          <input matInput [min]=\"minDate\" [matDatepicker]=\"picker\" placeholder=\"Seleccione una fecha\"\n            formControlName=\"fecha\" disabled (ngModelChange)=\"TraerEspecialistasPorFecha()\" required>\n          <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n          <mat-datepicker #picker disabled=\"false\"></mat-datepicker>\n          <mat-error *ngIf=\"fecha.errors?.required || fecha.touched\">Por favor, seleccione una fecha</mat-error>\n        </mat-form-field>\n\n        <mat-form-field class=\"mt-1\">\n          <mat-label>Especialista</mat-label>\n          <mat-select formControlName=\"especialista\" required>\n            <mat-option *ngIf=\"especialistas.length == 0\">--</mat-option>\n            <mat-option *ngFor=\"let especialista of especialistas\" [value]=\"especialista\">\n              {{especialista.Nombre}}\n            </mat-option>\n          </mat-select>\n          <mat-error *ngIf=\"especialista.touched && especialistas.length > 0\">Por favor, seleccione al especialista</mat-error>\n          <mat-hint *ngIf=\"especialistas.length == 0 && fecha.valid\">\n            No se encontraron especialistas disponibles en la fecha indicada\n          </mat-hint>\n          <mat-hint *ngIf=\"fecha.invalid\">\n            Seleccione una fecha para ver los especialistas disponibles\n          </mat-hint>\n        </mat-form-field>\n\n        <div class=\"mt-5\">\n          <button type=\"submit\" mat-raised-button color=\"primary\" [disabled]=\"formTurnos.invalid\">Crear</button>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/componentes/turno-lista/turno-lista.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/componentes/turno-lista/turno-lista.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-form-field>\n  <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filtrar\">\n</mat-form-field>\n\n<div class=\"mat-elevation-z8\">\n  <table mat-table [dataSource]=\"dataSource\">\n\n    <ng-container matColumnDef=\"NombreEspecialista\">\n      <th mat-header-cell *matHeaderCellDef> Especialista </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.NombreEspecialista}} </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"Fecha\">\n      <th mat-header-cell *matHeaderCellDef> Fecha </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.Fecha.toDate() | date: 'dd/M/yyyy'}} </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"Estado\">\n      <th mat-header-cell *matHeaderCellDef> Estado del turno </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.Estado}} </td>\n    </ng-container>\n\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n  </table>\n\n  <div *ngIf=\"noData | async\" class=\"no-resultados\">\n    No hay resultados\n  </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/componentes/turno/turno.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/componentes/turno/turno.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"h-100\">\n  <div class=\"container h-100\">\n    <div class=\"row justify-content-md-center h-100 mt-3\">\n      <div class=\"col-md-4\">\n        <app-turno-creacion></app-turno-creacion>\n      </div>\n      <div class=\"col-md-8\">\n        <app-turno-lista></app-turno-lista>\n      </div>\n    </div>\n  </div>\n</section>"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _componentes_inicio_inicio_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./componentes/inicio/inicio.component */ "./src/app/componentes/inicio/inicio.component.ts");
/* harmony import */ var _componentes_error404_error404_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./componentes/error404/error404.component */ "./src/app/componentes/error404/error404.component.ts");
/* harmony import */ var _componentes_login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./componentes/login/login.component */ "./src/app/componentes/login/login.component.ts");
/* harmony import */ var _componentes_registro_registro_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./componentes/registro/registro.component */ "./src/app/componentes/registro/registro.component.ts");
/* harmony import */ var _servicios_AuthGuard_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./servicios/AuthGuard.service */ "./src/app/servicios/AuthGuard.service.ts");
/* harmony import */ var _componentes_lista_usuarios_lista_usuarios_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./componentes/lista-usuarios/lista-usuarios.component */ "./src/app/componentes/lista-usuarios/lista-usuarios.component.ts");
/* harmony import */ var _componentes_turno_turno_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./componentes/turno/turno.component */ "./src/app/componentes/turno/turno.component.ts");










var routes = [
    { path: '', component: _componentes_inicio_inicio_component__WEBPACK_IMPORTED_MODULE_3__["InicioComponent"] },
    { path: 'logearse', component: _componentes_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"], canActivate: [_servicios_AuthGuard_service__WEBPACK_IMPORTED_MODULE_7__["AuthGuardService"]] },
    { path: 'registrarse', component: _componentes_registro_registro_component__WEBPACK_IMPORTED_MODULE_6__["RegistroComponent"], canActivate: [_servicios_AuthGuard_service__WEBPACK_IMPORTED_MODULE_7__["AuthGuardService"]] },
    // { path: 'chat', component: ChatComponent, canActivate: [AuthGuardService] },
    { path: 'turnos', component: _componentes_turno_turno_component__WEBPACK_IMPORTED_MODULE_9__["TurnoComponent"], canActivate: [_servicios_AuthGuard_service__WEBPACK_IMPORTED_MODULE_7__["AuthGuardService"]] },
    { path: 'administracion', component: _componentes_lista_usuarios_lista_usuarios_component__WEBPACK_IMPORTED_MODULE_8__["ListaUsuariosComponent"], canActivate: [_servicios_AuthGuard_service__WEBPACK_IMPORTED_MODULE_7__["AuthGuardService"]] },
    { path: '404', component: _componentes_error404_error404_component__WEBPACK_IMPORTED_MODULE_4__["Error404Component"] },
    { path: '**', redirectTo: '404' }
    // {
    //   path: '',
    //   component: PrincipalComponent,
    //   children:
    //     [
    //       { path: 'inicio', component: InicioComponent },
    //       { path: 'logearse', component: LoginComponent },
    //       { path: 'registrarse', component: LoginComponent }
    //     ]
    // }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _servicios_Usuario_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./servicios/Usuario.service */ "./src/app/servicios/Usuario.service.ts");



var AppComponent = /** @class */ (function () {
    function AppComponent(us) {
        this.us = us;
        this.us.EstadoLogeo();
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_servicios_Usuario_service__WEBPACK_IMPORTED_MODULE_2__["UsuarioService"]])
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/index.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/index.js");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/storage/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _componentes_principal_principal_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./componentes/principal/principal.component */ "./src/app/componentes/principal/principal.component.ts");
/* harmony import */ var _componentes_cabecera_cabecera_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./componentes/cabecera/cabecera.component */ "./src/app/componentes/cabecera/cabecera.component.ts");
/* harmony import */ var _componentes_pie_pie_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./componentes/pie/pie.component */ "./src/app/componentes/pie/pie.component.ts");
/* harmony import */ var _componentes_login_login_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./componentes/login/login.component */ "./src/app/componentes/login/login.component.ts");
/* harmony import */ var _componentes_inicio_inicio_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./componentes/inicio/inicio.component */ "./src/app/componentes/inicio/inicio.component.ts");
/* harmony import */ var _componentes_error404_error404_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./componentes/error404/error404.component */ "./src/app/componentes/error404/error404.component.ts");
/* harmony import */ var _componentes_registro_registro_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./componentes/registro/registro.component */ "./src/app/componentes/registro/registro.component.ts");
/* harmony import */ var _componentes_chat_chat_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./componentes/chat/chat.component */ "./src/app/componentes/chat/chat.component.ts");
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./material/material.module */ "./src/app/material/material.module.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _servicios_AuthGuard_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./servicios/AuthGuard.service */ "./src/app/servicios/AuthGuard.service.ts");
/* harmony import */ var angular2_notifications__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! angular2-notifications */ "./node_modules/angular2-notifications/angular2-notifications.umd.js");
/* harmony import */ var angular2_notifications__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(angular2_notifications__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var _componentes_lista_usuarios_lista_usuarios_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./componentes/lista-usuarios/lista-usuarios.component */ "./src/app/componentes/lista-usuarios/lista-usuarios.component.ts");
/* harmony import */ var _componentes_turno_creacion_turno_creacion_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./componentes/turno-creacion/turno-creacion.component */ "./src/app/componentes/turno-creacion/turno-creacion.component.ts");
/* harmony import */ var _componentes_turno_lista_turno_lista_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./componentes/turno-lista/turno-lista.component */ "./src/app/componentes/turno-lista/turno-lista.component.ts");
/* harmony import */ var _componentes_turno_turno_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./componentes/turno/turno.component */ "./src/app/componentes/turno/turno.component.ts");




























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"],
                _componentes_principal_principal_component__WEBPACK_IMPORTED_MODULE_12__["PrincipalComponent"],
                _componentes_cabecera_cabecera_component__WEBPACK_IMPORTED_MODULE_13__["CabeceraComponent"],
                _componentes_pie_pie_component__WEBPACK_IMPORTED_MODULE_14__["PieComponent"],
                _componentes_login_login_component__WEBPACK_IMPORTED_MODULE_15__["LoginComponent"],
                _componentes_inicio_inicio_component__WEBPACK_IMPORTED_MODULE_16__["InicioComponent"],
                _componentes_error404_error404_component__WEBPACK_IMPORTED_MODULE_17__["Error404Component"],
                _componentes_registro_registro_component__WEBPACK_IMPORTED_MODULE_18__["RegistroComponent"],
                _componentes_chat_chat_component__WEBPACK_IMPORTED_MODULE_19__["ChatComponent"],
                _componentes_lista_usuarios_lista_usuarios_component__WEBPACK_IMPORTED_MODULE_24__["ListaUsuariosComponent"],
                _componentes_turno_creacion_turno_creacion_component__WEBPACK_IMPORTED_MODULE_25__["TurnoCreacionComponent"],
                _componentes_turno_lista_turno_lista_component__WEBPACK_IMPORTED_MODULE_26__["TurnoListaComponent"],
                _componentes_turno_turno_component__WEBPACK_IMPORTED_MODULE_27__["TurnoComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_fire__WEBPACK_IMPORTED_MODULE_7__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].firebaseConfig),
                _angular_fire_database__WEBPACK_IMPORTED_MODULE_8__["AngularFireDatabaseModule"],
                _angular_fire_auth__WEBPACK_IMPORTED_MODULE_6__["AngularFireAuthModule"],
                _angular_fire_storage__WEBPACK_IMPORTED_MODULE_9__["AngularFireStorageModule"],
                _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_10__["AngularFirestoreModule"],
                _material_material_module__WEBPACK_IMPORTED_MODULE_20__["MaterialModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_21__["BrowserAnimationsModule"],
                angular2_notifications__WEBPACK_IMPORTED_MODULE_23__["SimpleNotificationsModule"].forRoot({
                    position: ['top', 'right'],
                    timeOut: 4000,
                    showProgressBar: true,
                    pauseOnHover: true,
                    clickToClose: true
                })
            ],
            exports: [
                _material_material_module__WEBPACK_IMPORTED_MODULE_20__["MaterialModule"],
                angular2_notifications__WEBPACK_IMPORTED_MODULE_23__["SimpleNotificationsModule"]
            ],
            providers: [_servicios_AuthGuard_service__WEBPACK_IMPORTED_MODULE_22__["AuthGuardService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/clases/Mensaje.ts":
/*!***********************************!*\
  !*** ./src/app/clases/Mensaje.ts ***!
  \***********************************/
/*! exports provided: Mensaje */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Mensaje", function() { return Mensaje; });
var Mensaje = /** @class */ (function () {
    function Mensaje() {
    }
    return Mensaje;
}());



/***/ }),

/***/ "./src/app/clases/Turno.ts":
/*!*********************************!*\
  !*** ./src/app/clases/Turno.ts ***!
  \*********************************/
/*! exports provided: EstadoTurno */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EstadoTurno", function() { return EstadoTurno; });
var EstadoTurno;
(function (EstadoTurno) {
    EstadoTurno["Pendiente"] = "Pendiente";
    EstadoTurno["Cancelado"] = "Cancelado";
    EstadoTurno["Finalizado"] = "Finalizado";
})(EstadoTurno || (EstadoTurno = {}));


/***/ }),

/***/ "./src/app/clases/Usuario.ts":
/*!***********************************!*\
  !*** ./src/app/clases/Usuario.ts ***!
  \***********************************/
/*! exports provided: Perfil */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Perfil", function() { return Perfil; });
var Perfil;
(function (Perfil) {
    Perfil["Cliente"] = "Cliente";
    Perfil["Recepcionista"] = "Recepcionista";
    Perfil["Especialista"] = "Especialista";
    Perfil["Administrador"] = "Administrador";
})(Perfil || (Perfil = {}));


/***/ }),

/***/ "./src/app/componentes/cabecera/cabecera.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/componentes/cabecera/cabecera.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#mainNav {\n  font-family: \"Montserrat\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\";\n  font-weight: 1000;\n  background-color: #000;\n}\n#mainNav .navbar-brand {\n  color: #fff;\n}\n#mainNav .navbar-brand:hover {\n  color: #1abc9c;\n}\n#mainNav .navbar-nav {\n  margin-top: 1rem;\n}\n#mainNav .navbar-nav li.nav-item a.nav-link {\n  color: #fff;\n}\n#mainNav .navbar-nav li.nav-item a.nav-link:hover {\n  color: #1abc9c;\n}\n#mainNav .navbar-nav li.nav-item a.nav-link.active {\n  color: #1abc9c;\n}\n#mainNav .navbar-toggler {\n  font-size: 80%;\n  padding: 0.8rem;\n}\n@media (min-width: 992px) {\n  #mainNav {\n    transition: padding-top 0.3s, padding-bottom 0.3s;\n  }\n  #mainNav .navbar-brand {\n    font-size: 1.75em;\n    transition: font-size 0.3s;\n  }\n  #mainNav .navbar-brand:hover {\n    font-size: 1.8em;\n  }\n  #mainNav .navbar-nav {\n    margin-top: 0;\n  }\n}\n#btnMenuToggle {\n  background-color: #1abc9c;\n}\n#btnMenuToggle:focus {\n  outline: none;\n}\n.user-img {\n  width: 28px;\n  height: 28px;\n  margin-right: 10px;\n  border-radius: 50%;\n  box-shadow: 0 0 40px rgba(0, 0, 0, 0.05);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50ZXMvY2FiZWNlcmEvRDpcXENhcnBldGFzIFVzdWFyaW9cXEVzY3JpdG9yaW9cXFdvcmtpbmdcXEN1cnNhZGFMYWI0XFxCdWVuYSBTb25yaXNhIC0gVFAyL3NyY1xcYXBwXFxjb21wb25lbnRlc1xcY2FiZWNlcmFcXGNhYmVjZXJhLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRlcy9jYWJlY2VyYS9EOlxcQ2FycGV0YXMgVXN1YXJpb1xcRXNjcml0b3Jpb1xcV29ya2luZ1xcQ3Vyc2FkYUxhYjRcXEJ1ZW5hIFNvbnJpc2EgLSBUUDIvc3JjXFxzY3NzXFxfdmFyaWFibGVzLnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudGVzL2NhYmVjZXJhL0Q6XFxDYXJwZXRhcyBVc3VhcmlvXFxFc2NyaXRvcmlvXFxXb3JraW5nXFxDdXJzYWRhTGFiNFxcQnVlbmEgU29ucmlzYSAtIFRQMi9ub2RlX21vZHVsZXNcXGJvb3RzdHJhcFxcc2Nzc1xcX3ZhcmlhYmxlcy5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRlcy9jYWJlY2VyYS9jYWJlY2VyYS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50ZXMvY2FiZWNlcmEvRDpcXENhcnBldGFzIFVzdWFyaW9cXEVzY3JpdG9yaW9cXFdvcmtpbmdcXEN1cnNhZGFMYWI0XFxCdWVuYSBTb25yaXNhIC0gVFAyL25vZGVfbW9kdWxlc1xcYm9vdHN0cmFwXFxzY3NzXFxtaXhpbnNcXF9icmVha3BvaW50cy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBQ0UsZ05DV3FCO0VEVnJCLGlCQ1dxQjtFRFZyQixzQkVXUztBQ2JYO0FIR0U7RUFDRSxXQ0pJO0FFR1I7QUhFSTtFQUNFLGNDVEM7QUVTUDtBSEdFO0VBQ0UsZ0JBQUE7QUdESjtBSEdNO0VBQ0UsV0NiQTtBRVlSO0FIRVE7RUFDRSxjQ2xCSDtBRWtCUDtBSEVRO0VBQ0UsY0NyQkg7QUVxQlA7QUhLRTtFQUNFLGNBQUE7RUFDQSxlQUFBO0FHSEo7QUNrQ0k7RUozQkY7SUFDRSxpREFBQTtFR0hGO0VISUU7SUFDRSxpQkFBQTtJQUNBLDBCQUFBO0VHRko7RUhHSTtJQUNFLGdCQUFBO0VHRE47RUhJRTtJQUNFLGFBQUE7RUdGSjtBQUNGO0FITUE7RUFDRSx5QkNoREs7QUU0Q1A7QUhLRTtFQUNFLGFBQUE7QUdISjtBSE9BO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esd0NBQUE7QUdKSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudGVzL2NhYmVjZXJhL2NhYmVjZXJhLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcInNyYy9zY3NzL3ZhcmlhYmxlc1wiO1xyXG5AaW1wb3J0IFwic3JjL3Njc3MvY29tcFwiO1xyXG5cclxuI21haW5OYXYge1xyXG4gIGZvbnQtZmFtaWx5OiAkaGVhZGluZ3MtZm9udC1mYW1pbHk7XHJcbiAgZm9udC13ZWlnaHQ6ICRoZWFkaW5ncy1mb250LXdlaWdodDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmxhY2s7XHJcbiAgLm5hdmJhci1icmFuZCB7XHJcbiAgICBjb2xvcjogJHdoaXRlO1xyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIGNvbG9yOiAkcHJpbWFyeTtcclxuICAgIH1cclxuICB9XHJcbiAgLm5hdmJhci1uYXYge1xyXG4gICAgbWFyZ2luLXRvcDogMXJlbTtcclxuICAgIGxpLm5hdi1pdGVtIHtcclxuICAgICAgYS5uYXYtbGluayB7XHJcbiAgICAgICAgY29sb3I6ICR3aGl0ZTtcclxuICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgIGNvbG9yOiAkcHJpbWFyeTtcclxuICAgICAgICB9XHJcbiAgICAgICAgJi5hY3RpdmUge1xyXG4gICAgICAgICAgY29sb3I6ICRwcmltYXJ5O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICAubmF2YmFyLXRvZ2dsZXIge1xyXG4gICAgZm9udC1zaXplOiA4MCU7XHJcbiAgICBwYWRkaW5nOiAwLjhyZW07XHJcbiAgfVxyXG59XHJcbkBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtdXAobGcpIHtcclxuICAjbWFpbk5hdiB7XHJcbiAgICB0cmFuc2l0aW9uOiBwYWRkaW5nLXRvcCAwLjNzLCBwYWRkaW5nLWJvdHRvbSAwLjNzO1xyXG4gICAgLm5hdmJhci1icmFuZCB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMS43NWVtO1xyXG4gICAgICB0cmFuc2l0aW9uOiBmb250LXNpemUgMC4zcztcclxuICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjhlbTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLm5hdmJhci1uYXYge1xyXG4gICAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuI2J0bk1lbnVUb2dnbGUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5O1xyXG4gICY6Zm9jdXMge1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICB9XHJcbn1cclxuXHJcbi51c2VyLWltZyB7XHJcbiAgICB3aWR0aDogMjhweDtcclxuICAgIGhlaWdodDogMjhweDtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGJveC1zaGFkb3c6IDAgMCA0MHB4IHJnYmEoMCwwLDAsLjA1KTtcclxufSIsIi8vIFNldCBjdXN0b20gY29sb3JzXHJcbiR0ZWFsOiAjMWFiYzljICFkZWZhdWx0O1xyXG4kdGVhbDI6ICNiMmYwZTMgIWRlZmF1bHQ7XHJcbiR0ZWFsMzogIzZlOWRlNCAhZGVmYXVsdDtcclxuJHdoaXRlOiAjZmZmICFkZWZhdWx0O1xyXG4kZGFyay1ibHVlOiAjMmMzZTUwICFkZWZhdWx0O1xyXG5cclxuLy8gT3ZlcnJpZGUgQm9vdHN0cmFwIHByaW1hcnkgYW5kIHNlY29uZGFyeSBjb2xvcnNcclxuJHByaW1hcnk6ICR0ZWFsICFkZWZhdWx0O1xyXG4kc2Vjb25kYXJ5OiAkZGFyay1ibHVlICFkZWZhdWx0O1xyXG4kbGlnaHQtcHJpbWFyeTogJHRlYWwyICFkZWZhdWx0O1xyXG4kbGlnaHQtc2Vjb25kYXk6ICR0ZWFsMyAhZGVmYXVsdDtcclxuXHJcbi8vIE92ZXJyaWRlIEJvb3RzdHJhcCBmb250IHZhcmlhYmxlc1xyXG4kZm9udC1mYW1pbHktc2Fucy1zZXJpZjogXCJMYXRvXCIsIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXCJTZWdvZSBVSVwiLCBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgQXJpYWwsIFwiTm90byBTYW5zXCIsIHNhbnMtc2VyaWYsIFwiQXBwbGUgQ29sb3IgRW1vamlcIiwgXCJTZWdvZSBVSSBFbW9qaVwiLCBcIlNlZ29lIFVJIFN5bWJvbFwiLCAnTm90byBDb2xvciBFbW9qaScgIWRlZmF1bHQ7XHJcbiRoZWFkaW5ncy1mb250LWZhbWlseTogXCJNb250c2VycmF0XCIsIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXCJTZWdvZSBVSVwiLCBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgQXJpYWwsIFwiTm90byBTYW5zXCIsIHNhbnMtc2VyaWYsIFwiQXBwbGUgQ29sb3IgRW1vamlcIiwgXCJTZWdvZSBVSSBFbW9qaVwiLCBcIlNlZ29lIFVJIFN5bWJvbFwiLCAnTm90byBDb2xvciBFbW9qaScgIWRlZmF1bHQ7XHJcbiRoZWFkaW5ncy1mb250LXdlaWdodDogMTAwMCAhZGVmYXVsdDtcclxuJGhlYWRpbmdzLWZvbnQtd2VpZ2h0LWJpZ2dlcjogMTIwMCAhZGVmYXVsdDtcclxuXHJcbi8vIE92ZXJyaWRlIEJvb3RzdHJhcCBib3JkZXIgdmFyaWFibGVzXHJcbiRib3JkZXItd2lkdGg6IDAuMTI1cmVtICFkZWZhdWx0O1xyXG4kYm9yZGVyLXJhZGl1czogMC41cmVtICFkZWZhdWx0O1xyXG4kYm9yZGVyLXJhZGl1cy1sZzogMC43NXJlbSAhZGVmYXVsdDtcclxuJGJvcmRlci1yYWRpdXMtc206IDAuMjVyZW0gIWRlZmF1bHQ7XHJcblxyXG4vLyBPdmVycmlkZSBCb290c3RyYXAgaW5wdXQvYnV0dG9uIHZhcmlhYmxlc1xyXG4kaW5wdXQtYnRuLWJvcmRlci13aWR0aDogJGJvcmRlci13aWR0aCAhZGVmYXVsdDtcclxuXHJcbi8vIE92ZXJyaWRlIEJvb3RzdHJhcCBtb2RhbCB2YXJpYWJsZXNcclxuJG1vZGFsLWlubmVyLXBhZGRpbmc6IDRyZW0gMXJlbSAhZGVmYXVsdDtcclxuJG1vZGFsLWNvbnRlbnQtYm9yZGVyLXdpZHRoOiAwICFkZWZhdWx0O1xyXG4iLCIvLyBWYXJpYWJsZXNcbi8vXG4vLyBWYXJpYWJsZXMgc2hvdWxkIGZvbGxvdyB0aGUgYCRjb21wb25lbnQtc3RhdGUtcHJvcGVydHktc2l6ZWAgZm9ybXVsYSBmb3Jcbi8vIGNvbnNpc3RlbnQgbmFtaW5nLiBFeDogJG5hdi1saW5rLWRpc2FibGVkLWNvbG9yIGFuZCAkbW9kYWwtY29udGVudC1ib3gtc2hhZG93LXhzLlxuXG4vLyBDb2xvciBzeXN0ZW1cblxuJHdoaXRlOiAgICAjZmZmICFkZWZhdWx0O1xuJGdyYXktMTAwOiAjZjhmOWZhICFkZWZhdWx0O1xuJGdyYXktMjAwOiAjZTllY2VmICFkZWZhdWx0O1xuJGdyYXktMzAwOiAjZGVlMmU2ICFkZWZhdWx0O1xuJGdyYXktNDAwOiAjY2VkNGRhICFkZWZhdWx0O1xuJGdyYXktNTAwOiAjYWRiNWJkICFkZWZhdWx0O1xuJGdyYXktNjAwOiAjNmM3NTdkICFkZWZhdWx0O1xuJGdyYXktNzAwOiAjNDk1MDU3ICFkZWZhdWx0O1xuJGdyYXktODAwOiAjMzQzYTQwICFkZWZhdWx0O1xuJGdyYXktOTAwOiAjMjEyNTI5ICFkZWZhdWx0O1xuJGJsYWNrOiAgICAjMDAwICFkZWZhdWx0O1xuXG4kZ3JheXM6ICgpICFkZWZhdWx0O1xuLy8gc3R5bGVsaW50LWRpc2FibGUtbmV4dC1saW5lIHNjc3MvZG9sbGFyLXZhcmlhYmxlLWRlZmF1bHRcbiRncmF5czogbWFwLW1lcmdlKFxuICAoXG4gICAgXCIxMDBcIjogJGdyYXktMTAwLFxuICAgIFwiMjAwXCI6ICRncmF5LTIwMCxcbiAgICBcIjMwMFwiOiAkZ3JheS0zMDAsXG4gICAgXCI0MDBcIjogJGdyYXktNDAwLFxuICAgIFwiNTAwXCI6ICRncmF5LTUwMCxcbiAgICBcIjYwMFwiOiAkZ3JheS02MDAsXG4gICAgXCI3MDBcIjogJGdyYXktNzAwLFxuICAgIFwiODAwXCI6ICRncmF5LTgwMCxcbiAgICBcIjkwMFwiOiAkZ3JheS05MDBcbiAgKSxcbiAgJGdyYXlzXG4pO1xuXG4kYmx1ZTogICAgIzAwN2JmZiAhZGVmYXVsdDtcbiRpbmRpZ286ICAjNjYxMGYyICFkZWZhdWx0O1xuJHB1cnBsZTogICM2ZjQyYzEgIWRlZmF1bHQ7XG4kcGluazogICAgI2U4M2U4YyAhZGVmYXVsdDtcbiRyZWQ6ICAgICAjZGMzNTQ1ICFkZWZhdWx0O1xuJG9yYW5nZTogICNmZDdlMTQgIWRlZmF1bHQ7XG4keWVsbG93OiAgI2ZmYzEwNyAhZGVmYXVsdDtcbiRncmVlbjogICAjMjhhNzQ1ICFkZWZhdWx0O1xuJHRlYWw6ICAgICMyMGM5OTcgIWRlZmF1bHQ7XG4kY3lhbjogICAgIzE3YTJiOCAhZGVmYXVsdDtcblxuJGNvbG9yczogKCkgIWRlZmF1bHQ7XG4vLyBzdHlsZWxpbnQtZGlzYWJsZS1uZXh0LWxpbmUgc2Nzcy9kb2xsYXItdmFyaWFibGUtZGVmYXVsdFxuJGNvbG9yczogbWFwLW1lcmdlKFxuICAoXG4gICAgXCJibHVlXCI6ICAgICAgICRibHVlLFxuICAgIFwiaW5kaWdvXCI6ICAgICAkaW5kaWdvLFxuICAgIFwicHVycGxlXCI6ICAgICAkcHVycGxlLFxuICAgIFwicGlua1wiOiAgICAgICAkcGluayxcbiAgICBcInJlZFwiOiAgICAgICAgJHJlZCxcbiAgICBcIm9yYW5nZVwiOiAgICAgJG9yYW5nZSxcbiAgICBcInllbGxvd1wiOiAgICAgJHllbGxvdyxcbiAgICBcImdyZWVuXCI6ICAgICAgJGdyZWVuLFxuICAgIFwidGVhbFwiOiAgICAgICAkdGVhbCxcbiAgICBcImN5YW5cIjogICAgICAgJGN5YW4sXG4gICAgXCJ3aGl0ZVwiOiAgICAgICR3aGl0ZSxcbiAgICBcImdyYXlcIjogICAgICAgJGdyYXktNjAwLFxuICAgIFwiZ3JheS1kYXJrXCI6ICAkZ3JheS04MDBcbiAgKSxcbiAgJGNvbG9yc1xuKTtcblxuJHByaW1hcnk6ICAgICAgICRibHVlICFkZWZhdWx0O1xuJHNlY29uZGFyeTogICAgICRncmF5LTYwMCAhZGVmYXVsdDtcbiRzdWNjZXNzOiAgICAgICAkZ3JlZW4gIWRlZmF1bHQ7XG4kaW5mbzogICAgICAgICAgJGN5YW4gIWRlZmF1bHQ7XG4kd2FybmluZzogICAgICAgJHllbGxvdyAhZGVmYXVsdDtcbiRkYW5nZXI6ICAgICAgICAkcmVkICFkZWZhdWx0O1xuJGxpZ2h0OiAgICAgICAgICRncmF5LTEwMCAhZGVmYXVsdDtcbiRkYXJrOiAgICAgICAgICAkZ3JheS04MDAgIWRlZmF1bHQ7XG5cbiR0aGVtZS1jb2xvcnM6ICgpICFkZWZhdWx0O1xuLy8gc3R5bGVsaW50LWRpc2FibGUtbmV4dC1saW5lIHNjc3MvZG9sbGFyLXZhcmlhYmxlLWRlZmF1bHRcbiR0aGVtZS1jb2xvcnM6IG1hcC1tZXJnZShcbiAgKFxuICAgIFwicHJpbWFyeVwiOiAgICAkcHJpbWFyeSxcbiAgICBcInNlY29uZGFyeVwiOiAgJHNlY29uZGFyeSxcbiAgICBcInN1Y2Nlc3NcIjogICAgJHN1Y2Nlc3MsXG4gICAgXCJpbmZvXCI6ICAgICAgICRpbmZvLFxuICAgIFwid2FybmluZ1wiOiAgICAkd2FybmluZyxcbiAgICBcImRhbmdlclwiOiAgICAgJGRhbmdlcixcbiAgICBcImxpZ2h0XCI6ICAgICAgJGxpZ2h0LFxuICAgIFwiZGFya1wiOiAgICAgICAkZGFya1xuICApLFxuICAkdGhlbWUtY29sb3JzXG4pO1xuXG4vLyBTZXQgYSBzcGVjaWZpYyBqdW1wIHBvaW50IGZvciByZXF1ZXN0aW5nIGNvbG9yIGp1bXBzXG4kdGhlbWUtY29sb3ItaW50ZXJ2YWw6ICAgICAgOCUgIWRlZmF1bHQ7XG5cbi8vIFRoZSB5aXEgbGlnaHRuZXNzIHZhbHVlIHRoYXQgZGV0ZXJtaW5lcyB3aGVuIHRoZSBsaWdodG5lc3Mgb2YgY29sb3IgY2hhbmdlcyBmcm9tIFwiZGFya1wiIHRvIFwibGlnaHRcIi4gQWNjZXB0YWJsZSB2YWx1ZXMgYXJlIGJldHdlZW4gMCBhbmQgMjU1LlxuJHlpcS1jb250cmFzdGVkLXRocmVzaG9sZDogIDE1MCAhZGVmYXVsdDtcblxuLy8gQ3VzdG9taXplIHRoZSBsaWdodCBhbmQgZGFyayB0ZXh0IGNvbG9ycyBmb3IgdXNlIGluIG91ciBZSVEgY29sb3IgY29udHJhc3QgZnVuY3Rpb24uXG4keWlxLXRleHQtZGFyazogICAgICAgICAgICAgJGdyYXktOTAwICFkZWZhdWx0O1xuJHlpcS10ZXh0LWxpZ2h0OiAgICAgICAgICAgICR3aGl0ZSAhZGVmYXVsdDtcblxuXG4vLyBPcHRpb25zXG4vL1xuLy8gUXVpY2tseSBtb2RpZnkgZ2xvYmFsIHN0eWxpbmcgYnkgZW5hYmxpbmcgb3IgZGlzYWJsaW5nIG9wdGlvbmFsIGZlYXR1cmVzLlxuXG4kZW5hYmxlLWNhcmV0OiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJ1ZSAhZGVmYXVsdDtcbiRlbmFibGUtcm91bmRlZDogICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cnVlICFkZWZhdWx0O1xuJGVuYWJsZS1zaGFkb3dzOiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZhbHNlICFkZWZhdWx0O1xuJGVuYWJsZS1ncmFkaWVudHM6ICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZhbHNlICFkZWZhdWx0O1xuJGVuYWJsZS10cmFuc2l0aW9uczogICAgICAgICAgICAgICAgICAgICAgICAgIHRydWUgIWRlZmF1bHQ7XG4kZW5hYmxlLXByZWZlcnMtcmVkdWNlZC1tb3Rpb24tbWVkaWEtcXVlcnk6ICAgdHJ1ZSAhZGVmYXVsdDtcbiRlbmFibGUtaG92ZXItbWVkaWEtcXVlcnk6ICAgICAgICAgICAgICAgICAgICBmYWxzZSAhZGVmYXVsdDsgLy8gRGVwcmVjYXRlZCwgbm8gbG9uZ2VyIGFmZmVjdHMgYW55IGNvbXBpbGVkIENTU1xuJGVuYWJsZS1ncmlkLWNsYXNzZXM6ICAgICAgICAgICAgICAgICAgICAgICAgIHRydWUgIWRlZmF1bHQ7XG4kZW5hYmxlLXBvaW50ZXItY3Vyc29yLWZvci1idXR0b25zOiAgICAgICAgICAgdHJ1ZSAhZGVmYXVsdDtcbiRlbmFibGUtcHJpbnQtc3R5bGVzOiAgICAgICAgICAgICAgICAgICAgICAgICB0cnVlICFkZWZhdWx0O1xuJGVuYWJsZS1yZXNwb25zaXZlLWZvbnQtc2l6ZXM6ICAgICAgICAgICAgICAgIGZhbHNlICFkZWZhdWx0O1xuJGVuYWJsZS12YWxpZGF0aW9uLWljb25zOiAgICAgICAgICAgICAgICAgICAgIHRydWUgIWRlZmF1bHQ7XG4kZW5hYmxlLWRlcHJlY2F0aW9uLW1lc3NhZ2VzOiAgICAgICAgICAgICAgICAgdHJ1ZSAhZGVmYXVsdDtcblxuXG4vLyBTcGFjaW5nXG4vL1xuLy8gQ29udHJvbCB0aGUgZGVmYXVsdCBzdHlsaW5nIG9mIG1vc3QgQm9vdHN0cmFwIGVsZW1lbnRzIGJ5IG1vZGlmeWluZyB0aGVzZVxuLy8gdmFyaWFibGVzLiBNb3N0bHkgZm9jdXNlZCBvbiBzcGFjaW5nLlxuLy8gWW91IGNhbiBhZGQgbW9yZSBlbnRyaWVzIHRvIHRoZSAkc3BhY2VycyBtYXAsIHNob3VsZCB5b3UgbmVlZCBtb3JlIHZhcmlhdGlvbi5cblxuJHNwYWNlcjogMXJlbSAhZGVmYXVsdDtcbiRzcGFjZXJzOiAoKSAhZGVmYXVsdDtcbi8vIHN0eWxlbGludC1kaXNhYmxlLW5leHQtbGluZSBzY3NzL2RvbGxhci12YXJpYWJsZS1kZWZhdWx0XG4kc3BhY2VyczogbWFwLW1lcmdlKFxuICAoXG4gICAgMDogMCxcbiAgICAxOiAoJHNwYWNlciAqIC4yNSksXG4gICAgMjogKCRzcGFjZXIgKiAuNSksXG4gICAgMzogJHNwYWNlcixcbiAgICA0OiAoJHNwYWNlciAqIDEuNSksXG4gICAgNTogKCRzcGFjZXIgKiAzKVxuICApLFxuICAkc3BhY2Vyc1xuKTtcblxuLy8gVGhpcyB2YXJpYWJsZSBhZmZlY3RzIHRoZSBgLmgtKmAgYW5kIGAudy0qYCBjbGFzc2VzLlxuJHNpemVzOiAoKSAhZGVmYXVsdDtcbi8vIHN0eWxlbGludC1kaXNhYmxlLW5leHQtbGluZSBzY3NzL2RvbGxhci12YXJpYWJsZS1kZWZhdWx0XG4kc2l6ZXM6IG1hcC1tZXJnZShcbiAgKFxuICAgIDI1OiAyNSUsXG4gICAgNTA6IDUwJSxcbiAgICA3NTogNzUlLFxuICAgIDEwMDogMTAwJSxcbiAgICBhdXRvOiBhdXRvXG4gICksXG4gICRzaXplc1xuKTtcblxuXG4vLyBCb2R5XG4vL1xuLy8gU2V0dGluZ3MgZm9yIHRoZSBgPGJvZHk+YCBlbGVtZW50LlxuXG4kYm9keS1iZzogICAgICAgICAgICAgICAgICAgJHdoaXRlICFkZWZhdWx0O1xuJGJvZHktY29sb3I6ICAgICAgICAgICAgICAgICRncmF5LTkwMCAhZGVmYXVsdDtcblxuXG4vLyBMaW5rc1xuLy9cbi8vIFN0eWxlIGFuY2hvciBlbGVtZW50cy5cblxuJGxpbmstY29sb3I6ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhlbWUtY29sb3IoXCJwcmltYXJ5XCIpICFkZWZhdWx0O1xuJGxpbmstZGVjb3JhdGlvbjogICAgICAgICAgICAgICAgICAgICAgICAgbm9uZSAhZGVmYXVsdDtcbiRsaW5rLWhvdmVyLWNvbG9yOiAgICAgICAgICAgICAgICAgICAgICAgIGRhcmtlbigkbGluay1jb2xvciwgMTUlKSAhZGVmYXVsdDtcbiRsaW5rLWhvdmVyLWRlY29yYXRpb246ICAgICAgICAgICAgICAgICAgIHVuZGVybGluZSAhZGVmYXVsdDtcbi8vIERhcmtlbiBwZXJjZW50YWdlIGZvciBsaW5rcyB3aXRoIGAudGV4dC0qYCBjbGFzcyAoZS5nLiBgLnRleHQtc3VjY2Vzc2ApXG4kZW1waGFzaXplZC1saW5rLWhvdmVyLWRhcmtlbi1wZXJjZW50YWdlOiAxNSUgIWRlZmF1bHQ7XG5cbi8vIFBhcmFncmFwaHNcbi8vXG4vLyBTdHlsZSBwIGVsZW1lbnQuXG5cbiRwYXJhZ3JhcGgtbWFyZ2luLWJvdHRvbTogICAxcmVtICFkZWZhdWx0O1xuXG5cbi8vIEdyaWQgYnJlYWtwb2ludHNcbi8vXG4vLyBEZWZpbmUgdGhlIG1pbmltdW0gZGltZW5zaW9ucyBhdCB3aGljaCB5b3VyIGxheW91dCB3aWxsIGNoYW5nZSxcbi8vIGFkYXB0aW5nIHRvIGRpZmZlcmVudCBzY3JlZW4gc2l6ZXMsIGZvciB1c2UgaW4gbWVkaWEgcXVlcmllcy5cblxuJGdyaWQtYnJlYWtwb2ludHM6IChcbiAgeHM6IDAsXG4gIHNtOiA1NzZweCxcbiAgbWQ6IDc2OHB4LFxuICBsZzogOTkycHgsXG4gIHhsOiAxMjAwcHhcbikgIWRlZmF1bHQ7XG5cbkBpbmNsdWRlIF9hc3NlcnQtYXNjZW5kaW5nKCRncmlkLWJyZWFrcG9pbnRzLCBcIiRncmlkLWJyZWFrcG9pbnRzXCIpO1xuQGluY2x1ZGUgX2Fzc2VydC1zdGFydHMtYXQtemVybygkZ3JpZC1icmVha3BvaW50cywgXCIkZ3JpZC1icmVha3BvaW50c1wiKTtcblxuXG4vLyBHcmlkIGNvbnRhaW5lcnNcbi8vXG4vLyBEZWZpbmUgdGhlIG1heGltdW0gd2lkdGggb2YgYC5jb250YWluZXJgIGZvciBkaWZmZXJlbnQgc2NyZWVuIHNpemVzLlxuXG4kY29udGFpbmVyLW1heC13aWR0aHM6IChcbiAgc206IDU0MHB4LFxuICBtZDogNzIwcHgsXG4gIGxnOiA5NjBweCxcbiAgeGw6IDExNDBweFxuKSAhZGVmYXVsdDtcblxuQGluY2x1ZGUgX2Fzc2VydC1hc2NlbmRpbmcoJGNvbnRhaW5lci1tYXgtd2lkdGhzLCBcIiRjb250YWluZXItbWF4LXdpZHRoc1wiKTtcblxuXG4vLyBHcmlkIGNvbHVtbnNcbi8vXG4vLyBTZXQgdGhlIG51bWJlciBvZiBjb2x1bW5zIGFuZCBzcGVjaWZ5IHRoZSB3aWR0aCBvZiB0aGUgZ3V0dGVycy5cblxuJGdyaWQtY29sdW1uczogICAgICAgICAgICAgICAgMTIgIWRlZmF1bHQ7XG4kZ3JpZC1ndXR0ZXItd2lkdGg6ICAgICAgICAgICAzMHB4ICFkZWZhdWx0O1xuXG5cbi8vIENvbXBvbmVudHNcbi8vXG4vLyBEZWZpbmUgY29tbW9uIHBhZGRpbmcgYW5kIGJvcmRlciByYWRpdXMgc2l6ZXMgYW5kIG1vcmUuXG5cbiRsaW5lLWhlaWdodC1sZzogICAgICAgICAgICAgIDEuNSAhZGVmYXVsdDtcbiRsaW5lLWhlaWdodC1zbTogICAgICAgICAgICAgIDEuNSAhZGVmYXVsdDtcblxuJGJvcmRlci13aWR0aDogICAgICAgICAgICAgICAgMXB4ICFkZWZhdWx0O1xuJGJvcmRlci1jb2xvcjogICAgICAgICAgICAgICAgJGdyYXktMzAwICFkZWZhdWx0O1xuXG4kYm9yZGVyLXJhZGl1czogICAgICAgICAgICAgICAuMjVyZW0gIWRlZmF1bHQ7XG4kYm9yZGVyLXJhZGl1cy1sZzogICAgICAgICAgICAuM3JlbSAhZGVmYXVsdDtcbiRib3JkZXItcmFkaXVzLXNtOiAgICAgICAgICAgIC4ycmVtICFkZWZhdWx0O1xuXG4kcm91bmRlZC1waWxsOiAgICAgICAgICAgICAgICA1MHJlbSAhZGVmYXVsdDtcblxuJGJveC1zaGFkb3ctc206ICAgICAgICAgICAgICAgMCAuMTI1cmVtIC4yNXJlbSByZ2JhKCRibGFjaywgLjA3NSkgIWRlZmF1bHQ7XG4kYm94LXNoYWRvdzogICAgICAgICAgICAgICAgICAwIC41cmVtIDFyZW0gcmdiYSgkYmxhY2ssIC4xNSkgIWRlZmF1bHQ7XG4kYm94LXNoYWRvdy1sZzogICAgICAgICAgICAgICAwIDFyZW0gM3JlbSByZ2JhKCRibGFjaywgLjE3NSkgIWRlZmF1bHQ7XG5cbiRjb21wb25lbnQtYWN0aXZlLWNvbG9yOiAgICAgICR3aGl0ZSAhZGVmYXVsdDtcbiRjb21wb25lbnQtYWN0aXZlLWJnOiAgICAgICAgIHRoZW1lLWNvbG9yKFwicHJpbWFyeVwiKSAhZGVmYXVsdDtcblxuJGNhcmV0LXdpZHRoOiAgICAgICAgICAgICAgICAgLjNlbSAhZGVmYXVsdDtcbiRjYXJldC12ZXJ0aWNhbC1hbGlnbjogICAgICAgICRjYXJldC13aWR0aCAqIC44NSAhZGVmYXVsdDtcbiRjYXJldC1zcGFjaW5nOiAgICAgICAgICAgICAgICRjYXJldC13aWR0aCAqIC44NSAhZGVmYXVsdDtcblxuJHRyYW5zaXRpb24tYmFzZTogICAgICAgICAgICAgYWxsIC4ycyBlYXNlLWluLW91dCAhZGVmYXVsdDtcbiR0cmFuc2l0aW9uLWZhZGU6ICAgICAgICAgICAgIG9wYWNpdHkgLjE1cyBsaW5lYXIgIWRlZmF1bHQ7XG4kdHJhbnNpdGlvbi1jb2xsYXBzZTogICAgICAgICBoZWlnaHQgLjM1cyBlYXNlICFkZWZhdWx0O1xuXG4kZW1iZWQtcmVzcG9uc2l2ZS1hc3BlY3QtcmF0aW9zOiAoKSAhZGVmYXVsdDtcbi8vIHN0eWxlbGludC1kaXNhYmxlLW5leHQtbGluZSBzY3NzL2RvbGxhci12YXJpYWJsZS1kZWZhdWx0XG4kZW1iZWQtcmVzcG9uc2l2ZS1hc3BlY3QtcmF0aW9zOiBqb2luKFxuICAoXG4gICAgKDIxIDkpLFxuICAgICgxNiA5KSxcbiAgICAoNCAzKSxcbiAgICAoMSAxKSxcbiAgKSxcbiAgJGVtYmVkLXJlc3BvbnNpdmUtYXNwZWN0LXJhdGlvc1xuKTtcblxuLy8gVHlwb2dyYXBoeVxuLy9cbi8vIEZvbnQsIGxpbmUtaGVpZ2h0LCBhbmQgY29sb3IgZm9yIGJvZHkgdGV4dCwgaGVhZGluZ3MsIGFuZCBtb3JlLlxuXG4vLyBzdHlsZWxpbnQtZGlzYWJsZSB2YWx1ZS1rZXl3b3JkLWNhc2VcbiRmb250LWZhbWlseS1zYW5zLXNlcmlmOiAgICAgIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXCJTZWdvZSBVSVwiLCBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgQXJpYWwsIFwiTm90byBTYW5zXCIsIHNhbnMtc2VyaWYsIFwiQXBwbGUgQ29sb3IgRW1vamlcIiwgXCJTZWdvZSBVSSBFbW9qaVwiLCBcIlNlZ29lIFVJIFN5bWJvbFwiLCBcIk5vdG8gQ29sb3IgRW1vamlcIiAhZGVmYXVsdDtcbiRmb250LWZhbWlseS1tb25vc3BhY2U6ICAgICAgIFNGTW9uby1SZWd1bGFyLCBNZW5sbywgTW9uYWNvLCBDb25zb2xhcywgXCJMaWJlcmF0aW9uIE1vbm9cIiwgXCJDb3VyaWVyIE5ld1wiLCBtb25vc3BhY2UgIWRlZmF1bHQ7XG4kZm9udC1mYW1pbHktYmFzZTogICAgICAgICAgICAkZm9udC1mYW1pbHktc2Fucy1zZXJpZiAhZGVmYXVsdDtcbi8vIHN0eWxlbGludC1lbmFibGUgdmFsdWUta2V5d29yZC1jYXNlXG5cbiRmb250LXNpemUtYmFzZTogICAgICAgICAgICAgIDFyZW0gIWRlZmF1bHQ7IC8vIEFzc3VtZXMgdGhlIGJyb3dzZXIgZGVmYXVsdCwgdHlwaWNhbGx5IGAxNnB4YFxuJGZvbnQtc2l6ZS1sZzogICAgICAgICAgICAgICAgJGZvbnQtc2l6ZS1iYXNlICogMS4yNSAhZGVmYXVsdDtcbiRmb250LXNpemUtc206ICAgICAgICAgICAgICAgICRmb250LXNpemUtYmFzZSAqIC44NzUgIWRlZmF1bHQ7XG5cbiRmb250LXdlaWdodC1saWdodGVyOiAgICAgICAgIGxpZ2h0ZXIgIWRlZmF1bHQ7XG4kZm9udC13ZWlnaHQtbGlnaHQ6ICAgICAgICAgICAzMDAgIWRlZmF1bHQ7XG4kZm9udC13ZWlnaHQtbm9ybWFsOiAgICAgICAgICA0MDAgIWRlZmF1bHQ7XG4kZm9udC13ZWlnaHQtYm9sZDogICAgICAgICAgICA3MDAgIWRlZmF1bHQ7XG4kZm9udC13ZWlnaHQtYm9sZGVyOiAgICAgICAgICBib2xkZXIgIWRlZmF1bHQ7XG5cbiRmb250LXdlaWdodC1iYXNlOiAgICAgICAgICAgICRmb250LXdlaWdodC1ub3JtYWwgIWRlZmF1bHQ7XG4kbGluZS1oZWlnaHQtYmFzZTogICAgICAgICAgICAxLjUgIWRlZmF1bHQ7XG5cbiRoMS1mb250LXNpemU6ICAgICAgICAgICAgICAgICRmb250LXNpemUtYmFzZSAqIDIuNSAhZGVmYXVsdDtcbiRoMi1mb250LXNpemU6ICAgICAgICAgICAgICAgICRmb250LXNpemUtYmFzZSAqIDIgIWRlZmF1bHQ7XG4kaDMtZm9udC1zaXplOiAgICAgICAgICAgICAgICAkZm9udC1zaXplLWJhc2UgKiAxLjc1ICFkZWZhdWx0O1xuJGg0LWZvbnQtc2l6ZTogICAgICAgICAgICAgICAgJGZvbnQtc2l6ZS1iYXNlICogMS41ICFkZWZhdWx0O1xuJGg1LWZvbnQtc2l6ZTogICAgICAgICAgICAgICAgJGZvbnQtc2l6ZS1iYXNlICogMS4yNSAhZGVmYXVsdDtcbiRoNi1mb250LXNpemU6ICAgICAgICAgICAgICAgICRmb250LXNpemUtYmFzZSAhZGVmYXVsdDtcblxuJGhlYWRpbmdzLW1hcmdpbi1ib3R0b206ICAgICAgJHNwYWNlciAvIDIgIWRlZmF1bHQ7XG4kaGVhZGluZ3MtZm9udC1mYW1pbHk6ICAgICAgICBudWxsICFkZWZhdWx0O1xuJGhlYWRpbmdzLWZvbnQtd2VpZ2h0OiAgICAgICAgNTAwICFkZWZhdWx0O1xuJGhlYWRpbmdzLWxpbmUtaGVpZ2h0OiAgICAgICAgMS4yICFkZWZhdWx0O1xuJGhlYWRpbmdzLWNvbG9yOiAgICAgICAgICAgICAgbnVsbCAhZGVmYXVsdDtcblxuJGRpc3BsYXkxLXNpemU6ICAgICAgICAgICAgICAgNnJlbSAhZGVmYXVsdDtcbiRkaXNwbGF5Mi1zaXplOiAgICAgICAgICAgICAgIDUuNXJlbSAhZGVmYXVsdDtcbiRkaXNwbGF5My1zaXplOiAgICAgICAgICAgICAgIDQuNXJlbSAhZGVmYXVsdDtcbiRkaXNwbGF5NC1zaXplOiAgICAgICAgICAgICAgIDMuNXJlbSAhZGVmYXVsdDtcblxuJGRpc3BsYXkxLXdlaWdodDogICAgICAgICAgICAgMzAwICFkZWZhdWx0O1xuJGRpc3BsYXkyLXdlaWdodDogICAgICAgICAgICAgMzAwICFkZWZhdWx0O1xuJGRpc3BsYXkzLXdlaWdodDogICAgICAgICAgICAgMzAwICFkZWZhdWx0O1xuJGRpc3BsYXk0LXdlaWdodDogICAgICAgICAgICAgMzAwICFkZWZhdWx0O1xuJGRpc3BsYXktbGluZS1oZWlnaHQ6ICAgICAgICAgJGhlYWRpbmdzLWxpbmUtaGVpZ2h0ICFkZWZhdWx0O1xuXG4kbGVhZC1mb250LXNpemU6ICAgICAgICAgICAgICAkZm9udC1zaXplLWJhc2UgKiAxLjI1ICFkZWZhdWx0O1xuJGxlYWQtZm9udC13ZWlnaHQ6ICAgICAgICAgICAgMzAwICFkZWZhdWx0O1xuXG4kc21hbGwtZm9udC1zaXplOiAgICAgICAgICAgICA4MCUgIWRlZmF1bHQ7XG5cbiR0ZXh0LW11dGVkOiAgICAgICAgICAgICAgICAgICRncmF5LTYwMCAhZGVmYXVsdDtcblxuJGJsb2NrcXVvdGUtc21hbGwtY29sb3I6ICAgICAgJGdyYXktNjAwICFkZWZhdWx0O1xuJGJsb2NrcXVvdGUtc21hbGwtZm9udC1zaXplOiAgJHNtYWxsLWZvbnQtc2l6ZSAhZGVmYXVsdDtcbiRibG9ja3F1b3RlLWZvbnQtc2l6ZTogICAgICAgICRmb250LXNpemUtYmFzZSAqIDEuMjUgIWRlZmF1bHQ7XG5cbiRoci1ib3JkZXItY29sb3I6ICAgICAgICAgICAgIHJnYmEoJGJsYWNrLCAuMSkgIWRlZmF1bHQ7XG4kaHItYm9yZGVyLXdpZHRoOiAgICAgICAgICAgICAkYm9yZGVyLXdpZHRoICFkZWZhdWx0O1xuXG4kbWFyay1wYWRkaW5nOiAgICAgICAgICAgICAgICAuMmVtICFkZWZhdWx0O1xuXG4kZHQtZm9udC13ZWlnaHQ6ICAgICAgICAgICAgICAkZm9udC13ZWlnaHQtYm9sZCAhZGVmYXVsdDtcblxuJGtiZC1ib3gtc2hhZG93OiAgICAgICAgICAgICAgaW5zZXQgMCAtLjFyZW0gMCByZ2JhKCRibGFjaywgLjI1KSAhZGVmYXVsdDtcbiRuZXN0ZWQta2JkLWZvbnQtd2VpZ2h0OiAgICAgICRmb250LXdlaWdodC1ib2xkICFkZWZhdWx0O1xuXG4kbGlzdC1pbmxpbmUtcGFkZGluZzogICAgICAgICAuNXJlbSAhZGVmYXVsdDtcblxuJG1hcmstYmc6ICAgICAgICAgICAgICAgICAgICAgI2ZjZjhlMyAhZGVmYXVsdDtcblxuJGhyLW1hcmdpbi15OiAgICAgICAgICAgICAgICAgJHNwYWNlciAhZGVmYXVsdDtcblxuXG4vLyBUYWJsZXNcbi8vXG4vLyBDdXN0b21pemVzIHRoZSBgLnRhYmxlYCBjb21wb25lbnQgd2l0aCBiYXNpYyB2YWx1ZXMsIGVhY2ggdXNlZCBhY3Jvc3MgYWxsIHRhYmxlIHZhcmlhdGlvbnMuXG5cbiR0YWJsZS1jZWxsLXBhZGRpbmc6ICAgICAgICAgIC43NXJlbSAhZGVmYXVsdDtcbiR0YWJsZS1jZWxsLXBhZGRpbmctc206ICAgICAgIC4zcmVtICFkZWZhdWx0O1xuXG4kdGFibGUtY29sb3I6ICAgICAgICAgICAgICAgICAkYm9keS1jb2xvciAhZGVmYXVsdDtcbiR0YWJsZS1iZzogICAgICAgICAgICAgICAgICAgIG51bGwgIWRlZmF1bHQ7XG4kdGFibGUtYWNjZW50LWJnOiAgICAgICAgICAgICByZ2JhKCRibGFjaywgLjA1KSAhZGVmYXVsdDtcbiR0YWJsZS1ob3Zlci1jb2xvcjogICAgICAgICAgICR0YWJsZS1jb2xvciAhZGVmYXVsdDtcbiR0YWJsZS1ob3Zlci1iZzogICAgICAgICAgICAgIHJnYmEoJGJsYWNrLCAuMDc1KSAhZGVmYXVsdDtcbiR0YWJsZS1hY3RpdmUtYmc6ICAgICAgICAgICAgICR0YWJsZS1ob3Zlci1iZyAhZGVmYXVsdDtcblxuJHRhYmxlLWJvcmRlci13aWR0aDogICAgICAgICAgJGJvcmRlci13aWR0aCAhZGVmYXVsdDtcbiR0YWJsZS1ib3JkZXItY29sb3I6ICAgICAgICAgICRib3JkZXItY29sb3IgIWRlZmF1bHQ7XG5cbiR0YWJsZS1oZWFkLWJnOiAgICAgICAgICAgICAgICRncmF5LTIwMCAhZGVmYXVsdDtcbiR0YWJsZS1oZWFkLWNvbG9yOiAgICAgICAgICAgICRncmF5LTcwMCAhZGVmYXVsdDtcblxuJHRhYmxlLWRhcmstY29sb3I6ICAgICAgICAgICAgJHdoaXRlICFkZWZhdWx0O1xuJHRhYmxlLWRhcmstYmc6ICAgICAgICAgICAgICAgJGdyYXktODAwICFkZWZhdWx0O1xuJHRhYmxlLWRhcmstYWNjZW50LWJnOiAgICAgICAgcmdiYSgkd2hpdGUsIC4wNSkgIWRlZmF1bHQ7XG4kdGFibGUtZGFyay1ob3Zlci1jb2xvcjogICAgICAkdGFibGUtZGFyay1jb2xvciAhZGVmYXVsdDtcbiR0YWJsZS1kYXJrLWhvdmVyLWJnOiAgICAgICAgIHJnYmEoJHdoaXRlLCAuMDc1KSAhZGVmYXVsdDtcbiR0YWJsZS1kYXJrLWJvcmRlci1jb2xvcjogICAgIGxpZ2h0ZW4oJHRhYmxlLWRhcmstYmcsIDcuNSUpICFkZWZhdWx0O1xuJHRhYmxlLWRhcmstY29sb3I6ICAgICAgICAgICAgJHdoaXRlICFkZWZhdWx0O1xuXG4kdGFibGUtc3RyaXBlZC1vcmRlcjogICAgICAgICBvZGQgIWRlZmF1bHQ7XG5cbiR0YWJsZS1jYXB0aW9uLWNvbG9yOiAgICAgICAgICR0ZXh0LW11dGVkICFkZWZhdWx0O1xuXG4kdGFibGUtYmctbGV2ZWw6ICAgICAgICAgICAgICAtOSAhZGVmYXVsdDtcbiR0YWJsZS1ib3JkZXItbGV2ZWw6ICAgICAgICAgIC02ICFkZWZhdWx0O1xuXG5cbi8vIEJ1dHRvbnMgKyBGb3Jtc1xuLy9cbi8vIFNoYXJlZCB2YXJpYWJsZXMgdGhhdCBhcmUgcmVhc3NpZ25lZCB0byBgJGlucHV0LWAgYW5kIGAkYnRuLWAgc3BlY2lmaWMgdmFyaWFibGVzLlxuXG4kaW5wdXQtYnRuLXBhZGRpbmcteTogICAgICAgICAuMzc1cmVtICFkZWZhdWx0O1xuJGlucHV0LWJ0bi1wYWRkaW5nLXg6ICAgICAgICAgLjc1cmVtICFkZWZhdWx0O1xuJGlucHV0LWJ0bi1mb250LWZhbWlseTogICAgICAgbnVsbCAhZGVmYXVsdDtcbiRpbnB1dC1idG4tZm9udC1zaXplOiAgICAgICAgICRmb250LXNpemUtYmFzZSAhZGVmYXVsdDtcbiRpbnB1dC1idG4tbGluZS1oZWlnaHQ6ICAgICAgICRsaW5lLWhlaWdodC1iYXNlICFkZWZhdWx0O1xuXG4kaW5wdXQtYnRuLWZvY3VzLXdpZHRoOiAgICAgICAuMnJlbSAhZGVmYXVsdDtcbiRpbnB1dC1idG4tZm9jdXMtY29sb3I6ICAgICAgIHJnYmEoJGNvbXBvbmVudC1hY3RpdmUtYmcsIC4yNSkgIWRlZmF1bHQ7XG4kaW5wdXQtYnRuLWZvY3VzLWJveC1zaGFkb3c6ICAwIDAgMCAkaW5wdXQtYnRuLWZvY3VzLXdpZHRoICRpbnB1dC1idG4tZm9jdXMtY29sb3IgIWRlZmF1bHQ7XG5cbiRpbnB1dC1idG4tcGFkZGluZy15LXNtOiAgICAgIC4yNXJlbSAhZGVmYXVsdDtcbiRpbnB1dC1idG4tcGFkZGluZy14LXNtOiAgICAgIC41cmVtICFkZWZhdWx0O1xuJGlucHV0LWJ0bi1mb250LXNpemUtc206ICAgICAgJGZvbnQtc2l6ZS1zbSAhZGVmYXVsdDtcbiRpbnB1dC1idG4tbGluZS1oZWlnaHQtc206ICAgICRsaW5lLWhlaWdodC1zbSAhZGVmYXVsdDtcblxuJGlucHV0LWJ0bi1wYWRkaW5nLXktbGc6ICAgICAgLjVyZW0gIWRlZmF1bHQ7XG4kaW5wdXQtYnRuLXBhZGRpbmcteC1sZzogICAgICAxcmVtICFkZWZhdWx0O1xuJGlucHV0LWJ0bi1mb250LXNpemUtbGc6ICAgICAgJGZvbnQtc2l6ZS1sZyAhZGVmYXVsdDtcbiRpbnB1dC1idG4tbGluZS1oZWlnaHQtbGc6ICAgICRsaW5lLWhlaWdodC1sZyAhZGVmYXVsdDtcblxuJGlucHV0LWJ0bi1ib3JkZXItd2lkdGg6ICAgICAgJGJvcmRlci13aWR0aCAhZGVmYXVsdDtcblxuXG4vLyBCdXR0b25zXG4vL1xuLy8gRm9yIGVhY2ggb2YgQm9vdHN0cmFwJ3MgYnV0dG9ucywgZGVmaW5lIHRleHQsIGJhY2tncm91bmQsIGFuZCBib3JkZXIgY29sb3IuXG5cbiRidG4tcGFkZGluZy15OiAgICAgICAgICAgICAgICRpbnB1dC1idG4tcGFkZGluZy15ICFkZWZhdWx0O1xuJGJ0bi1wYWRkaW5nLXg6ICAgICAgICAgICAgICAgJGlucHV0LWJ0bi1wYWRkaW5nLXggIWRlZmF1bHQ7XG4kYnRuLWZvbnQtZmFtaWx5OiAgICAgICAgICAgICAkaW5wdXQtYnRuLWZvbnQtZmFtaWx5ICFkZWZhdWx0O1xuJGJ0bi1mb250LXNpemU6ICAgICAgICAgICAgICAgJGlucHV0LWJ0bi1mb250LXNpemUgIWRlZmF1bHQ7XG4kYnRuLWxpbmUtaGVpZ2h0OiAgICAgICAgICAgICAkaW5wdXQtYnRuLWxpbmUtaGVpZ2h0ICFkZWZhdWx0O1xuXG4kYnRuLXBhZGRpbmcteS1zbTogICAgICAgICAgICAkaW5wdXQtYnRuLXBhZGRpbmcteS1zbSAhZGVmYXVsdDtcbiRidG4tcGFkZGluZy14LXNtOiAgICAgICAgICAgICRpbnB1dC1idG4tcGFkZGluZy14LXNtICFkZWZhdWx0O1xuJGJ0bi1mb250LXNpemUtc206ICAgICAgICAgICAgJGlucHV0LWJ0bi1mb250LXNpemUtc20gIWRlZmF1bHQ7XG4kYnRuLWxpbmUtaGVpZ2h0LXNtOiAgICAgICAgICAkaW5wdXQtYnRuLWxpbmUtaGVpZ2h0LXNtICFkZWZhdWx0O1xuXG4kYnRuLXBhZGRpbmcteS1sZzogICAgICAgICAgICAkaW5wdXQtYnRuLXBhZGRpbmcteS1sZyAhZGVmYXVsdDtcbiRidG4tcGFkZGluZy14LWxnOiAgICAgICAgICAgICRpbnB1dC1idG4tcGFkZGluZy14LWxnICFkZWZhdWx0O1xuJGJ0bi1mb250LXNpemUtbGc6ICAgICAgICAgICAgJGlucHV0LWJ0bi1mb250LXNpemUtbGcgIWRlZmF1bHQ7XG4kYnRuLWxpbmUtaGVpZ2h0LWxnOiAgICAgICAgICAkaW5wdXQtYnRuLWxpbmUtaGVpZ2h0LWxnICFkZWZhdWx0O1xuXG4kYnRuLWJvcmRlci13aWR0aDogICAgICAgICAgICAkaW5wdXQtYnRuLWJvcmRlci13aWR0aCAhZGVmYXVsdDtcblxuJGJ0bi1mb250LXdlaWdodDogICAgICAgICAgICAgJGZvbnQtd2VpZ2h0LW5vcm1hbCAhZGVmYXVsdDtcbiRidG4tYm94LXNoYWRvdzogICAgICAgICAgICAgIGluc2V0IDAgMXB4IDAgcmdiYSgkd2hpdGUsIC4xNSksIDAgMXB4IDFweCByZ2JhKCRibGFjaywgLjA3NSkgIWRlZmF1bHQ7XG4kYnRuLWZvY3VzLXdpZHRoOiAgICAgICAgICAgICAkaW5wdXQtYnRuLWZvY3VzLXdpZHRoICFkZWZhdWx0O1xuJGJ0bi1mb2N1cy1ib3gtc2hhZG93OiAgICAgICAgJGlucHV0LWJ0bi1mb2N1cy1ib3gtc2hhZG93ICFkZWZhdWx0O1xuJGJ0bi1kaXNhYmxlZC1vcGFjaXR5OiAgICAgICAgLjY1ICFkZWZhdWx0O1xuJGJ0bi1hY3RpdmUtYm94LXNoYWRvdzogICAgICAgaW5zZXQgMCAzcHggNXB4IHJnYmEoJGJsYWNrLCAuMTI1KSAhZGVmYXVsdDtcblxuJGJ0bi1saW5rLWRpc2FibGVkLWNvbG9yOiAgICAgJGdyYXktNjAwICFkZWZhdWx0O1xuXG4kYnRuLWJsb2NrLXNwYWNpbmcteTogICAgICAgICAuNXJlbSAhZGVmYXVsdDtcblxuLy8gQWxsb3dzIGZvciBjdXN0b21pemluZyBidXR0b24gcmFkaXVzIGluZGVwZW5kZW50bHkgZnJvbSBnbG9iYWwgYm9yZGVyIHJhZGl1c1xuJGJ0bi1ib3JkZXItcmFkaXVzOiAgICAgICAgICAgJGJvcmRlci1yYWRpdXMgIWRlZmF1bHQ7XG4kYnRuLWJvcmRlci1yYWRpdXMtbGc6ICAgICAgICAkYm9yZGVyLXJhZGl1cy1sZyAhZGVmYXVsdDtcbiRidG4tYm9yZGVyLXJhZGl1cy1zbTogICAgICAgICRib3JkZXItcmFkaXVzLXNtICFkZWZhdWx0O1xuXG4kYnRuLXRyYW5zaXRpb246ICAgICAgICAgICAgICBjb2xvciAuMTVzIGVhc2UtaW4tb3V0LCBiYWNrZ3JvdW5kLWNvbG9yIC4xNXMgZWFzZS1pbi1vdXQsIGJvcmRlci1jb2xvciAuMTVzIGVhc2UtaW4tb3V0LCBib3gtc2hhZG93IC4xNXMgZWFzZS1pbi1vdXQgIWRlZmF1bHQ7XG5cblxuLy8gRm9ybXNcblxuJGxhYmVsLW1hcmdpbi1ib3R0b206ICAgICAgICAgICAgICAgICAgIC41cmVtICFkZWZhdWx0O1xuXG4kaW5wdXQtcGFkZGluZy15OiAgICAgICAgICAgICAgICAgICAgICAgJGlucHV0LWJ0bi1wYWRkaW5nLXkgIWRlZmF1bHQ7XG4kaW5wdXQtcGFkZGluZy14OiAgICAgICAgICAgICAgICAgICAgICAgJGlucHV0LWJ0bi1wYWRkaW5nLXggIWRlZmF1bHQ7XG4kaW5wdXQtZm9udC1mYW1pbHk6ICAgICAgICAgICAgICAgICAgICAgJGlucHV0LWJ0bi1mb250LWZhbWlseSAhZGVmYXVsdDtcbiRpbnB1dC1mb250LXNpemU6ICAgICAgICAgICAgICAgICAgICAgICAkaW5wdXQtYnRuLWZvbnQtc2l6ZSAhZGVmYXVsdDtcbiRpbnB1dC1mb250LXdlaWdodDogICAgICAgICAgICAgICAgICAgICAkZm9udC13ZWlnaHQtYmFzZSAhZGVmYXVsdDtcbiRpbnB1dC1saW5lLWhlaWdodDogICAgICAgICAgICAgICAgICAgICAkaW5wdXQtYnRuLWxpbmUtaGVpZ2h0ICFkZWZhdWx0O1xuXG4kaW5wdXQtcGFkZGluZy15LXNtOiAgICAgICAgICAgICAgICAgICAgJGlucHV0LWJ0bi1wYWRkaW5nLXktc20gIWRlZmF1bHQ7XG4kaW5wdXQtcGFkZGluZy14LXNtOiAgICAgICAgICAgICAgICAgICAgJGlucHV0LWJ0bi1wYWRkaW5nLXgtc20gIWRlZmF1bHQ7XG4kaW5wdXQtZm9udC1zaXplLXNtOiAgICAgICAgICAgICAgICAgICAgJGlucHV0LWJ0bi1mb250LXNpemUtc20gIWRlZmF1bHQ7XG4kaW5wdXQtbGluZS1oZWlnaHQtc206ICAgICAgICAgICAgICAgICAgJGlucHV0LWJ0bi1saW5lLWhlaWdodC1zbSAhZGVmYXVsdDtcblxuJGlucHV0LXBhZGRpbmcteS1sZzogICAgICAgICAgICAgICAgICAgICRpbnB1dC1idG4tcGFkZGluZy15LWxnICFkZWZhdWx0O1xuJGlucHV0LXBhZGRpbmcteC1sZzogICAgICAgICAgICAgICAgICAgICRpbnB1dC1idG4tcGFkZGluZy14LWxnICFkZWZhdWx0O1xuJGlucHV0LWZvbnQtc2l6ZS1sZzogICAgICAgICAgICAgICAgICAgICRpbnB1dC1idG4tZm9udC1zaXplLWxnICFkZWZhdWx0O1xuJGlucHV0LWxpbmUtaGVpZ2h0LWxnOiAgICAgICAgICAgICAgICAgICRpbnB1dC1idG4tbGluZS1oZWlnaHQtbGcgIWRlZmF1bHQ7XG5cbiRpbnB1dC1iZzogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkd2hpdGUgIWRlZmF1bHQ7XG4kaW5wdXQtZGlzYWJsZWQtYmc6ICAgICAgICAgICAgICAgICAgICAgJGdyYXktMjAwICFkZWZhdWx0O1xuXG4kaW5wdXQtY29sb3I6ICAgICAgICAgICAgICAgICAgICAgICAgICAgJGdyYXktNzAwICFkZWZhdWx0O1xuJGlucHV0LWJvcmRlci1jb2xvcjogICAgICAgICAgICAgICAgICAgICRncmF5LTQwMCAhZGVmYXVsdDtcbiRpbnB1dC1ib3JkZXItd2lkdGg6ICAgICAgICAgICAgICAgICAgICAkaW5wdXQtYnRuLWJvcmRlci13aWR0aCAhZGVmYXVsdDtcbiRpbnB1dC1ib3gtc2hhZG93OiAgICAgICAgICAgICAgICAgICAgICBpbnNldCAwIDFweCAxcHggcmdiYSgkYmxhY2ssIC4wNzUpICFkZWZhdWx0O1xuXG4kaW5wdXQtYm9yZGVyLXJhZGl1czogICAgICAgICAgICAgICAgICAgJGJvcmRlci1yYWRpdXMgIWRlZmF1bHQ7XG4kaW5wdXQtYm9yZGVyLXJhZGl1cy1sZzogICAgICAgICAgICAgICAgJGJvcmRlci1yYWRpdXMtbGcgIWRlZmF1bHQ7XG4kaW5wdXQtYm9yZGVyLXJhZGl1cy1zbTogICAgICAgICAgICAgICAgJGJvcmRlci1yYWRpdXMtc20gIWRlZmF1bHQ7XG5cbiRpbnB1dC1mb2N1cy1iZzogICAgICAgICAgICAgICAgICAgICAgICAkaW5wdXQtYmcgIWRlZmF1bHQ7XG4kaW5wdXQtZm9jdXMtYm9yZGVyLWNvbG9yOiAgICAgICAgICAgICAgbGlnaHRlbigkY29tcG9uZW50LWFjdGl2ZS1iZywgMjUlKSAhZGVmYXVsdDtcbiRpbnB1dC1mb2N1cy1jb2xvcjogICAgICAgICAgICAgICAgICAgICAkaW5wdXQtY29sb3IgIWRlZmF1bHQ7XG4kaW5wdXQtZm9jdXMtd2lkdGg6ICAgICAgICAgICAgICAgICAgICAgJGlucHV0LWJ0bi1mb2N1cy13aWR0aCAhZGVmYXVsdDtcbiRpbnB1dC1mb2N1cy1ib3gtc2hhZG93OiAgICAgICAgICAgICAgICAkaW5wdXQtYnRuLWZvY3VzLWJveC1zaGFkb3cgIWRlZmF1bHQ7XG5cbiRpbnB1dC1wbGFjZWhvbGRlci1jb2xvcjogICAgICAgICAgICAgICAkZ3JheS02MDAgIWRlZmF1bHQ7XG4kaW5wdXQtcGxhaW50ZXh0LWNvbG9yOiAgICAgICAgICAgICAgICAgJGJvZHktY29sb3IgIWRlZmF1bHQ7XG5cbiRpbnB1dC1oZWlnaHQtYm9yZGVyOiAgICAgICAgICAgICAgICAgICAkaW5wdXQtYm9yZGVyLXdpZHRoICogMiAhZGVmYXVsdDtcblxuJGlucHV0LWhlaWdodC1pbm5lcjogICAgICAgICAgICAgICAgICAgIGNhbGMoI3skaW5wdXQtbGluZS1oZWlnaHQgKiAxZW19ICsgI3skaW5wdXQtcGFkZGluZy15ICogMn0pICFkZWZhdWx0O1xuJGlucHV0LWhlaWdodC1pbm5lci1oYWxmOiAgICAgICAgICAgICAgIGNhbGMoI3skaW5wdXQtbGluZS1oZWlnaHQgKiAuNWVtfSArICN7JGlucHV0LXBhZGRpbmcteX0pICFkZWZhdWx0O1xuJGlucHV0LWhlaWdodC1pbm5lci1xdWFydGVyOiAgICAgICAgICAgIGNhbGMoI3skaW5wdXQtbGluZS1oZWlnaHQgKiAuMjVlbX0gKyAjeyRpbnB1dC1wYWRkaW5nLXkgLyAyfSkgIWRlZmF1bHQ7XG5cbiRpbnB1dC1oZWlnaHQ6ICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxjKCN7JGlucHV0LWxpbmUtaGVpZ2h0ICogMWVtfSArICN7JGlucHV0LXBhZGRpbmcteSAqIDJ9ICsgI3skaW5wdXQtaGVpZ2h0LWJvcmRlcn0pICFkZWZhdWx0O1xuJGlucHV0LWhlaWdodC1zbTogICAgICAgICAgICAgICAgICAgICAgIGNhbGMoI3skaW5wdXQtbGluZS1oZWlnaHQtc20gKiAxZW19ICsgI3skaW5wdXQtYnRuLXBhZGRpbmcteS1zbSAqIDJ9ICsgI3skaW5wdXQtaGVpZ2h0LWJvcmRlcn0pICFkZWZhdWx0O1xuJGlucHV0LWhlaWdodC1sZzogICAgICAgICAgICAgICAgICAgICAgIGNhbGMoI3skaW5wdXQtbGluZS1oZWlnaHQtbGcgKiAxZW19ICsgI3skaW5wdXQtYnRuLXBhZGRpbmcteS1sZyAqIDJ9ICsgI3skaW5wdXQtaGVpZ2h0LWJvcmRlcn0pICFkZWZhdWx0O1xuXG4kaW5wdXQtdHJhbnNpdGlvbjogICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWNvbG9yIC4xNXMgZWFzZS1pbi1vdXQsIGJveC1zaGFkb3cgLjE1cyBlYXNlLWluLW91dCAhZGVmYXVsdDtcblxuJGZvcm0tdGV4dC1tYXJnaW4tdG9wOiAgICAgICAgICAgICAgICAgIC4yNXJlbSAhZGVmYXVsdDtcblxuJGZvcm0tY2hlY2staW5wdXQtZ3V0dGVyOiAgICAgICAgICAgICAgIDEuMjVyZW0gIWRlZmF1bHQ7XG4kZm9ybS1jaGVjay1pbnB1dC1tYXJnaW4teTogICAgICAgICAgICAgLjNyZW0gIWRlZmF1bHQ7XG4kZm9ybS1jaGVjay1pbnB1dC1tYXJnaW4teDogICAgICAgICAgICAgLjI1cmVtICFkZWZhdWx0O1xuXG4kZm9ybS1jaGVjay1pbmxpbmUtbWFyZ2luLXg6ICAgICAgICAgICAgLjc1cmVtICFkZWZhdWx0O1xuJGZvcm0tY2hlY2staW5saW5lLWlucHV0LW1hcmdpbi14OiAgICAgIC4zMTI1cmVtICFkZWZhdWx0O1xuXG4kZm9ybS1ncmlkLWd1dHRlci13aWR0aDogICAgICAgICAgICAgICAgMTBweCAhZGVmYXVsdDtcbiRmb3JtLWdyb3VwLW1hcmdpbi1ib3R0b206ICAgICAgICAgICAgICAxcmVtICFkZWZhdWx0O1xuXG4kaW5wdXQtZ3JvdXAtYWRkb24tY29sb3I6ICAgICAgICAgICAgICAgJGlucHV0LWNvbG9yICFkZWZhdWx0O1xuJGlucHV0LWdyb3VwLWFkZG9uLWJnOiAgICAgICAgICAgICAgICAgICRncmF5LTIwMCAhZGVmYXVsdDtcbiRpbnB1dC1ncm91cC1hZGRvbi1ib3JkZXItY29sb3I6ICAgICAgICAkaW5wdXQtYm9yZGVyLWNvbG9yICFkZWZhdWx0O1xuXG4kY3VzdG9tLWZvcm1zLXRyYW5zaXRpb246ICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvciAuMTVzIGVhc2UtaW4tb3V0LCBib3JkZXItY29sb3IgLjE1cyBlYXNlLWluLW91dCwgYm94LXNoYWRvdyAuMTVzIGVhc2UtaW4tb3V0ICFkZWZhdWx0O1xuXG4kY3VzdG9tLWNvbnRyb2wtZ3V0dGVyOiAgICAgICAgICAgICAgICAgLjVyZW0gIWRlZmF1bHQ7XG4kY3VzdG9tLWNvbnRyb2wtc3BhY2VyLXg6ICAgICAgICAgICAgICAgMXJlbSAhZGVmYXVsdDtcblxuJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1zaXplOiAgICAgICAgIDFyZW0gIWRlZmF1bHQ7XG4kY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLWJnOiAgICAgICAgICAgJGlucHV0LWJnICFkZWZhdWx0O1xuXG4kY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLWJnLXNpemU6ICAgICAgNTAlIDUwJSAhZGVmYXVsdDtcbiRjdXN0b20tY29udHJvbC1pbmRpY2F0b3ItYm94LXNoYWRvdzogICAkaW5wdXQtYm94LXNoYWRvdyAhZGVmYXVsdDtcbiRjdXN0b20tY29udHJvbC1pbmRpY2F0b3ItYm9yZGVyLWNvbG9yOiAkZ3JheS01MDAgIWRlZmF1bHQ7XG4kY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLWJvcmRlci13aWR0aDogJGlucHV0LWJvcmRlci13aWR0aCAhZGVmYXVsdDtcblxuJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1kaXNhYmxlZC1iZzogICAgICAgICAgJGlucHV0LWRpc2FibGVkLWJnICFkZWZhdWx0O1xuJGN1c3RvbS1jb250cm9sLWxhYmVsLWRpc2FibGVkLWNvbG9yOiAgICAgICAgICAgJGdyYXktNjAwICFkZWZhdWx0O1xuXG4kY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLWNoZWNrZWQtY29sb3I6ICAgICAgICAkY29tcG9uZW50LWFjdGl2ZS1jb2xvciAhZGVmYXVsdDtcbiRjdXN0b20tY29udHJvbC1pbmRpY2F0b3ItY2hlY2tlZC1iZzogICAgICAgICAgICRjb21wb25lbnQtYWN0aXZlLWJnICFkZWZhdWx0O1xuJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1jaGVja2VkLWRpc2FibGVkLWJnOiAgcmdiYSh0aGVtZS1jb2xvcihcInByaW1hcnlcIiksIC41KSAhZGVmYXVsdDtcbiRjdXN0b20tY29udHJvbC1pbmRpY2F0b3ItY2hlY2tlZC1ib3gtc2hhZG93OiAgIG5vbmUgIWRlZmF1bHQ7XG4kY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiAkY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLWNoZWNrZWQtYmcgIWRlZmF1bHQ7XG5cbiRjdXN0b20tY29udHJvbC1pbmRpY2F0b3ItZm9jdXMtYm94LXNoYWRvdzogICAgICRpbnB1dC1mb2N1cy1ib3gtc2hhZG93ICFkZWZhdWx0O1xuJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1mb2N1cy1ib3JkZXItY29sb3I6ICAgJGlucHV0LWZvY3VzLWJvcmRlci1jb2xvciAhZGVmYXVsdDtcblxuJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1hY3RpdmUtY29sb3I6ICAgICAgICAgJGNvbXBvbmVudC1hY3RpdmUtY29sb3IgIWRlZmF1bHQ7XG4kY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLWFjdGl2ZS1iZzogICAgICAgICAgICBsaWdodGVuKCRjb21wb25lbnQtYWN0aXZlLWJnLCAzNSUpICFkZWZhdWx0O1xuJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1hY3RpdmUtYm94LXNoYWRvdzogICAgbm9uZSAhZGVmYXVsdDtcbiRjdXN0b20tY29udHJvbC1pbmRpY2F0b3ItYWN0aXZlLWJvcmRlci1jb2xvcjogICRjdXN0b20tY29udHJvbC1pbmRpY2F0b3ItYWN0aXZlLWJnICFkZWZhdWx0O1xuXG4kY3VzdG9tLWNoZWNrYm94LWluZGljYXRvci1ib3JkZXItcmFkaXVzOiAgICAgICAkYm9yZGVyLXJhZGl1cyAhZGVmYXVsdDtcbiRjdXN0b20tY2hlY2tib3gtaW5kaWNhdG9yLWljb24tY2hlY2tlZDogICAgICAgIHN0ci1yZXBsYWNlKHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM2NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgOCA4JyUzZSUzY3BhdGggZmlsbD0nI3skY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLWNoZWNrZWQtY29sb3J9JyBkPSdNNi41NjQuNzVsLTMuNTkgMy42MTItMS41MzgtMS41NUwwIDQuMjYgMi45NzQgNy4yNSA4IDIuMTkzeicvJTNlJTNjL3N2ZyUzZVwiKSwgXCIjXCIsIFwiJTIzXCIpICFkZWZhdWx0O1xuXG4kY3VzdG9tLWNoZWNrYm94LWluZGljYXRvci1pbmRldGVybWluYXRlLWJnOiAgICAgICAgICAgJGNvbXBvbmVudC1hY3RpdmUtYmcgIWRlZmF1bHQ7XG4kY3VzdG9tLWNoZWNrYm94LWluZGljYXRvci1pbmRldGVybWluYXRlLWNvbG9yOiAgICAgICAgJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1jaGVja2VkLWNvbG9yICFkZWZhdWx0O1xuJGN1c3RvbS1jaGVja2JveC1pbmRpY2F0b3ItaWNvbi1pbmRldGVybWluYXRlOiAgICAgICAgIHN0ci1yZXBsYWNlKHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM2NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgNCA0JyUzZSUzY3BhdGggc3Ryb2tlPScjeyRjdXN0b20tY2hlY2tib3gtaW5kaWNhdG9yLWluZGV0ZXJtaW5hdGUtY29sb3J9JyBkPSdNMCAyaDQnLyUzZSUzYy9zdmclM2VcIiksIFwiI1wiLCBcIiUyM1wiKSAhZGVmYXVsdDtcbiRjdXN0b20tY2hlY2tib3gtaW5kaWNhdG9yLWluZGV0ZXJtaW5hdGUtYm94LXNoYWRvdzogICBub25lICFkZWZhdWx0O1xuJGN1c3RvbS1jaGVja2JveC1pbmRpY2F0b3ItaW5kZXRlcm1pbmF0ZS1ib3JkZXItY29sb3I6ICRjdXN0b20tY2hlY2tib3gtaW5kaWNhdG9yLWluZGV0ZXJtaW5hdGUtYmcgIWRlZmF1bHQ7XG5cbiRjdXN0b20tcmFkaW8taW5kaWNhdG9yLWJvcmRlci1yYWRpdXM6ICAgICAgICAgIDUwJSAhZGVmYXVsdDtcbiRjdXN0b20tcmFkaW8taW5kaWNhdG9yLWljb24tY2hlY2tlZDogICAgICAgICAgIHN0ci1yZXBsYWNlKHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM2NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PSctNCAtNCA4IDgnJTNlJTNjY2lyY2xlIHI9JzMnIGZpbGw9JyN7JGN1c3RvbS1jb250cm9sLWluZGljYXRvci1jaGVja2VkLWNvbG9yfScvJTNlJTNjL3N2ZyUzZVwiKSwgXCIjXCIsIFwiJTIzXCIpICFkZWZhdWx0O1xuXG4kY3VzdG9tLXN3aXRjaC13aWR0aDogICAgICAgICAgICAgICAgICAgICAgICAgICAkY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLXNpemUgKiAxLjc1ICFkZWZhdWx0O1xuJGN1c3RvbS1zd2l0Y2gtaW5kaWNhdG9yLWJvcmRlci1yYWRpdXM6ICAgICAgICAgJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1zaXplIC8gMiAhZGVmYXVsdDtcbiRjdXN0b20tc3dpdGNoLWluZGljYXRvci1zaXplOiAgICAgICAgICAgICAgICAgIGNhbGMoI3skY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLXNpemV9IC0gI3skY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLWJvcmRlci13aWR0aCAqIDR9KSAhZGVmYXVsdDtcblxuJGN1c3RvbS1zZWxlY3QtcGFkZGluZy15OiAgICAgICAgICAgJGlucHV0LXBhZGRpbmcteSAhZGVmYXVsdDtcbiRjdXN0b20tc2VsZWN0LXBhZGRpbmcteDogICAgICAgICAgICRpbnB1dC1wYWRkaW5nLXggIWRlZmF1bHQ7XG4kY3VzdG9tLXNlbGVjdC1mb250LWZhbWlseTogICAgICAgICAkaW5wdXQtZm9udC1mYW1pbHkgIWRlZmF1bHQ7XG4kY3VzdG9tLXNlbGVjdC1mb250LXNpemU6ICAgICAgICAgICAkaW5wdXQtZm9udC1zaXplICFkZWZhdWx0O1xuJGN1c3RvbS1zZWxlY3QtaGVpZ2h0OiAgICAgICAgICAgICAgJGlucHV0LWhlaWdodCAhZGVmYXVsdDtcbiRjdXN0b20tc2VsZWN0LWluZGljYXRvci1wYWRkaW5nOiAgIDFyZW0gIWRlZmF1bHQ7IC8vIEV4dHJhIHBhZGRpbmcgdG8gYWNjb3VudCBmb3IgdGhlIHByZXNlbmNlIG9mIHRoZSBiYWNrZ3JvdW5kLWltYWdlIGJhc2VkIGluZGljYXRvclxuJGN1c3RvbS1zZWxlY3QtZm9udC13ZWlnaHQ6ICAgICAgICAgJGlucHV0LWZvbnQtd2VpZ2h0ICFkZWZhdWx0O1xuJGN1c3RvbS1zZWxlY3QtbGluZS1oZWlnaHQ6ICAgICAgICAgJGlucHV0LWxpbmUtaGVpZ2h0ICFkZWZhdWx0O1xuJGN1c3RvbS1zZWxlY3QtY29sb3I6ICAgICAgICAgICAgICAgJGlucHV0LWNvbG9yICFkZWZhdWx0O1xuJGN1c3RvbS1zZWxlY3QtZGlzYWJsZWQtY29sb3I6ICAgICAgJGdyYXktNjAwICFkZWZhdWx0O1xuJGN1c3RvbS1zZWxlY3QtYmc6ICAgICAgICAgICAgICAgICAgJGlucHV0LWJnICFkZWZhdWx0O1xuJGN1c3RvbS1zZWxlY3QtZGlzYWJsZWQtYmc6ICAgICAgICAgJGdyYXktMjAwICFkZWZhdWx0O1xuJGN1c3RvbS1zZWxlY3QtYmctc2l6ZTogICAgICAgICAgICAgOHB4IDEwcHggIWRlZmF1bHQ7IC8vIEluIHBpeGVscyBiZWNhdXNlIGltYWdlIGRpbWVuc2lvbnNcbiRjdXN0b20tc2VsZWN0LWluZGljYXRvci1jb2xvcjogICAgICRncmF5LTgwMCAhZGVmYXVsdDtcbiRjdXN0b20tc2VsZWN0LWluZGljYXRvcjogICAgICAgICAgIHN0ci1yZXBsYWNlKHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM2NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgNCA1JyUzZSUzY3BhdGggZmlsbD0nI3skY3VzdG9tLXNlbGVjdC1pbmRpY2F0b3ItY29sb3J9JyBkPSdNMiAwTDAgMmg0em0wIDVMMCAzaDR6Jy8lM2UlM2Mvc3ZnJTNlXCIpLCBcIiNcIiwgXCIlMjNcIikgIWRlZmF1bHQ7XG4kY3VzdG9tLXNlbGVjdC1iYWNrZ3JvdW5kOiAgICAgICAgICAkY3VzdG9tLXNlbGVjdC1pbmRpY2F0b3Igbm8tcmVwZWF0IHJpZ2h0ICRjdXN0b20tc2VsZWN0LXBhZGRpbmcteCBjZW50ZXIgLyAkY3VzdG9tLXNlbGVjdC1iZy1zaXplICFkZWZhdWx0OyAvLyBVc2VkIHNvIHdlIGNhbiBoYXZlIG11bHRpcGxlIGJhY2tncm91bmQgZWxlbWVudHMgKGUuZy4sIGFycm93IGFuZCBmZWVkYmFjayBpY29uKVxuXG4kY3VzdG9tLXNlbGVjdC1mZWVkYmFjay1pY29uLXBhZGRpbmctcmlnaHQ6IGNhbGMoKDFlbSArICN7MiAqICRjdXN0b20tc2VsZWN0LXBhZGRpbmcteX0pICogMyAvIDQgKyAjeyRjdXN0b20tc2VsZWN0LXBhZGRpbmcteCArICRjdXN0b20tc2VsZWN0LWluZGljYXRvci1wYWRkaW5nfSkgIWRlZmF1bHQ7XG4kY3VzdG9tLXNlbGVjdC1mZWVkYmFjay1pY29uLXBvc2l0aW9uOiAgICAgIGNlbnRlciByaWdodCAoJGN1c3RvbS1zZWxlY3QtcGFkZGluZy14ICsgJGN1c3RvbS1zZWxlY3QtaW5kaWNhdG9yLXBhZGRpbmcpICFkZWZhdWx0O1xuJGN1c3RvbS1zZWxlY3QtZmVlZGJhY2staWNvbi1zaXplOiAgICAgICAgICAkaW5wdXQtaGVpZ2h0LWlubmVyLWhhbGYgJGlucHV0LWhlaWdodC1pbm5lci1oYWxmICFkZWZhdWx0O1xuXG4kY3VzdG9tLXNlbGVjdC1ib3JkZXItd2lkdGg6ICAgICAgICAkaW5wdXQtYm9yZGVyLXdpZHRoICFkZWZhdWx0O1xuJGN1c3RvbS1zZWxlY3QtYm9yZGVyLWNvbG9yOiAgICAgICAgJGlucHV0LWJvcmRlci1jb2xvciAhZGVmYXVsdDtcbiRjdXN0b20tc2VsZWN0LWJvcmRlci1yYWRpdXM6ICAgICAgICRib3JkZXItcmFkaXVzICFkZWZhdWx0O1xuJGN1c3RvbS1zZWxlY3QtYm94LXNoYWRvdzogICAgICAgICAgaW5zZXQgMCAxcHggMnB4IHJnYmEoJGJsYWNrLCAuMDc1KSAhZGVmYXVsdDtcblxuJGN1c3RvbS1zZWxlY3QtZm9jdXMtYm9yZGVyLWNvbG9yOiAgJGlucHV0LWZvY3VzLWJvcmRlci1jb2xvciAhZGVmYXVsdDtcbiRjdXN0b20tc2VsZWN0LWZvY3VzLXdpZHRoOiAgICAgICAgICRpbnB1dC1mb2N1cy13aWR0aCAhZGVmYXVsdDtcbiRjdXN0b20tc2VsZWN0LWZvY3VzLWJveC1zaGFkb3c6ICAgIDAgMCAwICRjdXN0b20tc2VsZWN0LWZvY3VzLXdpZHRoICRpbnB1dC1idG4tZm9jdXMtY29sb3IgIWRlZmF1bHQ7XG5cbiRjdXN0b20tc2VsZWN0LXBhZGRpbmcteS1zbTogICAgICAgICRpbnB1dC1wYWRkaW5nLXktc20gIWRlZmF1bHQ7XG4kY3VzdG9tLXNlbGVjdC1wYWRkaW5nLXgtc206ICAgICAgICAkaW5wdXQtcGFkZGluZy14LXNtICFkZWZhdWx0O1xuJGN1c3RvbS1zZWxlY3QtZm9udC1zaXplLXNtOiAgICAgICAgJGlucHV0LWZvbnQtc2l6ZS1zbSAhZGVmYXVsdDtcbiRjdXN0b20tc2VsZWN0LWhlaWdodC1zbTogICAgICAgICAgICRpbnB1dC1oZWlnaHQtc20gIWRlZmF1bHQ7XG5cbiRjdXN0b20tc2VsZWN0LXBhZGRpbmcteS1sZzogICAgICAgICRpbnB1dC1wYWRkaW5nLXktbGcgIWRlZmF1bHQ7XG4kY3VzdG9tLXNlbGVjdC1wYWRkaW5nLXgtbGc6ICAgICAgICAkaW5wdXQtcGFkZGluZy14LWxnICFkZWZhdWx0O1xuJGN1c3RvbS1zZWxlY3QtZm9udC1zaXplLWxnOiAgICAgICAgJGlucHV0LWZvbnQtc2l6ZS1sZyAhZGVmYXVsdDtcbiRjdXN0b20tc2VsZWN0LWhlaWdodC1sZzogICAgICAgICAgICRpbnB1dC1oZWlnaHQtbGcgIWRlZmF1bHQ7XG5cbiRjdXN0b20tcmFuZ2UtdHJhY2std2lkdGg6ICAgICAgICAgIDEwMCUgIWRlZmF1bHQ7XG4kY3VzdG9tLXJhbmdlLXRyYWNrLWhlaWdodDogICAgICAgICAuNXJlbSAhZGVmYXVsdDtcbiRjdXN0b20tcmFuZ2UtdHJhY2stY3Vyc29yOiAgICAgICAgIHBvaW50ZXIgIWRlZmF1bHQ7XG4kY3VzdG9tLXJhbmdlLXRyYWNrLWJnOiAgICAgICAgICAgICAkZ3JheS0zMDAgIWRlZmF1bHQ7XG4kY3VzdG9tLXJhbmdlLXRyYWNrLWJvcmRlci1yYWRpdXM6ICAxcmVtICFkZWZhdWx0O1xuJGN1c3RvbS1yYW5nZS10cmFjay1ib3gtc2hhZG93OiAgICAgaW5zZXQgMCAuMjVyZW0gLjI1cmVtIHJnYmEoJGJsYWNrLCAuMSkgIWRlZmF1bHQ7XG5cbiRjdXN0b20tcmFuZ2UtdGh1bWItd2lkdGg6ICAgICAgICAgICAgICAgICAgIDFyZW0gIWRlZmF1bHQ7XG4kY3VzdG9tLXJhbmdlLXRodW1iLWhlaWdodDogICAgICAgICAgICAgICAgICAkY3VzdG9tLXJhbmdlLXRodW1iLXdpZHRoICFkZWZhdWx0O1xuJGN1c3RvbS1yYW5nZS10aHVtYi1iZzogICAgICAgICAgICAgICAgICAgICAgJGNvbXBvbmVudC1hY3RpdmUtYmcgIWRlZmF1bHQ7XG4kY3VzdG9tLXJhbmdlLXRodW1iLWJvcmRlcjogICAgICAgICAgICAgICAgICAwICFkZWZhdWx0O1xuJGN1c3RvbS1yYW5nZS10aHVtYi1ib3JkZXItcmFkaXVzOiAgICAgICAgICAgMXJlbSAhZGVmYXVsdDtcbiRjdXN0b20tcmFuZ2UtdGh1bWItYm94LXNoYWRvdzogICAgICAgICAgICAgIDAgLjFyZW0gLjI1cmVtIHJnYmEoJGJsYWNrLCAuMSkgIWRlZmF1bHQ7XG4kY3VzdG9tLXJhbmdlLXRodW1iLWZvY3VzLWJveC1zaGFkb3c6ICAgICAgICAwIDAgMCAxcHggJGJvZHktYmcsICRpbnB1dC1mb2N1cy1ib3gtc2hhZG93ICFkZWZhdWx0O1xuJGN1c3RvbS1yYW5nZS10aHVtYi1mb2N1cy1ib3gtc2hhZG93LXdpZHRoOiAgJGlucHV0LWZvY3VzLXdpZHRoICFkZWZhdWx0OyAvLyBGb3IgZm9jdXMgYm94IHNoYWRvdyBpc3N1ZSBpbiBJRS9FZGdlXG4kY3VzdG9tLXJhbmdlLXRodW1iLWFjdGl2ZS1iZzogICAgICAgICAgICAgICBsaWdodGVuKCRjb21wb25lbnQtYWN0aXZlLWJnLCAzNSUpICFkZWZhdWx0O1xuJGN1c3RvbS1yYW5nZS10aHVtYi1kaXNhYmxlZC1iZzogICAgICAgICAgICAgJGdyYXktNTAwICFkZWZhdWx0O1xuXG4kY3VzdG9tLWZpbGUtaGVpZ2h0OiAgICAgICAgICAgICAgICAkaW5wdXQtaGVpZ2h0ICFkZWZhdWx0O1xuJGN1c3RvbS1maWxlLWhlaWdodC1pbm5lcjogICAgICAgICAgJGlucHV0LWhlaWdodC1pbm5lciAhZGVmYXVsdDtcbiRjdXN0b20tZmlsZS1mb2N1cy1ib3JkZXItY29sb3I6ICAgICRpbnB1dC1mb2N1cy1ib3JkZXItY29sb3IgIWRlZmF1bHQ7XG4kY3VzdG9tLWZpbGUtZm9jdXMtYm94LXNoYWRvdzogICAgICAkaW5wdXQtZm9jdXMtYm94LXNoYWRvdyAhZGVmYXVsdDtcbiRjdXN0b20tZmlsZS1kaXNhYmxlZC1iZzogICAgICAgICAgICRpbnB1dC1kaXNhYmxlZC1iZyAhZGVmYXVsdDtcblxuJGN1c3RvbS1maWxlLXBhZGRpbmcteTogICAgICAgICAgICAgJGlucHV0LXBhZGRpbmcteSAhZGVmYXVsdDtcbiRjdXN0b20tZmlsZS1wYWRkaW5nLXg6ICAgICAgICAgICAgICRpbnB1dC1wYWRkaW5nLXggIWRlZmF1bHQ7XG4kY3VzdG9tLWZpbGUtbGluZS1oZWlnaHQ6ICAgICAgICAgICAkaW5wdXQtbGluZS1oZWlnaHQgIWRlZmF1bHQ7XG4kY3VzdG9tLWZpbGUtZm9udC1mYW1pbHk6ICAgICAgICAgICAkaW5wdXQtZm9udC1mYW1pbHkgIWRlZmF1bHQ7XG4kY3VzdG9tLWZpbGUtZm9udC13ZWlnaHQ6ICAgICAgICAgICAkaW5wdXQtZm9udC13ZWlnaHQgIWRlZmF1bHQ7XG4kY3VzdG9tLWZpbGUtY29sb3I6ICAgICAgICAgICAgICAgICAkaW5wdXQtY29sb3IgIWRlZmF1bHQ7XG4kY3VzdG9tLWZpbGUtYmc6ICAgICAgICAgICAgICAgICAgICAkaW5wdXQtYmcgIWRlZmF1bHQ7XG4kY3VzdG9tLWZpbGUtYm9yZGVyLXdpZHRoOiAgICAgICAgICAkaW5wdXQtYm9yZGVyLXdpZHRoICFkZWZhdWx0O1xuJGN1c3RvbS1maWxlLWJvcmRlci1jb2xvcjogICAgICAgICAgJGlucHV0LWJvcmRlci1jb2xvciAhZGVmYXVsdDtcbiRjdXN0b20tZmlsZS1ib3JkZXItcmFkaXVzOiAgICAgICAgICRpbnB1dC1ib3JkZXItcmFkaXVzICFkZWZhdWx0O1xuJGN1c3RvbS1maWxlLWJveC1zaGFkb3c6ICAgICAgICAgICAgJGlucHV0LWJveC1zaGFkb3cgIWRlZmF1bHQ7XG4kY3VzdG9tLWZpbGUtYnV0dG9uLWNvbG9yOiAgICAgICAgICAkY3VzdG9tLWZpbGUtY29sb3IgIWRlZmF1bHQ7XG4kY3VzdG9tLWZpbGUtYnV0dG9uLWJnOiAgICAgICAgICAgICAkaW5wdXQtZ3JvdXAtYWRkb24tYmcgIWRlZmF1bHQ7XG4kY3VzdG9tLWZpbGUtdGV4dDogKFxuICBlbjogXCJCcm93c2VcIlxuKSAhZGVmYXVsdDtcblxuXG4vLyBGb3JtIHZhbGlkYXRpb25cblxuJGZvcm0tZmVlZGJhY2stbWFyZ2luLXRvcDogICAgICAgICAgJGZvcm0tdGV4dC1tYXJnaW4tdG9wICFkZWZhdWx0O1xuJGZvcm0tZmVlZGJhY2stZm9udC1zaXplOiAgICAgICAgICAgJHNtYWxsLWZvbnQtc2l6ZSAhZGVmYXVsdDtcbiRmb3JtLWZlZWRiYWNrLXZhbGlkLWNvbG9yOiAgICAgICAgIHRoZW1lLWNvbG9yKFwic3VjY2Vzc1wiKSAhZGVmYXVsdDtcbiRmb3JtLWZlZWRiYWNrLWludmFsaWQtY29sb3I6ICAgICAgIHRoZW1lLWNvbG9yKFwiZGFuZ2VyXCIpICFkZWZhdWx0O1xuXG4kZm9ybS1mZWVkYmFjay1pY29uLXZhbGlkLWNvbG9yOiAgICAkZm9ybS1mZWVkYmFjay12YWxpZC1jb2xvciAhZGVmYXVsdDtcbiRmb3JtLWZlZWRiYWNrLWljb24tdmFsaWQ6ICAgICAgICAgIHN0ci1yZXBsYWNlKHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM2NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgOCA4JyUzZSUzY3BhdGggZmlsbD0nI3skZm9ybS1mZWVkYmFjay1pY29uLXZhbGlkLWNvbG9yfScgZD0nTTIuMyA2LjczTC42IDQuNTNjLS40LTEuMDQuNDYtMS40IDEuMS0uOGwxLjEgMS40IDMuNC0zLjhjLjYtLjYzIDEuNi0uMjcgMS4yLjdsLTQgNC42Yy0uNDMuNS0uOC40LTEuMS4xeicvJTNlJTNjL3N2ZyUzZVwiKSwgXCIjXCIsIFwiJTIzXCIpICFkZWZhdWx0O1xuJGZvcm0tZmVlZGJhY2staWNvbi1pbnZhbGlkLWNvbG9yOiAgJGZvcm0tZmVlZGJhY2staW52YWxpZC1jb2xvciAhZGVmYXVsdDtcbiRmb3JtLWZlZWRiYWNrLWljb24taW52YWxpZDogICAgICAgIHN0ci1yZXBsYWNlKHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM2NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyBmaWxsPScjeyRmb3JtLWZlZWRiYWNrLWljb24taW52YWxpZC1jb2xvcn0nIHZpZXdCb3g9Jy0yIC0yIDcgNyclM2UlM2NwYXRoIHN0cm9rZT0nI3skZm9ybS1mZWVkYmFjay1pY29uLWludmFsaWQtY29sb3J9JyBkPSdNMCAwbDMgM20wLTNMMCAzJy8lM2UlM2NjaXJjbGUgcj0nLjUnLyUzZSUzY2NpcmNsZSBjeD0nMycgcj0nLjUnLyUzZSUzY2NpcmNsZSBjeT0nMycgcj0nLjUnLyUzZSUzY2NpcmNsZSBjeD0nMycgY3k9JzMnIHI9Jy41Jy8lM2UlM2Mvc3ZnJTNFXCIpLCBcIiNcIiwgXCIlMjNcIikgIWRlZmF1bHQ7XG5cbiRmb3JtLXZhbGlkYXRpb24tc3RhdGVzOiAoKSAhZGVmYXVsdDtcbi8vIHN0eWxlbGludC1kaXNhYmxlLW5leHQtbGluZSBzY3NzL2RvbGxhci12YXJpYWJsZS1kZWZhdWx0XG4kZm9ybS12YWxpZGF0aW9uLXN0YXRlczogbWFwLW1lcmdlKFxuICAoXG4gICAgXCJ2YWxpZFwiOiAoXG4gICAgICBcImNvbG9yXCI6ICRmb3JtLWZlZWRiYWNrLXZhbGlkLWNvbG9yLFxuICAgICAgXCJpY29uXCI6ICRmb3JtLWZlZWRiYWNrLWljb24tdmFsaWRcbiAgICApLFxuICAgIFwiaW52YWxpZFwiOiAoXG4gICAgICBcImNvbG9yXCI6ICRmb3JtLWZlZWRiYWNrLWludmFsaWQtY29sb3IsXG4gICAgICBcImljb25cIjogJGZvcm0tZmVlZGJhY2staWNvbi1pbnZhbGlkXG4gICAgKSxcbiAgKSxcbiAgJGZvcm0tdmFsaWRhdGlvbi1zdGF0ZXNcbik7XG5cbi8vIFotaW5kZXggbWFzdGVyIGxpc3Rcbi8vXG4vLyBXYXJuaW5nOiBBdm9pZCBjdXN0b21pemluZyB0aGVzZSB2YWx1ZXMuIFRoZXkncmUgdXNlZCBmb3IgYSBiaXJkJ3MgZXllIHZpZXdcbi8vIG9mIGNvbXBvbmVudHMgZGVwZW5kZW50IG9uIHRoZSB6LWF4aXMgYW5kIGFyZSBkZXNpZ25lZCB0byBhbGwgd29yayB0b2dldGhlci5cblxuJHppbmRleC1kcm9wZG93bjogICAgICAgICAgICAgICAgICAgMTAwMCAhZGVmYXVsdDtcbiR6aW5kZXgtc3RpY2t5OiAgICAgICAgICAgICAgICAgICAgIDEwMjAgIWRlZmF1bHQ7XG4kemluZGV4LWZpeGVkOiAgICAgICAgICAgICAgICAgICAgICAxMDMwICFkZWZhdWx0O1xuJHppbmRleC1tb2RhbC1iYWNrZHJvcDogICAgICAgICAgICAgMTA0MCAhZGVmYXVsdDtcbiR6aW5kZXgtbW9kYWw6ICAgICAgICAgICAgICAgICAgICAgIDEwNTAgIWRlZmF1bHQ7XG4kemluZGV4LXBvcG92ZXI6ICAgICAgICAgICAgICAgICAgICAxMDYwICFkZWZhdWx0O1xuJHppbmRleC10b29sdGlwOiAgICAgICAgICAgICAgICAgICAgMTA3MCAhZGVmYXVsdDtcblxuXG4vLyBOYXZzXG5cbiRuYXYtbGluay1wYWRkaW5nLXk6ICAgICAgICAgICAgICAgIC41cmVtICFkZWZhdWx0O1xuJG5hdi1saW5rLXBhZGRpbmcteDogICAgICAgICAgICAgICAgMXJlbSAhZGVmYXVsdDtcbiRuYXYtbGluay1kaXNhYmxlZC1jb2xvcjogICAgICAgICAgICRncmF5LTYwMCAhZGVmYXVsdDtcblxuJG5hdi10YWJzLWJvcmRlci1jb2xvcjogICAgICAgICAgICAgJGdyYXktMzAwICFkZWZhdWx0O1xuJG5hdi10YWJzLWJvcmRlci13aWR0aDogICAgICAgICAgICAgJGJvcmRlci13aWR0aCAhZGVmYXVsdDtcbiRuYXYtdGFicy1ib3JkZXItcmFkaXVzOiAgICAgICAgICAgICRib3JkZXItcmFkaXVzICFkZWZhdWx0O1xuJG5hdi10YWJzLWxpbmstaG92ZXItYm9yZGVyLWNvbG9yOiAgJGdyYXktMjAwICRncmF5LTIwMCAkbmF2LXRhYnMtYm9yZGVyLWNvbG9yICFkZWZhdWx0O1xuJG5hdi10YWJzLWxpbmstYWN0aXZlLWNvbG9yOiAgICAgICAgJGdyYXktNzAwICFkZWZhdWx0O1xuJG5hdi10YWJzLWxpbmstYWN0aXZlLWJnOiAgICAgICAgICAgJGJvZHktYmcgIWRlZmF1bHQ7XG4kbmF2LXRhYnMtbGluay1hY3RpdmUtYm9yZGVyLWNvbG9yOiAkZ3JheS0zMDAgJGdyYXktMzAwICRuYXYtdGFicy1saW5rLWFjdGl2ZS1iZyAhZGVmYXVsdDtcblxuJG5hdi1waWxscy1ib3JkZXItcmFkaXVzOiAgICAgICAgICAgJGJvcmRlci1yYWRpdXMgIWRlZmF1bHQ7XG4kbmF2LXBpbGxzLWxpbmstYWN0aXZlLWNvbG9yOiAgICAgICAkY29tcG9uZW50LWFjdGl2ZS1jb2xvciAhZGVmYXVsdDtcbiRuYXYtcGlsbHMtbGluay1hY3RpdmUtYmc6ICAgICAgICAgICRjb21wb25lbnQtYWN0aXZlLWJnICFkZWZhdWx0O1xuXG4kbmF2LWRpdmlkZXItY29sb3I6ICAgICAgICAgICAgICAgICAkZ3JheS0yMDAgIWRlZmF1bHQ7XG4kbmF2LWRpdmlkZXItbWFyZ2luLXk6ICAgICAgICAgICAgICAkc3BhY2VyIC8gMiAhZGVmYXVsdDtcblxuXG4vLyBOYXZiYXJcblxuJG5hdmJhci1wYWRkaW5nLXk6ICAgICAgICAgICAgICAgICAgJHNwYWNlciAvIDIgIWRlZmF1bHQ7XG4kbmF2YmFyLXBhZGRpbmcteDogICAgICAgICAgICAgICAgICAkc3BhY2VyICFkZWZhdWx0O1xuXG4kbmF2YmFyLW5hdi1saW5rLXBhZGRpbmcteDogICAgICAgICAuNXJlbSAhZGVmYXVsdDtcblxuJG5hdmJhci1icmFuZC1mb250LXNpemU6ICAgICAgICAgICAgJGZvbnQtc2l6ZS1sZyAhZGVmYXVsdDtcbi8vIENvbXB1dGUgdGhlIG5hdmJhci1icmFuZCBwYWRkaW5nLXkgc28gdGhlIG5hdmJhci1icmFuZCB3aWxsIGhhdmUgdGhlIHNhbWUgaGVpZ2h0IGFzIG5hdmJhci10ZXh0IGFuZCBuYXYtbGlua1xuJG5hdi1saW5rLWhlaWdodDogICAgICAgICAgICAgICAgICAgJGZvbnQtc2l6ZS1iYXNlICogJGxpbmUtaGVpZ2h0LWJhc2UgKyAkbmF2LWxpbmstcGFkZGluZy15ICogMiAhZGVmYXVsdDtcbiRuYXZiYXItYnJhbmQtaGVpZ2h0OiAgICAgICAgICAgICAgICRuYXZiYXItYnJhbmQtZm9udC1zaXplICogJGxpbmUtaGVpZ2h0LWJhc2UgIWRlZmF1bHQ7XG4kbmF2YmFyLWJyYW5kLXBhZGRpbmcteTogICAgICAgICAgICAoJG5hdi1saW5rLWhlaWdodCAtICRuYXZiYXItYnJhbmQtaGVpZ2h0KSAvIDIgIWRlZmF1bHQ7XG5cbiRuYXZiYXItdG9nZ2xlci1wYWRkaW5nLXk6ICAgICAgICAgIC4yNXJlbSAhZGVmYXVsdDtcbiRuYXZiYXItdG9nZ2xlci1wYWRkaW5nLXg6ICAgICAgICAgIC43NXJlbSAhZGVmYXVsdDtcbiRuYXZiYXItdG9nZ2xlci1mb250LXNpemU6ICAgICAgICAgICRmb250LXNpemUtbGcgIWRlZmF1bHQ7XG4kbmF2YmFyLXRvZ2dsZXItYm9yZGVyLXJhZGl1czogICAgICAkYnRuLWJvcmRlci1yYWRpdXMgIWRlZmF1bHQ7XG5cbiRuYXZiYXItZGFyay1jb2xvcjogICAgICAgICAgICAgICAgIHJnYmEoJHdoaXRlLCAuNSkgIWRlZmF1bHQ7XG4kbmF2YmFyLWRhcmstaG92ZXItY29sb3I6ICAgICAgICAgICByZ2JhKCR3aGl0ZSwgLjc1KSAhZGVmYXVsdDtcbiRuYXZiYXItZGFyay1hY3RpdmUtY29sb3I6ICAgICAgICAgICR3aGl0ZSAhZGVmYXVsdDtcbiRuYXZiYXItZGFyay1kaXNhYmxlZC1jb2xvcjogICAgICAgIHJnYmEoJHdoaXRlLCAuMjUpICFkZWZhdWx0O1xuJG5hdmJhci1kYXJrLXRvZ2dsZXItaWNvbi1iZzogICAgICAgc3RyLXJlcGxhY2UodXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLCUzY3N2ZyB2aWV3Qm94PScwIDAgMzAgMzAnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyclM2UlM2NwYXRoIHN0cm9rZT0nI3skbmF2YmFyLWRhcmstY29sb3J9JyBzdHJva2Utd2lkdGg9JzInIHN0cm9rZS1saW5lY2FwPSdyb3VuZCcgc3Ryb2tlLW1pdGVybGltaXQ9JzEwJyBkPSdNNCA3aDIyTTQgMTVoMjJNNCAyM2gyMicvJTNlJTNjL3N2ZyUzZVwiKSwgXCIjXCIsIFwiJTIzXCIpICFkZWZhdWx0O1xuJG5hdmJhci1kYXJrLXRvZ2dsZXItYm9yZGVyLWNvbG9yOiAgcmdiYSgkd2hpdGUsIC4xKSAhZGVmYXVsdDtcblxuJG5hdmJhci1saWdodC1jb2xvcjogICAgICAgICAgICAgICAgcmdiYSgkYmxhY2ssIC41KSAhZGVmYXVsdDtcbiRuYXZiYXItbGlnaHQtaG92ZXItY29sb3I6ICAgICAgICAgIHJnYmEoJGJsYWNrLCAuNykgIWRlZmF1bHQ7XG4kbmF2YmFyLWxpZ2h0LWFjdGl2ZS1jb2xvcjogICAgICAgICByZ2JhKCRibGFjaywgLjkpICFkZWZhdWx0O1xuJG5hdmJhci1saWdodC1kaXNhYmxlZC1jb2xvcjogICAgICAgcmdiYSgkYmxhY2ssIC4zKSAhZGVmYXVsdDtcbiRuYXZiYXItbGlnaHQtdG9nZ2xlci1pY29uLWJnOiAgICAgIHN0ci1yZXBsYWNlKHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM2Nzdmcgdmlld0JveD0nMCAwIDMwIDMwJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnJTNlJTNjcGF0aCBzdHJva2U9JyN7JG5hdmJhci1saWdodC1jb2xvcn0nIHN0cm9rZS13aWR0aD0nMicgc3Ryb2tlLWxpbmVjYXA9J3JvdW5kJyBzdHJva2UtbWl0ZXJsaW1pdD0nMTAnIGQ9J000IDdoMjJNNCAxNWgyMk00IDIzaDIyJy8lM2UlM2Mvc3ZnJTNlXCIpLCBcIiNcIiwgXCIlMjNcIikgIWRlZmF1bHQ7XG4kbmF2YmFyLWxpZ2h0LXRvZ2dsZXItYm9yZGVyLWNvbG9yOiByZ2JhKCRibGFjaywgLjEpICFkZWZhdWx0O1xuXG4kbmF2YmFyLWxpZ2h0LWJyYW5kLWNvbG9yOiAgICAgICAgICAgICAgICAkbmF2YmFyLWxpZ2h0LWFjdGl2ZS1jb2xvciAhZGVmYXVsdDtcbiRuYXZiYXItbGlnaHQtYnJhbmQtaG92ZXItY29sb3I6ICAgICAgICAgICRuYXZiYXItbGlnaHQtYWN0aXZlLWNvbG9yICFkZWZhdWx0O1xuJG5hdmJhci1kYXJrLWJyYW5kLWNvbG9yOiAgICAgICAgICAgICAgICAgJG5hdmJhci1kYXJrLWFjdGl2ZS1jb2xvciAhZGVmYXVsdDtcbiRuYXZiYXItZGFyay1icmFuZC1ob3Zlci1jb2xvcjogICAgICAgICAgICRuYXZiYXItZGFyay1hY3RpdmUtY29sb3IgIWRlZmF1bHQ7XG5cblxuLy8gRHJvcGRvd25zXG4vL1xuLy8gRHJvcGRvd24gbWVudSBjb250YWluZXIgYW5kIGNvbnRlbnRzLlxuXG4kZHJvcGRvd24tbWluLXdpZHRoOiAgICAgICAgICAgICAgICAxMHJlbSAhZGVmYXVsdDtcbiRkcm9wZG93bi1wYWRkaW5nLXk6ICAgICAgICAgICAgICAgIC41cmVtICFkZWZhdWx0O1xuJGRyb3Bkb3duLXNwYWNlcjogICAgICAgICAgICAgICAgICAgLjEyNXJlbSAhZGVmYXVsdDtcbiRkcm9wZG93bi1mb250LXNpemU6ICAgICAgICAgICAgICAgICRmb250LXNpemUtYmFzZSAhZGVmYXVsdDtcbiRkcm9wZG93bi1jb2xvcjogICAgICAgICAgICAgICAgICAgICRib2R5LWNvbG9yICFkZWZhdWx0O1xuJGRyb3Bkb3duLWJnOiAgICAgICAgICAgICAgICAgICAgICAgJHdoaXRlICFkZWZhdWx0O1xuJGRyb3Bkb3duLWJvcmRlci1jb2xvcjogICAgICAgICAgICAgcmdiYSgkYmxhY2ssIC4xNSkgIWRlZmF1bHQ7XG4kZHJvcGRvd24tYm9yZGVyLXJhZGl1czogICAgICAgICAgICAkYm9yZGVyLXJhZGl1cyAhZGVmYXVsdDtcbiRkcm9wZG93bi1ib3JkZXItd2lkdGg6ICAgICAgICAgICAgICRib3JkZXItd2lkdGggIWRlZmF1bHQ7XG4kZHJvcGRvd24taW5uZXItYm9yZGVyLXJhZGl1czogICAgICBjYWxjKCN7JGRyb3Bkb3duLWJvcmRlci1yYWRpdXN9IC0gI3skZHJvcGRvd24tYm9yZGVyLXdpZHRofSkgIWRlZmF1bHQ7XG4kZHJvcGRvd24tZGl2aWRlci1iZzogICAgICAgICAgICAgICAkZ3JheS0yMDAgIWRlZmF1bHQ7XG4kZHJvcGRvd24tZGl2aWRlci1tYXJnaW4teTogICAgICAgICAkbmF2LWRpdmlkZXItbWFyZ2luLXkgIWRlZmF1bHQ7XG4kZHJvcGRvd24tYm94LXNoYWRvdzogICAgICAgICAgICAgICAwIC41cmVtIDFyZW0gcmdiYSgkYmxhY2ssIC4xNzUpICFkZWZhdWx0O1xuXG4kZHJvcGRvd24tbGluay1jb2xvcjogICAgICAgICAgICAgICAkZ3JheS05MDAgIWRlZmF1bHQ7XG4kZHJvcGRvd24tbGluay1ob3Zlci1jb2xvcjogICAgICAgICBkYXJrZW4oJGdyYXktOTAwLCA1JSkgIWRlZmF1bHQ7XG4kZHJvcGRvd24tbGluay1ob3Zlci1iZzogICAgICAgICAgICAkZ3JheS0xMDAgIWRlZmF1bHQ7XG5cbiRkcm9wZG93bi1saW5rLWFjdGl2ZS1jb2xvcjogICAgICAgICRjb21wb25lbnQtYWN0aXZlLWNvbG9yICFkZWZhdWx0O1xuJGRyb3Bkb3duLWxpbmstYWN0aXZlLWJnOiAgICAgICAgICAgJGNvbXBvbmVudC1hY3RpdmUtYmcgIWRlZmF1bHQ7XG5cbiRkcm9wZG93bi1saW5rLWRpc2FibGVkLWNvbG9yOiAgICAgICRncmF5LTYwMCAhZGVmYXVsdDtcblxuJGRyb3Bkb3duLWl0ZW0tcGFkZGluZy15OiAgICAgICAgICAgLjI1cmVtICFkZWZhdWx0O1xuJGRyb3Bkb3duLWl0ZW0tcGFkZGluZy14OiAgICAgICAgICAgMS41cmVtICFkZWZhdWx0O1xuXG4kZHJvcGRvd24taGVhZGVyLWNvbG9yOiAgICAgICAgICAgICAkZ3JheS02MDAgIWRlZmF1bHQ7XG5cblxuLy8gUGFnaW5hdGlvblxuXG4kcGFnaW5hdGlvbi1wYWRkaW5nLXk6ICAgICAgICAgICAgICAuNXJlbSAhZGVmYXVsdDtcbiRwYWdpbmF0aW9uLXBhZGRpbmcteDogICAgICAgICAgICAgIC43NXJlbSAhZGVmYXVsdDtcbiRwYWdpbmF0aW9uLXBhZGRpbmcteS1zbTogICAgICAgICAgIC4yNXJlbSAhZGVmYXVsdDtcbiRwYWdpbmF0aW9uLXBhZGRpbmcteC1zbTogICAgICAgICAgIC41cmVtICFkZWZhdWx0O1xuJHBhZ2luYXRpb24tcGFkZGluZy15LWxnOiAgICAgICAgICAgLjc1cmVtICFkZWZhdWx0O1xuJHBhZ2luYXRpb24tcGFkZGluZy14LWxnOiAgICAgICAgICAgMS41cmVtICFkZWZhdWx0O1xuJHBhZ2luYXRpb24tbGluZS1oZWlnaHQ6ICAgICAgICAgICAgMS4yNSAhZGVmYXVsdDtcblxuJHBhZ2luYXRpb24tY29sb3I6ICAgICAgICAgICAgICAgICAgJGxpbmstY29sb3IgIWRlZmF1bHQ7XG4kcGFnaW5hdGlvbi1iZzogICAgICAgICAgICAgICAgICAgICAkd2hpdGUgIWRlZmF1bHQ7XG4kcGFnaW5hdGlvbi1ib3JkZXItd2lkdGg6ICAgICAgICAgICAkYm9yZGVyLXdpZHRoICFkZWZhdWx0O1xuJHBhZ2luYXRpb24tYm9yZGVyLWNvbG9yOiAgICAgICAgICAgJGdyYXktMzAwICFkZWZhdWx0O1xuXG4kcGFnaW5hdGlvbi1mb2N1cy1ib3gtc2hhZG93OiAgICAgICAkaW5wdXQtYnRuLWZvY3VzLWJveC1zaGFkb3cgIWRlZmF1bHQ7XG4kcGFnaW5hdGlvbi1mb2N1cy1vdXRsaW5lOiAgICAgICAgICAwICFkZWZhdWx0O1xuXG4kcGFnaW5hdGlvbi1ob3Zlci1jb2xvcjogICAgICAgICAgICAkbGluay1ob3Zlci1jb2xvciAhZGVmYXVsdDtcbiRwYWdpbmF0aW9uLWhvdmVyLWJnOiAgICAgICAgICAgICAgICRncmF5LTIwMCAhZGVmYXVsdDtcbiRwYWdpbmF0aW9uLWhvdmVyLWJvcmRlci1jb2xvcjogICAgICRncmF5LTMwMCAhZGVmYXVsdDtcblxuJHBhZ2luYXRpb24tYWN0aXZlLWNvbG9yOiAgICAgICAgICAgJGNvbXBvbmVudC1hY3RpdmUtY29sb3IgIWRlZmF1bHQ7XG4kcGFnaW5hdGlvbi1hY3RpdmUtYmc6ICAgICAgICAgICAgICAkY29tcG9uZW50LWFjdGl2ZS1iZyAhZGVmYXVsdDtcbiRwYWdpbmF0aW9uLWFjdGl2ZS1ib3JkZXItY29sb3I6ICAgICRwYWdpbmF0aW9uLWFjdGl2ZS1iZyAhZGVmYXVsdDtcblxuJHBhZ2luYXRpb24tZGlzYWJsZWQtY29sb3I6ICAgICAgICAgJGdyYXktNjAwICFkZWZhdWx0O1xuJHBhZ2luYXRpb24tZGlzYWJsZWQtYmc6ICAgICAgICAgICAgJHdoaXRlICFkZWZhdWx0O1xuJHBhZ2luYXRpb24tZGlzYWJsZWQtYm9yZGVyLWNvbG9yOiAgJGdyYXktMzAwICFkZWZhdWx0O1xuXG5cbi8vIEp1bWJvdHJvblxuXG4kanVtYm90cm9uLXBhZGRpbmc6ICAgICAgICAgICAgICAgICAycmVtICFkZWZhdWx0O1xuJGp1bWJvdHJvbi1jb2xvcjogICAgICAgICAgICAgICAgICAgbnVsbCAhZGVmYXVsdDtcbiRqdW1ib3Ryb24tYmc6ICAgICAgICAgICAgICAgICAgICAgICRncmF5LTIwMCAhZGVmYXVsdDtcblxuXG4vLyBDYXJkc1xuXG4kY2FyZC1zcGFjZXIteTogICAgICAgICAgICAgICAgICAgICAuNzVyZW0gIWRlZmF1bHQ7XG4kY2FyZC1zcGFjZXIteDogICAgICAgICAgICAgICAgICAgICAxLjI1cmVtICFkZWZhdWx0O1xuJGNhcmQtYm9yZGVyLXdpZHRoOiAgICAgICAgICAgICAgICAgJGJvcmRlci13aWR0aCAhZGVmYXVsdDtcbiRjYXJkLWJvcmRlci1yYWRpdXM6ICAgICAgICAgICAgICAgICRib3JkZXItcmFkaXVzICFkZWZhdWx0O1xuJGNhcmQtYm9yZGVyLWNvbG9yOiAgICAgICAgICAgICAgICAgcmdiYSgkYmxhY2ssIC4xMjUpICFkZWZhdWx0O1xuJGNhcmQtaW5uZXItYm9yZGVyLXJhZGl1czogICAgICAgICAgY2FsYygjeyRjYXJkLWJvcmRlci1yYWRpdXN9IC0gI3skY2FyZC1ib3JkZXItd2lkdGh9KSAhZGVmYXVsdDtcbiRjYXJkLWNhcC1iZzogICAgICAgICAgICAgICAgICAgICAgIHJnYmEoJGJsYWNrLCAuMDMpICFkZWZhdWx0O1xuJGNhcmQtY2FwLWNvbG9yOiAgICAgICAgICAgICAgICAgICAgbnVsbCAhZGVmYXVsdDtcbiRjYXJkLWNvbG9yOiAgICAgICAgICAgICAgICAgICAgICAgIG51bGwgIWRlZmF1bHQ7XG4kY2FyZC1iZzogICAgICAgICAgICAgICAgICAgICAgICAgICAkd2hpdGUgIWRlZmF1bHQ7XG5cbiRjYXJkLWltZy1vdmVybGF5LXBhZGRpbmc6ICAgICAgICAgIDEuMjVyZW0gIWRlZmF1bHQ7XG5cbiRjYXJkLWdyb3VwLW1hcmdpbjogICAgICAgICAgICAgICAgICRncmlkLWd1dHRlci13aWR0aCAvIDIgIWRlZmF1bHQ7XG4kY2FyZC1kZWNrLW1hcmdpbjogICAgICAgICAgICAgICAgICAkY2FyZC1ncm91cC1tYXJnaW4gIWRlZmF1bHQ7XG5cbiRjYXJkLWNvbHVtbnMtY291bnQ6ICAgICAgICAgICAgICAgIDMgIWRlZmF1bHQ7XG4kY2FyZC1jb2x1bW5zLWdhcDogICAgICAgICAgICAgICAgICAxLjI1cmVtICFkZWZhdWx0O1xuJGNhcmQtY29sdW1ucy1tYXJnaW46ICAgICAgICAgICAgICAgJGNhcmQtc3BhY2VyLXkgIWRlZmF1bHQ7XG5cblxuLy8gVG9vbHRpcHNcblxuJHRvb2x0aXAtZm9udC1zaXplOiAgICAgICAgICAgICAgICAgJGZvbnQtc2l6ZS1zbSAhZGVmYXVsdDtcbiR0b29sdGlwLW1heC13aWR0aDogICAgICAgICAgICAgICAgIDIwMHB4ICFkZWZhdWx0O1xuJHRvb2x0aXAtY29sb3I6ICAgICAgICAgICAgICAgICAgICAgJHdoaXRlICFkZWZhdWx0O1xuJHRvb2x0aXAtYmc6ICAgICAgICAgICAgICAgICAgICAgICAgJGJsYWNrICFkZWZhdWx0O1xuJHRvb2x0aXAtYm9yZGVyLXJhZGl1czogICAgICAgICAgICAgJGJvcmRlci1yYWRpdXMgIWRlZmF1bHQ7XG4kdG9vbHRpcC1vcGFjaXR5OiAgICAgICAgICAgICAgICAgICAuOSAhZGVmYXVsdDtcbiR0b29sdGlwLXBhZGRpbmcteTogICAgICAgICAgICAgICAgIC4yNXJlbSAhZGVmYXVsdDtcbiR0b29sdGlwLXBhZGRpbmcteDogICAgICAgICAgICAgICAgIC41cmVtICFkZWZhdWx0O1xuJHRvb2x0aXAtbWFyZ2luOiAgICAgICAgICAgICAgICAgICAgMCAhZGVmYXVsdDtcblxuJHRvb2x0aXAtYXJyb3ctd2lkdGg6ICAgICAgICAgICAgICAgLjhyZW0gIWRlZmF1bHQ7XG4kdG9vbHRpcC1hcnJvdy1oZWlnaHQ6ICAgICAgICAgICAgICAuNHJlbSAhZGVmYXVsdDtcbiR0b29sdGlwLWFycm93LWNvbG9yOiAgICAgICAgICAgICAgICR0b29sdGlwLWJnICFkZWZhdWx0O1xuXG4vLyBGb3JtIHRvb2x0aXBzIG11c3QgY29tZSBhZnRlciByZWd1bGFyIHRvb2x0aXBzXG4kZm9ybS1mZWVkYmFjay10b29sdGlwLXBhZGRpbmcteTogICAgICR0b29sdGlwLXBhZGRpbmcteSAhZGVmYXVsdDtcbiRmb3JtLWZlZWRiYWNrLXRvb2x0aXAtcGFkZGluZy14OiAgICAgJHRvb2x0aXAtcGFkZGluZy14ICFkZWZhdWx0O1xuJGZvcm0tZmVlZGJhY2stdG9vbHRpcC1mb250LXNpemU6ICAgICAkdG9vbHRpcC1mb250LXNpemUgIWRlZmF1bHQ7XG4kZm9ybS1mZWVkYmFjay10b29sdGlwLWxpbmUtaGVpZ2h0OiAgICRsaW5lLWhlaWdodC1iYXNlICFkZWZhdWx0O1xuJGZvcm0tZmVlZGJhY2stdG9vbHRpcC1vcGFjaXR5OiAgICAgICAkdG9vbHRpcC1vcGFjaXR5ICFkZWZhdWx0O1xuJGZvcm0tZmVlZGJhY2stdG9vbHRpcC1ib3JkZXItcmFkaXVzOiAkdG9vbHRpcC1ib3JkZXItcmFkaXVzICFkZWZhdWx0O1xuXG5cbi8vIFBvcG92ZXJzXG5cbiRwb3BvdmVyLWZvbnQtc2l6ZTogICAgICAgICAgICAgICAgICRmb250LXNpemUtc20gIWRlZmF1bHQ7XG4kcG9wb3Zlci1iZzogICAgICAgICAgICAgICAgICAgICAgICAkd2hpdGUgIWRlZmF1bHQ7XG4kcG9wb3Zlci1tYXgtd2lkdGg6ICAgICAgICAgICAgICAgICAyNzZweCAhZGVmYXVsdDtcbiRwb3BvdmVyLWJvcmRlci13aWR0aDogICAgICAgICAgICAgICRib3JkZXItd2lkdGggIWRlZmF1bHQ7XG4kcG9wb3Zlci1ib3JkZXItY29sb3I6ICAgICAgICAgICAgICByZ2JhKCRibGFjaywgLjIpICFkZWZhdWx0O1xuJHBvcG92ZXItYm9yZGVyLXJhZGl1czogICAgICAgICAgICAgJGJvcmRlci1yYWRpdXMtbGcgIWRlZmF1bHQ7XG4kcG9wb3Zlci1ib3gtc2hhZG93OiAgICAgICAgICAgICAgICAwIC4yNXJlbSAuNXJlbSByZ2JhKCRibGFjaywgLjIpICFkZWZhdWx0O1xuXG4kcG9wb3Zlci1oZWFkZXItYmc6ICAgICAgICAgICAgICAgICBkYXJrZW4oJHBvcG92ZXItYmcsIDMlKSAhZGVmYXVsdDtcbiRwb3BvdmVyLWhlYWRlci1jb2xvcjogICAgICAgICAgICAgICRoZWFkaW5ncy1jb2xvciAhZGVmYXVsdDtcbiRwb3BvdmVyLWhlYWRlci1wYWRkaW5nLXk6ICAgICAgICAgIC41cmVtICFkZWZhdWx0O1xuJHBvcG92ZXItaGVhZGVyLXBhZGRpbmcteDogICAgICAgICAgLjc1cmVtICFkZWZhdWx0O1xuXG4kcG9wb3Zlci1ib2R5LWNvbG9yOiAgICAgICAgICAgICAgICAkYm9keS1jb2xvciAhZGVmYXVsdDtcbiRwb3BvdmVyLWJvZHktcGFkZGluZy15OiAgICAgICAgICAgICRwb3BvdmVyLWhlYWRlci1wYWRkaW5nLXkgIWRlZmF1bHQ7XG4kcG9wb3Zlci1ib2R5LXBhZGRpbmcteDogICAgICAgICAgICAkcG9wb3Zlci1oZWFkZXItcGFkZGluZy14ICFkZWZhdWx0O1xuXG4kcG9wb3Zlci1hcnJvdy13aWR0aDogICAgICAgICAgICAgICAxcmVtICFkZWZhdWx0O1xuJHBvcG92ZXItYXJyb3ctaGVpZ2h0OiAgICAgICAgICAgICAgLjVyZW0gIWRlZmF1bHQ7XG4kcG9wb3Zlci1hcnJvdy1jb2xvcjogICAgICAgICAgICAgICAkcG9wb3Zlci1iZyAhZGVmYXVsdDtcblxuJHBvcG92ZXItYXJyb3ctb3V0ZXItY29sb3I6ICAgICAgICAgZmFkZS1pbigkcG9wb3Zlci1ib3JkZXItY29sb3IsIC4wNSkgIWRlZmF1bHQ7XG5cblxuLy8gVG9hc3RzXG5cbiR0b2FzdC1tYXgtd2lkdGg6ICAgICAgICAgICAgICAgICAgIDM1MHB4ICFkZWZhdWx0O1xuJHRvYXN0LXBhZGRpbmcteDogICAgICAgICAgICAgICAgICAgLjc1cmVtICFkZWZhdWx0O1xuJHRvYXN0LXBhZGRpbmcteTogICAgICAgICAgICAgICAgICAgLjI1cmVtICFkZWZhdWx0O1xuJHRvYXN0LWZvbnQtc2l6ZTogICAgICAgICAgICAgICAgICAgLjg3NXJlbSAhZGVmYXVsdDtcbiR0b2FzdC1jb2xvcjogICAgICAgICAgICAgICAgICAgICAgIG51bGwgIWRlZmF1bHQ7XG4kdG9hc3QtYmFja2dyb3VuZC1jb2xvcjogICAgICAgICAgICByZ2JhKCR3aGl0ZSwgLjg1KSAhZGVmYXVsdDtcbiR0b2FzdC1ib3JkZXItd2lkdGg6ICAgICAgICAgICAgICAgIDFweCAhZGVmYXVsdDtcbiR0b2FzdC1ib3JkZXItY29sb3I6ICAgICAgICAgICAgICAgIHJnYmEoMCwgMCwgMCwgLjEpICFkZWZhdWx0O1xuJHRvYXN0LWJvcmRlci1yYWRpdXM6ICAgICAgICAgICAgICAgLjI1cmVtICFkZWZhdWx0O1xuJHRvYXN0LWJveC1zaGFkb3c6ICAgICAgICAgICAgICAgICAgMCAuMjVyZW0gLjc1cmVtIHJnYmEoJGJsYWNrLCAuMSkgIWRlZmF1bHQ7XG5cbiR0b2FzdC1oZWFkZXItY29sb3I6ICAgICAgICAgICAgICAgICRncmF5LTYwMCAhZGVmYXVsdDtcbiR0b2FzdC1oZWFkZXItYmFja2dyb3VuZC1jb2xvcjogICAgIHJnYmEoJHdoaXRlLCAuODUpICFkZWZhdWx0O1xuJHRvYXN0LWhlYWRlci1ib3JkZXItY29sb3I6ICAgICAgICAgcmdiYSgwLCAwLCAwLCAuMDUpICFkZWZhdWx0O1xuXG5cbi8vIEJhZGdlc1xuXG4kYmFkZ2UtZm9udC1zaXplOiAgICAgICAgICAgICAgICAgICA3NSUgIWRlZmF1bHQ7XG4kYmFkZ2UtZm9udC13ZWlnaHQ6ICAgICAgICAgICAgICAgICAkZm9udC13ZWlnaHQtYm9sZCAhZGVmYXVsdDtcbiRiYWRnZS1wYWRkaW5nLXk6ICAgICAgICAgICAgICAgICAgIC4yNWVtICFkZWZhdWx0O1xuJGJhZGdlLXBhZGRpbmcteDogICAgICAgICAgICAgICAgICAgLjRlbSAhZGVmYXVsdDtcbiRiYWRnZS1ib3JkZXItcmFkaXVzOiAgICAgICAgICAgICAgICRib3JkZXItcmFkaXVzICFkZWZhdWx0O1xuXG4kYmFkZ2UtdHJhbnNpdGlvbjogICAgICAgICAgICAgICAgICAkYnRuLXRyYW5zaXRpb24gIWRlZmF1bHQ7XG4kYmFkZ2UtZm9jdXMtd2lkdGg6ICAgICAgICAgICAgICAgICAkaW5wdXQtYnRuLWZvY3VzLXdpZHRoICFkZWZhdWx0O1xuXG4kYmFkZ2UtcGlsbC1wYWRkaW5nLXg6ICAgICAgICAgICAgICAuNmVtICFkZWZhdWx0O1xuLy8gVXNlIGEgaGlnaGVyIHRoYW4gbm9ybWFsIHZhbHVlIHRvIGVuc3VyZSBjb21wbGV0ZWx5IHJvdW5kZWQgZWRnZXMgd2hlblxuLy8gY3VzdG9taXppbmcgcGFkZGluZyBvciBmb250LXNpemUgb24gbGFiZWxzLlxuJGJhZGdlLXBpbGwtYm9yZGVyLXJhZGl1czogICAgICAgICAgMTByZW0gIWRlZmF1bHQ7XG5cblxuLy8gTW9kYWxzXG5cbi8vIFBhZGRpbmcgYXBwbGllZCB0byB0aGUgbW9kYWwgYm9keVxuJG1vZGFsLWlubmVyLXBhZGRpbmc6ICAgICAgICAgICAgICAgMXJlbSAhZGVmYXVsdDtcblxuJG1vZGFsLWRpYWxvZy1tYXJnaW46ICAgICAgICAgICAgICAgLjVyZW0gIWRlZmF1bHQ7XG4kbW9kYWwtZGlhbG9nLW1hcmdpbi15LXNtLXVwOiAgICAgICAxLjc1cmVtICFkZWZhdWx0O1xuXG4kbW9kYWwtdGl0bGUtbGluZS1oZWlnaHQ6ICAgICAgICAgICAkbGluZS1oZWlnaHQtYmFzZSAhZGVmYXVsdDtcblxuJG1vZGFsLWNvbnRlbnQtY29sb3I6ICAgICAgICAgICAgICAgbnVsbCAhZGVmYXVsdDtcbiRtb2RhbC1jb250ZW50LWJnOiAgICAgICAgICAgICAgICAgICR3aGl0ZSAhZGVmYXVsdDtcbiRtb2RhbC1jb250ZW50LWJvcmRlci1jb2xvcjogICAgICAgIHJnYmEoJGJsYWNrLCAuMikgIWRlZmF1bHQ7XG4kbW9kYWwtY29udGVudC1ib3JkZXItd2lkdGg6ICAgICAgICAkYm9yZGVyLXdpZHRoICFkZWZhdWx0O1xuJG1vZGFsLWNvbnRlbnQtYm9yZGVyLXJhZGl1czogICAgICAgJGJvcmRlci1yYWRpdXMtbGcgIWRlZmF1bHQ7XG4kbW9kYWwtY29udGVudC1ib3gtc2hhZG93LXhzOiAgICAgICAwIC4yNXJlbSAuNXJlbSByZ2JhKCRibGFjaywgLjUpICFkZWZhdWx0O1xuJG1vZGFsLWNvbnRlbnQtYm94LXNoYWRvdy1zbS11cDogICAgMCAuNXJlbSAxcmVtIHJnYmEoJGJsYWNrLCAuNSkgIWRlZmF1bHQ7XG5cbiRtb2RhbC1iYWNrZHJvcC1iZzogICAgICAgICAgICAgICAgICRibGFjayAhZGVmYXVsdDtcbiRtb2RhbC1iYWNrZHJvcC1vcGFjaXR5OiAgICAgICAgICAgIC41ICFkZWZhdWx0O1xuJG1vZGFsLWhlYWRlci1ib3JkZXItY29sb3I6ICAgICAgICAgJGJvcmRlci1jb2xvciAhZGVmYXVsdDtcbiRtb2RhbC1mb290ZXItYm9yZGVyLWNvbG9yOiAgICAgICAgICRtb2RhbC1oZWFkZXItYm9yZGVyLWNvbG9yICFkZWZhdWx0O1xuJG1vZGFsLWhlYWRlci1ib3JkZXItd2lkdGg6ICAgICAgICAgJG1vZGFsLWNvbnRlbnQtYm9yZGVyLXdpZHRoICFkZWZhdWx0O1xuJG1vZGFsLWZvb3Rlci1ib3JkZXItd2lkdGg6ICAgICAgICAgJG1vZGFsLWhlYWRlci1ib3JkZXItd2lkdGggIWRlZmF1bHQ7XG4kbW9kYWwtaGVhZGVyLXBhZGRpbmcteTogICAgICAgICAgICAxcmVtICFkZWZhdWx0O1xuJG1vZGFsLWhlYWRlci1wYWRkaW5nLXg6ICAgICAgICAgICAgMXJlbSAhZGVmYXVsdDtcbiRtb2RhbC1oZWFkZXItcGFkZGluZzogICAgICAgICAgICAgICRtb2RhbC1oZWFkZXItcGFkZGluZy15ICRtb2RhbC1oZWFkZXItcGFkZGluZy14ICFkZWZhdWx0OyAvLyBLZWVwIHRoaXMgZm9yIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5XG5cbiRtb2RhbC14bDogICAgICAgICAgICAgICAgICAgICAgICAgIDExNDBweCAhZGVmYXVsdDtcbiRtb2RhbC1sZzogICAgICAgICAgICAgICAgICAgICAgICAgIDgwMHB4ICFkZWZhdWx0O1xuJG1vZGFsLW1kOiAgICAgICAgICAgICAgICAgICAgICAgICAgNTAwcHggIWRlZmF1bHQ7XG4kbW9kYWwtc206ICAgICAgICAgICAgICAgICAgICAgICAgICAzMDBweCAhZGVmYXVsdDtcblxuJG1vZGFsLWZhZGUtdHJhbnNmb3JtOiAgICAgICAgICAgICAgdHJhbnNsYXRlKDAsIC01MHB4KSAhZGVmYXVsdDtcbiRtb2RhbC1zaG93LXRyYW5zZm9ybTogICAgICAgICAgICAgIG5vbmUgIWRlZmF1bHQ7XG4kbW9kYWwtdHJhbnNpdGlvbjogICAgICAgICAgICAgICAgICB0cmFuc2Zvcm0gLjNzIGVhc2Utb3V0ICFkZWZhdWx0O1xuXG5cbi8vIEFsZXJ0c1xuLy9cbi8vIERlZmluZSBhbGVydCBjb2xvcnMsIGJvcmRlciByYWRpdXMsIGFuZCBwYWRkaW5nLlxuXG4kYWxlcnQtcGFkZGluZy15OiAgICAgICAgICAgICAgICAgICAuNzVyZW0gIWRlZmF1bHQ7XG4kYWxlcnQtcGFkZGluZy14OiAgICAgICAgICAgICAgICAgICAxLjI1cmVtICFkZWZhdWx0O1xuJGFsZXJ0LW1hcmdpbi1ib3R0b206ICAgICAgICAgICAgICAgMXJlbSAhZGVmYXVsdDtcbiRhbGVydC1ib3JkZXItcmFkaXVzOiAgICAgICAgICAgICAgICRib3JkZXItcmFkaXVzICFkZWZhdWx0O1xuJGFsZXJ0LWxpbmstZm9udC13ZWlnaHQ6ICAgICAgICAgICAgJGZvbnQtd2VpZ2h0LWJvbGQgIWRlZmF1bHQ7XG4kYWxlcnQtYm9yZGVyLXdpZHRoOiAgICAgICAgICAgICAgICAkYm9yZGVyLXdpZHRoICFkZWZhdWx0O1xuXG4kYWxlcnQtYmctbGV2ZWw6ICAgICAgICAgICAgICAgICAgICAtMTAgIWRlZmF1bHQ7XG4kYWxlcnQtYm9yZGVyLWxldmVsOiAgICAgICAgICAgICAgICAtOSAhZGVmYXVsdDtcbiRhbGVydC1jb2xvci1sZXZlbDogICAgICAgICAgICAgICAgIDYgIWRlZmF1bHQ7XG5cblxuLy8gUHJvZ3Jlc3MgYmFyc1xuXG4kcHJvZ3Jlc3MtaGVpZ2h0OiAgICAgICAgICAgICAgICAgICAxcmVtICFkZWZhdWx0O1xuJHByb2dyZXNzLWZvbnQtc2l6ZTogICAgICAgICAgICAgICAgJGZvbnQtc2l6ZS1iYXNlICogLjc1ICFkZWZhdWx0O1xuJHByb2dyZXNzLWJnOiAgICAgICAgICAgICAgICAgICAgICAgJGdyYXktMjAwICFkZWZhdWx0O1xuJHByb2dyZXNzLWJvcmRlci1yYWRpdXM6ICAgICAgICAgICAgJGJvcmRlci1yYWRpdXMgIWRlZmF1bHQ7XG4kcHJvZ3Jlc3MtYm94LXNoYWRvdzogICAgICAgICAgICAgICBpbnNldCAwIC4xcmVtIC4xcmVtIHJnYmEoJGJsYWNrLCAuMSkgIWRlZmF1bHQ7XG4kcHJvZ3Jlc3MtYmFyLWNvbG9yOiAgICAgICAgICAgICAgICAkd2hpdGUgIWRlZmF1bHQ7XG4kcHJvZ3Jlc3MtYmFyLWJnOiAgICAgICAgICAgICAgICAgICB0aGVtZS1jb2xvcihcInByaW1hcnlcIikgIWRlZmF1bHQ7XG4kcHJvZ3Jlc3MtYmFyLWFuaW1hdGlvbi10aW1pbmc6ICAgICAxcyBsaW5lYXIgaW5maW5pdGUgIWRlZmF1bHQ7XG4kcHJvZ3Jlc3MtYmFyLXRyYW5zaXRpb246ICAgICAgICAgICB3aWR0aCAuNnMgZWFzZSAhZGVmYXVsdDtcblxuXG4vLyBMaXN0IGdyb3VwXG5cbiRsaXN0LWdyb3VwLWNvbG9yOiAgICAgICAgICAgICAgICAgIG51bGwgIWRlZmF1bHQ7XG4kbGlzdC1ncm91cC1iZzogICAgICAgICAgICAgICAgICAgICAkd2hpdGUgIWRlZmF1bHQ7XG4kbGlzdC1ncm91cC1ib3JkZXItY29sb3I6ICAgICAgICAgICByZ2JhKCRibGFjaywgLjEyNSkgIWRlZmF1bHQ7XG4kbGlzdC1ncm91cC1ib3JkZXItd2lkdGg6ICAgICAgICAgICAkYm9yZGVyLXdpZHRoICFkZWZhdWx0O1xuJGxpc3QtZ3JvdXAtYm9yZGVyLXJhZGl1czogICAgICAgICAgJGJvcmRlci1yYWRpdXMgIWRlZmF1bHQ7XG5cbiRsaXN0LWdyb3VwLWl0ZW0tcGFkZGluZy15OiAgICAgICAgIC43NXJlbSAhZGVmYXVsdDtcbiRsaXN0LWdyb3VwLWl0ZW0tcGFkZGluZy14OiAgICAgICAgIDEuMjVyZW0gIWRlZmF1bHQ7XG5cbiRsaXN0LWdyb3VwLWhvdmVyLWJnOiAgICAgICAgICAgICAgICRncmF5LTEwMCAhZGVmYXVsdDtcbiRsaXN0LWdyb3VwLWFjdGl2ZS1jb2xvcjogICAgICAgICAgICRjb21wb25lbnQtYWN0aXZlLWNvbG9yICFkZWZhdWx0O1xuJGxpc3QtZ3JvdXAtYWN0aXZlLWJnOiAgICAgICAgICAgICAgJGNvbXBvbmVudC1hY3RpdmUtYmcgIWRlZmF1bHQ7XG4kbGlzdC1ncm91cC1hY3RpdmUtYm9yZGVyLWNvbG9yOiAgICAkbGlzdC1ncm91cC1hY3RpdmUtYmcgIWRlZmF1bHQ7XG5cbiRsaXN0LWdyb3VwLWRpc2FibGVkLWNvbG9yOiAgICAgICAgICRncmF5LTYwMCAhZGVmYXVsdDtcbiRsaXN0LWdyb3VwLWRpc2FibGVkLWJnOiAgICAgICAgICAgICRsaXN0LWdyb3VwLWJnICFkZWZhdWx0O1xuXG4kbGlzdC1ncm91cC1hY3Rpb24tY29sb3I6ICAgICAgICAgICAkZ3JheS03MDAgIWRlZmF1bHQ7XG4kbGlzdC1ncm91cC1hY3Rpb24taG92ZXItY29sb3I6ICAgICAkbGlzdC1ncm91cC1hY3Rpb24tY29sb3IgIWRlZmF1bHQ7XG5cbiRsaXN0LWdyb3VwLWFjdGlvbi1hY3RpdmUtY29sb3I6ICAgICRib2R5LWNvbG9yICFkZWZhdWx0O1xuJGxpc3QtZ3JvdXAtYWN0aW9uLWFjdGl2ZS1iZzogICAgICAgJGdyYXktMjAwICFkZWZhdWx0O1xuXG5cbi8vIEltYWdlIHRodW1ibmFpbHNcblxuJHRodW1ibmFpbC1wYWRkaW5nOiAgICAgICAgICAgICAgICAgLjI1cmVtICFkZWZhdWx0O1xuJHRodW1ibmFpbC1iZzogICAgICAgICAgICAgICAgICAgICAgJGJvZHktYmcgIWRlZmF1bHQ7XG4kdGh1bWJuYWlsLWJvcmRlci13aWR0aDogICAgICAgICAgICAkYm9yZGVyLXdpZHRoICFkZWZhdWx0O1xuJHRodW1ibmFpbC1ib3JkZXItY29sb3I6ICAgICAgICAgICAgJGdyYXktMzAwICFkZWZhdWx0O1xuJHRodW1ibmFpbC1ib3JkZXItcmFkaXVzOiAgICAgICAgICAgJGJvcmRlci1yYWRpdXMgIWRlZmF1bHQ7XG4kdGh1bWJuYWlsLWJveC1zaGFkb3c6ICAgICAgICAgICAgICAwIDFweCAycHggcmdiYSgkYmxhY2ssIC4wNzUpICFkZWZhdWx0O1xuXG5cbi8vIEZpZ3VyZXNcblxuJGZpZ3VyZS1jYXB0aW9uLWZvbnQtc2l6ZTogICAgICAgICAgOTAlICFkZWZhdWx0O1xuJGZpZ3VyZS1jYXB0aW9uLWNvbG9yOiAgICAgICAgICAgICAgJGdyYXktNjAwICFkZWZhdWx0O1xuXG5cbi8vIEJyZWFkY3J1bWJzXG5cbiRicmVhZGNydW1iLXBhZGRpbmcteTogICAgICAgICAgICAgIC43NXJlbSAhZGVmYXVsdDtcbiRicmVhZGNydW1iLXBhZGRpbmcteDogICAgICAgICAgICAgIDFyZW0gIWRlZmF1bHQ7XG4kYnJlYWRjcnVtYi1pdGVtLXBhZGRpbmc6ICAgICAgICAgICAuNXJlbSAhZGVmYXVsdDtcblxuJGJyZWFkY3J1bWItbWFyZ2luLWJvdHRvbTogICAgICAgICAgMXJlbSAhZGVmYXVsdDtcblxuJGJyZWFkY3J1bWItYmc6ICAgICAgICAgICAgICAgICAgICAgJGdyYXktMjAwICFkZWZhdWx0O1xuJGJyZWFkY3J1bWItZGl2aWRlci1jb2xvcjogICAgICAgICAgJGdyYXktNjAwICFkZWZhdWx0O1xuJGJyZWFkY3J1bWItYWN0aXZlLWNvbG9yOiAgICAgICAgICAgJGdyYXktNjAwICFkZWZhdWx0O1xuJGJyZWFkY3J1bWItZGl2aWRlcjogICAgICAgICAgICAgICAgcXVvdGUoXCIvXCIpICFkZWZhdWx0O1xuXG4kYnJlYWRjcnVtYi1ib3JkZXItcmFkaXVzOiAgICAgICAgICAkYm9yZGVyLXJhZGl1cyAhZGVmYXVsdDtcblxuXG4vLyBDYXJvdXNlbFxuXG4kY2Fyb3VzZWwtY29udHJvbC1jb2xvcjogICAgICAgICAgICAgJHdoaXRlICFkZWZhdWx0O1xuJGNhcm91c2VsLWNvbnRyb2wtd2lkdGg6ICAgICAgICAgICAgIDE1JSAhZGVmYXVsdDtcbiRjYXJvdXNlbC1jb250cm9sLW9wYWNpdHk6ICAgICAgICAgICAuNSAhZGVmYXVsdDtcbiRjYXJvdXNlbC1jb250cm9sLWhvdmVyLW9wYWNpdHk6ICAgICAuOSAhZGVmYXVsdDtcbiRjYXJvdXNlbC1jb250cm9sLXRyYW5zaXRpb246ICAgICAgICBvcGFjaXR5IC4xNXMgZWFzZSAhZGVmYXVsdDtcblxuJGNhcm91c2VsLWluZGljYXRvci13aWR0aDogICAgICAgICAgIDMwcHggIWRlZmF1bHQ7XG4kY2Fyb3VzZWwtaW5kaWNhdG9yLWhlaWdodDogICAgICAgICAgM3B4ICFkZWZhdWx0O1xuJGNhcm91c2VsLWluZGljYXRvci1oaXQtYXJlYS1oZWlnaHQ6IDEwcHggIWRlZmF1bHQ7XG4kY2Fyb3VzZWwtaW5kaWNhdG9yLXNwYWNlcjogICAgICAgICAgM3B4ICFkZWZhdWx0O1xuJGNhcm91c2VsLWluZGljYXRvci1hY3RpdmUtYmc6ICAgICAgICR3aGl0ZSAhZGVmYXVsdDtcbiRjYXJvdXNlbC1pbmRpY2F0b3ItdHJhbnNpdGlvbjogICAgICBvcGFjaXR5IC42cyBlYXNlICFkZWZhdWx0O1xuXG4kY2Fyb3VzZWwtY2FwdGlvbi13aWR0aDogICAgICAgICAgICAgNzAlICFkZWZhdWx0O1xuJGNhcm91c2VsLWNhcHRpb24tY29sb3I6ICAgICAgICAgICAgICR3aGl0ZSAhZGVmYXVsdDtcblxuJGNhcm91c2VsLWNvbnRyb2wtaWNvbi13aWR0aDogICAgICAgIDIwcHggIWRlZmF1bHQ7XG5cbiRjYXJvdXNlbC1jb250cm9sLXByZXYtaWNvbi1iZzogICAgICBzdHItcmVwbGFjZSh1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNjc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgZmlsbD0nI3skY2Fyb3VzZWwtY29udHJvbC1jb2xvcn0nIHZpZXdCb3g9JzAgMCA4IDgnJTNlJTNjcGF0aCBkPSdNNS4yNSAwbC00IDQgNCA0IDEuNS0xLjUtMi41LTIuNSAyLjUtMi41LTEuNS0xLjV6Jy8lM2UlM2Mvc3ZnJTNlXCIpLCBcIiNcIiwgXCIlMjNcIikgIWRlZmF1bHQ7XG4kY2Fyb3VzZWwtY29udHJvbC1uZXh0LWljb24tYmc6ICAgICAgc3RyLXJlcGxhY2UodXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLCUzY3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIGZpbGw9JyN7JGNhcm91c2VsLWNvbnRyb2wtY29sb3J9JyB2aWV3Qm94PScwIDAgOCA4JyUzZSUzY3BhdGggZD0nTTIuNzUgMGwtMS41IDEuNSAyLjUgMi41LTIuNSAyLjUgMS41IDEuNSA0LTQtNC00eicvJTNlJTNjL3N2ZyUzZVwiKSwgXCIjXCIsIFwiJTIzXCIpICFkZWZhdWx0O1xuXG4kY2Fyb3VzZWwtdHJhbnNpdGlvbi1kdXJhdGlvbjogICAgICAgLjZzICFkZWZhdWx0O1xuJGNhcm91c2VsLXRyYW5zaXRpb246ICAgICAgICAgICAgICAgIHRyYW5zZm9ybSAkY2Fyb3VzZWwtdHJhbnNpdGlvbi1kdXJhdGlvbiBlYXNlLWluLW91dCAhZGVmYXVsdDsgLy8gRGVmaW5lIHRyYW5zZm9ybSB0cmFuc2l0aW9uIGZpcnN0IGlmIHVzaW5nIG11bHRpcGxlIHRyYW5zaXRpb25zIChlLmcuLCBgdHJhbnNmb3JtIDJzIGVhc2UsIG9wYWNpdHkgLjVzIGVhc2Utb3V0YClcblxuXG4vLyBTcGlubmVyc1xuXG4kc3Bpbm5lci13aWR0aDogICAgICAgICAycmVtICFkZWZhdWx0O1xuJHNwaW5uZXItaGVpZ2h0OiAgICAgICAgJHNwaW5uZXItd2lkdGggIWRlZmF1bHQ7XG4kc3Bpbm5lci1ib3JkZXItd2lkdGg6ICAuMjVlbSAhZGVmYXVsdDtcblxuJHNwaW5uZXItd2lkdGgtc206ICAgICAgICAxcmVtICFkZWZhdWx0O1xuJHNwaW5uZXItaGVpZ2h0LXNtOiAgICAgICAkc3Bpbm5lci13aWR0aC1zbSAhZGVmYXVsdDtcbiRzcGlubmVyLWJvcmRlci13aWR0aC1zbTogLjJlbSAhZGVmYXVsdDtcblxuXG4vLyBDbG9zZVxuXG4kY2xvc2UtZm9udC1zaXplOiAgICAgICAgICAgICAgICAgICAkZm9udC1zaXplLWJhc2UgKiAxLjUgIWRlZmF1bHQ7XG4kY2xvc2UtZm9udC13ZWlnaHQ6ICAgICAgICAgICAgICAgICAkZm9udC13ZWlnaHQtYm9sZCAhZGVmYXVsdDtcbiRjbG9zZS1jb2xvcjogICAgICAgICAgICAgICAgICAgICAgICRibGFjayAhZGVmYXVsdDtcbiRjbG9zZS10ZXh0LXNoYWRvdzogICAgICAgICAgICAgICAgIDAgMXB4IDAgJHdoaXRlICFkZWZhdWx0O1xuXG5cbi8vIENvZGVcblxuJGNvZGUtZm9udC1zaXplOiAgICAgICAgICAgICAgICAgICAgODcuNSUgIWRlZmF1bHQ7XG4kY29kZS1jb2xvcjogICAgICAgICAgICAgICAgICAgICAgICAkcGluayAhZGVmYXVsdDtcblxuJGtiZC1wYWRkaW5nLXk6ICAgICAgICAgICAgICAgICAgICAgLjJyZW0gIWRlZmF1bHQ7XG4ka2JkLXBhZGRpbmcteDogICAgICAgICAgICAgICAgICAgICAuNHJlbSAhZGVmYXVsdDtcbiRrYmQtZm9udC1zaXplOiAgICAgICAgICAgICAgICAgICAgICRjb2RlLWZvbnQtc2l6ZSAhZGVmYXVsdDtcbiRrYmQtY29sb3I6ICAgICAgICAgICAgICAgICAgICAgICAgICR3aGl0ZSAhZGVmYXVsdDtcbiRrYmQtYmc6ICAgICAgICAgICAgICAgICAgICAgICAgICAgICRncmF5LTkwMCAhZGVmYXVsdDtcblxuJHByZS1jb2xvcjogICAgICAgICAgICAgICAgICAgICAgICAgJGdyYXktOTAwICFkZWZhdWx0O1xuJHByZS1zY3JvbGxhYmxlLW1heC1oZWlnaHQ6ICAgICAgICAgMzQwcHggIWRlZmF1bHQ7XG5cblxuLy8gVXRpbGl0aWVzXG5cbiRkaXNwbGF5czogbm9uZSwgaW5saW5lLCBpbmxpbmUtYmxvY2ssIGJsb2NrLCB0YWJsZSwgdGFibGUtcm93LCB0YWJsZS1jZWxsLCBmbGV4LCBpbmxpbmUtZmxleCAhZGVmYXVsdDtcbiRvdmVyZmxvd3M6IGF1dG8sIGhpZGRlbiAhZGVmYXVsdDtcbiRwb3NpdGlvbnM6IHN0YXRpYywgcmVsYXRpdmUsIGFic29sdXRlLCBmaXhlZCwgc3RpY2t5ICFkZWZhdWx0O1xuXG5cbi8vIFByaW50aW5nXG5cbiRwcmludC1wYWdlLXNpemU6ICAgICAgICAgICAgICAgICAgIGEzICFkZWZhdWx0O1xuJHByaW50LWJvZHktbWluLXdpZHRoOiAgICAgICAgICAgICAgbWFwLWdldCgkZ3JpZC1icmVha3BvaW50cywgXCJsZ1wiKSAhZGVmYXVsdDtcbiIsIiNtYWluTmF2IHtcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFwiU2Vnb2UgVUlcIiwgUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIEFyaWFsLCBcIk5vdG8gU2Fuc1wiLCBzYW5zLXNlcmlmLCBcIkFwcGxlIENvbG9yIEVtb2ppXCIsIFwiU2Vnb2UgVUkgRW1vamlcIiwgXCJTZWdvZSBVSSBTeW1ib2xcIiwgXCJOb3RvIENvbG9yIEVtb2ppXCI7XG4gIGZvbnQtd2VpZ2h0OiAxMDAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xufVxuI21haW5OYXYgLm5hdmJhci1icmFuZCB7XG4gIGNvbG9yOiAjZmZmO1xufVxuI21haW5OYXYgLm5hdmJhci1icmFuZDpob3ZlciB7XG4gIGNvbG9yOiAjMWFiYzljO1xufVxuI21haW5OYXYgLm5hdmJhci1uYXYge1xuICBtYXJnaW4tdG9wOiAxcmVtO1xufVxuI21haW5OYXYgLm5hdmJhci1uYXYgbGkubmF2LWl0ZW0gYS5uYXYtbGluayB7XG4gIGNvbG9yOiAjZmZmO1xufVxuI21haW5OYXYgLm5hdmJhci1uYXYgbGkubmF2LWl0ZW0gYS5uYXYtbGluazpob3ZlciB7XG4gIGNvbG9yOiAjMWFiYzljO1xufVxuI21haW5OYXYgLm5hdmJhci1uYXYgbGkubmF2LWl0ZW0gYS5uYXYtbGluay5hY3RpdmUge1xuICBjb2xvcjogIzFhYmM5Yztcbn1cbiNtYWluTmF2IC5uYXZiYXItdG9nZ2xlciB7XG4gIGZvbnQtc2l6ZTogODAlO1xuICBwYWRkaW5nOiAwLjhyZW07XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xuICAjbWFpbk5hdiB7XG4gICAgdHJhbnNpdGlvbjogcGFkZGluZy10b3AgMC4zcywgcGFkZGluZy1ib3R0b20gMC4zcztcbiAgfVxuICAjbWFpbk5hdiAubmF2YmFyLWJyYW5kIHtcbiAgICBmb250LXNpemU6IDEuNzVlbTtcbiAgICB0cmFuc2l0aW9uOiBmb250LXNpemUgMC4zcztcbiAgfVxuICAjbWFpbk5hdiAubmF2YmFyLWJyYW5kOmhvdmVyIHtcbiAgICBmb250LXNpemU6IDEuOGVtO1xuICB9XG4gICNtYWluTmF2IC5uYXZiYXItbmF2IHtcbiAgICBtYXJnaW4tdG9wOiAwO1xuICB9XG59XG4jYnRuTWVudVRvZ2dsZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxYWJjOWM7XG59XG4jYnRuTWVudVRvZ2dsZTpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbi51c2VyLWltZyB7XG4gIHdpZHRoOiAyOHB4O1xuICBoZWlnaHQ6IDI4cHg7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBib3gtc2hhZG93OiAwIDAgNDBweCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xufSIsIi8vIEJyZWFrcG9pbnQgdmlld3BvcnQgc2l6ZXMgYW5kIG1lZGlhIHF1ZXJpZXMuXG4vL1xuLy8gQnJlYWtwb2ludHMgYXJlIGRlZmluZWQgYXMgYSBtYXAgb2YgKG5hbWU6IG1pbmltdW0gd2lkdGgpLCBvcmRlciBmcm9tIHNtYWxsIHRvIGxhcmdlOlxuLy9cbi8vICAgICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweClcbi8vXG4vLyBUaGUgbWFwIGRlZmluZWQgaW4gdGhlIGAkZ3JpZC1icmVha3BvaW50c2AgZ2xvYmFsIHZhcmlhYmxlIGlzIHVzZWQgYXMgdGhlIGAkYnJlYWtwb2ludHNgIGFyZ3VtZW50IGJ5IGRlZmF1bHQuXG5cbi8vIE5hbWUgb2YgdGhlIG5leHQgYnJlYWtwb2ludCwgb3IgbnVsbCBmb3IgdGhlIGxhc3QgYnJlYWtwb2ludC5cbi8vXG4vLyAgICA+PiBicmVha3BvaW50LW5leHQoc20pXG4vLyAgICBtZFxuLy8gICAgPj4gYnJlYWtwb2ludC1uZXh0KHNtLCAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpKVxuLy8gICAgbWRcbi8vICAgID4+IGJyZWFrcG9pbnQtbmV4dChzbSwgJGJyZWFrcG9pbnQtbmFtZXM6ICh4cyBzbSBtZCBsZyB4bCkpXG4vLyAgICBtZFxuQGZ1bmN0aW9uIGJyZWFrcG9pbnQtbmV4dCgkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cywgJGJyZWFrcG9pbnQtbmFtZXM6IG1hcC1rZXlzKCRicmVha3BvaW50cykpIHtcbiAgJG46IGluZGV4KCRicmVha3BvaW50LW5hbWVzLCAkbmFtZSk7XG4gIEByZXR1cm4gaWYoJG4gIT0gbnVsbCBhbmQgJG4gPCBsZW5ndGgoJGJyZWFrcG9pbnQtbmFtZXMpLCBudGgoJGJyZWFrcG9pbnQtbmFtZXMsICRuICsgMSksIG51bGwpO1xufVxuXG4vLyBNaW5pbXVtIGJyZWFrcG9pbnQgd2lkdGguIE51bGwgZm9yIHRoZSBzbWFsbGVzdCAoZmlyc3QpIGJyZWFrcG9pbnQuXG4vL1xuLy8gICAgPj4gYnJlYWtwb2ludC1taW4oc20sICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweCkpXG4vLyAgICA1NzZweFxuQGZ1bmN0aW9uIGJyZWFrcG9pbnQtbWluKCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gICRtaW46IG1hcC1nZXQoJGJyZWFrcG9pbnRzLCAkbmFtZSk7XG4gIEByZXR1cm4gaWYoJG1pbiAhPSAwLCAkbWluLCBudWxsKTtcbn1cblxuLy8gTWF4aW11bSBicmVha3BvaW50IHdpZHRoLiBOdWxsIGZvciB0aGUgbGFyZ2VzdCAobGFzdCkgYnJlYWtwb2ludC5cbi8vIFRoZSBtYXhpbXVtIHZhbHVlIGlzIGNhbGN1bGF0ZWQgYXMgdGhlIG1pbmltdW0gb2YgdGhlIG5leHQgb25lIGxlc3MgMC4wMnB4XG4vLyB0byB3b3JrIGFyb3VuZCB0aGUgbGltaXRhdGlvbnMgb2YgYG1pbi1gIGFuZCBgbWF4LWAgcHJlZml4ZXMgYW5kIHZpZXdwb3J0cyB3aXRoIGZyYWN0aW9uYWwgd2lkdGhzLlxuLy8gU2VlIGh0dHBzOi8vd3d3LnczLm9yZy9UUi9tZWRpYXF1ZXJpZXMtNC8jbXEtbWluLW1heFxuLy8gVXNlcyAwLjAycHggcmF0aGVyIHRoYW4gMC4wMXB4IHRvIHdvcmsgYXJvdW5kIGEgY3VycmVudCByb3VuZGluZyBidWcgaW4gU2FmYXJpLlxuLy8gU2VlIGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD0xNzgyNjFcbi8vXG4vLyAgICA+PiBicmVha3BvaW50LW1heChzbSwgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KSlcbi8vICAgIDc2Ny45OHB4XG5AZnVuY3Rpb24gYnJlYWtwb2ludC1tYXgoJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgJG5leHQ6IGJyZWFrcG9pbnQtbmV4dCgkbmFtZSwgJGJyZWFrcG9pbnRzKTtcbiAgQHJldHVybiBpZigkbmV4dCwgYnJlYWtwb2ludC1taW4oJG5leHQsICRicmVha3BvaW50cykgLSAuMDIsIG51bGwpO1xufVxuXG4vLyBSZXR1cm5zIGEgYmxhbmsgc3RyaW5nIGlmIHNtYWxsZXN0IGJyZWFrcG9pbnQsIG90aGVyd2lzZSByZXR1cm5zIHRoZSBuYW1lIHdpdGggYSBkYXNoIGluIGZyb250LlxuLy8gVXNlZnVsIGZvciBtYWtpbmcgcmVzcG9uc2l2ZSB1dGlsaXRpZXMuXG4vL1xuLy8gICAgPj4gYnJlYWtwb2ludC1pbmZpeCh4cywgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KSlcbi8vICAgIFwiXCIgIChSZXR1cm5zIGEgYmxhbmsgc3RyaW5nKVxuLy8gICAgPj4gYnJlYWtwb2ludC1pbmZpeChzbSwgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KSlcbi8vICAgIFwiLXNtXCJcbkBmdW5jdGlvbiBicmVha3BvaW50LWluZml4KCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gIEByZXR1cm4gaWYoYnJlYWtwb2ludC1taW4oJG5hbWUsICRicmVha3BvaW50cykgPT0gbnVsbCwgXCJcIiwgXCItI3skbmFtZX1cIik7XG59XG5cbi8vIE1lZGlhIG9mIGF0IGxlYXN0IHRoZSBtaW5pbXVtIGJyZWFrcG9pbnQgd2lkdGguIE5vIHF1ZXJ5IGZvciB0aGUgc21hbGxlc3QgYnJlYWtwb2ludC5cbi8vIE1ha2VzIHRoZSBAY29udGVudCBhcHBseSB0byB0aGUgZ2l2ZW4gYnJlYWtwb2ludCBhbmQgd2lkZXIuXG5AbWl4aW4gbWVkaWEtYnJlYWtwb2ludC11cCgkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICAkbWluOiBicmVha3BvaW50LW1pbigkbmFtZSwgJGJyZWFrcG9pbnRzKTtcbiAgQGlmICRtaW4ge1xuICAgIEBtZWRpYSAobWluLXdpZHRoOiAkbWluKSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH0gQGVsc2Uge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbi8vIE1lZGlhIG9mIGF0IG1vc3QgdGhlIG1heGltdW0gYnJlYWtwb2ludCB3aWR0aC4gTm8gcXVlcnkgZm9yIHRoZSBsYXJnZXN0IGJyZWFrcG9pbnQuXG4vLyBNYWtlcyB0aGUgQGNvbnRlbnQgYXBwbHkgdG8gdGhlIGdpdmVuIGJyZWFrcG9pbnQgYW5kIG5hcnJvd2VyLlxuQG1peGluIG1lZGlhLWJyZWFrcG9pbnQtZG93bigkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICAkbWF4OiBicmVha3BvaW50LW1heCgkbmFtZSwgJGJyZWFrcG9pbnRzKTtcbiAgQGlmICRtYXgge1xuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAkbWF4KSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH0gQGVsc2Uge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbi8vIE1lZGlhIHRoYXQgc3BhbnMgbXVsdGlwbGUgYnJlYWtwb2ludCB3aWR0aHMuXG4vLyBNYWtlcyB0aGUgQGNvbnRlbnQgYXBwbHkgYmV0d2VlbiB0aGUgbWluIGFuZCBtYXggYnJlYWtwb2ludHNcbkBtaXhpbiBtZWRpYS1icmVha3BvaW50LWJldHdlZW4oJGxvd2VyLCAkdXBwZXIsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgJG1pbjogYnJlYWtwb2ludC1taW4oJGxvd2VyLCAkYnJlYWtwb2ludHMpO1xuICAkbWF4OiBicmVha3BvaW50LW1heCgkdXBwZXIsICRicmVha3BvaW50cyk7XG5cbiAgQGlmICRtaW4gIT0gbnVsbCBhbmQgJG1heCAhPSBudWxsIHtcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogJG1pbikgYW5kIChtYXgtd2lkdGg6ICRtYXgpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSBpZiAkbWF4ID09IG51bGwge1xuICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtdXAoJGxvd2VyLCAkYnJlYWtwb2ludHMpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSBpZiAkbWluID09IG51bGwge1xuICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtZG93bigkdXBwZXIsICRicmVha3BvaW50cykge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9XG59XG5cbi8vIE1lZGlhIGJldHdlZW4gdGhlIGJyZWFrcG9pbnQncyBtaW5pbXVtIGFuZCBtYXhpbXVtIHdpZHRocy5cbi8vIE5vIG1pbmltdW0gZm9yIHRoZSBzbWFsbGVzdCBicmVha3BvaW50LCBhbmQgbm8gbWF4aW11bSBmb3IgdGhlIGxhcmdlc3Qgb25lLlxuLy8gTWFrZXMgdGhlIEBjb250ZW50IGFwcGx5IG9ubHkgdG8gdGhlIGdpdmVuIGJyZWFrcG9pbnQsIG5vdCB2aWV3cG9ydHMgYW55IHdpZGVyIG9yIG5hcnJvd2VyLlxuQG1peGluIG1lZGlhLWJyZWFrcG9pbnQtb25seSgkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICAkbWluOiBicmVha3BvaW50LW1pbigkbmFtZSwgJGJyZWFrcG9pbnRzKTtcbiAgJG1heDogYnJlYWtwb2ludC1tYXgoJG5hbWUsICRicmVha3BvaW50cyk7XG5cbiAgQGlmICRtaW4gIT0gbnVsbCBhbmQgJG1heCAhPSBudWxsIHtcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogJG1pbikgYW5kIChtYXgtd2lkdGg6ICRtYXgpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSBpZiAkbWF4ID09IG51bGwge1xuICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtdXAoJG5hbWUsICRicmVha3BvaW50cykge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9IEBlbHNlIGlmICRtaW4gPT0gbnVsbCB7XG4gICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC1kb3duKCRuYW1lLCAkYnJlYWtwb2ludHMpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfVxufVxuIl19 */"

/***/ }),

/***/ "./src/app/componentes/cabecera/cabecera.component.ts":
/*!************************************************************!*\
  !*** ./src/app/componentes/cabecera/cabecera.component.ts ***!
  \************************************************************/
/*! exports provided: CabeceraComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CabeceraComponent", function() { return CabeceraComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_servicios_Usuario_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/servicios/Usuario.service */ "./src/app/servicios/Usuario.service.ts");
/* harmony import */ var src_app_servicios_DataApi_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/servicios/DataApi.service */ "./src/app/servicios/DataApi.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var src_app_clases_Usuario__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/clases/Usuario */ "./src/app/clases/Usuario.ts");






var CabeceraComponent = /** @class */ (function () {
    function CabeceraComponent(usuarioService, dataApi) {
        this.usuarioService = usuarioService;
        this.dataApi = dataApi;
        this.administrador = false;
        this.recepcionista = false;
        this.cliente = false;
        this.especialista = false;
    }
    CabeceraComponent.prototype.ngOnInit = function () {
        this.TraerUsuarioActual();
    };
    CabeceraComponent.prototype.TraerUsuarioActual = function () {
        var _this = this;
        this.usuarioService.EstaLogeado().subscribe(function (user) {
            if (user) {
                _this.dataApi.TraerUno(user.uid, 'usuarios').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1)).subscribe(function (userx) {
                    _this.usuarioService.usuario = userx;
                    switch (_this.usuarioService.usuario.Perfil) {
                        case src_app_clases_Usuario__WEBPACK_IMPORTED_MODULE_5__["Perfil"].Administrador:
                            _this.administrador = true;
                            _this.cliente = false;
                            _this.especialista = false;
                            _this.recepcionista = false;
                            break;
                        case src_app_clases_Usuario__WEBPACK_IMPORTED_MODULE_5__["Perfil"].Cliente:
                            _this.cliente = true;
                            _this.administrador = false;
                            _this.especialista = false;
                            _this.recepcionista = false;
                            break;
                        case src_app_clases_Usuario__WEBPACK_IMPORTED_MODULE_5__["Perfil"].Recepcionista:
                            _this.recepcionista = true;
                            _this.administrador = false;
                            _this.cliente = false;
                            _this.especialista = false;
                            break;
                        case src_app_clases_Usuario__WEBPACK_IMPORTED_MODULE_5__["Perfil"].Especialista:
                            _this.especialista = true;
                            _this.administrador = false;
                            _this.cliente = false;
                            _this.recepcionista = false;
                            break;
                    }
                });
                _this.estaLogeado = true;
            }
            else {
                _this.estaLogeado = false;
            }
        });
    };
    CabeceraComponent.prototype.Deslogearse = function () {
        this.usuarioService.DeslogearUsuario();
    };
    CabeceraComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-cabecera',
            template: __webpack_require__(/*! raw-loader!./cabecera.component.html */ "./node_modules/raw-loader/index.js!./src/app/componentes/cabecera/cabecera.component.html"),
            styles: [__webpack_require__(/*! ./cabecera.component.scss */ "./src/app/componentes/cabecera/cabecera.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_servicios_Usuario_service__WEBPACK_IMPORTED_MODULE_2__["UsuarioService"], src_app_servicios_DataApi_service__WEBPACK_IMPORTED_MODULE_3__["DataApiService"]])
    ], CabeceraComponent);
    return CabeceraComponent;
}());



/***/ }),

/***/ "./src/app/componentes/chat/chat.component.scss":
/*!******************************************************!*\
  !*** ./src/app/componentes/chat/chat.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".user-img {\n  width: 28px;\n  height: 28px;\n  margin-right: 10px;\n  border-radius: 50%;\n  box-shadow: 0 0 40px rgba(0, 0, 0, 0.05);\n}\n\n.ulChatUser {\n  list-style: none;\n  text-align: left;\n  -webkit-padding-start: 0px;\n          padding-inline-start: 0px;\n}\n\n.divChatUser {\n  border-radius: 20px;\n  background-color: #6e9de4;\n}\n\n.divChatUserMe {\n  border-radius: 20px;\n  background-color: #b2f0e3;\n}\n\n.mat-raised-button {\n  margin-left: 20px;\n}\n\n.chat {\n  font-size: 14px;\n  margin-top: 40px;\n  margin-bottom: 80px;\n  text-align: center;\n}\n\n.chat .card-wrapper {\n  width: 400px;\n}\n\n.chat .card {\n  border-color: transparent;\n  box-shadow: 0 0 40px rgba(0, 0, 0, 0.05);\n}\n\n.chat .card.fat {\n  padding: 10px;\n}\n\n.chat .card .card-title {\n  margin-bottom: 30px;\n}\n\n.chat .form-control {\n  border-width: 2.3px;\n}\n\n.chat .form-group label {\n  width: 100%;\n}\n\n.chat .btn.btn-block {\n  padding: 12px 10px;\n}\n\n.chat .margin-top20 {\n  margin-top: 20px;\n}\n\n.chat .no-margin {\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50ZXMvY2hhdC9EOlxcQ2FycGV0YXMgVXN1YXJpb1xcRXNjcml0b3Jpb1xcV29ya2luZ1xcQ3Vyc2FkYUxhYjRcXEJ1ZW5hIFNvbnJpc2EgLSBUUDIvc3JjXFxhcHBcXGNvbXBvbmVudGVzXFxjaGF0XFxjaGF0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRlcy9jaGF0L2NoYXQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudGVzL2NoYXQvRDpcXENhcnBldGFzIFVzdWFyaW9cXEVzY3JpdG9yaW9cXFdvcmtpbmdcXEN1cnNhZGFMYWI0XFxCdWVuYSBTb25yaXNhIC0gVFAyL3NyY1xcc2Nzc1xcX3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esd0NBQUE7QUNESjs7QURJQTtFQUNDLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSwwQkFBQTtVQUFBLHlCQUFBO0FDREQ7O0FESUE7RUFDQyxtQkFBQTtFQUNBLHlCRWZPO0FEY1I7O0FESUE7RUFDQyxtQkFBQTtFQUNBLHlCRXJCTztBRG9CUjs7QURJQTtFQUNDLGlCQUFBO0FDREQ7O0FESUE7RUFDQyxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FDREQ7O0FESUE7RUFDQyxZQUFBO0FDREQ7O0FESUE7RUFDQyx5QkFBQTtFQUNBLHdDQUFBO0FDREQ7O0FESUE7RUFDQyxhQUFBO0FDREQ7O0FESUE7RUFDQyxtQkFBQTtBQ0REOztBRElBO0VBQ0MsbUJBQUE7QUNERDs7QURJQTtFQUNDLFdBQUE7QUNERDs7QURJQTtFQUNDLGtCQUFBO0FDREQ7O0FESUE7RUFDQyxnQkFBQTtBQ0REOztBRElBO0VBQ0MsU0FBQTtBQ0REIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50ZXMvY2hhdC9jaGF0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcInNyYy9zY3NzL3ZhcmlhYmxlc1wiO1xyXG5cclxuLnVzZXItaW1nIHtcclxuICAgIHdpZHRoOiAyOHB4O1xyXG4gICAgaGVpZ2h0OiAyOHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDQwcHggcmdiYSgwLDAsMCwuMDUpO1xyXG59XHJcblxyXG4udWxDaGF0VXNlciB7XHJcblx0bGlzdC1zdHlsZTogbm9uZTsgXHJcblx0dGV4dC1hbGlnbjogbGVmdDtcclxuXHRwYWRkaW5nLWlubGluZS1zdGFydDogMHB4O1xyXG59XHJcblxyXG4uZGl2Q2hhdFVzZXIge1xyXG5cdGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogJGxpZ2h0LXNlY29uZGF5O1xyXG59XHJcblxyXG4uZGl2Q2hhdFVzZXJNZSB7XHJcblx0Ym9yZGVyLXJhZGl1czogMjBweDtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAkbGlnaHQtcHJpbWFyeTtcclxufVxyXG5cclxuLm1hdC1yYWlzZWQtYnV0dG9uIHtcclxuXHRtYXJnaW4tbGVmdDogMjBweDtcclxufVxyXG5cclxuLmNoYXQge1xyXG5cdGZvbnQtc2l6ZTogMTRweDtcclxuXHRtYXJnaW4tdG9wOiA0MHB4O1xyXG5cdG1hcmdpbi1ib3R0b206IDgwcHg7XHJcblx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uY2hhdCAuY2FyZC13cmFwcGVyIHtcclxuXHR3aWR0aDogNDAwcHg7XHJcbn1cclxuXHJcbi5jaGF0IC5jYXJkIHtcclxuXHRib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xyXG5cdGJveC1zaGFkb3c6IDAgMCA0MHB4IHJnYmEoMCwwLDAsLjA1KTtcclxufVxyXG5cclxuLmNoYXQgLmNhcmQuZmF0IHtcclxuXHRwYWRkaW5nOiAxMHB4O1xyXG59XHJcblxyXG4uY2hhdCAuY2FyZCAuY2FyZC10aXRsZSB7XHJcblx0bWFyZ2luLWJvdHRvbTogMzBweDtcclxufVxyXG5cclxuLmNoYXQgLmZvcm0tY29udHJvbCB7XHJcblx0Ym9yZGVyLXdpZHRoOiAyLjNweDtcclxufVxyXG5cclxuLmNoYXQgLmZvcm0tZ3JvdXAgbGFiZWwge1xyXG5cdHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uY2hhdCAuYnRuLmJ0bi1ibG9jayB7XHJcblx0cGFkZGluZzogMTJweCAxMHB4O1xyXG59XHJcblxyXG4uY2hhdCAubWFyZ2luLXRvcDIwIHtcclxuXHRtYXJnaW4tdG9wOiAyMHB4O1xyXG59XHJcblxyXG4uY2hhdCAubm8tbWFyZ2luIHtcclxuXHRtYXJnaW46IDA7XHJcbn0iLCIudXNlci1pbWcge1xuICB3aWR0aDogMjhweDtcbiAgaGVpZ2h0OiAyOHB4O1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYm94LXNoYWRvdzogMCAwIDQwcHggcmdiYSgwLCAwLCAwLCAwLjA1KTtcbn1cblxuLnVsQ2hhdFVzZXIge1xuICBsaXN0LXN0eWxlOiBub25lO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBwYWRkaW5nLWlubGluZS1zdGFydDogMHB4O1xufVxuXG4uZGl2Q2hhdFVzZXIge1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNmU5ZGU0O1xufVxuXG4uZGl2Q2hhdFVzZXJNZSB7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNiMmYwZTM7XG59XG5cbi5tYXQtcmFpc2VkLWJ1dHRvbiB7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xufVxuXG4uY2hhdCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbWFyZ2luLXRvcDogNDBweDtcbiAgbWFyZ2luLWJvdHRvbTogODBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uY2hhdCAuY2FyZC13cmFwcGVyIHtcbiAgd2lkdGg6IDQwMHB4O1xufVxuXG4uY2hhdCAuY2FyZCB7XG4gIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJveC1zaGFkb3c6IDAgMCA0MHB4IHJnYmEoMCwgMCwgMCwgMC4wNSk7XG59XG5cbi5jaGF0IC5jYXJkLmZhdCB7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG5cbi5jaGF0IC5jYXJkIC5jYXJkLXRpdGxlIHtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbn1cblxuLmNoYXQgLmZvcm0tY29udHJvbCB7XG4gIGJvcmRlci13aWR0aDogMi4zcHg7XG59XG5cbi5jaGF0IC5mb3JtLWdyb3VwIGxhYmVsIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5jaGF0IC5idG4uYnRuLWJsb2NrIHtcbiAgcGFkZGluZzogMTJweCAxMHB4O1xufVxuXG4uY2hhdCAubWFyZ2luLXRvcDIwIHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cblxuLmNoYXQgLm5vLW1hcmdpbiB7XG4gIG1hcmdpbjogMDtcbn0iLCIvLyBTZXQgY3VzdG9tIGNvbG9yc1xyXG4kdGVhbDogIzFhYmM5YyAhZGVmYXVsdDtcclxuJHRlYWwyOiAjYjJmMGUzICFkZWZhdWx0O1xyXG4kdGVhbDM6ICM2ZTlkZTQgIWRlZmF1bHQ7XHJcbiR3aGl0ZTogI2ZmZiAhZGVmYXVsdDtcclxuJGRhcmstYmx1ZTogIzJjM2U1MCAhZGVmYXVsdDtcclxuXHJcbi8vIE92ZXJyaWRlIEJvb3RzdHJhcCBwcmltYXJ5IGFuZCBzZWNvbmRhcnkgY29sb3JzXHJcbiRwcmltYXJ5OiAkdGVhbCAhZGVmYXVsdDtcclxuJHNlY29uZGFyeTogJGRhcmstYmx1ZSAhZGVmYXVsdDtcclxuJGxpZ2h0LXByaW1hcnk6ICR0ZWFsMiAhZGVmYXVsdDtcclxuJGxpZ2h0LXNlY29uZGF5OiAkdGVhbDMgIWRlZmF1bHQ7XHJcblxyXG4vLyBPdmVycmlkZSBCb290c3RyYXAgZm9udCB2YXJpYWJsZXNcclxuJGZvbnQtZmFtaWx5LXNhbnMtc2VyaWY6IFwiTGF0b1wiLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFwiU2Vnb2UgVUlcIiwgUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIEFyaWFsLCBcIk5vdG8gU2Fuc1wiLCBzYW5zLXNlcmlmLCBcIkFwcGxlIENvbG9yIEVtb2ppXCIsIFwiU2Vnb2UgVUkgRW1vamlcIiwgXCJTZWdvZSBVSSBTeW1ib2xcIiwgJ05vdG8gQ29sb3IgRW1vamknICFkZWZhdWx0O1xyXG4kaGVhZGluZ3MtZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFwiU2Vnb2UgVUlcIiwgUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIEFyaWFsLCBcIk5vdG8gU2Fuc1wiLCBzYW5zLXNlcmlmLCBcIkFwcGxlIENvbG9yIEVtb2ppXCIsIFwiU2Vnb2UgVUkgRW1vamlcIiwgXCJTZWdvZSBVSSBTeW1ib2xcIiwgJ05vdG8gQ29sb3IgRW1vamknICFkZWZhdWx0O1xyXG4kaGVhZGluZ3MtZm9udC13ZWlnaHQ6IDEwMDAgIWRlZmF1bHQ7XHJcbiRoZWFkaW5ncy1mb250LXdlaWdodC1iaWdnZXI6IDEyMDAgIWRlZmF1bHQ7XHJcblxyXG4vLyBPdmVycmlkZSBCb290c3RyYXAgYm9yZGVyIHZhcmlhYmxlc1xyXG4kYm9yZGVyLXdpZHRoOiAwLjEyNXJlbSAhZGVmYXVsdDtcclxuJGJvcmRlci1yYWRpdXM6IDAuNXJlbSAhZGVmYXVsdDtcclxuJGJvcmRlci1yYWRpdXMtbGc6IDAuNzVyZW0gIWRlZmF1bHQ7XHJcbiRib3JkZXItcmFkaXVzLXNtOiAwLjI1cmVtICFkZWZhdWx0O1xyXG5cclxuLy8gT3ZlcnJpZGUgQm9vdHN0cmFwIGlucHV0L2J1dHRvbiB2YXJpYWJsZXNcclxuJGlucHV0LWJ0bi1ib3JkZXItd2lkdGg6ICRib3JkZXItd2lkdGggIWRlZmF1bHQ7XHJcblxyXG4vLyBPdmVycmlkZSBCb290c3RyYXAgbW9kYWwgdmFyaWFibGVzXHJcbiRtb2RhbC1pbm5lci1wYWRkaW5nOiA0cmVtIDFyZW0gIWRlZmF1bHQ7XHJcbiRtb2RhbC1jb250ZW50LWJvcmRlci13aWR0aDogMCAhZGVmYXVsdDtcclxuIl19 */"

/***/ }),

/***/ "./src/app/componentes/chat/chat.component.ts":
/*!****************************************************!*\
  !*** ./src/app/componentes/chat/chat.component.ts ***!
  \****************************************************/
/*! exports provided: ChatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatComponent", function() { return ChatComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_app_servicios_Usuario_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/servicios/Usuario.service */ "./src/app/servicios/Usuario.service.ts");
/* harmony import */ var src_app_clases_Mensaje__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/clases/Mensaje */ "./src/app/clases/Mensaje.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var angular2_notifications__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular2-notifications */ "./node_modules/angular2-notifications/angular2-notifications.umd.js");
/* harmony import */ var angular2_notifications__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(angular2_notifications__WEBPACK_IMPORTED_MODULE_6__);







var ChatComponent = /** @class */ (function () {
    function ChatComponent(afs, usuarioService, ns) {
        this.afs = afs;
        this.usuarioService = usuarioService;
        this.ns = ns;
        this.mensaje = new src_app_clases_Mensaje__WEBPACK_IMPORTED_MODULE_4__["Mensaje"]();
        this.mensajesCollection = afs.collection('mensajes');
        this.mensajes = this.mensajesCollection.valueChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (lessons) { return lessons.sort(function (a, b) { return new Date(a.Fecha).getTime() - new Date(b.Fecha).getTime(); }); }));
        this.EnterPresionado = this.EnterPresionado.bind(this);
        document.addEventListener('keypress', this.EnterPresionado);
    }
    ChatComponent.prototype.ngOnInit = function () {
    };
    ChatComponent.prototype.NuevoMensaje = function () {
        if (this.mensaje.Mensaje == undefined || this.mensaje.Mensaje.trim() == '') {
            return;
        }
        this.mensaje.UserUid = this.usuarioService.usuario.Uid;
        this.mensaje.UrlImagen = this.usuarioService.usuario.ImagenUrl;
        this.mensaje.Nombre = this.usuarioService.usuario.Nombre;
        this.mensaje.Fecha = Date.now();
        this.mensajesCollection.add({ 'Mensaje': this.mensaje.Mensaje, 'Fecha': this.mensaje.Fecha, 'UserUid': this.mensaje.UserUid, 'UrlImagen': this.mensaje.UrlImagen, 'Nombre': this.mensaje.Nombre }); //new Mensaje(msj, Date.now(), this.usuarioService.usuario.Uid));
        this.mensaje = new src_app_clases_Mensaje__WEBPACK_IMPORTED_MODULE_4__["Mensaje"]();
    };
    ChatComponent.prototype.EnterPresionado = function (event) {
        if (event.which === 13) {
            this.NuevoMensaje();
        }
    };
    ChatComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-chat',
            template: __webpack_require__(/*! raw-loader!./chat.component.html */ "./node_modules/raw-loader/index.js!./src/app/componentes/chat/chat.component.html"),
            styles: [__webpack_require__(/*! ./chat.component.scss */ "./src/app/componentes/chat/chat.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"], src_app_servicios_Usuario_service__WEBPACK_IMPORTED_MODULE_3__["UsuarioService"], angular2_notifications__WEBPACK_IMPORTED_MODULE_6__["NotificationsService"]])
    ], ChatComponent);
    return ChatComponent;
}());



/***/ }),

/***/ "./src/app/componentes/error404/error404.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/componentes/error404/error404.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\n  padding: 0;\n  margin: 0;\n}\n\n#notfound {\n  height: 100vh;\n}\n\n#notfound .notfound {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  -webkit-transform: translate(-50%, -50%);\n  transform: translate(-50%, -50%);\n}\n\n.notfound {\n  max-width: 767px;\n  width: 100%;\n  line-height: 1.4;\n  text-align: center;\n  padding: 15px;\n}\n\n.notfound .notfound-404 {\n  position: relative;\n  height: 220px;\n}\n\n.notfound .notfound-404 h1 {\n  font-family: \"Kanit\", sans-serif;\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  -webkit-transform: translate(-50%, -50%);\n  transform: translate(-50%, -50%);\n  font-size: 186px;\n  font-weight: 200;\n  margin: 0px;\n  background: linear-gradient(130deg, #1abc9c, #2c3e50);\n  color: transparent;\n  -webkit-background-clip: text;\n  background-clip: text;\n  text-transform: uppercase;\n}\n\n.notfound h2 {\n  font-family: \"Kanit\", sans-serif;\n  font-size: 33px;\n  font-weight: 200;\n  text-transform: uppercase;\n  margin-top: 0px;\n  margin-bottom: 25px;\n  letter-spacing: 3px;\n}\n\n.notfound p {\n  font-family: \"Kanit\", sans-serif;\n  font-size: 16px;\n  font-weight: 200;\n  margin-top: 0px;\n  margin-bottom: 25px;\n}\n\n.notfound a {\n  font-family: \"Kanit\", sans-serif;\n  color: #1abc9c;\n  font-weight: 200;\n  text-decoration: none;\n  border-bottom: 1px dashed #1abc9c;\n  border-radius: 2px;\n}\n\n.notfound-social > a {\n  display: inline-block;\n  height: 40px;\n  line-height: 40px;\n  width: 40px;\n  font-size: 14px;\n  color: #1abc9c;\n  border: 1px solid #fff;\n  border-radius: 50%;\n  margin: 3px;\n  transition: 0.2s all;\n}\n\n.notfound-social > a:hover {\n  color: #fff;\n  background-color: #1abc9c;\n  border-color: #2c3e50;\n}\n\n@media only screen and (max-width: 480px) {\n  .notfound .notfound-404 {\n    position: relative;\n    height: 168px;\n  }\n\n  .notfound .notfound-404 h1 {\n    font-size: 142px;\n  }\n\n  .notfound h2 {\n    font-size: 22px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50ZXMvZXJyb3I0MDQvRDpcXENhcnBldGFzIFVzdWFyaW9cXEVzY3JpdG9yaW9cXFdvcmtpbmdcXEN1cnNhZGFMYWI0XFxCdWVuYSBTb25yaXNhIC0gVFAyL3NyY1xcYXBwXFxjb21wb25lbnRlc1xcZXJyb3I0MDRcXGVycm9yNDA0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRlcy9lcnJvcjQwNC9lcnJvcjQwNC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50ZXMvZXJyb3I0MDQvRDpcXENhcnBldGFzIFVzdWFyaW9cXEVzY3JpdG9yaW9cXFdvcmtpbmdcXEN1cnNhZGFMYWI0XFxCdWVuYSBTb25yaXNhIC0gVFAyL3NyY1xcc2Nzc1xcX3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVFO0VBQ0UsVUFBQTtFQUNBLFNBQUE7QUNESjs7QURJRTtFQUNFLGFBQUE7QUNESjs7QURJRTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSx3Q0FBQTtFQUVRLGdDQUFBO0FDRFo7O0FESUU7RUFDRSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtBQ0RKOztBRElFO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0FDREo7O0FESUU7RUFDRSxnQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSx3Q0FBQTtFQUVRLGdDQUFBO0VBQ1IsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxxREFBQTtFQUNBLGtCQUFBO0VBQ0EsNkJBQUE7RUFDQSxxQkFBQTtFQUNBLHlCQUFBO0FDREo7O0FESUU7RUFDRSxnQ0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUNESjs7QURLRTtFQUNFLGdDQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FDRko7O0FETUU7RUFDRSxnQ0FBQTtFQUNBLGNFeEVHO0VGeUVILGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxpQ0FBQTtFQUNBLGtCQUFBO0FDSEo7O0FETUU7RUFDRSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsY0VyRkc7RUZzRkgsc0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFFQSxvQkFBQTtBQ0hKOztBREtFO0VBQ0UsV0UxRkk7RUYyRkoseUJFOUZHO0VGK0ZILHFCRTNGUTtBRHlGWjs7QURLRTtFQUNFO0lBQ0Usa0JBQUE7SUFDQSxhQUFBO0VDRko7O0VES0U7SUFDRSxnQkFBQTtFQ0ZKOztFREtFO0lBQ0UsZUFBQTtFQ0ZKO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRlcy9lcnJvcjQwNC9lcnJvcjQwNC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJzcmMvc2Nzcy92YXJpYWJsZXNcIjtcclxuXHJcbiAgYm9keSB7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gIH1cclxuICBcclxuICAjbm90Zm91bmQge1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICB9XHJcbiAgXHJcbiAgI25vdGZvdW5kIC5ub3Rmb3VuZCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgICAgICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICB9XHJcbiAgXHJcbiAgLm5vdGZvdW5kIHtcclxuICAgIG1heC13aWR0aDogNzY3cHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjQ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG4gIH1cclxuICBcclxuICAubm90Zm91bmQgLm5vdGZvdW5kLTQwNCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBoZWlnaHQ6IDIyMHB4O1xyXG4gIH1cclxuICBcclxuICAubm90Zm91bmQgLm5vdGZvdW5kLTQwNCBoMSB7XHJcbiAgICBmb250LWZhbWlseTogJ0thbml0Jywgc2Fucy1zZXJpZjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAgICAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgZm9udC1zaXplOiAxODZweDtcclxuICAgIGZvbnQtd2VpZ2h0OiAyMDA7XHJcbiAgICBtYXJnaW46IDBweDtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzBkZWcsICRwcmltYXJ5LCAkc2Vjb25kYXJ5KTtcclxuICAgIGNvbG9yOnRyYW5zcGFyZW50O1xyXG4gICAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIH1cclxuICBcclxuICAubm90Zm91bmQgaDIge1xyXG4gICAgZm9udC1mYW1pbHk6ICdLYW5pdCcsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDMzcHg7XHJcbiAgICBmb250LXdlaWdodDogMjAwO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIG1hcmdpbi10b3A6IDBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogM3B4O1xyXG4gIH1cclxuICBcclxuICBcclxuICAubm90Zm91bmQgcCB7XHJcbiAgICBmb250LWZhbWlseTogJ0thbml0Jywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGZvbnQtd2VpZ2h0OiAyMDA7XHJcbiAgICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xyXG4gIH1cclxuICBcclxuICBcclxuICAubm90Zm91bmQgYSB7XHJcbiAgICBmb250LWZhbWlseTogJ0thbml0Jywgc2Fucy1zZXJpZjtcclxuICAgIGNvbG9yOiAkcHJpbWFyeTtcclxuICAgIGZvbnQtd2VpZ2h0OiAyMDA7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggZGFzaGVkICRwcmltYXJ5O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gIH1cclxuICBcclxuICAubm90Zm91bmQtc29jaWFsPmEge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDQwcHg7XHJcbiAgICB3aWR0aDogNDBweDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGNvbG9yOiAkcHJpbWFyeTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICR3aGl0ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIG1hcmdpbjogM3B4O1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjJzIGFsbDtcclxuICAgIHRyYW5zaXRpb246IDAuMnMgYWxsO1xyXG4gIH1cclxuICAubm90Zm91bmQtc29jaWFsPmE6aG92ZXIge1xyXG4gICAgY29sb3I6ICR3aGl0ZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5O1xyXG4gICAgYm9yZGVyLWNvbG9yOiAkc2Vjb25kYXJ5O1xyXG4gIH1cclxuICBcclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4MHB4KSB7XHJcbiAgICAubm90Zm91bmQgLm5vdGZvdW5kLTQwNCB7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgaGVpZ2h0OiAxNjhweDtcclxuICAgIH1cclxuICBcclxuICAgIC5ub3Rmb3VuZCAubm90Zm91bmQtNDA0IGgxIHtcclxuICAgICAgZm9udC1zaXplOiAxNDJweDtcclxuICAgIH1cclxuICBcclxuICAgIC5ub3Rmb3VuZCBoMiB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgIH1cclxuICB9XHJcbiAgIiwiYm9keSB7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbn1cblxuI25vdGZvdW5kIHtcbiAgaGVpZ2h0OiAxMDB2aDtcbn1cblxuI25vdGZvdW5kIC5ub3Rmb3VuZCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogNTAlO1xuICB0b3A6IDUwJTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbn1cblxuLm5vdGZvdW5kIHtcbiAgbWF4LXdpZHRoOiA3NjdweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGxpbmUtaGVpZ2h0OiAxLjQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMTVweDtcbn1cblxuLm5vdGZvdW5kIC5ub3Rmb3VuZC00MDQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGhlaWdodDogMjIwcHg7XG59XG5cbi5ub3Rmb3VuZCAubm90Zm91bmQtNDA0IGgxIHtcbiAgZm9udC1mYW1pbHk6IFwiS2FuaXRcIiwgc2Fucy1zZXJpZjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiA1MCU7XG4gIHRvcDogNTAlO1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICBmb250LXNpemU6IDE4NnB4O1xuICBmb250LXdlaWdodDogMjAwO1xuICBtYXJnaW46IDBweDtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzMGRlZywgIzFhYmM5YywgIzJjM2U1MCk7XG4gIGNvbG9yOiB0cmFuc3BhcmVudDtcbiAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XG4gIGJhY2tncm91bmQtY2xpcDogdGV4dDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuLm5vdGZvdW5kIGgyIHtcbiAgZm9udC1mYW1pbHk6IFwiS2FuaXRcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAzM3B4O1xuICBmb250LXdlaWdodDogMjAwO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBtYXJnaW4tdG9wOiAwcHg7XG4gIG1hcmdpbi1ib3R0b206IDI1cHg7XG4gIGxldHRlci1zcGFjaW5nOiAzcHg7XG59XG5cbi5ub3Rmb3VuZCBwIHtcbiAgZm9udC1mYW1pbHk6IFwiS2FuaXRcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogMjAwO1xuICBtYXJnaW4tdG9wOiAwcHg7XG4gIG1hcmdpbi1ib3R0b206IDI1cHg7XG59XG5cbi5ub3Rmb3VuZCBhIHtcbiAgZm9udC1mYW1pbHk6IFwiS2FuaXRcIiwgc2Fucy1zZXJpZjtcbiAgY29sb3I6ICMxYWJjOWM7XG4gIGZvbnQtd2VpZ2h0OiAyMDA7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IGRhc2hlZCAjMWFiYzljO1xuICBib3JkZXItcmFkaXVzOiAycHg7XG59XG5cbi5ub3Rmb3VuZC1zb2NpYWwgPiBhIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBoZWlnaHQ6IDQwcHg7XG4gIGxpbmUtaGVpZ2h0OiA0MHB4O1xuICB3aWR0aDogNDBweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogIzFhYmM5YztcbiAgYm9yZGVyOiAxcHggc29saWQgI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBtYXJnaW46IDNweDtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjJzIGFsbDtcbiAgdHJhbnNpdGlvbjogMC4ycyBhbGw7XG59XG5cbi5ub3Rmb3VuZC1zb2NpYWwgPiBhOmhvdmVyIHtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxYWJjOWM7XG4gIGJvcmRlci1jb2xvcjogIzJjM2U1MDtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0ODBweCkge1xuICAubm90Zm91bmQgLm5vdGZvdW5kLTQwNCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGhlaWdodDogMTY4cHg7XG4gIH1cblxuICAubm90Zm91bmQgLm5vdGZvdW5kLTQwNCBoMSB7XG4gICAgZm9udC1zaXplOiAxNDJweDtcbiAgfVxuXG4gIC5ub3Rmb3VuZCBoMiB7XG4gICAgZm9udC1zaXplOiAyMnB4O1xuICB9XG59IiwiLy8gU2V0IGN1c3RvbSBjb2xvcnNcclxuJHRlYWw6ICMxYWJjOWMgIWRlZmF1bHQ7XHJcbiR0ZWFsMjogI2IyZjBlMyAhZGVmYXVsdDtcclxuJHRlYWwzOiAjNmU5ZGU0ICFkZWZhdWx0O1xyXG4kd2hpdGU6ICNmZmYgIWRlZmF1bHQ7XHJcbiRkYXJrLWJsdWU6ICMyYzNlNTAgIWRlZmF1bHQ7XHJcblxyXG4vLyBPdmVycmlkZSBCb290c3RyYXAgcHJpbWFyeSBhbmQgc2Vjb25kYXJ5IGNvbG9yc1xyXG4kcHJpbWFyeTogJHRlYWwgIWRlZmF1bHQ7XHJcbiRzZWNvbmRhcnk6ICRkYXJrLWJsdWUgIWRlZmF1bHQ7XHJcbiRsaWdodC1wcmltYXJ5OiAkdGVhbDIgIWRlZmF1bHQ7XHJcbiRsaWdodC1zZWNvbmRheTogJHRlYWwzICFkZWZhdWx0O1xyXG5cclxuLy8gT3ZlcnJpZGUgQm9vdHN0cmFwIGZvbnQgdmFyaWFibGVzXHJcbiRmb250LWZhbWlseS1zYW5zLXNlcmlmOiBcIkxhdG9cIiwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcIlNlZ29lIFVJXCIsIFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBBcmlhbCwgXCJOb3RvIFNhbnNcIiwgc2Fucy1zZXJpZiwgXCJBcHBsZSBDb2xvciBFbW9qaVwiLCBcIlNlZ29lIFVJIEVtb2ppXCIsIFwiU2Vnb2UgVUkgU3ltYm9sXCIsICdOb3RvIENvbG9yIEVtb2ppJyAhZGVmYXVsdDtcclxuJGhlYWRpbmdzLWZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIiwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcIlNlZ29lIFVJXCIsIFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBBcmlhbCwgXCJOb3RvIFNhbnNcIiwgc2Fucy1zZXJpZiwgXCJBcHBsZSBDb2xvciBFbW9qaVwiLCBcIlNlZ29lIFVJIEVtb2ppXCIsIFwiU2Vnb2UgVUkgU3ltYm9sXCIsICdOb3RvIENvbG9yIEVtb2ppJyAhZGVmYXVsdDtcclxuJGhlYWRpbmdzLWZvbnQtd2VpZ2h0OiAxMDAwICFkZWZhdWx0O1xyXG4kaGVhZGluZ3MtZm9udC13ZWlnaHQtYmlnZ2VyOiAxMjAwICFkZWZhdWx0O1xyXG5cclxuLy8gT3ZlcnJpZGUgQm9vdHN0cmFwIGJvcmRlciB2YXJpYWJsZXNcclxuJGJvcmRlci13aWR0aDogMC4xMjVyZW0gIWRlZmF1bHQ7XHJcbiRib3JkZXItcmFkaXVzOiAwLjVyZW0gIWRlZmF1bHQ7XHJcbiRib3JkZXItcmFkaXVzLWxnOiAwLjc1cmVtICFkZWZhdWx0O1xyXG4kYm9yZGVyLXJhZGl1cy1zbTogMC4yNXJlbSAhZGVmYXVsdDtcclxuXHJcbi8vIE92ZXJyaWRlIEJvb3RzdHJhcCBpbnB1dC9idXR0b24gdmFyaWFibGVzXHJcbiRpbnB1dC1idG4tYm9yZGVyLXdpZHRoOiAkYm9yZGVyLXdpZHRoICFkZWZhdWx0O1xyXG5cclxuLy8gT3ZlcnJpZGUgQm9vdHN0cmFwIG1vZGFsIHZhcmlhYmxlc1xyXG4kbW9kYWwtaW5uZXItcGFkZGluZzogNHJlbSAxcmVtICFkZWZhdWx0O1xyXG4kbW9kYWwtY29udGVudC1ib3JkZXItd2lkdGg6IDAgIWRlZmF1bHQ7XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/componentes/error404/error404.component.ts":
/*!************************************************************!*\
  !*** ./src/app/componentes/error404/error404.component.ts ***!
  \************************************************************/
/*! exports provided: Error404Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Error404Component", function() { return Error404Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var Error404Component = /** @class */ (function () {
    function Error404Component() {
    }
    Error404Component.prototype.ngOnInit = function () {
    };
    Error404Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-error404',
            template: __webpack_require__(/*! raw-loader!./error404.component.html */ "./node_modules/raw-loader/index.js!./src/app/componentes/error404/error404.component.html"),
            styles: [__webpack_require__(/*! ./error404.component.scss */ "./src/app/componentes/error404/error404.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], Error404Component);
    return Error404Component;
}());



/***/ }),

/***/ "./src/app/componentes/inicio/inicio.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/componentes/inicio/inicio.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\n  padding: 0;\n  margin: 0;\n}\n\n#notfound {\n  height: 100vh;\n}\n\n#notfound .notfound {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  -webkit-transform: translate(-50%, -50%);\n  transform: translate(-50%, -50%);\n}\n\n.notfound {\n  max-width: 767px;\n  width: 100%;\n  line-height: 1.4;\n  text-align: center;\n  padding: 15px;\n}\n\n.notfound .notfound-404 {\n  position: relative;\n  height: 220px;\n}\n\n.notfound .notfound-404 h1 {\n  font-family: \"Kanit\", sans-serif;\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  -webkit-transform: translate(-50%, -50%);\n  transform: translate(-50%, -50%);\n  font-size: 186px;\n  font-weight: 200;\n  margin: 0px;\n  background: linear-gradient(130deg, #1abc9c, #2c3e50);\n  color: transparent;\n  -webkit-background-clip: text;\n  background-clip: text;\n  text-transform: uppercase;\n}\n\n.notfound h2 {\n  font-family: \"Kanit\", sans-serif;\n  font-size: 33px;\n  font-weight: 200;\n  text-transform: uppercase;\n  margin-top: 0px;\n  margin-bottom: 25px;\n  letter-spacing: 3px;\n}\n\n.notfound p {\n  font-family: \"Kanit\", sans-serif;\n  font-size: 16px;\n  font-weight: 200;\n  margin-top: 0px;\n  margin-bottom: 25px;\n}\n\n.notfound a {\n  font-family: \"Kanit\", sans-serif;\n  color: #1abc9c;\n  font-weight: 200;\n  text-decoration: none;\n  border-bottom: 1px dashed #1abc9c;\n  border-radius: 2px;\n}\n\n.notfound-social > a {\n  display: inline-block;\n  height: 40px;\n  line-height: 40px;\n  width: 40px;\n  font-size: 14px;\n  color: #1abc9c;\n  border: 1px solid #fff;\n  border-radius: 50%;\n  margin: 3px;\n  transition: 0.2s all;\n}\n\n.notfound-social > a:hover {\n  color: #fff;\n  background-color: #1abc9c;\n  border-color: #2c3e50;\n}\n\n@media only screen and (max-width: 480px) {\n  .notfound .notfound-404 {\n    position: relative;\n    height: 168px;\n  }\n\n  .notfound .notfound-404 h1 {\n    font-size: 142px;\n  }\n\n  .notfound h2 {\n    font-size: 22px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50ZXMvaW5pY2lvL0Q6XFxDYXJwZXRhcyBVc3VhcmlvXFxFc2NyaXRvcmlvXFxXb3JraW5nXFxDdXJzYWRhTGFiNFxcQnVlbmEgU29ucmlzYSAtIFRQMi9zcmNcXGFwcFxcY29tcG9uZW50ZXNcXGluaWNpb1xcaW5pY2lvLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRlcy9pbmljaW8vaW5pY2lvLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRlcy9pbmljaW8vRDpcXENhcnBldGFzIFVzdWFyaW9cXEVzY3JpdG9yaW9cXFdvcmtpbmdcXEN1cnNhZGFMYWI0XFxCdWVuYSBTb25yaXNhIC0gVFAyL3NyY1xcc2Nzc1xcX3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVFO0VBQ0UsVUFBQTtFQUNBLFNBQUE7QUNESjs7QURJRTtFQUNFLGFBQUE7QUNESjs7QURJRTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSx3Q0FBQTtFQUVRLGdDQUFBO0FDRFo7O0FESUU7RUFDRSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtBQ0RKOztBRElFO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0FDREo7O0FESUU7RUFDRSxnQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSx3Q0FBQTtFQUVRLGdDQUFBO0VBQ1IsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxxREFBQTtFQUNBLGtCQUFBO0VBQ0EsNkJBQUE7RUFDQSxxQkFBQTtFQUNBLHlCQUFBO0FDREo7O0FESUU7RUFDRSxnQ0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUNESjs7QURLRTtFQUNFLGdDQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FDRko7O0FETUU7RUFDRSxnQ0FBQTtFQUNBLGNFeEVHO0VGeUVILGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxpQ0FBQTtFQUNBLGtCQUFBO0FDSEo7O0FETUU7RUFDRSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsY0VyRkc7RUZzRkgsc0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFFQSxvQkFBQTtBQ0hKOztBREtFO0VBQ0UsV0UxRkk7RUYyRkoseUJFOUZHO0VGK0ZILHFCRTNGUTtBRHlGWjs7QURLRTtFQUNFO0lBQ0Usa0JBQUE7SUFDQSxhQUFBO0VDRko7O0VES0U7SUFDRSxnQkFBQTtFQ0ZKOztFREtFO0lBQ0UsZUFBQTtFQ0ZKO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRlcy9pbmljaW8vaW5pY2lvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcInNyYy9zY3NzL3ZhcmlhYmxlc1wiO1xyXG5cclxuICBib2R5IHtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgfVxyXG4gIFxyXG4gICNub3Rmb3VuZCB7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gIH1cclxuICBcclxuICAjbm90Zm91bmQgLm5vdGZvdW5kIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAgICAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gIH1cclxuICBcclxuICAubm90Zm91bmQge1xyXG4gICAgbWF4LXdpZHRoOiA3NjdweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuNDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5ub3Rmb3VuZCAubm90Zm91bmQtNDA0IHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGhlaWdodDogMjIwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5ub3Rmb3VuZCAubm90Zm91bmQtNDA0IGgxIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnS2FuaXQnLCBzYW5zLXNlcmlmO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgICBmb250LXNpemU6IDE4NnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDIwMDtcclxuICAgIG1hcmdpbjogMHB4O1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzMGRlZywgJHByaW1hcnksICRzZWNvbmRhcnkpO1xyXG4gICAgY29sb3I6dHJhbnNwYXJlbnQ7XHJcbiAgICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcclxuICAgIGJhY2tncm91bmQtY2xpcDogdGV4dDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgfVxyXG4gIFxyXG4gIC5ub3Rmb3VuZCBoMiB7XHJcbiAgICBmb250LWZhbWlseTogJ0thbml0Jywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMzNweDtcclxuICAgIGZvbnQtd2VpZ2h0OiAyMDA7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgbWFyZ2luLXRvcDogMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjVweDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAzcHg7XHJcbiAgfVxyXG4gIFxyXG4gIFxyXG4gIC5ub3Rmb3VuZCBwIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnS2FuaXQnLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDIwMDtcclxuICAgIG1hcmdpbi10b3A6IDBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XHJcbiAgfVxyXG4gIFxyXG4gIFxyXG4gIC5ub3Rmb3VuZCBhIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnS2FuaXQnLCBzYW5zLXNlcmlmO1xyXG4gICAgY29sb3I6ICRwcmltYXJ5O1xyXG4gICAgZm9udC13ZWlnaHQ6IDIwMDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBkYXNoZWQgJHByaW1hcnk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5ub3Rmb3VuZC1zb2NpYWw+YSB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICBsaW5lLWhlaWdodDogNDBweDtcclxuICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgY29sb3I6ICRwcmltYXJ5O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgJHdoaXRlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgbWFyZ2luOiAzcHg7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IDAuMnMgYWxsO1xyXG4gICAgdHJhbnNpdGlvbjogMC4ycyBhbGw7XHJcbiAgfVxyXG4gIC5ub3Rmb3VuZC1zb2NpYWw+YTpob3ZlciB7XHJcbiAgICBjb2xvcjogJHdoaXRlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHByaW1hcnk7XHJcbiAgICBib3JkZXItY29sb3I6ICRzZWNvbmRhcnk7XHJcbiAgfVxyXG4gIFxyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDgwcHgpIHtcclxuICAgIC5ub3Rmb3VuZCAubm90Zm91bmQtNDA0IHtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICBoZWlnaHQ6IDE2OHB4O1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLm5vdGZvdW5kIC5ub3Rmb3VuZC00MDQgaDEge1xyXG4gICAgICBmb250LXNpemU6IDE0MnB4O1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLm5vdGZvdW5kIGgyIHtcclxuICAgICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgfVxyXG4gIH1cclxuICAiLCJib2R5IHtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xufVxuXG4jbm90Zm91bmQge1xuICBoZWlnaHQ6IDEwMHZoO1xufVxuXG4jbm90Zm91bmQgLm5vdGZvdW5kIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiA1MCU7XG4gIHRvcDogNTAlO1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xufVxuXG4ubm90Zm91bmQge1xuICBtYXgtd2lkdGg6IDc2N3B4O1xuICB3aWR0aDogMTAwJTtcbiAgbGluZS1oZWlnaHQ6IDEuNDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAxNXB4O1xufVxuXG4ubm90Zm91bmQgLm5vdGZvdW5kLTQwNCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaGVpZ2h0OiAyMjBweDtcbn1cblxuLm5vdGZvdW5kIC5ub3Rmb3VuZC00MDQgaDEge1xuICBmb250LWZhbWlseTogXCJLYW5pdFwiLCBzYW5zLXNlcmlmO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDUwJTtcbiAgdG9wOiA1MCU7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIGZvbnQtc2l6ZTogMTg2cHg7XG4gIGZvbnQtd2VpZ2h0OiAyMDA7XG4gIG1hcmdpbjogMHB4O1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTMwZGVnLCAjMWFiYzljLCAjMmMzZTUwKTtcbiAgY29sb3I6IHRyYW5zcGFyZW50O1xuICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcbiAgYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG4ubm90Zm91bmQgaDIge1xuICBmb250LWZhbWlseTogXCJLYW5pdFwiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDMzcHg7XG4gIGZvbnQtd2VpZ2h0OiAyMDA7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIG1hcmdpbi10b3A6IDBweDtcbiAgbWFyZ2luLWJvdHRvbTogMjVweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDNweDtcbn1cblxuLm5vdGZvdW5kIHAge1xuICBmb250LWZhbWlseTogXCJLYW5pdFwiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiAyMDA7XG4gIG1hcmdpbi10b3A6IDBweDtcbiAgbWFyZ2luLWJvdHRvbTogMjVweDtcbn1cblxuLm5vdGZvdW5kIGEge1xuICBmb250LWZhbWlseTogXCJLYW5pdFwiLCBzYW5zLXNlcmlmO1xuICBjb2xvcjogIzFhYmM5YztcbiAgZm9udC13ZWlnaHQ6IDIwMDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBib3JkZXItYm90dG9tOiAxcHggZGFzaGVkICMxYWJjOWM7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbn1cblxuLm5vdGZvdW5kLXNvY2lhbCA+IGEge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGhlaWdodDogNDBweDtcbiAgbGluZS1oZWlnaHQ6IDQwcHg7XG4gIHdpZHRoOiA0MHB4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiAjMWFiYzljO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZmZmO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIG1hcmdpbjogM3B4O1xuICAtd2Via2l0LXRyYW5zaXRpb246IDAuMnMgYWxsO1xuICB0cmFuc2l0aW9uOiAwLjJzIGFsbDtcbn1cblxuLm5vdGZvdW5kLXNvY2lhbCA+IGE6aG92ZXIge1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFhYmM5YztcbiAgYm9yZGVyLWNvbG9yOiAjMmMzZTUwO1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gIC5ub3Rmb3VuZCAubm90Zm91bmQtNDA0IHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgaGVpZ2h0OiAxNjhweDtcbiAgfVxuXG4gIC5ub3Rmb3VuZCAubm90Zm91bmQtNDA0IGgxIHtcbiAgICBmb250LXNpemU6IDE0MnB4O1xuICB9XG5cbiAgLm5vdGZvdW5kIGgyIHtcbiAgICBmb250LXNpemU6IDIycHg7XG4gIH1cbn0iLCIvLyBTZXQgY3VzdG9tIGNvbG9yc1xyXG4kdGVhbDogIzFhYmM5YyAhZGVmYXVsdDtcclxuJHRlYWwyOiAjYjJmMGUzICFkZWZhdWx0O1xyXG4kdGVhbDM6ICM2ZTlkZTQgIWRlZmF1bHQ7XHJcbiR3aGl0ZTogI2ZmZiAhZGVmYXVsdDtcclxuJGRhcmstYmx1ZTogIzJjM2U1MCAhZGVmYXVsdDtcclxuXHJcbi8vIE92ZXJyaWRlIEJvb3RzdHJhcCBwcmltYXJ5IGFuZCBzZWNvbmRhcnkgY29sb3JzXHJcbiRwcmltYXJ5OiAkdGVhbCAhZGVmYXVsdDtcclxuJHNlY29uZGFyeTogJGRhcmstYmx1ZSAhZGVmYXVsdDtcclxuJGxpZ2h0LXByaW1hcnk6ICR0ZWFsMiAhZGVmYXVsdDtcclxuJGxpZ2h0LXNlY29uZGF5OiAkdGVhbDMgIWRlZmF1bHQ7XHJcblxyXG4vLyBPdmVycmlkZSBCb290c3RyYXAgZm9udCB2YXJpYWJsZXNcclxuJGZvbnQtZmFtaWx5LXNhbnMtc2VyaWY6IFwiTGF0b1wiLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFwiU2Vnb2UgVUlcIiwgUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIEFyaWFsLCBcIk5vdG8gU2Fuc1wiLCBzYW5zLXNlcmlmLCBcIkFwcGxlIENvbG9yIEVtb2ppXCIsIFwiU2Vnb2UgVUkgRW1vamlcIiwgXCJTZWdvZSBVSSBTeW1ib2xcIiwgJ05vdG8gQ29sb3IgRW1vamknICFkZWZhdWx0O1xyXG4kaGVhZGluZ3MtZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFwiU2Vnb2UgVUlcIiwgUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIEFyaWFsLCBcIk5vdG8gU2Fuc1wiLCBzYW5zLXNlcmlmLCBcIkFwcGxlIENvbG9yIEVtb2ppXCIsIFwiU2Vnb2UgVUkgRW1vamlcIiwgXCJTZWdvZSBVSSBTeW1ib2xcIiwgJ05vdG8gQ29sb3IgRW1vamknICFkZWZhdWx0O1xyXG4kaGVhZGluZ3MtZm9udC13ZWlnaHQ6IDEwMDAgIWRlZmF1bHQ7XHJcbiRoZWFkaW5ncy1mb250LXdlaWdodC1iaWdnZXI6IDEyMDAgIWRlZmF1bHQ7XHJcblxyXG4vLyBPdmVycmlkZSBCb290c3RyYXAgYm9yZGVyIHZhcmlhYmxlc1xyXG4kYm9yZGVyLXdpZHRoOiAwLjEyNXJlbSAhZGVmYXVsdDtcclxuJGJvcmRlci1yYWRpdXM6IDAuNXJlbSAhZGVmYXVsdDtcclxuJGJvcmRlci1yYWRpdXMtbGc6IDAuNzVyZW0gIWRlZmF1bHQ7XHJcbiRib3JkZXItcmFkaXVzLXNtOiAwLjI1cmVtICFkZWZhdWx0O1xyXG5cclxuLy8gT3ZlcnJpZGUgQm9vdHN0cmFwIGlucHV0L2J1dHRvbiB2YXJpYWJsZXNcclxuJGlucHV0LWJ0bi1ib3JkZXItd2lkdGg6ICRib3JkZXItd2lkdGggIWRlZmF1bHQ7XHJcblxyXG4vLyBPdmVycmlkZSBCb290c3RyYXAgbW9kYWwgdmFyaWFibGVzXHJcbiRtb2RhbC1pbm5lci1wYWRkaW5nOiA0cmVtIDFyZW0gIWRlZmF1bHQ7XHJcbiRtb2RhbC1jb250ZW50LWJvcmRlci13aWR0aDogMCAhZGVmYXVsdDtcclxuIl19 */"

/***/ }),

/***/ "./src/app/componentes/inicio/inicio.component.ts":
/*!********************************************************!*\
  !*** ./src/app/componentes/inicio/inicio.component.ts ***!
  \********************************************************/
/*! exports provided: InicioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InicioComponent", function() { return InicioComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var InicioComponent = /** @class */ (function () {
    function InicioComponent() {
    }
    InicioComponent.prototype.ngOnInit = function () {
    };
    InicioComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-inicio',
            template: __webpack_require__(/*! raw-loader!./inicio.component.html */ "./node_modules/raw-loader/index.js!./src/app/componentes/inicio/inicio.component.html"),
            styles: [__webpack_require__(/*! ./inicio.component.scss */ "./src/app/componentes/inicio/inicio.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], InicioComponent);
    return InicioComponent;
}());



/***/ }),

/***/ "./src/app/componentes/lista-usuarios/lista-usuarios.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/componentes/lista-usuarios/lista-usuarios.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n  width: 100%;\n}\n\n.mat-form-field {\n  font-size: 14px;\n  width: 100%;\n}\n\n.user-img {\n  width: 28px;\n  height: 28px;\n  margin-right: 10px;\n  border-radius: 50%;\n  box-shadow: 0 0 40px rgba(0, 0, 0, 0.05);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50ZXMvbGlzdGEtdXN1YXJpb3MvRDpcXENhcnBldGFzIFVzdWFyaW9cXEVzY3JpdG9yaW9cXFdvcmtpbmdcXEN1cnNhZGFMYWI0XFxCdWVuYSBTb25yaXNhIC0gVFAyL3NyY1xcYXBwXFxjb21wb25lbnRlc1xcbGlzdGEtdXN1YXJpb3NcXGxpc3RhLXVzdWFyaW9zLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRlcy9saXN0YS11c3Vhcmlvcy9saXN0YS11c3Vhcmlvcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7QUNDSjs7QURFRTtFQUNFLGVBQUE7RUFDQSxXQUFBO0FDQ0o7O0FEQ0U7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSx3Q0FBQTtBQ0VKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50ZXMvbGlzdGEtdXN1YXJpb3MvbGlzdGEtdXN1YXJpb3MuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbiAgXHJcbiAgLm1hdC1mb3JtLWZpZWxkIHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICAudXNlci1pbWcge1xyXG4gICAgd2lkdGg6IDI4cHg7XHJcbiAgICBoZWlnaHQ6IDI4cHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgNDBweCByZ2JhKDAsMCwwLC4wNSk7XHJcbn0iLCJ0YWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ubWF0LWZvcm0tZmllbGQge1xuICBmb250LXNpemU6IDE0cHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4udXNlci1pbWcge1xuICB3aWR0aDogMjhweDtcbiAgaGVpZ2h0OiAyOHB4O1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYm94LXNoYWRvdzogMCAwIDQwcHggcmdiYSgwLCAwLCAwLCAwLjA1KTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/componentes/lista-usuarios/lista-usuarios.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/componentes/lista-usuarios/lista-usuarios.component.ts ***!
  \************************************************************************/
/*! exports provided: ListaUsuariosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListaUsuariosComponent", function() { return ListaUsuariosComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_servicios_DataApi_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/servicios/DataApi.service */ "./src/app/servicios/DataApi.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");




var ListaUsuariosComponent = /** @class */ (function () {
    function ListaUsuariosComponent(dataApi) {
        this.dataApi = dataApi;
        this.displayedColumns = ['Imágen', 'Nombre', 'Email', 'Perfil', 'Activo'];
    }
    ListaUsuariosComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataApi.TraerTodos('usuarios')
            .subscribe(function (users) {
            _this.usuarios = users;
            _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](_this.usuarios);
        });
    };
    ListaUsuariosComponent.prototype.activarDesactivar = function (uid) {
        var usuario = this.usuarios.filter(function (x) { return x.Uid == uid; })[0];
        if (usuario) {
            usuario.Activo = usuario.Activo ? false : true;
            this.dataApi.ModificarUno(usuario, 'usuarios');
            this.usuarios.find(function (x) { return x.Uid == uid; }).Activo = usuario.Activo;
        }
    };
    ListaUsuariosComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    };
    ListaUsuariosComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-lista-usuarios',
            template: __webpack_require__(/*! raw-loader!./lista-usuarios.component.html */ "./node_modules/raw-loader/index.js!./src/app/componentes/lista-usuarios/lista-usuarios.component.html"),
            styles: [__webpack_require__(/*! ./lista-usuarios.component.scss */ "./src/app/componentes/lista-usuarios/lista-usuarios.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_servicios_DataApi_service__WEBPACK_IMPORTED_MODULE_2__["DataApiService"]])
    ], ListaUsuariosComponent);
    return ListaUsuariosComponent;
}());



/***/ }),

/***/ "./src/app/componentes/login/login.component.scss":
/*!********************************************************!*\
  !*** ./src/app/componentes/login/login.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".login-pagina {\n  font-size: 14px;\n  margin-top: 40px;\n  margin-bottom: 80px;\n  text-align: center;\n}\n\n.login-pagina .brand {\n  width: 90px;\n  height: 90px;\n  overflow: hidden;\n  border-radius: 50%;\n  margin: 0 auto;\n  margin: 40px auto;\n  box-shadow: 0 0 40px rgba(0, 0, 0, 0.05);\n}\n\n.login-pagina .brand img {\n  width: 100%;\n}\n\n.login-pagina .card-wrapper {\n  width: 400px;\n}\n\n.login-pagina .card {\n  border-color: transparent;\n  box-shadow: 0 0 40px rgba(0, 0, 0, 0.05);\n}\n\n.login-pagina .card.fat {\n  padding: 10px;\n}\n\n.login-pagina .card .card-title {\n  margin-bottom: 30px;\n}\n\n.login-pagina .form-control {\n  border-width: 2.3px;\n}\n\n.login-pagina .form-group label {\n  width: 100%;\n}\n\n.login-pagina .btn.btn-block {\n  padding: 12px 10px;\n}\n\n.login-pagina .margin-top20 {\n  margin-top: 20px;\n}\n\n.login-pagina .no-margin {\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50ZXMvbG9naW4vRDpcXENhcnBldGFzIFVzdWFyaW9cXEVzY3JpdG9yaW9cXFdvcmtpbmdcXEN1cnNhZGFMYWI0XFxCdWVuYSBTb25yaXNhIC0gVFAyL3NyY1xcYXBwXFxjb21wb25lbnRlc1xcbG9naW5cXGxvZ2luLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRlcy9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUNDRDs7QURFQTtFQUNDLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLHdDQUFBO0FDQ0Q7O0FERUE7RUFDQyxXQUFBO0FDQ0Q7O0FERUE7RUFDQyxZQUFBO0FDQ0Q7O0FERUE7RUFDQyx5QkFBQTtFQUNBLHdDQUFBO0FDQ0Q7O0FERUE7RUFDQyxhQUFBO0FDQ0Q7O0FERUE7RUFDQyxtQkFBQTtBQ0NEOztBREVBO0VBQ0MsbUJBQUE7QUNDRDs7QURFQTtFQUNDLFdBQUE7QUNDRDs7QURFQTtFQUNDLGtCQUFBO0FDQ0Q7O0FERUE7RUFDQyxnQkFBQTtBQ0NEOztBREVBO0VBQ0MsU0FBQTtBQ0NEIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50ZXMvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9naW4tcGFnaW5hIHtcclxuXHRmb250LXNpemU6IDE0cHg7XHJcblx0bWFyZ2luLXRvcDogNDBweDtcclxuXHRtYXJnaW4tYm90dG9tOiA4MHB4O1xyXG5cdHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmxvZ2luLXBhZ2luYSAuYnJhbmQge1xyXG5cdHdpZHRoOiA5MHB4O1xyXG5cdGhlaWdodDogOTBweDtcclxuXHRvdmVyZmxvdzogaGlkZGVuO1xyXG5cdGJvcmRlci1yYWRpdXM6IDUwJTtcclxuXHRtYXJnaW46IDAgYXV0bztcclxuXHRtYXJnaW46IDQwcHggYXV0bztcclxuXHRib3gtc2hhZG93OiAwIDAgNDBweCByZ2JhKDAsMCwwLC4wNSk7XHJcbn1cclxuXHJcbi5sb2dpbi1wYWdpbmEgLmJyYW5kIGltZyB7XHJcblx0d2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5sb2dpbi1wYWdpbmEgLmNhcmQtd3JhcHBlciB7XHJcblx0d2lkdGg6IDQwMHB4O1xyXG59XHJcblxyXG4ubG9naW4tcGFnaW5hIC5jYXJkIHtcclxuXHRib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xyXG5cdGJveC1zaGFkb3c6IDAgMCA0MHB4IHJnYmEoMCwwLDAsLjA1KTtcclxufVxyXG5cclxuLmxvZ2luLXBhZ2luYSAuY2FyZC5mYXQge1xyXG5cdHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuXHJcbi5sb2dpbi1wYWdpbmEgLmNhcmQgLmNhcmQtdGl0bGUge1xyXG5cdG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbn1cclxuXHJcbi5sb2dpbi1wYWdpbmEgLmZvcm0tY29udHJvbCB7XHJcblx0Ym9yZGVyLXdpZHRoOiAyLjNweDtcclxufVxyXG5cclxuLmxvZ2luLXBhZ2luYSAuZm9ybS1ncm91cCBsYWJlbCB7XHJcblx0d2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5sb2dpbi1wYWdpbmEgLmJ0bi5idG4tYmxvY2sge1xyXG5cdHBhZGRpbmc6IDEycHggMTBweDtcclxufVxyXG5cclxuLmxvZ2luLXBhZ2luYSAubWFyZ2luLXRvcDIwIHtcclxuXHRtYXJnaW4tdG9wOiAyMHB4O1xyXG59XHJcblxyXG4ubG9naW4tcGFnaW5hIC5uby1tYXJnaW4ge1xyXG5cdG1hcmdpbjogMDtcclxufSIsIi5sb2dpbi1wYWdpbmEge1xuICBmb250LXNpemU6IDE0cHg7XG4gIG1hcmdpbi10b3A6IDQwcHg7XG4gIG1hcmdpbi1ib3R0b206IDgwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmxvZ2luLXBhZ2luYSAuYnJhbmQge1xuICB3aWR0aDogOTBweDtcbiAgaGVpZ2h0OiA5MHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBtYXJnaW46IDQwcHggYXV0bztcbiAgYm94LXNoYWRvdzogMCAwIDQwcHggcmdiYSgwLCAwLCAwLCAwLjA1KTtcbn1cblxuLmxvZ2luLXBhZ2luYSAuYnJhbmQgaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5sb2dpbi1wYWdpbmEgLmNhcmQtd3JhcHBlciB7XG4gIHdpZHRoOiA0MDBweDtcbn1cblxuLmxvZ2luLXBhZ2luYSAuY2FyZCB7XG4gIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJveC1zaGFkb3c6IDAgMCA0MHB4IHJnYmEoMCwgMCwgMCwgMC4wNSk7XG59XG5cbi5sb2dpbi1wYWdpbmEgLmNhcmQuZmF0IHtcbiAgcGFkZGluZzogMTBweDtcbn1cblxuLmxvZ2luLXBhZ2luYSAuY2FyZCAuY2FyZC10aXRsZSB7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG59XG5cbi5sb2dpbi1wYWdpbmEgLmZvcm0tY29udHJvbCB7XG4gIGJvcmRlci13aWR0aDogMi4zcHg7XG59XG5cbi5sb2dpbi1wYWdpbmEgLmZvcm0tZ3JvdXAgbGFiZWwge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmxvZ2luLXBhZ2luYSAuYnRuLmJ0bi1ibG9jayB7XG4gIHBhZGRpbmc6IDEycHggMTBweDtcbn1cblxuLmxvZ2luLXBhZ2luYSAubWFyZ2luLXRvcDIwIHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cblxuLmxvZ2luLXBhZ2luYSAubm8tbWFyZ2luIHtcbiAgbWFyZ2luOiAwO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/componentes/login/login.component.ts":
/*!******************************************************!*\
  !*** ./src/app/componentes/login/login.component.ts ***!
  \******************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_servicios_Usuario_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/servicios/Usuario.service */ "./src/app/servicios/Usuario.service.ts");
/* harmony import */ var angular2_notifications__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular2-notifications */ "./node_modules/angular2-notifications/angular2-notifications.umd.js");
/* harmony import */ var angular2_notifications__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(angular2_notifications__WEBPACK_IMPORTED_MODULE_4__);





var LoginComponent = /** @class */ (function () {
    function LoginComponent(usuarioService, router, ns) {
        this.usuarioService = usuarioService;
        this.router = router;
        this.ns = ns;
        this.emailModel = "";
        this.passwordModel = "";
    }
    LoginComponent.prototype.ngOnInit = function () { };
    LoginComponent.prototype.Logearse = function () {
        this.usuarioService.LogearUsuario(this.emailModel, this.passwordModel);
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/index.js!./src/app/componentes/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/componentes/login/login.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_servicios_Usuario_service__WEBPACK_IMPORTED_MODULE_3__["UsuarioService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], angular2_notifications__WEBPACK_IMPORTED_MODULE_4__["NotificationsService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/componentes/pie/pie.component.scss":
/*!****************************************************!*\
  !*** ./src/app/componentes/pie/pie.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".footer {\n  padding-top: 5rem;\n  padding-bottom: 5rem;\n  background-color: #2c3e50;\n  color: #fff;\n}\n\n.copyright {\n  background-color: #1a252f;\n}\n\n.btn-social {\n  border-radius: 100%;\n  display: inline-flex;\n  width: 3.25rem;\n  height: 3.25rem;\n  font-size: 1.25rem;\n  justify-content: center;\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50ZXMvcGllL0Q6XFxDYXJwZXRhcyBVc3VhcmlvXFxFc2NyaXRvcmlvXFxXb3JraW5nXFxDdXJzYWRhTGFiNFxcQnVlbmEgU29ucmlzYSAtIFRQMi9zcmNcXGFwcFxcY29tcG9uZW50ZXNcXHBpZVxccGllLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRlcy9waWUvRDpcXENhcnBldGFzIFVzdWFyaW9cXEVzY3JpdG9yaW9cXFdvcmtpbmdcXEN1cnNhZGFMYWI0XFxCdWVuYSBTb25yaXNhIC0gVFAyL3NyY1xcc2Nzc1xcX3ZhcmlhYmxlcy5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRlcy9waWUvcGllLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksaUJBQUE7RUFDQSxvQkFBQTtFQUNBLHlCQUFBO0VBQ0EsV0NGSTtBQ0NSOztBRklBO0VBQ0kseUJBQUE7QUVESjs7QUZJQTtFQUNJLG1CQUFBO0VBQ0Esb0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBRURKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50ZXMvcGllL3BpZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJzcmMvc2Nzcy92YXJpYWJsZXNcIjtcclxuXHJcbi5mb290ZXIge1xyXG4gICAgcGFkZGluZy10b3A6IDVyZW07XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNXJlbTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRzZWNvbmRhcnk7XHJcbiAgICBjb2xvcjogJHdoaXRlO1xyXG59XHJcblxyXG4uY29weXJpZ2h0IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGRhcmtlbigkc2Vjb25kYXJ5LCAxMCUpO1xyXG59XHJcblxyXG4uYnRuLXNvY2lhbCB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgICB3aWR0aDogMy4yNXJlbTtcclxuICAgIGhlaWdodDogMy4yNXJlbTtcclxuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufSIsIi8vIFNldCBjdXN0b20gY29sb3JzXHJcbiR0ZWFsOiAjMWFiYzljICFkZWZhdWx0O1xyXG4kdGVhbDI6ICNiMmYwZTMgIWRlZmF1bHQ7XHJcbiR0ZWFsMzogIzZlOWRlNCAhZGVmYXVsdDtcclxuJHdoaXRlOiAjZmZmICFkZWZhdWx0O1xyXG4kZGFyay1ibHVlOiAjMmMzZTUwICFkZWZhdWx0O1xyXG5cclxuLy8gT3ZlcnJpZGUgQm9vdHN0cmFwIHByaW1hcnkgYW5kIHNlY29uZGFyeSBjb2xvcnNcclxuJHByaW1hcnk6ICR0ZWFsICFkZWZhdWx0O1xyXG4kc2Vjb25kYXJ5OiAkZGFyay1ibHVlICFkZWZhdWx0O1xyXG4kbGlnaHQtcHJpbWFyeTogJHRlYWwyICFkZWZhdWx0O1xyXG4kbGlnaHQtc2Vjb25kYXk6ICR0ZWFsMyAhZGVmYXVsdDtcclxuXHJcbi8vIE92ZXJyaWRlIEJvb3RzdHJhcCBmb250IHZhcmlhYmxlc1xyXG4kZm9udC1mYW1pbHktc2Fucy1zZXJpZjogXCJMYXRvXCIsIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXCJTZWdvZSBVSVwiLCBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgQXJpYWwsIFwiTm90byBTYW5zXCIsIHNhbnMtc2VyaWYsIFwiQXBwbGUgQ29sb3IgRW1vamlcIiwgXCJTZWdvZSBVSSBFbW9qaVwiLCBcIlNlZ29lIFVJIFN5bWJvbFwiLCAnTm90byBDb2xvciBFbW9qaScgIWRlZmF1bHQ7XHJcbiRoZWFkaW5ncy1mb250LWZhbWlseTogXCJNb250c2VycmF0XCIsIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXCJTZWdvZSBVSVwiLCBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgQXJpYWwsIFwiTm90byBTYW5zXCIsIHNhbnMtc2VyaWYsIFwiQXBwbGUgQ29sb3IgRW1vamlcIiwgXCJTZWdvZSBVSSBFbW9qaVwiLCBcIlNlZ29lIFVJIFN5bWJvbFwiLCAnTm90byBDb2xvciBFbW9qaScgIWRlZmF1bHQ7XHJcbiRoZWFkaW5ncy1mb250LXdlaWdodDogMTAwMCAhZGVmYXVsdDtcclxuJGhlYWRpbmdzLWZvbnQtd2VpZ2h0LWJpZ2dlcjogMTIwMCAhZGVmYXVsdDtcclxuXHJcbi8vIE92ZXJyaWRlIEJvb3RzdHJhcCBib3JkZXIgdmFyaWFibGVzXHJcbiRib3JkZXItd2lkdGg6IDAuMTI1cmVtICFkZWZhdWx0O1xyXG4kYm9yZGVyLXJhZGl1czogMC41cmVtICFkZWZhdWx0O1xyXG4kYm9yZGVyLXJhZGl1cy1sZzogMC43NXJlbSAhZGVmYXVsdDtcclxuJGJvcmRlci1yYWRpdXMtc206IDAuMjVyZW0gIWRlZmF1bHQ7XHJcblxyXG4vLyBPdmVycmlkZSBCb290c3RyYXAgaW5wdXQvYnV0dG9uIHZhcmlhYmxlc1xyXG4kaW5wdXQtYnRuLWJvcmRlci13aWR0aDogJGJvcmRlci13aWR0aCAhZGVmYXVsdDtcclxuXHJcbi8vIE92ZXJyaWRlIEJvb3RzdHJhcCBtb2RhbCB2YXJpYWJsZXNcclxuJG1vZGFsLWlubmVyLXBhZGRpbmc6IDRyZW0gMXJlbSAhZGVmYXVsdDtcclxuJG1vZGFsLWNvbnRlbnQtYm9yZGVyLXdpZHRoOiAwICFkZWZhdWx0O1xyXG4iLCIuZm9vdGVyIHtcbiAgcGFkZGluZy10b3A6IDVyZW07XG4gIHBhZGRpbmctYm90dG9tOiA1cmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmMzZTUwO1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLmNvcHlyaWdodCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxYTI1MmY7XG59XG5cbi5idG4tc29jaWFsIHtcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIHdpZHRoOiAzLjI1cmVtO1xuICBoZWlnaHQ6IDMuMjVyZW07XG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59Il19 */"

/***/ }),

/***/ "./src/app/componentes/pie/pie.component.ts":
/*!**************************************************!*\
  !*** ./src/app/componentes/pie/pie.component.ts ***!
  \**************************************************/
/*! exports provided: PieComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PieComponent", function() { return PieComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PieComponent = /** @class */ (function () {
    function PieComponent() {
    }
    PieComponent.prototype.ngOnInit = function () {
    };
    PieComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-pie',
            template: __webpack_require__(/*! raw-loader!./pie.component.html */ "./node_modules/raw-loader/index.js!./src/app/componentes/pie/pie.component.html"),
            styles: [__webpack_require__(/*! ./pie.component.scss */ "./src/app/componentes/pie/pie.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PieComponent);
    return PieComponent;
}());



/***/ }),

/***/ "./src/app/componentes/principal/principal.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/componentes/principal/principal.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudGVzL3ByaW5jaXBhbC9wcmluY2lwYWwuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/componentes/principal/principal.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/componentes/principal/principal.component.ts ***!
  \**************************************************************/
/*! exports provided: PrincipalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrincipalComponent", function() { return PrincipalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PrincipalComponent = /** @class */ (function () {
    function PrincipalComponent() {
    }
    PrincipalComponent.prototype.ngOnInit = function () {
    };
    PrincipalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-principal',
            template: __webpack_require__(/*! raw-loader!./principal.component.html */ "./node_modules/raw-loader/index.js!./src/app/componentes/principal/principal.component.html"),
            styles: [__webpack_require__(/*! ./principal.component.scss */ "./src/app/componentes/principal/principal.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PrincipalComponent);
    return PrincipalComponent;
}());



/***/ }),

/***/ "./src/app/componentes/registro/registro.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/componentes/registro/registro.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".registro-pagina {\n  font-size: 14px;\n  margin-top: 40px;\n  margin-bottom: 80px;\n  text-align: center;\n}\n\n.registro-pagina .brand {\n  width: 90px;\n  height: 90px;\n  overflow: hidden;\n  border-radius: 50%;\n  margin: 0 auto;\n  margin: 40px auto;\n  box-shadow: 0 0 40px rgba(0, 0, 0, 0.05);\n}\n\n.registro-pagina .brand img {\n  width: 100%;\n}\n\n.registro-pagina .card-wrapper {\n  width: 400px;\n}\n\n.registro-pagina .card {\n  border-color: transparent;\n  box-shadow: 0 0 40px rgba(0, 0, 0, 0.05);\n}\n\n.registro-pagina .card.fat {\n  padding: 10px;\n}\n\n.registro-pagina .card .card-title {\n  margin-bottom: 30px;\n}\n\n.registro-pagina .form-control {\n  border-width: 2.3px;\n}\n\n.registro-pagina .form-group label {\n  width: 100%;\n}\n\n.registro-pagina .btn.btn-block {\n  padding: 12px 10px;\n}\n\n.registro-pagina .margin-top20 {\n  margin-top: 20px;\n}\n\n.registro-pagina .no-margin {\n  margin: 0;\n}\n\n.custom-file-input ~ .custom-file-label::after {\n  content: \"Buscar\";\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50ZXMvcmVnaXN0cm8vRDpcXENhcnBldGFzIFVzdWFyaW9cXEVzY3JpdG9yaW9cXFdvcmtpbmdcXEN1cnNhZGFMYWI0XFxCdWVuYSBTb25yaXNhIC0gVFAyL3NyY1xcYXBwXFxjb21wb25lbnRlc1xccmVnaXN0cm9cXHJlZ2lzdHJvLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRlcy9yZWdpc3Ryby9yZWdpc3Ryby5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUNDRDs7QURFQTtFQUNDLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLHdDQUFBO0FDQ0Q7O0FERUE7RUFDQyxXQUFBO0FDQ0Q7O0FERUE7RUFDQyxZQUFBO0FDQ0Q7O0FERUE7RUFDQyx5QkFBQTtFQUNBLHdDQUFBO0FDQ0Q7O0FERUE7RUFDQyxhQUFBO0FDQ0Q7O0FERUE7RUFDQyxtQkFBQTtBQ0NEOztBREVBO0VBQ0MsbUJBQUE7QUNDRDs7QURFQTtFQUNDLFdBQUE7QUNDRDs7QURFQTtFQUNDLGtCQUFBO0FDQ0Q7O0FERUE7RUFDQyxnQkFBQTtBQ0NEOztBREVBO0VBQ0MsU0FBQTtBQ0NEOztBREVBO0VBQ0ksaUJBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudGVzL3JlZ2lzdHJvL3JlZ2lzdHJvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJlZ2lzdHJvLXBhZ2luYSB7XHJcblx0Zm9udC1zaXplOiAxNHB4O1xyXG5cdG1hcmdpbi10b3A6IDQwcHg7XHJcblx0bWFyZ2luLWJvdHRvbTogODBweDtcclxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5yZWdpc3Ryby1wYWdpbmEgLmJyYW5kIHtcclxuXHR3aWR0aDogOTBweDtcclxuXHRoZWlnaHQ6IDkwcHg7XHJcblx0b3ZlcmZsb3c6IGhpZGRlbjtcclxuXHRib3JkZXItcmFkaXVzOiA1MCU7XHJcblx0bWFyZ2luOiAwIGF1dG87XHJcblx0bWFyZ2luOiA0MHB4IGF1dG87XHJcblx0Ym94LXNoYWRvdzogMCAwIDQwcHggcmdiYSgwLDAsMCwuMDUpO1xyXG59XHJcblxyXG4ucmVnaXN0cm8tcGFnaW5hIC5icmFuZCBpbWcge1xyXG5cdHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4ucmVnaXN0cm8tcGFnaW5hIC5jYXJkLXdyYXBwZXIge1xyXG5cdHdpZHRoOiA0MDBweDtcclxufVxyXG5cclxuLnJlZ2lzdHJvLXBhZ2luYSAuY2FyZCB7XHJcblx0Ym9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuXHRib3gtc2hhZG93OiAwIDAgNDBweCByZ2JhKDAsMCwwLC4wNSk7XHJcbn1cclxuXHJcbi5yZWdpc3Ryby1wYWdpbmEgLmNhcmQuZmF0IHtcclxuXHRwYWRkaW5nOiAxMHB4O1xyXG59XHJcblxyXG4ucmVnaXN0cm8tcGFnaW5hIC5jYXJkIC5jYXJkLXRpdGxlIHtcclxuXHRtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG59XHJcblxyXG4ucmVnaXN0cm8tcGFnaW5hIC5mb3JtLWNvbnRyb2wge1xyXG5cdGJvcmRlci13aWR0aDogMi4zcHg7XHJcbn1cclxuXHJcbi5yZWdpc3Ryby1wYWdpbmEgLmZvcm0tZ3JvdXAgbGFiZWwge1xyXG5cdHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4ucmVnaXN0cm8tcGFnaW5hIC5idG4uYnRuLWJsb2NrIHtcclxuXHRwYWRkaW5nOiAxMnB4IDEwcHg7XHJcbn1cclxuXHJcbi5yZWdpc3Ryby1wYWdpbmEgLm1hcmdpbi10b3AyMCB7XHJcblx0bWFyZ2luLXRvcDogMjBweDtcclxufVxyXG5cclxuLnJlZ2lzdHJvLXBhZ2luYSAubm8tbWFyZ2luIHtcclxuXHRtYXJnaW46IDA7XHJcbn1cclxuXHJcbi5jdXN0b20tZmlsZS1pbnB1dCB+IC5jdXN0b20tZmlsZS1sYWJlbDo6YWZ0ZXIge1xyXG4gICAgY29udGVudDogXCJCdXNjYXJcIjtcclxufSIsIi5yZWdpc3Ryby1wYWdpbmEge1xuICBmb250LXNpemU6IDE0cHg7XG4gIG1hcmdpbi10b3A6IDQwcHg7XG4gIG1hcmdpbi1ib3R0b206IDgwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnJlZ2lzdHJvLXBhZ2luYSAuYnJhbmQge1xuICB3aWR0aDogOTBweDtcbiAgaGVpZ2h0OiA5MHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBtYXJnaW46IDQwcHggYXV0bztcbiAgYm94LXNoYWRvdzogMCAwIDQwcHggcmdiYSgwLCAwLCAwLCAwLjA1KTtcbn1cblxuLnJlZ2lzdHJvLXBhZ2luYSAuYnJhbmQgaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5yZWdpc3Ryby1wYWdpbmEgLmNhcmQtd3JhcHBlciB7XG4gIHdpZHRoOiA0MDBweDtcbn1cblxuLnJlZ2lzdHJvLXBhZ2luYSAuY2FyZCB7XG4gIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJveC1zaGFkb3c6IDAgMCA0MHB4IHJnYmEoMCwgMCwgMCwgMC4wNSk7XG59XG5cbi5yZWdpc3Ryby1wYWdpbmEgLmNhcmQuZmF0IHtcbiAgcGFkZGluZzogMTBweDtcbn1cblxuLnJlZ2lzdHJvLXBhZ2luYSAuY2FyZCAuY2FyZC10aXRsZSB7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG59XG5cbi5yZWdpc3Ryby1wYWdpbmEgLmZvcm0tY29udHJvbCB7XG4gIGJvcmRlci13aWR0aDogMi4zcHg7XG59XG5cbi5yZWdpc3Ryby1wYWdpbmEgLmZvcm0tZ3JvdXAgbGFiZWwge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnJlZ2lzdHJvLXBhZ2luYSAuYnRuLmJ0bi1ibG9jayB7XG4gIHBhZGRpbmc6IDEycHggMTBweDtcbn1cblxuLnJlZ2lzdHJvLXBhZ2luYSAubWFyZ2luLXRvcDIwIHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cblxuLnJlZ2lzdHJvLXBhZ2luYSAubm8tbWFyZ2luIHtcbiAgbWFyZ2luOiAwO1xufVxuXG4uY3VzdG9tLWZpbGUtaW5wdXQgfiAuY3VzdG9tLWZpbGUtbGFiZWw6OmFmdGVyIHtcbiAgY29udGVudDogXCJCdXNjYXJcIjtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/componentes/registro/registro.component.ts":
/*!************************************************************!*\
  !*** ./src/app/componentes/registro/registro.component.ts ***!
  \************************************************************/
/*! exports provided: RegistroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistroComponent", function() { return RegistroComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/storage/index.js");
/* harmony import */ var src_app_servicios_Usuario_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/servicios/Usuario.service */ "./src/app/servicios/Usuario.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var src_app_clases_Usuario__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/clases/Usuario */ "./src/app/clases/Usuario.ts");







var RegistroComponent = /** @class */ (function () {
    function RegistroComponent(usuarioService, storage) {
        this.usuarioService = usuarioService;
        this.storage = storage;
        this.noCargando = true;
        this.imgName = "Seleccionar imágen..";
        this.usuario = this.usuarioService.UsuarioVacio();
    }
    RegistroComponent.prototype.ngOnInit = function () { };
    RegistroComponent.prototype.Registrarse = function () {
        this.usuario.Perfil = src_app_clases_Usuario__WEBPACK_IMPORTED_MODULE_6__["Perfil"][document.getElementById("perfil").value];
        this.usuario.Email = this.emailModel;
        this.usuario.Nombre = this.nombreModel;
        this.usuario.Password = this.passwordModel;
        this.usuario.ImagenUrl = this.InputImagenUser.nativeElement.value;
        if (!this.usuario.ImagenUrl) {
            this.usuario.ImagenUrl = "assets/img/default-user.png";
        }
        this.usuarioService.RegistrarUsuario(this.usuario);
    };
    RegistroComponent.prototype.ImagenCargada = function (e) {
        var _this = this;
        this.noCargando = false;
        var img = e.target.files[0];
        if (img != undefined) {
            this.imgName = img.name;
            var nombreImg = img.name.substr(0, img.name.lastIndexOf('.'));
            var ext = img.name.substr(img.name.lastIndexOf('.') + 1);
            var filePath = "imagenes/usuarios/" + nombreImg + "-" + Date.now() + "." + ext;
            var ref_1 = this.storage.ref(filePath);
            var task = this.storage.upload(filePath, img);
            this.porcentajeUpload = task.percentageChanges();
            task.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["finalize"])(function () { return _this.urlImagen = ref_1.getDownloadURL(); })).subscribe();
        }
        else {
            this.imgName = "Seleccionar imágen..";
            this.urlImagen = Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["empty"])();
            this.noCargando = true;
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("imgUsuario", { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], RegistroComponent.prototype, "InputImagenUser", void 0);
    RegistroComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-registro',
            template: __webpack_require__(/*! raw-loader!./registro.component.html */ "./node_modules/raw-loader/index.js!./src/app/componentes/registro/registro.component.html"),
            styles: [__webpack_require__(/*! ./registro.component.scss */ "./src/app/componentes/registro/registro.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_servicios_Usuario_service__WEBPACK_IMPORTED_MODULE_3__["UsuarioService"], _angular_fire_storage__WEBPACK_IMPORTED_MODULE_2__["AngularFireStorage"]])
    ], RegistroComponent);
    return RegistroComponent;
}());



/***/ }),

/***/ "./src/app/componentes/turno-creacion/turno-creacion.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/componentes/turno-creacion/turno-creacion.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudGVzL3R1cm5vLWNyZWFjaW9uL3R1cm5vLWNyZWFjaW9uLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/componentes/turno-creacion/turno-creacion.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/componentes/turno-creacion/turno-creacion.component.ts ***!
  \************************************************************************/
/*! exports provided: TurnoCreacionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TurnoCreacionComponent", function() { return TurnoCreacionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_clases_Usuario__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/clases/Usuario */ "./src/app/clases/Usuario.ts");
/* harmony import */ var src_app_servicios_DataApi_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/servicios/DataApi.service */ "./src/app/servicios/DataApi.service.ts");
/* harmony import */ var src_app_clases_Turno__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/clases/Turno */ "./src/app/clases/Turno.ts");
/* harmony import */ var src_app_servicios_Usuario_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/servicios/Usuario.service */ "./src/app/servicios/Usuario.service.ts");







var TurnoCreacionComponent = /** @class */ (function () {
    function TurnoCreacionComponent(fb, dataApi, usuarioService) {
        this.fb = fb;
        this.dataApi = dataApi;
        this.usuarioService = usuarioService;
        this.minDate = new Date(Date.now());
        this.mostrar = true;
    }
    TurnoCreacionComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.especialistas = [];
        this.formTurnos = this.fb.group({
            fecha: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            especialista: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
        this.dataApi.TraerTodos('usuarios').subscribe(function (usuarios) {
            _this.especialistas = usuarios.filter(function (x) { return x.Perfil == src_app_clases_Usuario__WEBPACK_IMPORTED_MODULE_3__["Perfil"].Especialista && x.Activo; });
        });
    };
    Object.defineProperty(TurnoCreacionComponent.prototype, "fecha", {
        get: function () {
            return this.formTurnos.get('fecha');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TurnoCreacionComponent.prototype, "especialista", {
        get: function () {
            return this.formTurnos.get('especialista');
        },
        enumerable: true,
        configurable: true
    });
    TurnoCreacionComponent.prototype.CrearTurno = function () {
        var especialista = this.formTurnos.get('especialista').value;
        var turno = {
            UidCliente: this.usuarioService.usuario.Uid,
            NombreCliente: this.usuarioService.usuario.Nombre,
            UidEspecialista: especialista.Uid,
            NombreEspecialista: especialista.Nombre,
            Fecha: this.formTurnos.get('fecha').value,
            Estado: src_app_clases_Turno__WEBPACK_IMPORTED_MODULE_5__["EstadoTurno"].Pendiente
        };
        this.dataApi.AgregarUno(turno, 'turnos');
    };
    TurnoCreacionComponent.prototype.TraerEspecialistasPorFecha = function () {
    };
    TurnoCreacionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-turno-creacion',
            template: __webpack_require__(/*! raw-loader!./turno-creacion.component.html */ "./node_modules/raw-loader/index.js!./src/app/componentes/turno-creacion/turno-creacion.component.html"),
            styles: [__webpack_require__(/*! ./turno-creacion.component.scss */ "./src/app/componentes/turno-creacion/turno-creacion.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], src_app_servicios_DataApi_service__WEBPACK_IMPORTED_MODULE_4__["DataApiService"], src_app_servicios_Usuario_service__WEBPACK_IMPORTED_MODULE_6__["UsuarioService"]])
    ], TurnoCreacionComponent);
    return TurnoCreacionComponent;
}());



/***/ }),

/***/ "./src/app/componentes/turno-lista/turno-lista.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/componentes/turno-lista/turno-lista.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n  width: 100%;\n}\n\n.no-resultados {\n  height: 48px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50ZXMvdHVybm8tbGlzdGEvRDpcXENhcnBldGFzIFVzdWFyaW9cXEVzY3JpdG9yaW9cXFdvcmtpbmdcXEN1cnNhZGFMYWI0XFxCdWVuYSBTb25yaXNhIC0gVFAyL3NyY1xcYXBwXFxjb21wb25lbnRlc1xcdHVybm8tbGlzdGFcXHR1cm5vLWxpc3RhLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRlcy90dXJuby1saXN0YS90dXJuby1saXN0YS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7QUNDSjs7QURFRTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGlCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRlcy90dXJuby1saXN0YS90dXJuby1saXN0YS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgLm5vLXJlc3VsdGFkb3Mge1xyXG4gICAgaGVpZ2h0OiA0OHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIH0iLCJ0YWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ubm8tcmVzdWx0YWRvcyB7XG4gIGhlaWdodDogNDhweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/componentes/turno-lista/turno-lista.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/componentes/turno-lista/turno-lista.component.ts ***!
  \******************************************************************/
/*! exports provided: TurnoListaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TurnoListaComponent", function() { return TurnoListaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_servicios_DataApi_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/servicios/DataApi.service */ "./src/app/servicios/DataApi.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var src_app_servicios_Usuario_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/servicios/Usuario.service */ "./src/app/servicios/Usuario.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");






var TurnoListaComponent = /** @class */ (function () {
    function TurnoListaComponent(dataApi, usuarioService) {
        this.dataApi = dataApi;
        this.usuarioService = usuarioService;
        this.displayedColumns = ['NombreEspecialista', 'Fecha', 'Estado'];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](this.turnos);
        this.noData = this.dataSource.connect().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (data) { return data.length === 0; }));
    }
    TurnoListaComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataApi.TraerTodos('turnos')
            .subscribe(function (turnos) {
            _this.turnos = turnos.filter(function (x) { return x.UidCliente == _this.usuarioService.usuario.Uid; });
            _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](_this.turnos);
            _this.noData = _this.dataSource.connect().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (data) { return data.length === 0; }));
        });
    };
    TurnoListaComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    };
    TurnoListaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-turno-lista',
            template: __webpack_require__(/*! raw-loader!./turno-lista.component.html */ "./node_modules/raw-loader/index.js!./src/app/componentes/turno-lista/turno-lista.component.html"),
            styles: [__webpack_require__(/*! ./turno-lista.component.scss */ "./src/app/componentes/turno-lista/turno-lista.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_servicios_DataApi_service__WEBPACK_IMPORTED_MODULE_2__["DataApiService"], src_app_servicios_Usuario_service__WEBPACK_IMPORTED_MODULE_4__["UsuarioService"]])
    ], TurnoListaComponent);
    return TurnoListaComponent;
}());



/***/ }),

/***/ "./src/app/componentes/turno/turno.component.scss":
/*!********************************************************!*\
  !*** ./src/app/componentes/turno/turno.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudGVzL3R1cm5vL3R1cm5vLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/componentes/turno/turno.component.ts":
/*!******************************************************!*\
  !*** ./src/app/componentes/turno/turno.component.ts ***!
  \******************************************************/
/*! exports provided: TurnoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TurnoComponent", function() { return TurnoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TurnoComponent = /** @class */ (function () {
    function TurnoComponent() {
    }
    TurnoComponent.prototype.ngOnInit = function () {
    };
    TurnoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-turno',
            template: __webpack_require__(/*! raw-loader!./turno.component.html */ "./node_modules/raw-loader/index.js!./src/app/componentes/turno/turno.component.html"),
            styles: [__webpack_require__(/*! ./turno.component.scss */ "./src/app/componentes/turno/turno.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TurnoComponent);
    return TurnoComponent;
}());



/***/ }),

/***/ "./src/app/material/material.module.ts":
/*!*********************************************!*\
  !*** ./src/app/material/material.module.ts ***!
  \*********************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");




var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatNativeDateModule"]
            ],
            exports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatNativeDateModule"]
            ],
            providers: [
                { provide: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DATE_LOCALE"], useValue: 'es-ve' }
            ]
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "./src/app/servicios/AuthGuard.service.ts":
/*!************************************************!*\
  !*** ./src/app/servicios/AuthGuard.service.ts ***!
  \************************************************/
/*! exports provided: AuthGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuardService", function() { return AuthGuardService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _Usuario_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Usuario.service */ "./src/app/servicios/Usuario.service.ts");
/* harmony import */ var _clases_Usuario__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../clases/Usuario */ "./src/app/clases/Usuario.ts");





var AuthGuardService = /** @class */ (function () {
    function AuthGuardService(usuarioService, router) {
        this.usuarioService = usuarioService;
        this.router = router;
    }
    AuthGuardService.prototype.canActivate = function (route, state) {
        var url = state.url;
        var logeado = this.usuarioService.isUserLoggedIn();
        if (url == '/logearse' || url == '/registrarse') {
            if (!logeado)
                return true;
            else
                return false;
        }
        if (logeado) {
            if (url == '/administracion') {
                if (this.usuarioService.usuario.Perfil == _clases_Usuario__WEBPACK_IMPORTED_MODULE_4__["Perfil"].Administrador) {
                    return true;
                }
            }
            if (url == '/turnos') {
                if (this.usuarioService.usuario.Perfil != _clases_Usuario__WEBPACK_IMPORTED_MODULE_4__["Perfil"].Administrador) {
                    return true;
                }
            }
        }
        this.router.navigate([this.usuarioService.getInicioUrl()]);
        return false;
    };
    AuthGuardService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_Usuario_service__WEBPACK_IMPORTED_MODULE_3__["UsuarioService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthGuardService);
    return AuthGuardService;
}());



/***/ }),

/***/ "./src/app/servicios/DataApi.service.ts":
/*!**********************************************!*\
  !*** ./src/app/servicios/DataApi.service.ts ***!
  \**********************************************/
/*! exports provided: DataApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataApiService", function() { return DataApiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");




var DataApiService = /** @class */ (function () {
    function DataApiService(afs) {
        this.afs = afs;
        this.selectedObjeto = {
            id: null
        };
    }
    DataApiService.prototype.TraerTodos = function (dataNombre) {
        this.objetosCollection = this.afs.collection(dataNombre);
        return this.objetos = this.objetosCollection.snapshotChanges()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (changes) {
            return changes.map(function (action) {
                var data = action.payload.doc.data();
                data.id = action.payload.doc.id;
                return data;
            });
        }));
    };
    // getAllBooksOffers(dataNombre: string) {
    //     this.objetosCollection = this.afs.collection(dataNombre, ref => ref.where('Perfil', '==', 'Administrador'));
    //     return this.objetos = this.objetosCollection.snapshotChanges()
    //         .pipe(map(changes => {
    //             return changes.map(action => {
    //                 const data = action.payload.doc.data() as any;
    //                 data.id = action.payload.doc.id;
    //                 return data;
    //             });
    //         }));
    // }
    DataApiService.prototype.TraerUno = function (id, dataNombre) {
        this.objetoDoc = this.afs.doc(dataNombre + "/" + id);
        return this.objeto = this.objetoDoc.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (action) {
            if (action.payload.exists === false) {
                return null;
            }
            else {
                var data = action.payload.data();
                data.id = action.payload.id;
                return data;
            }
        }));
    };
    DataApiService.prototype.AgregarUno = function (objeto, dataNombre) {
        // this.objetosCollection.add(objeto);
        this.afs.collection(dataNombre).add(objeto);
        // .doc().set(objeto);
    };
    DataApiService.prototype.ModificarUno = function (objeto, dataNombre) {
        var id = objeto.id;
        this.objetoDoc = this.afs.doc(dataNombre + "/" + id);
        this.objetoDoc.update(objeto);
    };
    DataApiService.prototype.BorrarUno = function (id, dataNombre) {
        this.objetoDoc = this.afs.doc(dataNombre + "/" + id);
        this.objetoDoc.delete();
    };
    DataApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]])
    ], DataApiService);
    return DataApiService;
}());



/***/ }),

/***/ "./src/app/servicios/Usuario.service.ts":
/*!**********************************************!*\
  !*** ./src/app/servicios/Usuario.service.ts ***!
  \**********************************************/
/*! exports provided: UsuarioService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsuarioService", function() { return UsuarioService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _clases_Usuario__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../clases/Usuario */ "./src/app/clases/Usuario.ts");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var angular2_notifications__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angular2-notifications */ "./node_modules/angular2-notifications/angular2-notifications.umd.js");
/* harmony import */ var angular2_notifications__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(angular2_notifications__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _DataApi_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./DataApi.service */ "./src/app/servicios/DataApi.service.ts");









var UsuarioService = /** @class */ (function () {
    function UsuarioService(afsAuth, db, router, ns, dataApi) {
        this.afsAuth = afsAuth;
        this.db = db;
        this.router = router;
        this.ns = ns;
        this.dataApi = dataApi;
        this.redirectUrl = '/';
        this.loginUrl = '/logearse';
        this.incioUrl = '';
        this.usuario = this.UsuarioVacio();
    }
    UsuarioService.prototype.RegistrarUsuario = function (usuario) {
        var _this = this;
        return new Promise(function () {
            _this.afsAuth.auth.createUserWithEmailAndPassword(usuario.Email, usuario.Password)
                .then(function (userData) {
                return userData.user.updateProfile({
                    displayName: usuario.Nombre,
                    photoURL: usuario.ImagenUrl
                });
            }, function (err) {
                console.log(err);
                _this.UsuarioVacio();
                _this.ns.error("Error al registrarse", "Sucedió un error al registrarse, intente nuevamente.");
            })
                .then(function () {
                _this.EstaLogeado().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1)).subscribe(function (userData) {
                    if (userData) {
                        usuario.Password = '';
                        usuario.Uid = userData.uid;
                        usuario.Email = userData.email;
                        usuario.ImagenUrl = userData.photoURL;
                        usuario.Nombre = userData.displayName;
                        usuario.Perfil = usuario.Perfil;
                        usuario.Activo = false;
                        _this.ns.success("Registro exitoso", "Espere a la activación del administrador.");
                        _this.router.navigate(['']);
                        _this.db.collection('usuarios').doc(userData.uid).set(usuario).then(function () {
                            _this.DeslogearUsuario();
                        });
                    }
                    else {
                        _this.UsuarioVacio();
                    }
                }, function (err) {
                    console.log(err);
                    _this.UsuarioVacio();
                    _this.ns.error("Error inesperado", "Sucedió un error inesperado.");
                });
            });
        });
    };
    UsuarioService.prototype.LogearUsuario = function (email, password) {
        var _this = this;
        return new Promise(function () {
            _this.afsAuth.auth.signInWithEmailAndPassword(email, password)
                .then(function (userData) {
                if (userData) {
                    _this.dataApi.TraerUno(userData.user.uid, 'usuarios').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1)).subscribe(function (userx) {
                        if (!userx.Activo) {
                            _this.ns.warn("No se pudo logear", "La cuenta es todavía no fue activada por el administrador.");
                            _this.DeslogearUsuario();
                        }
                        else {
                            _this.usuario.Uid = userx.Uid;
                            _this.usuario.Email = userx.Email;
                            _this.usuario.ImagenUrl = userx.ImagenUrl;
                            _this.usuario.Nombre = userx.Nombre;
                            _this.usuario.Perfil = userx.Perfil;
                            _this.ns.success("Logeo exitoso!");
                            _this.router.navigate(['']);
                        }
                    });
                }
                else {
                    _this.usuario = _this.UsuarioVacio();
                }
            }, function (err) {
                console.log(err);
                _this.usuario = _this.UsuarioVacio();
                _this.ns.error("Error al logearse", "La cuenta es inexistente.");
            });
        });
    };
    UsuarioService.prototype.DeslogearUsuario = function () {
        this.usuario = this.UsuarioVacio();
        this.afsAuth.auth.signOut();
    };
    UsuarioService.prototype.EstaLogeado = function () {
        return this.afsAuth.authState.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (auth) { return auth; }));
    };
    UsuarioService.prototype.UsuarioVacio = function () {
        return {
            Uid: '',
            Nombre: '',
            Email: '',
            Password: '',
            ImagenUrl: "",
            Activo: false,
            Perfil: _clases_Usuario__WEBPACK_IMPORTED_MODULE_5__["Perfil"].Cliente
        };
    };
    UsuarioService.prototype.isUserLoggedIn = function () {
        return this.estaLogeado;
    };
    UsuarioService.prototype.setRedirectUrl = function (url) {
        this.redirectUrl = url;
    };
    UsuarioService.prototype.getLoginUrl = function () {
        return this.loginUrl;
    };
    UsuarioService.prototype.getInicioUrl = function () {
        return this.incioUrl;
    };
    UsuarioService.prototype.EstadoLogeo = function () {
        var _this = this;
        this.afsAuth.auth.onAuthStateChanged(function (user) {
            if (user) {
                _this.dataApi.TraerUno(user.uid, 'usuarios').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1)).subscribe(function (userx) {
                    _this.usuario = userx;
                });
                _this.estaLogeado = true;
            }
            else
                _this.estaLogeado = false;
        }, function () {
            _this.estaLogeado = false;
        });
    };
    UsuarioService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__["AngularFirestore"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], angular2_notifications__WEBPACK_IMPORTED_MODULE_7__["NotificationsService"], _DataApi_service__WEBPACK_IMPORTED_MODULE_8__["DataApiService"]])
    ], UsuarioService);
    return UsuarioService;
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
    production: false,
    firebaseConfig: {
        apiKey: "AIzaSyAotOA6qP9XxRMDOwioZfjSoNtgqrU5vcM",
        authDomain: "buena-sonrisa.firebaseapp.com",
        databaseURL: "https://buena-sonrisa.firebaseio.com",
        projectId: "buena-sonrisa",
        storageBucket: "buena-sonrisa.appspot.com",
        messagingSenderId: "543361849917",
        appId: "1:543361849917:web:efb825433ec8329c"
    }
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

module.exports = __webpack_require__(/*! D:\Carpetas Usuario\Escritorio\Working\CursadaLab4\Buena Sonrisa - TP2\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map