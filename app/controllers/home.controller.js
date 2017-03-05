(function() {
'use strict';

    homeController.inject = ['$scope'];
    function homeController($scope) {
        var vm = this;
        
        $scope.myVal = 'test123';


        activate();

        ////////////////

        function activate() { }
    }
    module.exports = homeController;
})();