import {
  AbstractControl,
  FormControl,
  ValidationErrors,
  ValidatorFn,
} from '@angular/forms';
import {DEFAULT_EMAIL_VALIDATION_PATTERN} from './regexp';

export class FormValidators {
  static nameValidator(control: AbstractControl): {
    [key: string]: boolean;
  } {
    {
      const restritSymbols: string[] | number[] = [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 0,
      ];
      if (restritSymbols.includes(control.value))
        return {restrictedName: true};
      return null;
    }
  }
  static ValidatePhone(
    control: AbstractControl
  ): {[key: string]: boolean} | null {
    var regularExpression =
      /^(?:(?:\+?1\s*(?:[.-]\s*)?)?(?:\(\s*([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9])\s*\)|([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9]))\s*(?:[.-]\s*)?)?([2-9]1[02-9]|[2-9][02-9]1|[2-9][02-9]{2})\s*(?:[.-]\s*)?([0-9]{4})(?:\s*(?:#|x\.?|ext\.?|extension)\s*(\d+))?$$/;
    if (
      regularExpression.test(control.value) &&
      control.value.length != 11
    ) {
      return {phoneNumberInvalid: true};
    }
    return null;
  }

  static badWordsValidator(control: AbstractControl): {
    [key: string]: boolean;
  } {
    const badWords: string[] = Array(
      'блядь ебать хуй пизда Пизда сука Ебать ебать залупа Залупа Хуй Блядь Сука'
    );
    if (badWords.includes(control.value))
      return {invalidWords: true};
    return null;
  }
}
