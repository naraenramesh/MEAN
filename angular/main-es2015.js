(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"cl\">\n<app-header></app-header>\n\n      <router-outlet></router-outlet>\n  </div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/associates/associates-detail/associates-detail.component.html":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/associates/associates-detail/associates-detail.component.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"aname\">\n    <mat-card class=\"example-card\">\n        <mat-card-header>\n         <mat-card-title> {{SelectedAssociate.empname}} </mat-card-title>\n\n\n              <button  [disabled]=\"!edit_trigger\" (click)=\"OneditAssociate()\" mat-mini-fab color=\"white\" aria-label=\"Example icon button with a plus one icon\">\n                <mat-icon>edit</mat-icon>\n              </button>\n              <button  [disabled]=\"!edit_trigger\" (click)=\"OndeleteAssociate()\" mat-mini-fab color=\"white\" aria-label=\"Example icon button with a plus one icon\">\n                <mat-icon>delete</mat-icon>\n              </button>\n\n      </mat-card-header>\n        <mat-card-content>\n              <ul>\n                  <li> <p class=\"empsideheading\">Cognizant Email ID:</p> <div class=\"cont\">{{SelectedAssociate.empcogemailid}}</div></li>\n            <li> <p class=\"empsideheading\">Contact Number:</p><div class=\"cont\">{{SelectedAssociate.empcontactno}}</div></li>\n            <li> <p class=\"empsideheading\">BT Email ID:</p><div class=\"cont\">{{SelectedAssociate.empBTemailid}}</div></li>\n             <li> <p class=\"empsideheading\">BT UIN:</p><div class=\"cont\">{{SelectedAssociate.empUIN}}</div></li>\n             <li> <p class=\"empsideheading\">Working for:</p><div class=\"cont\">{{SelectedAssociate.empTeams}}</div></li>\n            </ul>\n\n        </mat-card-content>\n      </mat-card>\n\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/associates/associates-edit/associates-edit.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/associates/associates-edit/associates-edit.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1 mat-dialog-title *ngIf=\"edit_trigger\"> Edit the existing Associate:</h1>\n<h1 mat-dialog-title *ngIf=\"!edit_trigger\"> Add a new associate:</h1>\n\n<mat-dialog-content>\n  <form class=\"example-form\" [formGroup]=\"associateForm\" (ngSubmit)=\"OnSubmit()\">\n  \n    <table class=\"example-full-width\" cellspacing=\"0\"><tr>\n      <td><mat-form-field class=\"example-full-width\">\n        <mat-label >Associate Name</mat-label>\n        <input id=\"empname\" formControlName=\"empname\" matInput>\n      </mat-form-field></td>\n      <td><mat-form-field class=\"example-full-width\">\n        <mat-label>Associate Cog EmailID</mat-label>\n        <input id=\"empcogemailid\" formControlName=\"empcogemailid\" matInput>\n      </mat-form-field></td>\n    </tr></table>\n  \n    <p>\n        \n\t  <mat-form-field class=\"example-full-width\">\n        <mat-label>Associate BT EmailID</mat-label>\n        <input id=\"empBTemailid\" formControlName=\"empBTemailid\" matInput>\n      </mat-form-field>\n      <mat-form-field class=\"example-full-width\">\n        <mat-label>Associate Contact number</mat-label>\n        <textarea id=\"empcontactno\" formControlName=\"empcontactno\" matInput>    </textarea>\n    </mat-form-field>\n    </p>\n  \n    <table class=\"example-full-width\" cellspacing=\"0\"><tr>\n      <td><mat-form-field class=\"example-full-width\">\n        <mat-label>Associate UIN</mat-label>\n        <input id=\"empUIN\" formControlName=\"empUIN\" matInput placeholder=\"Mention BT EIN\">\n      </mat-form-field></td>\n  </tr></table>\n\n  <mat-form-field class=\"example-chip-list\">\n    <mat-chip-list #chipList aria-label=\"team selection\">\n      <mat-chip\n        *ngFor=\"let team of teams\"\n        [selectable]=\"selectable\"\n        [removable]=\"removable\"\n        (removed)=\"remove(team)\">\n        {{team}}\n        <mat-icon matChipRemove *ngIf=\"removable\">cancel</mat-icon>\n      </mat-chip>\n      <input formControlName=\"empTeams\" \n        placeholder=\"Select the teams...\"\n        #teamInput id=\"empTeams\"\n        [formControl]=\"teamCtrl\"\n        [matAutocomplete]=\"auto\"\n        [matChipInputFor]=\"chipList\"\n        [matChipInputSeparatorKeyCodes]=\"separatorKeysCodes\"\n        (matChipInputTokenEnd)=\"add($event)\">\n    </mat-chip-list>\n    <mat-autocomplete #auto=\"matAutocomplete\" (optionSelected)=\"selected($event)\">\n      <mat-option *ngFor=\"let team of filteredOptions | async\" [value]=\"team\">\n        {{team}}\n      </mat-option>\n    </mat-autocomplete>\n  </mat-form-field>\n\n  <mat-dialog-actions align=\"end\">\n    <button mat-button mat-dialog-close>Cancel</button>\n    <button mat-button [mat-dialog-close]=\"true\" \n     type=\"submit\" [disabled]=\"!associateForm.valid\">Update</button>\n  </mat-dialog-actions>\n\n</form>\n\n</mat-dialog-content>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/associates/associates-list/associates-list.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/associates/associates-list/associates-list.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("    <form class=\"team-form\">\n        <mat-form-field class=\"example-full-width\">\n          <mat-label>Select an associate</mat-label>\n          <input type=\"text\"\n                 aria-label=\"Number\"\n                 matInput\n                 [formControl]=\"myControl\"\n                 [matAutocomplete]=\"auto\" >\n          <mat-autocomplete\n          (optionSelected)=\"Onselect($event)\" autoActiveFirstOption #auto=\"matAutocomplete\">\n        <mat-option\n        *ngFor=\"let associate of filteredOptions| async\" [value]=\"associate\" >\n              {{associate}}\n            </mat-option>\n          </mat-autocomplete>\n        </mat-form-field>\n\n\n\n      <button class=\"teamselectbtn\" [disabled]=\"!add_trigger\" mat-mini-fab color=\"white\" (click)=\"OnaddnewAssociate()\">\n        <mat-icon>plus_one</mat-icon>\n      </button>\n\n      </form>\n\n\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/associates/associates.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/associates/associates.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\n\n \n    <app-associates-list></app-associates-list>\n\n</div>\n    <div class=\"row\">\n        <router-outlet></router-outlet>\n    \n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/authentication/authentication.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/authentication/authentication.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<div class=\"login-box\">\n<mat-card class=\"example-card\">\n    <mat-card-header>\n      <div mat-card-avatar class=\"example-header-image\"></div>\n      <mat-card-title>Get Started</mat-card-title>\n\n    </mat-card-header>\n\n    <div *ngIf=\"isLoading\" style=\"text-align: center;\">\n      <app-loading></app-loading>\n    </div>\n    <form #authForm=\"ngForm\" (ngSubmit)=\"onSubmit(authForm)\" *ngIf=\"!isLoading\">\n      <div class=\"form-group\">\n\t  <mat-form-field>\n         <mat-label>E-Mail</mat-label>\n        <input matInput\n          type=\"email\"\n          id=\"email\"\n\n          ngModel\n          name=\"email\"\n          required\n          email\n        />\n\t\t</mat-form-field>\n      </div>\n      <div class=\"form-group\">\n <mat-form-field>\n    <mat-label>Enter your password</mat-label>\n\t\t<input matInput\n          id=\"password\"\n\n          ngModel\n          name=\"password\"\n          required\n          minlength=\"6\"\n\t\t  [type]=\"hide ? 'password' : 'text'\"\n        />\n<a mat-icon-button matSuffix (click)=\"hide = !hide\">\n    <mat-icon>{{hide ? 'visibility_off' : 'visibility'}}</mat-icon>\n</a>\n  </mat-form-field>\n      </div>\n      <div>\n        <button mat-button\n            type=\"submit\"\n          [disabled]=\"!authForm.valid\" class=\"loginbutton\">\n        Login </button>\n\n      </div>\n    </form>\n\t</mat-card>\n</div>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"navbar\">\n\n\n  <div class=\"specialleft\">\n      <ul class=\"list-items\">\n\n<li class=\"list-item\">\n  <a routerLink=\"/\">\n    <div class=\"logo-image\">\n          <img src=\"assets/images/logo.PNG\" class=\"img-fluid\"/>\n    </div>\n</a>\n        </li>\n\n\n<li class=\"list-item\"><a routerLinkActive=\"active\" routerLink='/begin/teams'>Teams</a></li>\n<li class=\"list-item\"><a routerLinkActive=\"active\" routerLink='/begin/associates'>Corporate Dictionary</a> </li>\n<!-- <li class=\"list-item\"><a>Blog</a></li>\n<li class=\"list-item\"><a>Solution Board</a></li> -->\n    </ul>\n  </div>\n<div class=\"special\">\n  <ul class=\"list-items\">\n          <li class=\"list-item\"><a *ngIf=\"admin_trigger && isAuthenticated\" style=\"cursor: pointer;\" routerLink='/begin/UAM'> User Management</a></li>\n\n\n        <li class=\"list-item\">\n        <button class=\"userbutton\" *ngIf=\"isAuthenticated\" mat-button [matMenuTriggerFor]=\"menu\">\n            {{uname}}\n                <mat-icon>account_circle</mat-icon>\n\n           </button>\n            <mat-menu #menu=\"matMenu\">\n          <mat-accordion (click)=\"MakeStatic($event)\" class=\"example-headers-align\">\n            <mat-expansion-panel>\n              <mat-expansion-panel-header>\n                <mat-panel-title>\n                  Change Password\n                </mat-panel-title>\n              </mat-expansion-panel-header>\n\n          <form #updForm=\"ngForm\" (ngSubmit)=\"onSubmit(updForm)\">\n<div class=\"form-group\">\n              <mat-form-field>\n                <mat-label>Enter new Password</mat-label>\n                <input matInput name=\"password\" ngModel id=\"password\" >\n              </mat-form-field>\n            </div>\n                <button mat-button color=\"primary\" type=\"submit\">Submit</button>\n            </form>\n            </mat-expansion-panel>\n          </mat-accordion>\n          <button mat-menu-item (click)=\"OnLogout()\">\n              <span class=\"glyphicon glyphicon-log-out\"></span> Logout</button>\n        </mat-menu>\n      </li>\n\n  </ul>\n</div>\n</nav>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/issues-collection/issues-collection.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/issues-collection/issues-collection.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n\n<mat-form-field>\n    <mat-label>Enter an issue reference</mat-label>\n    <input matInput (keyup)=\"applyFilter($event)\" #input>\n  </mat-form-field>\n    <button mat-mini-fab color=\"white\" (click)=\"onAddIssue()\">\n      <mat-icon class=\"p1\">plus_one</mat-icon>\n    </button>\n<table mat-table\n       [dataSource]=\"dataSource\" multiTemplateDataRows matSort\n       class=\"mat-elevation-z8\">\n\n       <ng-container matColumnDef=\"issueId\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> Issue ID </th>\n        <td mat-cell *matCellDef=\"let row\"> {{row.issueId}} </td>\n      </ng-container>\n\n <ng-container matColumnDef=\"issue_title\">\n        <th mat-header-cell *matHeaderCellDef  mat-sort-header> Issue title </th>\n        <td mat-cell *matCellDef=\"let row\"> {{row.issue_title}} </td>\n      </ng-container>\n\n      <ng-container matColumnDef=\"issue_date\">\n        <th mat-header-cell *matHeaderCellDef  mat-sort-header> Issue Date</th>\n        <td mat-cell *matCellDef=\"let row\"> {{row.issue_date |date}}</td>\n      </ng-container>\n\n      <ng-container matColumnDef=\"issue_type\">\n        <th mat-header-cell *matHeaderCellDef  mat-sort-header> Issue Type </th>\n        <td mat-cell *matCellDef=\"let row\"> {{row.issue_type}} </td>\n      </ng-container>\n\n      <ng-container matColumnDef=\"issue_status\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> Issue Status </th>\n        <td mat-cell *matCellDef=\"let row\"> {{row.issue_status}}\n\n          <button  (click)=\"OneditIssue(row)\">\n            <mat-icon>edit</mat-icon>\n          </button>\n          <button (click)=\"OndeleteIssue(row)\">\n            <mat-icon>delete</mat-icon>\n          </button>\n        </td>\n\n        </ng-container>\n\n      <tr class=\"mat-row\" *matNoDataRow>\n        <td class=\"mat-cell\" colspan=\"4\">No data matching the filter \"{{input.value}}\"</td>\n      </tr>\n\n\n   <ng-container matColumnDef=\"expandedDetail\">\n    <td mat-cell *matCellDef=\"let issue\" [attr.colspan]=\"columnsToDisplay.length\">\n      <div class=\"issue-detail\" *ngIf=\"element === expandedCorrelation\"\n           [@detailExpand]=\"issue == expandedElement ? 'expanded' : 'collapsed'\">\n\n\n         <div class=\"issue-description\">\n          <p class=\"issuedesc\">Issue Description:</p> {{issue.issue_desc}}\n        <br>\n        <p class=\"issuedesc\">Issue Updates:</p> {{issue.issue_updates}}\n          </div>\n         </div>\n    </td>\n  </ng-container>\n\n  <tr mat-header-row *matHeaderRowDef=\"columnsToDisplay\"></tr>\n  <tr mat-row *matRowDef=\"let element; columns: columnsToDisplay\"\n      class=\"example-element-row\" matRipple\n      [class.example-expanded-row]=\"expandedElement === element\"\n      (click)=\"expandedElement = expandedElement === element ? null : element\" >\n  </tr>\n  <tr mat-row *matRowDef=\"let row; columns: ['expandedDetail']\" class=\"example-detail-row\"></tr>\n</table>\n\n<mat-paginator [pageSizeOptions]=\"[5, 10, 25, 100]\"></mat-paginator>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/issues-edit/issues-edit.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/issues-edit/issues-edit.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1 mat-dialog-title *ngIf=\"edit_trigger\"> Edit the existing Issue:</h1>\n<h1 mat-dialog-title *ngIf=\"!edit_trigger\"> Add a new Issue:</h1>\n\n<mat-dialog-content>\n  <form class=\"example-form\" [formGroup]=\"issuesForm\" (ngSubmit)=\"OnSubmit()\">\n  \n    <table class=\"example-full-width\" cellspacing=\"0\"><tr>\n      <td><mat-form-field class=\"example-full-width\">\n        <mat-label >Issue Title</mat-label>\n        <input id=\"issue_title\" formControlName=\"issue_title\" matInput>\n      </mat-form-field></td>\n      <td>\n      <mat-form-field class=\"example-full-width\" appearance=\"fill\">\n        <mat-label>Choose a date</mat-label>\n        <input id=\"issue_date\" formControlName=\"issue_date\" matInput [min]=\"today\" [matDatepicker]=\"picker\">\n        <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n        <mat-datepicker #picker></mat-datepicker>\n      </mat-form-field>\n    </td>\n    </tr></table>\n  \n  <div class=\"form-group\">\n    <mat-form-field appearance=\"fill\">\n        <mat-label>Choose Issue status</mat-label>\n        <mat-select formControlName=\"issue_status\" name=\"issue_status\" id=\"issue_status\" required>\n          <mat-option value=\"Open\">Open</mat-option>\n          <mat-option value=\"Closed\">Closed</mat-option>\n        </mat-select>\n      </mat-form-field>\n</div>\n\n<div class=\"form-group\">\n    <mat-form-field appearance=\"fill\">\n        <mat-label>Choose issue type</mat-label>\n        <mat-select formControlName=\"issue_type\" name=\"issue_type\" id=\"issue_type\" required>\n          <mat-option value=\"Proactive\">Proactive</mat-option>\n          <mat-option value=\"Reactive\">Reactive</mat-option>\n        </mat-select>\n      </mat-form-field>\n</div>\n\n  \n    <p>\n      <mat-form-field class=\"example-full-width\">\n        <mat-label>Issue Description</mat-label>\n        <textarea id=\"issue_desc\" formControlName=\"issue_desc\" matInput placeholder=\"Tell about this issue in detail\"></textarea>\n      </mat-form-field>\n    </p>\n   <p>\n      <mat-form-field class=\"example-full-width\">\n        <mat-label>Issue Updates</mat-label>\n        <textarea id=\"issue_updates\" formControlName=\"issue_updates\" matInput placeholder=\"Tell about the progress on solving this issue\"></textarea>\n      </mat-form-field>\n    </p>\n  <mat-dialog-actions align=\"end\">\n    <button mat-button mat-dialog-close>Cancel</button>\n    <button mat-button [mat-dialog-close]=\"true\" \n     type=\"submit\"[disabled]=\"!issuesForm.valid\">Update</button>\n  </mat-dialog-actions>\n\n</form>\n\n</mat-dialog-content>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/oncall/oncalldetail/oncalldetail.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/oncall/oncalldetail/oncalldetail.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form class=\"example-form\" [formGroup]=\"oncallForm\" (ngSubmit)=\"onFindOncall()\">\n\n <mat-form-field class=\"fc\" appearance=\"fill\">\n  <mat-label>Select a date or range of dates</mat-label>\n  <mat-date-range-input [rangePicker]=\"picker\">\n    <input matStartDate formControlName=\"oncallDateStart\">\n    <input matEndDate formControlName=\"oncallDateEnd\">\n  </mat-date-range-input>\n  <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n  <mat-date-range-picker #picker></mat-date-range-picker>\n</mat-form-field>\n<button class=\"searchbutton\" mat-button\ntype=\"submit\" [disabled]=\"!oncallForm.valid\">Search</button>\n\n\n</form>\n\n\n<button class=\"addbtn\" mat-mini-fab color=\"white\" (click)=\"onAddoncall()\">\n  <mat-icon>plus_one</mat-icon>\n</button>\n\n\n\n<table *ngIf=\"!isLoading\" mat-table\n       [dataSource]=\"dataSource\" multiTemplateDataRows matSort\n       class=\"mat-elevation-z8\">\n\n       <ng-container matColumnDef=\"oncallDate\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> Date </th>\n        <td mat-cell *matCellDef=\"let row\"> {{row.oncallDate |date}} </td>\n      </ng-container>\n\n <ng-container matColumnDef=\"oncallPrimary\">\n        <th mat-header-cell *matHeaderCellDef  mat-sort-header> Primary Oncall </th>\n        <td mat-cell *matCellDef=\"let row\"> {{row.oncallPrimary}} </td>\n      </ng-container>\n\n      <ng-container matColumnDef=\"oncallSecondary\">\n        <th mat-header-cell *matHeaderCellDef  mat-sort-header>Secondary Oncall</th>\n        <td mat-cell *matCellDef=\"let row\"> {{row.oncallSecondary}}\n          <button class=\"editclass\" (click)=\"Oneditoncall(row)\">\n            <mat-icon>edit</mat-icon>\n          </button>\n\n        </td>\n      </ng-container>\n      <tr class=\"mat-row\" *matNoDataRow>\n        <td class=\"mat-cell\" colspan=\"4\" *ngIf=\"fsearch\">No data matching the input date range</td>\n        <td class=\"mat-cell\" colspan=\"4\" *ngIf=\"!fsearch\">Please enter input date value</td>\n\n      </tr>\n   <ng-container matColumnDef=\"expandedDetail\">\n    <td mat-cell *matCellDef=\"let oncall;let i=index\"  [attr.colspan]=\"columnsToDisplay.length\">\n      <div class=\"oncall-detail\" *ngIf=\"element === expandedCorrelation\"\n           [@detailExpand]=\"oncall == expandedElement ? 'expanded' : 'collapsed'\">\n\n\n        <div class=\"oncall-description\">\n\n        <ul>\n          <li> <p class=\"oncalldesc\">oncall Primary Email:</p> {{oncall.oncallPrimaryEmail}}</li>\n    <li> <p class=\"oncalldesc\">oncall Primary Contact</p> {{oncall.oncallPrimaryContact}}</li>\n    <li> <p class=\"oncalldesc\">oncall Secondary email:</p> {{oncall.oncallSecondaryEmail}}</li>\n     <li> <p class=\"oncalldesc\">oncall Secondary Contact:</p> {{oncall.oncallSecondaryContact}}\n\n    </ul>\n\n\n        </div>\n         </div>\n    </td>\n  </ng-container>\n  <tr mat-header-row *matHeaderRowDef=\"columnsToDisplay\"></tr>\n\n  <tr mat-row *matRowDef=\"let element; columns: columnsToDisplay ; let i = dataIndex;\"\n      class=\"example-element-row\"\n      [class.example-expanded-row]=\"expandedElement === element\"\n      (click)=\"expandedElement = expandedElement === element ? null : element\"\n     >\n  </tr>\n  <tr mat-row *matRowDef=\"let row; columns: ['expandedDetail']\" class=\"example-detail-row\"></tr>\n</table>\n<table *ngIf=\"isLoading\" style=\"text-align: center;\">\n  <app-loading></app-loading>\n</table>\n<mat-paginator [pageSizeOptions]=\"[5, 10, 25, 100]\"></mat-paginator>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/oncall/oncalledit/oncalledit.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/oncall/oncalledit/oncalledit.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1 mat-dialog-title *ngIf=\"edit_trigger\"> Edit the existing Oncall:</h1>\n<h1 mat-dialog-title *ngIf=\"!edit_trigger\"> Add a new Oncall:</h1>\n\n<mat-dialog-content>\n  <form class=\"example-form\" [formGroup]=\"oncallForm\" (ngSubmit)=\"OnSubmit()\">\n  \n   <table>\n   <tr><td>\n\n      <mat-form-field appearance=\"fill\">\n        <mat-label>Select a date or range of dates</mat-label>\n        <mat-date-range-input [rangePicker]=\"picker\">\n          <input matStartDate [min]=\"today\" formControlName=\"oncallDateStart\">\n          <input matEndDate formControlName=\"oncallDateEnd\">\n        </mat-date-range-input>\n        <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n        <mat-date-range-picker #picker></mat-date-range-picker>\n      </mat-form-field>\n  \n    </td>\n\t</tr>\n\t<tr>\n\t<td>\n        <mat-form-field appearance=\"fill\">\n          <mat-label>Select Primary Oncall</mat-label>\n          <mat-select  formControlName=\"oncallPrimary\" (selectionChange)=\"OnselectPrimary($event)\">\n            <mat-option \n            *ngFor=\"let associate of associatesshow\" [value]=\"associate\" [disabled]=\"associate === cv || associate ===  pv\"  >\n                  {{associate}}\n                </mat-option></mat-select>\n        </mat-form-field>\n      </td>\n      <td>\n      <mat-form-field appearance=\"fill\">\n          <mat-label>Select Secondary Oncall</mat-label>\n          <mat-select formControlName=\"oncallSecondary\"  (selectionChange)=\"OnselectSecondary($event)\">\n            <mat-option \n            *ngFor=\"let associate of associatesshow\" [value]=\"associate\" [disabled]=\"associate === cv || associate === pv\" >\n                  {{associate}}\n                </mat-option></mat-select>\n        </mat-form-field>\n      \n</td>\n  </tr>\n </table>\n    <p>\n      <mat-form-field class=\"example-full-width\">\n        <mat-label>Primary Oncall Contact Number</mat-label>\n        <textarea id=\"oncallPrimaryContact\" formControlName=\"oncallPrimaryContact\" matInput placeholder=\"Enter Mobile number with country code\"></textarea>\n      </mat-form-field>\n    </p>\n   <p>\n      <mat-form-field class=\"example-full-width\">\n        <mat-label>Secondary Oncall Contact Number</mat-label>\n        <textarea id=\"oncallSecondaryContact\" formControlName=\"oncallSecondaryContact\" matInput placeholder=\"Enter Mobile number with country code\"></textarea>\n      </mat-form-field>\n    </p>\n  <p>\n      <mat-form-field class=\"example-full-width\">\n        <mat-label>Secondary Oncall Email</mat-label>\n        <textarea id=\"oncallSecondaryEmail\" formControlName=\"oncallSecondaryEmail\" matInput placeholder=\"Enter valid Email address\"></textarea>\n      </mat-form-field>\n    </p>\n\t<p>\n      <mat-form-field class=\"example-full-width\">\n        <mat-label>Secondary Oncall Email</mat-label>\n        <textarea id=\"oncallPrimaryEmail\" formControlName=\"oncallPrimaryEmail\" matInput placeholder=\"Enter valid Email address\"></textarea>\n      </mat-form-field>\n    </p>\n\t<mat-dialog-actions align=\"end\">\n    <button mat-button mat-dialog-close>Cancel</button>\n    <button mat-button [mat-dialog-close]=\"true\" \n     type=\"submit\" [disabled]=\"!oncallForm.valid\">Update</button>\n  </mat-dialog-actions>\n\n</form>\n\n</mat-dialog-content>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/alert/alert.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/alert/alert.component.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"backdrop\" (click)=\"onClose()\"></div>\n<div class=\"alert-box\">\n    <h2>Oops!</h2>\n  <p>{{ message }}</p>\n  <div class=\"alert-box-actions\">\n    <button class=\"btn btn-primary\" (click)=\"onClose()\">Close</button>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/start-mirror/start-mirror.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/start-mirror/start-mirror.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n<router-outlet></router-outlet>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/teammembers/teammembers.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/teammembers/teammembers.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n  <mat-form-field>\n    <mat-label>Enter an associate name</mat-label>\n    <input matInput (keyup)=\"applyFilter($event)\" #input>\n  </mat-form-field>\n\n\n  <div class=\"mat-elevation-z8\">\n    <table mat-table [dataSource]=\"dataSource\" matSort>\n\n\n      <ng-container matColumnDef=\"empname\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> Name </th>\n        <td mat-cell *matCellDef=\"let row\" [attr.colspan]=\"1\"> {{row.empname}} </td>\n      </ng-container>\n\n\n      <ng-container matColumnDef=\"empcogemailid\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> Official EmailID </th>\n        <td mat-cell *matCellDef=\"let row\" [attr.colspan]=\"1\"> {{row.empcogemailid}}</td>\n      </ng-container>\n\n\n      <ng-container matColumnDef=\"empBTemailid\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> Personal EmailID </th>\n        <td mat-cell *matCellDef=\"let row\" [attr.colspan]=\"1\"> {{row.empBTemailid}} </td>\n      </ng-container>\n\n\n      <ng-container matColumnDef=\"empUIN\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> ID </th>\n        <td mat-cell *matCellDef=\"let row\" [attr.colspan]=\"1\"> {{row.empUIN}} </td>\n      </ng-container>\n\n\n      <ng-container matColumnDef=\"empcontactno\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> Contact Number </th>\n        <td mat-cell *matCellDef=\"let row\" [attr.colspan]=\"1\"> {{row.empcontactno}} </td>\n      </ng-container>\n\n      <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n      <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n\n\n      <tr class=\"mat-row\" *matNoDataRow>\n        <td class=\"mat-cell\" colspan=\"4\">No data matching the filter \"{{input.value}}\"</td>\n      </tr>\n    </table>\n\n  <mat-paginator [pageSizeOptions]=\"[5, 10, 25, 100]\"></mat-paginator>\n  </div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/teams/team-detail/team-detail.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/teams/team-detail/team-detail.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n\n<div *ngIf=\"tname\">\n<mat-tab-group mat-align-tabs=\"start\">\n    <mat-tab label=\"Overview\">\n\n        <mat-card class=\"example-card\">\n            <mat-card-header>\n                            <div mat-card-avatar class=\"example-header-image\"></div>\n              <mat-card-title>{{SelectedTeam.teamname}}</mat-card-title>\n               <button  [disabled]=\"!edit_trigger\" (click)=\"OneditTeam()\" mat-mini-fab color=\"white\">\n                  <mat-icon>edit</mat-icon>\n                </button>\n\n<button  [disabled]=\"!edit_trigger\" (click)=\"OndeleteTeam()\" mat-mini-fab color=\"white\">\n                    <mat-icon>delete</mat-icon>\n                  </button>\n              <mat-card-subtitle> <p class=\"teamsideheading\">Team Mail DL:</p>{{SelectedTeam.teammailId}}\n              </mat-card-subtitle>\n              <mat-card-subtitle>\n              <p class=\"teamsideheading\">Team Incident queue:</p>{{SelectedTeam.teamqueue}}\n              </mat-card-subtitle>\n            </mat-card-header>\n            <mat-card-content>\n              <p class=\"teamdesc\">\n                {{SelectedTeam.teamdesc}}\n              </p>\n            </mat-card-content>\n          </mat-card>\n    </mat-tab>\n    <mat-tab label=\"Team Members\">\n\n<app-teammembers></app-teammembers>\n    </mat-tab>\n    <mat-tab label=\"Ongoing Issues\">\n\n      <app-issues-collection></app-issues-collection>\n    </mat-tab>\n    <mat-tab label=\"Oncall Details\">\n\n     <app-oncalldetail></app-oncalldetail>\n    </mat-tab>\n\n  </mat-tab-group>\n\n\n</div>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/teams/teams-list/teams-list.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/teams/teams-list/teams-list.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\n    <form class=\"team-form\">\n      <mat-form-field>\n        <mat-label>Pick a team</mat-label>\n        <input type=\"text\"\n               \n               aria-label=\"Number\"\n               matInput\n               [formControl]=\"myControl\"\n               [matAutocomplete]=\"auto\"/>\n        <mat-autocomplete\n        (optionSelected)=\"Onselect($event)\" autoActiveFirstOption #auto=\"matAutocomplete\">\n      <mat-option\n      *ngFor=\"let teamname of filteredOptions| async\" [value]=\"teamname\"\n      >\n            {{teamname}}\n          </mat-option>\n        </mat-autocomplete>\n      </mat-form-field>\n      <button class=\"teamselectbtn\" [disabled]=\"!add_trigger\" mat-mini-fab color=\"white\" (click)=\"OnaddnewTeam()\">\n        <mat-icon>plus_one</mat-icon>\n      </button>\n    </form>\n\n\n\n    \n  </div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/teams/teams.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/teams/teams.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\n\n    \n    <app-teams-list></app-teams-list>\n</div>\n\n    <div class=\"row\">\n        <router-outlet></router-outlet>\n    </div>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/teams/teamsedit/teamsedit.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/teams/teamsedit/teamsedit.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1 mat-dialog-title *ngIf=\"edit_trigger\"> Edit the existing Team:</h1>\n<h1 mat-dialog-title *ngIf=\"!edit_trigger\"> Add a new Team:</h1>\n\n<mat-dialog-content>\n  <form class=\"example-form\" [formGroup]=\"teamForm\" (ngSubmit)=\"OnSubmit()\">\n\n    <table class=\"example-full-width\" cellspacing=\"0\"><tr>\n      <td><mat-form-field class=\"example-full-width\">\n        <mat-label >Team Name</mat-label>\n        <input id=\"teamname\" formControlName=\"teamname\" matInput>\n      </mat-form-field></td>\n      <td><mat-form-field class=\"example-full-width\">\n        <mat-label>Team EmailID</mat-label>\n        <input id=\"teammailId\" formControlName=\"teammailId\" matInput>\n      </mat-form-field></td>\n    </tr></table>\n\n    <p>\n      <mat-form-field class=\"example-full-width\">\n        <mat-label>Team Description</mat-label>\n        <textarea id=\"teamdesc\" formControlName=\"teamdesc\" matInput placeholder=\"Tell about what this team could support\"></textarea>\n      </mat-form-field>\n    </p>\n\n    <table class=\"example-full-width\" cellspacing=\"0\"><tr>\n      <td><mat-form-field class=\"example-full-width\">\n        <mat-label>Team Queue</mat-label>\n        <input id=\"teamqueue\" formControlName=\"teamqueue\" matInput placeholder=\"Mention Autofix Queue\">\n      </mat-form-field></td>\n  </tr></table>\n  <mat-dialog-actions align=\"end\">\n    <button mat-button mat-dialog-close>Cancel</button>\n    <div *ngIf=\"!edit_trigger\">\n          <button mat-button [mat-dialog-close]=\"true\"\n     type=\"submit\" [disabled]=\"!teamForm.valid\">Add</button>\n    </div>\n    <div *ngIf=\"edit_trigger\">\n      <button mat-button [mat-dialog-close]=\"true\"\n type=\"submit\" [disabled]=\"!teamForm.valid\">Update</button>\n</div>\n  </mat-dialog-actions>\n\n</form>\n\n</mat-dialog-content>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/user-management/user-management.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user-management/user-management.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<mat-tab-group mat-align-tabs=\"center\">\n    <mat-tab label=\"Add User\">\n        <div class=\"example-large-box mat-elevation-z4\">\n            \n       \n        <mat-card class=\"example-card\">\n            <mat-card-header>\n              <mat-card-title>Enter User Details</mat-card-title>\n        \n            </mat-card-header>\n        \n            <div *ngIf=\"isLoading\" style=\"text-align: center;\">\n              <app-loading></app-loading>\n            </div>\n            <form #authForm=\"ngForm\" (ngSubmit)=\"onSubmit(authForm)\" *ngIf=\"!isLoading\">\n              <div class=\"form-group\">\n                <mat-form-field>\n                   <mat-label>Username</mat-label>\n                  <input matInput\n                    id=\"uname\"\n                    ngModel\n                    name=\"uname\"\n                    required\n                  />\n                  </mat-form-field>\n                </div>\n  \n              <div class=\"form-group\">\n              <mat-form-field>\n                 <mat-label>E-Mail</mat-label>\n                <input matInput\n                  type=\"email\"\n                  id=\"email\"\n                \n                  ngModel\n                  name=\"email\"\n                  required\n                  email \n                />\n                </mat-form-field>\n              </div>\n              <div class=\"form-group\">\n         <mat-form-field>\n            <mat-label>Enter your password</mat-label>\n                <input matInput\n                  id=\"password\"\n                 \n                  ngModel\n                  name=\"password\"\n                  required\n                  minlength=\"6\"\n                  [type]=\"hide ? 'password' : 'text'\"\n                />\n        <a mat-icon-button matSuffix (click)=\"hide = !hide\">\n            <mat-icon>{{hide ? 'visibility_off' : 'visibility'}}</mat-icon>\n        </a>\n          </mat-form-field>\n              </div>\n<div class=\"form-group\">\n    <mat-form-field appearance=\"fill\">\n        <mat-label>Choose privilege</mat-label>\n        <mat-select ngModel name=\"privilege\" id=\"privilege\" required>\n          <mat-option value=\"Read\">Read</mat-option>\n          <mat-option value=\"Read_and_write\">Read and Write</mat-option>\n          <mat-option value=\"Admin\">Admin</mat-option>\n        </mat-select>\n      </mat-form-field>\n</div>\n              <div>\n                <button mat-button\n                    type=\"submit\"\n                  [disabled]=\"!authForm.valid\">\n                                  Add User</button>\n              </div>\n            </form>\n            </mat-card>\n        </div>\n        \n\n</mat-tab>\n    <mat-tab label=\"Delete User\">\n            <div class=\"example-large-box mat-elevation-z4\">\n              \n        <mat-card class=\"example-card\">\n            <mat-card-header>\n              \n              <mat-card-title>Delete User</mat-card-title>\n        \n            </mat-card-header>\n        \n            <div *ngIf=\"isLoading\" style=\"text-align: center;\">\n              <app-loading></app-loading>\n            </div>\n            <form #deleteForm=\"ngForm\" *ngIf=\"!isLoading\">\n              <div class=\"form-group\">\n              <mat-form-field>\n                 <mat-label>E-Mail</mat-label>\n                <input matInput\n                  type=\"email\"\n                  id=\"email\"\n                  ngModel\n                  name=\"email\"\n                  required\n                  email \n                />\n                </mat-form-field>\n              </div>\n              <div>\n                <button mat-button\n                    (click)=\"OnDeleteUser()\"\n                  [disabled]=\"!deleteForm.valid\">\n                       Delete the User\n                </button>\n                \n                   </div>\n            </form>\n            </mat-card>\n        </div>\n        \n    </mat-tab>\n\n    <mat-tab label=\"Update User\">\n      <div class=\"example-large-box mat-elevation-z4\">\n        \n  <mat-card class=\"example-card\">\n      <mat-card-header>\n\n        <mat-card-title>Update User Role</mat-card-title>\n  \n      </mat-card-header>\n  \n      <div *ngIf=\"isLoading\" style=\"text-align: center;\">\n        <app-loading></app-loading>\n      </div>\n      <form #UpdateForm=\"ngForm\" *ngIf=\"!isLoading\">\n        <div class=\"form-group\">\n        <mat-form-field>\n           <mat-label>E-Mail</mat-label>\n          <input matInput\n            type=\"email\"\n            id=\"email\"\n          \n            ngModel\n            name=\"email\"\n            required\n            email \n          />\n          </mat-form-field>\n        </div>\n        <div class=\"form-group\">\n          <mat-form-field appearance=\"fill\">\n              <mat-label>Choose privilege</mat-label>\n              <mat-select ngModel name=\"privilege\" id=\"privilege\" required>\n                <mat-option value=\"Read\">Read</mat-option>\n                <mat-option value=\"Read_and_write\">Read and Write</mat-option>\n                <mat-option value=\"Admin\">Admin</mat-option>\n              </mat-select>\n            </mat-form-field>\n      </div>      \n        <div>\n          <button mat-button\n              (click)=\"OnUpdateUser()\"\n            [disabled]=\"!UpdateForm.valid\">\n                 Update User\n          </button>\n          \n             </div>\n      </form>\n      </mat-card>\n  </div>\n  \n</mat-tab>\n\n</mat-tab-group>\n\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__createBinding", function() { return __createBinding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __createBinding(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}

function __exportStar(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

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

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n.cl{\n  height:100%;\n  overflow: auto;\n    background-repeat: no-repeat;\n    background-size: 40.5rem 70rem;\n    background-position: center;\n      background-image: url('BT_logo.jpg');\n\n      font-family: Georgia, 'Times New Roman', Times, serif;\n      color:#D90E18\n  \n    }\n\n\n    @media(min-width:25rem)\n    {\n      .cl{\n        height:100%;\n        overflow: auto;\n          background-repeat: no-repeat;\n          background-size: 66.5rem 70rem;;\n          background-position: center;\n            background-image: url('BT_logo.jpg');\n            font-family: Georgia, 'Times New Roman', Times, serif;\n            color:#D90E18\n        \n          }\n    }\n\n\n    @media(min-width:40rem)\n    {\n      .cl{\n        height:100%;\n        overflow: auto;\n          background-repeat: no-repeat;\n          background-size: 80.5rem 70rem;;\n          background-position: center;\n            background-image: url('BT_logo.jpg');\n            font-family: Georgia, 'Times New Roman', Times, serif;\n            color:#D90E18\n        \n          }\n    }\n\n\n    @media(min-width:50rem)\n  {\n    .cl{\n      height:100%;\n      overflow: auto;\n        background-repeat: no-repeat;\n        background-size: cover;\n        background-position: center;\n          background-image: url('BT_logo.jpg');\n          font-family: Georgia, 'Times New Roman', Times, serif;\n          color:#D90E18\n      \n        }\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0VBQ0UsV0FBVztFQUNYLGNBQWM7SUFDWiw0QkFBNEI7SUFDNUIsOEJBQThCO0lBQzlCLDJCQUEyQjtNQUN6QixvQ0FBcUQ7O01BRXJELHFEQUFxRDtNQUNyRDs7SUFFRjs7O0lBR0E7O01BRUU7UUFDRSxXQUFXO1FBQ1gsY0FBYztVQUNaLDRCQUE0QjtVQUM1Qiw4QkFBOEI7VUFDOUIsMkJBQTJCO1lBQ3pCLG9DQUFxRDtZQUNyRCxxREFBcUQ7WUFDckQ7O1VBRUY7SUFDTjs7O0lBRUE7O01BRUU7UUFDRSxXQUFXO1FBQ1gsY0FBYztVQUNaLDRCQUE0QjtVQUM1Qiw4QkFBOEI7VUFDOUIsMkJBQTJCO1lBQ3pCLG9DQUFxRDtZQUNyRCxxREFBcUQ7WUFDckQ7O1VBRUY7SUFDTjs7O0lBQ0Y7O0lBRUU7TUFDRSxXQUFXO01BQ1gsY0FBYztRQUNaLDRCQUE0QjtRQUM1QixzQkFBc0I7UUFDdEIsMkJBQTJCO1VBQ3pCLG9DQUFxRDtVQUNyRCxxREFBcUQ7VUFDckQ7O1FBRUY7RUFDTiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4uY2x7XG4gIGhlaWdodDoxMDAlO1xuICBvdmVyZmxvdzogYXV0bztcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtc2l6ZTogNDAuNXJlbSA3MHJlbTtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ3NyYy9hcHAvcGljdHVyZXMvQlRfbG9nby5qcGcnKTtcblxuICAgICAgZm9udC1mYW1pbHk6IEdlb3JnaWEsICdUaW1lcyBOZXcgUm9tYW4nLCBUaW1lcywgc2VyaWY7XG4gICAgICBjb2xvcjojRDkwRTE4XG4gIFxuICAgIH1cblxuXG4gICAgQG1lZGlhKG1pbi13aWR0aDoyNXJlbSlcbiAgICB7XG4gICAgICAuY2x7XG4gICAgICAgIGhlaWdodDoxMDAlO1xuICAgICAgICBvdmVyZmxvdzogYXV0bztcbiAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogNjYuNXJlbSA3MHJlbTs7XG4gICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdzcmMvYXBwL3BpY3R1cmVzL0JUX2xvZ28uanBnJyk7XG4gICAgICAgICAgICBmb250LWZhbWlseTogR2VvcmdpYSwgJ1RpbWVzIE5ldyBSb21hbicsIFRpbWVzLCBzZXJpZjtcbiAgICAgICAgICAgIGNvbG9yOiNEOTBFMThcbiAgICAgICAgXG4gICAgICAgICAgfVxuICAgIH1cblxuICAgIEBtZWRpYShtaW4td2lkdGg6NDByZW0pXG4gICAge1xuICAgICAgLmNse1xuICAgICAgICBoZWlnaHQ6MTAwJTtcbiAgICAgICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDgwLjVyZW0gNzByZW07O1xuICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnc3JjL2FwcC9waWN0dXJlcy9CVF9sb2dvLmpwZycpO1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6IEdlb3JnaWEsICdUaW1lcyBOZXcgUm9tYW4nLCBUaW1lcywgc2VyaWY7XG4gICAgICAgICAgICBjb2xvcjojRDkwRTE4XG4gICAgICAgIFxuICAgICAgICAgIH1cbiAgICB9XG4gIEBtZWRpYShtaW4td2lkdGg6NTByZW0pXG4gIHtcbiAgICAuY2x7XG4gICAgICBoZWlnaHQ6MTAwJTtcbiAgICAgIG92ZXJmbG93OiBhdXRvO1xuICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdzcmMvYXBwL3BpY3R1cmVzL0JUX2xvZ28uanBnJyk7XG4gICAgICAgICAgZm9udC1mYW1pbHk6IEdlb3JnaWEsICdUaW1lcyBOZXcgUm9tYW4nLCBUaW1lcywgc2VyaWY7XG4gICAgICAgICAgY29sb3I6I0Q5MEUxOFxuICAgICAgXG4gICAgICAgIH1cbiAgfSJdfQ== */");

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _authentication_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./authentication/auth.service */ "./src/app/authentication/auth.service.ts");
/* harmony import */ var _teams_team_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./teams/team.service */ "./src/app/teams/team.service.ts");




let AppComponent = class AppComponent {
    constructor(ts, as) {
        this.ts = ts;
        this.as = as;
    }
    ngOnInit() {
        this.as.autoLogin();
    }
};
AppComponent.ctorParameters = () => [
    { type: _teams_team_service__WEBPACK_IMPORTED_MODULE_3__["TeamService"] },
    { type: _authentication_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
];
AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_teams_team_service__WEBPACK_IMPORTED_MODULE_3__["TeamService"], _authentication_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
], AppComponent);



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/autocomplete */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/autocomplete.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _teams_teams_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./teams/teams.component */ "./src/app/teams/teams.component.ts");
/* harmony import */ var _teams_teams_list_teams_list_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./teams/teams-list/teams-list.component */ "./src/app/teams/teams-list/teams-list.component.ts");
/* harmony import */ var _teams_team_detail_team_detail_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./teams/team-detail/team-detail.component */ "./src/app/teams/team-detail/team-detail.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tabs.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sort.js");
/* harmony import */ var _associates_associates_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./associates/associates.component */ "./src/app/associates/associates.component.ts");
/* harmony import */ var _associates_associates_list_associates_list_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./associates/associates-list/associates-list.component */ "./src/app/associates/associates-list/associates-list.component.ts");
/* harmony import */ var _associates_associates_detail_associates_detail_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./associates/associates-detail/associates-detail.component */ "./src/app/associates/associates-detail/associates-detail.component.ts");
/* harmony import */ var _associates_associates_edit_associates_edit_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./associates/associates-edit/associates-edit.component */ "./src/app/associates/associates-edit/associates-edit.component.ts");
/* harmony import */ var _teammembers_teammembers_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./teammembers/teammembers.component */ "./src/app/teammembers/teammembers.component.ts");
/* harmony import */ var _teams_teamsedit_teamsedit_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./teams/teamsedit/teamsedit.component */ "./src/app/teams/teamsedit/teamsedit.component.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
/* harmony import */ var _teams_team_service__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./teams/team.service */ "./src/app/teams/team.service.ts");
/* harmony import */ var _shared_helper_service__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./shared/helper.service */ "./src/app/shared/helper.service.ts");
/* harmony import */ var _authentication_authentication_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./authentication/authentication.component */ "./src/app/authentication/authentication.component.ts");
/* harmony import */ var _shared_loading_loading_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./shared/loading/loading.component */ "./src/app/shared/loading/loading.component.ts");
/* harmony import */ var _shared_alert_alert_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./shared/alert/alert.component */ "./src/app/shared/alert/alert.component.ts");
/* harmony import */ var _authentication_auth_service__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./authentication/auth.service */ "./src/app/authentication/auth.service.ts");
/* harmony import */ var _shared_placeholder_directive__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./shared/placeholder.directive */ "./src/app/shared/placeholder.directive.ts");
/* harmony import */ var _authentication_auth_guard__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./authentication/auth.guard */ "./src/app/authentication/auth.guard.ts");
/* harmony import */ var _authentication_auth_interceptor__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./authentication/auth_interceptor */ "./src/app/authentication/auth_interceptor.ts");
/* harmony import */ var _start_mirror_start_mirror_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./start-mirror/start-mirror.component */ "./src/app/start-mirror/start-mirror.component.ts");
/* harmony import */ var _teams_team_resolver__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./teams/team_resolver */ "./src/app/teams/team_resolver.ts");
/* harmony import */ var _user_management_user_management_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./user-management/user-management.component */ "./src/app/user-management/user-management.component.ts");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/expansion.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! @angular/material/chips */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/chips.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/datepicker.js");
/* harmony import */ var _issues_collection_issues_collection_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./issues-collection/issues-collection.component */ "./src/app/issues-collection/issues-collection.component.ts");
/* harmony import */ var _issues_edit_issues_edit_component__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./issues-edit/issues-edit.component */ "./src/app/issues-edit/issues-edit.component.ts");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _oncall_oncalldetail_oncalldetail_component__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./oncall/oncalldetail/oncalldetail.component */ "./src/app/oncall/oncalldetail/oncalldetail.component.ts");
/* harmony import */ var _oncall_oncalledit_oncalledit_component__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./oncall/oncalledit/oncalledit.component */ "./src/app/oncall/oncalledit/oncalledit.component.ts");
/* harmony import */ var _associates_associates_resolver__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ./associates/associates.resolver */ "./src/app/associates/associates.resolver.ts");





















































