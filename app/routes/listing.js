import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('listing', params.listing_id);
  },

  actions: {

    delete(listing) {
      if (confirm('Are you sure you want to delete this listing?')) {
        listing.destroyRecord().then(function() {
          category.save();
        });
        this.transitionTo('index');
      }
    },

    // destroyCategory(category) {
    //   var listing_deletions = category.get('listings').map(function(listing) {
    //     return listing.destroyRecord();
    //   });
    //   Ember.RSVP.all(listing_deletions)
    //   .then(function() {
    //     return category.destroyRecord();
    //   })
    //   this.transitionTo('index');
    // }
  }
});
