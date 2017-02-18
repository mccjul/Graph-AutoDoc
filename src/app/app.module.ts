import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { HomeService } from './services/data/home.service';
import 'hammerjs';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ToastComponent } from './shared/toast/toast.component';

const routing = RouterModule.forRoot([
    { path: '', component: HomeComponent},
    { path: '**', redirectTo: '' }
]);

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ToastComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    routing,
    ReactiveFormsModule
  ],
  providers: [HomeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
