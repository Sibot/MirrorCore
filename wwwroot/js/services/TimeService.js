import {inject} from 'aurelia-framework';

import {RequestService} from './RequestService';
import {NotificationsService} from './NotificationsService';
import {SettingsService} from './SettingsService';
import moment from '../../lib/moment/moment';
import sv from '../../lib/moment/locale/sv';


@inject(RequestService, NotificationsService, SettingsService)
export class TimeService {
    constructor(requestService, notificationsService, settingsService) {
        moment.locale(settingsService.settings.globalSettings.selectedLocale);
        this.moment = moment;
        this.requestService = requestService;
        this.settings = settingsService.settings.timeSettings;
        this.notificationsService = notificationsService;

        this.timeUrl = "/time/getCurrentTime";

        this.getTime().then(() => {
                this.incrementSecondIntervalId = setInterval(() => this.incrementSecond(), 1000);
        });
        setInterval(() => this.updateTime(), this.settings.refreshTime * 3600000); // hours   
    }

    getLastUpdated(){
        if (!this.lastUpdated) {
           this.updateTime().then(() => {return this.lastUpdated});
        }
        
        return this.lastUpdated;
    }
    
    getTime(){
        if (!this.time) {
            this.time = this.updateTime();
        }
        
        return this.time;
    }

    incrementSecond() {
        this.actualTime.add(1, 's');
    }
    
    updateTime() {
        // if (this.incrementSecondIntervalId) {
        //     clearInterval(this.incrementSecondIntervalId);
        // }

       return this.requestService
            .getJson(this.timeUrl)
            .then(time => {
                this.actualTime = this.moment(time.dateString);
                this.lastUpdated = this.actualTime.clone();
                this.notificationsService.add({message: `Time updated!`, severity: 'info'});
                return this.actualTime;
            }).catch((err) => {
                throw Error(err);
            });
    }
}