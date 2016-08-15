import {inject} from 'aurelia-framework';

export class SettingsService {
    settings = {
        globalSettings : { name: 'global', heading: 'MirrorCore' },
        departuresSettings: { name: 'departures', heading:'Avgångar', refreshTime: 6 },
        forecastSettings: { name: 'forecast', heading:'Väder', filterSeries: 4, refreshTime: 60 },
        timeSettings: { name: 'time', heading:'Tid' },
        todoSettings: { name: 'todo', heading:'Todo' },
        listSettings: { name: 'list', heading:'List' }
    };
}