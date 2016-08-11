import {RequestService} from 'js/services/requestService';
import moment from '../../lib/moment/moment';
import sv from '../../lib/moment/locale/sv';
import {inject} from 'aurelia-framework';

@inject(RequestService)
export class TimeService {
    constructor(requestService) {
        let timeUrl = "/time/getCurrentTime";
        moment.locale('sv');
        this.moment = moment;
        this.requestService = requestService;
        this.time = this.requestService
            .getJson(timeUrl)
            .then(time => moment(time.dateString));
    }
}