import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

interface AppType {
  id: String;
  name: String;
  updated: String;
  public: Boolean;
  token: String;
  maintainer: String;
}

@Injectable()
export class ConfigService {
    headers; options;
    url = 'http://localhost:1323/app';

    constructor(private http: Http) {
        this.headers = new Headers({ 'Content-Type': 'application/json' });
        this.options = new RequestOptions({ headers: this.headers });
    }

    createApp(): Observable<AppType> {
        const bodyString = JSON.stringify({});
        return this.http.post(this.url, bodyString, this.options)
            .map((res) => res.json())
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }

    getApps(): Observable<AppType[]> {
        // id
        return this.http.get(this.url, this.options)
            .map((res) => res.json())
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }

    patchApp(body: Object, id): Observable<AppType> {
        const bodyString = JSON.stringify(body);
        return this.http.patch(this.url + '/' + id, bodyString, this.options)
            .map((res) => res.json())
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }

    GetAccessCode(): Observable<String> {
        return this.http.get(this.url + '/access', this.options)
            .map((res) => res.json())
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }

    DeleteApp(id): Observable<any> {
        return this.http.delete(this.url + '/' + id, this.options)
            .map((res) => res.json())
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }
}
