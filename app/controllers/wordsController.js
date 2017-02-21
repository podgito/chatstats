(function() {
'use strict';

    angular
        .module('app')
        .controller('wordsController', wordsController);

    wordsController.inject = ['wordsService'];
    function wordsController(wordsService) {
        var vm = this;
        

        activate();

        ////////////////

        function activate() {
            var list = wordsService.wordCloudData();
            WordCloud(document.getElementById('wordCloud'), { list: list , weightFactor: 0.09 } );

         }
    }
})();