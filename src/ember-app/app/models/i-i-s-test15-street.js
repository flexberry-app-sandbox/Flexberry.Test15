import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as streetMixin
} from '../mixins/regenerated/models/i-i-s-test15-street';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(streetMixin, Validations, {
});

defineProjections(Model);

export default Model;
