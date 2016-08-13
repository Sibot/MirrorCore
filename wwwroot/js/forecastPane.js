import {ForecastService} from './services/ForecastService';
import {SettingsService} from './services/SettingsService';
import {TimeService} from './services/TimeService';
import {inject} from 'aurelia-framework';

@inject(ForecastService, TimeService, SettingsService)
export class ForecastPane {
    constructor(forecastService, timeService, settingsService) {
        this.forecastService = forecastService;
        this.timeService = timeService;
        this.settings = settingsService.settings.forecastSettings
        this.heading = this.settings.heading;
        this.moment = this.timeService.moment;
        this.forecastService.getForecast()
                           .then(data => {
                               this.forecastData = data;
                           });
    }

    showSettings = false;
    toggleSettings(){
        this.showSettings = !this.ShowSettings;
    }
}