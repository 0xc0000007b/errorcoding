import {Component, OnInit} from '@angular/core';
import {Dialog} from '@angular/cdk/dialog';
import {DectopComponent} from '../dectop/dectop.component';

@Component({
  selector: 'app-base-desctop',
  templateUrl: './base-desctop.component.html',
  styleUrls: ['./base-desctop.component.scss'],
})
export class BaseDesctopComponent implements OnInit {
  ngOnInit(): void {
    this.dialog.open(DectopComponent, {
      width: '100%',
      height: '100%',
    });
  }

  constructor(private dialog: Dialog) {}
}
