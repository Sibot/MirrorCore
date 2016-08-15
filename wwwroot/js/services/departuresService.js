import {RequestService} from './RequestService';
import {inject} from 'aurelia-framework';

@inject(RequestService)
export class DeparturesService {
    constructor(requestService) {
        this.requestService = requestService;
    }

    getDepartures(){
        let departureUrl = 'departures/getFutureDepartures';
        return this.requestService
            .getJson(departureUrl)
            .then(departures => {
                this.departuresData = departures;
                return departures;
            });
    }

    errorMessage = {"StatusCode":5322,"Message":"Could not retrive information for buses, trains, trams or metro.","ExecutionTime":10026,"ResponseData":{"LatestUpdate":"0001-01-01T00:00:00","DataAge":0,"Metros":[],"Buses":[],"Trains":[],"Trams":[],"Ships":[],"StopPointDeviations":[]}};
}