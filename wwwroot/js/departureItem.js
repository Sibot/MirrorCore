import {inject, bindable, bindingMode} from 'aurelia-framework';

import {TimeService} from './services/TimeService';

@inject(TimeService)
export class DepartureItem {
    @bindable relativeTime = {};
    constructor(timeService){
        this.timeService = timeService;
    }
    
    bind(bindingContext, overrideContext) {
        var departure = bindingContext.departure; 
        this.lineNumber = departure.LineNumber;
        this.destination = departure.Destination;
        this.departureTime = this.timeService.moment(departure.TimeTabledDateTime);
        this.timeUntilDeparture = this.relativeTime.to(this.departureTime, true)
    }
 }