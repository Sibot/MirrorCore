import moment from '../../lib/moment/moment';
import {TimeService} from './services/TimeService';
import {inject} from 'aurelia-framework';

@inject(TimeService)
export class ForecastItem {
    constructor(timeService){
        this.timeService = timeService;
        this.moment = timeService.moment;
        console.log(this.timeService.moment)
    }
    bind(bindingContext) {
        let localMoment = this.moment(bindingContext.forecast.validTime);
        let forecastTime = localMoment.format('dddd HH:mm');
        let hour = localMoment.hour();
        let isNight = hour < 6 || hour > 22;
        let isPast = 
        //todo: use moments calendar for "today", "tomorrow" calcs
        this.temperature = bindingContext.forecast.parameters[1].values[0];
        this.forecastTime = forecastTime;
        this.icon = bindingContext.forecast.parameters[18].values[0];
        this.isNight = isNight;
    }
 }