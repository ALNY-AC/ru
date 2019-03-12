/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ViewChild, ElementRef, Input, Output, EventEmitter } from '@angular/core';
var DialogComponent = /** @class */ (function () {
    function DialogComponent() {
        this.title = '';
        this.width = 'auto';
        this.show = false;
        this.maskClose = true;
        this.showChange = new EventEmitter();
    }
    /**
     * @return {?}
     */
    DialogComponent.prototype.hide = /**
     * @return {?}
     */
    function () {
        this.showChange.emit(false);
    };
    /**
     * @return {?}
     */
    DialogComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    DialogComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ru-dialog',
                    template: "<div #dialog class=\"ru-dialog\" *ngIf=\"show\">\r\n    <div class=\"ru-dialog-mask\" (click)=\"maskClose?hide():''\"></div>\r\n    <div class=\"ru-dialog-panel\" [style.width]=\"width\">\r\n        <div class=\"ru-dialog-head\">\r\n            <div class=\"ru-dialog-head-title\">{{title}}\r\n                <i (click)=\"hide()\" class=\" close-icon\" title=\"\u5173\u95ED\">\r\n                    <svg class=\"close\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 52 52\">\r\n                        <path class=\"line\" fill=\"none\" d=\"M17.36,34.736l17.368-17.472\" />\r\n                        <path class=\"line\" fill=\"none\" d=\"M34.78,34.684L17.309,17.316\" />\r\n                    </svg>\r\n                </i>\r\n            </div>\r\n        </div>\r\n        <div class=\"ru-dialog-body\">\r\n            <ng-content></ng-content>\r\n        </div>\r\n        <div class=\"ru-dialog-footer\">\r\n            <ng-content select=\"[slot=footer]\"></ng-content>\r\n        </div>\r\n    </div>\r\n</div>",
                    styles: [".ru-dialog{position:fixed;top:0;bottom:0;right:0;left:0;overflow:auto;box-sizing:border-box;padding-top:5vh;padding-bottom:5vh}.ru-dialog *{box-sizing:border-box}.ru-dialog .ru-dialog-mask{position:fixed;top:0;bottom:0;right:0;left:0;background-color:rgba(0,0,0,.3)}.ru-dialog .ru-dialog-panel{border:none;border-radius:12px;background-color:#fff;padding:0 32px 32px;position:relative;margin:0 auto;box-shadow:1px 1px 20px rgba(0,0,0,.3)}.ru-dialog .ru-dialog-panel .ru-dialog-head{color:#01a89f;font-size:20px;line-height:25px;text-align:center;padding:30px 0}.ru-dialog .ru-dialog-panel .ru-dialog-head .ru-dialog-head-title .close-icon{position:absolute;right:32px;color:#a9a9a9;cursor:pointer}.ru-dialog .ru-dialog-panel .ru-dialog-head .ru-dialog-head-title .close-icon .close{width:30px;height:30px;display:block;stroke-width:2;stroke:#a9a9a9;stroke-miterlimit:10}.ru-dialog .ru-dialog-panel .ru-dialog-footer{padding:30px 0}.ru-dialog .ru-dialog-panel .ru-dialog-footer /deep/ .ru-button{margin-right:8px;margin-bottom:8px}"]
                }] }
    ];
    /** @nocollapse */
    DialogComponent.ctorParameters = function () { return []; };
    DialogComponent.propDecorators = {
        dialog: [{ type: ViewChild, args: ['dialog',] }],
        title: [{ type: Input }],
        width: [{ type: Input }],
        show: [{ type: Input }],
        maskClose: [{ type: Input, args: ['mask-close',] }],
        showChange: [{ type: Output }]
    };
    return DialogComponent;
}());
export { DialogComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9nLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3J1LyIsInNvdXJjZXMiOlsibGliL2RpYWxvZy9kaWFsb2cuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLFNBQVMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFdEc7SUFhRTtRQU5TLFVBQUssR0FBVyxFQUFFLENBQUM7UUFDbkIsVUFBSyxHQUFXLE1BQU0sQ0FBQztRQUN2QixTQUFJLEdBQVksS0FBSyxDQUFDO1FBQ1YsY0FBUyxHQUFZLElBQUksQ0FBQztRQUVyQyxlQUFVLEdBQXNCLElBQUksWUFBWSxFQUFPLENBQUE7SUFDakQsQ0FBQzs7OztJQUNqQiw4QkFBSTs7O0lBQUo7UUFDRSxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM5QixDQUFDOzs7O0lBQ0Qsa0NBQVE7OztJQUFSO0lBQ0EsQ0FBQzs7Z0JBbEJGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsV0FBVztvQkFDckIsOGdDQUFzQzs7aUJBRXZDOzs7Ozt5QkFFRSxTQUFTLFNBQUMsUUFBUTt3QkFDbEIsS0FBSzt3QkFDTCxLQUFLO3VCQUNMLEtBQUs7NEJBQ0wsS0FBSyxTQUFDLFlBQVk7NkJBRWxCLE1BQU07O0lBUVQsc0JBQUM7Q0FBQSxBQXBCRCxJQW9CQztTQWZZLGVBQWU7OztJQUMxQixpQ0FBMkQ7O0lBQzNELGdDQUE0Qjs7SUFDNUIsZ0NBQWdDOztJQUNoQywrQkFBK0I7O0lBQy9CLG9DQUErQzs7SUFFL0MscUNBQWlFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3J1LWRpYWxvZycsXG4gIHRlbXBsYXRlVXJsOiAnLi9kaWFsb2cuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9kaWFsb2cuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBEaWFsb2dDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBAVmlld0NoaWxkKCdkaWFsb2cnKSBkaWFsb2c6IEVsZW1lbnRSZWY8SFRNTERpYWxvZ0VsZW1lbnQ+O1xuICBASW5wdXQoKSB0aXRsZTogc3RyaW5nID0gJyc7XG4gIEBJbnB1dCgpIHdpZHRoOiBzdHJpbmcgPSAnYXV0byc7XG4gIEBJbnB1dCgpIHNob3c6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KCdtYXNrLWNsb3NlJykgbWFza0Nsb3NlOiBib29sZWFuID0gdHJ1ZTtcblxuICBAT3V0cHV0KCkgc2hvd0NoYW5nZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKVxuICBjb25zdHJ1Y3RvcigpIHsgfVxuICBoaWRlKCkge1xuICAgIHRoaXMuc2hvd0NoYW5nZS5lbWl0KGZhbHNlKTtcbiAgfVxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG59XG4iXX0=