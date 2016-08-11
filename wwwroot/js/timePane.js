import {TimeService} from 'js/services/timeService';

export class TimePane {
    constructor() {

        this.second = 0;
        this.minute = 0;
        this.hour = 0;
        this.week = 0;
        this.date = '';

        new TimeService().time.then(moment => {
            this.moment = moment;
            this.weekString = this.moment.localeData()._week.asString;
            setInterval(() => this.incrementSecond(), 1000);
        });
    }
    
    incrementSecond() {
        this.moment.add(1, 's');
        this.recomputeData();
    }

    recomputeData() {
        this.second = this.moment.format('ss');
        this.minute = this.moment.format('mm');
        this.hour = this.moment.format('HH');
        this.week = this.moment.week();
        this.date = this.moment.format('dddd Do MMMM YYYY');
    }
}