import {inject} from 'aurelia-framework';

export class NotificationService {
    
    notifications = [{message:'Test'}];

    add(notification) {
        this.notifications.push();
        this.show(notification);
    }

    show(notification) {
        console.log(notification);
    }

    clear() {
        this.notifications = [];
    }
}