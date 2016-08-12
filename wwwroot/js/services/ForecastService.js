import {RequestService} from './RequestService';
import {inject} from 'aurelia-framework';

@inject(RequestService)
export class ForecastService {
    constructor(requestService) {
        this.requestService = requestService;
    }
    
    getForecast(){
        var lat = 59.3706; //4769999999;
        var long = 17.8909; //19199999985;
        var forecastUrl = `http://opendata-download-metfcst.smhi.se/api/category/pmp2g/version/2/geotype/point/lon/${long}/lat/${lat}/data.json`;
        return this.requestService
            .getJson(forecastUrl)
            .then(data => {
                this.forecastData = data;
                return this.forecastData;
            });
    }
}