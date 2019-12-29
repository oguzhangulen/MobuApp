/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BsNavigationDirection } from '../../models';
import { BsDatepickerConfig } from '../../bs-datepicker.config';
var BsDaysCalendarViewComponent = /** @class */ (function () {
    function BsDaysCalendarViewComponent(_config) {
        this._config = _config;
        this.onNavigate = new EventEmitter();
        this.onViewMode = new EventEmitter();
        this.onSelect = new EventEmitter();
        this.onHover = new EventEmitter();
        this.onHoverWeek = new EventEmitter();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    BsDaysCalendarViewComponent.prototype.navigateTo = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        /** @type {?} */
        var step = BsNavigationDirection.DOWN === event ? -1 : 1;
        this.onNavigate.emit({ step: { month: step } });
    };
    /**
     * @param {?} event
     * @return {?}
     */
    BsDaysCalendarViewComponent.prototype.changeViewMode = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.onViewMode.emit(event);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    BsDaysCalendarViewComponent.prototype.selectDay = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.onSelect.emit(event);
    };
    /**
     * @param {?} week
     * @return {?}
     */
    BsDaysCalendarViewComponent.prototype.selectWeek = /**
     * @param {?} week
     * @return {?}
     */
    function (week) {
        var _this = this;
        if (!this._config.selectWeek) {
            return;
        }
        if (week.days
            && week.days[0]
            && !week.days[0].isDisabled
            && this._config.selectFromOtherMonth) {
            this.onSelect.emit(week.days[0]);
            return;
        }
        if (week.days.length === 0) {
            return;
        }
        /** @type {?} */
        var selectedDay = week.days.find((/**
         * @param {?} day
         * @return {?}
         */
        function (day) {
            return _this._config.selectFromOtherMonth
                ? !day.isDisabled
                : !day.isOtherMonth && !day.isDisabled;
        }));
        this.onSelect.emit(selectedDay);
    };
    /**
     * @param {?} cell
     * @param {?} isHovered
     * @return {?}
     */
    BsDaysCalendarViewComponent.prototype.weekHoverHandler = /**
     * @param {?} cell
     * @param {?} isHovered
     * @return {?}
     */
    function (cell, isHovered) {
        var _this = this;
        if (!this._config.selectWeek) {
            return;
        }
        /** @type {?} */
        var hasActiveDays = cell.days.find((/**
         * @param {?} day
         * @return {?}
         */
        function (day) {
            return _this._config.selectFromOtherMonth
                ? !day.isDisabled
                : !day.isOtherMonth && !day.isDisabled;
        }));
        if (hasActiveDays) {
            cell.isHovered = isHovered;
            this.isWeekHovered = isHovered;
            this.onHoverWeek.emit(cell);
        }
    };
    /**
     * @param {?} cell
     * @param {?} isHovered
     * @return {?}
     */
    BsDaysCalendarViewComponent.prototype.hoverDay = /**
     * @param {?} cell
     * @param {?} isHovered
     * @return {?}
     */
    function (cell, isHovered) {
        if (this._config.selectFromOtherMonth && cell.isOtherMonth) {
            cell.isOtherMonthHovered = isHovered;
        }
        this.onHover.emit({ cell: cell, isHovered: isHovered });
    };
    BsDaysCalendarViewComponent.decorators = [
        { type: Component, args: [{
                    selector: 'bs-days-calendar-view',
                    // changeDetection: ChangeDetectionStrategy.OnPush,
                    template: "\n    <bs-calendar-layout>\n      <bs-datepicker-navigation-view\n        [calendar]=\"calendar\"\n        (onNavigate)=\"navigateTo($event)\"\n        (onViewMode)=\"changeViewMode($event)\"\n      ></bs-datepicker-navigation-view>\n\n      <!--days matrix-->\n      <table role=\"grid\" class=\"days weeks\">\n        <thead>\n        <tr>\n          <!--if show weeks-->\n          <th *ngIf=\"options.showWeekNumbers\"></th>\n          <th *ngFor=\"let weekday of calendar.weekdays; let i = index\"\n              aria-label=\"weekday\">{{ calendar.weekdays[i] }}\n          </th>\n        </tr>\n        </thead>\n        <tbody>\n        <tr *ngFor=\"let week of calendar.weeks; let i = index\">\n          <td class=\"week\" [class.active-week]=\"isWeekHovered\"  *ngIf=\"options.showWeekNumbers\">\n            <span\n                (click)=\"selectWeek(week)\"\n                (mouseenter)=\"weekHoverHandler(week, true)\"\n                (mouseleave)=\"weekHoverHandler(week, false)\">{{ calendar.weekNumbers[i] }}</span>\n          </td>\n          <td *ngFor=\"let day of week.days\" role=\"gridcell\">\n          <span bsDatepickerDayDecorator\n                [day]=\"day\"\n                (click)=\"selectDay(day)\"\n                (mouseenter)=\"hoverDay(day, true)\"\n                (mouseleave)=\"hoverDay(day, false)\">{{ day.label }}</span>\n          </td>\n        </tr>\n        </tbody>\n      </table>\n\n    </bs-calendar-layout>\n  "
                }] }
    ];
    /** @nocollapse */
    BsDaysCalendarViewComponent.ctorParameters = function () { return [
        { type: BsDatepickerConfig }
    ]; };
    BsDaysCalendarViewComponent.propDecorators = {
        calendar: [{ type: Input }],
        options: [{ type: Input }],
        onNavigate: [{ type: Output }],
        onViewMode: [{ type: Output }],
        onSelect: [{ type: Output }],
        onHover: [{ type: Output }],
        onHoverWeek: [{ type: Output }]
    };
    return BsDaysCalendarViewComponent;
}());
export { BsDaysCalendarViewComponent };
if (false) {
    /** @type {?} */
    BsDaysCalendarViewComponent.prototype.calendar;
    /** @type {?} */
    BsDaysCalendarViewComponent.prototype.options;
    /** @type {?} */
    BsDaysCalendarViewComponent.prototype.onNavigate;
    /** @type {?} */
    BsDaysCalendarViewComponent.prototype.onViewMode;
    /** @type {?} */
    BsDaysCalendarViewComponent.prototype.onSelect;
    /** @type {?} */
    BsDaysCalendarViewComponent.prototype.onHover;
    /** @type {?} */
    BsDaysCalendarViewComponent.prototype.onHoverWeek;
    /** @type {?} */
    BsDaysCalendarViewComponent.prototype.isWeekHovered;
    /**
     * @type {?}
     * @private
     */
    BsDaysCalendarViewComponent.prototype._config;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnMtZGF5cy1jYWxlbmRhci12aWV3LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1ib290c3RyYXAvZGF0ZXBpY2tlci8iLCJzb3VyY2VzIjpbInRoZW1lcy9icy9icy1kYXlzLWNhbGVuZGFyLXZpZXcuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULFlBQVksRUFDWixLQUFLLEVBQ0wsTUFBTSxFQUNQLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFFTCxxQkFBcUIsRUFNdEIsTUFBTSxjQUFjLENBQUM7QUFFdEIsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFFaEU7SUF5REUscUNBQW9CLE9BQTJCO1FBQTNCLFlBQU8sR0FBUCxPQUFPLENBQW9CO1FBVHJDLGVBQVUsR0FBRyxJQUFJLFlBQVksRUFBcUIsQ0FBQztRQUNuRCxlQUFVLEdBQUcsSUFBSSxZQUFZLEVBQXdCLENBQUM7UUFFdEQsYUFBUSxHQUFHLElBQUksWUFBWSxFQUFnQixDQUFDO1FBQzVDLFlBQU8sR0FBRyxJQUFJLFlBQVksRUFBa0IsQ0FBQztRQUM3QyxnQkFBVyxHQUFHLElBQUksWUFBWSxFQUFpQixDQUFDO0lBSVAsQ0FBQzs7Ozs7SUFFcEQsZ0RBQVU7Ozs7SUFBVixVQUFXLEtBQTRCOztZQUMvQixJQUFJLEdBQUcscUJBQXFCLENBQUMsSUFBSSxLQUFLLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDMUQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLEVBQUUsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ2xELENBQUM7Ozs7O0lBRUQsb0RBQWM7Ozs7SUFBZCxVQUFlLEtBQTJCO1FBQ3hDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzlCLENBQUM7Ozs7O0lBRUQsK0NBQVM7Ozs7SUFBVCxVQUFVLEtBQW1CO1FBQzNCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzVCLENBQUM7Ozs7O0lBRUQsZ0RBQVU7Ozs7SUFBVixVQUFXLElBQW1CO1FBQTlCLGlCQTBCQztRQXpCQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLEVBQUU7WUFDNUIsT0FBTztTQUNSO1FBRUQsSUFBSSxJQUFJLENBQUMsSUFBSTtlQUNSLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO2VBQ1osQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVU7ZUFDeEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxvQkFBb0IsRUFBRTtZQUV0QyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFFakMsT0FBTztTQUNSO1FBRUQsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7WUFDMUIsT0FBTztTQUNSOztZQUVLLFdBQVcsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUk7Ozs7UUFBQyxVQUFDLEdBQWlCO1lBQ25ELE9BQU8sS0FBSSxDQUFDLE9BQU8sQ0FBQyxvQkFBb0I7Z0JBQ3RDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxVQUFVO2dCQUNqQixDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsWUFBWSxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQztRQUMzQyxDQUFDLEVBQUM7UUFFRixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUNsQyxDQUFDOzs7Ozs7SUFFRCxzREFBZ0I7Ozs7O0lBQWhCLFVBQWlCLElBQW1CLEVBQUUsU0FBa0I7UUFBeEQsaUJBZ0JDO1FBZkMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxFQUFFO1lBQzVCLE9BQU87U0FDUjs7WUFFSyxhQUFhLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJOzs7O1FBQUMsVUFBQyxHQUFpQjtZQUNyRCxPQUFPLEtBQUksQ0FBQyxPQUFPLENBQUMsb0JBQW9CO2dCQUN0QyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsVUFBVTtnQkFDakIsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLFlBQVksSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUM7UUFDM0MsQ0FBQyxFQUFDO1FBRUYsSUFBSSxhQUFhLEVBQUU7WUFDakIsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7WUFDM0IsSUFBSSxDQUFDLGFBQWEsR0FBRyxTQUFTLENBQUM7WUFDL0IsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDN0I7SUFDSCxDQUFDOzs7Ozs7SUFFRCw4Q0FBUTs7Ozs7SUFBUixVQUFTLElBQWtCLEVBQUUsU0FBa0I7UUFDN0MsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLG9CQUFvQixJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDMUQsSUFBSSxDQUFDLG1CQUFtQixHQUFHLFNBQVMsQ0FBQztTQUN0QztRQUVELElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxNQUFBLEVBQUUsU0FBUyxXQUFBLEVBQUUsQ0FBQyxDQUFDO0lBQ3pDLENBQUM7O2dCQTVIRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLHVCQUF1Qjs7b0JBRWpDLFFBQVEsRUFBRSwyN0NBdUNUO2lCQUNGOzs7O2dCQTdDUSxrQkFBa0I7OzsyQkErQ3hCLEtBQUs7MEJBQ0wsS0FBSzs2QkFFTCxNQUFNOzZCQUNOLE1BQU07MkJBRU4sTUFBTTswQkFDTixNQUFNOzhCQUNOLE1BQU07O0lBd0VULGtDQUFDO0NBQUEsQUE3SEQsSUE2SEM7U0FqRlksMkJBQTJCOzs7SUFDdEMsK0NBQXlDOztJQUN6Qyw4Q0FBMEM7O0lBRTFDLGlEQUE2RDs7SUFDN0QsaURBQWdFOztJQUVoRSwrQ0FBc0Q7O0lBQ3RELDhDQUF1RDs7SUFDdkQsa0RBQTBEOztJQUUxRCxvREFBdUI7Ozs7O0lBRVgsOENBQW1DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBFdmVudEVtaXR0ZXIsXG4gIElucHV0LFxuICBPdXRwdXRcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7XG4gIEJzRGF0ZXBpY2tlclZpZXdNb2RlLFxuICBCc05hdmlnYXRpb25EaXJlY3Rpb24sXG4gIEJzTmF2aWdhdGlvbkV2ZW50LFxuICBDZWxsSG92ZXJFdmVudCxcbiAgRGF0ZXBpY2tlclJlbmRlck9wdGlvbnMsXG4gIERheXNDYWxlbmRhclZpZXdNb2RlbCxcbiAgRGF5Vmlld01vZGVsLCBXZWVrVmlld01vZGVsXG59IGZyb20gJy4uLy4uL21vZGVscyc7XG5cbmltcG9ydCB7IEJzRGF0ZXBpY2tlckNvbmZpZyB9IGZyb20gJy4uLy4uL2JzLWRhdGVwaWNrZXIuY29uZmlnJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYnMtZGF5cy1jYWxlbmRhci12aWV3JyxcbiAgLy8gY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHRlbXBsYXRlOiBgXG4gICAgPGJzLWNhbGVuZGFyLWxheW91dD5cbiAgICAgIDxicy1kYXRlcGlja2VyLW5hdmlnYXRpb24tdmlld1xuICAgICAgICBbY2FsZW5kYXJdPVwiY2FsZW5kYXJcIlxuICAgICAgICAob25OYXZpZ2F0ZSk9XCJuYXZpZ2F0ZVRvKCRldmVudClcIlxuICAgICAgICAob25WaWV3TW9kZSk9XCJjaGFuZ2VWaWV3TW9kZSgkZXZlbnQpXCJcbiAgICAgID48L2JzLWRhdGVwaWNrZXItbmF2aWdhdGlvbi12aWV3PlxuXG4gICAgICA8IS0tZGF5cyBtYXRyaXgtLT5cbiAgICAgIDx0YWJsZSByb2xlPVwiZ3JpZFwiIGNsYXNzPVwiZGF5cyB3ZWVrc1wiPlxuICAgICAgICA8dGhlYWQ+XG4gICAgICAgIDx0cj5cbiAgICAgICAgICA8IS0taWYgc2hvdyB3ZWVrcy0tPlxuICAgICAgICAgIDx0aCAqbmdJZj1cIm9wdGlvbnMuc2hvd1dlZWtOdW1iZXJzXCI+PC90aD5cbiAgICAgICAgICA8dGggKm5nRm9yPVwibGV0IHdlZWtkYXkgb2YgY2FsZW5kYXIud2Vla2RheXM7IGxldCBpID0gaW5kZXhcIlxuICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwid2Vla2RheVwiPnt7IGNhbGVuZGFyLndlZWtkYXlzW2ldIH19XG4gICAgICAgICAgPC90aD5cbiAgICAgICAgPC90cj5cbiAgICAgICAgPC90aGVhZD5cbiAgICAgICAgPHRib2R5PlxuICAgICAgICA8dHIgKm5nRm9yPVwibGV0IHdlZWsgb2YgY2FsZW5kYXIud2Vla3M7IGxldCBpID0gaW5kZXhcIj5cbiAgICAgICAgICA8dGQgY2xhc3M9XCJ3ZWVrXCIgW2NsYXNzLmFjdGl2ZS13ZWVrXT1cImlzV2Vla0hvdmVyZWRcIiAgKm5nSWY9XCJvcHRpb25zLnNob3dXZWVrTnVtYmVyc1wiPlxuICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICAoY2xpY2spPVwic2VsZWN0V2Vlayh3ZWVrKVwiXG4gICAgICAgICAgICAgICAgKG1vdXNlZW50ZXIpPVwid2Vla0hvdmVySGFuZGxlcih3ZWVrLCB0cnVlKVwiXG4gICAgICAgICAgICAgICAgKG1vdXNlbGVhdmUpPVwid2Vla0hvdmVySGFuZGxlcih3ZWVrLCBmYWxzZSlcIj57eyBjYWxlbmRhci53ZWVrTnVtYmVyc1tpXSB9fTwvc3Bhbj5cbiAgICAgICAgICA8L3RkPlxuICAgICAgICAgIDx0ZCAqbmdGb3I9XCJsZXQgZGF5IG9mIHdlZWsuZGF5c1wiIHJvbGU9XCJncmlkY2VsbFwiPlxuICAgICAgICAgIDxzcGFuIGJzRGF0ZXBpY2tlckRheURlY29yYXRvclxuICAgICAgICAgICAgICAgIFtkYXldPVwiZGF5XCJcbiAgICAgICAgICAgICAgICAoY2xpY2spPVwic2VsZWN0RGF5KGRheSlcIlxuICAgICAgICAgICAgICAgIChtb3VzZWVudGVyKT1cImhvdmVyRGF5KGRheSwgdHJ1ZSlcIlxuICAgICAgICAgICAgICAgIChtb3VzZWxlYXZlKT1cImhvdmVyRGF5KGRheSwgZmFsc2UpXCI+e3sgZGF5LmxhYmVsIH19PC9zcGFuPlxuICAgICAgICAgIDwvdGQ+XG4gICAgICAgIDwvdHI+XG4gICAgICAgIDwvdGJvZHk+XG4gICAgICA8L3RhYmxlPlxuXG4gICAgPC9icy1jYWxlbmRhci1sYXlvdXQ+XG4gIGBcbn0pXG5leHBvcnQgY2xhc3MgQnNEYXlzQ2FsZW5kYXJWaWV3Q29tcG9uZW50ICB7XG4gIEBJbnB1dCgpIGNhbGVuZGFyOiBEYXlzQ2FsZW5kYXJWaWV3TW9kZWw7XG4gIEBJbnB1dCgpIG9wdGlvbnM6IERhdGVwaWNrZXJSZW5kZXJPcHRpb25zO1xuXG4gIEBPdXRwdXQoKSBvbk5hdmlnYXRlID0gbmV3IEV2ZW50RW1pdHRlcjxCc05hdmlnYXRpb25FdmVudD4oKTtcbiAgQE91dHB1dCgpIG9uVmlld01vZGUgPSBuZXcgRXZlbnRFbWl0dGVyPEJzRGF0ZXBpY2tlclZpZXdNb2RlPigpO1xuXG4gIEBPdXRwdXQoKSBvblNlbGVjdCA9IG5ldyBFdmVudEVtaXR0ZXI8RGF5Vmlld01vZGVsPigpO1xuICBAT3V0cHV0KCkgb25Ib3ZlciA9IG5ldyBFdmVudEVtaXR0ZXI8Q2VsbEhvdmVyRXZlbnQ+KCk7XG4gIEBPdXRwdXQoKSBvbkhvdmVyV2VlayA9IG5ldyBFdmVudEVtaXR0ZXI8V2Vla1ZpZXdNb2RlbD4oKTtcblxuICBpc1dlZWtIb3ZlcmVkOiBib29sZWFuO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2NvbmZpZzogQnNEYXRlcGlja2VyQ29uZmlnKSB7IH1cblxuICBuYXZpZ2F0ZVRvKGV2ZW50OiBCc05hdmlnYXRpb25EaXJlY3Rpb24pOiB2b2lkIHtcbiAgICBjb25zdCBzdGVwID0gQnNOYXZpZ2F0aW9uRGlyZWN0aW9uLkRPV04gPT09IGV2ZW50ID8gLTEgOiAxO1xuICAgIHRoaXMub25OYXZpZ2F0ZS5lbWl0KHsgc3RlcDogeyBtb250aDogc3RlcCB9IH0pO1xuICB9XG5cbiAgY2hhbmdlVmlld01vZGUoZXZlbnQ6IEJzRGF0ZXBpY2tlclZpZXdNb2RlKTogdm9pZCB7XG4gICAgdGhpcy5vblZpZXdNb2RlLmVtaXQoZXZlbnQpO1xuICB9XG5cbiAgc2VsZWN0RGF5KGV2ZW50OiBEYXlWaWV3TW9kZWwpOiB2b2lkIHtcbiAgICB0aGlzLm9uU2VsZWN0LmVtaXQoZXZlbnQpO1xuICB9XG5cbiAgc2VsZWN0V2Vlayh3ZWVrOiBXZWVrVmlld01vZGVsKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLl9jb25maWcuc2VsZWN0V2Vlaykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICh3ZWVrLmRheXNcbiAgICAgICYmIHdlZWsuZGF5c1swXVxuICAgICAgJiYgIXdlZWsuZGF5c1swXS5pc0Rpc2FibGVkXG4gICAgICAmJiB0aGlzLl9jb25maWcuc2VsZWN0RnJvbU90aGVyTW9udGgpIHtcblxuICAgICAgdGhpcy5vblNlbGVjdC5lbWl0KHdlZWsuZGF5c1swXSk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAod2Vlay5kYXlzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHNlbGVjdGVkRGF5ID0gd2Vlay5kYXlzLmZpbmQoKGRheTogRGF5Vmlld01vZGVsKSA9PiB7XG4gICAgICByZXR1cm4gdGhpcy5fY29uZmlnLnNlbGVjdEZyb21PdGhlck1vbnRoXG4gICAgICAgID8gIWRheS5pc0Rpc2FibGVkXG4gICAgICAgIDogIWRheS5pc090aGVyTW9udGggJiYgIWRheS5pc0Rpc2FibGVkO1xuICAgIH0pO1xuXG4gICAgdGhpcy5vblNlbGVjdC5lbWl0KHNlbGVjdGVkRGF5KTtcbiAgfVxuXG4gIHdlZWtIb3ZlckhhbmRsZXIoY2VsbDogV2Vla1ZpZXdNb2RlbCwgaXNIb3ZlcmVkOiBib29sZWFuKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLl9jb25maWcuc2VsZWN0V2Vlaykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGhhc0FjdGl2ZURheXMgPSBjZWxsLmRheXMuZmluZCgoZGF5OiBEYXlWaWV3TW9kZWwpID0+IHtcbiAgICAgIHJldHVybiB0aGlzLl9jb25maWcuc2VsZWN0RnJvbU90aGVyTW9udGhcbiAgICAgICAgPyAhZGF5LmlzRGlzYWJsZWRcbiAgICAgICAgOiAhZGF5LmlzT3RoZXJNb250aCAmJiAhZGF5LmlzRGlzYWJsZWQ7XG4gICAgfSk7XG5cbiAgICBpZiAoaGFzQWN0aXZlRGF5cykge1xuICAgICAgY2VsbC5pc0hvdmVyZWQgPSBpc0hvdmVyZWQ7XG4gICAgICB0aGlzLmlzV2Vla0hvdmVyZWQgPSBpc0hvdmVyZWQ7XG4gICAgICB0aGlzLm9uSG92ZXJXZWVrLmVtaXQoY2VsbCk7XG4gICAgfVxuICB9XG5cbiAgaG92ZXJEYXkoY2VsbDogRGF5Vmlld01vZGVsLCBpc0hvdmVyZWQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICBpZiAodGhpcy5fY29uZmlnLnNlbGVjdEZyb21PdGhlck1vbnRoICYmIGNlbGwuaXNPdGhlck1vbnRoKSB7XG4gICAgICBjZWxsLmlzT3RoZXJNb250aEhvdmVyZWQgPSBpc0hvdmVyZWQ7XG4gICAgfVxuXG4gICAgdGhpcy5vbkhvdmVyLmVtaXQoeyBjZWxsLCBpc0hvdmVyZWQgfSk7XG4gIH1cbn1cbiJdfQ==