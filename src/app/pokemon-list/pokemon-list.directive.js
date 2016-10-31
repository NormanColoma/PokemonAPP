/**
 * Created by Norman on 31/10/2016.
 */
(function(){
    'use strict';

    angular
        .module('app')
        .directive('pokemonList', pokemonList);

    function pokemonList() {
        var directive = {
            templateUrl: 'app/pokemon-list/pokemonList.html',
            restrict: 'EA'
        };
        return directive;
    }

})();