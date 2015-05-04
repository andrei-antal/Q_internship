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

7. Create the following structure in the '''js''' folder (NOTE: do not remove app.js) 

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
5. create a 2-way binging relationship in the form input in order to add items to the list 
6. attach an action to add items in the list form
7. attach an action to the button in ```<ion-header-bar>``` that will empty the list
  