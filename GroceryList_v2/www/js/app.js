// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])
.config(['$stateProvider', '$urlRouterProvider',function($stateProvider, $urlRouterProvider){

        $urlRouterProvider.otherwise("/");

        $stateProvider
            .state('mainList', {
                url: "/",
                templateUrl: "js/partials/mainlist.html",
                controller : "GroceryListCtrl"
            })
            .state('typeList', {
                url: "/groceryType",
                templateUrl: "js/partials/grocerylist.html",
                controller: "GroceryTypeListCtrl"
            })
            .state('groceryDetail', {
                url: "/groceryDetail/:id",
                templateUrl: "js/partials/listdetail.html",
                controller: "GroceryDetailCtrl"
            })
    }])
.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
