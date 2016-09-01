import {inject, bindable, bindingMode} from 'aurelia-framework';
import {SettingsService} from './services/SettingsService';

@inject(SettingsService)
export class SettingsView {
    @bindable({ defaultBindingMode: bindingMode.twoWay }) viewSettings;
    constructor(settingsService) {
        this.settingsService = settingsService;
        this.settings = { isStuff: true };
        this.settingsMarkup = '';
        this.parseSettings(this.settings);
    }

    showSettings = false;

    parseSettings(settings) {
        let keys = Object.keys(settings);
        keys.forEach(function (element) {
            console.log('element', element);
            console.log('array', settings);
            console.log('value', settings[element]);
            console.log('typeof', typeof (settings[element]));

            if (typeof (settings[element]) === 'boolean') {

            }
        }, this);
    }

    addBoolean(element, index, array) {

    }

    toggleSettings() {
        this.showSettings = !this.showSettings;
    }
}