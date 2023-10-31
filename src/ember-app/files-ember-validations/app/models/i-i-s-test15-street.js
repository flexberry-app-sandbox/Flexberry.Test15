import {
  defineNamespace,
  defineProjections,
  Model as streetMixin
} from '../mixins/regenerated/models/i-i-s-test15-street';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(streetMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
