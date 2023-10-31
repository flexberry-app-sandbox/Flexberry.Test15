import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

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
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Test15',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Test15',
          title: 'Test15'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
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
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
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
