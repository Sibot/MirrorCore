import {RequestService} from './RequestService';
import {TimeService} from './TimeService';
import {inject} from 'aurelia-framework';

@inject(RequestService, TimeService)
export class ForecastService {
    constructor(requestService, timeService) {
        this.requestService = requestService;
        this.timeService = timeService;
    }
    
    getForecast(){
        var lat = 59.3706; //4769999999;
        var long = 17.8909; //19199999985;
        var forecastUrl = `http://opendata-download-metfcst.smhi.se/api/category/pmp2g/version/2/geotype/point/lon/${long}/lat/${lat}/data.json`;
        return this.requestService
            .getJson(forecastUrl)
            .then(data => {
                var self = this;

                function makeMoment(time){
                    return self.timeService.moment(time);
                }
                
                function getTime(){
                    return self.timeService.time;
                }

                data.timeSeries = data.timeSeries.map(function(v){
                    v.moment = makeMoment(v.validTime);
                    return v;
                }).filter(function(v){
                    return v.moment.isAfter(getTime());
                }).filter(function(v){
                    return v.moment.hour() % 4 === 0;
                });

                this.forecastData = data;
                return this.forecastData;
            });
    }
}