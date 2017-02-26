import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

import 'hammerjs';

import { HomeService } from './services/data/home.service';
import { ConfigService } from './services/data/config.service';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ConfigComponent, DialogComponent } from './config/config.component';
import { ToastComponent } from './shared/toast/toast.component';

const routing = RouterModule.forRoot([
    { path: '', component: HomeComponent},
    { path: 'config', component: ConfigComponent },
    { path: '**', redirectTo: '' }
]);

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ToastComponent,
    ConfigComponent,
    DialogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    routing,
    ReactiveFormsModule,
    FlexLayoutModule
  ],
  providers: [HomeService, ConfigService],
  bootstrap: [AppComponent],
  entryComponents: [DialogComponent]
})
export class AppModule { }
