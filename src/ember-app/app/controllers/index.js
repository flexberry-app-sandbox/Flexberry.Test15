import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.test15.caption'),
          title: i18n.t('forms.application.sitemap.test15.title'),
          children: [{
            link: 'i-i-s-test15-street-l',
            caption: i18n.t('forms.application.sitemap.test15.i-i-s-test15-street-l.caption'),
            title: i18n.t('forms.application.sitemap.test15.i-i-s-test15-street-l.title'),
            icon: 'book',
            children: null
          }, {
            link: 'i-i-s-test15-city-l',
            caption: i18n.t('forms.application.sitemap.test15.i-i-s-test15-city-l.caption'),
            title: i18n.t('forms.application.sitemap.test15.i-i-s-test15-city-l.title'),
            children: null
          }, {
            link: 'i-i-s-test15-home-l',
            caption: i18n.t('forms.application.sitemap.test15.i-i-s-test15-home-l.caption'),
            title: i18n.t('forms.application.sitemap.test15.i-i-s-test15-home-l.title'),
            icon: 'book',
            children: null
          }]
        }
      ]
    };
  }),
})