/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Inject, Input, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { DOCUMENT } from '@angular/common';
import { SidebarNavHelper } from '../app-sidebar-nav.service';
var AppSidebarNavItemsComponent = /** @class */ (function () {
    function AppSidebarNavItemsComponent(document, renderer, router, helper) {
        this.document = document;
        this.renderer = renderer;
        this.router = router;
        this.helper = helper;
    }
    Object.defineProperty(AppSidebarNavItemsComponent.prototype, "items", {
        get: /**
         * @return {?}
         */
        function () {
            return this._items;
        },
        set: /**
         * @param {?} items
         * @return {?}
         */
        function (items) {
            this._items = tslib_1.__spread(items);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    AppSidebarNavItemsComponent.prototype.hideMobile = /**
     * @return {?}
     */
    function () {
        if (this.document.body.classList.contains('sidebar-show')) {
            this.renderer.removeClass(this.document.body, 'sidebar-show');
        }
    };
    AppSidebarNavItemsComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-sidebar-nav-items',
                    template: "\n    <ng-container *ngFor=\"let item of items\">\n      <ng-container [ngSwitch]=\"helper.itemType(item)\">\n        <app-sidebar-nav-dropdown\n          *ngSwitchCase=\"'dropdown'\"\n          [item]=\"item\"\n          [class.open]=\"helper.isActive(router, item)\"\n          [ngClass]=\"item | appSidebarNavItemClass\"\n          appNavDropdown\n          routerLinkActive=\"open\">\n        </app-sidebar-nav-dropdown>\n        <app-sidebar-nav-divider\n          *ngSwitchCase=\"'divider'\"\n          [item]=\"item\"\n          [ngClass]=\"item | appSidebarNavItemClass\"\n          [appHtmlAttr]=\"item.attributes\">\n        </app-sidebar-nav-divider>\n        <app-sidebar-nav-title\n          *ngSwitchCase=\"'title'\"\n          [item]=\"item\"\n          [ngClass]=\"item | appSidebarNavItemClass\"\n          [appHtmlAttr]=\"item.attributes\">\n        </app-sidebar-nav-title>\n        <app-sidebar-nav-label\n          *ngSwitchCase=\"'label'\"\n          [item]=\"item\"\n          class=\"nav-item\"\n          [ngClass]=\"item | appSidebarNavItemClass\">\n        </app-sidebar-nav-label>\n        <ng-container\n          *ngSwitchCase=\"'empty'\">\n        </ng-container>\n        <app-sidebar-nav-link\n          *ngSwitchDefault\n          [item]=\"item\"\n          class=\"nav-item\"\n          [ngClass]=\"item | appSidebarNavItemClass\"\n          (linkClick)=\"hideMobile()\"\n        >\n        </app-sidebar-nav-link>\n      </ng-container>\n    </ng-container>\n  "
                }] }
    ];
    /** @nocollapse */
    AppSidebarNavItemsComponent.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
        { type: Renderer2 },
        { type: Router },
        { type: SidebarNavHelper }
    ]; };
    AppSidebarNavItemsComponent.propDecorators = {
        items: [{ type: Input }]
    };
    return AppSidebarNavItemsComponent;
}());
export { AppSidebarNavItemsComponent };
if (false) {
    /**
     * @type {?}
     * @protected
     */
    AppSidebarNavItemsComponent.prototype._items;
    /**
     * @type {?}
     * @private
     */
    AppSidebarNavItemsComponent.prototype.document;
    /**
     * @type {?}
     * @private
     */
    AppSidebarNavItemsComponent.prototype.renderer;
    /** @type {?} */
    AppSidebarNavItemsComponent.prototype.router;
    /** @type {?} */
    AppSidebarNavItemsComponent.prototype.helper;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLXNpZGViYXItbmF2LWl0ZW1zLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bjb3JldWkvYW5ndWxhci8iLCJzb3VyY2VzIjpbImxpYi9zaWRlYmFyL2FwcC1zaWRlYmFyLW5hdi9hcHAtc2lkZWJhci1uYXYtaXRlbXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUNsRSxPQUFPLEVBQUMsTUFBTSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDdkMsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBRXpDLE9BQU8sRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLDRCQUE0QixDQUFDO0FBRTVEO0lBMERFLHFDQUM0QixRQUFhLEVBQy9CLFFBQW1CLEVBQ3BCLE1BQWMsRUFDZCxNQUF3QjtRQUhMLGFBQVEsR0FBUixRQUFRLENBQUs7UUFDL0IsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUNwQixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2QsV0FBTSxHQUFOLE1BQU0sQ0FBa0I7SUFDOUIsQ0FBQztJQWJKLHNCQUNJLDhDQUFLOzs7O1FBR1Q7WUFDRSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDckIsQ0FBQzs7Ozs7UUFORCxVQUNVLEtBQWlCO1lBQ3pCLElBQUksQ0FBQyxNQUFNLG9CQUFPLEtBQUssQ0FBQyxDQUFDO1FBQzNCLENBQUM7OztPQUFBOzs7O0lBWU0sZ0RBQVU7OztJQUFqQjtRQUNFLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsRUFBRTtZQUN6RCxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxjQUFjLENBQUMsQ0FBQztTQUMvRDtJQUNILENBQUM7O2dCQXJFRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLHVCQUF1QjtvQkFDakMsUUFBUSxFQUFFLDI5Q0EwQ1Q7aUJBQ0Y7Ozs7Z0RBY0ksTUFBTSxTQUFDLFFBQVE7Z0JBakVjLFNBQVM7Z0JBQ25DLE1BQU07Z0JBR04sZ0JBQWdCOzs7d0JBb0RyQixLQUFLOztJQW9CUixrQ0FBQztDQUFBLEFBdEVELElBc0VDO1NBeEJZLDJCQUEyQjs7Ozs7O0lBRXRDLDZDQUFzQjs7Ozs7SUFXcEIsK0NBQXVDOzs7OztJQUN2QywrQ0FBMkI7O0lBQzNCLDZDQUFxQjs7SUFDckIsNkNBQStCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIEluamVjdCwgSW5wdXQsIFJlbmRlcmVyMn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1JvdXRlcn0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7RE9DVU1FTlR9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmltcG9ydCB7U2lkZWJhck5hdkhlbHBlcn0gZnJvbSAnLi4vYXBwLXNpZGViYXItbmF2LnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtc2lkZWJhci1uYXYtaXRlbXMnLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IGl0ZW0gb2YgaXRlbXNcIj5cbiAgICAgIDxuZy1jb250YWluZXIgW25nU3dpdGNoXT1cImhlbHBlci5pdGVtVHlwZShpdGVtKVwiPlxuICAgICAgICA8YXBwLXNpZGViYXItbmF2LWRyb3Bkb3duXG4gICAgICAgICAgKm5nU3dpdGNoQ2FzZT1cIidkcm9wZG93bidcIlxuICAgICAgICAgIFtpdGVtXT1cIml0ZW1cIlxuICAgICAgICAgIFtjbGFzcy5vcGVuXT1cImhlbHBlci5pc0FjdGl2ZShyb3V0ZXIsIGl0ZW0pXCJcbiAgICAgICAgICBbbmdDbGFzc109XCJpdGVtIHwgYXBwU2lkZWJhck5hdkl0ZW1DbGFzc1wiXG4gICAgICAgICAgYXBwTmF2RHJvcGRvd25cbiAgICAgICAgICByb3V0ZXJMaW5rQWN0aXZlPVwib3BlblwiPlxuICAgICAgICA8L2FwcC1zaWRlYmFyLW5hdi1kcm9wZG93bj5cbiAgICAgICAgPGFwcC1zaWRlYmFyLW5hdi1kaXZpZGVyXG4gICAgICAgICAgKm5nU3dpdGNoQ2FzZT1cIidkaXZpZGVyJ1wiXG4gICAgICAgICAgW2l0ZW1dPVwiaXRlbVwiXG4gICAgICAgICAgW25nQ2xhc3NdPVwiaXRlbSB8IGFwcFNpZGViYXJOYXZJdGVtQ2xhc3NcIlxuICAgICAgICAgIFthcHBIdG1sQXR0cl09XCJpdGVtLmF0dHJpYnV0ZXNcIj5cbiAgICAgICAgPC9hcHAtc2lkZWJhci1uYXYtZGl2aWRlcj5cbiAgICAgICAgPGFwcC1zaWRlYmFyLW5hdi10aXRsZVxuICAgICAgICAgICpuZ1N3aXRjaENhc2U9XCIndGl0bGUnXCJcbiAgICAgICAgICBbaXRlbV09XCJpdGVtXCJcbiAgICAgICAgICBbbmdDbGFzc109XCJpdGVtIHwgYXBwU2lkZWJhck5hdkl0ZW1DbGFzc1wiXG4gICAgICAgICAgW2FwcEh0bWxBdHRyXT1cIml0ZW0uYXR0cmlidXRlc1wiPlxuICAgICAgICA8L2FwcC1zaWRlYmFyLW5hdi10aXRsZT5cbiAgICAgICAgPGFwcC1zaWRlYmFyLW5hdi1sYWJlbFxuICAgICAgICAgICpuZ1N3aXRjaENhc2U9XCInbGFiZWwnXCJcbiAgICAgICAgICBbaXRlbV09XCJpdGVtXCJcbiAgICAgICAgICBjbGFzcz1cIm5hdi1pdGVtXCJcbiAgICAgICAgICBbbmdDbGFzc109XCJpdGVtIHwgYXBwU2lkZWJhck5hdkl0ZW1DbGFzc1wiPlxuICAgICAgICA8L2FwcC1zaWRlYmFyLW5hdi1sYWJlbD5cbiAgICAgICAgPG5nLWNvbnRhaW5lclxuICAgICAgICAgICpuZ1N3aXRjaENhc2U9XCInZW1wdHknXCI+XG4gICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICA8YXBwLXNpZGViYXItbmF2LWxpbmtcbiAgICAgICAgICAqbmdTd2l0Y2hEZWZhdWx0XG4gICAgICAgICAgW2l0ZW1dPVwiaXRlbVwiXG4gICAgICAgICAgY2xhc3M9XCJuYXYtaXRlbVwiXG4gICAgICAgICAgW25nQ2xhc3NdPVwiaXRlbSB8IGFwcFNpZGViYXJOYXZJdGVtQ2xhc3NcIlxuICAgICAgICAgIChsaW5rQ2xpY2spPVwiaGlkZU1vYmlsZSgpXCJcbiAgICAgICAgPlxuICAgICAgICA8L2FwcC1zaWRlYmFyLW5hdi1saW5rPlxuICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgPC9uZy1jb250YWluZXI+XG4gIGBcbn0pXG5leHBvcnQgY2xhc3MgQXBwU2lkZWJhck5hdkl0ZW1zQ29tcG9uZW50IHtcblxuICBwcm90ZWN0ZWQgX2l0ZW1zOiBhbnk7XG5cbiAgQElucHV0KClcbiAgc2V0IGl0ZW1zKGl0ZW1zOiBBcnJheTxhbnk+KSB7XG4gICAgdGhpcy5faXRlbXMgPSBbLi4uaXRlbXNdO1xuICB9XG4gIGdldCBpdGVtcygpOiBBcnJheTxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy5faXRlbXM7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBASW5qZWN0KERPQ1VNRU5UKSBwcml2YXRlIGRvY3VtZW50OiBhbnksXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHB1YmxpYyByb3V0ZXI6IFJvdXRlcixcbiAgICBwdWJsaWMgaGVscGVyOiBTaWRlYmFyTmF2SGVscGVyXG4gICkge31cblxuICBwdWJsaWMgaGlkZU1vYmlsZSgpIHtcbiAgICBpZiAodGhpcy5kb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5jb250YWlucygnc2lkZWJhci1zaG93JykpIHtcbiAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5kb2N1bWVudC5ib2R5LCAnc2lkZWJhci1zaG93Jyk7XG4gICAgfVxuICB9XG59XG4iXX0=