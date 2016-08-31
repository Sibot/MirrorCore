import {inject} from 'aurelia-framework';
import {I18N} from 'aurelia-i18n';

import {ForecastService} from './services/ForecastService';
import {SettingsService} from './services/SettingsService';
import {TimeService} from './services/TimeService';

@inject(I18N, ForecastService, TimeService, SettingsService)
export class ForecastPane {
    constructor(i18n, forecastService, timeService, settingsService) {
        this.i18n = i18n;
        this.forecastService = forecastService;
        this.timeService = timeService;
        this.settings = settingsService.settings.forecastSettings
        this.heading = this.settings.heading;
        this.populateForecast();
        this.serviceActive = false;
        setInterval(() => this.populateForecast(), this.settings.refreshTime * 60000);
    }

    showSettings = false;
    //TODO: remove old forecasts once they're dead
    populateForecast() {
        this.forecastService.getForecast()
            .then(data => {
                this.forecastData = data
                this.serviceActive = true;
            }).catch((err) => {
                this.serviceActive = false;
            });
        this.timeService.getTime()
            .then(time => this.lastUpdated = time.format("HH:mm:ss"));
    }

    toggleSettings() {
        this.showSettings = !this.showSettings;
    }
}