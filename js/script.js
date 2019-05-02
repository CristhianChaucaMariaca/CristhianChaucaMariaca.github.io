$(document).ready(function(){
    $(".inicio").delay('1000').fadeOut();

    var html = $("#html-label").text();
    $("#html").animate({'width':'0%'}).animate({"width":html},2000);

    var css3 = $("#css3-label").text();
    $("#css3").animate({'width':'0%'}).animate({"width":css3},2000);

    var sassvar = $("#sassvar-label").text();
    $("#sassvar").animate({'width':'0%'}).animate({"width":sassvar},2000);

    var pugvar = $("#pugvar-label").text();
    $("#pugvar").animate({'width':'0%'}).animate({"width":pugvar},2000);

    var javascriptvar = $("#javascriptvar-label").text();
    $("#javascriptvar").animate({'width':'0%'}).animate({"width":javascriptvar},2000);

    var jqueryvar = $("#jqueryvar-label").text();
    $("#jqueryvar").animate({'width':'0%'}).animate({"width":jqueryvar},2000);

    var javavar = $("#javavar-label").text();
    $("#javavar").animate({'width':'0%'}).animate({"width":javavar},2000);

    var mysqlvar = $("#mysqlvar-label").text();
    $("#mysqlvar").animate({'width':'0%'}).animate({"width":mysqlvar},2000);

    var pythonvar = $("#pythonvar-label").text();
    $("#pythonvar").animate({'width':'0%'}).animate({"width":pythonvar},2000);

    var gitvar = $("#gitvar-label").text();
    $("#gitvar").animate({'width':'0%'}).animate({"width":gitvar},2000);

    var securityvar = $("#securityvar-label").text();
    $("#securityvar").animate({'width':'0%'}).animate({"width":securityvar},2000);

    $('#toggle-menu').click(function () { 
        $(this).next().slideToggle();
    });

});