const approute = [
    { path: '', redirectTo: '/begin', pathMatch: 'full' },
    { path: 'begin', component: _start_mirror_start_mirror_component__WEBPACK_IMPORTED_MODULE_39__["StartMirrorComponent"], canActivate: [_authentication_auth_guard__WEBPACK_IMPORTED_MODULE_37__["AuthGuard"]], resolve: [_teams_team_resolver__WEBPACK_IMPORTED_MODULE_40__["TeamResolverService"], _associates_associates_resolver__WEBPACK_IMPORTED_MODULE_52__["AssociateResolverService"]],
        children: [
            { path: 'UAM', component: _user_management_user_management_component__WEBPACK_IMPORTED_MODULE_41__["UserManagementComponent"] },
            { path: 'associates', component: _associates_associates_component__WEBPACK_IMPORTED_MODULE_22__["AssociatesComponent"], resolve: [_associates_associates_resolver__WEBPACK_IMPORTED_MODULE_52__["AssociateResolverService"]], children: [
                    { path: 'new', redirectTo: '' },
                    { path: ':name', component: _associates_associates_detail_associates_detail_component__WEBPACK_IMPORTED_MODULE_24__["AssociatesDetailComponent"],
                    }
                ] },
            { path: 'teams', component: _teams_teams_component__WEBPACK_IMPORTED_MODULE_12__["TeamsComponent"],
                children: [
                    { path: 'new', redirectTo: '' },
                    { path: ':name', component: _teams_team_detail_team_detail_component__WEBPACK_IMPORTED_MODULE_14__["TeamDetailComponent"],
                    }
                ] },
        ] },
    { path: 'auth', component: _authentication_authentication_component__WEBPACK_IMPORTED_MODULE_32__["AuthenticationComponent"] }
];
let AppModule = class AppModule {
};
AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_11__["HeaderComponent"],
            _teams_teams_component__WEBPACK_IMPORTED_MODULE_12__["TeamsComponent"], _teams_teams_list_teams_list_component__WEBPACK_IMPORTED_MODULE_13__["TeamsListComponent"], _teams_team_detail_team_detail_component__WEBPACK_IMPORTED_MODULE_14__["TeamDetailComponent"], _associates_associates_component__WEBPACK_IMPORTED_MODULE_22__["AssociatesComponent"],
            _associates_associates_list_associates_list_component__WEBPACK_IMPORTED_MODULE_23__["AssociatesListComponent"], _associates_associates_detail_associates_detail_component__WEBPACK_IMPORTED_MODULE_24__["AssociatesDetailComponent"], _associates_associates_edit_associates_edit_component__WEBPACK_IMPORTED_MODULE_25__["AssociatesEditComponent"],
            _teammembers_teammembers_component__WEBPACK_IMPORTED_MODULE_26__["TeammembersComponent"], _teams_teamsedit_teamsedit_component__WEBPACK_IMPORTED_MODULE_27__["TeamseditComponent"], _authentication_authentication_component__WEBPACK_IMPORTED_MODULE_32__["AuthenticationComponent"],
            _shared_loading_loading_component__WEBPACK_IMPORTED_MODULE_33__["LoadingComponent"], _shared_alert_alert_component__WEBPACK_IMPORTED_MODULE_34__["AlertComponent"], _shared_placeholder_directive__WEBPACK_IMPORTED_MODULE_36__["PlaceholderDirective"], _start_mirror_start_mirror_component__WEBPACK_IMPORTED_MODULE_39__["StartMirrorComponent"], _user_management_user_management_component__WEBPACK_IMPORTED_MODULE_41__["UserManagementComponent"], _issues_collection_issues_collection_component__WEBPACK_IMPORTED_MODULE_47__["IssuesCollectionComponent"], _issues_edit_issues_edit_component__WEBPACK_IMPORTED_MODULE_48__["IssuesEditComponent"], _oncall_oncalldetail_oncalldetail_component__WEBPACK_IMPORTED_MODULE_50__["OncalldetailComponent"], _oncall_oncalledit_oncalledit_component__WEBPACK_IMPORTED_MODULE_51__["OncalleditComponent"]],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_15__["RouterModule"].forRoot(approute, {
                onSameUrlNavigation: 'reload'
            }),
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__["MatPaginatorModule"],
            _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_5__["MatAutocompleteModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_44__["MatMenuModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_17__["MatCardModule"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_16__["MatTabsModule"],
            _angular_material_chips__WEBPACK_IMPORTED_MODULE_45__["MatChipsModule"],
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_46__["MatDatepickerModule"],
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_43__["MatExpansionModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_18__["MatButtonModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__["MatIconModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_20__["MatTableModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_49__["MatNativeDateModule"],
            _angular_material_sort__WEBPACK_IMPORTED_MODULE_21__["MatSortModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_28__["MatDialogModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_42__["MatSelectModule"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_29__["MatSnackBarModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"]
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"]],
        providers: [_teams_team_service__WEBPACK_IMPORTED_MODULE_30__["TeamService"], _authentication_auth_service__WEBPACK_IMPORTED_MODULE_35__["AuthService"], _authentication_auth_guard__WEBPACK_IMPORTED_MODULE_37__["AuthGuard"], _shared_helper_service__WEBPACK_IMPORTED_MODULE_31__["HelperService"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_46__["MatDatepicker"], _associates_associates_resolver__WEBPACK_IMPORTED_MODULE_52__["AssociateResolverService"], _teams_team_resolver__WEBPACK_IMPORTED_MODULE_40__["TeamResolverService"],
            {
                provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"],
                useClass: _authentication_auth_interceptor__WEBPACK_IMPORTED_MODULE_38__["AuthInterceptorService"],
                multi: true
            }
        ]
    })
], AppModule);



/***/ }),

/***/ "./src/app/associates/associates-detail/associates-detail.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/associates/associates-detail/associates-detail.component.css ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".example-card {\n  width: 37.25rem;\n  min-height: 18.75rem;\n  background:rgba(0, 0, 0, 0.555);\n  color:White;\n}\n\n.mat-card-header-text{\n  width: 100%;\n}\n\n.mat-card-title {\n  color:white;\n  font-weight: bolder;\n  font-size:x-large !important;\n}\n\nul {\n  margin-top: 20px;\n}\n\nli {\n  list-style:none;\n\n}\n\n.empsideheading{\nfont-weight: bold;\ndisplay: inline-block;\nwidth:40%;\nfont-size:small !important;\n}\n\n@media(min-width:40rem)\n{\n\n  .example-card {\n    width: 67.25rem;\n    min-height: 18.75rem;\n    background:rgba(0, 0, 0, 0.555);\n    color:White;\n  }\n  \n  .empsideheading{\n    font-weight: bold;\n    display: inline-block;\n    width:40%;\n    font-size:small !important;\n    }\n}\n\n.cont{\n  display:inline-block;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXNzb2NpYXRlcy9hc3NvY2lhdGVzLWRldGFpbC9hc3NvY2lhdGVzLWRldGFpbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBZTtFQUNmLG9CQUFvQjtFQUNwQiwrQkFBK0I7RUFDL0IsV0FBVztBQUNiOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsV0FBVztFQUNYLG1CQUFtQjtFQUNuQiw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxlQUFlOztBQUVqQjs7QUFFQTtBQUNBLGlCQUFpQjtBQUNqQixxQkFBcUI7QUFDckIsU0FBUztBQUNULDBCQUEwQjtBQUMxQjs7QUFFQTs7O0VBR0U7SUFDRSxlQUFlO0lBQ2Ysb0JBQW9CO0lBQ3BCLCtCQUErQjtJQUMvQixXQUFXO0VBQ2I7O0VBRUE7SUFDRSxpQkFBaUI7SUFDakIscUJBQXFCO0lBQ3JCLFNBQVM7SUFDVCwwQkFBMEI7SUFDMUI7QUFDSjs7QUFDQTtFQUNFLG9CQUFvQjtFQUNwQiwwQkFBa0I7RUFBbEIsdUJBQWtCO0VBQWxCLGtCQUFrQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL2Fzc29jaWF0ZXMvYXNzb2NpYXRlcy1kZXRhaWwvYXNzb2NpYXRlcy1kZXRhaWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leGFtcGxlLWNhcmQge1xuICB3aWR0aDogMzcuMjVyZW07XG4gIG1pbi1oZWlnaHQ6IDE4Ljc1cmVtO1xuICBiYWNrZ3JvdW5kOnJnYmEoMCwgMCwgMCwgMC41NTUpO1xuICBjb2xvcjpXaGl0ZTtcbn1cblxuLm1hdC1jYXJkLWhlYWRlci10ZXh0e1xuICB3aWR0aDogMTAwJTtcbn1cblxuLm1hdC1jYXJkLXRpdGxlIHtcbiAgY29sb3I6d2hpdGU7XG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gIGZvbnQtc2l6ZTp4LWxhcmdlICFpbXBvcnRhbnQ7XG59XG5cbnVsIHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cblxubGkge1xuICBsaXN0LXN0eWxlOm5vbmU7XG5cbn1cblxuLmVtcHNpZGVoZWFkaW5ne1xuZm9udC13ZWlnaHQ6IGJvbGQ7XG5kaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG53aWR0aDo0MCU7XG5mb250LXNpemU6c21hbGwgIWltcG9ydGFudDtcbn1cblxuQG1lZGlhKG1pbi13aWR0aDo0MHJlbSlcbntcblxuICAuZXhhbXBsZS1jYXJkIHtcbiAgICB3aWR0aDogNjcuMjVyZW07XG4gICAgbWluLWhlaWdodDogMTguNzVyZW07XG4gICAgYmFja2dyb3VuZDpyZ2JhKDAsIDAsIDAsIDAuNTU1KTtcbiAgICBjb2xvcjpXaGl0ZTtcbiAgfVxuICBcbiAgLmVtcHNpZGVoZWFkaW5ne1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB3aWR0aDo0MCU7XG4gICAgZm9udC1zaXplOnNtYWxsICFpbXBvcnRhbnQ7XG4gICAgfVxufVxuLmNvbnR7XG4gIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xuICB3aWR0aDogZml0LWNvbnRlbnQ7XG59XG5cbiJdfQ== */");

/***/ }),

