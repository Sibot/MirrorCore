import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-fetch-client';
import 'fetch';

import {NotificationsService} from './NotificationsService';

@inject(HttpClient, NotificationsService)
export class RequestService {
    constructor(http, notificationsService) {
        this.http = http;
        this.notificationsService = notificationsService;
    }

    getJson(url) {
        return this.http.fetch(url)
                        .then(response => {
                            var result = response.json(); 
                            this.notificationsService.add({message: 'Fetched data from ' + url, severity: 'info'});
                            return result;
                        })
                        .catch(err => this.handleError);
    }

    handleError(err){
        console.log(err);
    }
}