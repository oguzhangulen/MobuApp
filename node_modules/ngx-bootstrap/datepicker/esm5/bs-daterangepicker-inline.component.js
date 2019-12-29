/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, ElementRef, EventEmitter, Input, Output, Renderer2, ViewContainerRef } from '@angular/core';
import { ComponentLoaderFactory } from 'ngx-bootstrap/component-loader';
import { filter } from 'rxjs/operators';
import { BsDatepickerConfig } from './bs-datepicker.config';
import { BsDaterangepickerInlineConfig } from './bs-daterangepicker-inline.config';
import { BsDaterangepickerInlineContainerComponent } from './themes/bs/bs-daterangepicker-inline-container.component';
var BsDaterangepickerInlineDirective = /** @class */ (function () {
    function BsDaterangepickerInlineDirective(_config, _elementRef, _renderer, _viewContainerRef, cis) {
        this._config = _config;
        this._elementRef = _elementRef;
        /**
         * Emits when daterangepicker value has been changed
         */
        this.bsValueChange = new EventEmitter();
        this._subs = [];
        // todo: assign only subset of fields
        Object.assign(this, this._config);
        this._datepicker = cis.createLoader(_elementRef, _viewContainerRef, _renderer);
    }
    Object.defineProperty(BsDaterangepickerInlineDirective.prototype, "bsValue", {
        /**
         * Initial value of datepicker
         */
        set: /**
         * Initial value of datepicker
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (this._bsValue === value) {
                return;
            }
            this._bsValue = value;
            this.bsValueChange.emit(value);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    BsDaterangepickerInlineDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.setConfig();
        this._datepickerRef = this._datepicker
            .provide({ provide: BsDatepickerConfig, useValue: this._config })
            .attach(BsDaterangepickerInlineContainerComponent)
            .to(this._elementRef)
            .show();
        // if date changes from external source (model -> view)
        this._subs.push(this.bsValueChange.subscribe((/**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            _this._datepickerRef.instance.value = value;
        })));
        // if date changes from picker (view -> model)
        this._subs.push(this._datepickerRef.instance.valueChange
            .pipe(filter((/**
         * @param {?} range
         * @return {?}
         */
        function (range) { return range && range[0] && !!range[1]; })))
            .subscribe((/**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            _this.bsValue = value;
        })));
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    BsDaterangepickerInlineDirective.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (!this._datepickerRef || !this._datepickerRef.instance) {
            return;
        }
        if (changes.minDate) {
            this._datepickerRef.instance.minDate = this.minDate;
        }
        if (changes.maxDate) {
            this._datepickerRef.instance.maxDate = this.maxDate;
        }
        if (changes.datesDisabled) {
            this._datepickerRef.instance.datesDisabled = this.datesDisabled;
        }
        if (changes.isDisabled) {
            this._datepickerRef.instance.isDisabled = this.isDisabled;
        }
        if (changes.dateCustomClasses) {
            this._datepickerRef.instance.dateCustomClasses = this.dateCustomClasses;
        }
    };
    /**
     * Set config for datepicker
     */
    /**
     * Set config for datepicker
     * @return {?}
     */
    BsDaterangepickerInlineDirective.prototype.setConfig = /**
     * Set config for datepicker
     * @return {?}
     */
    function () {
        this._config = Object.assign({}, this._config, this.bsConfig, {
            value: this._bsValue,
            isDisabled: this.isDisabled,
            minDate: this.minDate || this.bsConfig && this.bsConfig.minDate,
            maxDate: this.maxDate || this.bsConfig && this.bsConfig.maxDate,
            dateCustomClasses: this.dateCustomClasses || this.bsConfig && this.bsConfig.dateCustomClasses,
            datesDisabled: this.datesDisabled || this.bsConfig && this.bsConfig.datesDisabled
        });
    };
    /**
     * @return {?}
     */
    BsDaterangepickerInlineDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._datepicker.dispose();
    };
    BsDaterangepickerInlineDirective.decorators = [
        { type: Directive, args: [{
                    selector: 'bs-daterangepicker-inline',
                    exportAs: 'bsDaterangepickerInline'
                },] }
    ];
    /** @nocollapse */
    BsDaterangepickerInlineDirective.ctorParameters = function () { return [
        { type: BsDaterangepickerInlineConfig },
        { type: ElementRef },
        { type: Renderer2 },
        { type: ViewContainerRef },
        { type: ComponentLoaderFactory }
    ]; };
    BsDaterangepickerInlineDirective.propDecorators = {
        bsValue: [{ type: Input }],
        bsConfig: [{ type: Input }],
        isDisabled: [{ type: Input }],
        minDate: [{ type: Input }],
        maxDate: [{ type: Input }],
        dateCustomClasses: [{ type: Input }],
        datesDisabled: [{ type: Input }],
        bsValueChange: [{ type: Output }]
    };
    return BsDaterangepickerInlineDirective;
}());
export { BsDaterangepickerInlineDirective };
if (false) {
    /** @type {?} */
    BsDaterangepickerInlineDirective.prototype._bsValue;
    /**
     * Config object for datepicker
     * @type {?}
     */
    BsDaterangepickerInlineDirective.prototype.bsConfig;
    /**
     * Indicates whether datepicker is enabled or not
     * @type {?}
     */
    BsDaterangepickerInlineDirective.prototype.isDisabled;
    /**
     * Minimum date which is available for selection
     * @type {?}
     */
    BsDaterangepickerInlineDirective.prototype.minDate;
    /**
     * Maximum date which is available for selection
     * @type {?}
     */
    BsDaterangepickerInlineDirective.prototype.maxDate;
    /**
     * Date custom classes
     * @type {?}
     */
    BsDaterangepickerInlineDirective.prototype.dateCustomClasses;
    /**
     * Disable specific dates
     * @type {?}
     */
    BsDaterangepickerInlineDirective.prototype.datesDisabled;
    /**
     * Emits when daterangepicker value has been changed
     * @type {?}
     */
    BsDaterangepickerInlineDirective.prototype.bsValueChange;
    /**
     * @type {?}
     * @protected
     */
    BsDaterangepickerInlineDirective.prototype._subs;
    /**
     * @type {?}
     * @private
     */
    BsDaterangepickerInlineDirective.prototype._datepicker;
    /**
     * @type {?}
     * @private
     */
    BsDaterangepickerInlineDirective.prototype._datepickerRef;
    /** @type {?} */
    BsDaterangepickerInlineDirective.prototype._config;
    /**
     * @type {?}
     * @private
     */
    BsDaterangepickerInlineDirective.prototype._elementRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnMtZGF0ZXJhbmdlcGlja2VyLWlubGluZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtYm9vdHN0cmFwL2RhdGVwaWNrZXIvIiwic291cmNlcyI6WyJicy1kYXRlcmFuZ2VwaWNrZXItaW5saW5lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNTLFNBQVMsRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFDckMsTUFBTSxFQUFFLFNBQVMsRUFBaUIsZ0JBQWdCLEVBQ3RFLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBbUIsc0JBQXNCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUd6RixPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFeEMsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDNUQsT0FBTyxFQUFFLDZCQUE2QixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDbkYsT0FBTyxFQUFFLHlDQUF5QyxFQUFFLE1BQU0sMkRBQTJELENBQUM7QUFHdEg7SUFvREksMENBQ1MsT0FBc0MsRUFDckMsV0FBdUIsRUFDL0IsU0FBb0IsRUFDcEIsaUJBQW1DLEVBQ25DLEdBQTJCO1FBSnBCLFlBQU8sR0FBUCxPQUFPLENBQStCO1FBQ3JDLGdCQUFXLEdBQVgsV0FBVyxDQUFZOzs7O1FBVHZCLGtCQUFhLEdBQXlCLElBQUksWUFBWSxFQUFFLENBQUM7UUFFekQsVUFBSyxHQUFtQixFQUFFLENBQUM7UUFZbkMscUNBQXFDO1FBQ3JDLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNsQyxJQUFJLENBQUMsV0FBVyxHQUFHLEdBQUcsQ0FBQyxZQUFZLENBQ2pDLFdBQVcsRUFDWCxpQkFBaUIsRUFDakIsU0FBUyxDQUNWLENBQUM7SUFDSixDQUFDO0lBekRELHNCQUNJLHFEQUFPO1FB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Qyx1REFBK0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnRSZWYsIERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25DaGFuZ2VzLFxuICBPbkRlc3Ryb3ksIE9uSW5pdCwgT3V0cHV0LCBSZW5kZXJlcjIsIFNpbXBsZUNoYW5nZXMsIFZpZXdDb250YWluZXJSZWZcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IENvbXBvbmVudExvYWRlciwgQ29tcG9uZW50TG9hZGVyRmFjdG9yeSB9IGZyb20gJ25neC1ib290c3RyYXAvY29tcG9uZW50LWxvYWRlcic7XG5cbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlsdGVyIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBCc0RhdGVwaWNrZXJDb25maWcgfSBmcm9tICcuL2JzLWRhdGVwaWNrZXIuY29uZmlnJztcbmltcG9ydCB7IEJzRGF0ZXJhbmdlcGlja2VySW5saW5lQ29uZmlnIH0gZnJvbSAnLi9icy1kYXRlcmFuZ2VwaWNrZXItaW5saW5lLmNvbmZpZyc7XG5pbXBvcnQgeyBCc0RhdGVyYW5nZXBpY2tlcklubGluZUNvbnRhaW5lckNvbXBvbmVudCB9IGZyb20gJy4vdGhlbWVzL2JzL2JzLWRhdGVyYW5nZXBpY2tlci1pbmxpbmUtY29udGFpbmVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBEYXRlcGlja2VyRGF0ZUN1c3RvbUNsYXNzZXMgfSBmcm9tICcuL21vZGVscyc7XG5cbkBEaXJlY3RpdmUoe1xuICAgIHNlbGVjdG9yOiAnYnMtZGF0ZXJhbmdlcGlja2VyLWlubGluZScsXG4gICAgZXhwb3J0QXM6ICdic0RhdGVyYW5nZXBpY2tlcklubGluZSdcbn0pXG5leHBvcnQgY2xhc3MgQnNEYXRlcmFuZ2VwaWNrZXJJbmxpbmVEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSwgT25DaGFuZ2VzIHtcbiAgICBfYnNWYWx1ZTogRGF0ZVtdO1xuICAgIC8qKlxuICAgICAqIEluaXRpYWwgdmFsdWUgb2YgZGF0ZXBpY2tlclxuICAgICAqL1xuICAgIEBJbnB1dCgpXG4gICAgc2V0IGJzVmFsdWUodmFsdWU6IERhdGVbXSkge1xuICAgICAgaWYgKHRoaXMuX2JzVmFsdWUgPT09IHZhbHVlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHRoaXMuX2JzVmFsdWUgPSB2YWx1ZTtcbiAgICAgIHRoaXMuYnNWYWx1ZUNoYW5nZS5lbWl0KHZhbHVlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDb25maWcgb2JqZWN0IGZvciBkYXRlcGlja2VyXG4gICAgICovXG4gICAgQElucHV0KCkgYnNDb25maWc6IFBhcnRpYWw8QnNEYXRlcmFuZ2VwaWNrZXJJbmxpbmVDb25maWc+O1xuICAgIC8qKlxuICAgICAqIEluZGljYXRlcyB3aGV0aGVyIGRhdGVwaWNrZXIgaXMgZW5hYmxlZCBvciBub3RcbiAgICAgKi9cbiAgICBASW5wdXQoKSBpc0Rpc2FibGVkOiBib29sZWFuO1xuICAgIC8qKlxuICAgICAqIE1pbmltdW0gZGF0ZSB3aGljaCBpcyBhdmFpbGFibGUgZm9yIHNlbGVjdGlvblxuICAgICAqL1xuICAgIEBJbnB1dCgpIG1pbkRhdGU6IERhdGU7XG4gICAgLyoqXG4gICAgICogTWF4aW11bSBkYXRlIHdoaWNoIGlzIGF2YWlsYWJsZSBmb3Igc2VsZWN0aW9uXG4gICAgICovXG4gICAgQElucHV0KCkgbWF4RGF0ZTogRGF0ZTtcbiAgICAvKipcbiAgICAgKiBEYXRlIGN1c3RvbSBjbGFzc2VzXG4gICAgICovXG4gICAgQElucHV0KCkgZGF0ZUN1c3RvbUNsYXNzZXM6IERhdGVwaWNrZXJEYXRlQ3VzdG9tQ2xhc3Nlc1tdO1xuICAgIC8qKlxuICAgICAqIERpc2FibGUgc3BlY2lmaWMgZGF0ZXNcbiAgICAgKi9cbiAgICBASW5wdXQoKSBkYXRlc0Rpc2FibGVkOiBEYXRlW107XG4gICAgLyoqXG4gICAgICogRW1pdHMgd2hlbiBkYXRlcmFuZ2VwaWNrZXIgdmFsdWUgaGFzIGJlZW4gY2hhbmdlZFxuICAgICAqL1xuICAgIEBPdXRwdXQoKSBic1ZhbHVlQ2hhbmdlOiBFdmVudEVtaXR0ZXI8RGF0ZVtdPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAgIHByb3RlY3RlZCBfc3ViczogU3Vic2NyaXB0aW9uW10gPSBbXTtcblxuICAgIHByaXZhdGUgX2RhdGVwaWNrZXI6IENvbXBvbmVudExvYWRlcjxCc0RhdGVyYW5nZXBpY2tlcklubGluZUNvbnRhaW5lckNvbXBvbmVudD47XG4gICAgcHJpdmF0ZSBfZGF0ZXBpY2tlclJlZjogQ29tcG9uZW50UmVmPEJzRGF0ZXJhbmdlcGlja2VySW5saW5lQ29udGFpbmVyQ29tcG9uZW50PjtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgcHVibGljIF9jb25maWc6IEJzRGF0ZXJhbmdlcGlja2VySW5saW5lQ29uZmlnLFxuICAgICAgcHJpdmF0ZSBfZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICAgIF9yZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgICAgX3ZpZXdDb250YWluZXJSZWY6IFZpZXdDb250YWluZXJSZWYsXG4gICAgICBjaXM6IENvbXBvbmVudExvYWRlckZhY3RvcnlcbiAgICApIHtcbiAgICAgIC8vIHRvZG86IGFzc2lnbiBvbmx5IHN1YnNldCBvZiBmaWVsZHNcbiAgICAgIE9iamVjdC5hc3NpZ24odGhpcywgdGhpcy5fY29uZmlnKTtcbiAgICAgIHRoaXMuX2RhdGVwaWNrZXIgPSBjaXMuY3JlYXRlTG9hZGVyPEJzRGF0ZXJhbmdlcGlja2VySW5saW5lQ29udGFpbmVyQ29tcG9uZW50PihcbiAgICAgICAgX2VsZW1lbnRSZWYsXG4gICAgICAgIF92aWV3Q29udGFpbmVyUmVmLFxuICAgICAgICBfcmVuZGVyZXJcbiAgICAgICk7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuc2V0Q29uZmlnKCk7XG5cbiAgICAgICAgdGhpcy5fZGF0ZXBpY2tlclJlZiA9IHRoaXMuX2RhdGVwaWNrZXJcbiAgICAgICAgICAucHJvdmlkZSh7IHByb3ZpZGU6IEJzRGF0ZXBpY2tlckNvbmZpZywgdXNlVmFsdWU6IHRoaXMuX2NvbmZpZyB9KVxuICAgICAgICAgIC5hdHRhY2goQnNEYXRlcmFuZ2VwaWNrZXJJbmxpbmVDb250YWluZXJDb21wb25lbnQpXG4gICAgICAgICAgLnRvKHRoaXMuX2VsZW1lbnRSZWYpXG4gICAgICAgICAgLnNob3coKTtcblxuICAgICAgICAvLyBpZiBkYXRlIGNoYW5nZXMgZnJvbSBleHRlcm5hbCBzb3VyY2UgKG1vZGVsIC0+IHZpZXcpXG4gICAgICAgIHRoaXMuX3N1YnMucHVzaChcbiAgICAgICAgICB0aGlzLmJzVmFsdWVDaGFuZ2Uuc3Vic2NyaWJlKCh2YWx1ZTogRGF0ZVtdKSA9PiB7XG4gICAgICAgICAgICB0aGlzLl9kYXRlcGlja2VyUmVmLmluc3RhbmNlLnZhbHVlID0gdmFsdWU7XG4gICAgICAgICAgfSlcbiAgICAgICAgKTtcblxuICAgICAgICAvLyBpZiBkYXRlIGNoYW5nZXMgZnJvbSBwaWNrZXIgKHZpZXcgLT4gbW9kZWwpXG4gICAgICAgIHRoaXMuX3N1YnMucHVzaChcbiAgICAgICAgICB0aGlzLl9kYXRlcGlja2VyUmVmLmluc3RhbmNlLnZhbHVlQ2hhbmdlXG4gICAgICAgICAgICAucGlwZShcbiAgICAgICAgICAgICAgICBmaWx0ZXIoKHJhbmdlOiBEYXRlW10pID0+IHJhbmdlICYmIHJhbmdlWzBdICYmICEhcmFuZ2VbMV0pXG4gICAgICAgICAgICApXG4gICAgICAgICAgICAuc3Vic2NyaWJlKCh2YWx1ZTogRGF0ZVtdKSA9PiB7XG4gICAgICAgICAgICAgIHRoaXMuYnNWYWx1ZSA9IHZhbHVlO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgICAgIGlmICghdGhpcy5fZGF0ZXBpY2tlclJlZiB8fCAhdGhpcy5fZGF0ZXBpY2tlclJlZi5pbnN0YW5jZSkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjaGFuZ2VzLm1pbkRhdGUpIHtcbiAgICAgICAgICB0aGlzLl9kYXRlcGlja2VyUmVmLmluc3RhbmNlLm1pbkRhdGUgPSB0aGlzLm1pbkRhdGU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY2hhbmdlcy5tYXhEYXRlKSB7XG4gICAgICAgICAgdGhpcy5fZGF0ZXBpY2tlclJlZi5pbnN0YW5jZS5tYXhEYXRlID0gdGhpcy5tYXhEYXRlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNoYW5nZXMuZGF0ZXNEaXNhYmxlZCkge1xuICAgICAgICAgIHRoaXMuX2RhdGVwaWNrZXJSZWYuaW5zdGFuY2UuZGF0ZXNEaXNhYmxlZCA9IHRoaXMuZGF0ZXNEaXNhYmxlZDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjaGFuZ2VzLmlzRGlzYWJsZWQpIHtcbiAgICAgICAgICB0aGlzLl9kYXRlcGlja2VyUmVmLmluc3RhbmNlLmlzRGlzYWJsZWQgPSB0aGlzLmlzRGlzYWJsZWQ7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY2hhbmdlcy5kYXRlQ3VzdG9tQ2xhc3Nlcykge1xuICAgICAgICAgIHRoaXMuX2RhdGVwaWNrZXJSZWYuaW5zdGFuY2UuZGF0ZUN1c3RvbUNsYXNzZXMgPSB0aGlzLmRhdGVDdXN0b21DbGFzc2VzO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0IGNvbmZpZyBmb3IgZGF0ZXBpY2tlclxuICAgICAqL1xuICAgIHNldENvbmZpZygpOiB2b2lkIHtcbiAgICAgIHRoaXMuX2NvbmZpZyA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuX2NvbmZpZywgdGhpcy5ic0NvbmZpZywge1xuICAgICAgICB2YWx1ZTogdGhpcy5fYnNWYWx1ZSxcbiAgICAgICAgaXNEaXNhYmxlZDogdGhpcy5pc0Rpc2FibGVkLFxuICAgICAgICBtaW5EYXRlOiB0aGlzLm1pbkRhdGUgfHwgdGhpcy5ic0NvbmZpZyAmJiB0aGlzLmJzQ29uZmlnLm1pbkRhdGUsXG4gICAgICAgIG1heERhdGU6IHRoaXMubWF4RGF0ZSB8fCB0aGlzLmJzQ29uZmlnICYmIHRoaXMuYnNDb25maWcubWF4RGF0ZSxcbiAgICAgICAgZGF0ZUN1c3RvbUNsYXNzZXM6IHRoaXMuZGF0ZUN1c3RvbUNsYXNzZXMgfHwgdGhpcy5ic0NvbmZpZyAmJiB0aGlzLmJzQ29uZmlnLmRhdGVDdXN0b21DbGFzc2VzLFxuICAgICAgICBkYXRlc0Rpc2FibGVkOiB0aGlzLmRhdGVzRGlzYWJsZWQgfHwgdGhpcy5ic0NvbmZpZyAmJiB0aGlzLmJzQ29uZmlnLmRhdGVzRGlzYWJsZWRcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIG5nT25EZXN0cm95KCk6IGFueSB7XG4gICAgICB0aGlzLl9kYXRlcGlja2VyLmRpc3Bvc2UoKTtcbiAgICB9XG59XG4iXX0=