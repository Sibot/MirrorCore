import {RequestService} from './requestService';
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
}