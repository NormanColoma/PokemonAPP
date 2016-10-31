/**
 * Created by Norman on 31/10/2016.
 */
(function() {
    angular
        .module('app')
        .directive('pokemonDetail', pokemonDetail);

    function pokemonDetail() {
        var directive = {
            restrict: 'EA',
            templateUrl: 'app/pokemon-detail/pokemonDetail.html',
        };

        return directive;
    }
})();