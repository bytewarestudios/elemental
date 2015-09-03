

<div id="tabs">
  <ul>
    <li><a href="#tabs-1">Form Options</a></li>
    <li><a href="#tabs-2">Code View</a></li>
    <li><a href="#tabs-3">CSS</a></li>
    <li><a href="#tabs-4">Edit Elements</a></li>
    <li><a href="#tabs-5">Elements</a></li>
  </ul>
  <div id="tabs-1">
      
      
      
      <!--middle column to hold form edit options-->
     <ul class ="edit-form-options">
         
         <li>
         <span class="button"  id="edit-form-properties">
                          Edit Form Properties
         </span>
         </li>
         <li>
         <span class='button' id="hide-element-edit-buttons">             
             Hide Edit Buttons            
         </span>
          </li>
         <li>
         <span class='button' id="show-element-edit-buttons">
              Show Edit Buttons
         </span>
          </li>
         <li>
         <span class = 'button' id="show-line-breaks">
              Show Line Breaks
         </span>
             </li>
         <li>
         <span class = 'button' id="hide-line-breaks">
              Hide Line Breaks
         </span>
             </li>
         
         <!-- future feature for allowing export of files
         <li>
         <span class ='button' id="export">
            export 
         </span>
         </li>
         
         -->
         
     
     </ul><!---->
    
  
  </div>
  <div id="tabs-2">
      <p>
          <span class = 'button' id="get-html">
            Get HTML
         </span>
       <span class ='button' id="get-php">
            Get PHP
         </span>
          <br>
          <br>
      <span id="code"></span>
        
        <textarea id="show-code"></textarea>
      </p>      
    </div>
   
  
  <div id="tabs-3">
      <!--css editing area-->
    <p>
        
        <textarea id='cssEditor'>

        </textarea>
        
               
    
    </p>
   
  </div>
    <div id="tabs-4">
        
        <p>
    <!--edit menu for elements-->
    <span id="elemental-edit-menu"></span>  
     
        </p>
  </div>
    <div id="tabs-5">
        
            <!--left column to hold drag and drop elements-->
     <ul class ="element-container"> 
         
         <li>
         <span class= 'button' id="eraser-button">
            Eraser Mode - Off 
         </span>
         </li>
         <li>
         <span class="draggable" id="input-text">
                          ...Input Text
         </span>
         </li>
         <li>             
         <span class="draggable" id="input-password">
              ** Input Password **
         </span>
         </li>
         <li>
         <span class="draggable" id="label">
              Label
         </span>
             </li>
         <li>
         <span class ="draggable" id="check-box">
            &#9745;Check Box
             </span >
             </li>
         <li>
         <span class ="draggable" id="radio-box">
             &#x1f518;Radio Button
         </span>
             </li>
         <li>
         <span class="draggable" id="text-area">
             ~~~Text Area
         </span >
         </li>
         <li>
         <span  class="draggable" id="drop-down-list">
             &#x234c;Drop Down
         </span>
             </li>
         <li>
         <span class="draggable" id="button">
             Button
         </span>
             </li>
         <li>
         <span class="draggable" id="input-submit">
             Submit
         </span>
             </li>
         <li>
         <span class="draggable" id="input-file">
             File Select
         </span>
             
         </li>
         <li>
         <span class="draggable" id="line-break">
             Line &lt;BR&gt;
         </span>
             </li>
         <li>
         
         <span class="draggable" id="labeltext">
            Text Input/Label
         </span>
         </li>
         <li>
         <span class="draggable" id="labelpassword">
             Label/Password
         </span>
         </li>
         <li>
          <span class="draggable" id="labelcheckbox">
             Label/Checkbox
         </span>
         </li>
         <li>
          <span class="draggable" id="labelradiobutton">
             Label/Radio Button
         </span >
         </li>
         <li>
         <span class="draggable" id="labeltextarea">
             Label/Textarea
         </span>
         </li>
         <li>
         <span class="draggable" id="labeldropdownlist">
             Label/Drop Down
         </span>
         </li>
         <li>
         <span class="draggable" id="labelinputfile">
             Label /File Select
         </span>
         </li>
         <li>         
        <span class="draggable" id="labelbrtext">
             Label BR Text
         </span>
         </li>
         <li>
         <span class="draggable" id="labelbrpassword">
            Label BR Password
         </span>
          </li>
         <li>         
         <span class="draggable" id="labelbrcheckbox">
             Label BR Checkbox
         </span>
         </li>
         <li>
         <span class="draggable" id="labelbrradiobutton">
            Label BR Radio
         </span>
         </li>
         <li>
         <span class="draggable" id="labelbrtextarea">
             Label BR Textarea
         </span>
         </li>
         <li>
         <span class="draggable" id="labelbrdropdownlist">
             Label BR Select
         </span>
         </li>
         <li>
         <span class="draggable" id="labelbrinputfile">
             Label BR File
         </span>
         
      
    
     </li>
     </ul>
    
    
    
</div>
</div>










     <!--container to hold the drop targets-->
    <div class ="column100 droppable preview-container">
        
<form class="elemental-form" method ="GET">
</form>
        
  
    
    </div> 


