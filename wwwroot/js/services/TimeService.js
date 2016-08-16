import {inject, CompositionTransaction} from 'aurelia-framework';

import {RequestService} from './RequestService';
import {NotificationsService} from './NotificationsService';
import {SettingsService} from './SettingsService';
import moment from '../../lib/moment/moment';
import sv from '../../lib/moment/locale/sv';


@inject(RequestService, NotificationsService, SettingsService, CompositionTransaction)
export class TimeService {
    constructor(requestService, notificationsService, settingsService, compositionTransaction) {
        moment.locale('sv');

        this.moment = moment;
        this.requestService = requestService;
        this.settings = settingsService.settings.timeSettings;
        console.log(this.settings);
        this.notificationsService = notificationsService;

        this.compositionTransactionNotifier = compositionTransaction.enlist();

        this.timeUrl = "/time/getCurrentTime";
        this.updateTime();
        setInterval(() => this.updateTime(), this.settings.refreshTime * 3600000); // hours
    }

    updateTime() {
        if (this.incrementSecondIntervalId) {
            clearInterval(this.incrementSecondIntervalId);
        }

        this.requestService
            .getJson(this.timeUrl)
            .then(time => {
                this.time = moment(time.dateString);
                this.incrementSecondIntervalId = setInterval(() => this.incrementSecond(), 1000);
                this.compositionTransactionNotifier.done();
                
                this.notificationsService.add({message: `Time updated!`, severity: 'info'});
            });
    }

    incrementSecond() {
        this.time.add(1, 's');
    }
}