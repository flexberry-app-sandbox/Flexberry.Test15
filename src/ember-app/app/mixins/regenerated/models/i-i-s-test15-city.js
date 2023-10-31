import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  город: DS.attr('string'),
  площадьГ: DS.attr('number')
});

export let ValidationRules = {
  город: {
    descriptionKey: 'models.i-i-s-test15-city.validations.город.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  площадьГ: {
    descriptionKey: 'models.i-i-s-test15-city.validations.площадьГ.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, integer: true }),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('cityE', 'i-i-s-test15-city', {
    город: attr('Город', { index: 0 }),
    площадьГ: attr('Площадь Г', { index: 1 })
  });

  modelClass.defineProjection('cityL', 'i-i-s-test15-city', {
    город: attr('Город', { index: 0 }),
    площадьГ: attr('Площадь Г', { index: 1 })
  });
};
