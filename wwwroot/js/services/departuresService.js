import {inject} from 'aurelia-framework';

import {RequestService} from './RequestService';
import {NotificationsService} from './NotificationsService';

@inject(RequestService, NotificationsService)
export class DeparturesService {
    constructor(requestService, notificationsService) {
        this.requestService = requestService;
        this.notificationsService = notificationsService;
    }

    getDepartures(){
        let departureUrl = 'departures/getFutureDepartures';
        return this.requestService
            .getJson(departureUrl)
            .then(departures => {
                if (departures.StatusCode !== 0){
                    this.notificationsService.add({message: departures.Message, severity: 'warn', context: departures }); 
                }
                this.departuresData = departures;
                this.notificationsService.add({message: 'Departures updated!', severity: 'info'});
                return departures;
            });
    }

    errorMessage = {"StatusCode":5322,"Message":"Could not retrive information for buses, trains, trams or metro.","ExecutionTime":10026,"ResponseData":{"LatestUpdate":"0001-01-01T00:00:00","DataAge":0,"Metros":[],"Buses":[],"Trains":[],"Trams":[],"Ships":[],"StopPointDeviations":[]}};
}