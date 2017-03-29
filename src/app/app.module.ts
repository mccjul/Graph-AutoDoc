import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, CanActivate } from '@angular/router';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

import 'hammerjs';

import { HomeService } from './services/data/home.service';
import { ConfigService } from './services/data/config.service';
import { DocService } from './services/data/doc.service';
import { Auth } from './services/data/auth.service';
import { AuthGuard } from './services/data/authGuard.service';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ConfigComponent, DialogComponent } from './config/config.component';
import { DocComponent } from './doc/doc.component';

const routing = RouterModule.forRoot([
    { path: '', component: HomeComponent},
    { path: 'config', component: ConfigComponent, canActivate: [AuthGuard] },
    { path: 'doc/:id', component: DocComponent },
    { path: '**', redirectTo: '' }
]);

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ConfigComponent,
    DocComponent,
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
  providers: [HomeService, ConfigService, DocService, Auth, AuthGuard],
  bootstrap: [AppComponent],
  entryComponents: [DialogComponent]
})
export class AppModule { }
