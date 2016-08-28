import {inject} from 'aurelia-framework';
import {NotificationsService} from './services/NotificationsService';

@inject(NotificationsService)
export class NotificationsPane {
    constructor(notificationsService){
        this.notificationsService = notificationsService;
        this.notifications = this.notificationsService.notifications;
    }

    updateNotifications() {
        this.notifications = this.notifications.filter(function (element) {
            return !(element.hidden === true);
        });

    }
    onChildStateChange() {
        this.updateNotifications();
    }
}

