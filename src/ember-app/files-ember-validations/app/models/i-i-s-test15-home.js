import {
  defineNamespace,
  defineProjections,
  Model as homeMixin
} from '../mixins/regenerated/models/i-i-s-test15-home';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(homeMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
