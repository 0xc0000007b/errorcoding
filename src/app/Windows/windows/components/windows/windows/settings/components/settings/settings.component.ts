import {Component, OnInit, Output} from '@angular/core';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import {ThemeSwicthService} from '../../../../../../../services';
import {Option} from '../../../../../../../../../assets/shared/themes/windows/option.model';
import {Observable} from 'rxjs';

@Component({
  selector: 'win-settings',
  styleUrls: ['./settings.component.scss'],
  templateUrl: './settings.component.html',
  animations: [
    trigger('openClose', [
      state(
        'open',
        style({width: 50, visibility: 'visible'})
      ),
      state(
        'close',
        style({width: 0, visibility: 'hidden'})
      ),
      transition('open<=>close', animate(300)),
    ]),
  ],
})
export class SettingsComponent implements OnInit {
  options$: Observable<Option[]> =
    this.themeService.getThemeOptions();
  ngOnInit(): void {
    this.themeService.setTheme('default');
  }
  isOPen: string = 'close';
  changeTheme(value) {
    this.themeService.setTheme(value);
  }
  setState() {
    this.isOPen = this.isOPen == 'close' ? 'open' : 'close';
  }
  settings: string[] = [
    'home',
    'security',
    'surround_sound',
    'sync',
    'update',
  ];
  @Output()
  image: string;

  constructor(private themeService: ThemeSwicthService) {}
}
