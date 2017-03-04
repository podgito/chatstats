(function() {
'use strict';

    dataController.inject = ['$scope'];
    function dataController($scope) {
        var vm = this;
        

        $scope.myVal = "myVal7";

        activate();


        ////////////////

        function activate() { }
    }

    module.exports = dataController;
})();