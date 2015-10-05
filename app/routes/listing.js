import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('listing', params.listing_id);;
  },

  actions: {
   saveLising(params) {
     var newListing = this.store.createRecord('listing', params);
     newListing.save();
   }
 }
});
