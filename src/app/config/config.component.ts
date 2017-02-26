import { Component, OnInit } from '@angular/core';
import { MdDialog, MdDialogRef } from '@angular/material';
import { ConfigService } from './../services/data/config.service';

interface AppType {
  id: String;
  name: String;
  updated: String;
  public: Boolean;
  client: String;
  token: String;
  maintainer: String;
}

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.css']
})
export class ConfigComponent implements OnInit {
  schemas: AppType[];
  constructor(public dialog: MdDialog, public service: ConfigService) { }

  ngOnInit() {
    this.getSchemas();
  }

  getSchemas() {
    this.schemas = [
    {id: '3', name: 'bob', updated: 'yesterday', public: true,
    client: 'kdhj-283jd-jjos', token: 'kdhj-283jd-jjos', maintainer: 'kdhj-283jd-jjos'},
    {id: '3', name: 'hop', updated: 'today', public: true,
    client: 'kdhj-283jd-jjos', token: 'kdhj-283jd-jjos', maintainer: 'kdhj-283jd-jjos'},
    {id: '3', name: 'bopper', updated: '3 days ago', public: true,
    client: 'kdhj-283jd-jjos', token: 'kdhj-283jd-jjos', maintainer: 'kdhj-283jd-jjos'}];
  }

  openDialog(schema) {
    const dialogRef = this.dialog.open(DialogComponent);
    const instance = dialogRef.componentInstance;
    instance.config = schema;
    dialogRef.afterClosed().subscribe(result => {
      // this.getSchemas();
    });
  }

  newSchema() {
    this.service.createApp();
  }
}

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.html',
})
export class DialogComponent {
  config = {};
  confirm = 'Delete';
  constructor(public dialogRef: MdDialogRef<DialogComponent>) {}

  click(state) {
    if (state === 'Delete') {
      this.confirm = 'Are you sure?';
    } else if (state === 'Are you sure?') {
      this.dialogRef.close('Delete');
    }
  }
}
