angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
})

.controller('FaqCtrl', function($scope) {
  $scope.faqs = [
    { title: 'When does the Fantasy Cricket Game start?', id: 1 },
    { title: 'Do you make changes to the pricing of players on Dream 11?', id: 2 },
    { title: 'What if one of my chosen cricketers do not play in the match?', id: 3 },
    { title: 'How does this application Helpful? ', id: 4 },
    { title: 'Is it mandatory to change my team for future matches?', id: 5 },
    { title: 'What if one of my chosen cricketers do not play in the match?', id: 6 },
    { title: 'How many players are needed to create a team?', id: 7 },
    { title: 'Can I choose players only from one side?', id: 8 },
    { title: 'I’ve spent my entire budget before selecting all 11 players. How do I complete my team?', id: 9 },
    { title: 'When I make changes in the team, how long does it take for the changes to reflect?', id: 10 },
    { title: 'Can I edit my team during the match?', id: 11 },
    { title: 'When do you update the squads for matches on Dream 11?', id: 12 },
    { title: 'How can I see my team’s rank?', id: 13 },
    { title: 'How can I change my team name?', id: 14 },
    { title: 'How do I create multiple teams for the same match?', id: 15 },
    { title: 'How many teams can I create for a single match?', id: 16 },
    { title: 'Can I join the same contest using multiple teams?', id: 17 },
    { title: 'Can I edit my Teams?', id: 18 },
    { title: 'Can I choose which of my teams compete in a contest (Team 1 or Team 2) after joining?', id: 19 },
    { title: 'What is the use of a Captain in my team?', id: 20 }
    


  ];
})

.controller('FaqDetailsCtrl', function($scope, $stateParams) {
  $scope.faqId = $stateParams.faqid;
})

.controller('HomeCtrl', function($scope, $stateParams, $http, $ionicSlideBoxDelegate) {
  $scope.tabitem = 'tab-item active';
  $scope.tabitem1 ='tab-item';

  $scope.doRefresh = function() {
    //setTimeout(function(){$scope.$broadcast('scroll.refreshComplete');}, 2000);
    $scope.getCurrentMatches();
  };

  $scope.getCurrentMatches = function(){
    $http.get('https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20cricket.upcoming_matches&format=json&diagnostics=true&env=store%3A%2F%2F0TxIGQMQbObzvU4Apia0V0&callback=')
     .success(function(newItems) {
      console.log(newItems.query.results.Match);
       $scope.items = newItems.query.results.Match;
     })
     .finally(function() {
       // Stop the ion-refresher from spinning
       $scope.$broadcast('scroll.refreshComplete');
     });    
  };

  $scope.doPredictionRefresh = function(){
    $http.get('http://d11hack.herokuapp.com/matches.json')
     .success(function(newItems) {
       $scope.predictions = newItems;
       localStorage.setItem("predictions", JSON.stringify(newItems))
     })
     .finally(function() {
       // Stop the ion-refresher from spinning
       $scope.$broadcast('scroll.refreshComplete');
     });      
  };

  $scope.predictions = [{"id":5,"title":"South Africa tour of England, 1st Test","starts_at":"2017-07-07T12:27:00.000Z","players":[{"id":34,"match_id":5,"name":"AN Cook","player_type":"Batsman","captain":"","last_match_stats":"","created_at":"2017-07-07T12:30:54.280Z","updated_at":"2017-07-07T12:30:54.280Z"},{"id":35,"match_id":5,"name":"JE Root","player_type":"Batsman","captain":"","last_match_stats":"","created_at":"2017-07-07T12:30:54.283Z","updated_at":"2017-07-07T12:30:54.283Z"},{"id":36,"match_id":5,"name":"BA Stokes","player_type":"All Rounder","captain":"(vc)","last_match_stats":"","created_at":"2017-07-07T12:30:54.285Z","updated_at":"2017-07-07T12:30:54.285Z"},{"id":37,"match_id":5,"name":"D Elgar","player_type":"Batsman","captain":"","last_match_stats":"","created_at":"2017-07-07T12:30:54.287Z","updated_at":"2017-07-07T12:30:54.287Z"},{"id":38,"match_id":5,"name":"HM Amla","player_type":"Batsman","captain":"","last_match_stats":"","created_at":"2017-07-07T12:30:54.289Z","updated_at":"2017-07-07T12:30:54.289Z"},{"id":39,"match_id":5,"name":" Q de Kock","player_type":"Wicket Keeper","captain":"","last_match_stats":"","created_at":"2017-07-07T12:30:54.292Z","updated_at":"2017-07-07T12:30:54.292Z"},{"id":40,"match_id":5,"name":" VD Philander","player_type":"All Rounder","captain":"(c)","last_match_stats":"","created_at":"2017-07-07T12:30:54.294Z","updated_at":"2017-07-07T12:30:54.294Z"},{"id":41,"match_id":5,"name":"KA Maharaj","player_type":"All Rounder","captain":"","last_match_stats":"","created_at":"2017-07-07T12:30:54.296Z","updated_at":"2017-07-07T12:30:54.296Z"},{"id":42,"match_id":5,"name":"K Rabadd","player_type":"Bowler","captain":"","last_match_stats":"","created_at":"2017-07-07T12:30:54.299Z","updated_at":"2017-07-07T12:30:54.299Z"},{"id":43,"match_id":5,"name":"M Morkel","player_type":"Bowler","captain":"","last_match_stats":"","created_at":"2017-07-07T12:30:54.301Z","updated_at":"2017-07-07T12:30:54.301Z"},{"id":44,"match_id":5,"name":"JM Anderson","player_type":"Bowler","captain":"","last_match_stats":"","created_at":"2017-07-07T12:30:54.303Z","updated_at":"2017-07-07T12:30:54.303Z"}],"url":"http://d11hack.herokuapp.com/matches/5.json"}];
  localStorage.setItem("predictions", JSON.stringify($scope.predictions));

  $scope.doCommonRefresh = function(){$ionicSlideBoxDelegate.slide(1);
    console.log($ionicSlideBoxDelegate)
    if($scope.tabitem == 'tab-item active')
      $scope.getCurrentMatches();
    else
      $scope.doPredictionRefresh();  
  };

  $scope.getCurrentMatches();
  $scope.doPredictionRefresh();

$scope.$on("$ionicSlides.sliderInitialized", function(event, data){
  // grab an instance of the slider
  $scope.slider = data.slider;
  console.log($scope.slider)
});  

$scope.$on("$ionicSlides.slideChangeEnd", function(event, data){
  if(data.slider.activeIndex == 0){
    document.getElementById("current-match-btn").className = 'tab-item active';  
    document.getElementById("predictions-match-btn").className = 'tab-item';  
    $scope.tabitem = 'tab-item active';
    $scope.tabitem1 ='tab-item';    
  }else{
    $scope.tabitem = 'tab-item';
    $scope.tabitem1 = 'tab-item active';
    document.getElementById("current-match-btn").className = 'tab-item';  
    document.getElementById("predictions-match-btn").className = 'tab-item active'; 
  }
});

})

.controller('PlaylistCtrl', function($scope, $stateParams) {
})

.controller('PerdictionCtrl', function($scope, $stateParams) {
})

.controller('PerdictionDetailCtrl', function($scope, $stateParams) {
  $scope.predictions = JSON.parse(localStorage.predictions);
  for(var i=0;i<$scope.predictions.length;i++){
    if($scope.predictions[i].id == $stateParams.predictionId){
      $scope.predictionsDetail = $scope.predictions[i];
      break;  
    }
  }
})

.controller('CurrentMatchCtrl', function($scope, $stateParams) {
});
