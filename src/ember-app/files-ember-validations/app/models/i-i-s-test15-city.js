import {
  defineNamespace,
  defineProjections,
  Model as cityMixin
} from '../mixins/regenerated/models/i-i-s-test15-city';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(cityMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
