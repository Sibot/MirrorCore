import {inject} from 'aurelia-framework';
import {NotificationsService} from './services/NotificationsService';

@inject(NotificationsService)
export class NotificationsPane {
    constructor(notificationsService){
        this.notificationsService = notificationsService;
        this.notifications = this.notificationsService.notifications;
    }

    updateNotifications() {
        this.notifications = this.notificationsService.notifications.filter(function (element) {
            return false;
        });

    }
    onChildStateChange() {
        this.updateNotifications();
    }
}

