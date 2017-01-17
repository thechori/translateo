angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
})

.controller('ItemCtrl', function($scope, $http, $ionicModal) {
  $http.get('http://localhost:3000/api/items').then(function(response) {
    //the response from the server is now contained in 'response'
    $scope.items = response.data;
    console.log(response.data);
  }, function(error) {
    //there was an error fetching from the server
    console.log(error);
  });

  $scope.getItems = function() {
    console.log("getItems()");

    $http.get('http://localhost:3000/api/items').then(function(response) {
      //the response from the server is now contained in 'response'
      $scope.items = response.data;
      console.log(response.data);
    }, function(error) {
      //there was an error fetching from the server
      console.log(error);
    });
  };

  $scope.removeItem = function(_id) {
    console.log("removeItem("+_id+")");
    $http.delete('http://localhost:3000/api/items/'+_id).then(function(response) {
      $scope.getItems();
    }, function(err) {
      console.log(err);
    });
  };

  $ionicModal.fromTemplateUrl('./templates/newItemTemplate.html', function(modal) {
    $scope.itemModal = modal;
    console.log($scope);
  }, {
    scope: $scope,
    animation: 'slide-in-up'
  });

  $scope.newItem = function() {
    // Show modal
    console.log("newItem()");
    $scope.itemModal.show();
  };

  $scope.createItem = function(item) {
    $http.post('http://localhost:3000/api/items', {
      english: item.english,
      pinyin: item.pinyin
    }).then(function(response) {
      console.log("successfully POST'd item");
    }, function(err) {
      console.log(err);
    });
  };

  $scope.closeNewItem = function() {
    // document.getByElementId('title')
    $scope.itemModal.hide();
    // Get new data and assign to $scope for refreshing the view
    // $scope.getItems();
  };
})
