'use strict';

var angular = require('angular');

angular.module('app').controller('dataController', require('./data.controller'));
angular.module('app').controller('homeController', require('./home.controller'));
angular.module('app').controller('wordsController', require('./words.controller'));