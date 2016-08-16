eventsApp.controller('EventController',function($scope,eventData,$log){
    
        $scope.message='Hello There';
        $scope.sortOrder='name';
        eventData.getEvent().$promise.then(
            function successcallback(event){$scope.event = event; $log.warn(event);},
            function errorcallback(response){$log.warn(response);}
        );
    
    
    
    $scope.upVoteSession = function(session){
        session.upVoteCount++;
    };
    
    $scope.downVoteSession = function(session){
        session.upVoteCount--;
    };
});

