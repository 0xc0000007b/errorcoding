import {Component, Input} from '@angular/core';

@Component({
  selector: 'win-settings-tab-list',
  template: `<div class="menu">
    <ul>
      <li *ngFor="let setting of settings">
        <mat-icon>{{ setting }}</mat-icon>
      </li>
    </ul>
  </div>`,
  styles: [
    `
      li {
        padding: 10px;
        margin-top: 10px;
        &:hover {
          background: white;
        }
      }
    `,
  ],
})
export class SettingsTabListComponent {
  @Input()
  settings: string[];
}
