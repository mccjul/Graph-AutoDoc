import { Injectable }      from '@angular/core';
import { tokenNotExpired } from 'angular2-jwt';

// Avoid name not found warnings
declare var Auth0Lock: any;

@Injectable()
export class Auth {
  lock = new Auth0Lock('wAFeaax5Dp0ufCxdmNqFH8U2AQBie79k', 'graphdoc.auth0.com', {});

  constructor() {
    this.lock.on("authenticated", (authResult) => {
      localStorage.setItem('id_token', authResult.idToken);
      localStorage.setItem('maintainer', authResult.idTokenPayload.sub.split("|")[1]);
      console.log(authResult.idTokenPayload.sub.split("|")[1]);
    });
  }

  public login() {
    this.lock.show();
  }

  public authenticated() {
    return tokenNotExpired();
  }

  public logout() {
    localStorage.removeItem('id_token');
  }
}