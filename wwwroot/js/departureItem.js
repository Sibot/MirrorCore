import {inject, bindable, bindingMode} from 'aurelia-framework';

import {TimeService} from './services/TimeService';

@inject(TimeService)
export class DepartureItem {
    @bindable relativeTime;
    @bindable onStateChange;

    constructor(timeService){
        this.timeService = timeService;
    }

    bind(bindingContext, overrideContext) {
        console.log(bindingContext, overrideContext);
        this.departure = bindingContext.departure;
        this.lineNumber = this.departure.LineNumber;
        this.destination = this.departure.Destination;
        this.departureTime = this.timeService.moment(this.departure.TimeTabledDateTime);
        this.timeUntilDeparture = this.relativeTime.to(this.departureTime, true)
    }

    attached(){
        this.intervalId = setInterval(() => this.recompute(), 1000);
        console.log("Interval", this.intervalId);
    }

    detached() {
        clearInterval(this.intervalId);
        console.log("Destroying Child", this.intervalId);
    }

    recompute() {
        this.timeUntilDeparture = this.relativeTime.to(this.departureTime, true);
        this.timeDiff = this.relativeTime.diff(this.departureTime, true);
        if (this.timeDiff > 0){
            console.log("Departure", this.timeUntilDeparture, this.timeDiff);
            this.notifyStateChange();
        }
    }

    notifyStateChange() {
        console.log("Attempting to request Destruction!");
        if (this.onStateChange) {
            console.log("Child requests Destruction!");
            this.onStateChange();
        }
    }
 }