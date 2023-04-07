import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'win-context',
  template: `<div
    class="menu"
    [ngStyle]="{
      position: 'absolute',
      'left.px': posX + 40,
      'top.px': posY - 60
    }"
  >
    <ul class="list-group">
      <li
        class="list-group-item list-group-item-action d-flex justify-content-                                                                          between align-items-center"
      >
        <button (click)="isShowed = true">
          <span class="badge badge-primary badge-pill"
            >Rename</span
          >
        </button>
      </li>
    </ul>
    <form [formGroup]="form">
      <input
        class="absolute  right-16 renaming"
        *ngIf="isShowed"
        formControlName="folderName"
        (keydown.enter)="submitName()"
      />
    </form>
  </div>`,
  styles: [
    `
      .renaming {
        color: black;
        outline: none;
        position: absolute;
        top: 105px;
        right: 58px;
        width: 75px;
        z-index: 1;
      }
    `,
  ],
})
export class ContextMenuComponent implements OnInit {
  @Input('x')
  posX: number;
  @Input('y')
  posY: number;
  isShowed: boolean = false;
  @Input()
  isClicked: boolean;

  @Output() newName = new EventEmitter<string>();

  submitName() {
    this.isShowed = false;
    this.newName.emit(
      this.form.controls['folderName'].value
    );
  }
  ngOnInit() {
    this.formInit();
  }

  form: FormGroup;
  private formInit() {
    this.form = this.fb.group({
      folderName: [''],
    });
  }

  constructor(private fb: FormBuilder) {}
}
