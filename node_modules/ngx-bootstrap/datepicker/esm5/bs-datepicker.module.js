/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ComponentLoaderFactory } from 'ngx-bootstrap/component-loader';
import { PositioningService } from 'ngx-bootstrap/positioning';
import { BsDatepickerInputDirective } from './bs-datepicker-input.directive';
import { BsDatepickerDirective } from './bs-datepicker.component';
import { BsDatepickerConfig } from './bs-datepicker.config';
import { BsDaterangepickerInputDirective } from './bs-daterangepicker-input.directive';
import { BsDaterangepickerDirective } from './bs-daterangepicker.component';
import { BsDaterangepickerConfig } from './bs-daterangepicker.config';
import { BsDatepickerInlineDirective } from './bs-datepicker-inline.component';
import { BsDatepickerInlineConfig } from './bs-datepicker-inline.config';
import { BsLocaleService } from './bs-locale.service';
import { BsDatepickerActions } from './reducer/bs-datepicker.actions';
import { BsDatepickerEffects } from './reducer/bs-datepicker.effects';
import { BsDatepickerStore } from './reducer/bs-datepicker.store';
import { BsDatepickerContainerComponent } from './themes/bs/bs-datepicker-container.component';
import { BsDaterangepickerContainerComponent } from './themes/bs/bs-daterangepicker-container.component';
import { BsDatepickerInlineContainerComponent } from './themes/bs/bs-datepicker-inline-container.component';
import { BsDaterangepickerInlineContainerComponent } from './themes/bs/bs-daterangepicker-inline-container.component';
import { BsDaterangepickerInlineDirective } from './bs-daterangepicker-inline.component';
import { BsDaterangepickerInlineConfig } from './bs-daterangepicker-inline.config';
import { BsCalendarLayoutComponent } from './themes/bs/bs-calendar-layout.component';
import { BsCurrentDateViewComponent } from './themes/bs/bs-current-date-view.component';
import { BsCustomDatesViewComponent } from './themes/bs/bs-custom-dates-view.component';
import { BsDatepickerDayDecoratorComponent } from './themes/bs/bs-datepicker-day-decorator.directive';
import { BsDatepickerNavigationViewComponent } from './themes/bs/bs-datepicker-navigation-view.component';
import { BsDaysCalendarViewComponent } from './themes/bs/bs-days-calendar-view.component';
import { BsMonthCalendarViewComponent } from './themes/bs/bs-months-calendar-view.component';
import { BsTimepickerViewComponent } from './themes/bs/bs-timepicker-view.component';
import { BsYearsCalendarViewComponent } from './themes/bs/bs-years-calendar-view.component';
/** @type {?} */
var _exports = [
    BsDatepickerContainerComponent,
    BsDatepickerDirective,
    BsDatepickerInlineContainerComponent,
    BsDatepickerInlineDirective,
    BsDatepickerInputDirective,
    BsDaterangepickerContainerComponent,
    BsDaterangepickerDirective,
    BsDaterangepickerInlineContainerComponent,
    BsDaterangepickerInlineDirective,
    BsDaterangepickerInputDirective
];
var BsDatepickerModule = /** @class */ (function () {
    function BsDatepickerModule() {
    }
    /**
     * @return {?}
     */
    BsDatepickerModule.forRoot = /**
     * @return {?}
     */
    function () {
        return {
            ngModule: BsDatepickerModule,
            providers: [
                ComponentLoaderFactory,
                PositioningService,
                BsDatepickerStore,
                BsDatepickerActions,
                BsDatepickerConfig,
                BsDaterangepickerConfig,
                BsDatepickerInlineConfig,
                BsDaterangepickerInlineConfig,
                BsDatepickerEffects,
                BsLocaleService
            ]
        };
    };
    BsDatepickerModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule],
                    declarations: tslib_1.__spread([
                        BsCalendarLayoutComponent,
                        BsCurrentDateViewComponent,
                        BsCustomDatesViewComponent,
                        BsDatepickerDayDecoratorComponent,
                        BsDatepickerNavigationViewComponent,
                        BsDaysCalendarViewComponent,
                        BsMonthCalendarViewComponent,
                        BsTimepickerViewComponent,
                        BsYearsCalendarViewComponent
                    ], _exports),
                    entryComponents: [
                        BsDatepickerContainerComponent,
                        BsDaterangepickerContainerComponent,
                        BsDatepickerInlineContainerComponent,
                        BsDaterangepickerInlineContainerComponent
                    ],
                    exports: _exports
                },] }
    ];
    return BsDatepickerModule;
}());
export { BsDatepickerModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnMtZGF0ZXBpY2tlci5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtYm9vdHN0cmFwL2RhdGVwaWNrZXIvIiwic291cmNlcyI6WyJicy1kYXRlcGlja2VyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQXVCLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM5RCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUN4RSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUUvRCxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUM3RSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUNsRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUM1RCxPQUFPLEVBQUUsK0JBQStCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUN2RixPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUM1RSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUV0RSxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUMvRSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUV6RSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDdEQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDdEUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDdEUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDbEUsT0FBTyxFQUFFLDhCQUE4QixFQUFFLE1BQU0sK0NBQStDLENBQUM7QUFDL0YsT0FBTyxFQUFFLG1DQUFtQyxFQUFFLE1BQU0sb0RBQW9ELENBQUM7QUFFekcsT0FBTyxFQUFFLG9DQUFvQyxFQUFFLE1BQU0sc0RBQXNELENBQUM7QUFDNUcsT0FBTyxFQUFFLHlDQUF5QyxFQUFFLE1BQU0sMkRBQTJELENBQUM7QUFFdEgsT0FBTyxFQUFFLGdDQUFnQyxFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDekYsT0FBTyxFQUFFLDZCQUE2QixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFFbkYsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFDckYsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFDeEYsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFDeEYsT0FBTyxFQUFFLGlDQUFpQyxFQUFFLE1BQU0sbURBQW1ELENBQUM7QUFDdEcsT0FBTyxFQUFFLG1DQUFtQyxFQUFFLE1BQU0scURBQXFELENBQUM7QUFDMUcsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFDMUYsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sK0NBQStDLENBQUM7QUFDN0YsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFDckYsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sOENBQThDLENBQUM7O0lBRXRGLFFBQVEsR0FBRztJQUNmLDhCQUE4QjtJQUM5QixxQkFBcUI7SUFDckIsb0NBQW9DO0lBQ3BDLDJCQUEyQjtJQUMzQiwwQkFBMEI7SUFDMUIsbUNBQW1DO0lBQ25DLDBCQUEwQjtJQUMxQix5Q0FBeUM7SUFDekMsZ0NBQWdDO0lBQ2hDLCtCQUErQjtDQUNoQztBQUVEO0lBQUE7SUF5Q0EsQ0FBQzs7OztJQWpCUSwwQkFBTzs7O0lBQWQ7UUFDRSxPQUFPO1lBQ0wsUUFBUSxFQUFFLGtCQUFrQjtZQUM1QixTQUFTLEVBQUU7Z0JBQ1Qsc0JBQXNCO2dCQUN0QixrQkFBa0I7Z0JBQ2xCLGlCQUFpQjtnQkFDakIsbUJBQW1CO2dCQUNuQixrQkFBa0I7Z0JBQ2xCLHVCQUF1QjtnQkFDdkIsd0JBQXdCO2dCQUN4Qiw2QkFBNkI7Z0JBQzdCLG1CQUFtQjtnQkFDbkIsZUFBZTthQUNoQjtTQUNGLENBQUM7SUFDSixDQUFDOztnQkF4Q0YsUUFBUSxTQUFDO29CQUNSLE9BQU8sRUFBRSxDQUFDLFlBQVksQ0FBQztvQkFDdkIsWUFBWTt3QkFDVix5QkFBeUI7d0JBQ3pCLDBCQUEwQjt3QkFDMUIsMEJBQTBCO3dCQUMxQixpQ0FBaUM7d0JBQ2pDLG1DQUFtQzt3QkFDbkMsMkJBQTJCO3dCQUMzQiw0QkFBNEI7d0JBQzVCLHlCQUF5Qjt3QkFDekIsNEJBQTRCO3VCQUV6QixRQUFRLENBQ1o7b0JBQ0QsZUFBZSxFQUFFO3dCQUNmLDhCQUE4Qjt3QkFDOUIsbUNBQW1DO3dCQUNuQyxvQ0FBb0M7d0JBQ3BDLHlDQUF5QztxQkFDMUM7b0JBQ0QsT0FBTyxFQUFFLFFBQVE7aUJBQ2xCOztJQW1CRCx5QkFBQztDQUFBLEFBekNELElBeUNDO1NBbEJZLGtCQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBNb2R1bGVXaXRoUHJvdmlkZXJzLCBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tcG9uZW50TG9hZGVyRmFjdG9yeSB9IGZyb20gJ25neC1ib290c3RyYXAvY29tcG9uZW50LWxvYWRlcic7XG5pbXBvcnQgeyBQb3NpdGlvbmluZ1NlcnZpY2UgfSBmcm9tICduZ3gtYm9vdHN0cmFwL3Bvc2l0aW9uaW5nJztcblxuaW1wb3J0IHsgQnNEYXRlcGlja2VySW5wdXREaXJlY3RpdmUgfSBmcm9tICcuL2JzLWRhdGVwaWNrZXItaW5wdXQuZGlyZWN0aXZlJztcbmltcG9ydCB7IEJzRGF0ZXBpY2tlckRpcmVjdGl2ZSB9IGZyb20gJy4vYnMtZGF0ZXBpY2tlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgQnNEYXRlcGlja2VyQ29uZmlnIH0gZnJvbSAnLi9icy1kYXRlcGlja2VyLmNvbmZpZyc7XG5pbXBvcnQgeyBCc0RhdGVyYW5nZXBpY2tlcklucHV0RGlyZWN0aXZlIH0gZnJvbSAnLi9icy1kYXRlcmFuZ2VwaWNrZXItaW5wdXQuZGlyZWN0aXZlJztcbmltcG9ydCB7IEJzRGF0ZXJhbmdlcGlja2VyRGlyZWN0aXZlIH0gZnJvbSAnLi9icy1kYXRlcmFuZ2VwaWNrZXIuY29tcG9uZW50JztcbmltcG9ydCB7IEJzRGF0ZXJhbmdlcGlja2VyQ29uZmlnIH0gZnJvbSAnLi9icy1kYXRlcmFuZ2VwaWNrZXIuY29uZmlnJztcblxuaW1wb3J0IHsgQnNEYXRlcGlja2VySW5saW5lRGlyZWN0aXZlIH0gZnJvbSAnLi9icy1kYXRlcGlja2VyLWlubGluZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgQnNEYXRlcGlja2VySW5saW5lQ29uZmlnIH0gZnJvbSAnLi9icy1kYXRlcGlja2VyLWlubGluZS5jb25maWcnO1xuXG5pbXBvcnQgeyBCc0xvY2FsZVNlcnZpY2UgfSBmcm9tICcuL2JzLWxvY2FsZS5zZXJ2aWNlJztcbmltcG9ydCB7IEJzRGF0ZXBpY2tlckFjdGlvbnMgfSBmcm9tICcuL3JlZHVjZXIvYnMtZGF0ZXBpY2tlci5hY3Rpb25zJztcbmltcG9ydCB7IEJzRGF0ZXBpY2tlckVmZmVjdHMgfSBmcm9tICcuL3JlZHVjZXIvYnMtZGF0ZXBpY2tlci5lZmZlY3RzJztcbmltcG9ydCB7IEJzRGF0ZXBpY2tlclN0b3JlIH0gZnJvbSAnLi9yZWR1Y2VyL2JzLWRhdGVwaWNrZXIuc3RvcmUnO1xuaW1wb3J0IHsgQnNEYXRlcGlja2VyQ29udGFpbmVyQ29tcG9uZW50IH0gZnJvbSAnLi90aGVtZXMvYnMvYnMtZGF0ZXBpY2tlci1jb250YWluZXIuY29tcG9uZW50JztcbmltcG9ydCB7IEJzRGF0ZXJhbmdlcGlja2VyQ29udGFpbmVyQ29tcG9uZW50IH0gZnJvbSAnLi90aGVtZXMvYnMvYnMtZGF0ZXJhbmdlcGlja2VyLWNvbnRhaW5lci5jb21wb25lbnQnO1xuXG5pbXBvcnQgeyBCc0RhdGVwaWNrZXJJbmxpbmVDb250YWluZXJDb21wb25lbnQgfSBmcm9tICcuL3RoZW1lcy9icy9icy1kYXRlcGlja2VyLWlubGluZS1jb250YWluZXIuY29tcG9uZW50JztcbmltcG9ydCB7IEJzRGF0ZXJhbmdlcGlja2VySW5saW5lQ29udGFpbmVyQ29tcG9uZW50IH0gZnJvbSAnLi90aGVtZXMvYnMvYnMtZGF0ZXJhbmdlcGlja2VyLWlubGluZS1jb250YWluZXIuY29tcG9uZW50JztcblxuaW1wb3J0IHsgQnNEYXRlcmFuZ2VwaWNrZXJJbmxpbmVEaXJlY3RpdmUgfSBmcm9tICcuL2JzLWRhdGVyYW5nZXBpY2tlci1pbmxpbmUuY29tcG9uZW50JztcbmltcG9ydCB7IEJzRGF0ZXJhbmdlcGlja2VySW5saW5lQ29uZmlnIH0gZnJvbSAnLi9icy1kYXRlcmFuZ2VwaWNrZXItaW5saW5lLmNvbmZpZyc7XG5cbmltcG9ydCB7IEJzQ2FsZW5kYXJMYXlvdXRDb21wb25lbnQgfSBmcm9tICcuL3RoZW1lcy9icy9icy1jYWxlbmRhci1sYXlvdXQuY29tcG9uZW50JztcbmltcG9ydCB7IEJzQ3VycmVudERhdGVWaWV3Q29tcG9uZW50IH0gZnJvbSAnLi90aGVtZXMvYnMvYnMtY3VycmVudC1kYXRlLXZpZXcuY29tcG9uZW50JztcbmltcG9ydCB7IEJzQ3VzdG9tRGF0ZXNWaWV3Q29tcG9uZW50IH0gZnJvbSAnLi90aGVtZXMvYnMvYnMtY3VzdG9tLWRhdGVzLXZpZXcuY29tcG9uZW50JztcbmltcG9ydCB7IEJzRGF0ZXBpY2tlckRheURlY29yYXRvckNvbXBvbmVudCB9IGZyb20gJy4vdGhlbWVzL2JzL2JzLWRhdGVwaWNrZXItZGF5LWRlY29yYXRvci5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgQnNEYXRlcGlja2VyTmF2aWdhdGlvblZpZXdDb21wb25lbnQgfSBmcm9tICcuL3RoZW1lcy9icy9icy1kYXRlcGlja2VyLW5hdmlnYXRpb24tdmlldy5jb21wb25lbnQnO1xuaW1wb3J0IHsgQnNEYXlzQ2FsZW5kYXJWaWV3Q29tcG9uZW50IH0gZnJvbSAnLi90aGVtZXMvYnMvYnMtZGF5cy1jYWxlbmRhci12aWV3LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBCc01vbnRoQ2FsZW5kYXJWaWV3Q29tcG9uZW50IH0gZnJvbSAnLi90aGVtZXMvYnMvYnMtbW9udGhzLWNhbGVuZGFyLXZpZXcuY29tcG9uZW50JztcbmltcG9ydCB7IEJzVGltZXBpY2tlclZpZXdDb21wb25lbnQgfSBmcm9tICcuL3RoZW1lcy9icy9icy10aW1lcGlja2VyLXZpZXcuY29tcG9uZW50JztcbmltcG9ydCB7IEJzWWVhcnNDYWxlbmRhclZpZXdDb21wb25lbnQgfSBmcm9tICcuL3RoZW1lcy9icy9icy15ZWFycy1jYWxlbmRhci12aWV3LmNvbXBvbmVudCc7XG5cbmNvbnN0IF9leHBvcnRzID0gW1xuICBCc0RhdGVwaWNrZXJDb250YWluZXJDb21wb25lbnQsXG4gIEJzRGF0ZXBpY2tlckRpcmVjdGl2ZSxcbiAgQnNEYXRlcGlja2VySW5saW5lQ29udGFpbmVyQ29tcG9uZW50LFxuICBCc0RhdGVwaWNrZXJJbmxpbmVEaXJlY3RpdmUsXG4gIEJzRGF0ZXBpY2tlcklucHV0RGlyZWN0aXZlLFxuICBCc0RhdGVyYW5nZXBpY2tlckNvbnRhaW5lckNvbXBvbmVudCxcbiAgQnNEYXRlcmFuZ2VwaWNrZXJEaXJlY3RpdmUsXG4gIEJzRGF0ZXJhbmdlcGlja2VySW5saW5lQ29udGFpbmVyQ29tcG9uZW50LFxuICBCc0RhdGVyYW5nZXBpY2tlcklubGluZURpcmVjdGl2ZSxcbiAgQnNEYXRlcmFuZ2VwaWNrZXJJbnB1dERpcmVjdGl2ZVxuXTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZV0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIEJzQ2FsZW5kYXJMYXlvdXRDb21wb25lbnQsXG4gICAgQnNDdXJyZW50RGF0ZVZpZXdDb21wb25lbnQsXG4gICAgQnNDdXN0b21EYXRlc1ZpZXdDb21wb25lbnQsXG4gICAgQnNEYXRlcGlja2VyRGF5RGVjb3JhdG9yQ29tcG9uZW50LFxuICAgIEJzRGF0ZXBpY2tlck5hdmlnYXRpb25WaWV3Q29tcG9uZW50LFxuICAgIEJzRGF5c0NhbGVuZGFyVmlld0NvbXBvbmVudCxcbiAgICBCc01vbnRoQ2FsZW5kYXJWaWV3Q29tcG9uZW50LFxuICAgIEJzVGltZXBpY2tlclZpZXdDb21wb25lbnQsXG4gICAgQnNZZWFyc0NhbGVuZGFyVmlld0NvbXBvbmVudCxcblxuICAgIC4uLl9leHBvcnRzXG4gIF0sXG4gIGVudHJ5Q29tcG9uZW50czogW1xuICAgIEJzRGF0ZXBpY2tlckNvbnRhaW5lckNvbXBvbmVudCxcbiAgICBCc0RhdGVyYW5nZXBpY2tlckNvbnRhaW5lckNvbXBvbmVudCxcbiAgICBCc0RhdGVwaWNrZXJJbmxpbmVDb250YWluZXJDb21wb25lbnQsXG4gICAgQnNEYXRlcmFuZ2VwaWNrZXJJbmxpbmVDb250YWluZXJDb21wb25lbnRcbiAgXSxcbiAgZXhwb3J0czogX2V4cG9ydHNcbn0pXG5leHBvcnQgY2xhc3MgQnNEYXRlcGlja2VyTW9kdWxlIHtcbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBCc0RhdGVwaWNrZXJNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgQ29tcG9uZW50TG9hZGVyRmFjdG9yeSxcbiAgICAgICAgUG9zaXRpb25pbmdTZXJ2aWNlLFxuICAgICAgICBCc0RhdGVwaWNrZXJTdG9yZSxcbiAgICAgICAgQnNEYXRlcGlja2VyQWN0aW9ucyxcbiAgICAgICAgQnNEYXRlcGlja2VyQ29uZmlnLFxuICAgICAgICBCc0RhdGVyYW5nZXBpY2tlckNvbmZpZyxcbiAgICAgICAgQnNEYXRlcGlja2VySW5saW5lQ29uZmlnLFxuICAgICAgICBCc0RhdGVyYW5nZXBpY2tlcklubGluZUNvbmZpZyxcbiAgICAgICAgQnNEYXRlcGlja2VyRWZmZWN0cyxcbiAgICAgICAgQnNMb2NhbGVTZXJ2aWNlXG4gICAgICBdXG4gICAgfTtcbiAgfVxufVxuIl19