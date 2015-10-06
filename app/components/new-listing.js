import Ember from 'ember';

export default Ember.Component.extend({
  addNewListing: false,
  // showError: false,
  // errors: [],
  actions: {
    listingFormShow() {
      this.set('addNewListing', true);
    },

    saveListing(category) {
      // if (this.get('title') === undefined) {
      //   this.set("showError", true);
      //   this.get("errors").push("Title can't be blank");
      // }
      var params = {
        title: this.get('title'),
        price: this.get('price'),
        description: this.get('description') ? this.get('description') : "",
        image: this.get('image') ? this.get('image') : "",
        category: category,
        latitude: this.get('latitude'),
        longitude: this.get('longitude'),
        date_added: Date.now()
      };
      this.set('addNewListing', false),
      this.sendAction('saveListing', params);
    }
  }
});
