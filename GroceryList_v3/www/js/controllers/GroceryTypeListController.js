angular.module('starter')
	.controller('GroceryTypeListCtrl',[ '$scope','$state','GroceryService', function ($scope,$state,GroceryService) {


	    $scope.typeList = GroceryService.getGroceryTypeList();

	    $scope.goBack = function(){
	        $state.go('mainList');
	    };

	    $scope.addType = function(item){
	        $scope.addTypeToList(item);
	        $state.go('mainList');
	    };

	    $scope.newType = function() {
	        $state.go('groceryDetail');
	    };

	    $scope.editType = function(item) {
	        $state.go('groceryDetail', {id:item.id})
	    };

	}]);