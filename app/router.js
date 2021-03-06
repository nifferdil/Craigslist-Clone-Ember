import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('listing', {path: '/listing/:listing_id'});
  this.route('category', {path: '/category/:category_id'});
  this.route('overallcategory', {path: '/overallcategory/:overallcategory_id'});
});

export default Router;
