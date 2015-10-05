import Ember from 'ember';

export default Ember.Component.extend({
  addNewListing: false,
  actions: {
    listingFormShow() {
      this.set('addNewListing', true);
    },

    saveListing(category) {
      var params = {
        title: this.get('title'),
        price: this.get('price'),
        description: this.get('description'),
        image: this.get('image'),
        category: category
      };
      this.set('addNewListing', false),
      this.sendAction('saveListing', params);
    }
  }

});
