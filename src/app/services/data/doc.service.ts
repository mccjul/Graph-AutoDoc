import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class DocService {
    headers; options;
    url = 'http://localhost:1323/doc';
    constructor(private http: Http) {
        this.headers = new Headers({ 'Content-Type': 'application/json' });
        this.options = new RequestOptions({ headers: this.headers });
     }

    getDoc(id): Observable<any> {
        return this.http.get(this.url + '/' + id, this.options)
            .map((res) => res.json())
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }

    getMetaDoc(): Observable<any> {
        return this.http.get(this.url, this.options)
            .map((res) => res.json())
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }
}
