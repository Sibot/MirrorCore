import {inject} from 'aurelia-framework';

export class NotificationsService {
    notifications = [];

    add(notification) {
        this.show(notification);
        this.notifications.push(notification);
    }

    show(notification) {
        notification.show = true;
        console.log(notification);
    }

    clear() {
        this.notifications = [];
    }
}