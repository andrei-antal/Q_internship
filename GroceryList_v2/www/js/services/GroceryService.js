angular.module('starter')
    .service('GroceryService',[ function() {

        var groceryService = {};
        var groceryId = 0;

        function GroceryType(id, name, description, price)
        {
            this.id = id;
            this.name = name;
            this.description = description;
            this.price = price;
        }

        var groceryTypeList = [
            new GroceryType(groceryId++,'Milk','Milk is a white liquid produced by the mammary glands of mammals.', 12.34),
            new GroceryType(groceryId++,'Tomatoes','The tomato is the edible, often red fruit/berry of the nightshade.', 12.34),
            new GroceryType(groceryId++,'Cereal','Breakfast cereal (or just cereal) is a food made from processed grains that is often eaten as the first meal of the day.', 12.34),
            new GroceryType(groceryId++,'Biscuits','A small bread with a firm browned crust and a soft interior.', 12.34),
            new GroceryType(groceryId++,'Bread','Bread is a staple food prepared from a dough of flour and water, usually by baking. ', 12.34),
            new GroceryType(groceryId++,'Toothpaste','Toothpaste is a paste or gel dentifrice used with a toothbrush as an accessory to clean and maintain the aesthetics and health of teeth.', 12.34),
            new GroceryType(groceryId++,'Juice','Juice is a liquid that is naturally contained in fruit and vegetables', 34.45)
        ];

        groceryService.getGroceryTypeList = function(){
            return groceryTypeList;
        };

        groceryService.getGroceryType = function(id){
            for(var i=0;i<groceryTypeList.length;i++)
            {
                if(groceryTypeList[i].id == id)
                {
                    return groceryTypeList[i];
                }
            }

            return {};
        }

        groceryService.addNewGroceryType = function(item){
            groceryTypeList.push( new GroceryType(groceryId++,item.name,item.description, item.price));
        };

        groceryService.removeGroceryType = function(){

        };

        return groceryService;


    }]);