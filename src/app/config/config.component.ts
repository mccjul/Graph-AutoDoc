import { Component, OnInit } from '@angular/core';
import { MdDialog, MdDialogRef } from '@angular/material';
import { ConfigService } from './../services/data/config.service';
import { Router } from "@angular/router";

interface AppType {
  id: String;
  name: String;
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
  constructor(
    public dialog: MdDialog, 
    public service: ConfigService, 
    private router: Router
  ) { }

  ngOnInit() {
    this.getSchemas();
  }

  getSchemas() {
    this.service.getApps().subscribe(
      (data)=>{
        this.schemas = data;
    }, (err)=>{});
  }

  openDialog(schema) {
    const dialogRef = this.dialog.open(DialogComponent);
    const instance = dialogRef.componentInstance;
    instance.config = schema;
    dialogRef.afterClosed().subscribe(result => {
      this.getSchemas();
    });
  }

  newSchema() {
     this.service.createApp().subscribe(
       (data) => {}, 
       (err) => {},
       () => {
          this.getSchemas();
       });
     
  }

  view(id) {
    this.router.navigate(['/doc', id]);
  }
}

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.html',
})
export class DialogComponent {
  config: AppType;
  confirm = 'Delete';
  constructor(
    public dialogRef: MdDialogRef<DialogComponent>, 
    public service: ConfigService
) {}

  click(state) {
    if (state === 'Delete') {
      this.confirm = 'Are you sure?';
    } else if (state === 'Are you sure?') {
      this.service.DeleteApp(this.config.id).subscribe(
       (data) => {}, 
       (err) => {},
       () => {
          this.dialogRef.close();
       });
      
    }
  }

  onKey(event: any) { // without type info
    this.config.name = event.target.value;
  }

  save(config){
    console.log(config, "config");
    this.service.patchApp(this.config, this.config.id).subscribe(
       (data) => {}, 
       (err) => {
         console.log(err);
       },
       () => {
          this.dialogRef.close();
       });
  }
}
