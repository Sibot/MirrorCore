import {inject} from 'aurelia-framework';

export class SettingsService {
    settings = {
        globalSettings : {name: 'global', heading: 'MirrorCore'},
        departuresSettings: {name: 'departures', heading:'Avgångar'},
        forecastSettings: {name: 'forecast', heading:'Väder', filterSeries: 4},
        timeSettings: {name: 'time', heading:'Tid'},
        todoSettings: {name: 'todo', heading:'Todo'},
        listSettings: {name: 'list', heading:'List'}
    };
}