/**
 * Created by Norman on 31/10/2016.
 */
(function() {
    'use strict';

    angular
        .module('app')
        .factory('listService', listService);


    listService.$inject = ['$http'];


    function listService($http){

        var url = 'https://pokemonrestapi.herokuapp.com/pokemons';

        var service = {
            addPokemon: addPokemon,
            getList: getList,
            getPokemon: getPokemon,
            getTypes: getTypes
        };

        return service;


        function addPokemon(pokemon) {

            return $http({
                method  : 'POST',
                url     : url,
                data    : pokemon

            })
                .then(addPokemonSuccess)
                .catch(addPokemonFailed);

            function addPokemonSuccess(data){
                console.log(data);
                return data.data;

            }

            function addPokemonFailed(data){
                console.log(data);
                return false;
            }
        }

        function getList(){
            return $http({
                method  : 'GET',
                url     : url,

            })
                .then(getListSuccess)
                .catch(getLisFailed);

            function getListSuccess(data){
                return data.data._embedded.pokemons;
            }

            function getLisFailed(){
                return false;
            }
        }

        function getPokemon(url){
            return $http({
                method  : 'GET',
                url     : url,

            })
                .then(getPokemonSuccess)
                .catch(getPokemonFailed);

            function getPokemonSuccess(data){
                return data.data;
            }

            function getPokemonFailed(){
                return false;
            }
        }

        function getTypes(){
            return $http({
                method  : 'GET',
                url     : 'https://pokemonrestapi.herokuapp.com/types',

            })
                .then(getTypesSuccess)
                .catch(getTypesFailed);

            function getTypesSuccess(data){
                return data.data._embedded.types;
            }

            function getTypesFailed(){
                return false;
            }
        }


    }

})();