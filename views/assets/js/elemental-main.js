jQuery(document).ready(function($){//begin document ready function call
//place needed javascript for the plugin elements inside this function call


 

    
          //begin Elemetal object
          function Elemental(){//begin Elemental Constructor
              
          
                            
                           
             //class member variables declared below
              
             //set the canDelete variable to "off" initially
             Elemental.canDelete = "off";
             
             //set the form container
             Elemental.formContainer = $(".preview-container").find("form");
             
             //set the edit menu container
             Elemental.editMenuContainer = $("#elemental-edit-menu");
             
             
             
             
             
             //end declaration of class member variables
             
             
     //create a new element object so you can use it in the Elemental object
     Elemental.element = new Element();
              
     //create a new style Editor Object
     Elemental.styleEditor = new StyleEditor("#cssEditor",".preview-container *");
    
    
         //call the tabs function
         $("#tabs").tabs({active:4});
    
             
             
             //make the .draggable elements non selectable
              $(".draggable").attr("unselectable","on")
              .css("user-select","none")
              .on("selectstart",false);
             
                          
                            
              //make .draggable class draggable
              $(".draggable").draggable({helper:"clone"});
              
              
              //load the cssEditor on change event
              Elemental.styleEditor.cssEditorOnChangeEvent();
              
              
              //load the editButtonOnClickEvent
              this.editButtonOnClickEvent();
              
              //load the editButtonCloseOnClickEvent
              this.editButtonCloseOnClickEvent();
              
              //load the editFormPropertiesOnClickEvent
              this.editFormPropertiesOnClickEvent();
              
              //load the hideElementEditButtonsOnClickEvent
              this.hideElementEditButtonsOnClickEvent();
              
              //load the showElementEditButtonsOnClickEvent
              this.showElementEditButtonsOnClickEvent();
              
              //load the showLineBreaksOnClickEvent
              this.showLineBreaksOnClickEvent();
              
              //load the hideLineBreaksOnClickEvent
              this.hideLineBreaksOnClickEvent();
              
              //load the eraserButtonOnClickEvent
              this.eraserButtonOnClickEvent();
              
              
              //load the getHTMLOnClickEvent
              this.getHTMLOnClickEvent();              
              
              //load the getPHPOnClickEvent
              this.getPHPOnClickEvent();
              
              //load the exportOnClickEvent
              this.exportOnClickEvent();
              
              //load the Style Editor object getElementStyles function
              Elemental.styleEditor.getElementStyles("#get-css");
              
                 
              
              //load the updateFormMethodOnChangeEvent
              this.updateFormMethodOnChangeEvent();
              
              //load the updateElementOnChangeEvent
              this.updateElementOnChangeEvent();              
              
              
              //load the updateClassOnChangeEvent
              this.updateClassOnChangeEvent();
              
              //load the updateIDOnChangeEvent
              this.updateIDOnChangeEvent();
              
              //load the updateNameOnChangeEvent
              this.updateNameOnChangeEvent();
              
              //load the cssSelectorOnChangeEvent
              this.cssSelectorOnChangeEvent();
                            
              //load the dragStart Event
              this.dragStartEvent();
              
              //load the dropEvent
              this.dropEvent();
              
              
              
              
              
              /***additional start up actions below***/
              
            //invoke the click event for the edit-form-properties
            //button to load the edit form properties menu
            //on start up 
            //$("#edit-form-properties").click();
             


              
          }//end Elemental constructor
          
          
          /**************Begin Event Declarations**************************************/
          
          
          
          /*
           * 
           * Displays the css
           */
          
          Elemental.prototype.exportOnClickEvent = function(){//begin event
              
          $("#export").on("click",function(){//begin event
                  
                  //todo:add features
        
          
              });//end event
              
          };//end event
          
          /*
           * 
           * Displays the php to capture the form data submitted
           */
          
          Elemental.prototype.getPHPOnClickEvent = function(){//begin event
              
              $("#get-php").on("click",function(){//begin event
                  
                  //array to hold http variables
                  var httpVariables = [];
                  
                  //array to hold php code
                  var phpCode = [];
                  
                  //get the forms metthod attribute
                  var formMethod =  $(".preview-container form").attr("method").toUpperCase();
                  
                  
                  
                  
                  //loop through the form elements
                  $(".preview-container form *").each(function(){//begin each
                      
                      //if the elements name attribute is not undefined
                      if($(this).attr("name") !== undefined){//begin if then
                      
                      //append the name value to the the httpVariables array
                      httpVariables.push($(this).attr("name"));
                      
                      }//end if then
                      
                      
                      
                  });//end each
                  
                  //append the opening php tag
                  phpCode.push("<?php\n\n");
                  
                  
                  //if the form name attribute is not equal to undefined
                  if($(Elemental.formContainer).attr("name") !== undefined){//begin if then
                      
                    
                    
      //store the php variable containing the submitted form name as a httpvariable     
      phpCode.push("$" + $(Elemental.formContainer).attr("name") + "Form = $_" + formMethod + "['" + $(Elemental.formContainer).attr("name") + "'];");
                      
                  }//end if then         
                  
                  
                  //loop through the httpVariables array
                  for(var i = 0; i < httpVariables.length ; i++){//begin for loop
                   
      //store the php variables assigning the httpVariables as their values               
      phpCode.push("$" + httpVariables[i] + " = $_" + formMethod + "['" + httpVariables[i] + "'];");
      
      
                  }//end for loop
                  
                  
                  
                  //append the closing php tag
                  phpCode.push("\n\n?>");
                  
                  //show the php code
                  $("#show-code").val(phpCode.join("\n"));
                  
                   
                  
              });//end event
              
          };//end event
                 
          
          
          
          /*
           * 
           * Displays the html
           */
          
          Elemental.prototype.getHTMLOnClickEvent = function(){//begin event
              
              $("#get-html").on("click",function(){//begin event
                  
                  
                 
                 //get the html of the form
                 var getHTML = $(Elemental.formContainer)[0].outerHTML;                     
                
                 
                 //append the unfiltered html to the hidden #code element
                 $("#code").html(getHTML);
                 
                 
                 //remove the .edit-button class elements from the #hidden-row
                 $("#code .edit-button").remove();
                 
                 
                 
   
                 //place the filtered code in the #show-code textarea
                 $("#show-code").val($("#code").html());
                  
                  
              });//end event
              
          };//end event
          
          Elemental.prototype.editFormPropertiesOnClickEvent = function(){//begin event
                  $("#edit-form-properties").on("click",function(){//begin event
                      
                   //invoke the click function for #tabs-4  button
                   //Edit Elements tab
                   $("#ui-id-4").click();
                  
                  //set the Elemental Tag Property to form
                  Elemental.tag = "FORM";
                  
                  //set the object being edited to the formContainer
                  Elemental.editing = Elemental.formContainer;
                  
                                                
                  //array to hold the editForm html
                  var editForm  = [];
                  
                  editForm.push("<form>");
                  
                  
                  //begin adding the input element to change the Form's name
                  editForm.push("<label for = 'label-text'>Form Name </label>");
                  editForm.push("<input class = '" +
                          "update-name' type='text' value='");
                  editForm.push($(Elemental.formContainer).attr("name"));
                  editForm.push("'>");
                  //end adding the input element
                  
                  editForm.push("<br>");
                  
                  //begin adding the input element to change the form method Get or Post
                  editForm.push("<label for = 'label-text'>Form Method </label>");
                  editForm.push("<select class = '" +
                          "update-method' >");
                  editForm.push("<option>POST</option>");
                  editForm.push("<option>GET</option>");
                  editForm.push("</select>");
                  //end adding the input element 
                                   
                  editForm.push("<br>");
                  
                  //begin adding the input element to change the forms action attribute
                  editForm.push("<label for = 'label-text'>Form Action</label>");
                  editForm.push("<input class = '" +
                          "update-element' type='text' value='");
                  editForm.push($(Elemental.formContainer).attr("action"));
                  editForm.push("'>");
                  //end adding the input element 
                                   
                  editForm.push("<br>");
                  
                  //begin adding the input element to edit or change the form's classes
                  editForm.push("<label for = 'input-text-class'>Form Classes </label>");
                  editForm.push("<input class = '" +
                          "update-classes' type='text' value='");
                  editForm.push($(Elemental.formContainer).attr("class"));
                  editForm.push("'>");
                  //end adding the input element to edit or change the form's classes
                  
                  editForm.push("<br>");
                  
                  //begin adding the input element to edit or change the label's id
                  editForm.push("<label for = 'input-text-id'>Form ID </label>");
                  editForm.push("<input class = '" +
                          "update-id' type='text' value='");
                  editForm.push($(Elemental.formContainer).attr("id"));
                  editForm.push("'>");
                  //end adding the input element to edit or change the label's id
                  
                  
                  
                  
                  editForm.push("<br>");
                  editForm.push("<br>");
                  
                  editForm.push("</form>");
                  
                  
              //display edit menu
              $("#elemental-edit-menu").html(editForm.join(""));
              
              //set the .update-method to the method attribute value of the form
              $(".update-method").val($(Elemental.formContainer).attr("method"));
              
              //append the edit form close button
              $("#elemental-edit-menu form").append("<b id='close-edit-form-button'>Close</b>");
              
              //add the edit menu title
               $("<h3 id='edit-menu-title'>" + Elemental.tag + " Properties</h3>").insertBefore("#elemental-edit-menu form");
                  
                  
              });//end event
              
          };//end event
          
          
          /*
           * 
           * This function will hide the line break markers
           */
          
           Elemental.prototype.hideLineBreaksOnClickEvent = function(){//begin event              
              
              
              $("#hide-line-breaks").on("click",function(){//begin event
                  
                 
                  $(".break-tag-marker").each(function(){//begin each function
                  
                  //remove the break tag markers
                  $(this).remove();
                      
                  });//end each function
                  
                  
              });//end event        
          };//end event
          
          /*
           * This function will show all of the <br> tags on click
           * 
           * 
           */   
          
          Elemental.prototype.showLineBreaksOnClickEvent = function(){//begin event              
              
              
              $("#show-line-breaks").on("click",function(){//begin event
                                   
                  $(".preview-container form br").each(function(){//begin each function
                      
                      
                     //if the next element doesn't container the break-tag-marker class
                     if($(this).next().attr("class") !== "break-tag-marker"){//begin if then
                      
                   //insert a marker to show where the break tags after the html break tag
                   $("<b class='break-tag-marker'> -BR- </b>").insertAfter($(this));
                      
                     }//end if then
                      
                  });//end each function
                  
                  
              });//end event        
          };//end event
          
          
          /*
           * dropEvent for Elemental object
           */
          Elemental.prototype.dropEvent = function(){
              
              
                //draggable on stop event
                $( ".droppable").droppable({
                    
                    
                    
                drop: function(event,ui) {//begin stop function
                    
                   //debug
                   console.log("Element Dropped: " + Elemental.dragging);
                   
                   switch(Elemental.dragging){//begin switch case
                       
                                        
                     
                        case "input-text":
                            
                           //render the input text box
                           Elemental.element.inputtext(Elemental.formContainer);
                           
                           break;
                           
                         case "input-password":
                             
                           //render the input password box
                           Elemental.element.inputpassword(Elemental.formContainer);
                           
                           break;
                           
                         case "input-submit":
                             
                           //render the submit button
                           Elemental.element.submitbutton(Elemental.formContainer);
                          
                           break;
                           
                           case "label":
                                     
                                     
                           //render the label element
                           Elemental.element.label(Elemental.formContainer);
                                     
                           break;
                           
                           case "text-area":
                               
                            //render the textarea element
                           Elemental.element.textarea(Elemental.formContainer);
                               
                               
                          
                           break;
                           
                           case "button":
                               
                           //render the button element
                           Elemental.element.button(Elemental.formContainer);
                               
                               
                              
                          
                           break;
                           
                           case "check-box":
                               
                           //render the check box
                           Elemental.element.checkbox(Elemental.formContainer);
                               
                              
                           break;
                       
                       case "radio-box":
                           
                           
                           //render the radio button
                           Elemental.element.radiobutton(Elemental.formContainer);
                            
                          
                          
                           break;
                           
                       case "input-file":
                           
                           //render the input file element
                           Elemental.element.inputfile(Elemental.formContainer);
                           
                    
                          
                           break;
                           
                            case "line-break":
                                
                         //render the line break
                        Elemental.element.linebreak(Elemental.formContainer);
                          
                       
                          
                           break;
                           
                            case "drop-down-list":
                                
                       //render the drop down list
                        Elemental.element.dropdownlist(Elemental.formContainer);
                                
                                                 
                                        
                                                  
                           break;  
                       
                       case "labeltext":
                           
                           //render the label
                           Elemental.element.label(Elemental.formContainer);
                           
                           //render the input text element
                           Elemental.element.inputtext(Elemental.formContainer);
                            
                        break;
                        
                        case "labelpassword":
                            
                            //render the label
                           Elemental.element.label(Elemental.formContainer);
                           
                           //render the input password element
                           Elemental.element.inputpassword(Elemental.formContainer);
                        
                        
                        break;
                        
                        case "labelpassword":
                            
                            //render the label
                           Elemental.element.label(Elemental.formContainer);
                           
                           //render the input password element
                           Elemental.element.inputpassword(Elemental.formContainer);
                        
                        
                        break;
                        
                        case "labelcheckbox":
                        
                         //render the label
                         Elemental.element.label(Elemental.formContainer);
                         
                                                   
                          //render the checkbox element
                          Elemental.element.checkbox(Elemental.formContainer);
                        
                        break;
                        
                        case "labelradiobutton":
                        
                         //render the label
                         Elemental.element.label(Elemental.formContainer);
                         
                                                   
                          //render the radiobutton element
                          Elemental.element.radiobutton(Elemental.formContainer);
                        
                        break;
                        
                        case "labelradiobutton":
                        
                         //render the label
                         Elemental.element.label(Elemental.formContainer);
                         
                                                   
                          //render the radiobutton element
                          Elemental.element.radiobutton(Elemental.formContainer);
                        
                        break;
                        
                         case "labeltextarea":
                           
                           //render the label
                           Elemental.element.label(Elemental.formContainer);
                           
                           //render the textarea
                           Elemental.element.textarea(Elemental.formContainer);
                           
                                                                   
                        break;
                        
                        case "labeldropdownlist":
                           
                           //render the label
                           Elemental.element.label(Elemental.formContainer);
                           
                           //render the dropdownlist
                           Elemental.element.dropdownlist(Elemental.formContainer);
                           
                                                                   
                        break;
                        
                        case "labelinputfile":
                           
                           //render the label
                           Elemental.element.label(Elemental.formContainer);
                           
                           //render the input file element
                           Elemental.element.inputfile(Elemental.formContainer);
                           
                                                                   
                        break;
                        
                        case "labelbrtext":
                           
                           //render the label
                           Elemental.element.label(Elemental.formContainer);
                           
                           //render the break tag
                           Elemental.element.linebreak(Elemental.formContainer);
                           
                           //render the input text element
                           Elemental.element.inputtext(Elemental.formContainer);
                           
                                                                   
                        break;
                        
                        case "labelbrpassword":
                           
                           //render the label
                           Elemental.element.label(Elemental.formContainer);
                           
                           //render the break tag
                           Elemental.element.linebreak(Elemental.formContainer);
                           
                           //render the input text password element
                           Elemental.element.inputpassword(Elemental.formContainer);
                           
                                                                   
                        break;
                        
                        case "labelbrcheckbox":
                           
                           //render the label
                           Elemental.element.label(Elemental.formContainer);
                           
                           //render the break tag
                           Elemental.element.linebreak(Elemental.formContainer);
                           
                           //render the checkbox element
                           Elemental.element.checkbox(Elemental.formContainer);
                           
                                                                   
                        break;
                        
                         case "labelbrradiobutton":
                           
                           //render the label
                           Elemental.element.label(Elemental.formContainer);
                           
                           //render the break tag
                           Elemental.element.linebreak(Elemental.formContainer);
                           
                           //render the radiobutton element
                           Elemental.element.radiobutton(Elemental.formContainer);
                           
                                                                   
                        break;
                        
                         case "labelbrtextarea":
                           
                           //render the label
                           Elemental.element.label(Elemental.formContainer);
                           
                           //render the break tag
                           Elemental.element.linebreak(Elemental.formContainer);
                           
                           //render the textarea element
                           Elemental.element.textarea(Elemental.formContainer);
                           
                                                                   
                        break;
                        
                         case "labelbrdropdownlist":
                           
                           //render the label
                           Elemental.element.label(Elemental.formContainer);
                           
                           //render the break tag
                           Elemental.element.linebreak(Elemental.formContainer);
                           
                           //render the drop down list element
                           Elemental.element.dropdownlist(Elemental.formContainer);
                           
                                                                   
                        break;
                        
                         case "labelbrinputfile":
                           
                           //render the label
                           Elemental.element.label(Elemental.formContainer);
                           
                           //render the break tag
                           Elemental.element.linebreak(Elemental.formContainer);
                           
                           //render the input file element
                           Elemental.element.inputfile(Elemental.formContainer);
                           
                                                                   
                        break;
                        
                       
                       
                       //todo: finish implementing elements
                       
                       
                   }//end switch case
                   
                   
                   
      
                  }//end droppable function
                  });//end droppable stop event


                
              
          };//end dropEvent
          
          
          /*
           * dragStart event for Elemental object
           * 
           */
          Elemental.prototype.dragStartEvent = function(){//begin dragStart Event
              
             
              
               /*on dragstart event*/  
             $(".draggable").on("dragstart",function(){

                //get the class of the element being dragged
                Elemental.dragging = $(this).attr("id");
                
               

            });//end on dragstart event             
             
                            
          };//end dragStart Event
          
          /*
           * 
           * 
           * 
           */
           $(".preview-container").on("mouseover",function(){//begin on hover event
               
               
               //set the Elemental.canDrop value
               Elemental.canDrop = ($(this).hasClass("droppable"));
               
               
           });//end on hover event
           
           /*
            * This function will show an edit form based on the css property selected
            *
            */           
           Elemental.prototype.cssSelectorOnChangeEvent = function(){//begin function
                         
               $(document).on("change","#css-property-list",function(){//begin event
                   
               //todo: append option to change the css property selected
                   
               //add the empty selector css code block
               $("#cssEditor").append($(this).val() + "{<br><br>}<br>");
               
               //todo: implement functions to allow editing of css
               
               
               });//end event
               
               
           };//end function
           
           /*
            * 
            * Changes the forms method attribute GET or POST are
            * legal values
            */
            Elemental.prototype.updateFormMethodOnChangeEvent = function(){//begin updateFormActionOnClickEvent
                
                
              $(document).on("change keyup",".update-method",function(){//begin function
                  
                  
                  //update the forms method(GET or POST)
                  $(Elemental.editing).attr("method",$(this).val());
                  
              });//end function
              
              
            };//end event
            
            /*
             * This function will perform actions based on changes made to any
             * input text element with a class name of update-element.
             * 
             *  
             */         
          
          Elemental.prototype.updateElementOnChangeEvent = function(){//begin updateElementOnClickEvent
                
              $(document).on("change keyup",".update-element",function(){//begin function
                  
                  
                  switch(Elemental.tag){//begin switch case
                      
                  case "LABEL":
                  
                  //update the label element text
                  $(Elemental.editing).html($(this).val());
                  
                  //update the classes delete
                  //$(Elemental.editing).attr("class",$(".update-classes").val());
                  
                  
                  break;
                  
                  case "TEXT":
                  
                  //update the input text element value
                  $(Elemental.editing).val($(this).val());
                  
                  //update the classes delete
                  //$(Elemental.editing).attr("class",$(".update-classes").val());
                  
                  
                  break;
                  
                  case "PASSWORD":
                  
                  //update the input element value
                  $(Elemental.editing).val($(this).val());
                  
                  
                  
                  break;
                  
                  case "SELECT":
                      
                  //update the select list option values
                  updateOptionValues($(".update-element").val());                 
                 
                                    
                  break;
                  
                  case "BUTTON":
                      
                  //update the button text
                   $(Elemental.editing).val($(this).val());            
                 
                                    
                  break;
                  
                  case "SUBMIT":
                      
                  
                      
                  //update the submit button
                   $(Elemental.editing).val($(this).val());            
                 
                                    
                  break;
                  
                  case "INPUT":
                      
                  //Do nothing because you can't change the value of the input file
                  //element due to security reasons.
                                    
                  break;
                  
                  case "FORM":
                      
                   //update the forms action attribute
                  $(Elemental.editing).attr("action",$(this).val());
                  
                  break;
                  
                  }//end switch case
                  
                  
               
                
                
                  
              
              });//end function            
              
          };//end updateElementOnChangeEvent
          
          
          /*
           * 
           * This event updates the name of the elements
           * 
           */
          
          Elemental.prototype.updateNameOnChangeEvent = function(){//begin updateNameOnClickEvent
                
              $(document).on("change keyup",".update-name",function(){//begin function
                  
                 
                  
                  //update the elements name
                  $(Elemental.editing).attr("name",$(this).val());
                  
                 
                  
              
              });//end function            
              
          };//end updateNameOnChangeEvent
          
          /*
           * 
           * This event updates the elements classes
           * 
           */
          
          Elemental.prototype.updateClassOnChangeEvent = function(){//begin updateClassOnChangeEvent
                
              $(document).on("change keyup",".update-classes",function(){//begin function                 
                  
                  
                  
                  //update the classes 
                  $(Elemental.editing).attr("class",$(".update-classes").val());                  
                  
                 
                              
              });//end function            
              
          };//end updateClassOnChangeEvent
           
           /*
            * 
            * updates the id of the element
            * 
            */
           
           Elemental.prototype.updateIDOnChangeEvent = function(){//begin updateClassOnChangeEvent
                
              $(document).on("change keyup",".update-id",function(){//begin function                 
                  
                  
                  
                  //update the id
                  $(Elemental.editing).attr("id",$(".update-id").val());
                  
                  
                   //if the Elemental.tag value is equal to LABEL
                   if(Elemental.tag === "LABEL"){//begin if then
                  
                  //update the for element
                  $(Elemental.editing).attr("for",$(".update-id").val());                  
                  
                  
                   }//end if then
                              
              });//end function            
              
          };//end updateClassOnChangeEvent
          
           
           
          
          /*
           * Elemental edit-button on click event
           * 
           */          
           Elemental.prototype.editButtonOnClickEvent = function(){//begin editButtonOnClick Event
                              
               $(document).on("click",".edit-button",function(){//begin on click event
                   
                   //invoke the click function for #tabs-4  button
                   //Edit Elements tab
                   $("#ui-id-4").click();
                   
                   //stores the value to use for the switch case statement
                   var operator;
                   
                   //store the elements type property
                   var nextType = $(this).next().prop("type");
                   
                   
                   
                   //if the next type is undefined or is a select box
                   if(nextType === undefined || nextType === "select-one"){
                       
                      //get the tagName and store it in the operator variable
                      operator = $(this).next().prop("tagName").toUpperCase();
                       
                   }
                   else{
                       
                       //get the type attribute and store it in the operator variable
                       operator = nextType.toUpperCase();
                       
                   }//end if then else
                   
                   
                   //debug only
                   //console.log(operator);
                   
                   
                  switch(operator){//begin switch case
                      
                      case "LABEL":
                          
                          var elementID = "#" + $(this).next().attr("id");
                          
                         //set the tag name
                          Elemental.tag = "LABEL";
                          
                          //set the element that is being edited
                          Elemental.editing = $(this).next();
                                 
                                
                         //call editElement function
                         editElement(elementID);
                          
                          break;
                          
                       case "TEXT":
                          
                          var elementID = "#" + $(this).next().attr("id");
                          
                                                    
                         //set the tag name
                          Elemental.tag = "TEXT";
                          
                          //set the element that is being edited
                          Elemental.editing = $(this).next();
                                 
                                
                         //call editElement function
                         editElement(elementID);
                          
                          break;
                          
                          case "CHECKBOX":
                              
                              
                          
                          var elementID = "#" + $(this).next().attr("id");
                          
                                                    
                         //set the tag name
                          Elemental.tag = "CHECKBOX";
                          
                          //set the element that is being edited
                          Elemental.editing = $(this).next();
                                 
                                
                         //call editElement function
                         editElement(elementID);
                          
                          break;
                          
                          case "RADIO":
                              
                              
                          
                          var elementID = "#" + $(this).next().attr("id");
                          
                                                    
                         //set the tag name
                          Elemental.tag = "RADIO";
                          
                          //set the element that is being edited
                          Elemental.editing = $(this).next();
                                 
                                
                         //call editElement function
                         editElement(elementID);
                         
                         break;
                      
                      
                      case "TEXTAREA":
                              
                              
                          
                          var elementID = "#" + $(this).next().attr("id");
                          
                                                    
                         //set the tag name
                          Elemental.tag = "TEXTAREA";
                          
                          //set the element that is being edited
                          Elemental.editing = $(this).next();
                                 
                                
                         //call editElement function
                         editElement(elementID);
                         
                         break;
                         
                         case "SELECT":
                              
                                             
                          
                          var elementID = "#" + $(this).next().attr("id");
                          
                                                    
                         //set the tag name
                          Elemental.tag = "SELECT";
                          
                          //set the element that is being edited
                          Elemental.editing = $(this).next();
                                 
                                
                         //call editElement function
                         editElement(elementID);
                         
                         break;
                         
                         case "BUTTON":
                              
                                             
                          
                          var elementID = "#" + $(this).next().attr("id");
                          
                                                    
                         //set the tag name
                          Elemental.tag = "BUTTON";
                          
                          //set the element that is being edited
                          Elemental.editing = $(this).next();
                                 
                                
                         //call editElement function
                         editElement(elementID);
                         
                         break;
                         
                         case "SUBMIT":
                              
                                             
                          
                          var elementID = "#" + $(this).next().attr("id");
                          
                                                    
                         //set the tag name
                          Elemental.tag = "SUBMIT";
                          
                          //set the element that is being edited
                          Elemental.editing = $(this).next();
                                 
                                
                         //call editElement function
                         editElement(elementID);
                         
                         break;
                         
                         case "FILE":
                              
                                             
                          
                          var elementID = "#" + $(this).next().attr("id");
                          
                                                    
                         //set the tag name
                          Elemental.tag = "FILE";
                          
                          //set the element that is being edited
                          Elemental.editing = $(this).next();
                                 
                                
                         //call editElement function
                         editElement(elementID);
                         
                         break;
                         
                         case "PASSWORD":
                              
                                             
                          
                          var elementID = "#" + $(this).next().attr("id");
                          
                                                    
                         //set the tag name
                          Elemental.tag = "PASSWORD";
                          
                          //set the element that is being edited
                          Elemental.editing = $(this).next();
                                 
                                
                         //call editElement function
                         editElement(elementID);
                         
                         break;
                      
                  }//end switch case
                  
                   
               });//end on click event
               
               
           };//end on editButtonOnClick Event
           
           
           /**************End Event Declarations**************************************/
           
           
           
           /********************************Begin Function Declarations***************/
           
           /*
            * 
            * This function will display the edit menu for the html element
            */
              
              function editElement(elementID){//begin editElement function
                  
                 //declare editForm Array
                 var editForm = [];
                   
                   //debug only print the name of the tag being edited
                   console.log(Elemental.tag + "\n");
                  
                   switch(Elemental.tag){//begin switch case
                
                 case "LABEL":
                 
                  
                  editForm.push("<form>");
                  
                  //begin adding the input element to change the label's text
                  editForm.push("<label for = 'label-text'>Label Text </label>");
                  editForm.push("<input class = '" +
                          "update-element' type='text' value='");
                  editForm.push($(elementID).text());
                  editForm.push("'>");
                  //end adding the input element 
                                   
                  editForm.push("<br>");
                  
                  //begin adding the input element to edit or change the label's classes
                  editForm.push("<label for = 'label-class'>Label Classes </label>");
                  editForm.push("<input class = '" +
                          "update-classes' type='text' value='");
                  editForm.push($(elementID).attr("class"));
                  editForm.push("'>");
                  //end adding the input element to edit or change the label's class
                  
                  editForm.push("<br>");
                  
                  //begin adding the input element to edit or change the label's id
                  editForm.push("<label for = 'label-id'>Label ID </label>");
                  editForm.push("<input class = '" +
                          "update-id' type='text' value='");
                  editForm.push($(elementID).attr("id"));
                  editForm.push("'>");
                  //end adding the input element to edit or change the label's id
                  
                  
                  
                  
                  editForm.push("<br>");
                  editForm.push("<br>");
                  
                  editForm.push("</form>");
                  
                  
              //display edit menu
              $("#elemental-edit-menu").html(editForm.join(""));
              
               break;
               
                case "TEXT":
                 
                  //array to hold the editForm html
                  editForm  = [];
                  
                  editForm.push("<form>");
                  
                  
                  //begin adding the input element to change the checkbox name
                  editForm.push("<label for = 'label-text'>Input Text Name </label>");
                  editForm.push("<input class = '" +
                          "update-name' type='text' value='");
                  editForm.push($(elementID).attr("name"));
                  editForm.push("'>");
                  //end adding the input element 
                                   
                  editForm.push("<br>");
                  
                  //begin adding the input element to change the INPUT TEXT VALUE
                  editForm.push("<label for = 'label-text'>Input Text </label>");
                  editForm.push("<input class = '" +
                          "update-element' type='text' value='");
                  editForm.push($(elementID).val());
                  editForm.push("'>");
                  //end adding the input element 
                                   
                  editForm.push("<br>");
                  
                  //begin adding the input element to edit or change the label's classes
                  editForm.push("<label for = 'input-text-class'>Input Text Classes </label>");
                  editForm.push("<input class = '" +
                          "update-classes' type='text' value='");
                  editForm.push($(elementID).attr("class"));
                  editForm.push("'>");
                  //end adding the input element to edit or change the label's class
                  
                  editForm.push("<br>");
                  
                  //begin adding the input element to edit or change the label's id
                  editForm.push("<label for = 'input-text-id'>Input Text ID </label>");
                  editForm.push("<input class = '" +
                          "update-id' type='text' value='");
                  editForm.push($(elementID).attr("id"));
                  editForm.push("'>");
                  //end adding the input element to edit or change the label's id
                  
                  
                  
                  
                  editForm.push("<br>");
                  editForm.push("<br>");
                  
                  editForm.push("</form>");
                  
                  
              //display edit menu
              $("#elemental-edit-menu").html(editForm.join(""));
              
               break;
               
               case "PASSWORD":
                 
                  //array to hold the editForm html
                  editForm  = [];
                  
                  editForm.push("<form>");
                  
                  
                  //begin adding the input element to change the input password name
                  editForm.push("<label for = 'label-text'>Input Password Name </label>");
                  editForm.push("<input class = '" +
                          "update-name' type='text' value='");
                  editForm.push($(elementID).attr("name"));
                  editForm.push("'>");
                  //end adding the input element 
                                   
                  editForm.push("<br>");
                  
                  //begin adding the input element to change the INPUT TEXT PASSWORD VALUE
                  editForm.push("<label for = 'label-text'>Input Password Value </label>");
                  editForm.push("<input class = '" +
                          "update-element' type='text' value='");
                  editForm.push($(elementID).val());
                  editForm.push("'>");
                  //end adding the input element 
                                   
                  editForm.push("<br>");
                  
                  //begin adding the input element to edit or change the Input password classes
                  editForm.push("<label for = 'input-text-class'>Input Password Classes </label>");
                  editForm.push("<input class = '" +
                          "update-classes' type='text' value='");
                  editForm.push($(elementID).attr("class"));
                  editForm.push("'>");
                  //end adding the input element to edit or change the Input password class
                  
                  editForm.push("<br>");
                  
                  //begin adding the input element to edit or change the Input password id
                  editForm.push("<label for = 'input-text-id'>Input Password ID </label>");
                  editForm.push("<input class = '" +
                          "update-id' type='text' value='");
                  editForm.push($(elementID).attr("id"));
                  editForm.push("'>");
                  //end adding the input element to edit or change the Input Password id
                  
                  
                  
                  
                  editForm.push("<br>");
                  editForm.push("<br>");
                  
                  editForm.push("</form>");
                  
                  
              //display edit menu
              $("#elemental-edit-menu").html(editForm.join(""));
              
               break;
               
               
               case "CHECKBOX":
                   
                   
                  //array to hold the editForm html
                  editForm  = [];
                  
                  editForm.push("<form>");
                  
                  //begin adding the input element to change the checkbox name
                  editForm.push("<label for = 'label-text'>Check Box Name </label>");
                  editForm.push("<input class = '" +
                          "update-name' type='text' value='");
                  editForm.push($(elementID).attr("name"));
                  editForm.push("'>");
                  //end adding the input element 
                                   
                  editForm.push("<br>");
                  
                  //begin adding the input element to edit or change the Check Box classes
                  editForm.push("<label for = 'input-text-class'>Check Box Classes </label>");
                  editForm.push("<input class = '" +
                          "update-classes' type='text' value='");
                  editForm.push($(elementID).attr("class"));
                  editForm.push("'>");
                  //end adding the input element to edit or change the Check Box class
                  
                  editForm.push("<br>");
                  
                  //begin adding the input element to edit or change the Check Boxes id
                  editForm.push("<label for = 'input-text-id'>Check Box ID </label>");
                  editForm.push("<input class = '" +
                          "update-id' type='text' value='");
                  editForm.push($(elementID).attr("id"));
                  editForm.push("'>");
                  //end adding the input element to edit or change the label's id
                  
                  
                  
                  
                  editForm.push("<br>");
                  editForm.push("<br>");
                  
                  editForm.push("</form>");
                  
                  
              //display edit menu
              $("#elemental-edit-menu").html(editForm.join(""));
              
               break;
               
               case "RADIO":
                   
                   
                  //array to hold the editForm html
                  editForm  = [];
                  
                  editForm.push("<form>");
                  
                  //begin adding the input element to change the radio button name
                  editForm.push("<label for = 'label-text'>Radio Button Name </label>");
                  editForm.push("<input class = '" +
                          "update-name' type='text' value='");
                  editForm.push($(elementID).attr("name"));
                  editForm.push("'>");
                  //end adding the input element 
                                   
                  editForm.push("<br>");
                  
                  //begin adding the input element to edit or change the radio button classes
                  editForm.push("<label for = 'input-text-class'>Radio Button Classes </label>");
                  editForm.push("<input class = '" +
                          "update-classes' type='text' value='");
                  editForm.push($(elementID).attr("class"));
                  editForm.push("'>");
                  //end adding the input element to edit or change the radio button class
                  
                  editForm.push("<br>");
                  
                  //begin adding the input element to edit or change the radio button id
                  editForm.push("<label for = 'input-text-id'>Radio Button ID </label>");
                  editForm.push("<input class = '" +
                          "update-id' type='text' value='");
                  editForm.push($(elementID).attr("id"));
                  editForm.push("'>");
                  //end adding the input element to edit or change the radio button id
                  
                  
                  
                  
                  editForm.push("<br>");
                  editForm.push("<br>");
                  
                  editForm.push("</form>");
                  
                  
              //display edit menu
              $("#elemental-edit-menu").html(editForm.join(""));
              
               break;
               
               
               case "TEXTAREA":
                   
                   
                  //array to hold the editForm html
                  editForm  = [];
                  
                  editForm.push("<form>");
                  
                  //begin adding the input element to change the textarea name
                  editForm.push("<label for = 'label-text'>Text Area Name</label>");
                  editForm.push("<input class = '" +
                          "update-name' type='text' value='");
                  editForm.push($(elementID).attr("name"));
                  editForm.push("'>");
                  //end adding the textarea element 
                                   
                  editForm.push("<br>");
                  
                  //begin adding the input element to edit or change the textarea classes
                  editForm.push("<label for = 'input-text-class'>Text Area Classes </label>");
                  editForm.push("<input class = '" +
                          "update-classes' type='text' value='");
                  editForm.push($(elementID).attr("class"));
                  editForm.push("'>");
                  //end adding the input element to edit or change the textarea class
                  
                  editForm.push("<br>");
                  
                  //begin adding the input element to edit or textarea id
                  editForm.push("<label for = 'input-text-id'>Text Area ID </label>");
                  editForm.push("<input class = '" +
                          "update-id' type='text' value='");
                  editForm.push($(elementID).attr("id"));
                  editForm.push("'>");
                  //end adding the input element to edit or change the radio button id
                  
                  
                  
                  
                  editForm.push("<br>");
                  editForm.push("<br>");
                  
                  editForm.push("</form>");
                  
                  
              //display edit menu
              $("#elemental-edit-menu").html(editForm.join(""));
              
               break;
               
               case "SELECT":
                   
                   
                  //array to hold the editForm html
                  editForm  = [];
                  
                  editForm.push("<form>");
                  
                  //begin adding the input element to change the Drop Down List name
                  editForm.push("<label for = 'label-text'>Drop Down List Name</label>");
                  editForm.push("<input class = '" +
                          "update-name' type='text' value='");
                  editForm.push($(elementID).attr("name"));
                  editForm.push("'>");
                  //end adding the textarea element 
                                   
                  editForm.push("<br>");
                  
                  //begin adding the input element to edit or change the Drop Down List classes
                  editForm.push("<label for = 'input-text-class'>Drop Down List Classes </label>");
                  editForm.push("<input class = '" +
                          "update-classes' type='text' value='");
                  editForm.push($(elementID).attr("class"));
                  editForm.push("'>");
                  //end adding the input element to edit or change the Drop Down List class
                  
                  editForm.push("<br>");
                  
                  //begin adding the input element to edit or Drop Down List id
                  editForm.push("<label for = 'input-text-id'>Drop Down List ID </label>");
                  editForm.push("<input class = '" +
                          "update-id' type='text' value='");
                  editForm.push($(elementID).attr("id"));
                  editForm.push("'>");
                  //end adding the input element to edit or change the Drop Down List id
                  
                  
                  
                  
                  editForm.push("<br>");
                  editForm.push("<br>");
                  
                  
                  //Add the user intructions for editing the drop down list
                  editForm.push("<p id='drop-list-edit-instruction'>");
                  editForm.push("Enter the Drop Down List values in a comma seperated list.<br>");
                  editForm.push("Example: one,two,three");
                  editForm.push("</p>");
                  
                  //Begin adding the text area to hold the comma seperated values for the
                  //option values
                  editForm.push("<label for = 'input-text-id'>Drop Down List Values</label><br>");
                  editForm.push("<textarea class = '" +
                          "update-element' >");
                  
                  //get the option values and add the to text area
                  editForm.push(getOptionValues($(elementID).attr("id")));
                  
                  editForm.push("</textarea>");
                  //End adding the text area to edit or change the comma seperated values
                  //for the option values               
                  
                  
                  editForm.push("<br>");
                  editForm.push("<br>");
                                    
                  editForm.push("</form>");
                  
                  
              //display edit menu
              $("#elemental-edit-menu").html(editForm.join(""));
              
               break;
               
               
               case "BUTTON":
                 
                  //array to hold the editForm html
                  editForm  = [];
                  
                  editForm.push("<form>");
                  
                  
                  //begin adding the input element to change the BUTTON name
                  editForm.push("<label for = 'label-text'>Button Name </label>");
                  editForm.push("<input class = '" +
                          "update-name' type='text' value='");
                  editForm.push($(elementID).attr("name"));
                  editForm.push("'>");
                  //end adding the input element 
                                   
                  editForm.push("<br>");
                  
                  //begin adding the input element to change the BUTTON TEXT VALUE
                  editForm.push("<label for = 'label-text'>Button Text</label>");
                  editForm.push("<input class = '" +
                          "update-element' type='text' value='");
                  editForm.push($(elementID).val());
                  editForm.push("'>");
                  //end adding the input element 
                                   
                  editForm.push("<br>");
                  
                  //begin adding the input element to edit or change the button's classes
                  editForm.push("<label for = 'input-text-class'>Button Classes </label>");
                  editForm.push("<input class = '" +
                          "update-classes' type='text' value='");
                  editForm.push($(elementID).attr("class"));
                  editForm.push("'>");
                  //end adding the input element to edit or change the button's class
                  
                  editForm.push("<br>");
                  
                  //begin adding the input element to edit or change the Button's id
                  editForm.push("<label for = 'input-text-id'>Button Text ID </label>");
                  editForm.push("<input class = '" +
                          "update-id' type='text' value='");
                  editForm.push($(elementID).attr("id"));
                  editForm.push("'>");
                  //end adding the input element to edit or change the button's id
                  
                  
                  
                  
                  editForm.push("<br>");
                  editForm.push("<br>");
                  
                  editForm.push("</form>");
                  
                  
              //display edit menu
              $("#elemental-edit-menu").html(editForm.join(""));
              
               break;
               
               
               case "SUBMIT":
                 
                  //array to hold the editForm html
                  editForm  = [];
                  
                  editForm.push("<form>");
                  
                  
                  //begin adding the input element to change the SUBMIT BUTTON name
                  editForm.push("<label for = 'label-text'>Submit Button Name </label>");
                  editForm.push("<input class = '" +
                          "update-name' type='text' value='");
                  editForm.push($(elementID).attr("name"));
                  editForm.push("'>");
                  //end adding the input element 
                                   
                  editForm.push("<br>");
                  
                  //begin adding the input element to change the SUBMIT BUTTON TEXT VALUE
                  editForm.push("<label for = 'label-text'>Submit Button Text</label>");
                  editForm.push("<input class = '" +
                          "update-element' type='text' value='");
                  editForm.push($(elementID).val());
                  editForm.push("'>");
                  //end adding the submit button element 
                                   
                  editForm.push("<br>");
                  
                  //begin adding the input element to edit or change the submit button's classes
                  editForm.push("<label for = 'input-text-class'>Submit Button Classes </label>");
                  editForm.push("<input class = '" +
                          "update-classes' type='text' value='");
                  editForm.push($(elementID).attr("class"));
                  editForm.push("'>");
                  //end adding the input element to edit or change the submit button's class
                  
                  editForm.push("<br>");
                  
                  //begin adding the input element to edit or change the Submit Button's id
                  editForm.push("<label for = 'input-text-id'>Submit Button Text ID </label>");
                  editForm.push("<input class = '" +
                          "update-id' type='text' value='");
                  editForm.push($(elementID).attr("id"));
                  editForm.push("'>");
                  //end adding the input element to edit or change the submit button's id
                  
                  
                  
                  
                  editForm.push("<br>");
                  editForm.push("<br>");
                  
                  editForm.push("</form>");
                  
                  
              //display edit menu
              $("#elemental-edit-menu").html(editForm.join(""));
              
               break;
               
               case "FILE":
                 
                  //array to hold the editForm html
                  editForm  = [];
                  
                  editForm.push("<form>");
                  
                  
                  //begin adding the input element to change the input file name
                  editForm.push("<label for = 'label-text'>Input File Name </label>");
                  editForm.push("<input class = '" +
                          "update-name' type='text' value='");
                  editForm.push($(elementID).attr("name"));
                  editForm.push("'>");
                  //end adding the input text element to change the input file name
                                   
                  editForm.push("<br>");
                  
                  
                  //begin adding the input element to edit or change the Input File classes
                  editForm.push("<label for = 'input-text-class'>Input File Classes </label>");
                  editForm.push("<input class = '" +
                          "update-classes' type='text' value='");
                  editForm.push($(elementID).attr("class"));
                  editForm.push("'>");
                  //end adding the input element to edit or change the input file class
                  
                  editForm.push("<br>");
                  
                  //begin adding the input element to edit or change the input file id
                  editForm.push("<label for = 'input-text-id'>Input File ID </label>");
                  editForm.push("<input class = '" +
                          "update-id' type='text' value='");
                  editForm.push($(elementID).attr("id"));
                  editForm.push("'>");
                  //end adding the input element to edit or change the input file id
                  
                  
                  
                  
                  editForm.push("<br>");
                  editForm.push("<br>");
                  
                  editForm.push("</form>");
                  
                  
              //display edit menu
              $("#elemental-edit-menu").html(editForm.join(""));
              
               break;
               
                }//end switch case
                
                
                //append the edit form close button
                $("#elemental-edit-menu form").append("<b id='close-edit-form-button'>Close</b>");
               
               //add the edit menu title
               $("<h3 id='edit-menu-title'>" + Elemental.tag + " Properties</h3>").insertBefore("#elemental-edit-menu form");
               
               //development only
               //$("#elemental-edit-menu form").append(addStyle());
               
               
               
               
           };//end editElement function
           
           /*
            * This function will return an select list
            * populated with all of the elements,classes, and id's
            * contained within the form
            * 
            */          
           function addStyle(){//begin function
               
               //create an array to hold css selectors
               var cssProps = Elemental.styleEditor.selectorsToArray( $(".preview-container *"));
               //array to hold the new values
               var newArray = [];
               
               
               
               
               
                newArray.push("<select id='css-property-list' >");
                
                for(var i =0; i < cssProps.length; i++){//begin for loop
                
                newArray.push("<option>");                                
                newArray.push(cssProps[i]);
                newArray.push("</option>");
                
                
                }//end for loop
                
                newArray.push("</select>");
                
                              
               return newArray.join("");
               
           }//end function
           
           Elemental.prototype.editButtonCloseOnClickEvent = function(){//begin event
               
               $(document).on("click","#close-edit-form-button",function(){//begin event
                   
                   //close the edit form by removing it from the dom
                   $(this).parent().remove();
                   
               });//end event
               
           };//end event
           
           /*
            * 
            * Hides the edit buttons for the elements in the live preview area
            */
           
            Elemental.prototype.hideElementEditButtonsOnClickEvent = function(){//begin event
               
               $(document).on("click","#hide-element-edit-buttons",function(){//begin event
                   
                   //hide the edit buttons
                   $(".edit-button").hide();
                   
                   
               });//end event
               
           };//end event
           
           /*
            * 
            * Shows the edit buttons for the elements in the live preview area
            */
           
            Elemental.prototype.showElementEditButtonsOnClickEvent = function(){//begin event
               
               $(document).on("click","#show-element-edit-buttons",function(){//begin event
                   
                   //show the edit buttons
                   $(".edit-button").show();
                   
                   
               });//end event
               
           };//end event
           
           Elemental.prototype.eraserButtonOnClickEvent = function(){//begin event
               
               
               $("#eraser-button").on("click",function(){//begin if then
                   
               //if canDelete equals off
               if(Elemental.canDelete === "off"){//begin if then else
                   
                   //then sets it value to on
                   Elemental.canDelete = "on";
                   
                   //change the image to the eraser mode on button                  
                   $("#eraser-button").html("Eraser Mode - On");
                   
                   //add the eraser-mode-on class
                   $("#eraser-button").toggleClass("eraser-mode-on");
                   
                   
               }
               else{
                   
                   //otherwise set canDelete to off
                   Elemental.canDelete = "off";
                   
                   //change the image to the eraser mode off button                  
                   $("#eraser-button").html("Eraser Mode - Off");
                   
                    //remove the eraser-mode-on class
                    $("#eraser-button").toggleClass("eraser-mode-on");
                   
               }//end if then else
               
               
           });//event
           
               
               
           };//end event
           
           
           
           
           
           $(".preview-container").on("click",".elemental-form *",function(){//begin event
               
               
               //if the element clicked has the class break-tag-marker and canDelete = on
               if($(this).attr("class") === "break-tag-marker" && Elemental.canDelete === "on"){//begin if then
                   
                   //remove the break tag
                   $(this).prev("br").remove();
                   
                   //remove the break tag marker
                   $(this).remove();
                   
                   
               }//end if then
                                
    //if the canDelete is set to on and you are not clicking on the .edit-button
    if(Elemental.canDelete === "on" && $(this).attr("class") !== "edit-button"){//begin if then
                   
                   //delete the edit menu for the element
                  $(this).prev(".edit-button").remove();
                  
                   
                  //delete the element clicked on 
                  $(this).remove();
                  
                  
                   }//end if then
                  
                   
               });//end event
           
           
           /*
            * 
            * this function will get the opiton values of a
            * select list by passing in its id as a parameter
            */
            function getOptionValues(selectListID){//begin function getOptionValues
                
                //create an array to hold option values
                var optionValuesArray = [];
                
             $("#" + selectListID + " option").each(function(){//begin each function
               
               //append the option values
               optionValuesArray.push($(this).text());
    
    
               });//end each function
               
               
               //debug only
               //console.log(optionValuesArray);
               
               //return the option values as a CSV list
               return optionValuesArray;
                
                
            }//end function getOptionValues
           
           
           /*
            * This function updates the option values of a select if given its
            * id as a parameter
            * 
            */
           function updateOptionValues(csv){//begin function csvToOptionElements
               
               //todo: figure out how to set the values of the select list
               
               //convert the csv value to an array
               var csvArray = csv.split(",");
               
               
               
               //get the current number of option elements
               var currentLength = $("#" + Elemental.editing.attr("id") + " option").length;
               
               //loop through and add the empty option values
               for(var i = currentLength; i < csvArray.length; i++){//begin for loop
                   
                       
                        //append the empty option
                        $("#" + Elemental.editing.attr("id")).append("<option></option>\n");
                   
                  
               }//end for loop
               
               
                             
               //loop through the select list option values
               $("#" + Elemental.editing.attr("id") + " option").each(function(i){//begin each function              
                   //debug only
                   //console.log(csvArray[i]);
                   
                   if(csvArray[i] !== ""){//begin if then
                       
                   //update the option value
                   $(this).text(csvArray[i]);
                   
                   }//end if then
                   else{
                       
                   //remove the blank option
                   $(this).remove();
                   
                   }
                   
               });//end each function
               
                             
           }//end function csvToOptionElements
           
           
           /*
            * 
            * renders the functions attributes editForm
            * 
            * 
            */
           function renderEditForm(tag){//begin renderEditForm function
               
               
               
               return tag;
               
           }//end renderEditForm function
            
              
              
           
           
              
                    
           
          /********************************End Function Declarations***************/
          
          /**************************End Elemental Object*****************************/
          
          
        //create an instance of the Elemental object
        var elemental = new Elemental();
        
        
        
       
          
          
                
                
                    
//do not place any javascript code on or past this line
});//end document ready function call

