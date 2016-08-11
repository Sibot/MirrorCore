import {RequestService} from 'js/services/requestService';
import moment from '../../lib/moment/moment';
import sv from '../../lib/moment/locale/sv';

export class TimeService {
    constructor() {
        let timeUrl = "/time/getCurrentTime";
        moment.locale('sv');
        this.moment = moment;
        this.time = new RequestService()
            .getJson(timeUrl)
            .then(time => moment(time.dateString));
    }
}