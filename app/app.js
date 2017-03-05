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
            .when('/wordcloud', {
                templateUrl: 'views/wordcloud.html',
                controller: 'wordsController'
            })
            
        });


    //require('./directives');
    require('./services');
    require('./controllers');
})();