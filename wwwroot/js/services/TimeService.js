import {RequestService} from 'js/services/RequestService';
import moment from '../../lib/moment/moment';
import sv from '../../lib/moment/locale/sv';
import {inject} from 'aurelia-framework';

@inject(RequestService)
export class TimeService {
    constructor(requestService) {
        moment.locale('sv');
        this.moment = moment;
        this.requestService = requestService;
    }

    getTime(){
        let timeUrl = "/time/getCurrentTime";
        return this.requestService
            .getJson(timeUrl)
            .then(time => {
                this.time = moment(time.dateString);
                return this.time; 
            });
    }
}