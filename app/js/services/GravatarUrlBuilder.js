eventsApp.factory('gravatarUrlBuilder',function(){
    
    return {
        
           buildGravatarUrl: function(email){
               var defaultGravatarUrl = "http://www.gravatar.com/avatar/000?s=200";

                var regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                if (!regex.test(email))
                    return defaultGravatarUrl;

                return 'http://www.gravatar.com/avatar/' + '1140f8befe85a3dd8825e704ec2ad309';
               
           } 
        
    };
    
    
    
    
    
});