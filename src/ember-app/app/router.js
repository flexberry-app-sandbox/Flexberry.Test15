import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-test15-city-l');
  this.route('i-i-s-test15-city-e',
  { path: 'i-i-s-test15-city-e/:id' });
  this.route('i-i-s-test15-city-e.new',
  { path: 'i-i-s-test15-city-e/new' });
  this.route('i-i-s-test15-home-l');
  this.route('i-i-s-test15-home-e',
  { path: 'i-i-s-test15-home-e/:id' });
  this.route('i-i-s-test15-home-e.new',
  { path: 'i-i-s-test15-home-e/new' });
  this.route('i-i-s-test15-street-l');
  this.route('i-i-s-test15-street-e',
  { path: 'i-i-s-test15-street-e/:id' });
  this.route('i-i-s-test15-street-e.new',
  { path: 'i-i-s-test15-street-e/new' });
});

export default Router;
