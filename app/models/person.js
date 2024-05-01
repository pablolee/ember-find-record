import Model from '@ember-data/model';
import { attr } from '@ember-data/model';
import { belongsTo } from 'ember-data/relationships';
import { hasMany } from '@ember-data/model';

export const MOCK_PERSON_1_RESPONSE = {
  data: {
    type: 'person',
    id: 1,
    attributes: {
      name: 'Bob',
    },
    relationships: {
      boss: {
        data: {
          type: 'manager',
          id: 3,
        },
      },
    },
  },
  included: [
    {
      id: 3,
      type: 'manager',
      attributes: {
        name: 'Boss Alice',
      },
    },
  ],
}

export const MOCK_PEOPLE_RESPONSE = {
  data: [
    {
      type: 'person',
      id: 1,
      attributes: {
        name: 'Bob',
      },
      relationships: {
        boss: {
          data: {
            type: 'manager',
            id: 3,
          },
        },
      },
      included: [
        {
          id: 3,
          type: 'manager',
          attributes: {
            name: 'Boss Alice',
          },
        },
      ],
    }
  ]
}

export default class Person extends Model {
  @attr() name;
  @belongsTo('manager', { async: false }) boss;
}
