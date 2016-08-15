import {inject, CompositionTransaction} from 'aurelia-framework';
import {I18N} from 'aurelia-i18n';

import {DeparturesService} from './services/DeparturesService';
import {SettingsService} from './services/SettingsService';
import {TimeService} from './services/TimeService';

@inject(CompositionTransaction, I18N, DeparturesService, TimeService, SettingsService)
export class DeparturesPane {
    constructor(compositionTransaction, i18N, departuresService, timeService, settingsService) {
        this.compositionTransactionNotifier = compositionTransaction.enlist();
        this.i18N = i18N;
        this.i18N
            .setLocale('en');

        this.departuresService = departuresService;
        this.timeService = timeService;
        this.settings = settingsService.settings.departuresSettings;
        //this.heading = this.settings.heading;

        this.populateDepartures();
        setInterval(() => this.populateDepartures(), this.settings.refreshTime * 60000);
    }

    populateDepartures() {
        if (this.intervalId) {
            clearInterval(this.intervalId);
        }

        this.departuresService.getDepartures()
                              .then(data => {
                                  this.data = data;
                                  this.departures = data.ResponseData;
                                  this.relativeTime = this.timeService.moment(this.departures.LatestUpdate).add(this.departures.DataAge, 's');
                                  this.intervalId = setInterval(() => this.incrementSecond(), 1000);
                                  this.compositionTransactionNotifier.done();
                              });
    }
    incrementSecond() {
        this.relativeTime.add(1, 's');
    }

    showSettings = false;
    
    toggleSettings() {
        this.showSettings = !this.ShowSettings;
    }
    
    onChildStateChange(value, index, array) {
        array.splice(index, 1);
    }
}