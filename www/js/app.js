// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers'])

.run(function($ionicPlatform) {
  //ionic.Platform.setPlatform('ios');
  //ionic.ConfigProvider.views.transition('none');
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)

    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

  .state('app.search', {
    url: '/search',
    views: {
      'menuContent': {
        templateUrl: 'templates/search.html'
      }
    }
  })

  .state('app.browse', {
      url: '/browse',
      views: {
        'menuContent': {
          templateUrl: 'templates/browse.html'
        }
      }
    })
    .state('app.home', {
      url: '/home',
      views: {
        'menuContent': {
          templateUrl: 'templates/home.html',
          controller: 'HomeCtrl'
        }
      }
    })

  .state('app.single', {
    url: '/playlists/:playlistId',
    views: {
      'menuContent': {
        templateUrl: 'templates/playlist.html',
        controller: 'PlaylistCtrl'
      }
    }
  })
  
  .state('app.predictions', {
    url: '/predictions',
    views: {
      'menuContent': {
        templateUrl: 'templates/predictions.html',
        controller: 'PerdictionCtrl'
      }
    }
  })


  .state('app.predictionsdetails', {
    url: '/predictions/:predictionId',
    views: {
      'menuContent': {
        templateUrl: 'templates/predictionsdetails.html',
        controller: 'PerdictionDetailCtrl'
      }
    }
  })
  
  .state('app.faq', {
    url: '/faq',
    views: {
      'menuContent': {
        templateUrl: 'templates/faqlist.html',
        controller: 'FaqCtrl'
      }
    }
  })  

   .state('app.faqdetails', {
    url: '/faqdetails/:faqid',
    views: {
      'menuContent': {
        templateUrl: 'templates/faqdetails.html',
        controller: 'FaqDetailsCtrl'
      }
    }
  }) 
  
  .state('app.current_match', {
    url: '/current_match',
    views: {
      'menuContent': {
        templateUrl: 'templates/current_match.html',
        controller: 'CurrentMatchCtrl'
      }
    }
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/home');
});
