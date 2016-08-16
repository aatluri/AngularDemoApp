eventsApp.controller('EditEventController',function EditEventController($scope,eventData,$log){
   
    $scope.saveEvent = function(event,newEventForm){
        console.log(newEventForm);
        if(newEventForm.$valid){
            eventData.save(event)
            .$promise
            .then(function(response){$log.info('success',response)})
            .catch(function(response){$log.error('failure',response)});
        }
        
        
    };
    
    $scope.cancelEdit = function(){
        window.location = "/EventDetails.html";
    };
    
    
    
    
    
});