import Ember from 'ember';
import { server, json } from '../initializers/pretender';
import { MOCK_PEOPLE_RESPONSE, MOCK_PERSON_1_RESPONSE } from '../models/person';

server.map(function () {
  this.get(
    '/people/1',
    _request => {
      return json(MOCK_PERSON_1_RESPONSE);
    },
    500
  );

  this.get(
    '/people',
    request => {
      if (request.queryParams.id === '1') {
        return json(MOCK_PERSON_1_RESPONSE);
      } else {
        return json(MOCK_PEOPLE_RESPONSE);
      }
    },
    500
  );

  this.get(
    '/managers',
    function () {
      return json({
        data: [
          {
            type: 'manager',
            id: 3,
            attributes: {
              name: 'Boss Alice',
            },
          },
          {
            type: 'manager',
            id: 4,
            attributes: {
              name: 'Boss Jeff',
            },
          },
        ],
      });
    },
    500
  );
});

export default Ember.Route.extend({
  model: function () {
    return {
      person: this.store.findRecord('person', 1, { reload: true }),
      managers: this.store.findAll('manager'),
    };
  },
});