/***/ "./src/app/associates/associates-detail/associates-detail.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/associates/associates-detail/associates-detail.component.ts ***!
  \*****************************************************************************/
/*! exports provided: AssociatesDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssociatesDetailComponent", function() { return AssociatesDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_authentication_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/authentication/auth.service */ "./src/app/authentication/auth.service.ts");
/* harmony import */ var src_app_shared_helper_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/helper.service */ "./src/app/shared/helper.service.ts");
/* harmony import */ var _associates_edit_associates_edit_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../associates-edit/associates-edit.component */ "./src/app/associates/associates-edit/associates-edit.component.ts");
/* harmony import */ var _associates_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../associates.service */ "./src/app/associates/associates.service.ts");








let AssociatesDetailComponent = class AssociatesDetailComponent {
    constructor(ts, rs, as, ru, dialog, hs) {
        this.ts = ts;
        this.rs = rs;
        this.as = as;
        this.ru = ru;
        this.dialog = dialog;
        this.hs = hs;
    }
    ngOnInit() {
        this.rs.params.subscribe((ps) => {
            if (ps['name']) {
                this.aname = ps['name'];
                this.SelectedAssociate = this.ts.getAssociate(this.aname);
                console.log(this.SelectedAssociate);
            }
        });
        this.as.user.subscribe((data) => {
            if (data) {
                this.edit_associate = data.privilege;
            }
        });
        if (this.edit_associate !== 'Read') {
            this.edit_trigger = true;
        }
    }
    OneditAssociate() {
        this.ts.associatenameSelected.next(this.aname);
        this.dialog.open(_associates_edit_associates_edit_component__WEBPACK_IMPORTED_MODULE_6__["AssociatesEditComponent"]);
    }
    OndeleteAssociate() {
        this.ts.deleteAssociate(this.aname).subscribe(resData => {
            this.hs.openSnackBar("Associate Details Deleted", "Success");
            this.ru.navigate(['../../associates'], { relativeTo: this.rs });
        }, errorMessage => {
            this.hs.openSnackBar(errorMessage, 'Error');
        });
    }
};
AssociatesDetailComponent.ctorParameters = () => [
    { type: _associates_service__WEBPACK_IMPORTED_MODULE_7__["AssociateService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: src_app_authentication_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] },
    { type: src_app_shared_helper_service__WEBPACK_IMPORTED_MODULE_5__["HelperService"] }
];
AssociatesDetailComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-associates-detail',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./associates-detail.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/associates/associates-detail/associates-detail.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./associates-detail.component.css */ "./src/app/associates/associates-detail/associates-detail.component.css")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_associates_service__WEBPACK_IMPORTED_MODULE_7__["AssociateService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
        src_app_authentication_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"], src_app_shared_helper_service__WEBPACK_IMPORTED_MODULE_5__["HelperService"]])
], AssociatesDetailComponent);



/***/ }),

/***/ "./src/app/associates/associates-edit/associates-edit.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/associates/associates-edit/associates-edit.component.css ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".example-form {\n    min-width: 750px;\n    max-width: 900px;\n    width: 100%;\n    min-height :500px;\n  }\n  \n  .example-full-width {\n    width: 100%;\n  }\n  \n  td {\n    padding-right: 8px;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXNzb2NpYXRlcy9hc3NvY2lhdGVzLWVkaXQvYXNzb2NpYXRlcy1lZGl0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxXQUFXO0VBQ2I7O0VBRUE7SUFDRSxrQkFBa0I7RUFDcEIiLCJmaWxlIjoic3JjL2FwcC9hc3NvY2lhdGVzL2Fzc29jaWF0ZXMtZWRpdC9hc3NvY2lhdGVzLWVkaXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leGFtcGxlLWZvcm0ge1xuICAgIG1pbi13aWR0aDogNzUwcHg7XG4gICAgbWF4LXdpZHRoOiA5MDBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtaW4taGVpZ2h0IDo1MDBweDtcbiAgfVxuICBcbiAgLmV4YW1wbGUtZnVsbC13aWR0aCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgXG4gIHRkIHtcbiAgICBwYWRkaW5nLXJpZ2h0OiA4cHg7XG4gIH0iXX0= */");

/***/ }),

/***/ "./src/app/associates/associates-edit/associates-edit.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/associates/associates-edit/associates-edit.component.ts ***!
  \*************************************************************************/
/*! exports provided: AssociatesEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssociatesEditComponent", function() { return AssociatesEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/autocomplete */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/autocomplete.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var src_app_shared_helper_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/helper.service */ "./src/app/shared/helper.service.ts");
/* harmony import */ var _associates_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../associates.service */ "./src/app/associates/associates.service.ts");
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/keycodes */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/keycodes.js");
/* harmony import */ var src_app_teams_team_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/teams/team.service */ "./src/app/teams/team.service.ts");










let AssociatesEditComponent = class AssociatesEditComponent {
    constructor(ts, teamservice, ru, rs, hs) {
        this.ts = ts;
        this.teamservice = teamservice;
        this.ru = ru;
        this.rs = rs;
        this.hs = hs;
        this.edit_trigger = false;
        this.myControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        this.visible = true;
        this.selectable = true;
        this.removable = true;
        this.separatorKeysCodes = [_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__["ENTER"], _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__["COMMA"]];
        this.teamCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        this.teams = [];
    }
    ngOnInit() {
        this.edit_trigger = false;
        this.ts.associatenameSelected.subscribe((name) => {
            this.empname = name;
            console.log(this.empname);
        });
        if (this.empname) {
            this.edit_trigger = true;
        }
        this.initForm();
        this.filteredOptions = this.myControl.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["startWith"])(null), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((team) => team ? this._filter(team) : this.teamservice.getTeamNames().slice()));
    }
    initForm() {
        let name = '';
        let cogmail = '';
        let btmail = '';
        let UIN = '';
        let contact = '';
        if (this.edit_trigger) {
            //console.log(this.empname)
            this.empSel = this.ts.getAssociate(this.empname);
            name = this.empSel.empname;
            cogmail = this.empSel.empcogemailid;
            btmail = this.empSel.empBTemailid;
            contact = this.empSel.empcontactno;
            UIN = this.empSel.empUIN;
            this.teams = this.empSel.empTeams;
            //console.log(teams)
            this.empnames = this.ts.getExlcudeAssociateNames(name);
        }
        this.empnames = this.ts.getExlcudeAssociateNames();
        this.associateForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            empId: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            empname: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](name, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, this.forbiddennames.bind(this)]),
            empcogemailid: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](cogmail, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]),
            empBTemailid: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](btmail, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]),
            empcontactno: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](contact, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[0-9]*')]),
            empUIN: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](UIN, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(9), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[0-9]*')]),
            empTeams: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.teams)
        });
    }
    forbiddennames(control) {
        if (this.empname.indexOf(control.value.toUpperCase()) !== -1)
            return { 'nameforbid': true };
        else
            return null;
    }
    OnSubmit() {
        if (this.edit_trigger) {
            this.associateForm.patchValue({ empId: this.empSel.empId });
            console.log(this.associateForm.value);
            this.ts.updateAssociate(this.empname, this.associateForm.value).subscribe(emp_loaded => {
                this.hs.openSnackBar("Associate Details Updated", "Success");
                this.rs.navigate(['../../associates'], { relativeTo: this.ru });
            }, errorMessage => {
                this.hs.openSnackBar(errorMessage, 'Error');
            });
        }
        else {
            console.log(this.associateForm.value);
            this.ts.addAssociate(this.associateForm.value).subscribe(emp_loaded => {
                this.hs.openSnackBar("New Associate Added", "Success");
                this.rs.navigate(['../associates'], { relativeTo: this.ru });
            }, errorMessage => {
                this.hs.openSnackBar('errorMessage', 'Error');
            });
        }
        this.ts.associatenameSelected.next('');
    }
    _filter(value) {
        const filterValue = value.toLowerCase();
        this.teamsshow = this.teamservice.getTeamNames();
        //console.log(this.teamsshow)
        return this.teamsshow.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
    }
    add(event) {
        const input = event.input;
        const value = event.value;
        // Add our team
        if ((value || '').trim()) {
            this.teams.push(value.trim());
            console.log(this.teams);
        }
        // Reset the input value
        if (input) {
            input.value = '';
        }
        this.teamCtrl.setValue(null);
    }
    remove(team) {
        const index = this.teams.indexOf(team);
        if (index >= 0) {
            this.teams.splice(index, 1);
        }
    }
    selected(event) {
        this.teams.push(event.option.viewValue);
        console.log(this.teams);
        this.teamInput.nativeElement.value = '';
        this.teamCtrl.setValue(null);
    }
};
AssociatesEditComponent.ctorParameters = () => [
    { type: _associates_service__WEBPACK_IMPORTED_MODULE_7__["AssociateService"] },
    { type: src_app_teams_team_service__WEBPACK_IMPORTED_MODULE_9__["TeamService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: src_app_shared_helper_service__WEBPACK_IMPORTED_MODULE_6__["HelperService"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('teamInput'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
], AssociatesEditComponent.prototype, "teamInput", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('auto'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_3__["MatAutocomplete"])
], AssociatesEditComponent.prototype, "matAutocomplete", void 0);
AssociatesEditComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-associates-edit',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./associates-edit.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/associates/associates-edit/associates-edit.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./associates-edit.component.css */ "./src/app/associates/associates-edit/associates-edit.component.css")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_associates_service__WEBPACK_IMPORTED_MODULE_7__["AssociateService"], src_app_teams_team_service__WEBPACK_IMPORTED_MODULE_9__["TeamService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], src_app_shared_helper_service__WEBPACK_IMPORTED_MODULE_6__["HelperService"]])
], AssociatesEditComponent);



/***/ }),

/***/ "./src/app/associates/associates-list/associates-list.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/associates/associates-list/associates-list.component.css ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("mat-label {\n  color:black;\n  font-family:sans-serif;\n  font-style: italic;\n  \n  font-size:medium;\n  font-weight: bold;\n}\n\n.teamselectbtn{\n  margin-left: 20px;\n  display:inline-block;\n}\n\n.team-form{\n\n  padding:20px;\n  margin:10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXNzb2NpYXRlcy9hc3NvY2lhdGVzLWxpc3QvYXNzb2NpYXRlcy1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0VBQ1gsc0JBQXNCO0VBQ3RCLGtCQUFrQjs7RUFFbEIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixvQkFBb0I7QUFDdEI7O0FBR0E7O0VBRUUsWUFBWTtFQUNaLFdBQVc7QUFDYiIsImZpbGUiOiJzcmMvYXBwL2Fzc29jaWF0ZXMvYXNzb2NpYXRlcy1saXN0L2Fzc29jaWF0ZXMtbGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LWxhYmVsIHtcbiAgY29sb3I6YmxhY2s7XG4gIGZvbnQtZmFtaWx5OnNhbnMtc2VyaWY7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgXG4gIGZvbnQtc2l6ZTptZWRpdW07XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4udGVhbXNlbGVjdGJ0bntcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xufVxuXG5cbi50ZWFtLWZvcm17XG5cbiAgcGFkZGluZzoyMHB4O1xuICBtYXJnaW46MTBweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/associates/associates-list/associates-list.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/associates/associates-list/associates-list.component.ts ***!
  \*************************************************************************/
/*! exports provided: AssociatesListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssociatesListComponent", function() { return AssociatesListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var src_app_authentication_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/authentication/auth.service */ "./src/app/authentication/auth.service.ts");
/* harmony import */ var src_app_shared_helper_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/helper.service */ "./src/app/shared/helper.service.ts");
/* harmony import */ var _associates_edit_associates_edit_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../associates-edit/associates-edit.component */ "./src/app/associates/associates-edit/associates-edit.component.ts");
/* harmony import */ var _associates_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../associates.service */ "./src/app/associates/associates.service.ts");










let AssociatesListComponent = class AssociatesListComponent {
    constructor(as, ts, hs, ru, rs, dialog) {
        this.as = as;
        this.ts = ts;
        this.hs = hs;
        this.ru = ru;
        this.rs = rs;
        this.dialog = dialog;
        this.myControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
    }
    ngOnInit() {
        this.rs.routeReuseStrategy.shouldReuseRoute = () => false;
        this.ts.associatenameSelected.next('');
        this.as.user.subscribe((data) => {
            if (data) {
                this.add_associate = data.privilege;
            }
        });
        if (this.add_associate !== 'Read') {
            this.add_trigger = true;
        }
        this.ts.associatesStatus.subscribe((associates) => {
            this.associatesUpdated = associates;
        });
        this.filteredOptions =
            this.myControl.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(value => this._filter(value)));
    }
    _filter(value) {
        const filterValue = value.toLowerCase();
        this.associatesshow = this.ts.getAssociateNames();
        return this.associatesshow.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
    }
    Onselect(evt) {
        this.add_trigger = false;
        this.rs.navigate([evt.option.value], { relativeTo: this.ru });
        this.ts.associatenameSelected.next(evt.option.value);
        this.myControl.reset('');
        //this.myControl.get(evt.option.value).reset();
    }
    OnaddnewAssociate() {
        this.dialog.open(_associates_edit_associates_edit_component__WEBPACK_IMPORTED_MODULE_8__["AssociatesEditComponent"]);
    }
};
AssociatesListComponent.ctorParameters = () => [
    { type: src_app_authentication_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"] },
    { type: _associates_service__WEBPACK_IMPORTED_MODULE_9__["AssociateService"] },
    { type: src_app_shared_helper_service__WEBPACK_IMPORTED_MODULE_7__["HelperService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] }
];
AssociatesListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-associates-list',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./associates-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/associates/associates-list/associates-list.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./associates-list.component.css */ "./src/app/associates/associates-list/associates-list.component.css")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_authentication_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"], _associates_service__WEBPACK_IMPORTED_MODULE_9__["AssociateService"],
        src_app_shared_helper_service__WEBPACK_IMPORTED_MODULE_7__["HelperService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]])
], AssociatesListComponent);



/***/ }),

/***/ "./src/app/associates/associates.component.css":
/*!*****************************************************!*\
  !*** ./src/app/associates/associates.component.css ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Fzc29jaWF0ZXMvYXNzb2NpYXRlcy5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/associates/associates.component.ts":
/*!****************************************************!*\
  !*** ./src/app/associates/associates.component.ts ***!
  \****************************************************/
/*! exports provided: AssociatesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssociatesComponent", function() { return AssociatesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let AssociatesComponent = class AssociatesComponent {
    constructor() { }
    ngOnInit() {
    }
};
AssociatesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-associates',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./associates.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/associates/associates.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./associates.component.css */ "./src/app/associates/associates.component.css")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], AssociatesComponent);



/***/ }),

/***/ "./src/app/associates/associates.resolver.ts":
/*!***************************************************!*\
  !*** ./src/app/associates/associates.resolver.ts ***!
  \***************************************************/
/*! exports provided: AssociateResolverService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssociateResolverService", function() { return AssociateResolverService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _associates_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./associates.service */ "./src/app/associates/associates.service.ts");



let AssociateResolverService = class AssociateResolverService {
    constructor(as) {
        this.as = as;
    }
    resolve(ars, rss) {
        return this.as.getAssociates();
    }
};
AssociateResolverService.ctorParameters = () => [
    { type: _associates_service__WEBPACK_IMPORTED_MODULE_2__["AssociateService"] }
];
AssociateResolverService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_associates_service__WEBPACK_IMPORTED_MODULE_2__["AssociateService"]])
], AssociateResolverService);



/***/ }),

/***/ "./src/app/associates/associates.service.ts":
/*!**************************************************!*\
  !*** ./src/app/associates/associates.service.ts ***!
  \**************************************************/
/*! exports provided: AssociateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssociateService", function() { return AssociateService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





let AssociateService = class AssociateService {
    constructor(http) {
        this.http = http;
        this.associates = [
        //{aId:'3434',aname:'Narayanan',acogemailid:'Narayanan.p@cognizant.com',aBTemailid:'narayanan.nnp@bt.com',aContactno:'9452432432',aUIN: '611588690', aTeams:['Nexus','BSM']}
        ];
        this.associatenameSelected = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]('');
        this.associatesStatus = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](null);
    }
    getAssociates() {
        return this.http.get('https://mirrorview.herokuapp.com/api/associates')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((empdata) => {
            return empdata.map((info) => {
                return {
                    empId: info._id,
                    empname: info.empname,
                    empcogemailid: info.empcogemailid,
                    empBTemailid: info.empBTemailid,
                    empcontactno: info.empcontactno,
                    empUIN: info.empUIN,
                    empTeams: info.empTeams
                };
            });
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(emp_loaded => {
            this.associates = emp_loaded;
            //console.log(this.associates)
            this.associatesStatus.next(this.associates.slice());
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])((em) => {
            let errorMessage = em.error.error_msg;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(errorMessage);
        }));
    }
    getAssociateNames() {
        return this.associates.map(asname => asname.empname);
    }
    getAssociate(name1) {
        return this.associates.find(name => name.empname === name1);
    }
    getTeamAssociates(name) {
        return this.associates.filter(a => a.empTeams.find(b => b === name));
    }
    getExlcudeAssociateNames(name1) {
        if (name1) {
            this.ind = this.associates.indexOf(this.associates.find(name => name.empname === name1));
            //this.associates.splice(this.ind,1);
        }
        return this.associates.map(tname => tname.empname.toUpperCase());
    }
    deleteAssociate(name1) {
        return this.http.delete("https://mirrorview.herokuapp.com/api/associates/" + name1).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((empdata) => {
            return empdata.map((info) => {
                return {
                    empId: info._id,
                    empname: info.empname,
                    empcogemailid: info.empcogemailid,
                    empBTemailid: info.empBTemailid,
                    empcontactno: info.empcontactno,
                    empUIN: info.empUIN,
                    empTeams: info.empTeams
                };
            });
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(emp_loaded => {
            this.associates = emp_loaded;
            //console.log(this.associates)
            this.associatesStatus.next(this.associates.slice());
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])((em) => {
            console.log(em);
            let errorMessage = em.error.error;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(errorMessage);
        }));
    }
    updateAssociate(associate, associateContent) {
        return this.http.put('https://mirrorview.herokuapp.com/api/associates/' + associate, associateContent)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])((em) => {
            //console.log(em);
            let errorMessage = em.error.error;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(errorMessage);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((info) => {
            //console.log(info)
            return {
                empId: info._id,
                empname: info.empname,
                empcogemailid: info.empcogemailid,
                empBTemailid: info.empBTemailid,
                empcontactno: info.empcontactno,
                empUIN: info.empUIN,
                empTeams: info.empTeams
            };
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(emp_loaded => {
            this.associates[this.associates.indexOf(this.associates.find(as => as.empId === associateContent.empId))] = emp_loaded;
            //console.log(this.associates)
            this.associatesStatus.next(this.associates.slice());
        }));
    }
    addAssociate(associate) {
        return this.http.post('https://mirrorview.herokuapp.com/api/associates', associate)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])((em) => {
            let errorMessage = em.error.error;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(errorMessage);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((info) => {
            //console.log(info)
            return {
                empId: info._id,
                empname: info.empname,
                empcogemailid: info.empcogemailid,
                empBTemailid: info.empBTemailid,
                empcontactno: info.empcontactno,
                empUIN: info.empUIN,
                empTeams: info.empTeams
            };
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(emp_loaded => {
            this.associates.push(emp_loaded);
            //console.log(this.associates)
            this.associatesStatus.next(this.associates.slice());
        }));
    }
};
AssociateService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
AssociateService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({ providedIn: 'root' }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
], AssociateService);



/***/ }),

/***/ "./src/app/authentication/auth.guard.ts":
/*!**********************************************!*\
  !*** ./src/app/authentication/auth.guard.ts ***!
  \**********************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth.service */ "./src/app/authentication/auth.service.ts");





let AuthGuard = class AuthGuard {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    canActivate(route, router) {
        return this.authService.user.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(user => {
            //console.log("User is" + user)
            const isAuth = !!user;
            if (isAuth) {
                return true;
            }
            return this.router.createUrlTree(['/auth']);
        })
        // tap(isAuth => {
        //   if (!isAuth) {
        //     this.router.navigate(['/auth']);
        //   }
        // })
        );
    }
};
AuthGuard.ctorParameters = () => [
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
AuthGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], AuthGuard);



/***/ }),

/***/ "./src/app/authentication/auth.service.ts":
/*!************************************************!*\
  !*** ./src/app/authentication/auth.service.ts ***!
  \************************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _shared_helper_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/helper.service */ "./src/app/shared/helper.service.ts");
/* harmony import */ var _user_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./user.model */ "./src/app/authentication/user.model.ts");








let AuthService = class AuthService {
    constructor(http, hs, router) {
        this.http = http;
        this.hs = hs;
        this.router = router;
        this.user = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](null);
    }
    signup(uname, email, password, privilege) {
        //console.log("Final is" + email,password)
        return this.http
            .post(
        //   'https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyDljNKejmHVUmdVxq2bSsLg4eAKHfL6lPs',
        'https://mirrorview.herokuapp.com/api/users/signup', {
            username: uname,
            email: email,
            password: password,
            privilege: privilege
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(resData => {
            //console.log(resData);
        }));
    }
    login(email, password) {
        //console.log("Final is" + email,password)
        return this.http
            .post(
        //'https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyDljNKejmHVUmdVxq2bSsLg4eAKHfL6lPs',
        'https://mirrorview.herokuapp.com/api/users/login', {
            email: email,
            password: password
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(resData => {
            //console.log(resData);
            this.handleAuthentication(resData.username, resData.email, resData.privilege, resData.localId, resData.idToken, +resData.expiresIn);
        }));
    }
    autoLogin() {
        const userData = JSON.parse(localStorage.getItem('userData'));
        //console.log(userData);
        if (!userData) {
            return;
        }
        //console.log(userData);
        const loadedUser = new _user_model__WEBPACK_IMPORTED_MODULE_7__["User"](userData.username, userData.email, userData.privilege, userData.id, userData._token, new Date(userData._tokenExpirationDate));
        //console.log(loadedUser)
        if (loadedUser.token) {
            this.user.next(loadedUser);
            const expirationDuration = new Date(userData._tokenExpirationDate).getTime() -
                new Date().getTime();
            this.autoLogout(expirationDuration);
        }
    }
    logout() {
        this.user.next(null);
        this.router.navigate(['/auth']);
        localStorage.removeItem('userData');
        if (this.tokenExpirationTimer) {
            clearTimeout(this.tokenExpirationTimer);
        }
        this.tokenExpirationTimer = null;
    }
    autoLogout(expirationDuration) {
        this.tokenExpirationTimer = setTimeout(() => {
            this.logout();
        }, expirationDuration);
    }
    deleteUser(email) {
        return this.http
            .delete('https://mirrorview.herokuapp.com/api/users/' + email).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(resData => {
            //console.log(resData);
        }));
    }
    updatePassword(email, password) {
        return this.http
            .put('https://mirrorview.herokuapp.com/api/users/updatepassword', {
            email: email,
            password: password
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(resData => {
            //console.log(resData);
        }));
    }
    updateUser(email, privilege) {
        return this.http
            .put('https://mirrorview.herokuapp.com/api/users', {
            email: email,
            privilege: privilege
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(resData => {
            //console.log(resData);
        }));
    }
    handleAuthentication(username, email, privilege, userId, token, expiresIn) {
        const expirationDate = new Date(new Date().getTime() + expiresIn * 1000);
        const user = new _user_model__WEBPACK_IMPORTED_MODULE_7__["User"](username, email, privilege, userId, token, expirationDate);
        this.user.next(user);
        this.autoLogout(expiresIn * 1000);
        localStorage.setItem('userData', JSON.stringify(user));
        //console.log(user);
        this.router.navigate(['/begin']);
        this.hs.openSnackBar('Logged in', 'Hurray!');
    }
    handleError(errorRes) {
        let errorMessage = errorRes.error.error_msg;
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(errorMessage);
    }
};
AuthService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
    { type: _shared_helper_service__WEBPACK_IMPORTED_MODULE_6__["HelperService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
AuthService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _shared_helper_service__WEBPACK_IMPORTED_MODULE_6__["HelperService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
], AuthService);



/***/ }),

/***/ "./src/app/authentication/auth_interceptor.ts":
/*!****************************************************!*\
  !*** ./src/app/authentication/auth_interceptor.ts ***!
  \****************************************************/
/*! exports provided: AuthInterceptorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthInterceptorService", function() { return AuthInterceptorService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth.service */ "./src/app/authentication/auth.service.ts");





