import {I18N} from 'aurelia-i18n';
import Backend from 'i18next-xhr-backend';

export function configure(aurelia) {
    aurelia.use
        .basicConfiguration()
        .developmentLogging()
        .plugin('aurelia-i18n', (instance) => {
        // register backend plugin
        instance.i18next.use(Backend);

        // adapt options to your needs (see http://i18next.com/docs/options/)
        // make sure to return the promise of the setup method, in order to guarantee proper loading
        return instance.setup({
          backend: {                                  // <-- configure backend settings
            loadPath: './locales/{{lng}}/{{ns}}.json', // <-- XHR settings for where to get the files from
          },
          lng : 'en',
          attributes : ['t','i18n'],
          fallbackLng : 'en',
          debug : true
        });
      });;

    aurelia.start()
        .then(aurelia => aurelia.setRoot());
}