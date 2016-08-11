import {HttpClient} from 'aurelia-fetch-client';

export class RequestService {
    constructor() {
        this.http = new HttpClient();
    }
    
    getJson(url) {
        return this.http.fetch(url)
                   .then(response => response.json());

    }
}