let AuthInterceptorService = class AuthInterceptorService {
    constructor(authService) {
        this.authService = authService;
    }
    intercept(req, next) {
        return this.authService.user.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["exhaustMap"])(user => {
            if (!user) {
                return next.handle(req);
            }
            const modifiedReq = req.clone({
                params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('auth', user.token)
            });
            return next.handle(modifiedReq);
        }));
    }
};
AuthInterceptorService.ctorParameters = () => [
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }
];
AuthInterceptorService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]])
], AuthInterceptorService);



/***/ }),

/***/ "./src/app/authentication/authentication.component.css":
/*!*************************************************************!*\
  !*** ./src/app/authentication/authentication.component.css ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".example-container .mat-form-field + .mat-form-field {\n    margin-left: 0.5rem;\n  }\n\n  .example-right-align {\n    text-align: right;\n  }\n\n  input.example-right-align::-webkit-outer-spin-button,\n  input.example-right-align::-webkit-inner-spin-button {\n    display: none;\n  }\n\n  input.example-right-align {\n    -moz-appearance: textfield;\n  }\n\n  .login-box{\n    margin: 15% 15% 25% 15%;\n    font-family: Helvetica, sans-serif;\n\n}\n\n  .example-card {\n    width:23rem;\n    background:rgba(0, 0, 0, 0.801);\n    color:white;\n    font-weight: bolder;\n    padding:0.932rem;\n  }\n\n  @media(min-width:40rem)\n  {\n    .login-box{\n      margin: 15% 15% 25% 35%;\n  \n  }\n  \n  .example-card {\n      width:26rem;\n    }\n  }\n\n  .loginbutton{\n    background:white;\n    color:black;\n    font-weight: bolder;\n    padding:0.125rem\n  }\n\n  mat-label{\n  \n  color:white;\n  font-size:medium;\n}\n\n  .example-header-image {\n    background-image: url('login-lock.png');\n    background-position: center;\n    background-size: cover;\n    padding:0.3125rem;\n  }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aGVudGljYXRpb24vYXV0aGVudGljYXRpb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLGlCQUFpQjtFQUNuQjs7RUFFQTs7SUFFRSxhQUFhO0VBQ2Y7O0VBRUE7SUFDRSwwQkFBMEI7RUFDNUI7O0VBQ0E7SUFDRSx1QkFBdUI7SUFDdkIsa0NBQWtDOztBQUV0Qzs7RUFFQTtJQUNJLFdBQVc7SUFDWCwrQkFBK0I7SUFDL0IsV0FBVztJQUNYLG1CQUFtQjtJQUNuQixnQkFBZ0I7RUFDbEI7O0VBRUE7O0lBRUU7TUFDRSx1QkFBdUI7O0VBRTNCOztFQUVBO01BQ0ksV0FBVztJQUNiO0VBQ0Y7O0VBQ0E7SUFDRSxnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLG1CQUFtQjtJQUNuQjtFQUNGOztFQUNGOztFQUVFLFdBQVc7RUFDWCxnQkFBZ0I7QUFDbEI7O0VBQ0U7SUFDRSx1Q0FBd0Q7SUFDeEQsMkJBQTJCO0lBQzNCLHNCQUFzQjtJQUN0QixpQkFBaUI7RUFDbkIiLCJmaWxlIjoic3JjL2FwcC9hdXRoZW50aWNhdGlvbi9hdXRoZW50aWNhdGlvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4YW1wbGUtY29udGFpbmVyIC5tYXQtZm9ybS1maWVsZCArIC5tYXQtZm9ybS1maWVsZCB7XG4gICAgbWFyZ2luLWxlZnQ6IDAuNXJlbTtcbiAgfVxuXG4gIC5leGFtcGxlLXJpZ2h0LWFsaWduIHtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgfVxuXG4gIGlucHV0LmV4YW1wbGUtcmlnaHQtYWxpZ246Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24sXG4gIGlucHV0LmV4YW1wbGUtcmlnaHQtYWxpZ246Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24ge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cblxuICBpbnB1dC5leGFtcGxlLXJpZ2h0LWFsaWduIHtcbiAgICAtbW96LWFwcGVhcmFuY2U6IHRleHRmaWVsZDtcbiAgfVxuICAubG9naW4tYm94e1xuICAgIG1hcmdpbjogMTUlIDE1JSAyNSUgMTUlO1xuICAgIGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG5cbn1cblxuLmV4YW1wbGUtY2FyZCB7XG4gICAgd2lkdGg6MjNyZW07XG4gICAgYmFja2dyb3VuZDpyZ2JhKDAsIDAsIDAsIDAuODAxKTtcbiAgICBjb2xvcjp3aGl0ZTtcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xuICAgIHBhZGRpbmc6MC45MzJyZW07XG4gIH1cblxuICBAbWVkaWEobWluLXdpZHRoOjQwcmVtKVxuICB7XG4gICAgLmxvZ2luLWJveHtcbiAgICAgIG1hcmdpbjogMTUlIDE1JSAyNSUgMzUlO1xuICBcbiAgfVxuICBcbiAgLmV4YW1wbGUtY2FyZCB7XG4gICAgICB3aWR0aDoyNnJlbTtcbiAgICB9XG4gIH1cbiAgLmxvZ2luYnV0dG9ue1xuICAgIGJhY2tncm91bmQ6d2hpdGU7XG4gICAgY29sb3I6YmxhY2s7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgICBwYWRkaW5nOjAuMTI1cmVtXG4gIH1cbm1hdC1sYWJlbHtcbiAgXG4gIGNvbG9yOndoaXRlO1xuICBmb250LXNpemU6bWVkaXVtO1xufVxuICAuZXhhbXBsZS1oZWFkZXItaW1hZ2Uge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnc3JjL2FwcC9waWN0dXJlcy9sb2dpbi1sb2NrLnBuZycpO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIHBhZGRpbmc6MC4zMTI1cmVtO1xuICB9XG4iXX0= */");

/***/ }),

/***/ "./src/app/authentication/authentication.component.ts":
/*!************************************************************!*\
  !*** ./src/app/authentication/authentication.component.ts ***!
  \************************************************************/
/*! exports provided: AuthenticationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationComponent", function() { return AuthenticationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _shared_helper_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/helper.service */ "./src/app/shared/helper.service.ts");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth.service */ "./src/app/authentication/auth.service.ts");





let AuthenticationComponent = class AuthenticationComponent {
    constructor(authService, router, hs) {
        this.authService = authService;
        this.router = router;
        this.hs = hs;
        this.isLoading = false;
        this.error = null;
    }
    onSubmit(form) {
        const email = form.value.email;
        const password = form.value.password;
        //console.log(email,password)
        let authObs;
        this.isLoading = true;
        authObs = this.authService.login(email, password);
        authObs.subscribe(resData => {
            //console.log(resData);
            this.isLoading = false;
        }, errorMessage => {
            this.error = errorMessage;
            this.hs.openSnackBar(errorMessage, 'Error');
            this.isLoading = false;
        });
        form.reset();
    }
    ngOnDestroy() {
        if (this.authObs) {
            this.authObs.unsubscribe();
        }
    }
};
AuthenticationComponent.ctorParameters = () => [
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _shared_helper_service__WEBPACK_IMPORTED_MODULE_3__["HelperService"] }
];
AuthenticationComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-authentication',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./authentication.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/authentication/authentication.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./authentication.component.css */ "./src/app/authentication/authentication.component.css")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _shared_helper_service__WEBPACK_IMPORTED_MODULE_3__["HelperService"]])
], AuthenticationComponent);



/***/ }),

/***/ "./src/app/authentication/user.model.ts":
/*!**********************************************!*\
  !*** ./src/app/authentication/user.model.ts ***!
  \**********************************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class User {
    constructor(username, email, privilege, id, _token, _tokenExpirationDate) {
        this.username = username;
        this.email = email;
        this.privilege = privilege;
        this.id = id;
        this._token = _token;
        this._tokenExpirationDate = _tokenExpirationDate;
    }
    get token() {
        if (!this._tokenExpirationDate || new Date() > this._tokenExpirationDate) {
            return null;
        }
        return this._token;
    }
}


/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".navbar{\n\n  background:rgba(0, 0, 0, 0.555);\n  color: rgb(255, 255, 255);\n  text-decoration: none;\n  margin:0;\n  vertical-align:middle;\n}\n\n.list-items {\n  margin:0;\n  padding:0;\n}\n\n.list-items a {\n  text-decoration: none;\n  color:white;\n}\n\n.userbutton {\n  line-height: 0;\n  font-weight: bold;\n}\n\n.list-items a:hover\n  {\n    color:black !important;\n    background-color: white;\nbox-shadow:white;\npadding:0.9375rem;\n\n  }\n\n.active {\n    color:black !important;\n    background-color: white;\nbox-shadow:white;\npadding:0.4375rem;\n  }\n\n.list-item {\n  padding:0.4375rem;\n  margin-top:0.225rem;\n  list-style:none;\n  font-family: Helvetica, sans-serif;\nfont-size: small;\nfont-weight: bold;\n}\n\n.img-logo{\n  width: 0.375rem;\n  height: 0.375rem;\n  border-radius: 20%;\n  overflow: hidden;\n  line-height: 0;\n\n  }\n\n@media(min-width: 32rem)\n  {\n  .special{\n    float:right;\n    margin-top:0.75rem ;\n    \n  }\n  \n  \n  .specialleft{\n    float:left;\n    \n  }\n  \n  \n\n.list-items a:hover\n{\n  color:black !important;\n  background-color: white;\nbox-shadow:white;\npadding:0.9375rem;\n\n}\n\n.active {\n  color:black !important;\n  background-color: white;\nbox-shadow:white;\npadding:0.4375rem;\n}\n\n\n.list-item {\n  display:inline-block;\npadding:0.4375rem;\nmargin-top:0.225rem;\nlist-style:none;\nfont-family: Helvetica, sans-serif;\nfont-size: small;\nfont-weight: bold;\n}\n\n.img-logo{\nwidth: 0.375rem;\nheight: 0.375rem;\nborder-radius: 20%;\noverflow: hidden;\nline-height: 0;\ndisplay:inline-block;\n}\n\n  }\n\n@media(min-width: 40rem)\n{\n.special{\n  float:right;\n  margin-top:0.75rem ;\n  \n}\n\n\n.specialleft{\n  float:left;\n  \n}\n\n\n.list-items a:hover\n  {\n    color:black !important;\n    background-color: white;\nbox-shadow:white;\npadding:0.9375rem;\n\n  }\n\n  .active {\n    color:black !important;\n    background-color: white;\nbox-shadow:white;\npadding:0.9375rem;\n  }\n\n\n.list-item {\n  display:inline-block;\n  padding:0.9375rem;\n  margin-top:0.625rem;\n  list-style:none;\n  font-family: Helvetica, sans-serif;\nfont-size: medium;\nfont-weight: bold;\n}\n\n.img-logo{\n  width: 2.875rem;\n  height: 1.875rem;\n  border-radius: 20%;\n  overflow: hidden;\n  line-height: 0;\n  display: inline-block;\n  }\n  \n}\n\n\n  \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztFQUVFLCtCQUErQjtFQUMvQix5QkFBeUI7RUFDekIscUJBQXFCO0VBQ3JCLFFBQVE7RUFDUixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxRQUFRO0VBQ1IsU0FBUztBQUNYOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLFdBQVc7QUFDYjs7QUFDQTtFQUNFLGNBQWM7RUFDZCxpQkFBaUI7QUFDbkI7O0FBR0E7O0lBRUksc0JBQXNCO0lBQ3RCLHVCQUF1QjtBQUMzQixnQkFBZ0I7QUFDaEIsaUJBQWlCOztFQUVmOztBQUVBO0lBQ0Usc0JBQXNCO0lBQ3RCLHVCQUF1QjtBQUMzQixnQkFBZ0I7QUFDaEIsaUJBQWlCO0VBQ2Y7O0FBR0Y7RUFDRSxpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixrQ0FBa0M7QUFDcEMsZ0JBQWdCO0FBQ2hCLGlCQUFpQjtBQUNqQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixjQUFjOztFQUVkOztBQUdBOztFQUVBO0lBQ0UsV0FBVztJQUNYLG1CQUFtQjs7RUFFckI7OztFQUdBO0lBQ0UsVUFBVTs7RUFFWjs7OztBQUlGOztFQUVFLHNCQUFzQjtFQUN0Qix1QkFBdUI7QUFDekIsZ0JBQWdCO0FBQ2hCLGlCQUFpQjs7QUFFakI7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsdUJBQXVCO0FBQ3pCLGdCQUFnQjtBQUNoQixpQkFBaUI7QUFDakI7OztBQUdBO0VBQ0Usb0JBQW9CO0FBQ3RCLGlCQUFpQjtBQUNqQixtQkFBbUI7QUFDbkIsZUFBZTtBQUNmLGtDQUFrQztBQUNsQyxnQkFBZ0I7QUFDaEIsaUJBQWlCO0FBQ2pCOztBQUVBO0FBQ0EsZUFBZTtBQUNmLGdCQUFnQjtBQUNoQixrQkFBa0I7QUFDbEIsZ0JBQWdCO0FBQ2hCLGNBQWM7QUFDZCxvQkFBb0I7QUFDcEI7O0VBRUU7O0FBS0Y7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsbUJBQW1COztBQUVyQjs7O0FBR0E7RUFDRSxVQUFVOztBQUVaOzs7QUFHQTs7SUFFSSxzQkFBc0I7SUFDdEIsdUJBQXVCO0FBQzNCLGdCQUFnQjtBQUNoQixpQkFBaUI7O0VBRWY7O0VBRUE7SUFDRSxzQkFBc0I7SUFDdEIsdUJBQXVCO0FBQzNCLGdCQUFnQjtBQUNoQixpQkFBaUI7RUFDZjs7O0FBR0Y7RUFDRSxvQkFBb0I7RUFDcEIsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2Ysa0NBQWtDO0FBQ3BDLGlCQUFpQjtBQUNqQixpQkFBaUI7QUFDakI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLHFCQUFxQjtFQUNyQjs7QUFFRiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uYXZiYXJ7XG5cbiAgYmFja2dyb3VuZDpyZ2JhKDAsIDAsIDAsIDAuNTU1KTtcbiAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBtYXJnaW46MDtcbiAgdmVydGljYWwtYWxpZ246bWlkZGxlO1xufVxuXG4ubGlzdC1pdGVtcyB7XG4gIG1hcmdpbjowO1xuICBwYWRkaW5nOjA7XG59XG5cbi5saXN0LWl0ZW1zIGEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOndoaXRlO1xufVxuLnVzZXJidXR0b24ge1xuICBsaW5lLWhlaWdodDogMDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cblxuLmxpc3QtaXRlbXMgYTpob3ZlclxuICB7XG4gICAgY29sb3I6YmxhY2sgIWltcG9ydGFudDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbmJveC1zaGFkb3c6d2hpdGU7XG5wYWRkaW5nOjAuOTM3NXJlbTtcblxuICB9XG5cbiAgLmFjdGl2ZSB7XG4gICAgY29sb3I6YmxhY2sgIWltcG9ydGFudDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbmJveC1zaGFkb3c6d2hpdGU7XG5wYWRkaW5nOjAuNDM3NXJlbTtcbiAgfVxuXG5cbi5saXN0LWl0ZW0ge1xuICBwYWRkaW5nOjAuNDM3NXJlbTtcbiAgbWFyZ2luLXRvcDowLjIyNXJlbTtcbiAgbGlzdC1zdHlsZTpub25lO1xuICBmb250LWZhbWlseTogSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuZm9udC1zaXplOiBzbWFsbDtcbmZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uaW1nLWxvZ297XG4gIHdpZHRoOiAwLjM3NXJlbTtcbiAgaGVpZ2h0OiAwLjM3NXJlbTtcbiAgYm9yZGVyLXJhZGl1czogMjAlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBsaW5lLWhlaWdodDogMDtcblxuICB9XG5cblxuICBAbWVkaWEobWluLXdpZHRoOiAzMnJlbSlcbiAge1xuICAuc3BlY2lhbHtcbiAgICBmbG9hdDpyaWdodDtcbiAgICBtYXJnaW4tdG9wOjAuNzVyZW0gO1xuICAgIFxuICB9XG4gIFxuICBcbiAgLnNwZWNpYWxsZWZ0e1xuICAgIGZsb2F0OmxlZnQ7XG4gICAgXG4gIH1cbiAgXG4gIFxuXG4ubGlzdC1pdGVtcyBhOmhvdmVyXG57XG4gIGNvbG9yOmJsYWNrICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuYm94LXNoYWRvdzp3aGl0ZTtcbnBhZGRpbmc6MC45Mzc1cmVtO1xuXG59XG5cbi5hY3RpdmUge1xuICBjb2xvcjpibGFjayAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbmJveC1zaGFkb3c6d2hpdGU7XG5wYWRkaW5nOjAuNDM3NXJlbTtcbn1cblxuXG4ubGlzdC1pdGVtIHtcbiAgZGlzcGxheTppbmxpbmUtYmxvY2s7XG5wYWRkaW5nOjAuNDM3NXJlbTtcbm1hcmdpbi10b3A6MC4yMjVyZW07XG5saXN0LXN0eWxlOm5vbmU7XG5mb250LWZhbWlseTogSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuZm9udC1zaXplOiBzbWFsbDtcbmZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uaW1nLWxvZ297XG53aWR0aDogMC4zNzVyZW07XG5oZWlnaHQ6IDAuMzc1cmVtO1xuYm9yZGVyLXJhZGl1czogMjAlO1xub3ZlcmZsb3c6IGhpZGRlbjtcbmxpbmUtaGVpZ2h0OiAwO1xuZGlzcGxheTppbmxpbmUtYmxvY2s7XG59XG5cbiAgfVxuICBcbiAgXG4gICAgXG5cbkBtZWRpYShtaW4td2lkdGg6IDQwcmVtKVxue1xuLnNwZWNpYWx7XG4gIGZsb2F0OnJpZ2h0O1xuICBtYXJnaW4tdG9wOjAuNzVyZW0gO1xuICBcbn1cblxuXG4uc3BlY2lhbGxlZnR7XG4gIGZsb2F0OmxlZnQ7XG4gIFxufVxuXG5cbi5saXN0LWl0ZW1zIGE6aG92ZXJcbiAge1xuICAgIGNvbG9yOmJsYWNrICFpbXBvcnRhbnQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG5ib3gtc2hhZG93OndoaXRlO1xucGFkZGluZzowLjkzNzVyZW07XG5cbiAgfVxuXG4gIC5hY3RpdmUge1xuICAgIGNvbG9yOmJsYWNrICFpbXBvcnRhbnQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG5ib3gtc2hhZG93OndoaXRlO1xucGFkZGluZzowLjkzNzVyZW07XG4gIH1cblxuXG4ubGlzdC1pdGVtIHtcbiAgZGlzcGxheTppbmxpbmUtYmxvY2s7XG4gIHBhZGRpbmc6MC45Mzc1cmVtO1xuICBtYXJnaW4tdG9wOjAuNjI1cmVtO1xuICBsaXN0LXN0eWxlOm5vbmU7XG4gIGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG5mb250LXNpemU6IG1lZGl1bTtcbmZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uaW1nLWxvZ297XG4gIHdpZHRoOiAyLjg3NXJlbTtcbiAgaGVpZ2h0OiAxLjg3NXJlbTtcbiAgYm9yZGVyLXJhZGl1czogMjAlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBsaW5lLWhlaWdodDogMDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB9XG4gIFxufVxuXG5cbiAgIl19 */");

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _authentication_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../authentication/auth.service */ "./src/app/authentication/auth.service.ts");
/* harmony import */ var _shared_helper_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/helper.service */ "./src/app/shared/helper.service.ts");





let HeaderComponent = class HeaderComponent {
    constructor(as, hs, router) {
        this.as = as;
        this.hs = hs;
        this.router = router;
        this.isAuthenticated = false;
        this.admin_role = '';
        this.admin_trigger = false;
        this.uname = '';
        this.email = '';
        this.pwd = '';
    }
    ngOnInit() {
        this.userSub = this.as.user.subscribe(user => {
            this.isAuthenticated = !!user;
        });
        this.as.user.subscribe((data) => {
            if (data) {
                if (this.isAuthenticated) {
                    this.uname = data.username;
                    this.admin_role = data.privilege;
                    this.email = data.email;
                    if (this.admin_role === 'Admin') {
                        this.admin_trigger = true;
                    }
                }
            }
        });
    }
    OnLogout() {
        this.admin_trigger = false;
        this.as.logout();
    }
    onSubmit(form) {
        this.pwd = form.value.password;
        //console.log(form)
        this.as.updatePassword(this.email, this.pwd).subscribe(resData => {
            //console.log(resData);
            this.hs.openSnackBar('Login again with updated Password', 'Hurray!');
            this.OnLogout();
        }, errorMessage => {
            //console.log(errorMessage)
            this.hs.openSnackBar(errorMessage, 'Error');
        });
        form.reset();
    }
    MakeStatic(event) {
        event.stopPropagation();
    }
    ngOnDestroy() {
        this.userSub.unsubscribe();
        if (this.authObs) {
            this.authObs.unsubscribe();
        }
    }
};
HeaderComponent.ctorParameters = () => [
    { type: _authentication_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _shared_helper_service__WEBPACK_IMPORTED_MODULE_4__["HelperService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
HeaderComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-header',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_authentication_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _shared_helper_service__WEBPACK_IMPORTED_MODULE_4__["HelperService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], HeaderComponent);



/***/ }),

/***/ "./src/app/issues-collection/issues-collection.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/issues-collection/issues-collection.component.css ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n  tr.example-detail-row {\n    height: 0;\n  }\n\n  tr.example-issue-row:not(.example-expanded-row):hover {\n    background: whitesmoke;\n  }\n\n  tr.example-issue-row:not(.example-expanded-row):active {\n    background: #efefef;\n  }\n\n  .example-issue-row td {\n    border-bottom-width: 0;\n  }\n\n  .issue-detail {\n    overflow: hidden;\n  }\n\n  .issue-description{\n    width:100%;\n\n  }\n\n  .issuedesc{\n    font-size:small;\n    font-family:Georgia;\n  }\n\n  table {\n  width: 100%;\n  background:black;\n  color:white;\n  table-layout: fixed;\n}\n\n  .gg {\n  display:none;\n}\n\n  mat-paginator {\n\n  background:transparent;\n  color:black;\n}\n\n  .matInput {\n  width:70%;\n}\n\n  td{\n  width:5%;\ncolor:White;\noverflow: hidden;\nfont-size:x-small;\n  text-overflow: ellipsis;\n  word-wrap: break-word;\n  padding-right:0;\n}\n\n  th {\n  width:5%;\n  overflow: hidden;\n  font-size:small;\n  text-overflow: ellipsis;\n  word-wrap: break-word;\n  color:White;\n  font-weight: bold;\n}\n\n  mat-label {\n  color:black;\n  font-family:sans-serif;\n  font-style: italic;\n\n  font-size:small;\n  font-weight: bold;\n}\n\n  .mat-form-field {\n\n  width: 50%;\n}\n\n  button {\n  display: inline-block;\n  margin:0;\n  padding:0;\n}\n\n  .mat-column-expandedDetail {\n  flex:none;\n  width:10%\n}\n\n  .mat-icon{\n  color:black;\n  height:0.932rem !important;\n  width:0.932rem !important;\n  font-size:0.932rem !important;\n}\n\n  .p1{\n  color:black;\n  height:1.932rem !important;\n  width:1.932rem !important;\n  font-size:1.932rem !important;\n}\n\n  th.mat-header-cell:last-of-type, td.mat-cell:last-of-type, td.mat-footer-cell:last-of-type\n{\n  padding-right:0;\n}\n\n  @media(min-width:40rem)\n\n{\n  mat-label {\n    color:black;\n    font-family:sans-serif;\n    font-style: italic;\n  \n    font-size:medium;\n    font-weight: bold;\n  }\n  .mat-form-field {\n\n    width: 30%;\n  }\ntd{\n  width:25%;\ncolor:White;\nfont-size:small;\noverflow: hidden;\n  text-overflow: ellipsis;\n  word-wrap: break-word;\n}\n\nth {\n  width:25%;\n  overflow: hidden;\n  font-size:small;\n  text-overflow: ellipsis;\n  word-wrap: break-word;\n  color:White;\n  font-weight: bold;\n}\n\nbutton {\n  display: inline-block;\n  margin:0.125rem;\n  padding:0.125rem;\n}\n.mat-column-expandedDetail {\n  flex:none;\n  width:10%\n}\n.mat-icon{\n  color:black;\n  height:1.5625rem !important;\n  width:1.5625rem !important;\n  font-size:1.5625rem !important;\n}\n\n.issuedesc{\n  font-size:medium;\n  font-family:Georgia;\n}\n\n.matInput {\n  width:40%;\n}\n\n\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaXNzdWVzLWNvbGxlY3Rpb24vaXNzdWVzLWNvbGxlY3Rpb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0VBQ0U7SUFDRSxTQUFTO0VBQ1g7O0VBRUE7SUFDRSxzQkFBc0I7RUFDeEI7O0VBRUE7SUFDRSxtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxzQkFBc0I7RUFDeEI7O0VBRUE7SUFDRSxnQkFBZ0I7RUFDbEI7O0VBQ0E7SUFDRSxVQUFVOztFQUVaOztFQUNBO0lBQ0UsZUFBZTtJQUNmLG1CQUFtQjtFQUNyQjs7RUFHRjtFQUNFLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLG1CQUFtQjtBQUNyQjs7RUFFQTtFQUNFLFlBQVk7QUFDZDs7RUFFQTs7RUFFRSxzQkFBc0I7RUFDdEIsV0FBVztBQUNiOztFQUVBO0VBQ0UsU0FBUztBQUNYOztFQUVBO0VBQ0UsUUFBUTtBQUNWLFdBQVc7QUFDWCxnQkFBZ0I7QUFDaEIsaUJBQWlCO0VBQ2YsdUJBQXVCO0VBQ3ZCLHFCQUFxQjtFQUNyQixlQUFlO0FBQ2pCOztFQUVBO0VBQ0UsUUFBUTtFQUNSLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsdUJBQXVCO0VBQ3ZCLHFCQUFxQjtFQUNyQixXQUFXO0VBQ1gsaUJBQWlCO0FBQ25COztFQUVBO0VBQ0UsV0FBVztFQUNYLHNCQUFzQjtFQUN0QixrQkFBa0I7O0VBRWxCLGVBQWU7RUFDZixpQkFBaUI7QUFDbkI7O0VBRUE7O0VBRUUsVUFBVTtBQUNaOztFQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLFFBQVE7RUFDUixTQUFTO0FBQ1g7O0VBQ0E7RUFDRSxTQUFTO0VBQ1Q7QUFDRjs7RUFDQTtFQUNFLFdBQVc7RUFDWCwwQkFBMEI7RUFDMUIseUJBQXlCO0VBQ3pCLDZCQUE2QjtBQUMvQjs7RUFDQTtFQUNFLFdBQVc7RUFDWCwwQkFBMEI7RUFDMUIseUJBQXlCO0VBQ3pCLDZCQUE2QjtBQUMvQjs7RUFDQTs7RUFFRSxlQUFlO0FBQ2pCOztFQUVBOzs7RUFHRTtJQUNFLFdBQVc7SUFDWCxzQkFBc0I7SUFDdEIsa0JBQWtCOztJQUVsQixnQkFBZ0I7SUFDaEIsaUJBQWlCO0VBQ25CO0VBQ0E7O0lBRUUsVUFBVTtFQUNaO0FBQ0Y7RUFDRSxTQUFTO0FBQ1gsV0FBVztBQUNYLGVBQWU7QUFDZixnQkFBZ0I7RUFDZCx1QkFBdUI7RUFDdkIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsU0FBUztFQUNULGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsdUJBQXVCO0VBQ3ZCLHFCQUFxQjtFQUNyQixXQUFXO0VBQ1gsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLFNBQVM7RUFDVDtBQUNGO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsMkJBQTJCO0VBQzNCLDBCQUEwQjtFQUMxQiw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsU0FBUztBQUNYOzs7QUFHQSIsImZpbGUiOiJzcmMvYXBwL2lzc3Vlcy1jb2xsZWN0aW9uL2lzc3Vlcy1jb2xsZWN0aW9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgdHIuZXhhbXBsZS1kZXRhaWwtcm93IHtcbiAgICBoZWlnaHQ6IDA7XG4gIH1cblxuICB0ci5leGFtcGxlLWlzc3VlLXJvdzpub3QoLmV4YW1wbGUtZXhwYW5kZWQtcm93KTpob3ZlciB7XG4gICAgYmFja2dyb3VuZDogd2hpdGVzbW9rZTtcbiAgfVxuXG4gIHRyLmV4YW1wbGUtaXNzdWUtcm93Om5vdCguZXhhbXBsZS1leHBhbmRlZC1yb3cpOmFjdGl2ZSB7XG4gICAgYmFja2dyb3VuZDogI2VmZWZlZjtcbiAgfVxuXG4gIC5leGFtcGxlLWlzc3VlLXJvdyB0ZCB7XG4gICAgYm9yZGVyLWJvdHRvbS13aWR0aDogMDtcbiAgfVxuXG4gIC5pc3N1ZS1kZXRhaWwge1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gIH1cbiAgLmlzc3VlLWRlc2NyaXB0aW9ue1xuICAgIHdpZHRoOjEwMCU7XG5cbiAgfVxuICAuaXNzdWVkZXNje1xuICAgIGZvbnQtc2l6ZTpzbWFsbDtcbiAgICBmb250LWZhbWlseTpHZW9yZ2lhO1xuICB9XG5cblxudGFibGUge1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZDpibGFjaztcbiAgY29sb3I6d2hpdGU7XG4gIHRhYmxlLWxheW91dDogZml4ZWQ7XG59XG5cbi5nZyB7XG4gIGRpc3BsYXk6bm9uZTtcbn1cblxubWF0LXBhZ2luYXRvciB7XG5cbiAgYmFja2dyb3VuZDp0cmFuc3BhcmVudDtcbiAgY29sb3I6YmxhY2s7XG59XG5cbi5tYXRJbnB1dCB7XG4gIHdpZHRoOjcwJTtcbn1cblxudGR7XG4gIHdpZHRoOjUlO1xuY29sb3I6V2hpdGU7XG5vdmVyZmxvdzogaGlkZGVuO1xuZm9udC1zaXplOngtc21hbGw7XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG4gIHBhZGRpbmctcmlnaHQ6MDtcbn1cblxudGgge1xuICB3aWR0aDo1JTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgZm9udC1zaXplOnNtYWxsO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICBjb2xvcjpXaGl0ZTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbm1hdC1sYWJlbCB7XG4gIGNvbG9yOmJsYWNrO1xuICBmb250LWZhbWlseTpzYW5zLXNlcmlmO1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG5cbiAgZm9udC1zaXplOnNtYWxsO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLm1hdC1mb3JtLWZpZWxkIHtcblxuICB3aWR0aDogNTAlO1xufVxuXG5idXR0b24ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbjowO1xuICBwYWRkaW5nOjA7XG59XG4ubWF0LWNvbHVtbi1leHBhbmRlZERldGFpbCB7XG4gIGZsZXg6bm9uZTtcbiAgd2lkdGg6MTAlXG59XG4ubWF0LWljb257XG4gIGNvbG9yOmJsYWNrO1xuICBoZWlnaHQ6MC45MzJyZW0gIWltcG9ydGFudDtcbiAgd2lkdGg6MC45MzJyZW0gIWltcG9ydGFudDtcbiAgZm9udC1zaXplOjAuOTMycmVtICFpbXBvcnRhbnQ7XG59XG4ucDF7XG4gIGNvbG9yOmJsYWNrO1xuICBoZWlnaHQ6MS45MzJyZW0gIWltcG9ydGFudDtcbiAgd2lkdGg6MS45MzJyZW0gIWltcG9ydGFudDtcbiAgZm9udC1zaXplOjEuOTMycmVtICFpbXBvcnRhbnQ7XG59XG50aC5tYXQtaGVhZGVyLWNlbGw6bGFzdC1vZi10eXBlLCB0ZC5tYXQtY2VsbDpsYXN0LW9mLXR5cGUsIHRkLm1hdC1mb290ZXItY2VsbDpsYXN0LW9mLXR5cGVcbntcbiAgcGFkZGluZy1yaWdodDowO1xufVxuXG5AbWVkaWEobWluLXdpZHRoOjQwcmVtKVxuXG57XG4gIG1hdC1sYWJlbCB7XG4gICAgY29sb3I6YmxhY2s7XG4gICAgZm9udC1mYW1pbHk6c2Fucy1zZXJpZjtcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gIFxuICAgIGZvbnQtc2l6ZTptZWRpdW07XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIH1cbiAgLm1hdC1mb3JtLWZpZWxkIHtcblxuICAgIHdpZHRoOiAzMCU7XG4gIH1cbnRke1xuICB3aWR0aDoyNSU7XG5jb2xvcjpXaGl0ZTtcbmZvbnQtc2l6ZTpzbWFsbDtcbm92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG59XG5cbnRoIHtcbiAgd2lkdGg6MjUlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBmb250LXNpemU6c21hbGw7XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG4gIGNvbG9yOldoaXRlO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuYnV0dG9uIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW46MC4xMjVyZW07XG4gIHBhZGRpbmc6MC4xMjVyZW07XG59XG4ubWF0LWNvbHVtbi1leHBhbmRlZERldGFpbCB7XG4gIGZsZXg6bm9uZTtcbiAgd2lkdGg6MTAlXG59XG4ubWF0LWljb257XG4gIGNvbG9yOmJsYWNrO1xuICBoZWlnaHQ6MS41NjI1cmVtICFpbXBvcnRhbnQ7XG4gIHdpZHRoOjEuNTYyNXJlbSAhaW1wb3J0YW50O1xuICBmb250LXNpemU6MS41NjI1cmVtICFpbXBvcnRhbnQ7XG59XG5cbi5pc3N1ZWRlc2N7XG4gIGZvbnQtc2l6ZTptZWRpdW07XG4gIGZvbnQtZmFtaWx5Okdlb3JnaWE7XG59XG5cbi5tYXRJbnB1dCB7XG4gIHdpZHRoOjQwJTtcbn1cblxuXG59Il19 */");

