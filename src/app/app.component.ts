import { Component } from '@angular/core';
import { Auth } from "app/services/data/auth.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   constructor(private auth: Auth) {}
}
