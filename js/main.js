jQuery(document).ready(function($) {      
 //an tat ca tab_content
 $('.tab_content:not(:first)').hide();
 $('.tab li a').click(function(){
    $('.tab li a').removeClass('active');
    $(this).addClass('active');
    $('.tab_content').hide('slow');
    
    var activeTab = $(this).attr('href');
    //activeTab = #news //active = #random
    $(activeTab).show('slow');
        return false;
 });
});