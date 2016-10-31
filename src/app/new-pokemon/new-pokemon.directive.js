/**
 * Created by Norman on 31/10/2016.
 */
(function() {
    angular
        .module('app')
        .directive('newPokemon', newPokemon);

    function newPokemon() {
        var directive = {
            restrict: 'EA',
            templateUrl: 'app/new-pokemon/newPokemon.html',
        };

        return directive;
    }
})();