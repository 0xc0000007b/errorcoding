import {Component, OnInit} from '@angular/core';
import {Week} from '../interfaces/week.interface';
import {DateService} from '../../../../services/date.service';
import * as m from 'moment';
import moment from 'moment';
@Component({
  selector: 'win-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
})
export class CalendarComponent implements OnInit {
  calendar: Week[];

  constructor(private dateService: DateService) {}
  ngOnInit(): void {
    this.dateService.date.subscribe(
      this.generate.bind(this)
    );
  }

  generate(now: moment.Moment) {
    const startDay = now
      .clone()
      .startOf('month')
      .startOf('week');
    const endDay = now.clone().endOf('month').endOf('week');

    const date = startDay.clone().subtract(1, 'day');

    const calendar = [];

    while (date.isBefore(endDay, 'day')) {
      calendar.push({
        days: Array(7)
          .fill(0)
          .map(() => {
            const value = date.add(1, 'day').clone();
            const active = moment().isSame(value, 'date');
            const disabled = !now.isSame(value, 'month');
            const selected = now.isSame(value, 'date');

            return {
              value,
              active,
              disabled,
              selected,
            };
          }),
      });
    }

    this.calendar = calendar;
  }
  select(day: m.Moment) {
    this.dateService.changeDay(day);
  }
}