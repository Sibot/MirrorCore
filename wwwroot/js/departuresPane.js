import {DeparturesService} from 'js/services/departuresService';
import moment from '../../lib/moment/moment';
import {inject} from 'aurelia-framework';

@inject(DeparturesService)
export class DeparturesPane {
    constructor(departuresService) {
        this.departuresService = departuresService;
        this.departuresService.data.then(data => {
            this.data = data;
            this.departures = data.ResponseData;
            this.moment = moment;
            this.relativeNow = moment(this.departures.LatestUpdate).add(this.departures.DataAge, 's');
            setInterval(() => this.incrementSecond(), 1000);
        });
    }

    incrementSecond() {
        this.relativeNow.add(1, 's');
    }

    recalculateData() {
        //TODO: update actual or display-Time
    }
}