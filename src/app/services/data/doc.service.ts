import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import data from '../sample/doc';

@Injectable()
export class DocService {
    headers; options;
    url = 'http://localhost:1323/doc';
    constructor(private http: Http) {
        this.headers = new Headers({ 'Content-Type': 'application/json' });
        this.options = new RequestOptions({ headers: this.headers });
     }

    getDoc(obj): Observable<Type[]> {
        return this.http.get(this.url + '/' + obj.value.id, this.options)
            .map((res) => res.json())
            .catch((error: any) => error.json().error);
    }
}

interface Type {
  comment: String;
  typecode: String;
}