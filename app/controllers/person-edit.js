import { action } from '@ember/object';
import { reads } from '@ember/object/computed';

export default class Application extends Ember.Controller {
  @reads('model.person') person;
  @reads('model.managers') managers;

  @action
  findRecord() {
    this.store.findRecord('person', 1, { reload: true }).then((result) => {
      console.log("findRecord returned:", result);
      this.set('model.person', result);
    });
  }

  @action
  queryRecord() {
    this.store.queryRecord('person', { id: 1 }).then((result) => {
      console.log("queryRecord returned:", result);
      this.set('model.person', result);
    });
  }

  @action
  query() {
    this.store.query('person', {}).then((result) => {
      console.log("query returned:", result.firstObject);
      this.set('model.person', result.firstObject);
    });
  }

  @action
  changeBoss(manager) {
    this.set('model.person.boss', manager);
  }
}
