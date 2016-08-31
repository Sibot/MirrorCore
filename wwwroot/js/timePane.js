import {inject, BindingEngine} from 'aurelia-framework';
import {I18N} from 'aurelia-i18n';

import {TimeService} from './services/TimeService';
import {SettingsService} from './services/SettingsService';

@inject(TimeService, SettingsService, BindingEngine, I18N)
export class TimePane {
    constructor(timeService, settingsService, bindingEngine, i18n) {
        this.i18n = i18n;
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
        this.serviceActive = false;

        let subscription = bindingEngine.propertyObserver(this.timeService, 'actualTime')
                                        .subscribe((newValue, oldValue) => {
                                            //this.time = newValue;
                                            //console.log(newValue);
                                        });
    }
    
    showSettings = false;
    
    attached(){
        this.timeService.getTime().then((time) => {
            this.time = time;
            setInterval(() => this.incrementSecond(), 1000);
            this.serviceActive = true;
        }).catch((err) => {
            this.serviceActive = false;
        });
    }

    incrementSecond() {
        this.timeService.getTime().then((time) => {
            this.time = time;
            this.lastUpdated = this.timeService.getLastUpdated().format('HH:mm:ss'); 
            this.recomputeData();
        });
    }

    recomputeData() {
        this.date = this.time.format('Do');
        this.day = this.time.format('dddd');
        this.hour = this.time.format('HH');
        this.minute = this.time.format('mm');
        this.month = this.time.format('MMMM');
        this.second = this.time.format('ss');
        this.week = `${this.i18n.tr('week')} ${this.time.format('w')}`;
        this.year = this.time.format('YYYY');
    }

    toggleSettings(){
        this.showSettings = !this.showSettings;
    }

}