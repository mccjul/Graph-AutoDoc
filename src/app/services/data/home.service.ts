import { Injectable } from '@angular/core';
import data from '../sample/home';
import { Http, RequestOptions } from "@angular/http";

@Injectable()
export class HomeService {
    headers; options;
    url = 'http://localhost:1323/doc';
    constructor(private http: Http) {
     }

    getAll() {
        return data;
    }
}
