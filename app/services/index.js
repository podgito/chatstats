'use strict';

var angular = require('angular');


angular.module('app').service('dataService', require('./data.service'));
angular.module('app').service('wordsService', require('./wordsService'));