/**
 * Created by Norman on 31/10/2016.
 */
(function() {
    'use strict';

    angular
        .module('app')
        .factory('detailService', detailService);


    detailService.$inject = ['$http'];


    function detailService($http){

        var service = {
            getTypes: getTypes,
            deletePokemon: deletePokemon,
            updatePokemon: updatePokemon
        };

        return service;

        function deletePokemon(url){
            return $http({
                method  : 'DELETE',
                url     : url,

            })
                .then(deletePokemonSuccess)
                .catch(deletePokemonFailed);

            function deletePokemonSuccess(){
                return true;
            }

            function deletePokemonFailed(){
                return false;
            }
        }

        function getTypes(url){
            return $http({
                method  : 'GET',
                url     : url+"/types",

            })
                .then(getTypesSuccess)
                .catch(getTypesFailed);

            function getTypesSuccess(data){
                return data.data._embedded.types;
            }

            function getTypesFailed(data){
                return false;
            }
        }

        function updatePokemon(pokemon,url) {

            return $http({
                method  : 'PUT',
                url     : url,
                data    : pokemon

            })
                .then(updatePokemonSuccess)
                .catch(updatePokemonFailed);

            function updatePokemonSuccess(data){
                console.log(data);
                return data.data;

            }

            function updatePokemonFailed(data){
                console.log(data);
                return false;
            }
        }
    }

})();