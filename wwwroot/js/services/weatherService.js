import {RequestService} from './RequestService';
import {inject} from 'aurelia-framework';

@inject(RequestService)
export class WeatherService {
    constructor(requestService) {
        var lat = 59.3706; //4769999999;
        var long = 17.8909; //19199999985;
        var weatherUrl = `http://opendata-download-metfcst.smhi.se/api/category/pmp2g/version/2/geotype/point/lon/${long}/lat/${lat}/data.json`;

        this.requestService = requestService;
        this.data = this.requestService
            .getJson(weatherUrl)
            .then(data => {
                return data;
            });
    }
}