import {inject} from 'aurelia-framework';

import {RequestService} from './RequestService';
import {NotificationsService} from './NotificationsService';
import {SettingsService} from './SettingsService';
import moment from '../../lib/moment/moment';
import sv from '../../lib/moment/locale/sv';


@inject(RequestService, NotificationsService, SettingsService)
export class TimeService {
    constructor(requestService, notificationsService, settingsService) {
        moment.locale('sv');
        this.moment = moment;
        this.requestService = requestService;
        this.settings = settingsService.settings.timeSettings;
        this.notificationsService = notificationsService;

        this.timeUrl = "/time/getCurrentTime";

        this.getTime();
        setInterval(() => this.updateTime(), this.settings.refreshTime * 3600000); // hours   
    }
    
    getTime(){
        if (!this.time) {
           this.time = this.updateTime();
        }
        
        return this.time;
    }

    incrementSecond() {
        this.time.add(1, 's');
    }
    
    updateTime() {
        if (this.incrementSecondIntervalId) {
            clearInterval(this.incrementSecondIntervalId);
        }

       this.time = this.requestService
            .getJson(this.timeUrl)
            .then(time => {
                this.time = moment(time.dateString);
                this.incrementSecondIntervalId = setInterval(() => this.incrementSecond(), 1000);
                this.lastUpdated = this.time.clone();
                this.notificationsService.add({message: `Time updated!`, severity: 'info'});
                return this.time;
            });
        return this.time;
    }

}