import {DeparturesService} from './services/DeparturesService';
import {TimeService} from './services/TimeService';
import {inject} from 'aurelia-framework';

@inject(DeparturesService, TimeService)
export class DeparturesPane {
    constructor(departuresService, timeService) {
        this.departuresService = departuresService;
        this.timeService = timeService;
        this.departuresService.getDepartures()
                              .then(data => {
                                  this.data = data;
                                  this.departures = data.ResponseData;
                                  this.moment = this.timeService.moment;
                                  this.relativeNow = this.timeService.moment(this.departures.LatestUpdate).add(this.departures.DataAge, 's');
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