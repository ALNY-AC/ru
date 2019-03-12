/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, EventEmitter, Output } from '@angular/core';
var InputComponent = /** @class */ (function () {
    function InputComponent() {
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
    InputComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @param {?} val
     * @return {?}
     */
    InputComponent.prototype.handleInput = /**
     * @param {?} val
     * @return {?}
     */
    function (val) {
        this.model = val;
        this.modelChange.emit(val);
    };
    InputComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ru-input',
                    template: "<div class=\"ru-input\">\n  <div (click)=\"prefixIconClick.emit($event)\" class=\"prefix-icon\" *ngIf=\"prefixIcon\">\n    <i [class]=\"prefixIcon\"></i>\n  </div>\n  <input [ngModel]=\"model\" (ngModelChange)=\"handleInput($event)\" type=\"text\">\n  <div (click)=\"suffixIconClick.emit($event)\" class=\"suffix-icon\" *ngIf=\"suffixIcon\">\n    <i [class]=\"suffixIcon\"></i>\n  </div>\n</div>",
                    styles: [".ru-input{border:1px solid #dfe6e8;border-radius:4px;display:inline-block;line-height:1;padding:6px 11px;margin:0;box-sizing:border-box;background-color:#fff}.ru-input *{box-sizing:border-box}.ru-input input{border:none;outline:0;padding:0;line-height:0}.ru-input .prefix-icon{margin-right:7px;display:inline-block}.ru-input .suffix-icon{margin-left:7px;display:inline-block}"]
                }] }
    ];
    /** @nocollapse */
    InputComponent.ctorParameters = function () { return []; };
    InputComponent.propDecorators = {
        prefixIcon: [{ type: Input, args: ['prefix-icon',] }],
        suffixIcon: [{ type: Input, args: ['suffix-icon',] }],
        suffixIconClick: [{ type: Output, args: ['suffix-click',] }],
        prefixIconClick: [{ type: Output, args: ['prefix-click',] }],
        model: [{ type: Input }],
        modelChange: [{ type: Output }]
    };
    return InputComponent;
}());
export { InputComponent };
if (false) {
    /** @type {?} */
    InputComponent.prototype.prefixIcon;
    /** @type {?} */
    InputComponent.prototype.suffixIcon;
    /** @type {?} */
    InputComponent.prototype.suffixIconClick;
    /** @type {?} */
    InputComponent.prototype.prefixIconClick;
    /** @type {?} */
    InputComponent.prototype.model;
    /** @type {?} */
    InputComponent.prototype.modelChange;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vcnUvIiwic291cmNlcyI6WyJsaWIvaW5wdXQvaW5wdXQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRS9FO0lBZ0JFO1FBVHNCLGVBQVUsR0FBVyxFQUFFLENBQUM7UUFDeEIsZUFBVSxHQUFXLEVBQUUsQ0FBQztRQUN0QixvQkFBZSxHQUFzQixJQUFJLFlBQVksRUFBTyxDQUFBLENBQUUsMkJBQTJCOztRQUN6RixvQkFBZSxHQUFzQixJQUFJLFlBQVksRUFBTyxDQUFBLENBQUUsMkJBQTJCOztRQUV4RyxVQUFLLEdBQUcsRUFBRSxDQUFDO1FBQ1YsZ0JBQVcsR0FBc0IsSUFBSSxZQUFZLEVBQU8sQ0FBQTtJQUdsRCxDQUFDOzs7O0lBRWpCLGlDQUFROzs7SUFBUjtJQUNBLENBQUM7Ozs7O0lBRUQsb0NBQVc7Ozs7SUFBWCxVQUFZLEdBQUc7UUFDYixJQUFJLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQztRQUNqQixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUM3QixDQUFDOztnQkF4QkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxVQUFVO29CQUNwQix1WkFBcUM7O2lCQUV0Qzs7Ozs7NkJBR0UsS0FBSyxTQUFDLGFBQWE7NkJBQ25CLEtBQUssU0FBQyxhQUFhO2tDQUNuQixNQUFNLFNBQUMsY0FBYztrQ0FDckIsTUFBTSxTQUFDLGNBQWM7d0JBRXJCLEtBQUs7OEJBQ0wsTUFBTTs7SUFhVCxxQkFBQztDQUFBLEFBMUJELElBMEJDO1NBckJZLGNBQWM7OztJQUV6QixvQ0FBOEM7O0lBQzlDLG9DQUE4Qzs7SUFDOUMseUNBQW9GOztJQUNwRix5Q0FBb0Y7O0lBRXBGLCtCQUFvQjs7SUFDcEIscUNBQWtFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBFdmVudEVtaXR0ZXIsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdydS1pbnB1dCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9pbnB1dC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2lucHV0LmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgSW5wdXRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIEBJbnB1dCgncHJlZml4LWljb24nKSBwcmVmaXhJY29uOiBzdHJpbmcgPSAnJztcbiAgQElucHV0KCdzdWZmaXgtaWNvbicpIHN1ZmZpeEljb246IHN0cmluZyA9ICcnO1xuICBAT3V0cHV0KCdzdWZmaXgtY2xpY2snKSBzdWZmaXhJY29uQ2xpY2s6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCkgIC8vIGhhbmRsZSBvbiB0aGUgaW5wdXQgaWNvblxuICBAT3V0cHV0KCdwcmVmaXgtY2xpY2snKSBwcmVmaXhJY29uQ2xpY2s6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCkgIC8vIGhhbmRsZSBvbiB0aGUgaW5wdXQgaWNvblxuXG4gIEBJbnB1dCgpIG1vZGVsID0gJyc7XG4gIEBPdXRwdXQoKSBtb2RlbENoYW5nZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKVxuXG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG4gIGhhbmRsZUlucHV0KHZhbCkge1xuICAgIHRoaXMubW9kZWwgPSB2YWw7XG4gICAgdGhpcy5tb2RlbENoYW5nZS5lbWl0KHZhbCk7XG4gIH1cblxufVxuIl19