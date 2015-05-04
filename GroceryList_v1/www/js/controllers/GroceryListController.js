angular.module('starter')
    .controller('GroceryListCtrl',[ '$scope', function ($scope) {

        $scope.groceryList = [];
        $scope.groceryToAdd = "";

        $scope.addGroceryEntry = function(entry){
            if(entry != "")
            {
                $scope.groceryList.push({name : entry});
                $scope.groceryToAdd = "";
            }
        };

        $scope.deleteGroceryEntry = function(index)
        {
            if(index>=0 && index<$scope.groceryList.length)
            {

                $scope.groceryList.splice(index,1);
            }
        };

        $scope.newGroceryList = function() {
            console.log('here');
            $scope.groceryList = [];
        };
    }]);