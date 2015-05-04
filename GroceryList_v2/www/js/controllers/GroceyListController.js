angular.module('starter')
    .controller('GroceryListCtrl',[ '$scope','$state', function ($scope,$state) {

        $scope.deleteGroceryEntry = function(index)
        {
            if(index>=0 && index<$scope.groceryList.length)
            {
                $scope.groceryList.splice(index,1);
            }
        };

        $scope.goToItemTypeList = function() {

            $state.go('typeList');
        };

        $scope.getTotalCost = function() {
            var total = 0;
            for(var i=0;i<$scope.groceryList.length;i++)
            {
                total += $scope.groceryList[i].price * $scope.groceryList[i].count;
            }
            return total;
        }
    }]);