/***/ }),

/***/ "./src/app/issues-collection/issues-collection.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/issues-collection/issues-collection.component.ts ***!
  \******************************************************************/
/*! exports provided: IssuesCollectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IssuesCollectionComponent", function() { return IssuesCollectionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sort.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _issues_edit_issues_edit_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../issues-edit/issues-edit.component */ "./src/app/issues-edit/issues-edit.component.ts");
/* harmony import */ var _shared_helper_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../shared/helper.service */ "./src/app/shared/helper.service.ts");
/* harmony import */ var _teams_team_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../teams/team.service */ "./src/app/teams/team.service.ts");
/* harmony import */ var _issues_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./issues_service */ "./src/app/issues-collection/issues_service.ts");












let IssuesCollectionComponent = class IssuesCollectionComponent {
    constructor(as, ts, hs, rs, ru, dialog) {
        this.as = as;
        this.ts = ts;
        this.hs = hs;
        this.rs = rs;
        this.ru = ru;
        this.dialog = dialog;
        this.enable_edit = false;
        this.columnsToDisplay = ['issueId', 'issue_title', 'issue_date', 'issue_type', 'issue_status'];
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatTableDataSource"](this.issues_list);
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.ru.params.subscribe((ps) => {
                if (ps['name']) {
                    this.tname = ps['name'];
                }
            });
            this.issues_list = yield this.as.getIssues(this.tname).toPromise();
            this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatTableDataSource"](this.issues_list);
            this.dataSource.paginator = this.paginator;
            this.dataSource.sort = this.sort;
        });
    }
    applyFilter(event) {
        const filterValue = event.target.value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    }
    onAddIssue() {
        this.ts.teamnameSelected.next(this.tname);
        this.dialog.open(_issues_edit_issues_edit_component__WEBPACK_IMPORTED_MODULE_8__["IssuesEditComponent"]);
    }
    OneditIssue(row) {
        this.ts.teamnameSelected.next(this.tname);
        this.as.issue_titleSelected.next(row);
        this.dialog.open(_issues_edit_issues_edit_component__WEBPACK_IMPORTED_MODULE_8__["IssuesEditComponent"]);
    }
    OndeleteIssue(row) {
        this.as.deleteIssue(row.issueId).subscribe(emp_loaded => {
            this.hs.openSnackBar("Issue Deleted", "Success");
            this.rs.navigate(['../'], { relativeTo: this.ru });
        }, errorMessage => {
            this.hs.openSnackBar('errorMessage', 'Error');
        });
    }
};
IssuesCollectionComponent.ctorParameters = () => [
    { type: _issues_service__WEBPACK_IMPORTED_MODULE_11__["IssuesService"] },
    { type: _teams_team_service__WEBPACK_IMPORTED_MODULE_10__["TeamService"] },
    { type: _shared_helper_service__WEBPACK_IMPORTED_MODULE_9__["HelperService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"])
], IssuesCollectionComponent.prototype, "paginator", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])(_angular_material_sort__WEBPACK_IMPORTED_MODULE_5__["MatSort"]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_material_sort__WEBPACK_IMPORTED_MODULE_5__["MatSort"])
], IssuesCollectionComponent.prototype, "sort", void 0);
IssuesCollectionComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-issues-collection',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./issues-collection.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/issues-collection/issues-collection.component.html")).default,
        animations: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('detailExpand', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('collapsed, void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ height: '0px' })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('expanded', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ height: '*' })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('expanded <=> collapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('expanded <=> void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('225ms cubic-bezier(0.4, 0.0, 0.2, 1)'))])
        ],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./issues-collection.component.css */ "./src/app/issues-collection/issues-collection.component.css")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_issues_service__WEBPACK_IMPORTED_MODULE_11__["IssuesService"], _teams_team_service__WEBPACK_IMPORTED_MODULE_10__["TeamService"], _shared_helper_service__WEBPACK_IMPORTED_MODULE_9__["HelperService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]])
], IssuesCollectionComponent);



/***/ }),

/***/ "./src/app/issues-collection/issues_service.ts":
/*!*****************************************************!*\
  !*** ./src/app/issues-collection/issues_service.ts ***!
  \*****************************************************/
/*! exports provided: IssuesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IssuesService", function() { return IssuesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





let IssuesService = class IssuesService {
    constructor(http) {
        this.http = http;
        this.issues = [];
        this.issue_titleSelected = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](null);
        this.issuesStatus = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](null);
    }
    getIssues(team) {
        return this.http.get("https://mirrorview.herokuapp.com/api/issues/" + team)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((issuedata) => {
            return issuedata.map((info) => {
                return {
                    issueId: info.issueId,
                    issue_title: info.issue_title,
                    issue_desc: info.issue_desc,
                    issue_date: new Date(info.issue_date),
                    issue_type: info.issue_type,
                    related_team: info.related_team,
                    issue_status: info.issue_status,
                    issue_updates: info.issue_updates
                };
            });
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(issue_loaded => {
            this.issues = issue_loaded;
            this.issuesStatus.next(this.issues.slice());
        }));
    }
    getIssuesNames() {
        console.log("asso is " + this.issues);
        return this.issues.map(asname => asname.issue_title);
    }
    getIssue(name1) {
        return this.issues.find(name => name.issue_title === name1);
    }
    getExlcudeIssuesNames(name1) {
        if (name1) {
            this.ind = this.issues.indexOf(this.issues.find(name => name.issue_title === name1));
            //this.issues.splice(this.ind,1);
        }
        return this.issues.map(tname => tname.issue_title.toUpperCase());
    }
    deleteIssue(issueid) {
        return this.http.delete("https://mirrorview.herokuapp.com/api/issues/" + issueid)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((issuedata) => {
            return issuedata.map((info) => {
                return {
                    issueId: info.issueId,
                    issue_title: info.issue_title,
                    issue_desc: info.issue_desc,
                    issue_date: new Date(info.issue_date),
                    issue_type: info.issue_type,
                    related_team: info.related_team,
                    issue_status: info.issue_status,
                    issue_updates: info.issue_updates
                };
            });
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(issue_loaded => {
            this.issues = issue_loaded;
            this.issuesStatus.next(this.issues.slice());
        }));
    }
    updateIssue(issueid, issueContent) {
        return this.http.put('https://mirrorview.herokuapp.com/api/issues/' + issueid, issueContent)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((info) => {
            return {
                issueId: info.issueId,
                issue_title: info.issue_title,
                issue_desc: info.issue_desc,
                issue_date: new Date(info.issue_date),
                issue_type: info.issue_type,
                related_team: info.related_team,
                issue_status: info.issue_status,
                issue_updates: info.issue_updates
            };
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(issue_loaded => {
            this.issues[this.issues.indexOf(this.issues.find(name => name.issueId === issueid))] = issue_loaded;
            this.issuesStatus.next(this.issues.slice());
        }));
    }
    addIssue(issue) {
        return this.http.post('https://mirrorview.herokuapp.com/api/issues', issue)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((info) => {
            return {
                issueId: info.issueId,
                issue_title: info.issue_title,
                issue_desc: info.issue_desc,
                issue_date: new Date(info.issue_date),
                issue_type: info.issue_type,
                related_team: info.related_team,
                issue_status: info.issue_status,
                issue_updates: info.issue_updates
            };
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(issue_loaded => {
            this.issues.push(issue_loaded);
            this.issuesStatus.next(this.issues.slice());
        }));
    }
};
IssuesService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
IssuesService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({ providedIn: 'root' }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
], IssuesService);



/***/ }),

/***/ "./src/app/issues-edit/issues-edit.component.css":
/*!*******************************************************!*\
  !*** ./src/app/issues-edit/issues-edit.component.css ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("td{\r\n    display: inline-block;\r\n}\r\n\r\nmat-dialog-content{\r\n    min-height:60rem;\r\n    padding-bottom:0;\r\n}\r\n\r\n.example-full-width{\r\n    width:100%\r\n}\r\n\r\n@media(min-width:40rem)\r\n{\r\n\r\ntd{\r\ndisplay: inline-block;\r\n}\r\n\r\nmat-dialog-content{\r\n    min-height:50rem;\r\n    padding-bottom:0;\r\n}\r\n.example-full-width{\r\n    width:100%\r\n}\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaXNzdWVzLWVkaXQvaXNzdWVzLWVkaXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixnQkFBZ0I7QUFDcEI7O0FBQ0E7SUFDSTtBQUNKOztBQUNBOzs7QUFHQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJO0FBQ0o7QUFDQSIsImZpbGUiOiJzcmMvYXBwL2lzc3Vlcy1lZGl0L2lzc3Vlcy1lZGl0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0ZHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG5cclxubWF0LWRpYWxvZy1jb250ZW50e1xyXG4gICAgbWluLWhlaWdodDo2MHJlbTtcclxuICAgIHBhZGRpbmctYm90dG9tOjA7XHJcbn1cclxuLmV4YW1wbGUtZnVsbC13aWR0aHtcclxuICAgIHdpZHRoOjEwMCVcclxufVxyXG5AbWVkaWEobWluLXdpZHRoOjQwcmVtKVxyXG57XHJcblxyXG50ZHtcclxuZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcblxyXG5tYXQtZGlhbG9nLWNvbnRlbnR7XHJcbiAgICBtaW4taGVpZ2h0OjUwcmVtO1xyXG4gICAgcGFkZGluZy1ib3R0b206MDtcclxufVxyXG4uZXhhbXBsZS1mdWxsLXdpZHRoe1xyXG4gICAgd2lkdGg6MTAwJVxyXG59XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/issues-edit/issues-edit.component.ts":
/*!******************************************************!*\
  !*** ./src/app/issues-edit/issues-edit.component.ts ***!
  \******************************************************/
/*! exports provided: IssuesEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IssuesEditComponent", function() { return IssuesEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _issues_collection_issues_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../issues-collection/issues_service */ "./src/app/issues-collection/issues_service.ts");
/* harmony import */ var _shared_helper_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/helper.service */ "./src/app/shared/helper.service.ts");
/* harmony import */ var _teams_team_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../teams/team.service */ "./src/app/teams/team.service.ts");







let IssuesEditComponent = class IssuesEditComponent {
    constructor(ts, ru, rs, hs, tservice) {
        this.ts = ts;
        this.ru = ru;
        this.rs = rs;
        this.hs = hs;
        this.tservice = tservice;
        this.edit_trigger = false;
        this.today = new Date();
    }
    ngOnInit() {
        this.edit_trigger = false;
        this.tservice.teamnameSelected.subscribe((name) => {
            this.tname = name;
            //console.log("ttname is" + name)
        });
        this.ts.issue_titleSelected.subscribe((sel_issue) => {
            this.issueSel = sel_issue;
        });
        if (this.issueSel) {
            this.edit_trigger = true;
        }
        this.initForm();
    }
    initForm() {
        let issue_title = '';
        let issue_desc = '';
        let issue_date = new Date('');
        let issue_type = '';
        let related_team = '';
        let issue_status = '';
        let issue_updates = '';
        if (this.edit_trigger) {
            issue_title = this.issueSel.issue_title;
            issue_date = this.issueSel.issue_date;
            issue_type = this.issueSel.issue_type;
            related_team = this.issueSel.related_team;
            issue_status = this.issueSel.issue_status;
            issue_desc = this.issueSel.issue_desc;
            issue_updates = this.issueSel.issue_updates;
        }
        this.issue_titles = this.ts.getExlcudeIssuesNames();
        this.issuesForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            issue_title: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](issue_title, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            issue_date: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](issue_date, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            issue_type: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](issue_type, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            related_team: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](related_team),
            issue_status: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](issue_status, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            issue_desc: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](issue_desc, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            issue_updates: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](issue_updates)
        });
    }
    forbiddennames(control) {
        if (this.issue_titles.indexOf(control.value.toUpperCase()) !== -1)
            return { 'nameforbid': true };
        else
            return null;
    }
    OnSubmit() {
        if (this.edit_trigger) {
            this.ts.updateIssue(this.issueSel.issueId, this.issuesForm.value).subscribe(emp_loaded => {
                this.hs.openSnackBar("Issue Details Updated", "Success");
                this.rs.navigate(['../teams'], { relativeTo: this.ru });
            }, errorMessage => {
                this.hs.openSnackBar('errorMessage', 'Error');
            });
        }
        else {
            this.issuesForm.patchValue({ related_team: this.tname });
            this.ts.addIssue(this.issuesForm.value).subscribe(emp_loaded => {
                this.hs.openSnackBar("New Issue Added", "Success");
                this.rs.navigate(['../teams'], { relativeTo: this.ru });
            }, errorMessage => {
                this.hs.openSnackBar('errorMessage', 'Error');
            });
        }
        this.ts.issue_titleSelected.next(null);
    }
};
IssuesEditComponent.ctorParameters = () => [
    { type: _issues_collection_issues_service__WEBPACK_IMPORTED_MODULE_4__["IssuesService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _shared_helper_service__WEBPACK_IMPORTED_MODULE_5__["HelperService"] },
    { type: _teams_team_service__WEBPACK_IMPORTED_MODULE_6__["TeamService"] }
];
IssuesEditComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-issues-edit',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./issues-edit.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/issues-edit/issues-edit.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./issues-edit.component.css */ "./src/app/issues-edit/issues-edit.component.css")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_issues_collection_issues_service__WEBPACK_IMPORTED_MODULE_4__["IssuesService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _shared_helper_service__WEBPACK_IMPORTED_MODULE_5__["HelperService"], _teams_team_service__WEBPACK_IMPORTED_MODULE_6__["TeamService"]])
], IssuesEditComponent);



/***/ }),

/***/ "./src/app/oncall/oncall.service.ts":
/*!******************************************!*\
  !*** ./src/app/oncall/oncall.service.ts ***!
  \******************************************/
/*! exports provided: oncallService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "oncallService", function() { return oncallService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





let oncallService = class oncallService {
    constructor(http) {
        this.http = http;
        this.oncall = [];
        this.oncallDateSelected = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](null);
        this.oncallStatus = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](null);
    }
    getoncall(team) {
        return this.http.post("https://mirrorview.herokuapp.com/api/oncall/getdates", team)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((oncalldata) => {
            return oncalldata.map((info) => {
                return {
                    oncallId: info._id,
                    oncallDate: new Date(info.oncallDate),
                    oncallPrimary: info.oncallPrimary,
                    oncallSecondary: info.oncallSecondary,
                    oncallPrimaryEmail: info.oncallPrimaryEmail,
                    oncallPrimaryContact: info.oncallPrimaryContact,
                    oncallSecondaryEmail: info.oncallSecondaryEmail,
                    oncallSecondaryContact: info.oncallSecondaryContact
                };
            });
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(oncall_loaded => {
            this.oncall = oncall_loaded;
            //console.log(oncall_loaded)
            this.oncallStatus.next(this.oncall.slice());
        }));
    }
    getoncallNames() {
        console.log("asso is " + this.oncall);
        return this.oncall.map(asname => asname.oncallDate);
    }
    getExlcudeoncallNames(name1) {
        if (name1) {
            this.ind = this.oncall.indexOf(this.oncall.find(name => name.oncallDate === name1));
            //this.oncall.splice(this.ind,1);
        }
        return this.oncall.map(tname => tname.oncallDate);
    }
    updateoncall(oncallContent) {
        return this.http.put('https://mirrorview.herokuapp.com/api/oncall/', oncallContent)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((oncalldata) => {
            return oncalldata.map((info) => {
                return {
                    oncallId: info._id,
                    oncallDate: new Date(info.oncallDate),
                    oncallPrimary: info.oncallPrimary,
                    oncallSecondary: info.oncallSecondary,
                    oncallPrimaryEmail: info.oncallPrimaryEmail,
                    oncallPrimaryContact: info.oncallPrimaryContact,
                    oncallSecondaryEmail: info.oncallSecondaryEmail,
                    oncallSecondaryContact: info.oncallSecondaryContact
                };
            });
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(oncall_loaded => {
            this.oncall = oncall_loaded;
            //console.log(this.oncall)
            this.oncallStatus.next(this.oncall.slice());
        }));
    }
    addoncall(oncall) {
        //console.log("kdkd")
        return this.http.post('https://mirrorview.herokuapp.com/api/oncall/', oncall)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((oncalldata) => {
            return oncalldata.map((info) => {
                return {
                    oncallId: info._id,
                    oncallDate: new Date(info.oncallDate),
                    oncallPrimary: info.oncallPrimary,
                    oncallSecondary: info.oncallSecondary,
                    oncallPrimaryEmail: info.oncallPrimaryEmail,
                    oncallPrimaryContact: info.oncallPrimaryContact,
                    oncallSecondaryEmail: info.oncallSecondaryEmail,
                    oncallSecondaryContact: info.oncallSecondaryContact
                };
            });
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(oncall_loaded => {
            this.oncall = oncall_loaded;
            this.oncallStatus.next(this.oncall.slice());
        }));
    }
};
oncallService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
oncallService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({ providedIn: 'root' }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
], oncallService);



/***/ }),

