import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  OnInit,
  Output,
} from '@angular/core';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import {Router} from '@angular/router';
import {DateService} from '../../../services/date.service';
import {Dialog, DialogRef} from '@angular/cdk/dialog';

@Component({
  selector: 'win-task-bar',
  templateUrl: './task-bar.component.html',
  styleUrls: ['./task-bar.component.scss'],
  animations: [
    trigger('openStart', [
      state(
        'opened',
        style({visibility: 'visible', height: '400px'})
      ),
      state(
        'closed',
        style({
          visibility: 'hidden',
          height: '0',
        })
      ),
      transition('opened<=>closed', animate(100)),
    ]),
    trigger('openPower', [
      state(
        'opened',
        style({
          visibility: 'visible',
          width: '120px',
          height: '100px',
        })
      ),
      state(
        'closed',
        style({
          visibility: 'hidden',
          width: 0,
          height: 0,
        })
      ),
      transition('opened<=>closed', animate(100)),
    ]),
    trigger('openSearch', [
      state(
        'opened',
        style({
          visibility: 'visible',
          width: '100px',
          height: '150px',
        })
      ),
      state(
        'closed',
        style({
          visibility: 'hidden',
          height: 0,
        })
      ),
      transition('opened<=>closed', animate(100)),
    ]),
    trigger('openCalendar', [
      state(
        'opened',
        style({
          visibility: 'visible',
          width: '400px',
          height: '600px',
        })
      ),
      state(
        'closed',
        style({
          visibility: 'hidden',
          height: 0,
        })
      ),
      transition('opened<=>closed', animate(100)),
    ]),
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaskBarComponent
  implements OnInit, AfterViewInit
{
  isOpened: string = 'closed';
  isSearchOpened: string = 'closed';
  isOpenedPower: string = 'closed';
  languageSwitch: boolean = true;
  openCalendar: string = 'closed';
  networkIsOn: boolean = true;

  hour: any;
  date: Date = new Date();
  minutes: any;
  seconds: any;
  amPm: string;

  // Outputs
  @Output()
  isWindowOpen = new EventEmitter<boolean>();
  private isWindowOpened: boolean;
  @Output()
  isWindowClose = new EventEmitter<boolean>();
  private isWindowClosed: boolean;

  setStartOpened(): void {
    this.isOpened =
      this.isOpened == 'closed' ? 'opened' : 'closed';
  }

  setPowerOpened(): void {
    this.isOpenedPower =
      this.isOpenedPower == 'closed' ? 'opened' : 'closed';
  }
  setCalendarOpened(): void {
    this.openCalendar =
      this.openCalendar == 'closed' ? 'opened' : 'closed';
  }
  setSearchOpened(): void {
    this.isSearchOpened =
      this.isSearchOpened == 'closed' ? 'opened' : 'closed';
  }

  shutdown() {
    this.dialog.closeAll();
    this.router.navigateByUrl('/exit');
  }
  reload() {
    window.location.reload();
  }

  ngOnInit() {
    this.getTime();
  }

  getTime() {
    setInterval(() => {
      const date: Date = new Date();
      this.updateDate(date);
    }, 1000);
  }

  constructor(
    private router: Router,
    public dateService: DateService,
    private dialogRef: DialogRef,
    private dialog: Dialog
  ) {}

  ngAfterViewInit(): void {}

  private updateDate(date: Date) {
    const hours = date.getHours();
    this.amPm = hours > 12 ? 'PM' : 'AM';
    this.hour = hours % 12;
    this.hour = this.hour ? this.hour : 12;
    this.hour =
      this.hour < 10 ? '0' + this.hour : this.hour;
    const minutes = date.getMinutes();
    this.minutes = minutes % 60;
    this.minutes = this.minutes ? this.minutes : 60;
    this.minutes =
      this.minutes < 10 ? '0' + this.minutes : this.minutes;
    if (minutes >= 60) this.hour++;
    const seconds = date.getSeconds();
    this.seconds = seconds % 60;
    this.seconds = this.seconds ? this.seconds : 60;
    this.seconds =
      this.seconds < 10 ? '0' + this.seconds : this.seconds;
  }

  handleClick() {
    this.openCalendar = 'closed';
    this.isOpened = 'closed';
    this.isOpenedPower = 'closed';
  }
  handleWindow(event: boolean) {
    this.isWindowOpened = event;
    this.isWindowOpen.emit(this.isWindowOpened);
  }
  handleClosing(event: boolean) {
    this.isWindowClose.emit(this.isWindowClosed);
    this.isWindowClosed = event;
  }
}
