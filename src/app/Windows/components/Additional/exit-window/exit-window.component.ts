import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {Dialog} from '@angular/cdk/dialog';

@Component({
  selector: '',
  template: `<mat-dialog-content
    class="mat-dialog-container"
  >
    <div class="page">
      <img
        src="../../../../assets/image/power-on.png"
        alt=""
      />
      <a class="exit" (click)="goHome()">Exit</a
      ><a class="to-win" (click)="goWindow()">No</a>
    </div>
  </mat-dialog-content>`,
  styles: [
    `
      ::ng-deep .cdk-dialog-container {
        background: #000;
        text-align: center;
      }
      .mat-dialog-container {
        background: #000;
        height: 100vh;
      }
      .page {
        height: 100%;
        position: absolute;
        background: #000;
        padding: 0 40%;

        a {
          top: 60%;
          width: 200px;
          left: 33%;
          padding: 5px 10px;
          color: white;
          background: #bdc3c7;
          position: absolute;
          transition: 0.3s all;
          text-align: center;
          &:hover {
            background: rgba(255, 255, 255, 0.5);
            color: #bdc3c7;
          }
        }
        .to-win {
          margin-left: 300px;
        }
        img {
          width: 300px;
        }
      }
    `,
  ],
})
export class ExitWindowComponent {
  constructor(
    private router: Router,
    private dialog: Dialog
  ) {}
  goHome() {
    this.dialog.closeAll();
    this.router.navigateByUrl('/');
  }

  goWindow() {
    this.dialog.closeAll();
    this.router.navigateByUrl('/window');
  }
}
