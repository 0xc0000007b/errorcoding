import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Option} from '../../../assets/shared/option.model';
import {StyleManagerService} from './style-manager.service';

@Injectable({
  providedIn: 'root',
})
export class ThemeChangerService {
  constructor(
    private http: HttpClient,
    private styleManager: StyleManagerService
  ) {}

  getThemeOptions(): Observable<Option[]> {
    return this.http.get<Option[]>(
      'assets/shared/options.json'
    );
  }

  setTheme(themeToSet: string): void {
    this.styleManager.setStyle(
      'theme',
      `../../assets/shared/themes/${themeToSet}.css`
    );
  }
}