/***/ "./src/app/oncall/oncalldetail/oncalldetail.component.css":
/*!****************************************************************!*\
  !*** ./src/app/oncall/oncalldetail/oncalldetail.component.css ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\ntr.example-detail-row {\n  height: 0;\n}\n\ntr.example-issue-row:not(.example-expanded-row):hover {\n  background: whitesmoke;\n}\n\ntr.example-issue-row:not(.example-expanded-row):active {\n  background: #efefef;\n}\n\n.example-form{\n  width:80%;\n  display:inline-block;\n  margin:0\n}\n\n.searchbutton{\n  margin-right: 0.5px;\n  background:white;\n  color:black;\n  font-weight: bold;\n  padding:0.5px;\n\n}\n\n.addbtn{\n\n  display:inline-block;\n  margin:0\n}\n\n.example-issue-row td {\n  border-bottom-width: 0;\n}\n\n.oncall-detail {\n  overflow: hidden;\n}\n\n.oncall-description{\n  width:100%;\n\n}\n\n.oncalldesc{\n  width:60%;\n  font-size:small;\n  display: inline-block;\n  font-family:Georgia;\n}\n\ntable {\nwidth: 100%;\nbackground:black;\ncolor:white;\ntable-layout: fixed;\n}\n\nmat-paginator {\n\nbackground:transparent;\ncolor:black;\n}\n\n.matInput {\nwidth:10%;\n}\n\ntd{\ncolor:White;\noverflow: hidden;\ntext-overflow: ellipsis;\nword-wrap: break-word;\n}\n\nth {\noverflow: hidden;\ntext-overflow: ellipsis;\nword-wrap: break-word;\ncolor:White;\nfont-weight: bold;\n}\n\nmat-label {\ncolor:black;\nfont-family:sans-serif;\nfont-style: italic;\nfont-size:xx-small;\nfont-weight: bold;\n}\n\n.mat-form-field .mat-date-range-input{\n\nwidth: 20%;\n}\n\n.mat-form-field{\n  width:65%\n}\n\n.editclass{\n  float:right;\n  display: inline-block;\n  margin:0.125rem;\n  padding:0.125rem;\n}\n\nul {\n  margin-top: 20px;\n}\n\nli {\n  list-style:none;\n}\n\n.searchbutton{\n  background:white;\n  color:black;\n  font-weight: bolder;\n  padding:0.125rem;\n}\n\n.mat-icon{\n  color:black;\n  height:1.5625rem !important;\n  width:1.5625rem !important;\n  font-size:1.5625rem !important;\n}\n\n@media(min-width:40rem)\n\n{\n  \ntd{\n  width:25%;\ncolor:White;\nfont-size:small;\noverflow: hidden;\n  text-overflow: ellipsis;\n  word-wrap: break-word;\n}\n\nth {\n  width:25%;\n  overflow: hidden;\n  font-size:small;\n  text-overflow: ellipsis;\n  word-wrap: break-word;\n  color:White;\n  font-weight: bold;\n}\n\n.example-form{\n  width:50%;\n  display:inline-block;\n  margin:0\n}\n.mat-column-expandedDetail {\n  flex:none;\n  width:10%\n}\n.mat-icon{\n  color:black;\n  height:1.5625rem !important;\n  width:1.5625rem !important;\n  font-size:1.5625rem !important;\n}\n\n.editclass{\n  float:right;\n  display: inline-block;\n  margin:0.125rem;\n  padding:0.125rem;\n}\n\n.oncalldesc{\n  width:30%;\n  font-size:medium;\n  display: inline-block;\n  font-family:Georgia;\n}\n.matInput {\n  width:40%;\n  }\n\n  mat-label {\n    color:black;\n    font-family:sans-serif;\n    font-style: italic;\n    \n    font-size:small;\n    font-weight: bold;\n    }\n    \n.searchbutton{\n  background:white;\n  color:black;\n  font-weight: bolder;\n  padding:0.125rem;\n  margin :1.125rem;\n}\n\n.mat-form-field .mat-date-range-input{\n\n  width: 60%;\n  }\n\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb25jYWxsL29uY2FsbGRldGFpbC9vbmNhbGxkZXRhaWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7RUFDRSxTQUFTO0FBQ1g7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxTQUFTO0VBQ1Qsb0JBQW9CO0VBQ3BCO0FBQ0Y7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsYUFBYTs7QUFFZjs7QUFDQTs7RUFFRSxvQkFBb0I7RUFDcEI7QUFDRjs7QUFDQTtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFDQTtFQUNFLFVBQVU7O0FBRVo7O0FBQ0E7RUFDRSxTQUFTO0VBQ1QsZUFBZTtFQUNmLHFCQUFxQjtFQUNyQixtQkFBbUI7QUFDckI7O0FBR0E7QUFDQSxXQUFXO0FBQ1gsZ0JBQWdCO0FBQ2hCLFdBQVc7QUFDWCxtQkFBbUI7QUFDbkI7O0FBSUE7O0FBRUEsc0JBQXNCO0FBQ3RCLFdBQVc7QUFDWDs7QUFFQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBLFdBQVc7QUFDWCxnQkFBZ0I7QUFDaEIsdUJBQXVCO0FBQ3ZCLHFCQUFxQjtBQUNyQjs7QUFFQTtBQUNBLGdCQUFnQjtBQUNoQix1QkFBdUI7QUFDdkIscUJBQXFCO0FBQ3JCLFdBQVc7QUFDWCxpQkFBaUI7QUFDakI7O0FBRUE7QUFDQSxXQUFXO0FBQ1gsc0JBQXNCO0FBQ3RCLGtCQUFrQjtBQUNsQixrQkFBa0I7QUFDbEIsaUJBQWlCO0FBQ2pCOztBQUVBOztBQUVBLFVBQVU7QUFDVjs7QUFDQTtFQUNFO0FBQ0Y7O0FBQ0E7RUFDRSxXQUFXO0VBQ1gscUJBQXFCO0VBQ3JCLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxtQkFBbUI7RUFDbkIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsV0FBVztFQUNYLDJCQUEyQjtFQUMzQiwwQkFBMEI7RUFDMUIsOEJBQThCO0FBQ2hDOztBQUVBOzs7O0FBSUE7RUFDRSxTQUFTO0FBQ1gsV0FBVztBQUNYLGVBQWU7QUFDZixnQkFBZ0I7RUFDZCx1QkFBdUI7RUFDdkIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsU0FBUztFQUNULGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsdUJBQXVCO0VBQ3ZCLHFCQUFxQjtFQUNyQixXQUFXO0VBQ1gsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsU0FBUztFQUNULG9CQUFvQjtFQUNwQjtBQUNGO0FBQ0E7RUFDRSxTQUFTO0VBQ1Q7QUFDRjtBQUNBO0VBQ0UsV0FBVztFQUNYLDJCQUEyQjtFQUMzQiwwQkFBMEI7RUFDMUIsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsV0FBVztFQUNYLHFCQUFxQjtFQUNyQixlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsU0FBUztFQUNULGdCQUFnQjtFQUNoQixxQkFBcUI7RUFDckIsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxTQUFTO0VBQ1Q7O0VBRUE7SUFDRSxXQUFXO0lBQ1gsc0JBQXNCO0lBQ3RCLGtCQUFrQjs7SUFFbEIsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQjs7QUFFSjtFQUNFLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixnQkFBZ0I7QUFDbEI7O0FBRUE7O0VBRUUsVUFBVTtFQUNWOztBQUVGIiwiZmlsZSI6InNyYy9hcHAvb25jYWxsL29uY2FsbGRldGFpbC9vbmNhbGxkZXRhaWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxudHIuZXhhbXBsZS1kZXRhaWwtcm93IHtcbiAgaGVpZ2h0OiAwO1xufVxuXG50ci5leGFtcGxlLWlzc3VlLXJvdzpub3QoLmV4YW1wbGUtZXhwYW5kZWQtcm93KTpob3ZlciB7XG4gIGJhY2tncm91bmQ6IHdoaXRlc21va2U7XG59XG5cbnRyLmV4YW1wbGUtaXNzdWUtcm93Om5vdCguZXhhbXBsZS1leHBhbmRlZC1yb3cpOmFjdGl2ZSB7XG4gIGJhY2tncm91bmQ6ICNlZmVmZWY7XG59XG5cbi5leGFtcGxlLWZvcm17XG4gIHdpZHRoOjgwJTtcbiAgZGlzcGxheTppbmxpbmUtYmxvY2s7XG4gIG1hcmdpbjowXG59XG5cbi5zZWFyY2hidXR0b257XG4gIG1hcmdpbi1yaWdodDogMC41cHg7XG4gIGJhY2tncm91bmQ6d2hpdGU7XG4gIGNvbG9yOmJsYWNrO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgcGFkZGluZzowLjVweDtcblxufVxuLmFkZGJ0bntcblxuICBkaXNwbGF5OmlubGluZS1ibG9jaztcbiAgbWFyZ2luOjBcbn1cbi5leGFtcGxlLWlzc3VlLXJvdyB0ZCB7XG4gIGJvcmRlci1ib3R0b20td2lkdGg6IDA7XG59XG5cbi5vbmNhbGwtZGV0YWlsIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5vbmNhbGwtZGVzY3JpcHRpb257XG4gIHdpZHRoOjEwMCU7XG5cbn1cbi5vbmNhbGxkZXNje1xuICB3aWR0aDo2MCU7XG4gIGZvbnQtc2l6ZTpzbWFsbDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmb250LWZhbWlseTpHZW9yZ2lhO1xufVxuXG5cbnRhYmxlIHtcbndpZHRoOiAxMDAlO1xuYmFja2dyb3VuZDpibGFjaztcbmNvbG9yOndoaXRlO1xudGFibGUtbGF5b3V0OiBmaXhlZDtcbn1cblxuXG5cbm1hdC1wYWdpbmF0b3Ige1xuXG5iYWNrZ3JvdW5kOnRyYW5zcGFyZW50O1xuY29sb3I6YmxhY2s7XG59XG5cbi5tYXRJbnB1dCB7XG53aWR0aDoxMCU7XG59XG5cbnRke1xuY29sb3I6V2hpdGU7XG5vdmVyZmxvdzogaGlkZGVuO1xudGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG53b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG59XG5cbnRoIHtcbm92ZXJmbG93OiBoaWRkZW47XG50ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbndvcmQtd3JhcDogYnJlYWstd29yZDtcbmNvbG9yOldoaXRlO1xuZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbm1hdC1sYWJlbCB7XG5jb2xvcjpibGFjaztcbmZvbnQtZmFtaWx5OnNhbnMtc2VyaWY7XG5mb250LXN0eWxlOiBpdGFsaWM7XG5mb250LXNpemU6eHgtc21hbGw7XG5mb250LXdlaWdodDogYm9sZDtcbn1cblxuLm1hdC1mb3JtLWZpZWxkIC5tYXQtZGF0ZS1yYW5nZS1pbnB1dHtcblxud2lkdGg6IDIwJTtcbn1cbi5tYXQtZm9ybS1maWVsZHtcbiAgd2lkdGg6NjUlXG59XG4uZWRpdGNsYXNze1xuICBmbG9hdDpyaWdodDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW46MC4xMjVyZW07XG4gIHBhZGRpbmc6MC4xMjVyZW07XG59XG5cbnVsIHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cblxubGkge1xuICBsaXN0LXN0eWxlOm5vbmU7XG59XG5cbi5zZWFyY2hidXR0b257XG4gIGJhY2tncm91bmQ6d2hpdGU7XG4gIGNvbG9yOmJsYWNrO1xuICBmb250LXdlaWdodDogYm9sZGVyO1xuICBwYWRkaW5nOjAuMTI1cmVtO1xufVxuXG4ubWF0LWljb257XG4gIGNvbG9yOmJsYWNrO1xuICBoZWlnaHQ6MS41NjI1cmVtICFpbXBvcnRhbnQ7XG4gIHdpZHRoOjEuNTYyNXJlbSAhaW1wb3J0YW50O1xuICBmb250LXNpemU6MS41NjI1cmVtICFpbXBvcnRhbnQ7XG59XG5cbkBtZWRpYShtaW4td2lkdGg6NDByZW0pXG5cbntcbiAgXG50ZHtcbiAgd2lkdGg6MjUlO1xuY29sb3I6V2hpdGU7XG5mb250LXNpemU6c21hbGw7XG5vdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xufVxuXG50aCB7XG4gIHdpZHRoOjI1JTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgZm9udC1zaXplOnNtYWxsO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICBjb2xvcjpXaGl0ZTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5leGFtcGxlLWZvcm17XG4gIHdpZHRoOjUwJTtcbiAgZGlzcGxheTppbmxpbmUtYmxvY2s7XG4gIG1hcmdpbjowXG59XG4ubWF0LWNvbHVtbi1leHBhbmRlZERldGFpbCB7XG4gIGZsZXg6bm9uZTtcbiAgd2lkdGg6MTAlXG59XG4ubWF0LWljb257XG4gIGNvbG9yOmJsYWNrO1xuICBoZWlnaHQ6MS41NjI1cmVtICFpbXBvcnRhbnQ7XG4gIHdpZHRoOjEuNTYyNXJlbSAhaW1wb3J0YW50O1xuICBmb250LXNpemU6MS41NjI1cmVtICFpbXBvcnRhbnQ7XG59XG5cbi5lZGl0Y2xhc3N7XG4gIGZsb2F0OnJpZ2h0O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbjowLjEyNXJlbTtcbiAgcGFkZGluZzowLjEyNXJlbTtcbn1cblxuLm9uY2FsbGRlc2N7XG4gIHdpZHRoOjMwJTtcbiAgZm9udC1zaXplOm1lZGl1bTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmb250LWZhbWlseTpHZW9yZ2lhO1xufVxuLm1hdElucHV0IHtcbiAgd2lkdGg6NDAlO1xuICB9XG5cbiAgbWF0LWxhYmVsIHtcbiAgICBjb2xvcjpibGFjaztcbiAgICBmb250LWZhbWlseTpzYW5zLXNlcmlmO1xuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgICBcbiAgICBmb250LXNpemU6c21hbGw7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgfVxuICAgIFxuLnNlYXJjaGJ1dHRvbntcbiAgYmFja2dyb3VuZDp3aGl0ZTtcbiAgY29sb3I6YmxhY2s7XG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gIHBhZGRpbmc6MC4xMjVyZW07XG4gIG1hcmdpbiA6MS4xMjVyZW07XG59XG5cbi5tYXQtZm9ybS1maWVsZCAubWF0LWRhdGUtcmFuZ2UtaW5wdXR7XG5cbiAgd2lkdGg6IDYwJTtcbiAgfVxuXG59Il19 */");

/***/ }),

/***/ "./src/app/oncall/oncalldetail/oncalldetail.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/oncall/oncalldetail/oncalldetail.component.ts ***!
  \***************************************************************/
/*! exports provided: OncalldetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OncalldetailComponent", function() { return OncalldetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sort.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _oncalledit_oncalledit_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../oncalledit/oncalledit.component */ "./src/app/oncall/oncalledit/oncalledit.component.ts");
/* harmony import */ var _shared_helper_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/helper.service */ "./src/app/shared/helper.service.ts");
/* harmony import */ var _teams_team_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../teams/team.service */ "./src/app/teams/team.service.ts");
/* harmony import */ var _oncall_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../oncall.service */ "./src/app/oncall/oncall.service.ts");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");













let OncalldetailComponent = class OncalldetailComponent {
    constructor(as, ts, hs, rs, ru, dialog) {
        this.as = as;
        this.ts = ts;
        this.hs = hs;
        this.rs = rs;
        this.ru = ru;
        this.dialog = dialog;
        this.enable_edit = false;
        this.fsearch = false;
        this.oncallDateStart = null;
        this.oncallDateEnd = null;
        this.columnsToDisplay = ['oncallDate', 'oncallPrimary', 'oncallSecondary'];
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.rs.routeReuseStrategy.shouldReuseRoute = () => false;
            this.tname = this.ru.snapshot.params.name;
            if (this.tname) {
                this.oncallForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormGroup"]({
                    oncallDateStart: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormControl"](this.oncallDateStart, [_angular_forms__WEBPACK_IMPORTED_MODULE_12__["Validators"].required]),
                    oncallDateEnd: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormControl"](this.oncallDateEnd),
                    team: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormControl"](this.tname)
                });
                this.as.oncallStatus.subscribe(asf => {
                    this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"](asf);
                    setTimeout(() => {
                        this.dataSource.paginator = this.paginator;
                        this.dataSource.sort = this.sort;
                    });
                });
            }
        });
    }
    onFindOncall() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.fsearch = true;
            this.isLoading = true;
            this.oncallForm.patchValue({ team: this.tname });
            console.log(this.oncallForm.value);
            this.oncall_list = yield this.as.getoncall(this.oncallForm.value).toPromise();
            console.log(this.oncall_list);
            this.oncallForm.reset();
            this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"](this.oncall_list);
            setTimeout(() => {
                this.dataSource.paginator = this.paginator;
                this.dataSource.sort = this.sort;
            });
            this.isLoading = false;
        });
    }
    onAddoncall() {
        this.ts.teamnameSelected.next(this.tname);
        this.dialog.open(_oncalledit_oncalledit_component__WEBPACK_IMPORTED_MODULE_7__["OncalleditComponent"]);
    }
    Oneditoncall(row) {
        this.ts.teamnameSelected.next(this.tname);
        this.as.oncallDateSelected.next(row);
        this.dialog.open(_oncalledit_oncalledit_component__WEBPACK_IMPORTED_MODULE_7__["OncalleditComponent"]);
    }
};
OncalldetailComponent.ctorParameters = () => [
    { type: _oncall_service__WEBPACK_IMPORTED_MODULE_10__["oncallService"] },
    { type: _teams_team_service__WEBPACK_IMPORTED_MODULE_9__["TeamService"] },
    { type: _shared_helper_service__WEBPACK_IMPORTED_MODULE_8__["HelperService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"])
], OncalldetailComponent.prototype, "paginator", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_sort__WEBPACK_IMPORTED_MODULE_4__["MatSort"]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_material_sort__WEBPACK_IMPORTED_MODULE_4__["MatSort"])
], OncalldetailComponent.prototype, "sort", void 0);
OncalldetailComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-oncalldetail',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./oncalldetail.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/oncall/oncalldetail/oncalldetail.component.html")).default,
        animations: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["trigger"])('detailExpand', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["state"])('collapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["style"])({ height: '0px', minHeight: '0' })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["state"])('expanded', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["style"])({ height: '*' })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["transition"])('expanded <=> collapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["animate"])('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
            ]),
        ],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./oncalldetail.component.css */ "./src/app/oncall/oncalldetail/oncalldetail.component.css")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_oncall_service__WEBPACK_IMPORTED_MODULE_10__["oncallService"], _teams_team_service__WEBPACK_IMPORTED_MODULE_9__["TeamService"], _shared_helper_service__WEBPACK_IMPORTED_MODULE_8__["HelperService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]])
], OncalldetailComponent);



/***/ }),

/***/ "./src/app/oncall/oncalledit/oncalledit.component.css":
/*!************************************************************!*\
  !*** ./src/app/oncall/oncalledit/oncalledit.component.css ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("td{\r\n    display: inline-block;\r\n}\r\n\r\nmat-dialog-content{\r\n    min-height:60rem;\r\n    padding-bottom:0;\r\n}\r\n\r\n.example-full-width{\r\n    width:100%\r\n}\r\n\r\n@media(min-width:40rem)\r\n{\r\n\r\ntd{\r\ndisplay: inline-block;\r\n}\r\n\r\nmat-dialog-content{\r\n    min-height:60rem;\r\n    padding-top:0;\r\n    padding-bottom:0;\r\n}\r\n.example-full-width{\r\n    width:100%\r\n}\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb25jYWxsL29uY2FsbGVkaXQvb25jYWxsZWRpdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGdCQUFnQjtBQUNwQjs7QUFDQTtJQUNJO0FBQ0o7O0FBQ0E7OztBQUdBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJO0FBQ0o7QUFDQSIsImZpbGUiOiJzcmMvYXBwL29uY2FsbC9vbmNhbGxlZGl0L29uY2FsbGVkaXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInRke1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcblxyXG5tYXQtZGlhbG9nLWNvbnRlbnR7XHJcbiAgICBtaW4taGVpZ2h0OjYwcmVtO1xyXG4gICAgcGFkZGluZy1ib3R0b206MDtcclxufVxyXG4uZXhhbXBsZS1mdWxsLXdpZHRoe1xyXG4gICAgd2lkdGg6MTAwJVxyXG59XHJcbkBtZWRpYShtaW4td2lkdGg6NDByZW0pXHJcbntcclxuXHJcbnRke1xyXG5kaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuXHJcbm1hdC1kaWFsb2ctY29udGVudHtcclxuICAgIG1pbi1oZWlnaHQ6NjByZW07XHJcbiAgICBwYWRkaW5nLXRvcDowO1xyXG4gICAgcGFkZGluZy1ib3R0b206MDtcclxufVxyXG4uZXhhbXBsZS1mdWxsLXdpZHRoe1xyXG4gICAgd2lkdGg6MTAwJVxyXG59XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/oncall/oncalledit/oncalledit.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/oncall/oncalledit/oncalledit.component.ts ***!
  \***********************************************************/
/*! exports provided: OncalleditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OncalleditComponent", function() { return OncalleditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/datepicker.js");
/* harmony import */ var src_app_associates_associates_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/associates/associates.service */ "./src/app/associates/associates.service.ts");
/* harmony import */ var src_app_shared_helper_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/helper.service */ "./src/app/shared/helper.service.ts");
/* harmony import */ var src_app_teams_team_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/teams/team.service */ "./src/app/teams/team.service.ts");
/* harmony import */ var _oncall_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../oncall.service */ "./src/app/oncall/oncall.service.ts");
var OncalleditComponent_1;










let OncalleditComponent = OncalleditComponent_1 = class OncalleditComponent {
    constructor(ts, ru, rs, hs, tservice, as, _dateAdapter) {
        this.ts = ts;
        this.ru = ru;
        this.rs = rs;
        this.hs = hs;
        this.tservice = tservice;
        this.as = as;
        this._dateAdapter = _dateAdapter;
        this.edit_trigger = false;
        this.today = new Date();
    }
    selectionFinished(date, currentRange) {
        let { start, end } = currentRange;
        if (start == null || (start && end)) {
            start = date;
            end = null;
        }
        else if (end == null) {
            const maxDate = this._dateAdapter.addCalendarDays(start, 7);
            end = date ? date > maxDate ? maxDate : date : null;
        }
        return new _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_5__["DateRange"](start, end);
    }
    createPreview(activeDate, currentRange) {
        if (currentRange.start && !currentRange.end) {
            const maxDate = this._dateAdapter.addCalendarDays(currentRange.start, 7);
            const rangeEnd = activeDate ? activeDate > maxDate ? maxDate : activeDate : null;
            return new _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_5__["DateRange"](currentRange.start, rangeEnd);
        }
        return new _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_5__["DateRange"](null, null);
    }
    ngOnInit() {
        this.edit_trigger = false;
        this.tservice.teamnameSelected.subscribe((name) => {
            this.tname = name;
            this.associatesshow = this.as.getTeamAssociates(this.tname).map(a => a.empname);
            //console.log("ttname is" + name)
        });
        this.ts.oncallDateSelected.subscribe((sel_oncall) => {
            this.oncallSel = sel_oncall;
        });
        if (this.oncallSel) {
            this.edit_trigger = true;
        }
        this.initForm();
    }
    initForm() {
        let oncallPrimaryContact = '';
        let oncallPrimaryEmail = '';
        let oncallDateStart = new Date('');
        let oncallDateEnd = new Date('');
        let oncallSecondary = '';
        let related_team = '';
        let oncallPrimary = '';
        let oncallSecondaryEmail = '';
        let oncallSecondaryContact = '';
        if (this.edit_trigger) {
            oncallDateStart = this.oncallSel.oncallDate;
            oncallDateEnd = this.oncallSel.oncallDate;
            oncallPrimaryContact = this.oncallSel.oncallPrimaryContact;
            oncallSecondary = this.oncallSel.oncallSecondary;
            oncallSecondaryContact = this.oncallSel.oncallSecondaryContact;
            related_team = this.oncallSel.related_team;
            oncallPrimary = this.oncallSel.oncallPrimary;
            oncallPrimaryEmail = this.oncallSel.oncallPrimaryEmail;
            oncallSecondaryEmail = this.oncallSel.oncallSecondaryEmail;
            this.oncallDates = this.ts.getExlcudeoncallNames();
        }
        this.oncallDates = this.ts.getExlcudeoncallNames();
        this.oncallForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            oncallDateStart: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](oncallDateStart, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            oncallDateEnd: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](oncallDateEnd),
            oncallPrimaryContact: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](oncallPrimaryContact, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[0-9]*')]),
            oncallSecondary: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](oncallSecondary, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            related_team: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](related_team),
            oncallPrimary: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](oncallPrimary, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            oncallPrimaryEmail: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](oncallPrimaryEmail, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]),
            oncallSecondaryEmail: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](oncallSecondaryEmail, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]),
            oncallSecondaryContact: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](oncallSecondaryContact, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[0-9]*')]),
        });
    }
    forbiddennames(control) {
        if (this.oncallDates.indexOf(control.value.toUpperCase()) !== -1)
            return { 'nameforbid': true };
        else
            return null;
    }
    OnSubmit() {
        this.oncallForm.patchValue({ related_team: this.tname });
        if (this.edit_trigger) {
            console.log(this.oncallForm.value);
            this.ts.updateoncall(this.oncallForm.value).subscribe(onc_loaded => {
                this.hs.openSnackBar("Oncall Details Updated", "Success");
            }, errorMessage => {
                this.rs.navigate(['../teams'], { relativeTo: this.ru });
                this.hs.openSnackBar("Failed to update Oncall Details", "Success");
            });
        }
        else {
            this.ts.addoncall(this.oncallForm.value).subscribe(onc_loaded => {
                this.hs.openSnackBar("Oncall Details Added", "Success");
            }, errorMessage => {
                this.rs.navigate(['../teams'], { relativeTo: this.ru });
                this.hs.openSnackBar("Failed to add Oncall Details", "Success");
            });
        }
        this.ts.oncallDateSelected.next(null);
    }
    OnselectPrimary(evt) {
        this.cv = evt.value;
        this.patch_associate = this.as.getAssociate(evt.value);
        this.oncallForm.patchValue({ related_team: this.tname,
            oncallPrimary: evt.value,
            oncallPrimaryEmail: this.patch_associate.empcogemailid,
            oncallPrimaryContact: this.patch_associate.empcontactno });
    }
    OnselectSecondary(evt) {
        this.pv = evt.value;
        this.patch_associate = this.as.getAssociate(evt.value);
        this.oncallForm.patchValue({ related_team: this.tname,
            oncallSecondaryEmail: this.patch_associate.empcogemailid,
            oncallSecondaryContact: this.patch_associate.empcontactno });
    }
};
OncalleditComponent.ctorParameters = () => [
    { type: _oncall_service__WEBPACK_IMPORTED_MODULE_9__["oncallService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: src_app_shared_helper_service__WEBPACK_IMPORTED_MODULE_7__["HelperService"] },
    { type: src_app_teams_team_service__WEBPACK_IMPORTED_MODULE_8__["TeamService"] },
    { type: src_app_associates_associates_service__WEBPACK_IMPORTED_MODULE_6__["AssociateService"] },
    { type: _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["DateAdapter"] }
];
OncalleditComponent = OncalleditComponent_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-oncalledit',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./oncalledit.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/oncall/oncalledit/oncalledit.component.html")).default,
        providers: [{
                provide: _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_5__["MAT_DATE_RANGE_SELECTION_STRATEGY"],
                useClass: OncalleditComponent_1
            }],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./oncalledit.component.css */ "./src/app/oncall/oncalledit/oncalledit.component.css")).default]
    }),
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_oncall_service__WEBPACK_IMPORTED_MODULE_9__["oncallService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], src_app_shared_helper_service__WEBPACK_IMPORTED_MODULE_7__["HelperService"], src_app_teams_team_service__WEBPACK_IMPORTED_MODULE_8__["TeamService"],
        src_app_associates_associates_service__WEBPACK_IMPORTED_MODULE_6__["AssociateService"], _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["DateAdapter"]])
], OncalleditComponent);



/***/ }),

/***/ "./src/app/shared/alert/alert.component.css":
/*!**************************************************!*\
  !*** ./src/app/shared/alert/alert.component.css ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".backdrop {\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100vw;\n    height: 100vh;\n    background: rgba(0, 0, 0, 0.75);\n    z-index: 50;\n  }\n  \n  .alert-box {\n    position: fixed;\n    top: 30vh;\n    left: 20vw;\n    width: 60vw;\n    padding: 16px;\n    z-index: 100;\n    background: white;\n    box-shadow: 0 2px 8px rbga(0, 0, 0, 0.26);\n  }\n  \n  .alert-box-actions {\n    text-align: right;\n  }\n  \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2FsZXJ0L2FsZXJ0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0lBQ2YsTUFBTTtJQUNOLE9BQU87SUFDUCxZQUFZO0lBQ1osYUFBYTtJQUNiLCtCQUErQjtJQUMvQixXQUFXO0VBQ2I7O0VBRUE7SUFDRSxlQUFlO0lBQ2YsU0FBUztJQUNULFVBQVU7SUFDVixXQUFXO0lBQ1gsYUFBYTtJQUNiLFlBQVk7SUFDWixpQkFBaUI7SUFDakIseUNBQXlDO0VBQzNDOztFQUVBO0lBQ0UsaUJBQWlCO0VBQ25CIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2FsZXJ0L2FsZXJ0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmFja2Ryb3Age1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICB3aWR0aDogMTAwdnc7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNzUpO1xuICAgIHotaW5kZXg6IDUwO1xuICB9XG4gIFxuICAuYWxlcnQtYm94IHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgdG9wOiAzMHZoO1xuICAgIGxlZnQ6IDIwdnc7XG4gICAgd2lkdGg6IDYwdnc7XG4gICAgcGFkZGluZzogMTZweDtcbiAgICB6LWluZGV4OiAxMDA7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgYm94LXNoYWRvdzogMCAycHggOHB4IHJiZ2EoMCwgMCwgMCwgMC4yNik7XG4gIH1cbiAgXG4gIC5hbGVydC1ib3gtYWN0aW9ucyB7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIH1cbiAgIl19 */");

/***/ }),

/***/ "./src/app/shared/alert/alert.component.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/alert/alert.component.ts ***!
  \*************************************************/
/*! exports provided: AlertComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertComponent", function() { return AlertComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let AlertComponent = class AlertComponent {
    constructor() {
        this.close = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() {
    }
    onClose() {
        this.close.emit();
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], AlertComponent.prototype, "message", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], AlertComponent.prototype, "close", void 0);
AlertComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-alert',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./alert.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/alert/alert.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./alert.component.css */ "./src/app/shared/alert/alert.component.css")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], AlertComponent);



