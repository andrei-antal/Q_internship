##PHASE 1 - prepareing work environment##

0. Have node and npm installed

1. Install Ionic framework 

  ```bash
  $ sudo npm install -g ionic
  ```
  
2. Install Cordova  

  ```bash
  $ sudo npm install -g cordova
  ```

##PHASE 2 - creating a new project ##

1. Navigate to work folder  

  ```bash
  $ cd [work_folder]
  ```
  
2. Create an ionic blank project  

  ```bash
  $ ionic start myAwesomeApp
  ```
3. Navigate to app folder  

  ```bash
  $ cd myAwesomeApp
  ```
  
4. Start the ionic server  

  ```bash
  $ ionic serve
  ```
5. Open Chrome and folow [http://localhost:8100](http://localhost:8100) to view your app  

6. Explore project structure  

  ```bash
  ├── bower.json     // bower dependencies
  ├── config.xml     // cordova configuration
  ├── gulpfile.js    // gulp tasks
  ├── ionic.project  // ionic configuration
  ├── package.json   // node dependencies
  ├── hooks          // custom cordova hooks to execute on specific commands
  ├── platforms      // iOS/Android specific builds will reside here
  ├── plugins        // where your cordova/ionic plugins will be installed
  ├── scss           // scss code, which will output to www/css/
  └── www            // application - JS code and libs, CSS, images, etc.
      ├── css             
      │    └── style.css  // main style file for app
      ├── img             // app image assets
      ├── js              // scripts folder - will contain controllers, services, partial views etc.
      │    └── app.js     // angular init file
      ├── lib             // lybraries placeholder folder
      └── index.html      // application entry point
  ````

7. Create the following structure in the ```js``` folder (NOTE: do not remove app.js) 

```bash
  └── js     
      ├── controllers             
      ├── partials        
      ├── resources        
      └── services        
      
```


##PHASE 3 - Growcery list app v1.0 - List view##

###USEFUL LINKS###

*  [Ionic CSS components](http://ionicframework.com/docs/components/)
*  [Ionic JS directives](http://ionicframework.com/docs/api/)
*  [Ionicons](http://ionicons.com/)


1. In ```index.html``` :  
  a. empty ```<body>``` tag  
  b. create an ```<ion-pane>``` element with an ```<ion-header-bar>``` and ```<ion-content>``` inside
  c. inside the header create a title (My shopping list) and a button (New Shopping List)
  d. in the content tag, create ```<ion-list>``` with the following components:
    * an input field and a button to add entries (in the same item element) - [inset form elements](http://ionicframework.com/docs/components/#item-input-inset)
    * a title for a list (as an item-divider) that will also contain the number of items in the list
    * the next elements are ```<ion-item>```'s as grocery list entries (fill with mock data for now)
2. Create a controller for the grocery list (named ```GroceryListCtrl``` in ```controllers/GroceryListController.js```). Add it as a ```ng-controller``` for the ```<ion-pane>```. The controller will contain on the ```$scope``` the following:
	* a string variable that holds the grocery list that will be added
	* an array of items (empty in the begining) - format: ```{name : "grocery name"}```
	* methods to add items (at the end of the list), remove items (at an index) from the list as well as empty the list; 
3. in ```index.html``` remove the statically created entries and replace it with one ```<ion-item>``` that uses ```ng-repeat``` to generate the list from the array of items in the ```GroceryListCtrl```. Use one-way binding (```{{...}}```) to display the name of the grocery
4. inside the ```<ion-item>``` add an ```<ion-option-button>``` that will delete the respective item list entry; attach the corresponding action on ```ng-click``` 
5. create a 2-way binging relationship (```ng-model```) in the form input in order to add items to the list 
6. attach an action to add items in the list form
7. attach an action to the button in ```<ion-header-bar>``` that will empty the list

##PHASE 4 - Growcery list app v2.0 - Master detail##

###USEFUL LINKS###

*  [AngularJS ui-router](https://github.com/angular-ui/ui-router)


1. In ```index.html``` :  
  a. copy the html inside the ```<ion-pane>``` into a new partial html (main list partial)
  b. place an ```<ion-nav-view >``` in the pane
2. In ```app.js```
  * create 3 states for ```$stateProvider``` : ```mainList```, ```typeList```, ```groceryDetail```; ```groceryDetail``` should take an ```id``` parameter
  * set ```$urlRouterProvider``` to go ti ```\``` if no route is matched
3. Create 3 partials (root element is ```<ion-view>```):
  * main list
    * [header](http://ionicframework.com/docs/api/directive/ionHeaderBar/) with "add item" button
    * list with added grocery items with a [divider](http://ionicframework.com/docs/components/#item-dividers) header for item list count
    * every item should have a delete button ([<ion-option-button>](http://ionicframework.com/docs/api/directive/ionOptionButton/)) and a badge ([list item badge](http://ionicframework.com/docs/components/#item-icons)) with number of times an item has been addded to the list
    * a [footer](http://ionicframework.com/docs/api/directive/ionFooterBar/) displaying total price of grocery list
  * grocery types 
    * header with "back" and "add new" buttons; use ```$state.go()``` for navigation
    * list for grocery types displayng the names; click on list item (```ng-click```) adds it to main list
    * an ```<ion-option-button>``` EDIT button for each list item; clicking on it takes us to grocery detail
  * grocery type detail
    * header with "back" button
    * 3 input fields for name, description and price (use [forms](http://ionicframework.com/docs/components/#forms))
    * save button
  * navigation between the partials:  
    ```
    MAIN LIST <--- (add item || clickitem/back) ---> GROCERY TYPES <--- (add/edit type || save type/back  ) ---> GROCERY TYPE DETAIL
    ```
4. Create a Grocery service that serves a list of grocery types to be added to grocery list
  * create a GroceryType object; the grocery item has the following structure:  
  ``` {
        name : string,
        description : string,
        price : number,
        id : integer, (will increment each time an item is added)
      }```
  * create a mock array of grocery items, each time instaintiating a GroceryType object
  * add methods to 
    * get full grocery type list
    * get a single item (by id)
    * add a new item in the list
5. Create controllers for the partials:
  * root controller (```ListManagementController```)
    * contains the main grocery list, and method to add a new item
    * add it as ```ng-controller``` for the the ```<ion-pane>``` in ```index.html```
  * main list (```GroceryListCtrl```)
    * methods to delete an item list and calculate total cost
    * click handler for add new item -> change the state to grocery type
  * grocery types (```GroceryTypeListCtrl```)
    * get grocerie types list from service
    * methods to add to main list, edit type and make a new type (by going to grocery type state, and passing the selected id, if it is the case)
  * grocery type detail (```GroceryDetailCtrl```)
    * get grocery type details (if id is present in ```$stateParams```)
    * methods save details and go back to type list

##PHASE 5 - Growcery list app v3.0 - Firebase connection##   

1. create firebase account [here](https://www.firebase.com/signup/)
2. create firebase app from [dashboard](https://www.firebase.com/account/) (name it qintern-your_full_name)
3. import json file in the resources folder in version 3 of the app
4. instal angularfire: ```bower install firebase angularfire```
5. inject firebase service: ```var app = angular.module('GroceryListApp', ['ionic','firebase'])```
6. inject ```$firebase``` in GroceryService
7. create a new reference for firebase app ```var ref = new Firebase("https://wbdv-andrei.firebaseio.com/");```
8. create a sync conection ```var sync = $firebase(ref);```
9. get your data ```sync.$asArray();```
10. update the edit and add methods:
  * ```$add```
  * ```.set()```
  