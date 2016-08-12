import {ForecastService} from './services/ForecastService';
import {TimeService} from './services/TimeService';
import {inject} from 'aurelia-framework';

@inject(ForecastService, TimeService)
export class ForecastPane {
    header = "Weather";
    showSettings = false;
    settings = {filterSeries: 2};

    constructor(forecastService, timeService) {
        this.forecastService = forecastService;
        this.timeService = timeService;

        this.moment = this.timeService.moment;
        this.forecastService.getForecast()
                           .then(data => {
                               this.forecastData = data;
                           });
    }

    toggleSettings(){
        console.log(this.ShowSettings);
        this.showSettings = !this.ShowSettings;
    }
}