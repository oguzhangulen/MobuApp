/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
/* tslint:disable: max-file-line-count deprecation */
import { Directive, ElementRef, EventEmitter, HostBinding, Input, Output, Renderer2, ViewContainerRef } from '@angular/core';
import { TooltipContainerComponent } from './tooltip-container.component';
import { TooltipConfig } from './tooltip.config';
import { ComponentLoaderFactory } from 'ngx-bootstrap/component-loader';
import { OnChange, warnOnce, parseTriggers } from 'ngx-bootstrap/utils';
import { PositioningService } from 'ngx-bootstrap/positioning';
import { timer } from 'rxjs';
/** @type {?} */
var id = 0;
var TooltipDirective = /** @class */ (function () {
    function TooltipDirective(_viewContainerRef, cis, config, _elementRef, _renderer, _positionService) {
        this._elementRef = _elementRef;
        this._renderer = _renderer;
        this._positionService = _positionService;
        this.tooltipId = id++;
        /**
         * Fired when tooltip content changes
         */
        /* tslint:disable-next-line:no-any */
        this.tooltipChange = new EventEmitter();
        /**
         * Css class for tooltip container
         */
        this.containerClass = '';
        /**
         * @deprecated - removed, will be added to configuration
         */
        this.tooltipAnimation = true;
        /**
         * @deprecated
         */
        this.tooltipFadeDuration = 150;
        this.ariaDescribedby = "tooltip-" + this.tooltipId;
        /**
         * @deprecated
         */
        this.tooltipStateChanged = new EventEmitter();
        this._tooltip = cis
            .createLoader(this._elementRef, _viewContainerRef, this._renderer)
            .provide({ provide: TooltipConfig, useValue: config });
        Object.assign(this, config);
        this.onShown = this._tooltip.onShown;
        this.onHidden = this._tooltip.onHidden;
    }
    Object.defineProperty(TooltipDirective.prototype, "isOpen", {
        /**
         * Returns whether or not the tooltip is currently being shown
         */
        get: /**
         * Returns whether or not the tooltip is currently being shown
         * @return {?}
         */
        function () {
            return this._tooltip.isShown;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (value) {
                this.show();
            }
            else {
                this.hide();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TooltipDirective.prototype, "htmlContent", {
        /** @deprecated - please use `tooltip` instead */
        set: /**
         * @deprecated - please use `tooltip` instead
         * @param {?} value
         * @return {?}
         */
        function (value) {
            warnOnce('tooltipHtml was deprecated, please use `tooltip` instead');
            this.tooltip = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TooltipDirective.prototype, "_placement", {
        /** @deprecated - please use `placement` instead */
        set: /**
         * @deprecated - please use `placement` instead
         * @param {?} value
         * @return {?}
         */
        function (value) {
            warnOnce('tooltipPlacement was deprecated, please use `placement` instead');
            this.placement = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TooltipDirective.prototype, "_isOpen", {
        get: /**
         * @return {?}
         */
        function () {
            warnOnce('tooltipIsOpen was deprecated, please use `isOpen` instead');
            return this.isOpen;
        },
        /** @deprecated - please use `isOpen` instead */
        set: /**
         * @deprecated - please use `isOpen` instead
         * @param {?} value
         * @return {?}
         */
        function (value) {
            warnOnce('tooltipIsOpen was deprecated, please use `isOpen` instead');
            this.isOpen = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TooltipDirective.prototype, "_enable", {
        get: /**
         * @return {?}
         */
        function () {
            warnOnce('tooltipEnable was deprecated, please use `isDisabled` instead');
            return this.isDisabled;
        },
        /** @deprecated - please use `isDisabled` instead */
        set: /**
         * @deprecated - please use `isDisabled` instead
         * @param {?} value
         * @return {?}
         */
        function (value) {
            warnOnce('tooltipEnable was deprecated, please use `isDisabled` instead');
            this.isDisabled = !value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TooltipDirective.prototype, "_appendToBody", {
        get: /**
         * @return {?}
         */
        function () {
            warnOnce('tooltipAppendToBody was deprecated, please use `container="body"` instead');
            return this.container === 'body';
        },
        /** @deprecated - please use `container="body"` instead */
        set: /**
         * @deprecated - please use `container="body"` instead
         * @param {?} value
         * @return {?}
         */
        function (value) {
            warnOnce('tooltipAppendToBody was deprecated, please use `container="body"` instead');
            this.container = value ? 'body' : this.container;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TooltipDirective.prototype, "_popupClass", {
        /** @deprecated - will replaced with customClass */
        set: /**
         * @deprecated - will replaced with customClass
         * @param {?} value
         * @return {?}
         */
        function (value) {
            warnOnce('tooltipClass deprecated');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TooltipDirective.prototype, "_tooltipContext", {
        /** @deprecated - removed */
        set: /**
         * @deprecated - removed
         * @param {?} value
         * @return {?}
         */
        function (value) {
            warnOnce('tooltipContext deprecated');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TooltipDirective.prototype, "_tooltipPopupDelay", {
        /** @deprecated */
        set: /**
         * @deprecated
         * @param {?} value
         * @return {?}
         */
        function (value) {
            warnOnce('tooltipPopupDelay is deprecated, use `delay` instead');
            this.delay = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TooltipDirective.prototype, "_tooltipTrigger", {
        /** @deprecated -  please use `triggers` instead */
        get: /**
         * @deprecated -  please use `triggers` instead
         * @return {?}
         */
        function () {
            warnOnce('tooltipTrigger was deprecated, please use `triggers` instead');
            return this.triggers;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            warnOnce('tooltipTrigger was deprecated, please use `triggers` instead');
            this.triggers = (value || '').toString();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    TooltipDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this._tooltip.listen({
            triggers: this.triggers,
            show: (/**
             * @return {?}
             */
            function () { return _this.show(); })
        });
        /* tslint:disable-next-line:no-any */
        this.tooltipChange.subscribe((/**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (!value) {
                _this._tooltip.hide();
            }
        }));
    };
    /**
     * Toggles an element’s tooltip. This is considered a “manual” triggering of
     * the tooltip.
     */
    /**
     * Toggles an element’s tooltip. This is considered a “manual” triggering of
     * the tooltip.
     * @return {?}
     */
    TooltipDirective.prototype.toggle = /**
     * Toggles an element’s tooltip. This is considered a “manual” triggering of
     * the tooltip.
     * @return {?}
     */
    function () {
        if (this.isOpen) {
            return this.hide();
        }
        this.show();
    };
    /**
     * Opens an element’s tooltip. This is considered a “manual” triggering of
     * the tooltip.
     */
    /**
     * Opens an element’s tooltip. This is considered a “manual” triggering of
     * the tooltip.
     * @return {?}
     */
    TooltipDirective.prototype.show = /**
     * Opens an element’s tooltip. This is considered a “manual” triggering of
     * the tooltip.
     * @return {?}
     */
    function () {
        var _this = this;
        this._positionService.setOptions({
            modifiers: {
                flip: {
                    enabled: this.adaptivePosition
                },
                preventOverflow: {
                    enabled: this.adaptivePosition
                }
            }
        });
        if (this.isOpen ||
            this.isDisabled ||
            this._delayTimeoutId ||
            !this.tooltip) {
            return;
        }
        /** @type {?} */
        var showTooltip = (/**
         * @return {?}
         */
        function () {
            if (_this._delayTimeoutId) {
                _this._delayTimeoutId = undefined;
            }
            _this._tooltip
                .attach(TooltipContainerComponent)
                .to(_this.container)
                .position({ attachment: _this.placement })
                .show({
                content: _this.tooltip,
                placement: _this.placement,
                containerClass: _this.containerClass,
                id: _this.ariaDescribedby
            });
        });
        /** @type {?} */
        var cancelDelayedTooltipShowing = (/**
         * @return {?}
         */
        function () {
            if (_this._tooltipCancelShowFn) {
                _this._tooltipCancelShowFn();
            }
        });
        if (this.delay) {
            /** @type {?} */
            var _timer_1 = timer(this.delay).subscribe((/**
             * @return {?}
             */
            function () {
                showTooltip();
                cancelDelayedTooltipShowing();
            }));
            if (this.triggers) {
                parseTriggers(this.triggers)
                    .forEach((/**
                 * @param {?} trigger
                 * @return {?}
                 */
                function (trigger) {
                    _this._tooltipCancelShowFn = _this._renderer.listen(_this._elementRef.nativeElement, trigger.close, (/**
                     * @return {?}
                     */
                    function () {
                        _timer_1.unsubscribe();
                        cancelDelayedTooltipShowing();
                    }));
                }));
            }
        }
        else {
            showTooltip();
        }
    };
    /**
     * Closes an element’s tooltip. This is considered a “manual” triggering of
     * the tooltip.
     */
    /**
     * Closes an element’s tooltip. This is considered a “manual” triggering of
     * the tooltip.
     * @return {?}
     */
    TooltipDirective.prototype.hide = /**
     * Closes an element’s tooltip. This is considered a “manual” triggering of
     * the tooltip.
     * @return {?}
     */
    function () {
        var _this = this;
        if (this._delayTimeoutId) {
            clearTimeout(this._delayTimeoutId);
            this._delayTimeoutId = undefined;
        }
        if (!this._tooltip.isShown) {
            return;
        }
        this._tooltip.instance.classMap.in = false;
        setTimeout((/**
         * @return {?}
         */
        function () {
            _this._tooltip.hide();
        }), this.tooltipFadeDuration);
    };
    /**
     * @return {?}
     */
    TooltipDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._tooltip.dispose();
    };
    TooltipDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[tooltip], [tooltipHtml]',
                    exportAs: 'bs-tooltip'
                },] }
    ];
    /** @nocollapse */
    TooltipDirective.ctorParameters = function () { return [
        { type: ViewContainerRef },
        { type: ComponentLoaderFactory },
        { type: TooltipConfig },
        { type: ElementRef },
        { type: Renderer2 },
        { type: PositioningService }
    ]; };
    TooltipDirective.propDecorators = {
        adaptivePosition: [{ type: Input }],
        tooltip: [{ type: Input }],
        tooltipChange: [{ type: Output }],
        placement: [{ type: Input }],
        triggers: [{ type: Input }],
        container: [{ type: Input }],
        containerClass: [{ type: Input }],
        isOpen: [{ type: Input }],
        isDisabled: [{ type: Input }],
        delay: [{ type: Input }],
        onShown: [{ type: Output }],
        onHidden: [{ type: Output }],
        htmlContent: [{ type: Input, args: ['tooltipHtml',] }],
        _placement: [{ type: Input, args: ['tooltipPlacement',] }],
        _isOpen: [{ type: Input, args: ['tooltipIsOpen',] }],
        _enable: [{ type: Input, args: ['tooltipEnable',] }],
        _appendToBody: [{ type: Input, args: ['tooltipAppendToBody',] }],
        tooltipAnimation: [{ type: Input }],
        _popupClass: [{ type: Input, args: ['tooltipClass',] }],
        _tooltipContext: [{ type: Input, args: ['tooltipContext',] }],
        _tooltipPopupDelay: [{ type: Input, args: ['tooltipPopupDelay',] }],
        tooltipFadeDuration: [{ type: Input }],
        _tooltipTrigger: [{ type: Input, args: ['tooltipTrigger',] }],
        ariaDescribedby: [{ type: HostBinding, args: ['attr.aria-describedby',] }],
        tooltipStateChanged: [{ type: Output }]
    };
    tslib_1.__decorate([
        OnChange(),
        tslib_1.__metadata("design:type", Object)
    ], TooltipDirective.prototype, "tooltip", void 0);
    return TooltipDirective;
}());
export { TooltipDirective };
if (false) {
    /** @type {?} */
    TooltipDirective.prototype.tooltipId;
    /**
     * sets disable adaptive position
     * @type {?}
     */
    TooltipDirective.prototype.adaptivePosition;
    /**
     * Content to be displayed as tooltip.
     * @type {?}
     */
    TooltipDirective.prototype.tooltip;
    /**
     * Fired when tooltip content changes
     * @type {?}
     */
    TooltipDirective.prototype.tooltipChange;
    /**
     * Placement of a tooltip. Accepts: "top", "bottom", "left", "right"
     * @type {?}
     */
    TooltipDirective.prototype.placement;
    /**
     * Specifies events that should trigger. Supports a space separated list of
     * event names.
     * @type {?}
     */
    TooltipDirective.prototype.triggers;
    /**
     * A selector specifying the element the tooltip should be appended to.
     * @type {?}
     */
    TooltipDirective.prototype.container;
    /**
     * Css class for tooltip container
     * @type {?}
     */
    TooltipDirective.prototype.containerClass;
    /**
     * Allows to disable tooltip
     * @type {?}
     */
    TooltipDirective.prototype.isDisabled;
    /**
     * Delay before showing the tooltip
     * @type {?}
     */
    TooltipDirective.prototype.delay;
    /**
     * Emits an event when the tooltip is shown
     * @type {?}
     */
    TooltipDirective.prototype.onShown;
    /**
     * Emits an event when the tooltip is hidden
     * @type {?}
     */
    TooltipDirective.prototype.onHidden;
    /**
     * @deprecated - removed, will be added to configuration
     * @type {?}
     */
    TooltipDirective.prototype.tooltipAnimation;
    /**
     * @deprecated
     * @type {?}
     */
    TooltipDirective.prototype.tooltipFadeDuration;
    /** @type {?} */
    TooltipDirective.prototype.ariaDescribedby;
    /**
     * @deprecated
     * @type {?}
     */
    TooltipDirective.prototype.tooltipStateChanged;
    /**
     * @type {?}
     * @protected
     */
    TooltipDirective.prototype._delayTimeoutId;
    /**
     * @type {?}
     * @protected
     */
    TooltipDirective.prototype._tooltipCancelShowFn;
    /**
     * @type {?}
     * @private
     */
    TooltipDirective.prototype._tooltip;
    /**
     * @type {?}
     * @private
     */
    TooltipDirective.prototype._elementRef;
    /**
     * @type {?}
     * @private
     */
    TooltipDirective.prototype._renderer;
    /**
     * @type {?}
     * @private
     */
    TooltipDirective.prototype._positionService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbHRpcC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtYm9vdHN0cmFwL3Rvb2x0aXAvIiwic291cmNlcyI6WyJ0b29sdGlwLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFDQSxPQUFPLEVBQ0wsU0FBUyxFQUNULFVBQVUsRUFDVixZQUFZLEVBQ1osV0FBVyxFQUNYLEtBQUssRUFHTCxNQUFNLEVBQ04sU0FBUyxFQUVULGdCQUFnQixFQUNqQixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUMxRSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFFakQsT0FBTyxFQUFtQixzQkFBc0IsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQ3pGLE9BQU8sRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLGFBQWEsRUFBVyxNQUFNLHFCQUFxQixDQUFDO0FBQ2pGLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBRS9ELE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxNQUFNLENBQUM7O0lBRXpCLEVBQUUsR0FBRyxDQUFDO0FBRVY7SUFxTEUsMEJBQ0UsaUJBQW1DLEVBQ25DLEdBQTJCLEVBQzNCLE1BQXFCLEVBQ2IsV0FBdUIsRUFDdkIsU0FBb0IsRUFDcEIsZ0JBQW9DO1FBRnBDLGdCQUFXLEdBQVgsV0FBVyxDQUFZO1FBQ3ZCLGNBQVMsR0FBVCxTQUFTLENBQVc7UUFDcEIscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFvQjtRQXRMOUMsY0FBUyxHQUFHLEVBQUUsRUFBRSxDQUFDOzs7O1FBWWpCLHFDQUFxQztRQUNyQyxrQkFBYSxHQUE0QyxJQUFJLFlBQVksRUFBRSxDQUFDOzs7O1FBa0JuRSxtQkFBYyxHQUFHLEVBQUUsQ0FBQzs7OztRQWlHcEIscUJBQWdCLEdBQUcsSUFBSSxDQUFDOzs7O1FBdUJ4Qix3QkFB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Q0FBdUI7Ozs7O0lBTXZCLG1DQUFxQzs7Ozs7SUFLckMsb0NBQXNDOzs7OztJQTZEdEMsNENBQWlDOzs7OztJQXVCakMsK0NBQW1DOztJQWVuQywyQ0FBb0Y7Ozs7O0lBR3BGLCtDQUN5RTs7Ozs7SUFFekUsMkNBQXdDOzs7OztJQUN4QyxnREFBeUM7Ozs7O0lBRXpDLG9DQUE2RDs7Ozs7SUFLM0QsdUNBQStCOzs7OztJQUMvQixxQ0FBNEI7Ozs7O0lBQzVCLDRDQUE0QyIsInNvdXJjZXNDb250ZW50IjpbIi8qIHRzbGludDpkaXNhYmxlOiBtYXgtZmlsZS1saW5lLWNvdW50IGRlcHJlY2F0aW9uICovXG5pbXBvcnQge1xuICBEaXJlY3RpdmUsXG4gIEVsZW1lbnRSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgSG9zdEJpbmRpbmcsXG4gIElucHV0LFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgT3V0cHV0LFxuICBSZW5kZXJlcjIsXG4gIFRlbXBsYXRlUmVmLFxuICBWaWV3Q29udGFpbmVyUmVmXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBUb29sdGlwQ29udGFpbmVyQ29tcG9uZW50IH0gZnJvbSAnLi90b29sdGlwLWNvbnRhaW5lci5jb21wb25lbnQnO1xuaW1wb3J0IHsgVG9vbHRpcENvbmZpZyB9IGZyb20gJy4vdG9vbHRpcC5jb25maWcnO1xuXG5pbXBvcnQgeyBDb21wb25lbnRMb2FkZXIsIENvbXBvbmVudExvYWRlckZhY3RvcnkgfSBmcm9tICduZ3gtYm9vdHN0cmFwL2NvbXBvbmVudC1sb2FkZXInO1xuaW1wb3J0IHsgT25DaGFuZ2UsIHdhcm5PbmNlLCBwYXJzZVRyaWdnZXJzLCBUcmlnZ2VyIH0gZnJvbSAnbmd4LWJvb3RzdHJhcC91dGlscyc7XG5pbXBvcnQgeyBQb3NpdGlvbmluZ1NlcnZpY2UgfSBmcm9tICduZ3gtYm9vdHN0cmFwL3Bvc2l0aW9uaW5nJztcblxuaW1wb3J0IHsgdGltZXIgfSBmcm9tICdyeGpzJztcblxubGV0IGlkID0gMDtcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW3Rvb2x0aXBdLCBbdG9vbHRpcEh0bWxdJyxcbiAgZXhwb3J0QXM6ICdicy10b29sdGlwJ1xufSlcbmV4cG9ydCBjbGFzcyBUb29sdGlwRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICB0b29sdGlwSWQgPSBpZCsrO1xuICAvKiogc2V0cyBkaXNhYmxlIGFkYXB0aXZlIHBvc2l0aW9uICovXG4gIEBJbnB1dCgpIGFkYXB0aXZlUG9zaXRpb246IGJvb2xlYW47XG4gIC8qKlxuICAgKiBDb250ZW50IHRvIGJlIGRpc3BsYXllZCBhcyB0b29sdGlwLlxuICAgKi9cbiAgQE9uQ2hhbmdlKClcbiAgQElucHV0KClcbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueSAqL1xuICB0b29sdGlwOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjxhbnk+O1xuICAvKiogRmlyZWQgd2hlbiB0b29sdGlwIGNvbnRlbnQgY2hhbmdlcyAqL1xuICBAT3V0cHV0KClcbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueSAqL1xuICB0b29sdGlwQ2hhbmdlOiBFdmVudEVtaXR0ZXI8c3RyaW5nIHwgVGVtcGxhdGVSZWY8YW55Pj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgLyoqXG4gICAqIFBsYWNlbWVudCBvZiBhIHRvb2x0aXAuIEFjY2VwdHM6IFwidG9wXCIsIFwiYm90dG9tXCIsIFwibGVmdFwiLCBcInJpZ2h0XCJcbiAgICovXG4gIEBJbnB1dCgpIHBsYWNlbWVudDogc3RyaW5nO1xuICAvKipcbiAgICogU3BlY2lmaWVzIGV2ZW50cyB0aGF0IHNob3VsZCB0cmlnZ2VyLiBTdXBwb3J0cyBhIHNwYWNlIHNlcGFyYXRlZCBsaXN0IG9mXG4gICAqIGV2ZW50IG5hbWVzLlxuICAgKi9cbiAgQElucHV0KCkgdHJpZ2dlcnM6IHN0cmluZztcbiAgLyoqXG4gICAqIEEgc2VsZWN0b3Igc3BlY2lmeWluZyB0aGUgZWxlbWVudCB0aGUgdG9vbHRpcCBzaG91bGQgYmUgYXBwZW5kZWQgdG8uXG4gICAqL1xuICBASW5wdXQoKSBjb250YWluZXI6IHN0cmluZztcbiAgLyoqXG4gICAqIENzcyBjbGFzcyBmb3IgdG9vbHRpcCBjb250YWluZXJcbiAgICovXG4gIEBJbnB1dCgpIGNvbnRhaW5lckNsYXNzID0gJyc7XG4gIC8qKlxuICAgKiBSZXR1cm5zIHdoZXRoZXIgb3Igbm90IHRoZSB0b29sdGlwIGlzIGN1cnJlbnRseSBiZWluZyBzaG93blxuICAgKi9cbiAgQElucHV0KClcbiAgZ2V0IGlzT3BlbigpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fdG9vbHRpcC5pc1Nob3duO1xuICB9XG5cbiAgc2V0IGlzT3Blbih2YWx1ZTogYm9vbGVhbikge1xuICAgIGlmICh2YWx1ZSkge1xuICAgICAgdGhpcy5zaG93KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaGlkZSgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBBbGxvd3MgdG8gZGlzYWJsZSB0b29sdGlwXG4gICAqL1xuICBASW5wdXQoKSBpc0Rpc2FibGVkOiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBEZWxheSBiZWZvcmUgc2hvd2luZyB0aGUgdG9vbHRpcFxuICAgKi9cbiAgQElucHV0KCkgZGVsYXk6IG51bWJlcjtcblxuICAvKipcbiAgICogRW1pdHMgYW4gZXZlbnQgd2hlbiB0aGUgdG9vbHRpcCBpcyBzaG93blxuICAgKi9cbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueSAqL1xuICBAT3V0cHV0KCkgb25TaG93bjogRXZlbnRFbWl0dGVyPGFueT47XG4gIC8qKlxuICAgKiBFbWl0cyBhbiBldmVudCB3aGVuIHRoZSB0b29sdGlwIGlzIGhpZGRlblxuICAgKi9cbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueSAqL1xuICBAT3V0cHV0KCkgb25IaWRkZW46IEV2ZW50RW1pdHRlcjxhbnk+O1xuXG4gIC8qKiBAZGVwcmVjYXRlZCAtIHBsZWFzZSB1c2UgYHRvb2x0aXBgIGluc3RlYWQgKi9cbiAgQElucHV0KCd0b29sdGlwSHRtbCcpXG4gIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnkgKi9cbiAgc2V0IGh0bWxDb250ZW50KHZhbHVlOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjxhbnk+KSB7XG4gICAgd2Fybk9uY2UoJ3Rvb2x0aXBIdG1sIHdhcyBkZXByZWNhdGVkLCBwbGVhc2UgdXNlIGB0b29sdGlwYCBpbnN0ZWFkJyk7XG4gICAgdGhpcy50b29sdGlwID0gdmFsdWU7XG4gIH1cblxuICAvKiogQGRlcHJlY2F0ZWQgLSBwbGVhc2UgdXNlIGBwbGFjZW1lbnRgIGluc3RlYWQgKi9cbiAgQElucHV0KCd0b29sdGlwUGxhY2VtZW50JylcbiAgc2V0IF9wbGFjZW1lbnQodmFsdWU6IHN0cmluZykge1xuICAgIHdhcm5PbmNlKCd0b29sdGlwUGxhY2VtZW50IHdhcyBkZXByZWNhdGVkLCBwbGVhc2UgdXNlIGBwbGFjZW1lbnRgIGluc3RlYWQnKTtcbiAgICB0aGlzLnBsYWNlbWVudCA9IHZhbHVlO1xuICB9XG5cbiAgLyoqIEBkZXByZWNhdGVkIC0gcGxlYXNlIHVzZSBgaXNPcGVuYCBpbnN0ZWFkICovXG4gIEBJbnB1dCgndG9vbHRpcElzT3BlbicpXG4gIHNldCBfaXNPcGVuKHZhbHVlOiBib29sZWFuKSB7XG4gICAgd2Fybk9uY2UoJ3Rvb2x0aXBJc09wZW4gd2FzIGRlcHJlY2F0ZWQsIHBsZWFzZSB1c2UgYGlzT3BlbmAgaW5zdGVhZCcpO1xuICAgIHRoaXMuaXNPcGVuID0gdmFsdWU7XG4gIH1cblxuICBnZXQgX2lzT3BlbigpOiBib29sZWFuIHtcbiAgICB3YXJuT25jZSgndG9vbHRpcElzT3BlbiB3YXMgZGVwcmVjYXRlZCwgcGxlYXNlIHVzZSBgaXNPcGVuYCBpbnN0ZWFkJyk7XG5cbiAgICByZXR1cm4gdGhpcy5pc09wZW47XG4gIH1cblxuICAvKiogQGRlcHJlY2F0ZWQgLSBwbGVhc2UgdXNlIGBpc0Rpc2FibGVkYCBpbnN0ZWFkICovXG4gIEBJbnB1dCgndG9vbHRpcEVuYWJsZScpXG4gIHNldCBfZW5hYmxlKHZhbHVlOiBib29sZWFuKSB7XG4gICAgd2Fybk9uY2UoJ3Rvb2x0aXBFbmFibGUgd2FzIGRlcHJlY2F0ZWQsIHBsZWFzZSB1c2UgYGlzRGlzYWJsZWRgIGluc3RlYWQnKTtcbiAgICB0aGlzLmlzRGlzYWJsZWQgPSAhdmFsdWU7XG4gIH1cblxuICBnZXQgX2VuYWJsZSgpOiBib29sZWFuIHtcbiAgICB3YXJuT25jZSgndG9vbHRpcEVuYWJsZSB3YXMgZGVwcmVjYXRlZCwgcGxlYXNlIHVzZSBgaXNEaXNhYmxlZGAgaW5zdGVhZCcpO1xuXG4gICAgcmV0dXJuIHRoaXMuaXNEaXNhYmxlZDtcbiAgfVxuXG4gIC8qKiBAZGVwcmVjYXRlZCAtIHBsZWFzZSB1c2UgYGNvbnRhaW5lcj1cImJvZHlcImAgaW5zdGVhZCAqL1xuICBASW5wdXQoJ3Rvb2x0aXBBcHBlbmRUb0JvZHknKVxuICBzZXQgX2FwcGVuZFRvQm9keSh2YWx1ZTogYm9vbGVhbikge1xuICAgIHdhcm5PbmNlKFxuICAgICAgJ3Rvb2x0aXBBcHBlbmRUb0JvZHkgd2FzIGRlcHJlY2F0ZWQsIHBsZWFzZSB1c2UgYGNvbnRhaW5lcj1cImJvZHlcImAgaW5zdGVhZCdcbiAgICApO1xuICAgIHRoaXMuY29udGFpbmVyID0gdmFsdWUgPyAnYm9keScgOiB0aGlzLmNvbnRhaW5lcjtcbiAgfVxuXG4gIGdldCBfYXBwZW5kVG9Cb2R5KCk6IGJvb2xlYW4ge1xuICAgIHdhcm5PbmNlKFxuICAgICAgJ3Rvb2x0aXBBcHBlbmRUb0JvZHkgd2FzIGRlcHJlY2F0ZWQsIHBsZWFzZSB1c2UgYGNvbnRhaW5lcj1cImJvZHlcImAgaW5zdGVhZCdcbiAgICApO1xuXG4gICAgcmV0dXJuIHRoaXMuY29udGFpbmVyID09PSAnYm9keSc7XG4gIH1cblxuICAvKiogQGRlcHJlY2F0ZWQgLSByZW1vdmVkLCB3aWxsIGJlIGFkZGVkIHRvIGNvbmZpZ3VyYXRpb24gKi9cbiAgQElucHV0KCkgdG9vbHRpcEFuaW1hdGlvbiA9IHRydWU7XG5cbiAgLyoqIEBkZXByZWNhdGVkIC0gd2lsbCByZXBsYWNlZCB3aXRoIGN1c3RvbUNsYXNzICovXG4gIEBJbnB1dCgndG9vbHRpcENsYXNzJylcbiAgc2V0IF9wb3B1cENsYXNzKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB3YXJuT25jZSgndG9vbHRpcENsYXNzIGRlcHJlY2F0ZWQnKTtcbiAgfVxuXG4gIC8qKiBAZGVwcmVjYXRlZCAtIHJlbW92ZWQgKi9cbiAgQElucHV0KCd0b29sdGlwQ29udGV4dCcpXG4gIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnkgKi9cbiAgc2V0IF90b29sdGlwQ29udGV4dCh2YWx1ZTogYW55KSB7XG4gICAgd2Fybk9uY2UoJ3Rvb2x0aXBDb250ZXh0IGRlcHJlY2F0ZWQnKTtcbiAgfVxuXG4gIC8qKiBAZGVwcmVjYXRlZCAqL1xuICBASW5wdXQoJ3Rvb2x0aXBQb3B1cERlbGF5JylcbiAgc2V0IF90b29sdGlwUG9wdXBEZWxheSh2YWx1ZTogbnVtYmVyKSB7XG4gICAgd2Fybk9uY2UoJ3Rvb2x0aXBQb3B1cERlbGF5IGlzIGRlcHJlY2F0ZWQsIHVzZSBgZGVsYXlgIGluc3RlYWQnKTtcbiAgICB0aGlzLmRlbGF5ID0gdmFsdWU7XG4gIH1cblxuICAvKiogQGRlcHJlY2F0ZWQgKi9cbiAgQElucHV0KCkgdG9vbHRpcEZhZGVEdXJhdGlvbiA9IDE1MDtcblxuICAvKiogQGRlcHJlY2F0ZWQgLSAgcGxlYXNlIHVzZSBgdHJpZ2dlcnNgIGluc3RlYWQgKi9cbiAgQElucHV0KCd0b29sdGlwVHJpZ2dlcicpXG4gIGdldCBfdG9vbHRpcFRyaWdnZXIoKTogc3RyaW5nIHwgc3RyaW5nW10ge1xuICAgIHdhcm5PbmNlKCd0b29sdGlwVHJpZ2dlciB3YXMgZGVwcmVjYXRlZCwgcGxlYXNlIHVzZSBgdHJpZ2dlcnNgIGluc3RlYWQnKTtcblxuICAgIHJldHVybiB0aGlzLnRyaWdnZXJzO1xuICB9XG5cbiAgc2V0IF90b29sdGlwVHJpZ2dlcih2YWx1ZTogc3RyaW5nIHwgc3RyaW5nW10pIHtcbiAgICB3YXJuT25jZSgndG9vbHRpcFRyaWdnZXIgd2FzIGRlcHJlY2F0ZWQsIHBsZWFzZSB1c2UgYHRyaWdnZXJzYCBpbnN0ZWFkJyk7XG4gICAgdGhpcy50cmlnZ2VycyA9ICh2YWx1ZSB8fCAnJykudG9TdHJpbmcoKTtcbiAgfVxuXG4gIEBIb3N0QmluZGluZygnYXR0ci5hcmlhLWRlc2NyaWJlZGJ5JykgYXJpYURlc2NyaWJlZGJ5ID0gYHRvb2x0aXAtJHt0aGlzLnRvb2x0aXBJZH1gO1xuXG4gIC8qKiBAZGVwcmVjYXRlZCAqL1xuICBAT3V0cHV0KClcbiAgdG9vbHRpcFN0YXRlQ2hhbmdlZDogRXZlbnRFbWl0dGVyPGJvb2xlYW4+ID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55ICovXG4gIHByb3RlY3RlZCBfZGVsYXlUaW1lb3V0SWQ6IG51bWJlciB8IGFueTtcbiAgcHJvdGVjdGVkIF90b29sdGlwQ2FuY2VsU2hvd0ZuOiBGdW5jdGlvbjtcblxuICBwcml2YXRlIF90b29sdGlwOiBDb21wb25lbnRMb2FkZXI8VG9vbHRpcENvbnRhaW5lckNvbXBvbmVudD47XG4gIGNvbnN0cnVjdG9yKFxuICAgIF92aWV3Q29udGFpbmVyUmVmOiBWaWV3Q29udGFpbmVyUmVmLFxuICAgIGNpczogQ29tcG9uZW50TG9hZGVyRmFjdG9yeSxcbiAgICBjb25maWc6IFRvb2x0aXBDb25maWcsXG4gICAgcHJpdmF0ZSBfZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIF9yZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHByaXZhdGUgX3Bvc2l0aW9uU2VydmljZTogUG9zaXRpb25pbmdTZXJ2aWNlXG4gICkge1xuXG4gICAgdGhpcy5fdG9vbHRpcCA9IGNpc1xuICAgICAgLmNyZWF0ZUxvYWRlcjxUb29sdGlwQ29udGFpbmVyQ29tcG9uZW50PihcbiAgICAgICAgdGhpcy5fZWxlbWVudFJlZixcbiAgICAgICAgX3ZpZXdDb250YWluZXJSZWYsXG4gICAgICAgIHRoaXMuX3JlbmRlcmVyXG4gICAgICApXG4gICAgICAucHJvdmlkZSh7cHJvdmlkZTogVG9vbHRpcENvbmZpZywgdXNlVmFsdWU6IGNvbmZpZ30pO1xuXG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCBjb25maWcpO1xuICAgIHRoaXMub25TaG93biA9IHRoaXMuX3Rvb2x0aXAub25TaG93bjtcbiAgICB0aGlzLm9uSGlkZGVuID0gdGhpcy5fdG9vbHRpcC5vbkhpZGRlbjtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuX3Rvb2x0aXAubGlzdGVuKHtcbiAgICAgIHRyaWdnZXJzOiB0aGlzLnRyaWdnZXJzLFxuICAgICAgc2hvdzogKCkgPT4gdGhpcy5zaG93KClcbiAgICB9KTtcbiAgICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55ICovXG4gICAgdGhpcy50b29sdGlwQ2hhbmdlLnN1YnNjcmliZSgodmFsdWU6IGFueSkgPT4ge1xuICAgICAgaWYgKCF2YWx1ZSkge1xuICAgICAgICB0aGlzLl90b29sdGlwLmhpZGUoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUb2dnbGVzIGFuIGVsZW1lbnTigJlzIHRvb2x0aXAuIFRoaXMgaXMgY29uc2lkZXJlZCBhIOKAnG1hbnVhbOKAnSB0cmlnZ2VyaW5nIG9mXG4gICAqIHRoZSB0b29sdGlwLlxuICAgKi9cbiAgdG9nZ2xlKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmlzT3Blbikge1xuICAgICAgcmV0dXJuIHRoaXMuaGlkZSgpO1xuICAgIH1cblxuICAgIHRoaXMuc2hvdygpO1xuICB9XG5cbiAgLyoqXG4gICAqIE9wZW5zIGFuIGVsZW1lbnTigJlzIHRvb2x0aXAuIFRoaXMgaXMgY29uc2lkZXJlZCBhIOKAnG1hbnVhbOKAnSB0cmlnZ2VyaW5nIG9mXG4gICAqIHRoZSB0b29sdGlwLlxuICAgKi9cbiAgc2hvdygpOiB2b2lkIHtcbiAgICB0aGlzLl9wb3NpdGlvblNlcnZpY2Uuc2V0T3B0aW9ucyh7XG4gICAgICBtb2RpZmllcnM6IHtcbiAgICAgICAgZmxpcDoge1xuICAgICAgICAgIGVuYWJsZWQ6IHRoaXMuYWRhcHRpdmVQb3NpdGlvblxuICAgICAgICB9LFxuICAgICAgICBwcmV2ZW50T3ZlcmZsb3c6IHtcbiAgICAgICAgICBlbmFibGVkOiB0aGlzLmFkYXB0aXZlUG9zaXRpb25cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKFxuICAgICAgdGhpcy5pc09wZW4gfHxcbiAgICAgIHRoaXMuaXNEaXNhYmxlZCB8fFxuICAgICAgdGhpcy5fZGVsYXlUaW1lb3V0SWQgfHxcbiAgICAgICF0aGlzLnRvb2x0aXBcbiAgICApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBzaG93VG9vbHRpcCA9ICgpID0+IHtcbiAgICAgIGlmICh0aGlzLl9kZWxheVRpbWVvdXRJZCkge1xuICAgICAgICB0aGlzLl9kZWxheVRpbWVvdXRJZCA9IHVuZGVmaW5lZDtcbiAgICAgIH1cblxuICAgICAgdGhpcy5fdG9vbHRpcFxuICAgICAgICAuYXR0YWNoKFRvb2x0aXBDb250YWluZXJDb21wb25lbnQpXG4gICAgICAgIC50byh0aGlzLmNvbnRhaW5lcilcbiAgICAgICAgLnBvc2l0aW9uKHthdHRhY2htZW50OiB0aGlzLnBsYWNlbWVudH0pXG4gICAgICAgIC5zaG93KHtcbiAgICAgICAgICBjb250ZW50OiB0aGlzLnRvb2x0aXAsXG4gICAgICAgICAgcGxhY2VtZW50OiB0aGlzLnBsYWNlbWVudCxcbiAgICAgICAgICBjb250YWluZXJDbGFzczogdGhpcy5jb250YWluZXJDbGFzcyxcbiAgICAgICAgICBpZDogdGhpcy5hcmlhRGVzY3JpYmVkYnlcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBjb25zdCBjYW5jZWxEZWxheWVkVG9vbHRpcFNob3dpbmcgPSAoKSA9PiB7XG4gICAgICBpZiAodGhpcy5fdG9vbHRpcENhbmNlbFNob3dGbikge1xuICAgICAgICB0aGlzLl90b29sdGlwQ2FuY2VsU2hvd0ZuKCk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGlmICh0aGlzLmRlbGF5KSB7XG4gICAgICBjb25zdCBfdGltZXIgPSB0aW1lcih0aGlzLmRlbGF5KS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICBzaG93VG9vbHRpcCgpO1xuICAgICAgICBjYW5jZWxEZWxheWVkVG9vbHRpcFNob3dpbmcoKTtcbiAgICAgIH0pO1xuXG4gICAgICBpZiAodGhpcy50cmlnZ2Vycykge1xuICAgICAgICBwYXJzZVRyaWdnZXJzKHRoaXMudHJpZ2dlcnMpXG4gICAgICAgICAgLmZvckVhY2goKHRyaWdnZXI6IFRyaWdnZXIpID0+IHtcbiAgICAgICAgICAgIHRoaXMuX3Rvb2x0aXBDYW5jZWxTaG93Rm4gPSB0aGlzLl9yZW5kZXJlci5saXN0ZW4oXG4gICAgICAgICAgICAgIHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCxcbiAgICAgICAgICAgICAgdHJpZ2dlci5jbG9zZSxcbiAgICAgICAgICAgICAgKCkgPT4ge1xuICAgICAgICAgICAgICAgIF90aW1lci51bnN1YnNjcmliZSgpO1xuICAgICAgICAgICAgICAgIGNhbmNlbERlbGF5ZWRUb29sdGlwU2hvd2luZygpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBzaG93VG9vbHRpcCgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBDbG9zZXMgYW4gZWxlbWVudOKAmXMgdG9vbHRpcC4gVGhpcyBpcyBjb25zaWRlcmVkIGEg4oCcbWFudWFs4oCdIHRyaWdnZXJpbmcgb2ZcbiAgICogdGhlIHRvb2x0aXAuXG4gICAqL1xuICBoaWRlKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLl9kZWxheVRpbWVvdXRJZCkge1xuICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuX2RlbGF5VGltZW91dElkKTtcbiAgICAgIHRoaXMuX2RlbGF5VGltZW91dElkID0gdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIGlmICghdGhpcy5fdG9vbHRpcC5pc1Nob3duKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5fdG9vbHRpcC5pbnN0YW5jZS5jbGFzc01hcC5pbiA9IGZhbHNlO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5fdG9vbHRpcC5oaWRlKCk7XG4gICAgfSwgdGhpcy50b29sdGlwRmFkZUR1cmF0aW9uKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuX3Rvb2x0aXAuZGlzcG9zZSgpO1xuICB9XG59XG4iXX0=