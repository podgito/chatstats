(function() {
'use strict';


    dataService.inject = ['$http'];
    function dataService($http) {
        this.exposedFn = exposedFn;
        
        ////////////////

        function exposedFn() { }
    }
    
    module.exports = dataService;
})();