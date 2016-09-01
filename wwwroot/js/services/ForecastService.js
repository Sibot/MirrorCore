import {NotificationsService} from './NotificationsService';
import {RequestService} from './RequestService';
import {SettingsService} from './SettingsService';
import {TimeService} from './TimeService';

import {inject} from 'aurelia-framework';

@inject(NotificationsService, RequestService, TimeService, SettingsService)
export class ForecastService {
    constructor(notificationsService, requestService, timeService, settingsService) {
        this.notificationsService = notificationsService;
        this.requestService = requestService;
        this.timeService = timeService;
        this.settings = settingsService.settings.forecastSettings;
    }

    getForecast() {
        var lat = 59.3706; //4769999999;
        var long = 17.8909; //19199999985;
        var forecastUrl = `http://opendata-download-metfcst.smhi.se/api/category/pmp2g/version/2/geotype/point/lon/${long}/lat/${lat}/data.json`;
        return this.requestService
            .getJson(forecastUrl)
            .then(data => {
                var self = this;

                function makeMoment(time) {
                    return self.timeService.moment(time);
                }

                function getTime() {
                    self.timeService.getTime().then((time) => {
                        let newTime = time.clone().subtract(6, 'h');
                        return newTime;
                    });
                }

                function getSettings() {
                    return self.settings;
                }

                data.timeSeries = data.timeSeries.map(function (v) {
                    v.moment = makeMoment(v.validTime);
                    return v;
                }).filter(function (v) {
                    var isTooOld = v.moment.isAfter(getTime());
                    return isTooOld; // TODO: Should show the last forecast before now
                }).filter(function (v) {
                    var filterBySettings = v.moment.hour() % getSettings().filterSeries === 0;
                    return filterBySettings;
                });

                this.notificationsService.add({ message: 'Forecast updated!', severity: 'info' });

                this.forecastData = data;
                return this.forecastData;
            }).catch((err) => {
                this.notificationsService.add({ message: 'Forecast update failed!', severity: 'warm', context: err });
                throw Error(err);
            });
    }
}