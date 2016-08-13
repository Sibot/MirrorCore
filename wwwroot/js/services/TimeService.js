import {inject, CompositionTransaction} from 'aurelia-framework';

import {RequestService} from './RequestService';
import moment from '../../lib/moment/moment';
import sv from '../../lib/moment/locale/sv';


@inject(RequestService, CompositionTransaction)
export class TimeService {
    constructor(requestService, compositionTransaction) {
        moment.locale('sv');

        this.compositionTransaction = compositionTransaction;
        this.moment = moment;
        this.requestService = requestService;

        this.compositionTransactionNotifier = this.compositionTransaction.enlist();

        let timeUrl = "/time/getCurrentTime";

        this.requestService
            .getJson(timeUrl)
            .then(time => {
                this.time = moment(time.dateString);
                this.compositionTransactionNotifier.done();
            });

        setInterval(() => this.incrementSecond(), 1000);
    }

    incrementSecond() {
        this.time.add(1, 's');
    }
}