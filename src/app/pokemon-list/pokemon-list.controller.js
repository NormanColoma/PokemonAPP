/**
 * Created by Norman on 31/10/2016.
 */
(function () {

    'use strict';

    angular
        .module('app')
        .controller('PokemonListController', PokemonListController);

    PokemonListController.$inject = ['listService','detailService'];

    function PokemonListController(listService,detailService){

        var vm = this;


        vm.addPokemon = addPokemon;
        vm.backToList = backToList;
        vm.deletePokemon = deletePokemon;
        vm.editPokemon = editPokemon;
        vm.getList = getList;
        vm.getTypes = getTypes;
        vm.prueba = "Hey Angular";
        vm.pokemons = [];
        vm.pokemonSelected = null;
        vm.resetForm = resetForm;
        vm.selectPokemon = selectPokemon;
        vm.showView = showView;
        vm.types = [];
        vm.view = 'list';



        function addPokemon(pokemon, form){
            var types = [];
            types.push(vm.type1);
            types.push(vm.type2);

            pokemon.types = types;

            listService.addPokemon(pokemon).then(function(response){
                vm.pokemons.push(response);
                vm.resetForm(form);
                vm.showView('list');
            });


        }


        function editPokemon(pokemon){
            var types = [];
            types.push(vm.type1);
            types.push(vm.type2);
            pokemon.types = types;


            pokemon.types = types;
            detailService.updatePokemon(pokemon,pokemon._links.pokemon.href).then(function (response) {
                detailService.getTypes(pokemon._links.pokemon.href).then(function (types) {
                    vm.pokemonSelected.types = types;
                })
            });

            vm.showView('detail');
        }


        function getList(){

            listService.getList().then(function(response){
                vm.pokemons = response;
            });
        }

        function getTypes(){

            listService.getTypes().then(function(response){
                vm.types = response;
            });
        }

        function selectPokemon(url){
            listService.getPokemon(url).then(function (response) {
               vm.pokemonSelected = response;
                detailService.getTypes(url).then(function (types) {
                    vm.pokemonSelected.types = types;
                    vm.type1 = types[0]._links.type.href;
                    vm.type2 = types[1]._links.type.href;
                })
            });
        }

        function backToList(){
            vm.pokemonSelected = null;
        }

        function deletePokemon(url){
            detailService.deletePokemon(url).then(function (response) {
                var index = -1;
                for(var i = 0, len = vm.pokemons.length; i < len; i++) {
                    if (vm.pokemons[i].name === vm.pokemonSelected.name) {
                        index = i;
                        break;
                    }
                }

                vm.pokemons.splice(index,1);
                vm.pokemonSelected = null;
            });
        }

        function resetForm(form){
            if(form) {
                vm.pokemon = {};
                vm.type1 = "";
                vm.type2 = "";
                form.$setPristine();
                form.$setUntouched();
            }
        }

        function showView(view){
            vm.view = view;
        }





    }

})();