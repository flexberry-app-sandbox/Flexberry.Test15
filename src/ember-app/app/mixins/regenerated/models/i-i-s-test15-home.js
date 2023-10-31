import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  колвоПод: DS.attr('number'),
  номер: DS.attr('number'),
  этаж: DS.attr('number'),
  street: DS.belongsTo('i-i-s-test15-street', { inverse: null, async: false })
});

export let ValidationRules = {
  колвоПод: {
    descriptionKey: 'models.i-i-s-test15-home.validations.колвоПод.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, integer: true }),
    ],
  },
  номер: {
    descriptionKey: 'models.i-i-s-test15-home.validations.номер.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, integer: true }),
    ],
  },
  этаж: {
    descriptionKey: 'models.i-i-s-test15-home.validations.этаж.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, integer: true }),
    ],
  },
  street: {
    descriptionKey: 'models.i-i-s-test15-home.validations.street.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('homeE', 'i-i-s-test15-home', {
    номер: attr('Номер', { index: 0 }),
    колвоПод: attr('Колво под', { index: 1 }),
    этаж: attr('Этаж', { index: 2 }),
    street: belongsTo('i-i-s-test15-street', 'Street', {
      имя: attr('Имя', { index: 4, hidden: true })
    }, { index: 3, displayMemberPath: 'имя' })
  });

  modelClass.defineProjection('homeL', 'i-i-s-test15-home', {
    номер: attr('Номер', { index: 0 }),
    колвоПод: attr('Колво под', { index: 1 }),
    этаж: attr('Этаж', { index: 2 }),
    street: belongsTo('i-i-s-test15-street', 'Имя', {
      имя: attr('Имя', { index: 3 })
    }, { index: -1, hidden: true })
  });
};
