jQuery(document).ready(function($) {      
 // hides the slickbox as soon as the DOM is ready
  $('#uRandom').hide();
 // shows the slickbox on clicking the noted link  
  $('#lirandom').click(function() {
    $('#uRandom').show('slow');
    return false;
  });
 // hides the slickbox on clicking the noted link  
  $('#linews').click(function() {
    $('#uRandom').hide('fast');
    return false;
  });
 
 // toggles the slickbox on clicking the noted link  
  

});