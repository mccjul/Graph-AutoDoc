import { Injectable } from '@angular/core';
import data from '../sample/home';

@Injectable()
export class HomeService {

    constructor() { }

    getAll() {
        return data;
    }
}
