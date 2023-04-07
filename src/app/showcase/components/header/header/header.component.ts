import {Component, OnInit} from '@angular/core';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import {Observable} from 'rxjs';
import {Dialog} from '@angular/cdk/dialog';
import {Option} from '../../../../../assets/shared/option.model';
import {ThemeChangerService} from '../../../services';
import {WindowComponent} from '../../other';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [
    trigger('showMenu', [
      state('open', style({visibility: 'visible'})),
      state('closed', style({display: 'none'})),
      transition('open <=> closed', [animate(300)]),
    ]),
  ],
})
export class HeaderComponent implements OnInit {
  showMenu: string = 'closed';

  options$: Observable<Option[]> =
    this.themeService.getThemeOptions();
  changeState(): void {
    this.showMenu =
      this.showMenu === 'closed' ? 'open' : 'closed';
  }

  ngOnInit() {
    this.themeService.setTheme('default');
  }
  themeChangeHandler(themeToSet: string) {
    this.themeService.setTheme(themeToSet);
  }
  openWindow(): void {
    //@ts-ignore
    this.dialog.open(WindowComponent, {
      width: 300,
      height: 400,
    });
  }

  constructor(
    private themeService: ThemeChangerService,
    private dialog: Dialog
  ) {}
}