/***/ }),

/***/ "./src/app/shared/helper.service.ts":
/*!******************************************!*\
  !*** ./src/app/shared/helper.service.ts ***!
  \******************************************/
/*! exports provided: HelperService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelperService", function() { return HelperService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");



let HelperService = class HelperService {
    constructor(_snackBar) {
        this._snackBar = _snackBar;
    }
    openSnackBar(message, action) {
        this._snackBar.open(message, action, {
            duration: 2000,
            horizontalPosition: 'center',
            verticalPosition: 'top',
        });
    }
};
HelperService.ctorParameters = () => [
    { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"] }
];
HelperService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"]])
], HelperService);



/***/ }),

/***/ "./src/app/shared/loading/loading.component.css":
/*!******************************************************!*\
  !*** ./src/app/shared/loading/loading.component.css ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".lds-roller {\n  display: inline-block;\n  position: relative;\n  width: 80px;\n  height: 80px;\n}\n.lds-roller div {\n  -webkit-animation: lds-roller 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;\n          animation: lds-roller 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;\n  transform-origin: 40px 40px;\n}\n.lds-roller div:after {\n  content: \" \";\n  display: block;\n  position: absolute;\n  width: 7px;\n  height: 7px;\n  border-radius: 50%;\n  background: #fff;\n  margin: -4px 0 0 -4px;\n}\n.lds-roller div:nth-child(1) {\n  -webkit-animation-delay: -0.036s;\n          animation-delay: -0.036s;\n}\n.lds-roller div:nth-child(1):after {\n  top: 63px;\n  left: 63px;\n}\n.lds-roller div:nth-child(2) {\n  -webkit-animation-delay: -0.072s;\n          animation-delay: -0.072s;\n}\n.lds-roller div:nth-child(2):after {\n  top: 68px;\n  left: 56px;\n}\n.lds-roller div:nth-child(3) {\n  -webkit-animation-delay: -0.108s;\n          animation-delay: -0.108s;\n}\n.lds-roller div:nth-child(3):after {\n  top: 71px;\n  left: 48px;\n}\n.lds-roller div:nth-child(4) {\n  -webkit-animation-delay: -0.144s;\n          animation-delay: -0.144s;\n}\n.lds-roller div:nth-child(4):after {\n  top: 72px;\n  left: 40px;\n}\n.lds-roller div:nth-child(5) {\n  -webkit-animation-delay: -0.18s;\n          animation-delay: -0.18s;\n}\n.lds-roller div:nth-child(5):after {\n  top: 71px;\n  left: 32px;\n}\n.lds-roller div:nth-child(6) {\n  -webkit-animation-delay: -0.216s;\n          animation-delay: -0.216s;\n}\n.lds-roller div:nth-child(6):after {\n  top: 68px;\n  left: 24px;\n}\n.lds-roller div:nth-child(7) {\n  -webkit-animation-delay: -0.252s;\n          animation-delay: -0.252s;\n}\n.lds-roller div:nth-child(7):after {\n  top: 63px;\n  left: 17px;\n}\n.lds-roller div:nth-child(8) {\n  -webkit-animation-delay: -0.288s;\n          animation-delay: -0.288s;\n}\n.lds-roller div:nth-child(8):after {\n  top: 56px;\n  left: 12px;\n}\n@-webkit-keyframes lds-roller {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n@keyframes lds-roller {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2xvYWRpbmcvbG9hZGluZy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UscUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsWUFBWTtBQUNkO0FBQ0E7RUFDRSx3RUFBZ0U7VUFBaEUsZ0VBQWdFO0VBQ2hFLDJCQUEyQjtBQUM3QjtBQUNBO0VBQ0UsWUFBWTtFQUNaLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLHFCQUFxQjtBQUN2QjtBQUNBO0VBQ0UsZ0NBQXdCO1VBQXhCLHdCQUF3QjtBQUMxQjtBQUNBO0VBQ0UsU0FBUztFQUNULFVBQVU7QUFDWjtBQUNBO0VBQ0UsZ0NBQXdCO1VBQXhCLHdCQUF3QjtBQUMxQjtBQUNBO0VBQ0UsU0FBUztFQUNULFVBQVU7QUFDWjtBQUNBO0VBQ0UsZ0NBQXdCO1VBQXhCLHdCQUF3QjtBQUMxQjtBQUNBO0VBQ0UsU0FBUztFQUNULFVBQVU7QUFDWjtBQUNBO0VBQ0UsZ0NBQXdCO1VBQXhCLHdCQUF3QjtBQUMxQjtBQUNBO0VBQ0UsU0FBUztFQUNULFVBQVU7QUFDWjtBQUNBO0VBQ0UsK0JBQXVCO1VBQXZCLHVCQUF1QjtBQUN6QjtBQUNBO0VBQ0UsU0FBUztFQUNULFVBQVU7QUFDWjtBQUNBO0VBQ0UsZ0NBQXdCO1VBQXhCLHdCQUF3QjtBQUMxQjtBQUNBO0VBQ0UsU0FBUztFQUNULFVBQVU7QUFDWjtBQUNBO0VBQ0UsZ0NBQXdCO1VBQXhCLHdCQUF3QjtBQUMxQjtBQUNBO0VBQ0UsU0FBUztFQUNULFVBQVU7QUFDWjtBQUNBO0VBQ0UsZ0NBQXdCO1VBQXhCLHdCQUF3QjtBQUMxQjtBQUNBO0VBQ0UsU0FBUztFQUNULFVBQVU7QUFDWjtBQUNBO0VBQ0U7SUFDRSx1QkFBdUI7RUFDekI7RUFDQTtJQUNFLHlCQUF5QjtFQUMzQjtBQUNGO0FBUEE7RUFDRTtJQUNFLHVCQUF1QjtFQUN6QjtFQUNBO0lBQ0UseUJBQXlCO0VBQzNCO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvbG9hZGluZy9sb2FkaW5nLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubGRzLXJvbGxlciB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogODBweDtcbiAgaGVpZ2h0OiA4MHB4O1xufVxuLmxkcy1yb2xsZXIgZGl2IHtcbiAgYW5pbWF0aW9uOiBsZHMtcm9sbGVyIDEuMnMgY3ViaWMtYmV6aWVyKDAuNSwgMCwgMC41LCAxKSBpbmZpbml0ZTtcbiAgdHJhbnNmb3JtLW9yaWdpbjogNDBweCA0MHB4O1xufVxuLmxkcy1yb2xsZXIgZGl2OmFmdGVyIHtcbiAgY29udGVudDogXCIgXCI7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiA3cHg7XG4gIGhlaWdodDogN3B4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIG1hcmdpbjogLTRweCAwIDAgLTRweDtcbn1cbi5sZHMtcm9sbGVyIGRpdjpudGgtY2hpbGQoMSkge1xuICBhbmltYXRpb24tZGVsYXk6IC0wLjAzNnM7XG59XG4ubGRzLXJvbGxlciBkaXY6bnRoLWNoaWxkKDEpOmFmdGVyIHtcbiAgdG9wOiA2M3B4O1xuICBsZWZ0OiA2M3B4O1xufVxuLmxkcy1yb2xsZXIgZGl2Om50aC1jaGlsZCgyKSB7XG4gIGFuaW1hdGlvbi1kZWxheTogLTAuMDcycztcbn1cbi5sZHMtcm9sbGVyIGRpdjpudGgtY2hpbGQoMik6YWZ0ZXIge1xuICB0b3A6IDY4cHg7XG4gIGxlZnQ6IDU2cHg7XG59XG4ubGRzLXJvbGxlciBkaXY6bnRoLWNoaWxkKDMpIHtcbiAgYW5pbWF0aW9uLWRlbGF5OiAtMC4xMDhzO1xufVxuLmxkcy1yb2xsZXIgZGl2Om50aC1jaGlsZCgzKTphZnRlciB7XG4gIHRvcDogNzFweDtcbiAgbGVmdDogNDhweDtcbn1cbi5sZHMtcm9sbGVyIGRpdjpudGgtY2hpbGQoNCkge1xuICBhbmltYXRpb24tZGVsYXk6IC0wLjE0NHM7XG59XG4ubGRzLXJvbGxlciBkaXY6bnRoLWNoaWxkKDQpOmFmdGVyIHtcbiAgdG9wOiA3MnB4O1xuICBsZWZ0OiA0MHB4O1xufVxuLmxkcy1yb2xsZXIgZGl2Om50aC1jaGlsZCg1KSB7XG4gIGFuaW1hdGlvbi1kZWxheTogLTAuMThzO1xufVxuLmxkcy1yb2xsZXIgZGl2Om50aC1jaGlsZCg1KTphZnRlciB7XG4gIHRvcDogNzFweDtcbiAgbGVmdDogMzJweDtcbn1cbi5sZHMtcm9sbGVyIGRpdjpudGgtY2hpbGQoNikge1xuICBhbmltYXRpb24tZGVsYXk6IC0wLjIxNnM7XG59XG4ubGRzLXJvbGxlciBkaXY6bnRoLWNoaWxkKDYpOmFmdGVyIHtcbiAgdG9wOiA2OHB4O1xuICBsZWZ0OiAyNHB4O1xufVxuLmxkcy1yb2xsZXIgZGl2Om50aC1jaGlsZCg3KSB7XG4gIGFuaW1hdGlvbi1kZWxheTogLTAuMjUycztcbn1cbi5sZHMtcm9sbGVyIGRpdjpudGgtY2hpbGQoNyk6YWZ0ZXIge1xuICB0b3A6IDYzcHg7XG4gIGxlZnQ6IDE3cHg7XG59XG4ubGRzLXJvbGxlciBkaXY6bnRoLWNoaWxkKDgpIHtcbiAgYW5pbWF0aW9uLWRlbGF5OiAtMC4yODhzO1xufVxuLmxkcy1yb2xsZXIgZGl2Om50aC1jaGlsZCg4KTphZnRlciB7XG4gIHRvcDogNTZweDtcbiAgbGVmdDogMTJweDtcbn1cbkBrZXlmcmFtZXMgbGRzLXJvbGxlciB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICB9XG59XG4iXX0= */");

/***/ }),

/***/ "./src/app/shared/loading/loading.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/loading/loading.component.ts ***!
  \*****************************************************/
/*! exports provided: LoadingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingComponent", function() { return LoadingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let LoadingComponent = class LoadingComponent {
    constructor() { }
    ngOnInit() {
    }
};
LoadingComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-loading',
        template: '<div class="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>',
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./loading.component.css */ "./src/app/shared/loading/loading.component.css")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], LoadingComponent);



/***/ }),

/***/ "./src/app/shared/placeholder.directive.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/placeholder.directive.ts ***!
  \*************************************************/
/*! exports provided: PlaceholderDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlaceholderDirective", function() { return PlaceholderDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let PlaceholderDirective = class PlaceholderDirective {
    constructor(viewContainerRef) {
        this.viewContainerRef = viewContainerRef;
    }
};
PlaceholderDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"] }
];
PlaceholderDirective = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[appPlaceholder]'
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]])
], PlaceholderDirective);



/***/ }),

/***/ "./src/app/start-mirror/start-mirror.component.css":
/*!*********************************************************!*\
  !*** ./src/app/start-mirror/start-mirror.component.css ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N0YXJ0LW1pcnJvci9zdGFydC1taXJyb3IuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/start-mirror/start-mirror.component.ts":
/*!********************************************************!*\
  !*** ./src/app/start-mirror/start-mirror.component.ts ***!
  \********************************************************/
/*! exports provided: StartMirrorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StartMirrorComponent", function() { return StartMirrorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _associates_associates_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../associates/associates.service */ "./src/app/associates/associates.service.ts");
/* harmony import */ var _teams_team_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../teams/team.service */ "./src/app/teams/team.service.ts");




let StartMirrorComponent = class StartMirrorComponent {
    constructor(ts, as) {
        this.ts = ts;
        this.as = as;
    }
    ngOnInit() {
        this.ts.getTeams().subscribe();
        this.as.getAssociates().subscribe();
    }
};
StartMirrorComponent.ctorParameters = () => [
    { type: _teams_team_service__WEBPACK_IMPORTED_MODULE_3__["TeamService"] },
    { type: _associates_associates_service__WEBPACK_IMPORTED_MODULE_2__["AssociateService"] }
];
StartMirrorComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-start-mirror',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./start-mirror.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/start-mirror/start-mirror.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./start-mirror.component.css */ "./src/app/start-mirror/start-mirror.component.css")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_teams_team_service__WEBPACK_IMPORTED_MODULE_3__["TeamService"], _associates_associates_service__WEBPACK_IMPORTED_MODULE_2__["AssociateService"]])
], StartMirrorComponent);



/***/ }),

/***/ "./src/app/teammembers/teammembers.component.css":
/*!*******************************************************!*\
  !*** ./src/app/teammembers/teammembers.component.css ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\ntable {\n    width: 100%;\n    background:rgba(0, 0, 0, 0.555);\n    color:white;\n  }\n\n  mat-paginator {\n \n    background:transparent;\n    color:black;\n  }\n\n  .matInput {\n    width:70%;\n  }\n\n  .mat-form-field {\n  \n    width: 60%;\n  }\n\n  td{\n  width: 2%;\n    color:White;\n    font-size:small;\n    text-overflow: ellipsis;\n    word-wrap: break-word;\n  }\n\n  th {\n    width: 2%;\n    color:White;\n    font-weight: bold;\n    text-overflow: ellipsis;\n    word-wrap: break-word;\n  }\n\n  mat-label {\n    color:black;\n    font-family:sans-serif;\n    font-style: italic;\n    \n    font-size:small;\n    font-weight: bold;\n  }\n\n  @media(min-width:40rem)\n{\n  .matInput {\n    width:40%;\n  }\n  \n  .mat-form-field {\n  \n    width: 40%;\n  }\n  \n  td{\n  width: 15%;\n    color:White;\n      text-overflow: ellipsis;\n  word-wrap: break-word;\n  \n  } \n  th {\n    width: 15%;\n    color:White;\n    font-weight: bold;\n    text-overflow: ellipsis;\n    word-wrap: break-word;\n  }\n\n  mat-label {\n    color:black;\n    font-family:sans-serif;\n    font-style: italic;\n    \n    font-size:medium;\n    font-weight: bold;\n  }\n\n\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGVhbW1lbWJlcnMvdGVhbW1lbWJlcnMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsK0JBQStCO0lBQy9CLFdBQVc7RUFDYjs7RUFFQTs7SUFFRSxzQkFBc0I7SUFDdEIsV0FBVztFQUNiOztFQUVBO0lBQ0UsU0FBUztFQUNYOztFQUVBOztJQUVFLFVBQVU7RUFDWjs7RUFFQTtFQUNBLFNBQVM7SUFDUCxXQUFXO0lBQ1gsZUFBZTtJQUNmLHVCQUF1QjtJQUN2QixxQkFBcUI7RUFDdkI7O0VBQ0E7SUFDRSxTQUFTO0lBQ1QsV0FBVztJQUNYLGlCQUFpQjtJQUNqQix1QkFBdUI7SUFDdkIscUJBQXFCO0VBQ3ZCOztFQUVBO0lBQ0UsV0FBVztJQUNYLHNCQUFzQjtJQUN0QixrQkFBa0I7O0lBRWxCLGVBQWU7SUFDZixpQkFBaUI7RUFDbkI7O0VBRUY7O0VBRUU7SUFDRSxTQUFTO0VBQ1g7O0VBRUE7O0lBRUUsVUFBVTtFQUNaOztFQUVBO0VBQ0EsVUFBVTtJQUNSLFdBQVc7TUFDVCx1QkFBdUI7RUFDM0IscUJBQXFCOztFQUVyQjtFQUNBO0lBQ0UsVUFBVTtJQUNWLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsdUJBQXVCO0lBQ3ZCLHFCQUFxQjtFQUN2Qjs7RUFFQTtJQUNFLFdBQVc7SUFDWCxzQkFBc0I7SUFDdEIsa0JBQWtCOztJQUVsQixnQkFBZ0I7SUFDaEIsaUJBQWlCO0VBQ25COzs7QUFHRiIsImZpbGUiOiJzcmMvYXBwL3RlYW1tZW1iZXJzL3RlYW1tZW1iZXJzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbnRhYmxlIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kOnJnYmEoMCwgMCwgMCwgMC41NTUpO1xuICAgIGNvbG9yOndoaXRlO1xuICB9XG5cbiAgbWF0LXBhZ2luYXRvciB7XG4gXG4gICAgYmFja2dyb3VuZDp0cmFuc3BhcmVudDtcbiAgICBjb2xvcjpibGFjaztcbiAgfVxuXG4gIC5tYXRJbnB1dCB7XG4gICAgd2lkdGg6NzAlO1xuICB9XG4gIFxuICAubWF0LWZvcm0tZmllbGQge1xuICBcbiAgICB3aWR0aDogNjAlO1xuICB9XG4gIFxuICB0ZHtcbiAgd2lkdGg6IDIlO1xuICAgIGNvbG9yOldoaXRlO1xuICAgIGZvbnQtc2l6ZTpzbWFsbDtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG4gIH0gXG4gIHRoIHtcbiAgICB3aWR0aDogMiU7XG4gICAgY29sb3I6V2hpdGU7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICB9XG5cbiAgbWF0LWxhYmVsIHtcbiAgICBjb2xvcjpibGFjaztcbiAgICBmb250LWZhbWlseTpzYW5zLXNlcmlmO1xuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgICBcbiAgICBmb250LXNpemU6c21hbGw7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIH1cblxuQG1lZGlhKG1pbi13aWR0aDo0MHJlbSlcbntcbiAgLm1hdElucHV0IHtcbiAgICB3aWR0aDo0MCU7XG4gIH1cbiAgXG4gIC5tYXQtZm9ybS1maWVsZCB7XG4gIFxuICAgIHdpZHRoOiA0MCU7XG4gIH1cbiAgXG4gIHRke1xuICB3aWR0aDogMTUlO1xuICAgIGNvbG9yOldoaXRlO1xuICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbiAgXG4gIH0gXG4gIHRoIHtcbiAgICB3aWR0aDogMTUlO1xuICAgIGNvbG9yOldoaXRlO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbiAgfVxuXG4gIG1hdC1sYWJlbCB7XG4gICAgY29sb3I6YmxhY2s7XG4gICAgZm9udC1mYW1pbHk6c2Fucy1zZXJpZjtcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgXG4gICAgZm9udC1zaXplOm1lZGl1bTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgfVxuXG5cbn0iXX0= */");

/***/ }),

/***/ "./src/app/teammembers/teammembers.component.ts":
/*!******************************************************!*\
  !*** ./src/app/teammembers/teammembers.component.ts ***!
  \******************************************************/
/*! exports provided: TeammembersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeammembersComponent", function() { return TeammembersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _associates_associates_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../associates/associates.service */ "./src/app/associates/associates.service.ts");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sort.js");







let TeammembersComponent = class TeammembersComponent {
    constructor(as, rs) {
        this.as = as;
        this.rs = rs;
        this.displayedColumns = ['empname', 'empcogemailid', 'empBTemailid', 'empUIN', 'empcontactno'];
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.rs.params.subscribe((ps) => {
                if (ps['name']) {
                    this.tname = ps['name'];
                }
            });
            yield this.as.getAssociates();
            this.teammembers = yield this.as.getTeamAssociates(this.tname);
            this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](this.teammembers);
            this.dataSource.paginator = this.paginator;
            this.dataSource.sort = this.sort;
        });
    }
    applyFilter(event) {
        const filterValue = event.target.value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    }
};
TeammembersComponent.ctorParameters = () => [
    { type: _associates_associates_service__WEBPACK_IMPORTED_MODULE_3__["AssociateService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_5__["MatPaginator"]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_material_paginator__WEBPACK_IMPORTED_MODULE_5__["MatPaginator"])
], TeammembersComponent.prototype, "paginator", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_sort__WEBPACK_IMPORTED_MODULE_6__["MatSort"]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_material_sort__WEBPACK_IMPORTED_MODULE_6__["MatSort"])
], TeammembersComponent.prototype, "sort", void 0);
TeammembersComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-teammembers',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./teammembers.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/teammembers/teammembers.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./teammembers.component.css */ "./src/app/teammembers/teammembers.component.css")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_associates_associates_service__WEBPACK_IMPORTED_MODULE_3__["AssociateService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
], TeammembersComponent);



/***/ }),

/***/ "./src/app/teams/team-detail/team-detail.component.css":
/*!*************************************************************!*\
  !*** ./src/app/teams/team-detail/team-detail.component.css ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n.example-card {\n  width: 30.25rem;\n  background:rgba(0, 0, 0, 0.555);\n    color:White;\n}\n\n@media(min-width:32.5rem)\n{\n.example-card {\n    width: 51.25rem;\n    background:rgba(0, 0, 0, 0.555);\n    color:White;\n  }\n  .mat-tab-label{\n    color:black;\n    font-family:sans-serif;\n  font-size:medium;\n  font-weight: bold;\n  }\n \n  .mat-card-title {\n    color:white;\n    font-weight: bold;\n    font-size:large !important;\n  }\n\n\n  .mat-card-subtitle {\n    font-weight:medium;\n    color:white;\n  }\n\n  .teamdesc{\n    font-size:medium;\n    font-family:Georgia;\n  }\n\n.teamsideheading{\n  font-weight: bold;\n  display: inline-block;\n  font-size:small !important;\n}\n }\n\n@media(min-width:45rem)\n{\n.example-card {\n    width: 71.25rem;\n    background:rgba(0, 0, 0, 0.555);\n    color:White;\n  }\n  .mat-tab-label{\n    color:black;\n    font-family:sans-serif;\n  font-size:medium;\n  font-weight: bold;\n  }\n \n  .mat-card-title {\n    color:white;\n    font-weight: bold;\n    font-size:x-large !important;\n  }\n\n\n  .mat-card-subtitle {\n    font-weight:medium;\n    color:white;\n  }\n\n  .teamdesc{\n    font-size:medium;\n    font-family:Georgia;\n  }\n\n.teamsideheading{\n  font-weight: bold;\n  display: inline-block;\n  font-size:small !important;\n}\n }\n\n.mat-card-header-text{\n    width: 100%;\n  }\n\n.example-header-image {\n    background-image: url('BT_logo.jpg');\n    background-size: cover;\n  }\n\nmat-paginator {\n    background:transparent;\n    color:black\n  }\n\n.mat-tab-label{\n    color:black;\n    font-family:sans-serif;\n  font-size:small;\n  font-weight: bold;\n  }\n\nbutton{\n    padding:0.932rem;\n  }\n\n.mat-card-title {\n    color:white;\n    font-weight: bold;\n    font-size:medium !important;\n  }\n\n.mat-card-subtitle {\n    font-weight:small;\n    color:white;\n  }\n\n.teamdesc{\n    font-size:small;\n    font-family:Georgia;\n  }\n\n.teamsideheading{\n  font-weight: bold;\n  display: inline-block;\n  font-size:small !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGVhbXMvdGVhbS1kZXRhaWwvdGVhbS1kZXRhaWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7RUFDRSxlQUFlO0VBQ2YsK0JBQStCO0lBQzdCLFdBQVc7QUFDZjs7QUFFQTs7QUFFQTtJQUNJLGVBQWU7SUFDZiwrQkFBK0I7SUFDL0IsV0FBVztFQUNiO0VBQ0E7SUFDRSxXQUFXO0lBQ1gsc0JBQXNCO0VBQ3hCLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakI7O0VBRUE7SUFDRSxXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLDBCQUEwQjtFQUM1Qjs7O0VBR0E7SUFDRSxrQkFBa0I7SUFDbEIsV0FBVztFQUNiOztFQUVBO0lBQ0UsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtFQUNyQjs7QUFFRjtFQUNFLGlCQUFpQjtFQUNqQixxQkFBcUI7RUFDckIsMEJBQTBCO0FBQzVCO0NBQ0M7O0FBQ0Q7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsK0JBQStCO0lBQy9CLFdBQVc7RUFDYjtFQUNBO0lBQ0UsV0FBVztJQUNYLHNCQUFzQjtFQUN4QixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCOztFQUVBO0lBQ0UsV0FBVztJQUNYLGlCQUFpQjtJQUNqQiw0QkFBNEI7RUFDOUI7OztFQUdBO0lBQ0Usa0JBQWtCO0lBQ2xCLFdBQVc7RUFDYjs7RUFFQTtJQUNFLGdCQUFnQjtJQUNoQixtQkFBbUI7RUFDckI7O0FBRUY7RUFDRSxpQkFBaUI7RUFDakIscUJBQXFCO0VBQ3JCLDBCQUEwQjtBQUM1QjtDQUNDOztBQUNDO0lBQ0UsV0FBVztFQUNiOztBQUNBO0lBQ0Usb0NBQXFEO0lBQ3JELHNCQUFzQjtFQUN4Qjs7QUFFQTtJQUNFLHNCQUFzQjtJQUN0QjtFQUNGOztBQUNBO0lBQ0UsV0FBVztJQUNYLHNCQUFzQjtFQUN4QixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCOztBQUVBO0lBQ0UsZ0JBQWdCO0VBQ2xCOztBQUlBO0lBQ0UsV0FBVztJQUNYLGlCQUFpQjtJQUNqQiwyQkFBMkI7RUFDN0I7O0FBR0E7SUFDRSxpQkFBaUI7SUFDakIsV0FBVztFQUNiOztBQUVBO0lBQ0UsZUFBZTtJQUNmLG1CQUFtQjtFQUNyQjs7QUFFRjtFQUNFLGlCQUFpQjtFQUNqQixxQkFBcUI7RUFDckIsMEJBQTBCO0FBQzVCIiwiZmlsZSI6InNyYy9hcHAvdGVhbXMvdGVhbS1kZXRhaWwvdGVhbS1kZXRhaWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLmV4YW1wbGUtY2FyZCB7XG4gIHdpZHRoOiAzMC4yNXJlbTtcbiAgYmFja2dyb3VuZDpyZ2JhKDAsIDAsIDAsIDAuNTU1KTtcbiAgICBjb2xvcjpXaGl0ZTtcbn1cblxuQG1lZGlhKG1pbi13aWR0aDozMi41cmVtKVxue1xuLmV4YW1wbGUtY2FyZCB7XG4gICAgd2lkdGg6IDUxLjI1cmVtO1xuICAgIGJhY2tncm91bmQ6cmdiYSgwLCAwLCAwLCAwLjU1NSk7XG4gICAgY29sb3I6V2hpdGU7XG4gIH1cbiAgLm1hdC10YWItbGFiZWx7XG4gICAgY29sb3I6YmxhY2s7XG4gICAgZm9udC1mYW1pbHk6c2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOm1lZGl1bTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIH1cbiBcbiAgLm1hdC1jYXJkLXRpdGxlIHtcbiAgICBjb2xvcjp3aGl0ZTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXNpemU6bGFyZ2UgIWltcG9ydGFudDtcbiAgfVxuXG5cbiAgLm1hdC1jYXJkLXN1YnRpdGxlIHtcbiAgICBmb250LXdlaWdodDptZWRpdW07XG4gICAgY29sb3I6d2hpdGU7XG4gIH1cblxuICAudGVhbWRlc2N7XG4gICAgZm9udC1zaXplOm1lZGl1bTtcbiAgICBmb250LWZhbWlseTpHZW9yZ2lhO1xuICB9XG5cbi50ZWFtc2lkZWhlYWRpbmd7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZvbnQtc2l6ZTpzbWFsbCAhaW1wb3J0YW50O1xufVxuIH1cbkBtZWRpYShtaW4td2lkdGg6NDVyZW0pXG57XG4uZXhhbXBsZS1jYXJkIHtcbiAgICB3aWR0aDogNzEuMjVyZW07XG4gICAgYmFja2dyb3VuZDpyZ2JhKDAsIDAsIDAsIDAuNTU1KTtcbiAgICBjb2xvcjpXaGl0ZTtcbiAgfVxuICAubWF0LXRhYi1sYWJlbHtcbiAgICBjb2xvcjpibGFjaztcbiAgICBmb250LWZhbWlseTpzYW5zLXNlcmlmO1xuICBmb250LXNpemU6bWVkaXVtO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgfVxuIFxuICAubWF0LWNhcmQtdGl0bGUge1xuICAgIGNvbG9yOndoaXRlO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc2l6ZTp4LWxhcmdlICFpbXBvcnRhbnQ7XG4gIH1cblxuXG4gIC5tYXQtY2FyZC1zdWJ0aXRsZSB7XG4gICAgZm9udC13ZWlnaHQ6bWVkaXVtO1xuICAgIGNvbG9yOndoaXRlO1xuICB9XG5cbiAgLnRlYW1kZXNje1xuICAgIGZvbnQtc2l6ZTptZWRpdW07XG4gICAgZm9udC1mYW1pbHk6R2VvcmdpYTtcbiAgfVxuXG4udGVhbXNpZGVoZWFkaW5ne1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmb250LXNpemU6c21hbGwgIWltcG9ydGFudDtcbn1cbiB9XG4gIC5tYXQtY2FyZC1oZWFkZXItdGV4dHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICAuZXhhbXBsZS1oZWFkZXItaW1hZ2Uge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnc3JjL2FwcC9waWN0dXJlcy9CVF9sb2dvLmpwZycpO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIH1cblxuICBtYXQtcGFnaW5hdG9yIHtcbiAgICBiYWNrZ3JvdW5kOnRyYW5zcGFyZW50O1xuICAgIGNvbG9yOmJsYWNrXG4gIH1cbiAgLm1hdC10YWItbGFiZWx7XG4gICAgY29sb3I6YmxhY2s7XG4gICAgZm9udC1mYW1pbHk6c2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOnNtYWxsO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgfVxuXG4gIGJ1dHRvbntcbiAgICBwYWRkaW5nOjAuOTMycmVtO1xuICB9XG5cblxuXG4gIC5tYXQtY2FyZC10aXRsZSB7XG4gICAgY29sb3I6d2hpdGU7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zaXplOm1lZGl1bSAhaW1wb3J0YW50O1xuICB9XG5cblxuICAubWF0LWNhcmQtc3VidGl0bGUge1xuICAgIGZvbnQtd2VpZ2h0OnNtYWxsO1xuICAgIGNvbG9yOndoaXRlO1xuICB9XG5cbiAgLnRlYW1kZXNje1xuICAgIGZvbnQtc2l6ZTpzbWFsbDtcbiAgICBmb250LWZhbWlseTpHZW9yZ2lhO1xuICB9XG5cbi50ZWFtc2lkZWhlYWRpbmd7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZvbnQtc2l6ZTpzbWFsbCAhaW1wb3J0YW50O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/teams/team-detail/team-detail.component.ts":
/*!************************************************************!*\
  !*** ./src/app/teams/team-detail/team-detail.component.ts ***!
  \************************************************************/
