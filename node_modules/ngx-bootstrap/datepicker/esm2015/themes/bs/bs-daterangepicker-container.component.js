/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ElementRef, EventEmitter, Renderer2 } from '@angular/core';
import { BsDatepickerAbstractComponent } from '../../base/bs-datepicker-container';
import { BsDatepickerConfig } from '../../bs-datepicker.config';
import { BsDatepickerActions } from '../../reducer/bs-datepicker.actions';
import { BsDatepickerEffects } from '../../reducer/bs-datepicker.effects';
import { BsDatepickerStore } from '../../reducer/bs-datepicker.store';
import { PositioningService } from 'ngx-bootstrap/positioning';
import { datepickerAnimation } from '../../datepicker-animations';
import { take } from 'rxjs/operators';
export class BsDaterangepickerContainerComponent extends BsDatepickerAbstractComponent {
    /**
     * @param {?} _renderer
     * @param {?} _config
     * @param {?} _store
     * @param {?} _element
     * @param {?} _actions
     * @param {?} _effects
     * @param {?} _positionService
     */
    constructor(_renderer, _config, _store, _element, _actions, _effects, _positionService) {
        super();
        this._config = _config;
        this._store = _store;
        this._element = _element;
        this._actions = _actions;
        this._positionService = _positionService;
        this.valueChange = new EventEmitter();
        this.animationState = 'void';
        this._rangeStack = [];
        this._subs = [];
        this._effects = _effects;
        _renderer.setStyle(_element.nativeElement, 'display', 'block');
        _renderer.setStyle(_element.nativeElement, 'position', 'absolute');
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set value(value) {
        this._effects.setRangeValue(value);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this._positionService.setOptions({
            modifiers: { flip: { enabled: this._config.adaptivePosition } },
            allowedPositions: ['top', 'bottom']
        });
        this._positionService.event$
            .pipe(take(1))
            .subscribe((/**
         * @return {?}
         */
        () => {
            this._positionService.disable();
            if (this._config.isAnimated) {
                this.animationState = this.isTopPosition ? 'animated-up' : 'animated-down';
                return;
            }
            this.animationState = 'unanimated';
        }));
        this.containerClass = this._config.containerClass;
        this.isOtherMonthsActive = this._config.selectFromOtherMonth;
        this._effects
            .init(this._store)
            // intial state options
            // todo: fix this, split configs
            .setOptions(this._config)
            // data binding view --> model
            .setBindings(this)
            // set event handlers
            .setEventHandlers(this)
            .registerDatepickerSideEffects();
        // todo: move it somewhere else
        // on selected date change
        this._subs.push(this._store
            .select((/**
         * @param {?} state
         * @return {?}
         */
        state => state.selectedRange))
            .subscribe((/**
         * @param {?} date
         * @return {?}
         */
        date => this.valueChange.emit(date))));
    }
    /**
     * @return {?}
     */
    get isTopPosition() {
        return this._element.nativeElement.classList.contains('top');
    }
    /**
     * @return {?}
     */
    positionServiceEnable() {
        this._positionService.enable();
    }
    /**
     * @param {?} day
     * @return {?}
     */
    daySelectHandler(day) {
        /** @type {?} */
        const isDisabled = this.isOtherMonthsActive ? day.isDisabled : (day.isOtherMonth || day.isDisabled);
        if (isDisabled) {
            return;
        }
        // if only one date is already selected
        // and user clicks on previous date
        // start selection from new date
        // but if new date is after initial one
        // than finish selection
        if (this._rangeStack.length === 1) {
            this._rangeStack =
                day.date >= this._rangeStack[0]
                    ? [this._rangeStack[0], day.date]
                    : [day.date];
        }
        if (this._rangeStack.length === 0) {
            this._rangeStack = [day.date];
        }
        this._store.dispatch(this._actions.selectRange(this._rangeStack));
        if (this._rangeStack.length === 2) {
            this._rangeStack = [];
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        for (const sub of this._subs) {
            sub.unsubscribe();
        }
        this._effects.destroy();
    }
}
BsDaterangepickerContainerComponent.decorators = [
    { type: Component, args: [{
                selector: 'bs-daterangepicker-container',
                providers: [BsDatepickerStore, BsDatepickerEffects],
                template: "<!-- days calendar view mode -->\n<div class=\"bs-datepicker\" [ngClass]=\"containerClass\" *ngIf=\"viewMode | async\">\n  <div\n    class=\"bs-datepicker-container\"\n    [@datepickerAnimation]=\"animationState\"\n    (@datepickerAnimation.done)=\"positionServiceEnable()\">\n    <!--calendars-->\n    <div class=\"bs-calendar-container\" [ngSwitch]=\"viewMode | async\" role=\"application\">\n      <!--days calendar-->\n      <div *ngSwitchCase=\"'day'\" class=\"bs-media-container\">\n        <bs-days-calendar-view\n          *ngFor=\"let calendar of (daysCalendar | async)\"\n          [class.bs-datepicker-multiple]=\"(daysCalendar | async)?.length > 1\"\n          [calendar]=\"calendar\"\n          [options]=\"options | async\"\n          (onNavigate)=\"navigateTo($event)\"\n          (onViewMode)=\"setViewMode($event)\"\n          (onHover)=\"dayHoverHandler($event)\"\n          (onHoverWeek)=\"weekHoverHandler($event)\"\n          (onSelect)=\"daySelectHandler($event)\"\n        ></bs-days-calendar-view>\n      </div>\n\n      <!--months calendar-->\n      <div *ngSwitchCase=\"'month'\" class=\"bs-media-container\">\n        <bs-month-calendar-view\n          *ngFor=\"let calendar of (monthsCalendar | async)\"\n          [class.bs-datepicker-multiple]=\"(daysCalendar | async)?.length > 1\"\n          [calendar]=\"calendar\"\n          (onNavigate)=\"navigateTo($event)\"\n          (onViewMode)=\"setViewMode($event)\"\n          (onHover)=\"monthHoverHandler($event)\"\n          (onSelect)=\"monthSelectHandler($event)\"\n        ></bs-month-calendar-view>\n      </div>\n\n      <!--years calendar-->\n      <div *ngSwitchCase=\"'year'\" class=\"bs-media-container\">\n        <bs-years-calendar-view\n        *ngFor=\"let calendar of (yearsCalendar | async)\"\n        [class.bs-datepicker-multiple]=\"(daysCalendar | async )?.length > 1\"\n        [calendar]=\"calendar\"\n        (onNavigate)=\"navigateTo($event)\"\n        (onViewMode)=\"setViewMode($event)\"\n        (onHover)=\"yearHoverHandler($event)\"\n        (onSelect)=\"yearSelectHandler($event)\"\n      ></bs-years-calendar-view>\n    </div>\n\n  </div>\n\n  <!--applycancel buttons-->\n    <div class=\"bs-datepicker-buttons\" *ngIf=\"false\">\n      <button class=\"btn btn-success\">Apply</button>\n      <button class=\"btn btn-default\">Cancel</button>\n    </div>\n\n  </div>\n\n  <!--custom dates or date ranges picker-->\n  <div class=\"bs-datepicker-custom-range\" *ngIf=\"false\">\n    <bs-custom-date-view [ranges]=\"_customRangesFish\"></bs-custom-date-view>\n  </div>\n</div>\n",
                host: {
                    class: 'bottom',
                    '(click)': '_stopPropagation($event)',
                    role: 'dialog',
                    'aria-label': 'calendar'
                },
                animations: [datepickerAnimation]
            }] }
];
/** @nocollapse */
BsDaterangepickerContainerComponent.ctorParameters = () => [
    { type: Renderer2 },
    { type: BsDatepickerConfig },
    { type: BsDatepickerStore },
    { type: ElementRef },
    { type: BsDatepickerActions },
    { type: BsDatepickerEffects },
    { type: PositioningService }
];
if (false) {
    /** @type {?} */
    BsDaterangepickerContainerComponent.prototype.valueChange;
    /** @type {?} */
    BsDaterangepickerContainerComponent.prototype.animationState;
    /** @type {?} */
    BsDaterangepickerContainerComponent.prototype._rangeStack;
    /** @type {?} */
    BsDaterangepickerContainerComponent.prototype._subs;
    /**
     * @type {?}
     * @private
     */
    BsDaterangepickerContainerComponent.prototype._config;
    /**
     * @type {?}
     * @private
     */
    BsDaterangepickerContainerComponent.prototype._store;
    /**
     * @type {?}
     * @private
     */
    BsDaterangepickerContainerComponent.prototype._element;
    /**
     * @type {?}
     * @private
     */
    BsDaterangepickerContainerComponent.prototype._actions;
    /**
     * @type {?}
     * @private
     */
    BsDaterangepickerContainerComponent.prototype._positionService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnMtZGF0ZXJhbmdlcGlja2VyLWNvbnRhaW5lci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtYm9vdHN0cmFwL2RhdGVwaWNrZXIvIiwic291cmNlcyI6WyJ0aGVtZXMvYnMvYnMtZGF0ZXJhbmdlcGlja2VyLWNvbnRhaW5lci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBcUIsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRWxHLE9BQU8sRUFBRSw2QkFBNkIsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQ25GLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBRWhFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQzFFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQzFFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQ3RFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBRy9ELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQWV0QyxNQUFNLE9BQU8sbUNBQW9DLFNBQVEsNkJBQTZCOzs7Ozs7Ozs7O0lBWXBGLFlBQ0UsU0FBb0IsRUFDWixPQUEyQixFQUMzQixNQUF5QixFQUN6QixRQUFvQixFQUNwQixRQUE2QixFQUNyQyxRQUE2QixFQUNyQixnQkFBb0M7UUFFNUMsS0FBSyxFQUFFLENBQUM7UUFQQSxZQUFPLEdBQVAsT0FBTyxDQUFvQjtRQUMzQixXQUFNLEdBQU4sTUFBTSxDQUFtQjtRQUN6QixhQUFRLEdBQVIsUUFBUSxDQUFZO1FBQ3BCLGFBQVEsR0FBUixRQUFRLENBQXFCO1FBRTdCLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBb0I7UUFiOUMsZ0JBQVcsR0FBRyxJQUFJLFlBQVksRUFBVSxDQUFDO1FBQ3pDLG1CQUFjLEdBQUcsTUFBTSxDQUFDO1FBRXhCLGdCQUFXLEdBQVcsRUFBRSxDQUFDO1FBQ3pCLFVBQUssR0FBbUIsRUFBRSxDQUFDO1FBWXpCLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBRXpCLFNBQVMsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLGFBQWEsRUFBRSxTQUFTLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDL0QsU0FBUyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsYUFBYSxFQUFFLFVBQVUsRUFBRSxVQUFVLENBQUMsQ0FBQztJQUNyRSxDQUFDOzs7OztJQXhCRCxJQUFJLEtBQUssQ0FBQyxLQUFhO1FBQ3JCLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3JDLENBQUM7Ozs7SUF3QkQsUUFBUTtRQUNOLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxVQUFVLENBQUM7WUFDL0IsU0FBUyxFQUFFLEVBQUUsSUFBSSxFQUFFLEVBQUUsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLEVBQUUsRUFBRTtZQUMvRCxnQkFBZ0IsRUFBRSxDQUFDLEtBQUssRUFBRSxRQUFRLENBQUM7U0FDcEMsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE1BQU07YUFDekIsSUFBSSxDQUNILElBQUksQ0FBQyxDQUFDLENBQUMsQ0FDUjthQUNBLFNBQVM7OztRQUFDLEdBQUcsRUFBRTtZQUNkLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUVoQyxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxFQUFFO2dCQUMzQixJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsZUFBZSxDQUFDO2dCQUUzRSxPQUFPO2FBQ1I7WUFFRCxJQUFJLENBQUMsY0FBYyxHQUFHLFlBQVksQ0FBQztRQUNyQyxDQUFDLEVBQUMsQ0FBQztRQUNMLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUM7UUFDbEQsSUFBSSxDQUFDLG1CQUFtQixHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsb0JBQW9CLENBQUM7UUFDN0QsSUFBSSxDQUFDLFFBQVE7YUFDVixJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztZQUNsQix1QkFBdUI7WUFDdkIsZ0NBQWdDO2FBQy9CLFVBQVUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO1lBQ3pCLDhCQUE4QjthQUM3QixXQUFXLENBQUMsSUFBSSxDQUFDO1lBQ2xCLHFCQUFxQjthQUNwQixnQkFBZ0IsQ0FBQyxJQUFJLENBQUM7YUFDdEIsNkJBQTZCLEVBQUUsQ0FBQztRQUVuQywrQkFBK0I7UUFDL0IsMEJBQTBCO1FBQzFCLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUNiLElBQUksQ0FBQyxNQUFNO2FBQ1IsTUFBTTs7OztRQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLGFBQWEsRUFBQzthQUNwQyxTQUFTOzs7O1FBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBQyxDQUNsRCxDQUFDO0lBQ0osQ0FBQzs7OztJQUVELElBQUksYUFBYTtRQUNmLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMvRCxDQUFDOzs7O0lBRUQscUJBQXFCO1FBQ25CLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUNqQyxDQUFDOzs7OztJQUVELGdCQUFnQixDQUFDLEdBQWlCOztjQUMxQixVQUFVLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxZQUFZLElBQUksR0FBRyxDQUFDLFVBQVUsQ0FBQztRQUVuRyxJQUFJLFVBQVUsRUFBRTtZQUNkLE9BQU87U0FDUjtRQUVELHVDQUF1QztRQUN2QyxtQ0FBbUM7UUFDbkMsZ0NBQWdDO1FBQ2hDLHVDQUF1QztRQUN2Qyx3QkFBd0I7UUFDeEIsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7WUFDakMsSUFBSSxDQUFDLFdBQVc7Z0JBQ2QsR0FBRyxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztvQkFDN0IsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDO29CQUNqQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDbEI7UUFFRCxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtZQUNqQyxJQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQy9CO1FBRUQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7UUFFbEUsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7WUFDakMsSUFBSSxDQUFDLFdBQVcsR0FBRyxFQUFFLENBQUM7U0FDdkI7SUFDSCxDQUFDOzs7O0lBRUQsV0FBVztRQUNULEtBQUssTUFBTSxHQUFHLElBQUksSUFBSSxDQUFDLEtBQUssRUFBRTtZQUM1QixHQUFHLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDbkI7UUFDRCxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQzFCLENBQUM7OztZQTlIRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLDhCQUE4QjtnQkFDeEMsU0FBUyxFQUFFLENBQUMsaUJBQWlCLEVBQUUsbUJBQW1CLENBQUM7Z0JBQ25ELG9pRkFBd0M7Z0JBQ3hDLElBQUksRUFBRTtvQkFDSixLQUFLLEVBQUUsUUFBUTtvQkFDZixTQUFTLEVBQUUsMEJBQTBCO29CQUNyQyxJQUFJLEVBQUUsUUFBUTtvQkFDZCxZQUFZLEVBQUUsVUFBVTtpQkFDekI7Z0JBQ0QsVUFBVSxFQUFFLENBQUMsbUJBQW1CLENBQUM7YUFDbEM7Ozs7WUExQmdFLFNBQVM7WUFHakUsa0JBQWtCO1lBSWxCLGlCQUFpQjtZQVBOLFVBQVU7WUFLckIsbUJBQW1CO1lBQ25CLG1CQUFtQjtZQUVuQixrQkFBa0I7Ozs7SUF5QnpCLDBEQUF5Qzs7SUFDekMsNkRBQXdCOztJQUV4QiwwREFBeUI7O0lBQ3pCLG9EQUEyQjs7Ozs7SUFJekIsc0RBQW1DOzs7OztJQUNuQyxxREFBaUM7Ozs7O0lBQ2pDLHVEQUE0Qjs7Ozs7SUFDNUIsdURBQXFDOzs7OztJQUVyQywrREFBNEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciwgT25EZXN0cm95LCBPbkluaXQsIFJlbmRlcmVyMiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBCc0RhdGVwaWNrZXJBYnN0cmFjdENvbXBvbmVudCB9IGZyb20gJy4uLy4uL2Jhc2UvYnMtZGF0ZXBpY2tlci1jb250YWluZXInO1xuaW1wb3J0IHsgQnNEYXRlcGlja2VyQ29uZmlnIH0gZnJvbSAnLi4vLi4vYnMtZGF0ZXBpY2tlci5jb25maWcnO1xuaW1wb3J0IHsgRGF5Vmlld01vZGVsIH0gZnJvbSAnLi4vLi4vbW9kZWxzJztcbmltcG9ydCB7IEJzRGF0ZXBpY2tlckFjdGlvbnMgfSBmcm9tICcuLi8uLi9yZWR1Y2VyL2JzLWRhdGVwaWNrZXIuYWN0aW9ucyc7XG5pbXBvcnQgeyBCc0RhdGVwaWNrZXJFZmZlY3RzIH0gZnJvbSAnLi4vLi4vcmVkdWNlci9icy1kYXRlcGlja2VyLmVmZmVjdHMnO1xuaW1wb3J0IHsgQnNEYXRlcGlja2VyU3RvcmUgfSBmcm9tICcuLi8uLi9yZWR1Y2VyL2JzLWRhdGVwaWNrZXIuc3RvcmUnO1xuaW1wb3J0IHsgUG9zaXRpb25pbmdTZXJ2aWNlIH0gZnJvbSAnbmd4LWJvb3RzdHJhcC9wb3NpdGlvbmluZyc7XG5cbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZGF0ZXBpY2tlckFuaW1hdGlvbiB9IGZyb20gJy4uLy4uL2RhdGVwaWNrZXItYW5pbWF0aW9ucyc7XG5pbXBvcnQgeyB0YWtlIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2JzLWRhdGVyYW5nZXBpY2tlci1jb250YWluZXInLFxuICBwcm92aWRlcnM6IFtCc0RhdGVwaWNrZXJTdG9yZSwgQnNEYXRlcGlja2VyRWZmZWN0c10sXG4gIHRlbXBsYXRlVXJsOiAnLi9icy1kYXRlcGlja2VyLXZpZXcuaHRtbCcsXG4gIGhvc3Q6IHtcbiAgICBjbGFzczogJ2JvdHRvbScsXG4gICAgJyhjbGljayknOiAnX3N0b3BQcm9wYWdhdGlvbigkZXZlbnQpJyxcbiAgICByb2xlOiAnZGlhbG9nJyxcbiAgICAnYXJpYS1sYWJlbCc6ICdjYWxlbmRhcidcbiAgfSxcbiAgYW5pbWF0aW9uczogW2RhdGVwaWNrZXJBbmltYXRpb25dXG59KVxuZXhwb3J0IGNsYXNzIEJzRGF0ZXJhbmdlcGlja2VyQ29udGFpbmVyQ29tcG9uZW50IGV4dGVuZHMgQnNEYXRlcGlja2VyQWJzdHJhY3RDb21wb25lbnRcbiAgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIHNldCB2YWx1ZSh2YWx1ZTogRGF0ZVtdKSB7XG4gICAgdGhpcy5fZWZmZWN0cy5zZXRSYW5nZVZhbHVlKHZhbHVlKTtcbiAgfVxuXG4gIHZhbHVlQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxEYXRlW10+KCk7XG4gIGFuaW1hdGlvblN0YXRlID0gJ3ZvaWQnO1xuXG4gIF9yYW5nZVN0YWNrOiBEYXRlW10gPSBbXTtcbiAgX3N1YnM6IFN1YnNjcmlwdGlvbltdID0gW107XG5cbiAgY29uc3RydWN0b3IoXG4gICAgX3JlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgcHJpdmF0ZSBfY29uZmlnOiBCc0RhdGVwaWNrZXJDb25maWcsXG4gICAgcHJpdmF0ZSBfc3RvcmU6IEJzRGF0ZXBpY2tlclN0b3JlLFxuICAgIHByaXZhdGUgX2VsZW1lbnQ6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSBfYWN0aW9uczogQnNEYXRlcGlja2VyQWN0aW9ucyxcbiAgICBfZWZmZWN0czogQnNEYXRlcGlja2VyRWZmZWN0cyxcbiAgICBwcml2YXRlIF9wb3NpdGlvblNlcnZpY2U6IFBvc2l0aW9uaW5nU2VydmljZVxuICApIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuX2VmZmVjdHMgPSBfZWZmZWN0cztcblxuICAgIF9yZW5kZXJlci5zZXRTdHlsZShfZWxlbWVudC5uYXRpdmVFbGVtZW50LCAnZGlzcGxheScsICdibG9jaycpO1xuICAgIF9yZW5kZXJlci5zZXRTdHlsZShfZWxlbWVudC5uYXRpdmVFbGVtZW50LCAncG9zaXRpb24nLCAnYWJzb2x1dGUnKTtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuX3Bvc2l0aW9uU2VydmljZS5zZXRPcHRpb25zKHtcbiAgICAgIG1vZGlmaWVyczogeyBmbGlwOiB7IGVuYWJsZWQ6IHRoaXMuX2NvbmZpZy5hZGFwdGl2ZVBvc2l0aW9uIH0gfSxcbiAgICAgIGFsbG93ZWRQb3NpdGlvbnM6IFsndG9wJywgJ2JvdHRvbSddXG4gICAgfSk7XG5cbiAgICB0aGlzLl9wb3NpdGlvblNlcnZpY2UuZXZlbnQkXG4gICAgICAucGlwZShcbiAgICAgICAgdGFrZSgxKVxuICAgICAgKVxuICAgICAgLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgIHRoaXMuX3Bvc2l0aW9uU2VydmljZS5kaXNhYmxlKCk7XG5cbiAgICAgICAgaWYgKHRoaXMuX2NvbmZpZy5pc0FuaW1hdGVkKSB7XG4gICAgICAgICAgdGhpcy5hbmltYXRpb25TdGF0ZSA9IHRoaXMuaXNUb3BQb3NpdGlvbiA/ICdhbmltYXRlZC11cCcgOiAnYW5pbWF0ZWQtZG93bic7XG5cbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmFuaW1hdGlvblN0YXRlID0gJ3VuYW5pbWF0ZWQnO1xuICAgICAgfSk7XG4gICAgdGhpcy5jb250YWluZXJDbGFzcyA9IHRoaXMuX2NvbmZpZy5jb250YWluZXJDbGFzcztcbiAgICB0aGlzLmlzT3RoZXJNb250aHNBY3RpdmUgPSB0aGlzLl9jb25maWcuc2VsZWN0RnJvbU90aGVyTW9udGg7XG4gICAgdGhpcy5fZWZmZWN0c1xuICAgICAgLmluaXQodGhpcy5fc3RvcmUpXG4gICAgICAvLyBpbnRpYWwgc3RhdGUgb3B0aW9uc1xuICAgICAgLy8gdG9kbzogZml4IHRoaXMsIHNwbGl0IGNvbmZpZ3NcbiAgICAgIC5zZXRPcHRpb25zKHRoaXMuX2NvbmZpZylcbiAgICAgIC8vIGRhdGEgYmluZGluZyB2aWV3IC0tPiBtb2RlbFxuICAgICAgLnNldEJpbmRpbmdzKHRoaXMpXG4gICAgICAvLyBzZXQgZXZlbnQgaGFuZGxlcnNcbiAgICAgIC5zZXRFdmVudEhhbmRsZXJzKHRoaXMpXG4gICAgICAucmVnaXN0ZXJEYXRlcGlja2VyU2lkZUVmZmVjdHMoKTtcblxuICAgIC8vIHRvZG86IG1vdmUgaXQgc29tZXdoZXJlIGVsc2VcbiAgICAvLyBvbiBzZWxlY3RlZCBkYXRlIGNoYW5nZVxuICAgIHRoaXMuX3N1YnMucHVzaChcbiAgICAgIHRoaXMuX3N0b3JlXG4gICAgICAgIC5zZWxlY3Qoc3RhdGUgPT4gc3RhdGUuc2VsZWN0ZWRSYW5nZSlcbiAgICAgICAgLnN1YnNjcmliZShkYXRlID0+IHRoaXMudmFsdWVDaGFuZ2UuZW1pdChkYXRlKSlcbiAgICApO1xuICB9XG5cbiAgZ2V0IGlzVG9wUG9zaXRpb24oKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2VsZW1lbnQubmF0aXZlRWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ3RvcCcpO1xuICB9XG5cbiAgcG9zaXRpb25TZXJ2aWNlRW5hYmxlKCk6IHZvaWQge1xuICAgIHRoaXMuX3Bvc2l0aW9uU2VydmljZS5lbmFibGUoKTtcbiAgfVxuXG4gIGRheVNlbGVjdEhhbmRsZXIoZGF5OiBEYXlWaWV3TW9kZWwpOiB2b2lkIHtcbiAgICBjb25zdCBpc0Rpc2FibGVkID0gdGhpcy5pc090aGVyTW9udGhzQWN0aXZlID8gZGF5LmlzRGlzYWJsZWQgOiAoZGF5LmlzT3RoZXJNb250aCB8fCBkYXkuaXNEaXNhYmxlZCk7XG5cbiAgICBpZiAoaXNEaXNhYmxlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIGlmIG9ubHkgb25lIGRhdGUgaXMgYWxyZWFkeSBzZWxlY3RlZFxuICAgIC8vIGFuZCB1c2VyIGNsaWNrcyBvbiBwcmV2aW91cyBkYXRlXG4gICAgLy8gc3RhcnQgc2VsZWN0aW9uIGZyb20gbmV3IGRhdGVcbiAgICAvLyBidXQgaWYgbmV3IGRhdGUgaXMgYWZ0ZXIgaW5pdGlhbCBvbmVcbiAgICAvLyB0aGFuIGZpbmlzaCBzZWxlY3Rpb25cbiAgICBpZiAodGhpcy5fcmFuZ2VTdGFjay5sZW5ndGggPT09IDEpIHtcbiAgICAgIHRoaXMuX3JhbmdlU3RhY2sgPVxuICAgICAgICBkYXkuZGF0ZSA+PSB0aGlzLl9yYW5nZVN0YWNrWzBdXG4gICAgICAgICAgPyBbdGhpcy5fcmFuZ2VTdGFja1swXSwgZGF5LmRhdGVdXG4gICAgICAgICAgOiBbZGF5LmRhdGVdO1xuICAgIH1cblxuICAgIGlmICh0aGlzLl9yYW5nZVN0YWNrLmxlbmd0aCA9PT0gMCkge1xuICAgICAgdGhpcy5fcmFuZ2VTdGFjayA9IFtkYXkuZGF0ZV07XG4gICAgfVxuXG4gICAgdGhpcy5fc3RvcmUuZGlzcGF0Y2godGhpcy5fYWN0aW9ucy5zZWxlY3RSYW5nZSh0aGlzLl9yYW5nZVN0YWNrKSk7XG5cbiAgICBpZiAodGhpcy5fcmFuZ2VTdGFjay5sZW5ndGggPT09IDIpIHtcbiAgICAgIHRoaXMuX3JhbmdlU3RhY2sgPSBbXTtcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICBmb3IgKGNvbnN0IHN1YiBvZiB0aGlzLl9zdWJzKSB7XG4gICAgICBzdWIudW5zdWJzY3JpYmUoKTtcbiAgICB9XG4gICAgdGhpcy5fZWZmZWN0cy5kZXN0cm95KCk7XG4gIH1cbn1cbiJdfQ==