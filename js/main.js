jQuery(document).ready(function($) {  
    //********CODE THEO VIDEO*******//
 //an tat ca tab_content trừ cái đầu tiên
// $('.tab_content:not(:first)').hide();
// $('.tab li a').click(function(){
//    $('.tab li a').removeClass('active');
//    $(this).addClass('active');
//    $('.tab_content').hide('slow');
//    
//    var activeTab = $(this).attr('href');
//    //activeTab = #news //active = #random
//    $(activeTab).show('slow');
//        return false;
 //});
    //********END CODE THEO VIDEO*******//
    
    //********BOOTSTRAP JQUERY******//
//    $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
//    e.target // activated tab
//    e.relatedTarget // previous tab
//    });
    
    $('#myTab a').click(function (e) {
  e.preventDefault()
  $(this).tab('show')
    });
    
});