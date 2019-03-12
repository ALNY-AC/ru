/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
var PanelComponent = /** @class */ (function () {
    function PanelComponent() {
        this.title = '';
        this.shadow = 'always';
    }
    /**
     * @return {?}
     */
    PanelComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    PanelComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ru-panel',
                    template: "<div [class]=\"'ru-panel ru-panel-'+shadow\">\n  <div class=\"ru-panel-head\">\n    <span *ngIf=\"title\" class=\"ru-panel-head-title\">{{title}}</span>\n    <ng-content *ngIf=\"!title\" select=\"[slot=head]\"></ng-content>\n  </div>\n  <div class=\"ru-panel-body\">\n    <ng-content></ng-content>\n  </div>\n  <div class=\"ru-panel-footer\">\n    <ng-content select=\"[slot=footer]\"></ng-content>\n  </div>\n</div>",
                    styles: [".ru-panel{background-color:#fff;border-radius:4px;border:1px solid #e6ebf5;box-sizing:border-box}.ru-panel *{box-sizing:border-box}.ru-panel-always,.ru-panel-hover:hover{box-shadow:0 2px 12px 0 rgba(0,0,0,.1)}.ru-panel-never{box-shadow:none}.ru-panel-head-title{padding:18px 20px;border-bottom:1px solid #e6ebf5;display:block}.ru-panel-body,.ru-panel-footer{padding:20px}"]
                }] }
    ];
    /** @nocollapse */
    PanelComponent.ctorParameters = function () { return []; };
    PanelComponent.propDecorators = {
        title: [{ type: Input }],
        shadow: [{ type: Input }]
    };
    return PanelComponent;
}());
export { PanelComponent };
if (false) {
    /** @type {?} */
    PanelComponent.prototype.title;
    /** @type {?} */
    PanelComponent.prototype.shadow;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFuZWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vcnUvIiwic291cmNlcyI6WyJsaWIvcGFuZWwvcGFuZWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV6RDtJQVFFO1FBRlMsVUFBSyxHQUFXLEVBQUUsQ0FBQztRQUNuQixXQUFNLEdBQVcsUUFBUSxDQUFDO0lBQ25CLENBQUM7Ozs7SUFFakIsaUNBQVE7OztJQUFSO0lBQ0EsQ0FBQzs7Z0JBWEYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxVQUFVO29CQUNwQiw0YUFBcUM7O2lCQUV0Qzs7Ozs7d0JBRUUsS0FBSzt5QkFDTCxLQUFLOztJQU1SLHFCQUFDO0NBQUEsQUFiRCxJQWFDO1NBUlksY0FBYzs7O0lBQ3pCLCtCQUE0Qjs7SUFDNUIsZ0NBQW1DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3J1LXBhbmVsJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3BhbmVsLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vcGFuZWwuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBQYW5lbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIHRpdGxlOiBzdHJpbmcgPSAnJztcbiAgQElucHV0KCkgc2hhZG93OiBzdHJpbmcgPSAnYWx3YXlzJztcbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG59XG4iXX0=