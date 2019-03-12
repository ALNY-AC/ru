/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, EventEmitter, Output } from '@angular/core';
export class InputComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vcnUvIiwic291cmNlcyI6WyJsaWIvaW5wdXQvaW5wdXQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBTy9FLE1BQU0sT0FBTyxjQUFjO0lBV3pCO1FBVHNCLGVBQVUsR0FBVyxFQUFFLENBQUM7UUFDeEIsZUFBVSxHQUFXLEVBQUUsQ0FBQztRQUN0QixvQkFBZSxHQUFzQixJQUFJLFlBQVksRUFBTyxDQUFBLENBQUUsMkJBQTJCOztRQUN6RixvQkFBZSxHQUFzQixJQUFJLFlBQVksRUFBTyxDQUFBLENBQUUsMkJBQTJCOztRQUV4RyxVQUFLLEdBQUcsRUFBRSxDQUFDO1FBQ1YsZ0JBQVcsR0FBc0IsSUFBSSxZQUFZLEVBQU8sQ0FBQTtJQUdsRCxDQUFDOzs7O0lBRWpCLFFBQVE7SUFDUixDQUFDOzs7OztJQUVELFdBQVcsQ0FBQyxHQUFHO1FBQ2IsSUFBSSxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUM7UUFDakIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDN0IsQ0FBQzs7O1lBeEJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsVUFBVTtnQkFDcEIsdVpBQXFDOzthQUV0Qzs7Ozs7eUJBR0UsS0FBSyxTQUFDLGFBQWE7eUJBQ25CLEtBQUssU0FBQyxhQUFhOzhCQUNuQixNQUFNLFNBQUMsY0FBYzs4QkFDckIsTUFBTSxTQUFDLGNBQWM7b0JBRXJCLEtBQUs7MEJBQ0wsTUFBTTs7OztJQU5QLG9DQUE4Qzs7SUFDOUMsb0NBQThDOztJQUM5Qyx5Q0FBb0Y7O0lBQ3BGLHlDQUFvRjs7SUFFcEYsK0JBQW9COztJQUNwQixxQ0FBa0UiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIEV2ZW50RW1pdHRlciwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3J1LWlucHV0JyxcbiAgdGVtcGxhdGVVcmw6ICcuL2lucHV0LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vaW5wdXQuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBJbnB1dENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgQElucHV0KCdwcmVmaXgtaWNvbicpIHByZWZpeEljb246IHN0cmluZyA9ICcnO1xuICBASW5wdXQoJ3N1ZmZpeC1pY29uJykgc3VmZml4SWNvbjogc3RyaW5nID0gJyc7XG4gIEBPdXRwdXQoJ3N1ZmZpeC1jbGljaycpIHN1ZmZpeEljb25DbGljazogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKSAgLy8gaGFuZGxlIG9uIHRoZSBpbnB1dCBpY29uXG4gIEBPdXRwdXQoJ3ByZWZpeC1jbGljaycpIHByZWZpeEljb25DbGljazogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKSAgLy8gaGFuZGxlIG9uIHRoZSBpbnB1dCBpY29uXG5cbiAgQElucHV0KCkgbW9kZWwgPSAnJztcbiAgQE91dHB1dCgpIG1vZGVsQ2hhbmdlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpXG5cblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbiAgaGFuZGxlSW5wdXQodmFsKSB7XG4gICAgdGhpcy5tb2RlbCA9IHZhbDtcbiAgICB0aGlzLm1vZGVsQ2hhbmdlLmVtaXQodmFsKTtcbiAgfVxuXG59XG4iXX0=