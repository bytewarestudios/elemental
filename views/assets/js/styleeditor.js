    /*
     * container:The the unique id or class of the element to display
     * the css editor within
     * element: is the element or group of elements in which you want to edit their
     * css
     */
    
    function StyleEditor(container,elements){//begin StyleEditor object
    
    
       //store the container parameter locally
       StyleEditor.container = container;
       
       //store the elements to edit css
       StyleEditor.elements = elements;
       
       //create an array of classes,ids, or elements that you want to exclude
       //omit the . for classes and the # for id's
       StyleEditor.blackList = ["edit-button"];          
       
    
    
    
    
    }//end StyleEditor
    
    StyleEditor.prototype.getElementStyles = function(selector){//begin fucntion
        
        
        $(selector).on("click",function(){//begin on click function
            
            //array to hold all of the less code
            var less = [];
            
            //array to hold codeblocks
            var codeblocks = [];
            
            //array to hold the lessVariables
            var lessVariables = [];
            
            var cssEditor = "#cssEditor";
            
            
           
        
        //add the opening variable tags
        lessVariables.push("/*<variables>*/\n");
        
        $(StyleEditor.elements).each(function(){//begin each function
            
                       
            //loop through the blackList array
            for(var i= 0; i < StyleEditor.blackList.length; i++){//begin for loop
                
//if the class,id, or tagName is not stored in the blackListArray
if(StyleEditor.blackList.indexOf($(this).attr("class")) === -1 && StyleEditor.blackList.indexOf($(this).attr("id")) === -1 && StyleEditor.blackList.indexOf($(this).prop("tagName").toUpperCase() === -1)){//begin if then
            
            
            
                        
            //create an array with the computed styles
             var cssProps = window.getComputedStyle($(this)[i]);
             
           
            
            //loop through and add the properties
            for(var j=0; j < cssProps.length; j++){//begin for loop
                
         //add the tagName prefix
         //lessVariables.push("@" + $(this).prop("tagName").toLowerCase());
                
      //add the css properties with the // line delimiter
      lessVariables.push("@" + cssProps[j] + ":" + $(this).css(cssProps[j]) + ";//\n");                   
                                
            }//end for loop
            
            
            //todo
 //add the form to edit the css to the cssEditor div
 $(cssEditor).html(cssEditForm(lessVariables.join("")));
            
            
            
            
            //add the elements tagName and the opening css block {
            codeblocks.push($(this).prop("tagName") + "{\n");
            
            //loop through and add the properties
            for(var j=0; j < cssProps.length; j++){//begin for loop
                
                
                
 //add the css block properties along with the variable values
 codeblocks.push(cssProps[j] + ":@" + $(this).prop("tagName").toLowerCase() + "-" + cssProps[j] + ";\n");                   
                
                
                                
            }//end for loop
            
            //add the closing css block }
            codeblocks.push("}\n\n\n");
            
            
           
               
        
        
               }//end if then
               
                
                
                
            
           
              //if the tagName has a class and doesn't contain a blacklisted item
              if($($(this).prop("tagName")).attr("class") !== undefined && StyleEditor.blackList.indexOf($(this).attr("class")) === -1 && StyleEditor.blackList.indexOf($(this).attr("id")) === -1 && StyleEditor.blackList.indexOf($(this).prop("tagName").toUpperCase() === -1)){//begin if then
                  
                  
                  
                 codeblocks.push("." + $(this).attr("class") + "\n{\n");
                 
            //loop through and add the properties for the class
            for(var j=0; j < cssProps.length; j++){//begin for loop
                
                
                
 //add the css block properties for the class along with the variable values
 codeblocks.push(cssProps[j] + ":@" + $(this).attr("class").toLowerCase() + "-" + cssProps[j] + ";\n");                   
                
                
                                
            }//end for loop
            
            //add the closing css block }
            codeblocks.push("}\n\n\n");
            
                 
           
                 
                 
            }//end if then
           
             //if the tagName has an id
              if($($(this).prop("tagName")).attr("id") !== undefined){//begin if then
                  
                                    
                                  
                 codeblocks.push("#" + $(this).attr("id") + "\n{\n");
                 
            //loop through and add the properties for the id
            for(var j=0; j < cssProps.length; j++){//begin for loop
                
                
                
 //add the css block properties for the class along with the variable values
 codeblocks.push(cssProps[j] + ":@" + $(this).attr("id").toLowerCase() + "-" + cssProps[j] + ";\n");                   
                
                
                                
            }//end for loop
            
            //add the closing css block }
            codeblocks.push("}\n\n\n");
                 
                 
                 
                 
                 //exit the loop because there should be only one unique id                 
                 break;
                 
              }//end if then
           
            
           
              
               
              
            
            }//end for loop
            
            
              
                          
        });//end each function
        
        //add the closing variables tag
        lessVariables.push("/*<variables>*/\n\n\n");
        
        //add the lessVariables to the less array
        less.push(lessVariables.join(""));
        
        //add the codeblocks to the less array
        less.push(codeblocks.join(""));
        
        
        
        //call the saveLessVariables Function
        saveLessVariables(less.join(""));
            
                       
        
        });//end on click function
        
    };//end function
    
    
    /*
     * 
     * this function will send the less variables to php file for processing
     */
    function saveLessVariables(variables){//begin function
        
          //store the variables sent
          var data = variables;
                    
          var url = "classes/saveless.php";
          
          //ajax function
          $.ajax({
              
             type:"POST",
             url:url,
             data:"lessvariables=" + data,
             success:function(data){//begin success function
                 
                 
                 //debug
                 //alert(data);
                 
                 
             }//end success
          });//end ajax function
             
        
        
        
        
    }//end function
    
    /*
     * 
     * This function will get all of the posible element tag names,#ids, and classes
     * currently present in the html object passed as a parameter and return an array hold
     * the values
     */
    
    StyleEditor.prototype.selectorsToArray = function(container){//begin function
        
        var selectors = [];
        
        $(container).each(function(){//begin each function
            
            //if the tag doesn't contain an edit-button class
            if($(this).attr("class") !== "edit-button"){//begin if then
            
            //add the tagName
            selectors.push($(this).prop("tagName"));
            
            }//end if then
            
            //add the id if the element has one
            if($(this).attr("id") !== undefined){//begin if then
                
            //add the id
            selectors.push("#" + $(this).attr("id"));
                
            }//end if then
            
            //add the class if the element has one and it is not equal to edit-button
            if($(this).attr("class") !== undefined){//begin if then
                
            //add the class
            selectors.push("." +$(this).attr("class"));
                
            }//end if then
            
            
            
            
        });//end each function
        
        
        
        //return the selectors array
        return selectors;
        
        
    };//end 
    
    /*
     * 
     * This event will display changes made to the #cssEditor css
     * code.
     */
    
    StyleEditor.prototype.cssEditorOnChangeEvent = function(){//begin function
        
        $("#cssEditor").on("change",function(){//begin 
        
        //todo:finish css editor
        
           
                //get the css inside of the textarea
                var css = $("#cssEditor").val();
    
                //call updateStyle to update the css 
                updateStyle(css);

            
                      
        });//end event
        
    };//end function
    
    
    function updateStyle(css) {//begin function
        
        //array to hold the altered or new css
        var newCSS = [];
                
        //array to hold the css blocks split the ending } bracket
        var cssBlocks = css.trim().split("}");
        
        //loop through the cssBlocks array
        for(var i=0; i < cssBlocks.length; i++){//begin for loop
            
            //if the index is not equal to the array's length minus one
            if(i !== cssBlocks.length - 1){//begin if then
            
            
            //add the css code with .preview container class appending to it
            newCSS.push(".preview-container " + cssBlocks[i].trim());
            
            
            }//end if then
            
        }//end for loop
        
        
        
        //create a string of the css from the array adding the } back to the end of
        //each index
        var finalCSS = newCSS.join("\n}\n") + "\n}\n";
        
        //debug
        //alert(finalCSS);
       
    //if there is not a style class
    if(!$("style").hasClass("style")){//begin if then
        
     //todo: figure out how to apply the style only to form
    
    //append a style tag to the head
    $("head").append("<style class='style' type='text/css'></style>");
    
    
    }//end if then
    
    //update the style tag
    $(".style").html(finalCSS);
    
        
}//end function
    
    
    /*
     * 
     * converts all css properties from computed windows styles to an 
     * array
     */   
    
    StyleEditor.prototype.cssPropsToArray = function(){//begin function
        
        
            //newArray to hold the values of the cssProps object
            var newArray = [];
                        
            //create an array with the computed styles
             var cssProps = window.getComputedStyle($("form")[0]);
             
             //loop through the cssProps
             for(var i=0; i < cssProps.length; i++){//begin for loop
                 
                 //add the properties to the newArray
                 newArray.push(cssProps[i]);
                 
             }//end for loop
            
             
             //return the array
             return newArray;
             
           
       
    };//end function
    
    function cssEditForm(input){//begin function
        
        //store the variables in between the /*<variables>*/ tags
        var source = input.split("/*<variables>*/");
        
        //store the less variables
        var variables = source[1];
        
        
        
        //store each variable in an array
        var variablesArray = variables.split("//");
        
        //remove the last index (whitespace)
        variablesArray.pop();
        
        
        
        //array to hold the edit form code
        var editorForm = [];
        
        
        
 //add the opening form tag
 editorForm.push("<form id= 'editor-form' name = 'editor-form' type='post' action = '' >\n");
        
         
        //loop through the variablesArray length
        for(var i = 0; i < variablesArray.length; i++){//begin for loop
            
      //add the label
      editorForm.push("<label for='" + extractVariable(variablesArray[i]) + "'>" + 
          extractVariable(variablesArray[i]) + " </label>");
      
      
      editorForm.push("<input id = '" + extractVariable(variablesArray[i]) + "'");
      editorForm.push(" name = '" + extractVariable(variablesArray[i]) + "'");
      editorForm.push(" value = '" + extractValue(variablesArray[i]));
              
              //if the variable containts the string Color
              if(extractVariable(variablesArray[i]).search("Color") !== -1){//begin if then else
                  
                  //add the color class and close the input element
                  editorForm.push("' class = 'color' ><br>\n");
              }
              else{
                  
                    //just close the input element
                    editorForm.push("' ><br>\n");
           
              }//end if then else   
            
        }//end for  loop
        
        
        //add the update submit button
        editorForm.push("<input class='editor-button' type= 'submit' id='update' value = 'update' name='update'>\n");
        
//add the closing form tag
editorForm.push("</form>");
       
       
        
       
       return editorForm.join("");
       
       
        
        
    }//end function
    
    
    
  StyleEditor.prototype.extractVariable = function(input){//begin function
    
    //find the string in between A and :
    var variable = input.match("@(.*):");

    //return the match
    return variable[1];
    
    
    
};//end function

    function extractValue(input){//begin function
    
    //find the string in between : and ;
    var value = input.match(":(.*);");

    //return the match removing the #
    return value[1].replace("#","");
    
    
    
}//end function

    
    
    
    
    
    
    
    
    
