import {bindable, bindingMode} from 'aurelia-framework';

export class ForecastSettings {
    @bindable({ defaultBindingMode: bindingMode.twoWay }) settings = {};
    @bindable header = '';
}