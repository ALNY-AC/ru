import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Injectable, Component, ViewChild, Input, Output, EventEmitter, NgModule, defineInjectable } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class RuService {
    constructor() { }
}
RuService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
RuService.ctorParameters = () => [];
/** @nocollapse */ RuService.ngInjectableDef = defineInjectable({ factory: function RuService_Factory() { return new RuService(); }, token: RuService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class RuComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
RuComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-ru',
                template: `
    <p>
      ru works!
    </p>
  `
            }] }
];
/** @nocollapse */
RuComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ButtonComponent {
    constructor() {
        this.round = false;
        this.plain = false;
        this.disabled = false;
        this.ghost = false;
        this.type = 'default';
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
ButtonComponent.decorators = [
    { type: Component, args: [{
                selector: 'ru-button',
                template: "<button [class]=\"'ru-button ru-button__'+type\" [disabled]=\"disabled\" [class.ru-button__ghost]=\"ghost\"\r\n    [class.ru-button__round]=\"round\" [class.ru-button__plain]=\"plain\">\r\n    <ng-content></ng-content>\r\n</button>",
                styles: [".ru-button{border:1px solid transparent;outline:0;line-height:normal;border-radius:4px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;background-color:transparent;font-size:12px;padding:6px 18px;margin:0;display:inline-block;cursor:pointer}.ru-button__round{border-radius:20px}.ru-button__default{border-color:#d8dce5;background-color:#fff}.ru-button__green{border-color:#01a89f;background-color:#01a89f;color:#fff}.ru-button__green.ru-button__plain{color:#01a89f;background-color:#ebfffe;border-color:#a7e1de}.ru-button__plain{background-color:#fff}.ru-button__text{border:none;color:#01a89f}.ru-button[disabled]{opacity:.5}.ru-button[disabled]:hover{cursor:not-allowed}.ru-button.ru-button__ghost{background-color:#fff}"]
            }] }
];
ButtonComponent.propDecorators = {
    round: [{ type: Input }],
    plain: [{ type: Input }],
    disabled: [{ type: Input }],
    ghost: [{ type: Input }],
    type: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class PanelComponent {
    constructor() {
        this.title = '';
        this.shadow = 'always';
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
PanelComponent.decorators = [
    { type: Component, args: [{
                selector: 'ru-panel',
                template: "<div [class]=\"'ru-panel ru-panel-'+shadow\">\n  <div class=\"ru-panel-head\">\n    <span *ngIf=\"title\" class=\"ru-panel-head-title\">{{title}}</span>\n    <ng-content *ngIf=\"!title\" select=\"[slot=head]\"></ng-content>\n  </div>\n  <div class=\"ru-panel-body\">\n    <ng-content></ng-content>\n  </div>\n  <div class=\"ru-panel-footer\">\n    <ng-content select=\"[slot=footer]\"></ng-content>\n  </div>\n</div>",
                styles: [".ru-panel{background-color:#fff;border-radius:4px;border:1px solid #e6ebf5;box-sizing:border-box}.ru-panel *{box-sizing:border-box}.ru-panel-always,.ru-panel-hover:hover{box-shadow:0 2px 12px 0 rgba(0,0,0,.1)}.ru-panel-never{box-shadow:none}.ru-panel-head-title{padding:18px 20px;border-bottom:1px solid #e6ebf5;display:block}.ru-panel-body,.ru-panel-footer{padding:20px}"]
            }] }
];
/** @nocollapse */
PanelComponent.ctorParameters = () => [];
PanelComponent.propDecorators = {
    title: [{ type: Input }],
    shadow: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class InputComponent {
    constructor() {
        this.prefixIcon = '';
        this.suffixIcon = '';
        this.suffixIconClick = new EventEmitter(); // handle on the input icon
        // handle on the input icon
        this.prefixIconClick = new EventEmitter(); // handle on the input icon
        // handle on the input icon
        this.model = '';
        this.modelChange = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @param {?} val
     * @return {?}
     */
    handleInput(val) {
        this.model = val;
        this.modelChange.emit(val);
    }
}
InputComponent.decorators = [
    { type: Component, args: [{
                selector: 'ru-input',
                template: "<div class=\"ru-input\">\n  <div (click)=\"prefixIconClick.emit($event)\" class=\"prefix-icon\" *ngIf=\"prefixIcon\">\n    <i [class]=\"prefixIcon\"></i>\n  </div>\n  <input [ngModel]=\"model\" (ngModelChange)=\"handleInput($event)\" type=\"text\">\n  <div (click)=\"suffixIconClick.emit($event)\" class=\"suffix-icon\" *ngIf=\"suffixIcon\">\n    <i [class]=\"suffixIcon\"></i>\n  </div>\n</div>",
                styles: [".ru-input{border:1px solid #dfe6e8;border-radius:4px;display:inline-block;line-height:1;padding:6px 11px;margin:0;box-sizing:border-box;background-color:#fff}.ru-input *{box-sizing:border-box}.ru-input input{border:none;outline:0;padding:0;line-height:0}.ru-input .prefix-icon{margin-right:7px;display:inline-block}.ru-input .suffix-icon{margin-left:7px;display:inline-block}"]
            }] }
];
/** @nocollapse */
InputComponent.ctorParameters = () => [];
InputComponent.propDecorators = {
    prefixIcon: [{ type: Input, args: ['prefix-icon',] }],
    suffixIcon: [{ type: Input, args: ['suffix-icon',] }],
    suffixIconClick: [{ type: Output, args: ['suffix-click',] }],
    prefixIconClick: [{ type: Output, args: ['prefix-click',] }],
    model: [{ type: Input }],
    modelChange: [{ type: Output }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TableComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
TableComponent.decorators = [
    { type: Component, args: [{
                selector: 'ru-table',
                template: "<table border=\"1\">\n  <thead>\n    <ng-content select=\"[slot='thead']\"></ng-content>\n  </thead>\n  <tbody>\n    <ng-content></ng-content>\n  </tbody>\n</table>",
                styles: [""]
            }] }
];
/** @nocollapse */
TableComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ThComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
ThComponent.decorators = [
    { type: Component, args: [{
                selector: 'ru-th',
                template: "<th>\n  <ng-content></ng-content>\n</th>",
                styles: [""]
            }] }
];
/** @nocollapse */
ThComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TdComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
TdComponent.decorators = [
    { type: Component, args: [{
                selector: 'ru-td',
                template: "<td>\n  <ng-content></ng-content>\n</td>",
                styles: [""]
            }] }
];
/** @nocollapse */
TdComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TrComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
TrComponent.decorators = [
    { type: Component, args: [{
                selector: 'ru-tr',
                template: "<tr>\n  <ng-content></ng-content>\n</tr>",
                styles: [""]
            }] }
];
/** @nocollapse */
TrComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DialogComponent {
    constructor() {
        this.title = '';
        this.width = 'auto';
        this.show = false;
        this.maskClose = true;
        this.showChange = new EventEmitter();
    }
    /**
     * @return {?}
     */
    hide() {
        this.showChange.emit(false);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
DialogComponent.decorators = [
    { type: Component, args: [{
                selector: 'ru-dialog',
                template: "<div #dialog class=\"ru-dialog\" *ngIf=\"show\">\r\n    <div class=\"ru-dialog-mask\" (click)=\"maskClose?hide():''\"></div>\r\n    <div class=\"ru-dialog-panel\" [style.width]=\"width\">\r\n        <div class=\"ru-dialog-head\">\r\n            <div class=\"ru-dialog-head-title\">{{title}}\r\n                <i (click)=\"hide()\" class=\" close-icon\" title=\"\u5173\u95ED\">\r\n                    <svg class=\"close\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 52 52\">\r\n                        <path class=\"line\" fill=\"none\" d=\"M17.36,34.736l17.368-17.472\" />\r\n                        <path class=\"line\" fill=\"none\" d=\"M34.78,34.684L17.309,17.316\" />\r\n                    </svg>\r\n                </i>\r\n            </div>\r\n        </div>\r\n        <div class=\"ru-dialog-body\">\r\n            <ng-content></ng-content>\r\n        </div>\r\n        <div class=\"ru-dialog-footer\">\r\n            <ng-content select=\"[slot=footer]\"></ng-content>\r\n        </div>\r\n    </div>\r\n</div>",
                styles: [".ru-dialog{position:fixed;top:0;bottom:0;right:0;left:0;overflow:auto;box-sizing:border-box;padding-top:5vh;padding-bottom:5vh}.ru-dialog *{box-sizing:border-box}.ru-dialog .ru-dialog-mask{position:fixed;top:0;bottom:0;right:0;left:0;background-color:rgba(0,0,0,.3)}.ru-dialog .ru-dialog-panel{border:none;border-radius:12px;background-color:#fff;padding:0 32px 32px;position:relative;margin:0 auto;box-shadow:1px 1px 20px rgba(0,0,0,.3)}.ru-dialog .ru-dialog-panel .ru-dialog-head{color:#01a89f;font-size:20px;line-height:25px;text-align:center;padding:30px 0}.ru-dialog .ru-dialog-panel .ru-dialog-head .ru-dialog-head-title .close-icon{position:absolute;right:32px;color:#a9a9a9;cursor:pointer}.ru-dialog .ru-dialog-panel .ru-dialog-head .ru-dialog-head-title .close-icon .close{width:30px;height:30px;display:block;stroke-width:2;stroke:#a9a9a9;stroke-miterlimit:10}.ru-dialog .ru-dialog-panel .ru-dialog-footer{padding:30px 0}.ru-dialog .ru-dialog-panel .ru-dialog-footer /deep/ .ru-button{margin-right:8px;margin-bottom:8px}"]
            }] }
];
/** @nocollapse */
DialogComponent.ctorParameters = () => [];
DialogComponent.propDecorators = {
    dialog: [{ type: ViewChild, args: ['dialog',] }],
    title: [{ type: Input }],
    width: [{ type: Input }],
    show: [{ type: Input }],
    maskClose: [{ type: Input, args: ['mask-close',] }],
    showChange: [{ type: Output }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SelectComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
    }
}
SelectComponent.decorators = [
    { type: Component, args: [{
                selector: 'ru-select',
                template: "<select name=\"\" id=\"\">\n  <ng-content></ng-content>\n</select>",
                styles: [""]
            }] }
];
/** @nocollapse */
SelectComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class OptionComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
OptionComponent.decorators = [
    { type: Component, args: [{
                selector: 'ru-option',
                template: "<option value=\"\">\n  <ng-content></ng-content>\n</option>",
                styles: [""]
            }] }
];
/** @nocollapse */
OptionComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class RuModule {
}
RuModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    RuComponent,
                    ButtonComponent,
                    PanelComponent,
                    InputComponent,
                    TableComponent,
                    ThComponent,
                    TdComponent,
                    TrComponent,
                    DialogComponent,
                    SelectComponent,
                    OptionComponent
                ],
                imports: [
                    FormsModule,
                    CommonModule
                ],
                exports: [
                    RuComponent,
                    ButtonComponent,
                    PanelComponent,
                    InputComponent,
                    TableComponent,
                    ThComponent,
                    TdComponent,
                    TrComponent,
                    DialogComponent,
                    SelectComponent,
                    OptionComponent
                ]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { RuService, RuComponent, RuModule, ButtonComponent as ɵa, DialogComponent as ɵh, InputComponent as ɵc, OptionComponent as ɵj, PanelComponent as ɵb, SelectComponent as ɵi, TableComponent as ɵd, TdComponent as ɵf, ThComponent as ɵe, TrComponent as ɵg };

//# sourceMappingURL=ru.js.map