import {RequestService} from './requestService';
import {inject} from 'aurelia-framework';

@inject(RequestService)
export class DeparturesService {
    constructor(requestService) {
        let departureUrl = 'departures/getFutureDepartures';
        this.requestService = requestService;
        this.data = this.requestService
            .getJson(departureUrl)
            .then(departures => {
                return departures;
            });
    }
}