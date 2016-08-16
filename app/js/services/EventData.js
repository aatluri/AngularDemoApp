eventsApp.factory('eventData',function($resource){
    //declaring the resource by passing the url letting it know to use the id we pass in
    var resource = $resource('/data/event/:id',{id:'@id'});
    return {

            getEvent: function(){
                //call the recource.get method by passing in the id
                 return resource.get({id:1});
              // return $http({method:'GET',url: '/data/event/1'}); 
            },
            save: function(event){
                 event.id=999;
                 return resource.save(event);
            }
            
    };
    
    
    
});