import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
} from '@angular/core';
import {ThemeSwicthService} from '../../../services/theme-swicth.service';
import {FormBuilder} from '@angular/forms';
import {validateAndFlattenComponentImports} from '@angular/compiler-cli/src/ngtsc/annotations/component/src/util';

export interface IWindow {
  icon: string;
  name: string;
}
@Component({
  selector: 'app-desktop',
  templateUrl: './dectop.component.html',
  styleUrls: ['./dectop.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DectopComponent implements OnInit {
  imageLink: string;

  posX: number;
  posY: number;

  folderName: string;
  isFolder: boolean = false;

  isShowing: boolean = false;
  isHidden: boolean = true;
  windows: IWindow[] = [{icon: 'folder', name: 'folder'}];
  isPlayerClosed: boolean;
  isPlayerOpened: boolean;
  constructor(
    private fb: FormBuilder,
    private theme: ThemeSwicthService
  ) {}

  ngOnInit(): void {
    this.theme.setTheme('default');
  }

  rightClick(event: MouseEvent) {
    event.stopPropagation();
    this.isHidden = false;
    this.posX = event.clientX;
    this.posY = event.clientY;
    return false;
  }
  handleClick() {
    this.isHidden = true;
  }
  isOpenedWindow: boolean;
  isClosed: boolean;

  setFolderName(event: string) {
    this.folderName = event;
    console.log(event);
  }

  handleWindow(value: boolean) {
    this.isOpenedWindow = !value;
    this.isFolder = true;
  }

  handleClosed(event: boolean) {
    this.isClosed = !event;
    this.isFolder = false;
  }
  handlePlayer(value: boolean) {
    this.isPlayerOpened = value;
    this.isFolder = false;
  }

  handlePlayerClosing(event: boolean) {
    this.isPlayerClosed = event;
  }
}
