//Styles
import './stylesheets/artist.scss';

//Dependencies
import angular from 'angular';
import uiRouter from 'angular-ui-router';

//Module
import dataStore from 'modules/datastore/module';
import songsTable from 'modules/songs-table/module';

import artistRoute from './artist.route.js';
import artistCtrl from './controllers/artist.controller.js';

import artistsList from './directives/artists-list.js';

import artistBox from './directives/artist-box.js';

import artistModel from './models/artist.model.js';

export default angular.module('msl.artist', [
  uiRouter,
  dataStore,
  songsTable,
])
  .config(artistRoute)
  .controller('artistCtrl', artistCtrl)
  .directive('artistsList', artistsList)
  .directive('artistBox', artistBox)
  .factory('artistModel', artistModel)
  .name;