/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ViewChild, ElementRef, Input, Output, EventEmitter } from '@angular/core';
export class DialogComponent {
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
if (false) {
    /** @type {?} */
    DialogComponent.prototype.dialog;
    /** @type {?} */
    DialogComponent.prototype.title;
    /** @type {?} */
    DialogComponent.prototype.width;
    /** @type {?} */
    DialogComponent.prototype.show;
    /** @type {?} */
    DialogComponent.prototype.maskClose;
    /** @type {?} */
    DialogComponent.prototype.showChange;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9nLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3J1LyIsInNvdXJjZXMiOlsibGliL2RpYWxvZy9kaWFsb2cuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLFNBQVMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFPdEcsTUFBTSxPQUFPLGVBQWU7SUFRMUI7UUFOUyxVQUFLLEdBQVcsRUFBRSxDQUFDO1FBQ25CLFVBQUssR0FBVyxNQUFNLENBQUM7UUFDdkIsU0FBSSxHQUFZLEtBQUssQ0FBQztRQUNWLGNBQVMsR0FBWSxJQUFJLENBQUM7UUFFckMsZUFBVSxHQUFzQixJQUFJLFlBQVksRUFBTyxDQUFBO0lBQ2pELENBQUM7Ozs7SUFDakIsSUFBSTtRQUNGLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzlCLENBQUM7Ozs7SUFDRCxRQUFRO0lBQ1IsQ0FBQzs7O1lBbEJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsV0FBVztnQkFDckIsOGdDQUFzQzs7YUFFdkM7Ozs7O3FCQUVFLFNBQVMsU0FBQyxRQUFRO29CQUNsQixLQUFLO29CQUNMLEtBQUs7bUJBQ0wsS0FBSzt3QkFDTCxLQUFLLFNBQUMsWUFBWTt5QkFFbEIsTUFBTTs7OztJQU5QLGlDQUEyRDs7SUFDM0QsZ0NBQTRCOztJQUM1QixnQ0FBZ0M7O0lBQ2hDLCtCQUErQjs7SUFDL0Isb0NBQStDOztJQUUvQyxxQ0FBaUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0NoaWxkLCBFbGVtZW50UmVmLCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAncnUtZGlhbG9nJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2RpYWxvZy5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2RpYWxvZy5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIERpYWxvZ0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBWaWV3Q2hpbGQoJ2RpYWxvZycpIGRpYWxvZzogRWxlbWVudFJlZjxIVE1MRGlhbG9nRWxlbWVudD47XG4gIEBJbnB1dCgpIHRpdGxlOiBzdHJpbmcgPSAnJztcbiAgQElucHV0KCkgd2lkdGg6IHN0cmluZyA9ICdhdXRvJztcbiAgQElucHV0KCkgc2hvdzogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoJ21hc2stY2xvc2UnKSBtYXNrQ2xvc2U6IGJvb2xlYW4gPSB0cnVlO1xuXG4gIEBPdXRwdXQoKSBzaG93Q2hhbmdlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG4gIGhpZGUoKSB7XG4gICAgdGhpcy5zaG93Q2hhbmdlLmVtaXQoZmFsc2UpO1xuICB9XG4gIG5nT25Jbml0KCkge1xuICB9XG5cbn1cbiJdfQ==