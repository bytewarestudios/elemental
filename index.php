<?php

/**
 * Description of index
 *
 * @author Larry J Lane
 */
class Index {//begin class
    
    public function __construct() {//begin constructor
        
        $this->run();
        
    }//end constructor
    
    private function run(){//begin function
        
        //load the page header
        $this->header();
        
        //load the page body
        $this->body();
        
        
        //load the javascript
        $this->loadJS();
        
        
        //load the page footer
        $this->footer();
       
        
    }//end function
    
    private function header(){//begin function
        
        require "views/header_view.php";
        
        
    }//end function
    
    private function body(){//begin function
        
        require "views/body_view.php";
        
        
    }//end function
    
    private function footer(){//begin function
        
        require "views/footer_view.php";
        
        
    }//end function
    
    
    private function loadJS(){//begin function
        
        //intialize the $scripts variable
        $scripts = "";
        
        //append the scripts to the scripts variable
        $scripts .= "<script src='views/assets/js/jquery.js'></script>";
        $scripts .= "<script src='views/assets/js/jquery-ui.js'></script>";
        $scripts .= "<script src='views/assets/js/jquery.ui.touch-punch.min.js'></script>";
        $scripts .= "<script src='views/assets/js/less.js'></script>";
        $scripts .= "<script type='text/javascript' src='views/assets/js/styleeditor.js'></script>";
        $scripts .= "<script src='views/assets/js/element.js'></script>";
        $scripts .= "<script src='views/assets/js/elemental-main.js'></script>";
        $scripts .= "<script src='views/assets/js/responder.js'></script>";
        
        
        
        //echo the scritps variable
        echo $scripts;
        
        
        
    }//end function
    
    
    
    
   
    
   
    
   
    
    
    
}//end class

 //create instance of Index Class
 $elemental = new Index();

?>
