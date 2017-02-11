(function() {
'use strict';

    angular
        .module('app')
        .controller('timerController', timerController);

    timerController.inject = ['$scope'];
    function timerController($scope) {
        var vm = this;
        


        activate();

        ////////////////

        function activate() {
            var bday = new Date("2017-02-12");
            $scope.bDayTime = bday.getTime();
         }
    }
})();