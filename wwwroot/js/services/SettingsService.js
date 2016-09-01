import {inject} from 'aurelia-framework';

export class SettingsService {
    settings = {
        globalSettings: { name: 'global', heading: 'MirrorCore', selectedLocale: 'en', availableLocales: ['sv', 'en'] },
        departuresSettings: { name: 'departures', refreshTime: 6 },
        forecastSettings: { name: 'forecast', filterSeries: 4, refreshTime: 60 },
        timeSettings: { name: 'time', refreshTime: 6 },
        todoSettings: { name: 'todo' },
        listSettings: { name: 'list' }
    };
}