import moment from '../../lib/moment/moment';

import {WeatherService} from './services/WeatherService';
import {TimeService} from './services/TimeService';
import {inject} from 'aurelia-framework';

@inject(WeatherService, TimeService)
export class WeatherPane {
    constructor(weatherService, timeService) {
        this.weatherService = weatherService;
        this.timeService = timeService;

        this.moment = moment;

        this.weatherService.data.then(data => {
            console.log('data:', data);
            this.data = data;
        });
    }
}