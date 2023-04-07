import {Injectable} from '@angular/core';
import * as m from 'moment';
import {BehaviorSubject, Observable} from 'rxjs';
import moment from 'moment';
import {validateAndFlattenComponentImports} from '@angular/compiler-cli/src/ngtsc/annotations/component/src/util';
@Injectable({
  providedIn: 'root',
})
export class DateService {
  public date: BehaviorSubject<moment.Moment> =
    new BehaviorSubject<moment.Moment>(moment());

  changeDate(dir: number): void {
    const date = this.date.value.add(dir, 'month');
    this.date.next(date);
  }
  changeDay(date: moment.Moment) {
    const v = this.date.value.set({
      date: date.date(),
      month: date.month(),
    });
    this.date.next(v);
  }
  constructor() {}
}
