import { Serializer as citySerializer } from
  '../mixins/regenerated/serializers/i-i-s-test15-city';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(citySerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
