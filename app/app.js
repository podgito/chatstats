(function () {
    'use strict';

    angular.module('app', [
        require('angular-route')
    ]);

    angular.module('app')
        .config(function ($routeProvider) {
            $routeProvider.when('/', {
                templateUrl: 'views/home.html',
                controller: 'homeController'
            })
        });


    //require('./directives');
    require('./services');
    require('./controllers');
})();