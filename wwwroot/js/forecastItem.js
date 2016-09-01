import {TimeService} from './services/TimeService';
import {inject} from 'aurelia-framework';

@inject(TimeService)
export class ForecastItem {

    constructor(timeService) {
        this.timeService = timeService;
        this.moment = timeService.moment;
    }

    bind(bindingContext) {
        let localMoment = this.moment(bindingContext.forecast.validTime);
        let forecastTime = localMoment.format('dddd HH:mm');
        let hour = localMoment.hour();
        let isNight = hour < 6 || hour > 22;

        this.forecastTime = localMoment.calendar(this.timeService.time);
        this.temperature = bindingContext.forecast.parameters[1].values[0];
        this.icon = bindingContext.forecast.parameters[18].values[0];
        this.isNight = isNight;
    }
}