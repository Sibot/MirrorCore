import {inject, bindable, bindingMode} from 'aurelia-framework';

import {TimeService} from './services/TimeService';

@inject(TimeService)
export class DepartureItem {
    @bindable relativeTime;
    @bindable onStateChange;

    constructor(timeService) {
        this.timeService = timeService;
    }

    bind(bindingContext, overrideContext) {
        this.departure = bindingContext.departure;
        this.lineNumber = this.departure.LineNumber;
        this.destination = this.departure.Destination;
        this.departureTime = this.timeService.moment(this.departure.TimeTabledDateTime);
        this.timeUntilDeparture = this.relativeTime.to(this.departureTime, true)
    }

    attached() {
        this.intervalId = setInterval(() => this.recompute(), 1000);
    }

    detached() {
        clearInterval(this.intervalId);
    }

    recompute() {
        this.timeUntilDeparture = this.relativeTime.to(this.departureTime, true);
        this.timeDiff = this.relativeTime.diff(this.departureTime, true);
        if (this.timeDiff > 0) {
            this.notifyStateChange();
        }
    }

    notifyStateChange() {
        if (this.onStateChange) {
            this.onStateChange();
        }
    }
}