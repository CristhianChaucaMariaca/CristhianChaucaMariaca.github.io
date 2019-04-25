$(document).ready(function(){
    $(".inicio").delay('1000').fadeOut();
    var html = $("#html-label").text();
    $("#html").animate({'width':'0%'}).animate({"width":html},2000);
});