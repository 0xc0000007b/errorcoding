import {Component} from '@angular/core';
import {DateService} from '../../../../services/date.service';

@Component({
  selector: 'win-calendar-heading',
  templateUrl: './calendar-heading.component.html',
  styleUrls: ['./calendar-heading.component.scss'],
})
export class CalendarHeadingComponent {
  constructor(public dateService: DateService) {}

  go(dir: number) {
    this.dateService.changeDate(dir);
  }
}
