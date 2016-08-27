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
                            return result;
                        })
                        .catch((err) => {
                            this.notificationsService.add( { message: err, severity:'warn', context: err } );
                            console.log(err);
                        });
    }
}