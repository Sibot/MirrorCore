import {inject, BindingEngine} from 'aurelia-framework';
import {NotificationsService} from './services/NotificationsService';

@inject(NotificationsService, BindingEngine)
export class NotificationsPane {
    constructor(notificationsService, bindingEngine){
        this.bindingEngine = bindingEngine;
        this.notificationsService = notificationsService;
        this.notifications = this.notificationsService.notifications;
        this.displayedNotifications = this.notifications;

        let subscription = bindingEngine.propertyObserver(this.notifications, 'length')
                                        .subscribe((newValue, oldValue) => {
                                            this.updateNotifications();
                                        });
    }

    updateNotifications() {
        this.displayedNotifications = this.notifications.filter(function (element) {
            return element.show;
        });

    }
    onChildStateChange() {
        this.updateNotifications();
    }
}

