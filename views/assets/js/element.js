
function Element(){//begin Element object constructor
    
    
    
    
    
}//end Element object constructor


/*
 * This function will render the html label element
 */
Element.prototype.label = function(selector){
    
    
    
    //get the current number of label elements
            var numOfLabels = $(".elemental-form label").length;
            
           
                          
               //add the label to the .elemental-form
               $(selector).append("<b class='edit-button'>Edit </b><label id = 'label" 
                                  + (numOfLabels + 1) + "' for='input'>Label" + (numOfLabels + 1) + "</label>\n"
                          );
                          
    
};



Element.prototype.inputtext = function(selector){

 //get the current number of input text elements
 var numOfTextBoxes = $(".elemental-form input[type=text]").length;
                          
  //add the input text to the .elemental-form
  $(selector).append("<b class='edit-button'>Edit </b><input type='text' name = 'input-text" + (numOfTextBoxes + 1) +  "' id ='input-text" + (numOfTextBoxes + 1) +  "' value='' >\n");
                          
};

Element.prototype.inputpassword = function(selector){
 
         //get the current number of input text password elements
         var numOfPasswordBoxes= $(".elemental-form input[type=password]").length;
                          
                          //add the input password text element to the .elemental-form
                          $(selector).append("<b class='edit-button'>Edit </b><input type='password' name = 'input-text" + (numOfPasswordBoxes + 1) +  "' id ='input-password" + (numOfPasswordBoxes + 1) +  "' value='' >\n");
                          

};

Element.prototype.submitbutton = function(selector){
    
    
        //get the current number of submit button elements
                      var numOfSubmitButtons = $(".elemental-form input[type=submit]").length;
                          
   //add the submit button to the .elemental-form
   $(selector).append("<b class='edit-button'>Edit </b><input type='submit' name = 'submit-button" + (numOfSubmitButtons + 1) +  "' id ='submit-button" + (numOfSubmitButtons + 1) +  "' value='submit' >\n");
    
};

Element.prototype.textarea = function(selector){
    
    
    //get the current number of textarea elements
    var numOfTextAreas = $(".elemental-form textarea").length;
                          
    //add the textarea to the .elemental-form
    $(selector).append("<b class='edit-button'>Edit </b><textarea name = 'text-area" + (numOfTextAreas + 1) +  "' id ='textarea" + (numOfTextAreas + 1) + "' ></textarea>\n");
    
};

Element.prototype.button = function(selector){
    
    
    //get the current number of button elements
    var numOfButtons = $(".elemental-form input[type=button]").length;
                          
 //add the button to the .elemental-form
 $(selector).append("<b class='edit-button'>Edit </b><input type='button' name = 'button" + (numOfButtons + 1) +  "' id='button" + (numOfButtons + 1) +  "' value = 'button' />\n");
    
    
    
};


Element.prototype.checkbox = function(selector){


 //get the current number of checkbox elements
 var numOfCheckBoxes = $(".elemental-form input[type=checkbox]").length;
                          
   //add the checkbox to the .elemental-form
   $(selector).append("<b class='edit-button'>Edit </b><input type='checkbox' name = 'check-box" + (numOfCheckBoxes + 1) +  "' id='checkbox" + (numOfCheckBoxes + 1) +  "' name='checkbox' value='check-box' />\n");
      
};

Element.prototype.radiobutton = function(selector){

//get the current number of radio box buttons elements
var numOfRadioButtons = $(".elemental-form input[type=radio]").length;
                          
 //add the radio box to the .elemental-form
 $(selector).append("<b class='edit-button'>Edit </b><input type='radio' name = 'radio" + (numOfRadioButtons + 1) +  "' id = 'radio-button" + (numOfRadioButtons + 1) +  "' value='radio-box' />\n");
                        
                        
                        
};

Element.prototype.inputfile = function(selector){
    
    
    //get the current number of input file elements
    var numOfFileInputs = $(".elemental-form input[type=file]").length;
                          
     //add the file input to the .elemental-form
     $(selector).append("<b class='edit-button'>Edit </b><input type='file' name = 'input-file" + (numOfFileInputs + 1) +  "' id = 'input-file" + (numOfFileInputs + 1) +  "' value='' />\n");
    
    
};

Element.prototype.linebreak = function(selector){
    

 //add the break tag to the .elemental-form
 $(selector).append("<br>\n");
 
 
};

Element.prototype.dropdownlist = function(selector){

//get the current number of drop down lists elements
var numOfDropDownLists = $(".elemental-form select").length;
                          
                          
                          
                          
 //add the drop down list to the .elemental-form
 $(selector).append("<b class='edit-button'>Edit </b><select name = 'list" + (numOfDropDownLists + 1) +  "' id = 'drop-down-list" + (numOfDropDownLists + 1) +  "' >\n<option>item 1</option>\n<option>item 2</option>\n</select>\n");



};