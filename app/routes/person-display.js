import Ember from 'ember';
import { server, json } from '../initializers/pretender';
import { MOCK_PERSON_1_RESPONSE } from '../models/person';

server.map(function () {
  this.get(
    '/people/1',
    function () {
      return json(MOCK_PERSON_1_RESPONSE);
    },
    500
  );
});

export default Ember.Route.extend({
  model: function () {
    return this.store.findRecord('person', 1, { reload: true });
  },
});
