import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('category', params.category_id);
  },

  actions: {
    saveListing(params) {
      var newListing = this.store.createRecord('listing', params);
      var category = params.category;
      category.get("listings").addObject(newListing);
      newListing.save().then(function() {
        category.save();
      });
    },

    destroyListing(listing) {
      listing.destroyRecord().then(function() {
        category.save();
      });
      this.transitionTo('index');
    },

  
  }
});
