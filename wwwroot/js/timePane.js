import {TimeService} from './services/TimeService';
import {SettingsService} from './services/SettingsService';
import {inject} from 'aurelia-framework';

@inject(TimeService, SettingsService)
export class TimePane {
    constructor(timeService, settingsService) {
        this.timeService = timeService;
        this.second = 0;
        this.minute = 0;
        this.hour = 0;
        this.week = 0;
        this.date = '';
        this.day = '';
        this.month = '';
        this.year = 0;
        this.settings = settingsService.settings.timeSettings;
    }

    attached(){
        this.time = this.timeService.getTime();
        setInterval(() => this.incrementSecond(), 1000);
    }

    incrementSecond() {
        this.time = this.timeService.getTime();
        this.lastUpdated = this.timeService.lastUpdated.format("HH:mm:ss");
        this.recomputeData();
    }

    recomputeData() {
        this.date = this.time.format('Do');
        this.day = this.time.format('dddd');
        this.hour = this.time.format('HH');
        this.minute = this.time.format('mm');
        this.month = this.time.format('MMMM');
        this.second = this.time.format('ss');
        this.week = this.time.format('[Vecka] w');
        this.year = this.time.format('YYYY');
    }

    showSettings = false;
    toggleSettings(){
        this.showSettings = !this.ShowSettings;
    }

}