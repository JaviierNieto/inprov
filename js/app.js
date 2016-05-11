var app = angular.module("inprovec",['ngMaterial', 'ui.router', 'ngResource']);


app.config(function($mdThemingProvider) {
    $mdThemingProvider.theme('default')
        .primaryPalette('teal')
        .accentPalette('blue')
        .warnPalette('deep-orange')
        .backgroundPalette('grey');
});