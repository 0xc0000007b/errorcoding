import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'time',
})
export class ChangeTimePipe implements PipeTransform {
  transform(time: number): string {
    const int = Math.round(time || 0);
    const seconds = int % 60;
    const minutes = (int - seconds) / 60;
    const secondsString = String(seconds);
    const minutesString = String(minutes);
    return `${minutesString.padStart(
      1,
      '0'
    )}:${secondsString.padStart(2, '0')}`;
  }
}
