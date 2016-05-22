angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('menu.contactDetails', {
    url: '/details',
    views: {
      'tab1': {
        templateUrl: 'templates/contactDetails.html',
        controller: 'contactDetailsCtrl'
      }
    }
  })

  .state('menu.newContact', {
    url: '/newcontact',
    views: {
      'tab3': {
        templateUrl: 'templates/newContact.html',
        controller: 'newContactCtrl'
      }
    }
  })

  .state('menu', {
    url: '/menu',
    templateUrl: 'templates/menu.html',
    abstract:true
  })

  .state('menu.contacts', {
    url: '/contacts',
    views: {
      'tab1': {
        templateUrl: 'templates/contacts.html',
        controller: 'contactsCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/menu/contacts')

  

});