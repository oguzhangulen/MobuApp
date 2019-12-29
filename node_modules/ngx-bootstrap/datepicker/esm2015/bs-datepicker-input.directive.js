/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectorRef, Directive, ElementRef, forwardRef, Host, Renderer2 } from '@angular/core';
import { NG_VALIDATORS, NG_VALUE_ACCESSOR } from '@angular/forms';
import { formatDate, getLocale, isAfter, isBefore, isDate, isDateValid, parseDate, utcAsLocal } from 'ngx-bootstrap/chronos';
import { BsDatepickerDirective } from './bs-datepicker.component';
import { BsLocaleService } from './bs-locale.service';
/** @type {?} */
const BS_DATEPICKER_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    /* tslint:disable-next-line: no-use-before-declare */
    useExisting: forwardRef((/**
     * @return {?}
     */
    () => BsDatepickerInputDirective)),
    multi: true
};
/** @type {?} */
const BS_DATEPICKER_VALIDATOR = {
    provide: NG_VALIDATORS,
    /* tslint:disable-next-line: no-use-before-declare */
    useExisting: forwardRef((/**
     * @return {?}
     */
    () => BsDatepickerInputDirective)),
    multi: true
};
export class BsDatepickerInputDirective {
    /**
     * @param {?} _picker
     * @param {?} _localeService
     * @param {?} _renderer
     * @param {?} _elRef
     * @param {?} changeDetection
     */
    constructor(_picker, _localeService, _renderer, _elRef, changeDetection) {
        this._picker = _picker;
        this._localeService = _localeService;
        this._renderer = _renderer;
        this._elRef = _elRef;
        this.changeDetection = changeDetection;
        this._onChange = Function.prototype;
        this._onTouched = Function.prototype;
        /* tslint:disable-next-line: no-unused-variable */
        this._validatorChange = Function.prototype;
        // update input value on datepicker value update
        this._picker.bsValueChange.subscribe((/**
         * @param {?} value
         * @return {?}
         */
        (value) => {
            this._setInputValue(value);
            if (this._value !== value) {
                this._value = value;
                this._onChange(value);
                this._onTouched();
            }
            this.changeDetection.markForCheck();
        }));
        // update input value on locale change
        this._localeService.localeChange.subscribe((/**
         * @return {?}
         */
        () => {
            this._setInputValue(this._value);
        }));
    }
    /**
     * @param {?} value
     * @return {?}
     */
    _setInputValue(value) {
        /** @type {?} */
        const initialDate = !value ? ''
            : formatDate(value, this._picker._config.dateInputFormat, this._localeService.currentLocale);
        this._renderer.setProperty(this._elRef.nativeElement, 'value', initialDate);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onChange(event) {
        /* tslint:disable-next-line: no-any*/
        this.writeValue(((/** @type {?} */ (event.target))).value, false);
        this._onChange(this._value);
        this._onTouched();
    }
    /**
     * @param {?} c
     * @return {?}
     */
    validate(c) {
        /** @type {?} */
        const _value = c.value;
        /* tslint:disable-next-line: prefer-switch */
        if (_value === null || _value === undefined || _value === '') {
            return null;
        }
        if (isDate(_value)) {
            /** @type {?} */
            const _isDateValid = isDateValid(_value);
            if (!_isDateValid) {
                return { bsDate: { invalid: _value } };
            }
            if (this._picker && this._picker.minDate && isBefore(_value, this._picker.minDate, 'date')) {
                return { bsDate: { minDate: this._picker.minDate } };
            }
            if (this._picker && this._picker.maxDate && isAfter(_value, this._picker.maxDate, 'date')) {
                return { bsDate: { maxDate: this._picker.maxDate } };
            }
        }
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnValidatorChange(fn) {
        this._validatorChange = fn;
    }
    /**
     * @param {?} value
     * @param {?=} isUtc
     * @return {?}
     */
    writeValue(value, isUtc = true) {
        if (!value) {
            this._value = null;
        }
        else {
            /** @type {?} */
            const _localeKey = this._localeService.currentLocale;
            /** @type {?} */
            const _locale = getLocale(_localeKey);
            if (!_locale) {
                throw new Error(`Locale "${_localeKey}" is not defined, please add it with "defineLocale(...)"`);
            }
            this._value = parseDate(value, this._picker._config.dateInputFormat, this._localeService.currentLocale);
            if (isUtc) {
                this._value = utcAsLocal(this._value);
            }
        }
        this._picker.bsValue = this._value;
    }
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    setDisabledState(isDisabled) {
        this._picker.isDisabled = isDisabled;
        if (isDisabled) {
            this._renderer.setAttribute(this._elRef.nativeElement, 'disabled', 'disabled');
            return;
        }
        this._renderer.removeAttribute(this._elRef.nativeElement, 'disabled');
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this._onChange = fn;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) {
        this._onTouched = fn;
    }
    /**
     * @return {?}
     */
    onBlur() {
        this._onTouched();
    }
    /**
     * @return {?}
     */
    hide() {
        this._picker.hide();
        this._renderer.selectRootElement(this._elRef.nativeElement).blur();
    }
}
BsDatepickerInputDirective.decorators = [
    { type: Directive, args: [{
                selector: `input[bsDatepicker]`,
                host: {
                    '(change)': 'onChange($event)',
                    '(keyup.esc)': 'hide()',
                    '(blur)': 'onBlur()'
                },
                providers: [BS_DATEPICKER_VALUE_ACCESSOR, BS_DATEPICKER_VALIDATOR]
            },] }
];
/** @nocollapse */
BsDatepickerInputDirective.ctorParameters = () => [
    { type: BsDatepickerDirective, decorators: [{ type: Host }] },
    { type: BsLocaleService },
    { type: Renderer2 },
    { type: ElementRef },
    { type: ChangeDetectorRef }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    BsDatepickerInputDirective.prototype._onChange;
    /**
     * @type {?}
     * @private
     */
    BsDatepickerInputDirective.prototype._onTouched;
    /**
     * @type {?}
     * @private
     */
    BsDatepickerInputDirective.prototype._validatorChange;
    /**
     * @type {?}
     * @private
     */
    BsDatepickerInputDirective.prototype._value;
    /**
     * @type {?}
     * @private
     */
    BsDatepickerInputDirective.prototype._picker;
    /**
     * @type {?}
     * @private
     */
    BsDatepickerInputDirective.prototype._localeService;
    /**
     * @type {?}
     * @private
     */
    BsDatepickerInputDirective.prototype._renderer;
    /**
     * @type {?}
     * @private
     */
    BsDatepickerInputDirective.prototype._elRef;
    /**
     * @type {?}
     * @private
     */
    BsDatepickerInputDirective.prototype.changeDetection;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnMtZGF0ZXBpY2tlci1pbnB1dC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtYm9vdHN0cmFwL2RhdGVwaWNrZXIvIiwic291cmNlcyI6WyJicy1kYXRlcGlja2VyLWlucHV0LmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsVUFBVSxFQUNWLFVBQVUsRUFDVixJQUFJLEVBRUosU0FBUyxFQUNWLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFHTCxhQUFhLEVBQ2IsaUJBQWlCLEVBR2xCLE1BQU0sZ0JBQWdCLENBQUM7QUFFeEIsT0FBTyxFQUNMLFVBQVUsRUFDVixTQUFTLEVBQ1QsT0FBTyxFQUNQLFFBQVEsRUFDUixNQUFNLEVBQ04sV0FBVyxFQUNYLFNBQVMsRUFDVCxVQUFVLEVBQ1gsTUFBTSx1QkFBdUIsQ0FBQztBQUUvQixPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUNsRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0scUJBQXFCLENBQUM7O01BRWhELDRCQUE0QixHQUFhO0lBQzdDLE9BQU8sRUFBRSxpQkFBaUI7O0lBRTFCLFdBQVcsRUFBRSxVQUFVOzs7SUFBQyxHQUFHLEVBQUUsQ0FBQywwQkFBMEIsRUFBQztJQUN6RCxLQUFLLEVBQUUsSUFBSTtDQUNaOztNQUVLLHVCQUF1QixHQUFhO0lBQ3hDLE9BQU8sRUFBRSxhQUFhOztJQUV0QixXQUFXLEVBQUUsVUFBVTs7O0lBQUMsR0FBRyxFQUFFLENBQUMsMEJBQTBCLEVBQUM7SUFDekQsS0FBSyxFQUFFLElBQUk7Q0FDWjtBQVdELE1BQU0sT0FBTywwQkFBMEI7Ozs7Ozs7O0lBUXJDLFlBQTRCLE9BQThCLEVBQ3RDLGNBQStCLEVBQy9CLFNBQW9CLEVBQ3BCLE1BQWtCLEVBQ2xCLGVBQWtDO1FBSjFCLFlBQU8sR0FBUCxPQUFPLENBQXVCO1FBQ3RDLG1C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QThDOzs7OztJQUM5QyxvREFBdUM7Ozs7O0lBQ3ZDLCtDQUE0Qjs7Ozs7SUFDNUIsNENBQTBCOzs7OztJQUMxQixxREFBMEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgRGlyZWN0aXZlLFxuICBFbGVtZW50UmVmLFxuICBmb3J3YXJkUmVmLFxuICBIb3N0LFxuICBQcm92aWRlcixcbiAgUmVuZGVyZXIyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQge1xuICBBYnN0cmFjdENvbnRyb2wsXG4gIENvbnRyb2xWYWx1ZUFjY2Vzc29yLFxuICBOR19WQUxJREFUT1JTLFxuICBOR19WQUxVRV9BQ0NFU1NPUixcbiAgVmFsaWRhdGlvbkVycm9ycyxcbiAgVmFsaWRhdG9yXG59IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuaW1wb3J0IHtcbiAgZm9ybWF0RGF0ZSxcbiAgZ2V0TG9jYWxlLFxuICBpc0FmdGVyLFxuICBpc0JlZm9yZSxcbiAgaXNEYXRlLFxuICBpc0RhdGVWYWxpZCxcbiAgcGFyc2VEYXRlLFxuICB1dGNBc0xvY2FsXG59IGZyb20gJ25neC1ib290c3RyYXAvY2hyb25vcyc7XG5cbmltcG9ydCB7IEJzRGF0ZXBpY2tlckRpcmVjdGl2ZSB9IGZyb20gJy4vYnMtZGF0ZXBpY2tlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgQnNMb2NhbGVTZXJ2aWNlIH0gZnJvbSAnLi9icy1sb2NhbGUuc2VydmljZSc7XG5cbmNvbnN0IEJTX0RBVEVQSUNLRVJfVkFMVUVfQUNDRVNTT1I6IFByb3ZpZGVyID0ge1xuICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby11c2UtYmVmb3JlLWRlY2xhcmUgKi9cbiAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gQnNEYXRlcGlja2VySW5wdXREaXJlY3RpdmUpLFxuICBtdWx0aTogdHJ1ZVxufTtcblxuY29uc3QgQlNfREFURVBJQ0tFUl9WQUxJREFUT1I6IFByb3ZpZGVyID0ge1xuICBwcm92aWRlOiBOR19WQUxJREFUT1JTLFxuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLXVzZS1iZWZvcmUtZGVjbGFyZSAqL1xuICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBCc0RhdGVwaWNrZXJJbnB1dERpcmVjdGl2ZSksXG4gIG11bHRpOiB0cnVlXG59O1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6IGBpbnB1dFtic0RhdGVwaWNrZXJdYCxcbiAgaG9zdDoge1xuICAgICcoY2hhbmdlKSc6ICdvbkNoYW5nZSgkZXZlbnQpJyxcbiAgICAnKGtleXVwLmVzYyknOiAnaGlkZSgpJyxcbiAgICAnKGJsdXIpJzogJ29uQmx1cigpJ1xuICB9LFxuICBwcm92aWRlcnM6IFtCU19EQVRFUElDS0VSX1ZBTFVFX0FDQ0VTU09SLCBCU19EQVRFUElDS0VSX1ZBTElEQVRPUl1cbn0pXG5leHBvcnQgY2xhc3MgQnNEYXRlcGlja2VySW5wdXREaXJlY3RpdmVcbiAgaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciwgVmFsaWRhdG9yIHtcbiAgcHJpdmF0ZSBfb25DaGFuZ2UgPSBGdW5jdGlvbi5wcm90b3R5cGU7XG4gIHByaXZhdGUgX29uVG91Y2hlZCA9IEZ1bmN0aW9uLnByb3RvdHlwZTtcbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby11bnVzZWQtdmFyaWFibGUgKi9cbiAgcHJpdmF0ZSBfdmFsaWRhdG9yQ2hhbmdlID0gRnVuY3Rpb24ucHJvdG90eXBlO1xuICBwcml2YXRlIF92YWx1ZTogRGF0ZTtcblxuICBjb25zdHJ1Y3RvcihASG9zdCgpIHByaXZhdGUgX3BpY2tlcjogQnNEYXRlcGlja2VyRGlyZWN0aXZlLFxuICAgICAgICAgICAgICBwcml2YXRlIF9sb2NhbGVTZXJ2aWNlOiBCc0xvY2FsZVNlcnZpY2UsXG4gICAgICAgICAgICAgIHByaXZhdGUgX3JlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgICAgICAgICAgIHByaXZhdGUgX2VsUmVmOiBFbGVtZW50UmVmLFxuICAgICAgICAgICAgICBwcml2YXRlIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHtcbiAgICAvLyB1cGRhdGUgaW5wdXQgdmFsdWUgb24gZGF0ZXBpY2tlciB2YWx1ZSB1cGRhdGVcbiAgICB0aGlzLl9waWNrZXIuYnNWYWx1ZUNoYW5nZS5zdWJzY3JpYmUoKHZhbHVlOiBEYXRlKSA9PiB7XG4gICAgICB0aGlzLl9zZXRJbnB1dFZhbHVlKHZhbHVlKTtcbiAgICAgIGlmICh0aGlzLl92YWx1ZSAhPT0gdmFsdWUpIHtcbiAgICAgICAgdGhpcy5fdmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgdGhpcy5fb25DaGFuZ2UodmFsdWUpO1xuICAgICAgICB0aGlzLl9vblRvdWNoZWQoKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuY2hhbmdlRGV0ZWN0aW9uLm1hcmtGb3JDaGVjaygpO1xuICAgIH0pO1xuXG4gICAgLy8gdXBkYXRlIGlucHV0IHZhbHVlIG9uIGxvY2FsZSBjaGFuZ2VcbiAgICB0aGlzLl9sb2NhbGVTZXJ2aWNlLmxvY2FsZUNoYW5nZS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgdGhpcy5fc2V0SW5wdXRWYWx1ZSh0aGlzLl92YWx1ZSk7XG4gICAgfSk7XG4gIH1cblxuICBfc2V0SW5wdXRWYWx1ZSh2YWx1ZTogRGF0ZSk6IHZvaWQge1xuICAgIGNvbnN0IGluaXRpYWxEYXRlID0gIXZhbHVlID8gJydcbiAgICAgIDogZm9ybWF0RGF0ZSh2YWx1ZSwgdGhpcy5fcGlja2VyLl9jb25maWcuZGF0ZUlucHV0Rm9ybWF0LCB0aGlzLl9sb2NhbGVTZXJ2aWNlLmN1cnJlbnRMb2NhbGUpO1xuXG4gICAgdGhpcy5fcmVuZGVyZXIuc2V0UHJvcGVydHkodGhpcy5fZWxSZWYubmF0aXZlRWxlbWVudCwgJ3ZhbHVlJywgaW5pdGlhbERhdGUpO1xuICB9XG5cbiAgb25DaGFuZ2UoZXZlbnQ6IEV2ZW50KSB7XG4gICAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1hbnkqL1xuICAgIHRoaXMud3JpdGVWYWx1ZSgoZXZlbnQudGFyZ2V0IGFzIGFueSkudmFsdWUsIGZhbHNlKTtcbiAgICB0aGlzLl9vbkNoYW5nZSh0aGlzLl92YWx1ZSk7XG4gICAgdGhpcy5fb25Ub3VjaGVkKCk7XG4gIH1cblxuICB2YWxpZGF0ZShjOiBBYnN0cmFjdENvbnRyb2wpOiBWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbCB7XG4gICAgY29uc3QgX3ZhbHVlOiBEYXRlIHwgc3RyaW5nID0gYy52YWx1ZTtcblxuICAgIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogcHJlZmVyLXN3aXRjaCAqL1xuICAgIGlmIChfdmFsdWUgPT09IG51bGwgfHwgX3ZhbHVlID09PSB1bmRlZmluZWQgfHwgX3ZhbHVlID09PSAnJykge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgaWYgKGlzRGF0ZShfdmFsdWUpKSB7XG4gICAgICBjb25zdCBfaXNEYXRlVmFsaWQgPSBpc0RhdGVWYWxpZChfdmFsdWUpO1xuICAgICAgaWYgKCFfaXNEYXRlVmFsaWQpIHtcbiAgICAgICAgcmV0dXJuIHsgYnNEYXRlOiB7IGludmFsaWQ6IF92YWx1ZSB9IH07XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLl9waWNrZXIgJiYgdGhpcy5fcGlja2VyLm1pbkRhdGUgJiYgaXNCZWZvcmUoX3ZhbHVlLCB0aGlzLl9waWNrZXIubWluRGF0ZSwgJ2RhdGUnKSkge1xuICAgICAgICByZXR1cm4geyBic0RhdGU6IHsgbWluRGF0ZTogdGhpcy5fcGlja2VyLm1pbkRhdGUgfSB9O1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5fcGlja2VyICYmIHRoaXMuX3BpY2tlci5tYXhEYXRlICYmIGlzQWZ0ZXIoX3ZhbHVlLCB0aGlzLl9waWNrZXIubWF4RGF0ZSwgJ2RhdGUnKSkge1xuICAgICAgICByZXR1cm4geyBic0RhdGU6IHsgbWF4RGF0ZTogdGhpcy5fcGlja2VyLm1heERhdGUgfSB9O1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJlZ2lzdGVyT25WYWxpZGF0b3JDaGFuZ2UoZm46ICgpID0+IHZvaWQpOiB2b2lkIHtcbiAgICB0aGlzLl92YWxpZGF0b3JDaGFuZ2UgPSBmbjtcbiAgfVxuXG4gIHdyaXRlVmFsdWUodmFsdWU6IERhdGUgfCBzdHJpbmcsIGlzVXRjID0gdHJ1ZSkge1xuICAgIGlmICghdmFsdWUpIHtcbiAgICAgIHRoaXMuX3ZhbHVlID0gbnVsbDtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgX2xvY2FsZUtleSA9IHRoaXMuX2xvY2FsZVNlcnZpY2UuY3VycmVudExvY2FsZTtcbiAgICAgIGNvbnN0IF9sb2NhbGUgPSBnZXRMb2NhbGUoX2xvY2FsZUtleSk7XG4gICAgICBpZiAoIV9sb2NhbGUpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgIGBMb2NhbGUgXCIke19sb2NhbGVLZXl9XCIgaXMgbm90IGRlZmluZWQsIHBsZWFzZSBhZGQgaXQgd2l0aCBcImRlZmluZUxvY2FsZSguLi4pXCJgXG4gICAgICAgICk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX3ZhbHVlID0gcGFyc2VEYXRlKHZhbHVlLCB0aGlzLl9waWNrZXIuX2NvbmZpZy5kYXRlSW5wdXRGb3JtYXQsIHRoaXMuX2xvY2FsZVNlcnZpY2UuY3VycmVudExvY2FsZSk7XG5cbiAgICAgIGlmIChpc1V0Yykge1xuICAgICAgICB0aGlzLl92YWx1ZSA9IHV0Y0FzTG9jYWwodGhpcy5fdmFsdWUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuX3BpY2tlci5ic1ZhbHVlID0gdGhpcy5fdmFsdWU7XG4gIH1cblxuICBzZXREaXNhYmxlZFN0YXRlKGlzRGlzYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICB0aGlzLl9waWNrZXIuaXNEaXNhYmxlZCA9IGlzRGlzYWJsZWQ7XG4gICAgaWYgKGlzRGlzYWJsZWQpIHtcbiAgICAgIHRoaXMuX3JlbmRlcmVyLnNldEF0dHJpYnV0ZSh0aGlzLl9lbFJlZi5uYXRpdmVFbGVtZW50LCAnZGlzYWJsZWQnLCAnZGlzYWJsZWQnKTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLl9yZW5kZXJlci5yZW1vdmVBdHRyaWJ1dGUodGhpcy5fZWxSZWYubmF0aXZlRWxlbWVudCwgJ2Rpc2FibGVkJyk7XG4gIH1cblxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiAoKSA9PiB2b2lkKTogdm9pZCB7XG4gICAgdGhpcy5fb25DaGFuZ2UgPSBmbjtcbiAgfVxuXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiAoKSA9PiB2b2lkKTogdm9pZCB7XG4gICAgdGhpcy5fb25Ub3VjaGVkID0gZm47XG4gIH1cblxuICBvbkJsdXIoKSB7XG4gICAgdGhpcy5fb25Ub3VjaGVkKCk7XG4gIH1cblxuICBoaWRlKCkge1xuICAgIHRoaXMuX3BpY2tlci5oaWRlKCk7XG4gICAgdGhpcy5fcmVuZGVyZXIuc2VsZWN0Um9vdEVsZW1lbnQodGhpcy5fZWxSZWYubmF0aXZlRWxlbWVudCkuYmx1cigpO1xuICB9XG59XG4iXX0=