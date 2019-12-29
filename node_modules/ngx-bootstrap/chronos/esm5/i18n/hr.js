/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// tslint:disable:comment-format binary-expression-operand-order max-line-length
// tslint:disable:no-bitwise prefer-template cyclomatic-complexity
// tslint:disable:no-shadowed-variable switch-default prefer-const
// tslint:disable:one-variable-per-declaration newline-before-return
//! moment.js locale configuration
//! locale : Croatian [hr]
//! author : Danijel Grmec : https://github.com/cobaltsis
/** @type {?} */
export var hrLocale = {
    abbr: 'hr',
    months: 'Siječanj_Veljača_Ožujak_Travanj_Svibanj_Lipanj_Srpanj_Kolovoz_Rujan_Listopad_Studeni_Prosinac'.split('_'),
    monthsShort: 'Sij_Velj_Ožu_Tra_Svi_Lip_Srp_Kol_Ruj_Lis_Stu_Pro'.split('_'),
    weekdays: 'Nedjelja_Ponedjeljak_Utorak_Srijeda_Četvrtak_Petak_Subota'.split('_'),
    weekdaysShort: 'Ned_Pon_Uto_Sri_Čet_Pet_Sub'.split('_'),
    weekdaysMin: 'Ne_Po_Ut_Sr_Če_Pe_Su'.split('_'),
    longDateFormat: {
        LT: 'HH:mm',
        LTS: 'HH:mm:ss',
        L: 'DD/MM/YYYY',
        LL: 'D MMMM YYYY',
        LLL: 'D MMMM YYYY HH:mm',
        LLLL: 'dddd, D MMMM YYYY HH:mm'
    },
    calendar: {
        sameDay: '[Danas u] LT',
        nextDay: '[Sutra u] LT',
        nextWeek: 'dddd [u] LT',
        lastDay: '[Jučer u] LT',
        lastWeek: '[Zadnji] dddd [u] LT',
        sameElse: 'L'
    },
    relativeTime: {
        future: 'za %s',
        past: '%s prije',
        s: 'nekoliko sekundi',
        ss: '%d sekundi',
        m: 'minuta',
        mm: '%d minuta',
        h: 'sat',
        hh: '%d sati',
        d: 'dan',
        dd: '%d dana',
        M: 'mjesec',
        MM: '%d mjeseci',
        y: 'godina',
        yy: '%d godina'
    },
    dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
    ordinal: /**
     * @param {?} _num
     * @return {?}
     */
    function (_num) {
        /** @type {?} */
        var num = Number(_num);
        /** @type {?} */
        var b = num % 10;
        /** @type {?} */
        var output = (~~(num % 100 / 10) === 1) ? '.' :
            (b === 1) ? '.' :
                (b === 2) ? '.' :
                    (b === 3) ? '.' : '.';
        return num + output;
    },
    week: {
        dow: 1,
        // Monday is the first day of the week.
        doy: 4 // The week that contains Jan 4th is the first week of the year.
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvIiwic291cmNlcyI6WyJpMThuL2hyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQVdBLE1BQU0sS0FBTyxRQUFRLEdBQWU7SUFDbEMsSUFBSSxFQUFFLElBQUk7SUFDVixNQUFNLEVBQUUsK0ZBQStGLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztJQUNsSCxXQUFXLEVBQUUsa0RBQWtELENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztJQUMxRSxRQUFRLEVBQUUsMkRBQTJELENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztJQUNoRixhQUFhLEVBQUUsNkJBQTZCLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztJQUN2RCxXQUFXLEVBQUUsc0JBQXNCLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztJQUM5QyxjQUFjLEVBQUU7UUFDZCxFQUFFLEVBQUUsT0FBTztRQUNYLEdBQUcsRUFBRSxVQUFVO1FBQ2YsQ0FBQyxFQUFFLFlBQVk7UUFDZixFQUFFLEVBQUUsYUFBYTtRQUNqQixHQUFHLEVBQUUsbUJBQW1CO1FBQ3hCLElBQUksRUFBRSx5QkFBeUI7S0FDaEM7SUFDRCxRQUFRLEVBQUU7UUFDUixPQUFPLEVBQUUsY0FBYztRQUN2QixPQUFPLEVBQUUsY0FBYztRQUN2QixRQUFRLEVBQUUsYUFBYTtRQUN2QixPQUFPLEVBQUUsY0FBYztRQUN2QixRQUFRLEVBQUUsc0JBQXNCO1FBQ2hDLFFBQVEsRUFBRSxHQUFHO0tBQ2Q7SUFDRCxZQUFZLEVBQUU7UUFDWixNQUFNLEVBQUUsT0FBTztRQUNmLElBQUksRUFBRSxVQUFVO1FBQ2hCLENBQUMsRUFBRSxrQkFBa0I7UUFDckIsRUFBRSxFQUFFLFlBQVk7UUFDaEIsQ0FBQyxFQUFFLFFBQVE7UUFDWCxFQUFFLEVBQUUsV0FBVztRQUNmLENBQUMsRUFBRSxLQUFLO1FBQ1IsRUFBRSxFQUFFLFNBQVM7UUFDYixDQUFDLEVBQUUsS0FBSztRQUNSLEVBQUUsRUFBRSxTQUFTO1FBQ2IsQ0FBQyxFQUFFLFFBQVE7UUFDWCxFQUFFLEVBQUUsWUFBWTtRQUNoQixDQUFDLEVBQUUsUUFBUTtRQUNYLEVBQUUsRUFBRSxXQUFXO0tBQ2hCO0lBQ0Qsc0JBQXNCLEVBQUUsc0JBQXNCO0lBQzlDLE9BQU87Ozs7SUFBUCxVQUFRLElBQVk7O1lBQ1osR0FBRyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUM7O1lBQ2xCLENBQUMsR0FBRyxHQUFHLEdBQUcsRUFBRTs7WUFDaEIsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLEdBQUcsR0FBRyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDekMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUNmLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztvQkFDZixDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHO1FBQzdCLE9BQU8sR0FBRyxHQUFHLE1BQU0sQ0FBQztJQUN0QixDQUFDO0lBQ0QsSUFBSSxFQUFFO1FBQ0osR0FBRyxFQUFFLENBQUM7O1FBQ04sR0FBRyxFQUFFLENBQUMsQ0FBRSxnRUFBZ0U7S0FDekU7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbIi8vIHRzbGludDpkaXNhYmxlOmNvbW1lbnQtZm9ybWF0IGJpbmFyeS1leHByZXNzaW9uLW9wZXJhbmQtb3JkZXIgbWF4LWxpbmUtbGVuZ3RoXG4vLyB0c2xpbnQ6ZGlzYWJsZTpuby1iaXR3aXNlIHByZWZlci10ZW1wbGF0ZSBjeWNsb21hdGljLWNvbXBsZXhpdHlcbi8vIHRzbGludDpkaXNhYmxlOm5vLXNoYWRvd2VkLXZhcmlhYmxlIHN3aXRjaC1kZWZhdWx0IHByZWZlci1jb25zdFxuLy8gdHNsaW50OmRpc2FibGU6b25lLXZhcmlhYmxlLXBlci1kZWNsYXJhdGlvbiBuZXdsaW5lLWJlZm9yZS1yZXR1cm5cblxuaW1wb3J0IHsgTG9jYWxlRGF0YSB9IGZyb20gJy4uL2xvY2FsZS9sb2NhbGUuY2xhc3MnO1xuXG4vLyEgbW9tZW50LmpzIGxvY2FsZSBjb25maWd1cmF0aW9uXG4vLyEgbG9jYWxlIDogQ3JvYXRpYW4gW2hyXVxuLy8hIGF1dGhvciA6IERhbmlqZWwgR3JtZWMgOiBodHRwczovL2dpdGh1Yi5jb20vY29iYWx0c2lzXG5cbmV4cG9ydCBjb25zdCBockxvY2FsZTogTG9jYWxlRGF0YSA9IHtcbiAgYWJicjogJ2hyJyxcbiAgbW9udGhzOiAnU2lqZcSNYW5qX1ZlbGphxI1hX0/FvnVqYWtfVHJhdmFual9TdmliYW5qX0xpcGFual9TcnBhbmpfS29sb3Zvel9SdWphbl9MaXN0b3BhZF9TdHVkZW5pX1Byb3NpbmFjJy5zcGxpdCgnXycpLFxuICBtb250aHNTaG9ydDogJ1Npal9WZWxqX0/FvnVfVHJhX1N2aV9MaXBfU3JwX0tvbF9SdWpfTGlzX1N0dV9Qcm8nLnNwbGl0KCdfJyksXG4gIHdlZWtkYXlzOiAnTmVkamVsamFfUG9uZWRqZWxqYWtfVXRvcmFrX1NyaWplZGFfxIxldHZydGFrX1BldGFrX1N1Ym90YScuc3BsaXQoJ18nKSxcbiAgd2Vla2RheXNTaG9ydDogJ05lZF9Qb25fVXRvX1NyaV/EjGV0X1BldF9TdWInLnNwbGl0KCdfJyksXG4gIHdlZWtkYXlzTWluOiAnTmVfUG9fVXRfU3JfxIxlX1BlX1N1Jy5zcGxpdCgnXycpLFxuICBsb25nRGF0ZUZvcm1hdDoge1xuICAgIExUOiAnSEg6bW0nLFxuICAgIExUUzogJ0hIOm1tOnNzJyxcbiAgICBMOiAnREQvTU0vWVlZWScsXG4gICAgTEw6ICdEIE1NTU0gWVlZWScsXG4gICAgTExMOiAnRCBNTU1NIFlZWVkgSEg6bW0nLFxuICAgIExMTEw6ICdkZGRkLCBEIE1NTU0gWVlZWSBISDptbSdcbiAgfSxcbiAgY2FsZW5kYXI6IHtcbiAgICBzYW1lRGF5OiAnW0RhbmFzIHVdIExUJyxcbiAgICBuZXh0RGF5OiAnW1N1dHJhIHVdIExUJyxcbiAgICBuZXh0V2VlazogJ2RkZGQgW3VdIExUJyxcbiAgICBsYXN0RGF5OiAnW0p1xI1lciB1XSBMVCcsXG4gICAgbGFzdFdlZWs6ICdbWmFkbmppXSBkZGRkIFt1XSBMVCcsXG4gICAgc2FtZUVsc2U6ICdMJ1xuICB9LFxuICByZWxhdGl2ZVRpbWU6IHtcbiAgICBmdXR1cmU6ICd6YSAlcycsXG4gICAgcGFzdDogJyVzIHByaWplJyxcbiAgICBzOiAnbmVrb2xpa28gc2VrdW5kaScsXG4gICAgc3M6ICclZCBzZWt1bmRpJyxcbiAgICBtOiAnbWludXRhJyxcbiAgICBtbTogJyVkIG1pbnV0YScsXG4gICAgaDogJ3NhdCcsXG4gICAgaGg6ICclZCBzYXRpJyxcbiAgICBkOiAnZGFuJyxcbiAgICBkZDogJyVkIGRhbmEnLFxuICAgIE06ICdtamVzZWMnLFxuICAgIE1NOiAnJWQgbWplc2VjaScsXG4gICAgeTogJ2dvZGluYScsXG4gICAgeXk6ICclZCBnb2RpbmEnXG4gIH0sXG4gIGRheU9mTW9udGhPcmRpbmFsUGFyc2U6IC9cXGR7MSwyfShzdHxuZHxyZHx0aCkvLFxuICBvcmRpbmFsKF9udW06IG51bWJlcik6IHN0cmluZyB7XG4gICAgY29uc3QgbnVtID0gTnVtYmVyKF9udW0pO1xuICAgIGNvbnN0IGIgPSBudW0gJSAxMCxcbiAgICAgIG91dHB1dCA9ICh+fihudW0gJSAxMDAgLyAxMCkgPT09IDEpID8gJy4nIDpcbiAgICAgICAgKGIgPT09IDEpID8gJy4nIDpcbiAgICAgICAgICAoYiA9PT0gMikgPyAnLicgOlxuICAgICAgICAgICAgKGIgPT09IDMpID8gJy4nIDogJy4nO1xuICAgIHJldHVybiBudW0gKyBvdXRwdXQ7XG4gIH0sXG4gIHdlZWs6IHtcbiAgICBkb3c6IDEsIC8vIE1vbmRheSBpcyB0aGUgZmlyc3QgZGF5IG9mIHRoZSB3ZWVrLlxuICAgIGRveTogNCAgLy8gVGhlIHdlZWsgdGhhdCBjb250YWlucyBKYW4gNHRoIGlzIHRoZSBmaXJzdCB3ZWVrIG9mIHRoZSB5ZWFyLlxuICB9XG59O1xuIl19