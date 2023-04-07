import {
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import {Option} from '../../../../../../../assets/shared/option.model';

@Component({
  selector: 'win-theme-switcher',
  templateUrl: './theme-switch.component.html',
})
export class ThemeSwitchComponent {
  @Input() options: Array<Option>;
  @Output() changeThemeEvent: EventEmitter<string> =
    new EventEmitter<string>();
  changeTheme(themeToSet: string): void {
    this.changeThemeEvent.emit(themeToSet);
  }
}
