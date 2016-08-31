import {inject} from 'aurelia-framework';
import {I18N} from 'aurelia-i18n';

import {DeparturesService} from './services/DeparturesService';
import {SettingsService} from './services/SettingsService';
import {TimeService} from './services/TimeService';

@inject(I18N, DeparturesService, TimeService, SettingsService)
export class DeparturesPane {
    constructor(i18N, departuresService, timeService, settingsService) {
        this.i18N = i18N;

        this.departuresService = departuresService;
        this.timeService = timeService;
        this.settings = settingsService.settings.departuresSettings;

        this.populateDepartures();
        this.serviceActive = false;
        
        setInterval(() => this.populateDepartures(), this.settings.refreshTime * 60000); //Minutes
    }

    showSettings = false;

    populateDepartures() {
        if (this.intervalId) {
            clearInterval(this.intervalId);
        }

        this.departuresService.getDepartures()
                              .then(data => {
                                  this.data = data;
                                  this.departures = data.ResponseData;
                                  this.relativeTime = this.timeService.moment(this.departures.LatestUpdate)
                                                                      .add(this.departures.DataAge, 's');
                                  this.lastUpdated = this.timeService.getTime()
                                      .then((time) => { this.lastUpdated = time.format("HH:mm:ss")});
                                  this.intervalId = setInterval(() => this.incrementSecond(), 1000);
                                  this.serviceActive = true;
                              }).catch((err) => {
                                  this.serviceActive = false;
                                  console.log(err);
                              });
    }

    incrementSecond() {
        this.relativeTime.add(1, 's');
    }

    
    toggleSettings() {
        this.showSettings = !this.showSettings;
    }
    
    onChildStateChange(value, index, array) {
        array.splice(index, 1);
    }
}