import {inject, CompositionTransaction} from 'aurelia-framework';

import {DeparturesService} from './services/DeparturesService';
import {SettingsService} from './services/SettingsService';
import {TimeService} from './services/TimeService';

@inject(CompositionTransaction, DeparturesService, TimeService, SettingsService)
export class DeparturesPane {
    constructor(compositionTransaction, departuresService, timeService, settingsService) {
        this.compositionTransactionNotifier = compositionTransaction.enlist();

        this.departuresService = departuresService;
        this.timeService = timeService;
        this.settings = settingsService.settings.departuresSettings;
        this.heading = this.settings.heading;

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
        if (array.isArray() && value !== undefined) {
            console.log("Child destruction initiated!");
            array.splice(index, 1);
        }
    }
}