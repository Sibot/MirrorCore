import {RequestService} from 'js/services/requestService';

export class WeatherService {
    constructor() {
        var lat = 59.3706; //4769999999;
        var long = 17.8909; //19199999985;
        var weatherUrl = `http://opendata-download-metfcst.smhi.se/api/category/pmp2g/version/2/geotype/point/lon/${long}/lat/${lat}/data.json`;

        this.data = new RequestService()
            .getJson(weatherUrl)
            .then(data => {
                console.log(data);
                return data;
            });
    }
}