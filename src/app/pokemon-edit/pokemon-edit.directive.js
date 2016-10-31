/**
 * Created by Norman on 31/10/2016.
 */
(function() {
    angular
        .module('app')
        .directive('pokemonEdit', pokemonEdit);

    function pokemonEdit() {
        var directive = {
            restrict: 'EA',
            templateUrl: 'app/pokemon-edit/pokemonEdit.html',
        };

        return directive;
    }
})();