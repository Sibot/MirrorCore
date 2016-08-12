import {TimeService} from 'js/services/timeService';
import {inject} from 'aurelia-framework';

@inject(TimeService)
export class TimePane {
    constructor(timeService) {
        this.timeService = timeService;
        this.second = 0;
        this.minute = 0;
        this.hour = 0;
        this.week = 0;
        this.date = '';
        this.day = '';
        this.month = '';
        this.year = 0;

        this.timeService.getTime()
                        .then(moment => {
                            this.moment = moment;
                            this.recomputeData();
                            setInterval(() => this.incrementSecond(), 1000);
                        });
    }
    
    incrementSecond() {
        this.moment.add(1, 's');
        this.recomputeData();
    }

    recomputeData() {
        this.date = this.moment.format('Do');
        this.day = this.moment.format('dddd');
        this.hour = this.moment.format('HH');
        this.minute = this.moment.format('mm');
        this.month = this.moment.format('MMMM');
        this.second = this.moment.format('ss');
        this.week = this.moment.format('[Vecka] w');
        this.year = this.moment.format('YYYY');

    }
}