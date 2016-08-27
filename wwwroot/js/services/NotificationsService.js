import {inject} from 'aurelia-framework';

export class NotificationsService {
    notifications = [];

    add(notification) {
        this.notifications.push(notification);
        this.show(notification);
    }

    show(notification) {
        console.log(notification);
    }

    clear() {
        this.notifications = [];
    }
}