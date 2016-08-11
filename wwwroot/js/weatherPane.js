import {WeatherService} from 'js/services/weatherService';
import moment from '../../lib/moment/moment';

export class WeatherPane {
    constructor() {
        this.moment = moment;
        new WeatherService().data.then(data => {
            console.log('data:', data);
            this.data = data;
        });
    }
}