/*! exports provided: TeamDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamDetailComponent", function() { return TeamDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _team_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../team.service */ "./src/app/teams/team.service.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _teamsedit_teamsedit_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../teamsedit/teamsedit.component */ "./src/app/teams/teamsedit/teamsedit.component.ts");
/* harmony import */ var src_app_authentication_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/authentication/auth.service */ "./src/app/authentication/auth.service.ts");
/* harmony import */ var src_app_shared_helper_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/helper.service */ "./src/app/shared/helper.service.ts");








let TeamDetailComponent = class TeamDetailComponent {
    constructor(ts, rs, as, ru, dialog, hs) {
        this.ts = ts;
        this.rs = rs;
        this.as = as;
        this.ru = ru;
        this.dialog = dialog;
        this.hs = hs;
    }
    ngOnInit() {
        this.rs.params.subscribe((ps) => {
            if (ps['name']) {
                this.tname = ps['name'];
                this.SelectedTeam = this.ts.getTeam(this.tname);
            }
        });
        this.as.user.subscribe((data) => {
            if (data) {
                this.edit_team = data.privilege;
            }
        });
        if (this.edit_team !== 'Read') {
            this.edit_trigger = true;
        }
    }
    OneditTeam() {
        this.ts.teamnameSelected.next(this.tname);
        this.dialog.open(_teamsedit_teamsedit_component__WEBPACK_IMPORTED_MODULE_5__["TeamseditComponent"]);
    }
    OndeleteTeam() {
        this.ts.deleteTeam(this.tname).subscribe(emp_loaded => {
            this.hs.openSnackBar("Team Details Deleted", "Success");
            this.ru.navigate(['../../teams'], { relativeTo: this.rs });
        }, errorMessage => {
            this.hs.openSnackBar('errorMessage', 'Error');
        });
    }
};
TeamDetailComponent.ctorParameters = () => [
    { type: _team_service__WEBPACK_IMPORTED_MODULE_3__["TeamService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: src_app_authentication_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] },
    { type: src_app_shared_helper_service__WEBPACK_IMPORTED_MODULE_7__["HelperService"] }
];
TeamDetailComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-team-detail',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./team-detail.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/teams/team-detail/team-detail.component.html")).default,
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./team-detail.component.css */ "./src/app/teams/team-detail/team-detail.component.css")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_team_service__WEBPACK_IMPORTED_MODULE_3__["TeamService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        src_app_authentication_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"], src_app_shared_helper_service__WEBPACK_IMPORTED_MODULE_7__["HelperService"]])
], TeamDetailComponent);



/***/ }),

/***/ "./src/app/teams/team.service.ts":
/*!***************************************!*\
  !*** ./src/app/teams/team.service.ts ***!
  \***************************************/
/*! exports provided: TeamService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamService", function() { return TeamService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





let TeamService = class TeamService {
    constructor(http) {
        this.http = http;
        this.teamsStatus = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]([]);
        this.teamnameSelected = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]('');
    }
    getTeams() {
        return this.http.get('https://mirrorview.herokuapp.com/api/teams')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])((em) => {
            let errorMessage = em.error.error;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(errorMessage);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((teamdata) => {
            return teamdata.map((info) => {
                return {
                    id: info._id,
                    teamname: info.teamname,
                    teamdesc: info.teamdesc,
                    teamqueue: info.teamqueue,
                    teammailId: info.teammailId
                };
            });
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(teams_loaded => {
            this.teams = teams_loaded;
            //console.log(this.teams)
            this.teamsStatus.next(this.teams.slice());
        }));
    }
    getTeamNames() {
        //console.log(this.teams)
        return this.teams.map(tname => tname.teamname);
    }
    getTeam(name1) {
        return this.teams.find(name => name.teamname === name1);
    }
    deleteTeam(name1) {
        return this.http.delete("https://mirrorview.herokuapp.com/api/teams/" + name1)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])((em) => {
            let errorMessage = em.error.error;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(errorMessage);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((teamdata) => {
            return teamdata.map((info) => {
                //console.log(info)
                return {
                    id: info._id,
                    teamname: info.teamname,
                    teamdesc: info.teamdesc,
                    teamqueue: info.teamqueue,
                    teammailId: info.teammailId
                };
            });
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(teams_loaded => {
            this.teams = teams_loaded;
            //console.log(this.teams)
            this.teamsStatus.next(this.teams.slice());
        }));
    }
    updateTeam(team, teamContent) {
        return this.http.put('https://mirrorview.herokuapp.com/api/teams/' + team, teamContent)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])((em) => {
            let errorMessage = em.error.error;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(errorMessage);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((info) => {
            //console.log("g")
            //console.log(info)
            return {
                id: info._id,
                teamname: info.teamname,
                teamdesc: info.teamdesc,
                teamqueue: info.teamqueue,
                teammailId: info.teammailId
            };
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(team_loaded => {
            this.teams[this.teams.indexOf(this.teams.find(name => name.teamname === teamContent.teamname))] = team_loaded;
            //console.log(team)
            //console.log(this.teams)
            this.teamsStatus.next(this.teams.slice());
        }));
    }
    addTeam(team) {
        return this.http.post('https://mirrorview.herokuapp.com/api/teams', team)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])((em) => {
            let errorMessage = em.error.error;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(errorMessage);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((info) => {
            return {
                id: info._id,
                teamname: info.teamname,
                teamdesc: info.teamdesc,
                teamqueue: info.teamqueue,
                teammailId: info.teammailId
            };
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(team_loaded => {
            this.teams.push(team_loaded);
            //console.log(this.teams)
            this.teamsStatus.next(this.teams.slice());
        }));
    }
};
TeamService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
TeamService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
], TeamService);



/***/ }),

/***/ "./src/app/teams/team_resolver.ts":
/*!****************************************!*\
  !*** ./src/app/teams/team_resolver.ts ***!
  \****************************************/
/*! exports provided: TeamResolverService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamResolverService", function() { return TeamResolverService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _authentication_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../authentication/auth.service */ "./src/app/authentication/auth.service.ts");
/* harmony import */ var _team_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./team.service */ "./src/app/teams/team.service.ts");




let TeamResolverService = class TeamResolverService {
    constructor(as, ts) {
        this.as = as;
        this.ts = ts;
    }
    resolve(ars, rss) {
        return this.ts.getTeams();
    }
};
TeamResolverService.ctorParameters = () => [
    { type: _authentication_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: _team_service__WEBPACK_IMPORTED_MODULE_3__["TeamService"] }
];
TeamResolverService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_authentication_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _team_service__WEBPACK_IMPORTED_MODULE_3__["TeamService"]])
], TeamResolverService);



/***/ }),

/***/ "./src/app/teams/teams-list/teams-list.component.css":
/*!***********************************************************!*\
  !*** ./src/app/teams/teams-list/teams-list.component.css ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".team-form{\n\n  padding:20px;\n  margin:10px;\n}\nmat-label {\n  color:black;\n  font-family:sans-serif;\n  font-style: italic;\n  \n  font-size:medium;\n  font-weight: bold;\n}\n.teamselectbtn{\n  margin-left: 20px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGVhbXMvdGVhbXMtbGlzdC90ZWFtcy1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0VBRUUsWUFBWTtFQUNaLFdBQVc7QUFDYjtBQUNBO0VBQ0UsV0FBVztFQUNYLHNCQUFzQjtFQUN0QixrQkFBa0I7O0VBRWxCLGdCQUFnQjtFQUNoQixpQkFBaUI7QUFDbkI7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL3RlYW1zL3RlYW1zLWxpc3QvdGVhbXMtbGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRlYW0tZm9ybXtcblxuICBwYWRkaW5nOjIwcHg7XG4gIG1hcmdpbjoxMHB4O1xufVxubWF0LWxhYmVsIHtcbiAgY29sb3I6YmxhY2s7XG4gIGZvbnQtZmFtaWx5OnNhbnMtc2VyaWY7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgXG4gIGZvbnQtc2l6ZTptZWRpdW07XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4udGVhbXNlbGVjdGJ0bntcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG59XG4iXX0= */");

/***/ }),

/***/ "./src/app/teams/teams-list/teams-list.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/teams/teams-list/teams-list.component.ts ***!
  \**********************************************************/
/*! exports provided: TeamsListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamsListComponent", function() { return TeamsListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _team_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../team.service */ "./src/app/teams/team.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _teamsedit_teamsedit_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../teamsedit/teamsedit.component */ "./src/app/teams/teamsedit/teamsedit.component.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var src_app_authentication_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/authentication/auth.service */ "./src/app/authentication/auth.service.ts");









let TeamsListComponent = class TeamsListComponent {
    constructor(ts, as, rs, ru, dialog) {
        this.ts = ts;
        this.as = as;
        this.rs = rs;
        this.ru = ru;
        this.dialog = dialog;
        this.myControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
    }
    ngOnInit() {
        this.rs.routeReuseStrategy.shouldReuseRoute = () => false;
        this.as.user.subscribe((data) => {
            if (data) {
                this.add_team = data.privilege;
            }
        });
        if (this.add_team !== 'Read') {
            this.add_trigger = true;
        }
        this.ts.teamsStatus.subscribe((team) => {
            this.teamsUpdated = team;
        });
        this.filteredOptions = this.myControl.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(value => this._filter(value)));
    }
    _filter(value) {
        const filterValue = value.toLowerCase();
        this.teamsshow = this.ts.getTeamNames();
        return this.teamsshow.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
    }
    Onselect(evt) {
        this.add_trigger = false;
        this.rs.navigate([evt.option.value], { relativeTo: this.ru });
    }
    OnaddnewTeam() {
        this.rs.navigate(['new'], { relativeTo: this.ru });
        this.dialog.open(_teamsedit_teamsedit_component__WEBPACK_IMPORTED_MODULE_6__["TeamseditComponent"]);
    }
};
TeamsListComponent.ctorParameters = () => [
    { type: _team_service__WEBPACK_IMPORTED_MODULE_4__["TeamService"] },
    { type: src_app_authentication_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialog"] }
];
TeamsListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-teams-list',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./teams-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/teams/teams-list/teams-list.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./teams-list.component.css */ "./src/app/teams/teams-list/teams-list.component.css")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_team_service__WEBPACK_IMPORTED_MODULE_4__["TeamService"], src_app_authentication_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialog"]])
], TeamsListComponent);



/***/ }),

/***/ "./src/app/teams/teams.component.css":
/*!*******************************************!*\
  !*** ./src/app/teams/teams.component.css ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RlYW1zL3RlYW1zLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/teams/teams.component.ts":
/*!******************************************!*\
  !*** ./src/app/teams/teams.component.ts ***!
  \******************************************/
/*! exports provided: TeamsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamsComponent", function() { return TeamsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let TeamsComponent = class TeamsComponent {
    constructor() { }
    ngOnInit() {
    }
};
TeamsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-teams',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./teams.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/teams/teams.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./teams.component.css */ "./src/app/teams/teams.component.css")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], TeamsComponent);



/***/ }),

/***/ "./src/app/teams/teamsedit/teamsedit.component.css":
/*!*********************************************************!*\
  !*** ./src/app/teams/teamsedit/teamsedit.component.css ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".example-form {\n    max-width: 56.25rem;\n    width: 70%;\n    min-height :33rem;\n  }\n  \n  .example-full-width {\n    width: 100%;\n  }\n  \n  td {\n    display: inline-block;\n    padding-right: 2px;\n  }\n  \n  @media(min-width:40rem)\n  {\n    .example-form {\n      max-width: 56.25rem;\n      width: 90%;\n      min-height :33rem;\n    }\n    \n    .example-full-width {\n      width: 100%;\n    }\n    \n    td {\n      padding-right: 8px;\n    }\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGVhbXMvdGVhbXNlZGl0L3RlYW1zZWRpdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksbUJBQW1CO0lBQ25CLFVBQVU7SUFDVixpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxXQUFXO0VBQ2I7O0VBRUE7SUFDRSxxQkFBcUI7SUFDckIsa0JBQWtCO0VBQ3BCOztFQUdBOztJQUVFO01BQ0UsbUJBQW1CO01BQ25CLFVBQVU7TUFDVixpQkFBaUI7SUFDbkI7O0lBRUE7TUFDRSxXQUFXO0lBQ2I7O0lBRUE7TUFDRSxrQkFBa0I7SUFDcEI7RUFDRiIsImZpbGUiOiJzcmMvYXBwL3RlYW1zL3RlYW1zZWRpdC90ZWFtc2VkaXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leGFtcGxlLWZvcm0ge1xuICAgIG1heC13aWR0aDogNTYuMjVyZW07XG4gICAgd2lkdGg6IDcwJTtcbiAgICBtaW4taGVpZ2h0IDozM3JlbTtcbiAgfVxuICBcbiAgLmV4YW1wbGUtZnVsbC13aWR0aCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgXG4gIHRkIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgcGFkZGluZy1yaWdodDogMnB4O1xuICB9XG5cblxuICBAbWVkaWEobWluLXdpZHRoOjQwcmVtKVxuICB7XG4gICAgLmV4YW1wbGUtZm9ybSB7XG4gICAgICBtYXgtd2lkdGg6IDU2LjI1cmVtO1xuICAgICAgd2lkdGg6IDkwJTtcbiAgICAgIG1pbi1oZWlnaHQgOjMzcmVtO1xuICAgIH1cbiAgICBcbiAgICAuZXhhbXBsZS1mdWxsLXdpZHRoIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbiAgICBcbiAgICB0ZCB7XG4gICAgICBwYWRkaW5nLXJpZ2h0OiA4cHg7XG4gICAgfVxuICB9Il19 */");

/***/ }),

/***/ "./src/app/teams/teamsedit/teamsedit.component.ts":
/*!********************************************************!*\
  !*** ./src/app/teams/teamsedit/teamsedit.component.ts ***!
  \********************************************************/
/*! exports provided: TeamseditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamseditComponent", function() { return TeamseditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_shared_helper_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/helper.service */ "./src/app/shared/helper.service.ts");
/* harmony import */ var _team_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../team.service */ "./src/app/teams/team.service.ts");






let TeamseditComponent = class TeamseditComponent {
    constructor(ts, ru, rs, hs) {
        this.ts = ts;
        this.ru = ru;
        this.rs = rs;
        this.hs = hs;
        this.edit_trigger = false;
    }
    ngOnInit() {
        this.edit_trigger = false;
        this.ts.teamnameSelected.subscribe((name) => {
            this.tname = name;
        });
        if (this.tname) {
            this.edit_trigger = true;
        }
        this.initForm();
    }
    initForm() {
        let name = '';
        let mail = '';
        let desc = '';
        let queue = '';
        if (this.edit_trigger) {
            this.teamSel = this.ts.getTeam(this.tname);
            name = this.teamSel.teamname;
            mail = this.teamSel.teammailId;
            desc = this.teamSel.teamdesc;
            queue = this.teamSel.teamqueue;
        }
        this.teamForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            id: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            teamname: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](name, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            teammailId: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](mail, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]),
            teamdesc: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](desc),
            teamqueue: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](queue)
        });
    }
    OnSubmit() {
        if (this.edit_trigger) {
            this.teamForm.patchValue({ id: this.teamSel.id });
            console.log(this.teamForm.value);
            this.ts.updateTeam(this.tname, this.teamForm.value).subscribe(emp_loaded => {
                this.hs.openSnackBar("Team Details Updated", "Success");
                this.rs.navigate(['../../teams'], { relativeTo: this.ru });
            }, errorMessage => {
                this.hs.openSnackBar('errorMessage', 'Error');
            });
        }
        else {
            this.ts.addTeam(this.teamForm.value).subscribe(emp_loaded => {
                this.hs.openSnackBar("Team Details Added", "Success");
                this.rs.navigate(['../teams'], { relativeTo: this.ru });
            }, errorMessage => {
                this.hs.openSnackBar('errorMessage', 'Error');
            });
        }
        this.ts.teamnameSelected.next('');
    }
};
TeamseditComponent.ctorParameters = () => [
    { type: _team_service__WEBPACK_IMPORTED_MODULE_5__["TeamService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: src_app_shared_helper_service__WEBPACK_IMPORTED_MODULE_4__["HelperService"] }
];
TeamseditComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-teamsedit',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./teamsedit.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/teams/teamsedit/teamsedit.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./teamsedit.component.css */ "./src/app/teams/teamsedit/teamsedit.component.css")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_team_service__WEBPACK_IMPORTED_MODULE_5__["TeamService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], src_app_shared_helper_service__WEBPACK_IMPORTED_MODULE_4__["HelperService"]])
], TeamseditComponent);



/***/ }),

/***/ "./src/app/user-management/user-management.component.css":
/*!***************************************************************!*\
  !*** ./src/app/user-management/user-management.component.css ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".example-large-box {\n    height: 100%;\n    width: 70%;\n  }\n\n  .example-card {\n    max-width: 500px;\n    min-height: 300px;\n    background:rgba(0, 0, 0, 0.555);\n    color:White;\n  }\n\n  .mat-card-header-text{\n    width: 100%;\n  }\n\n  mat-label{\n  \n    color:white;\n    font-size:small;\n  }\n\n  .mat-tab-label{\n    color:green;\n    font-family:sans-serif;\n  font-size:small;\n  font-weight: bold;\n  }\n\n  button{\n    background:white;\n    color:black;\n    font-weight: bold;\n    padding:1px;\n  }\n\n  @media(min-width:40rem){\n    mat-label{\n  \n      color:white;\n      font-size:medium;\n    }\n  \n    .mat-tab-label{\n      color:green;\n      font-family:sans-serif;\n    font-size:medium;\n    font-weight: bold;\n    }\n  \n  \n    button{\n      background:white;\n      color:black;\n      font-weight: bolder;\n      padding:5px;\n    }\n  \n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci1tYW5hZ2VtZW50L3VzZXItbWFuYWdlbWVudC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLFVBQVU7RUFDWjs7RUFFQTtJQUNFLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsK0JBQStCO0lBQy9CLFdBQVc7RUFDYjs7RUFDQTtJQUNFLFdBQVc7RUFDYjs7RUFFQTs7SUFFRSxXQUFXO0lBQ1gsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLFdBQVc7SUFDWCxzQkFBc0I7RUFDeEIsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQjs7RUFHQTtJQUNFLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLFdBQVc7RUFDYjs7RUFFQTtJQUNFOztNQUVFLFdBQVc7TUFDWCxnQkFBZ0I7SUFDbEI7O0lBRUE7TUFDRSxXQUFXO01BQ1gsc0JBQXNCO0lBQ3hCLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakI7OztJQUdBO01BQ0UsZ0JBQWdCO01BQ2hCLFdBQVc7TUFDWCxtQkFBbUI7TUFDbkIsV0FBVztJQUNiOztFQUVGIiwiZmlsZSI6InNyYy9hcHAvdXNlci1tYW5hZ2VtZW50L3VzZXItbWFuYWdlbWVudC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4YW1wbGUtbGFyZ2UtYm94IHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDcwJTtcbiAgfVxuXG4gIC5leGFtcGxlLWNhcmQge1xuICAgIG1heC13aWR0aDogNTAwcHg7XG4gICAgbWluLWhlaWdodDogMzAwcHg7XG4gICAgYmFja2dyb3VuZDpyZ2JhKDAsIDAsIDAsIDAuNTU1KTtcbiAgICBjb2xvcjpXaGl0ZTtcbiAgfVxuICAubWF0LWNhcmQtaGVhZGVyLXRleHR7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiBcbiAgbWF0LWxhYmVse1xuICBcbiAgICBjb2xvcjp3aGl0ZTtcbiAgICBmb250LXNpemU6c21hbGw7XG4gIH1cblxuICAubWF0LXRhYi1sYWJlbHtcbiAgICBjb2xvcjpncmVlbjtcbiAgICBmb250LWZhbWlseTpzYW5zLXNlcmlmO1xuICBmb250LXNpemU6c21hbGw7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB9XG5cblxuICBidXR0b257XG4gICAgYmFja2dyb3VuZDp3aGl0ZTtcbiAgICBjb2xvcjpibGFjaztcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBwYWRkaW5nOjFweDtcbiAgfVxuXG4gIEBtZWRpYShtaW4td2lkdGg6NDByZW0pe1xuICAgIG1hdC1sYWJlbHtcbiAgXG4gICAgICBjb2xvcjp3aGl0ZTtcbiAgICAgIGZvbnQtc2l6ZTptZWRpdW07XG4gICAgfVxuICBcbiAgICAubWF0LXRhYi1sYWJlbHtcbiAgICAgIGNvbG9yOmdyZWVuO1xuICAgICAgZm9udC1mYW1pbHk6c2Fucy1zZXJpZjtcbiAgICBmb250LXNpemU6bWVkaXVtO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIH1cbiAgXG4gIFxuICAgIGJ1dHRvbntcbiAgICAgIGJhY2tncm91bmQ6d2hpdGU7XG4gICAgICBjb2xvcjpibGFjaztcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gICAgICBwYWRkaW5nOjVweDtcbiAgICB9XG4gIFxuICB9Il19 */");

/***/ }),

/***/ "./src/app/user-management/user-management.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/user-management/user-management.component.ts ***!
  \**************************************************************/
/*! exports provided: UserManagementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserManagementComponent", function() { return UserManagementComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _authentication_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../authentication/auth.service */ "./src/app/authentication/auth.service.ts");
/* harmony import */ var _shared_helper_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/helper.service */ "./src/app/shared/helper.service.ts");






let UserManagementComponent = class UserManagementComponent {
    constructor(authService, router, hs) {
        this.authService = authService;
        this.router = router;
        this.hs = hs;
        this.isLoading = false;
        this.error = null;
        console.log(this.delform);
    }
    OnDeleteUser() {
        const del_email = this.delform.value.email;
        let delObs;
        this.isLoading = true;
        console.log("data " + del_email);
        delObs = this.authService.deleteUser(del_email);
        delObs.subscribe(resData => {
            //console.log(resData);
            this.isLoading = false;
            this.hs.openSnackBar('User Deleted Successfully', 'Hurray!');
        }, errorMessage => {
            //console.log(errorMessage);
            this.error = errorMessage;
            this.hs.openSnackBar(errorMessage, 'Error');
            this.isLoading = false;
        });
        this.delform.reset();
    }
    onSubmit(form) {
        const email = form.value.email;
        const uname = form.value.uname;
        const password = form.value.password;
        const privilege = form.value.privilege;
        console.log(email, password, privilege);
        let authObs;
        this.isLoading = true;
        authObs = this.authService.signup(uname, email, password, privilege);
        authObs.subscribe(resData => {
            //console.log(resData);
            this.isLoading = false;
            this.hs.openSnackBar('User Created', 'Hurray!');
        }, errorMessage => {
            this.error = errorMessage;
            this.hs.openSnackBar(this.error, 'Error');
            this.isLoading = false;
        });
        form.reset();
    }
    OnUpdateUser() {
        const upd_email = this.updform.value.email;
        const upd_privilege = this.updform.value.privilege;
        let updObs;
        this.isLoading = true;
        updObs = this.authService.updateUser(upd_email, upd_privilege);
        updObs.subscribe(resData => {
            this.isLoading = false;
            this.hs.openSnackBar('User Updated Successfully', 'Hurray!');
        }, errorMessage => {
            this.error = errorMessage;
            this.hs.openSnackBar(errorMessage, 'Error');
            this.isLoading = false;
        });
        this.updform.reset();
    }
    ngOnDestroy() {
        if (this.authObs) {
            this.authObs.unsubscribe();
        }
    }
};
UserManagementComponent.ctorParameters = () => [
    { type: _authentication_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _shared_helper_service__WEBPACK_IMPORTED_MODULE_5__["HelperService"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('deleteForm'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"])
], UserManagementComponent.prototype, "delform", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('UpdateForm'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"])
], UserManagementComponent.prototype, "updform", void 0);
UserManagementComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-user-management',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./user-management.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/user-management/user-management.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./user-management.component.css */ "./src/app/user-management/user-management.component.css")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_authentication_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _shared_helper_service__WEBPACK_IMPORTED_MODULE_5__["HelperService"]])
], UserManagementComponent);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/__ivy_ngcc__/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Angular_practice\MEAN-master\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map