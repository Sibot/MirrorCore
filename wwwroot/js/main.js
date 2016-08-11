export function configure(aurelia) {
    aurelia.use
        .basicConfiguration()
        .developmentLogging();

    aurelia.start()
        .then(aurelia => aurelia.setRoot());
}