
function Responder(){//begin responder object
    
    
    
    //load the onWindowResize event
    this.onWindowResize();
    
    
}//end responder object


/*
 * This function responds to changes in the window size
 */
Responder.prototype.onWindowResize = function(){//begin function
    
    
    $(window).on("resize",function(){//begin function
        
        
        
        var width = $(window).width();
        
        //mobile mode test
        var mobile =  width < 768;
        
        
        
        
        switch(mobile){//begin switch case
            
            case true:
                
                
                
                
                $(".draggable").each(function(){
                    
                    
                    $(this).css("display","inline");
                    
                    
                    
                    
                });
                
                 
                
                break;
            
            
        }//end switch case
        
        
        
        
    });//end function
    
    
};//end function


//create a new responder object
var responder = new Responder();

