import { Serializer as streetSerializer } from
  '../mixins/regenerated/serializers/i-i-s-test15-street';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(streetSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
