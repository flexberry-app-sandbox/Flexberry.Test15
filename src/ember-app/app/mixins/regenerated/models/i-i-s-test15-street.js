import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  имя: DS.attr('string'),
  city: DS.belongsTo('i-i-s-test15-city', { inverse: null, async: false })
});

export let ValidationRules = {
  имя: {
    descriptionKey: 'models.i-i-s-test15-street.validations.имя.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  city: {
    descriptionKey: 'models.i-i-s-test15-street.validations.city.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('streetE', 'i-i-s-test15-street', {
    имя: attr('Имя', { index: 0 }),
    city: belongsTo('i-i-s-test15-city', 'City', {
      город: attr('Город', { index: 2, hidden: true })
    }, { index: 1, displayMemberPath: 'город' })
  });

  modelClass.defineProjection('streetL', 'i-i-s-test15-street', {
    имя: attr('Имя', { index: 0 }),
    city: belongsTo('i-i-s-test15-city', 'Город', {
      город: attr('Город', { index: 1 })
    }, { index: -1, hidden: true })
  });
};
