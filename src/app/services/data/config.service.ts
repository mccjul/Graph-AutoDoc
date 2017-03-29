import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

@Injectable()
export class ConfigService {
    headers; options;
    url = 'http://localhost:1323/app';

    constructor(private http: Http) {
        this.headers = new Headers({ 'Content-Type': 'application/json'});
        this.options = new RequestOptions({ headers: this.headers });
    }

    createApp() {
        let m = localStorage.getItem('maintainer');
        const bodyString = JSON.stringify({"maintainer": m});
        console.log(bodyString);
        return this.http.post(this.url, bodyString, this.options);
    }

    getApps(): Observable<AppType[]> {
        let id = localStorage.getItem('maintainer');
        return this.http.get(this.url + '/' + id, this.options)
            .map((res) => res.json())
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }

    patchApp(body, id) {
        const bodyString = JSON.stringify(body);
        return this.http.patch(this.url + '/' + id, bodyString, this.options);
    }

    DeleteApp(id) {
        return this.http.delete(this.url + '/' + id, this.options);
    }
}

interface AppType {
  id: String;
  name: String;
  token: String;
  maintainer: String;
}