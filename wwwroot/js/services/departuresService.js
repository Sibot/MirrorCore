import {RequestService} from 'js/services/requestService';

export class DeparturesService {
    constructor() {
        let departureUrl = 'departures/getFutureDepartures';
        this.data = new RequestService()
            .getJson(departureUrl)
            .then(departures => {
                return departures;
            });
    }
}