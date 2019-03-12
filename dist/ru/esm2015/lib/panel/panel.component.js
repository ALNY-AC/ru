/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
export class PanelComponent {
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
if (false) {
    /** @type {?} */
    PanelComponent.prototype.title;
    /** @type {?} */
    PanelComponent.prototype.shadow;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFuZWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vcnUvIiwic291cmNlcyI6WyJsaWIvcGFuZWwvcGFuZWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQU96RCxNQUFNLE9BQU8sY0FBYztJQUd6QjtRQUZTLFVBQUssR0FBVyxFQUFFLENBQUM7UUFDbkIsV0FBTSxHQUFXLFFBQVEsQ0FBQztJQUNuQixDQUFDOzs7O0lBRWpCLFFBQVE7SUFDUixDQUFDOzs7WUFYRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLFVBQVU7Z0JBQ3BCLDRhQUFxQzs7YUFFdEM7Ozs7O29CQUVFLEtBQUs7cUJBQ0wsS0FBSzs7OztJQUROLCtCQUE0Qjs7SUFDNUIsZ0NBQW1DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3J1LXBhbmVsJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3BhbmVsLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vcGFuZWwuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBQYW5lbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIHRpdGxlOiBzdHJpbmcgPSAnJztcbiAgQElucHV0KCkgc2hhZG93OiBzdHJpbmcgPSAnYWx3YXlzJztcbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG59XG4iXX0=