import {Component, Input, OnInit} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  NgForm,
  Validators,
} from '@angular/forms';
import {FormValidators} from '../validators/validators-for-mw';
import {phone} from 'phone';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-window',
  templateUrl: './window.component.html',
  styleUrls: ['./window.component.scss'],
  animations: [
    trigger('clac', [
      state(
        'opened',
        style({visibility: 'visible', height: '40px'})
      ),
      state(
        'closed',
        style({visibility: 'hidden', height: 0})
      ),
      transition('opened <=> closed', animate(100)),
    ]),
  ],
})
export class WindowComponent implements OnInit {
  form: FormGroup;
  isOpened: string = 'closed';
  message: string;

  ngOnInit(): void {
    this.initializeForm();
    this.message = this.form.controls['bodyMessage'].value;
  }
  // @ts-ignore

  setState(): void {
    this.isOpened =
      this.isOpened === 'closed' ? 'opened' : 'closed';
  }

  private initializeForm(): void {
    this.form = this.fb.group({
      name: [
        '',
        [
          FormValidators.nameValidator,
          Validators.required,
          ,
        ],
      ],
      phoneNumber: [
        '',
        [
          Validators.required,
          Validators.pattern('[0-9 ]{15}'),
        ],
      ],
      messageBody: [
        '',
        [
          Validators.required,
          FormValidators.badWordsValidator,
          Validators.minLength(20),
        ],
      ],
    });
  }

  constructor(private fb: FormBuilder) {}
}
