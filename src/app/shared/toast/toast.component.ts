import { Component, ViewEncapsulation } from '@angular/core';
import { MdSnackBar, MdSnackBarConfig } from '@angular/material';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ToastComponent {
  actionButtonLabel = 'Dismiss';
  config = new MdSnackBarConfig();

  constructor(public snackBar: MdSnackBar) {
    this.config.duration = 10000;
   }

  toastMessage(message: string, status: string) {
    this.config.extraClasses = this.getProperClass(status);
    this.snackBar.open(message, this.actionButtonLabel, this.config);
  }

  getProperClass(status: string) {
    const obj = {
      success: ['success'],
      warning: ['warning'],
      neutral: ['primary']
    }[status];
    if (obj === undefined) {
      return null;
    }
    return obj;
  }

}
