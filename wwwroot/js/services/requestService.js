import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-fetch-client';
import 'fetch';

@inject(HttpClient)
export class RequestService {
    constructor(http) {
        this.http = http;
    }

    getJson(url) {
        return this.http.fetch(url)
                        .then(response => response.json())
                        .catch(err => this.handleError);
    }

    handleError(err){
        console.log(err);
    }
}