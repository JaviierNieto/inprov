var app = angular.module('inprovec');

app.controller('VendedorIndexCtrl', function ($mdEditDialog, $q, $scope, listaVendedor) {

    $scope.query = {
        order: 'name',
        limit: 5,
        page: 1
    };

    $scope.vendedor = listaVendedor.query();


});

