import {
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import {Option} from '../../../../../assets/shared/option.model';

@Component({
  selector: 'app-theme-swither',
  templateUrl: './theme-swither.component.html',
  styleUrls: ['./theme-swither.component.scss'],
})
export class ThemeSwitcherComponent {
  //@ts-ignore
  @Input() options: Array<Option>;
  @Output() changeThemeEvent: EventEmitter<string> =
    new EventEmitter<string>();
  changeTheme(themeToSet: string): void {
    this.changeThemeEvent.emit(themeToSet);
  }
}
