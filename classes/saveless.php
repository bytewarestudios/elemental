<?php
/**
 * Description of saveless
 *
 * @author Larry
 */
class SaveLess {//begin class
    
    /*
     * returns the less variables passed
     * in from a http post method
     * 
     */
    function getLessVariables(){//begin function
        
    
   
       //store the less variables sent by an http post method
       $lessVariables = $_POST["lessvariables"];
       
       //return the values
       return $lessVariables; 
        
    }//end function
    
    /*
     * 
     * saves the less variables to a file
     */
    
    function saveLessVariables($file){//begin function
        
        //save the less variables to file
        file_put_contents($file,$this->getLessVariables());
        
        
    }//end function
    
}//end class

$saveLess = new SaveLess();

$file = "../views/assets/css/editing.less";

$saveLess->saveLessVariables($file);



?>
