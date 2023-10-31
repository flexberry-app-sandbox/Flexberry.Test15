import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISTest15cityLForm from './forms/i-i-s-test15-city-l';
import IISTest15homeLForm from './forms/i-i-s-test15-home-l';
import IISTest15streetLForm from './forms/i-i-s-test15-street-l';
import IISTest15cityEForm from './forms/i-i-s-test15-city-e';
import IISTest15homeEForm from './forms/i-i-s-test15-home-e';
import IISTest15streetEForm from './forms/i-i-s-test15-street-e';
import IISTest15cityModel from './models/i-i-s-test15-city';
import IISTest15homeModel from './models/i-i-s-test15-home';
import IISTest15streetModel from './models/i-i-s-test15-street';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-test15-city': IISTest15cityModel,
    'i-i-s-test15-home': IISTest15homeModel,
    'i-i-s-test15-street': IISTest15streetModel
  },

  'application-name': 'Test15',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Test15',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Test15',
          title: 'Test15'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        test15: {
          caption: 'Test15',
          title: 'Test15',
          'i-i-s-test15-street-l': {
            caption: 'Street',
            title: ''
          },
          'i-i-s-test15-city-l': {
            caption: 'City',
            title: ''
          },
          'i-i-s-test15-home-l': {
            caption: 'Home',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-test15-city-l': IISTest15cityLForm,
    'i-i-s-test15-home-l': IISTest15homeLForm,
    'i-i-s-test15-street-l': IISTest15streetLForm,
    'i-i-s-test15-city-e': IISTest15cityEForm,
    'i-i-s-test15-home-e': IISTest15homeEForm,
    'i-i-s-test15-street-e': IISTest15streetEForm
  },

});

export default translations;
