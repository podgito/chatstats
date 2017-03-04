webpackJsonp([0],[
/* 0 */,
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var angular = __webpack_require__(0);

angular.module('app').controller('dataController', __webpack_require__(3));

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var angular = __webpack_require__(0);


angular.module('app').service('dataService', __webpack_require__(4));

/***/ }),
/* 3 */
/***/ (function(module, exports) {

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

/***/ }),
/* 4 */
/***/ (function(module, exports) {

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

/***/ }),
/* 5 */,
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

(function () {
    'use strict';

    angular.module('app', [
       // 'timer'
    ]);


    //require('./directives');
    __webpack_require__(2);
    __webpack_require__(1);
})();

/***/ })
],[6]);