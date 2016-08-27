import {bindable, bindingMode, inject} from 'aurelia-framework';

@inject(Element)
export class TimedHideCustomAttribute {
  @bindable seconds;
  @bindable({ defaultBindingMode: bindingMode.twoWay }) item;
  @bindable onStateChange;

  constructor(element) {
    this.element = element;
  }

  bind() {
    setTimeout(() => this.hide(), this.seconds * 1000);
  }

  hide(element) {
    this.element.classList.add('hide');
    this.item.hidden = true;

    if (this.onStateChange) {
        this.onStateChange();
    }
  }
}