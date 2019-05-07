$(document).ready(function(){
    $(".inicio").delay('1000').fadeOut();

    // ANIMACIÓN DE LOS BOTONES DE REDES SOCIALES
    $('#keyframe-uno').css('animation-play-state','running');
    $('#keyframe-dos').css('animation-play-state','running');
    $('#keyframe-tres').css('animation-play-state','running');
    $('#keyframe-cuatro').css('animation-play-state','running');
    $('#keyframe-cinco').css('animation-play-state','running');
    $('#keyframe-seis').css('animation-play-state','running');

    // %%%%%%%%%%%%%    ANIMACIONES GENERALES   %%%%%%%%%%%%%%%%%%%%%
    $('.perfil').css('animation-play-state','running');
    // %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

    $('#toggle-menu').click(function () { 
        $(this).next().slideToggle();
    });
    
    $('.link-inicio').click(function (){
        $('html, body').animate({scrollTop:0},1000);
    });

    $('.link-certificaciones').click(function () { 
        var offset = $('#certificaciones').offset();
        var top = offset.top;
        var left = offset.left;
        
        $('html, body').animate({scrollTop:top},1000);
    });

    $('.link-habilidades').click(function () { 
        var offset = $('#habilidades').offset();
        var top = offset.top;
        var left = offset.left;
        $('html , body').animate({scrollTop:top},1000);
    });

    $('.link-proyectos').click(function () { 
        var offset = $('#proyectos').offset();
        var top = offset.top;
        var left = offset.left;
        
        $('html , body ').animate({scrollTop:top},1000);
    });

    $('.link-contacto').click(function  (){ 
        var contacto = $('#contacto').offset();
        var top = contacto.top-20;
        $('html, body').animate({scrollTop:top}, 1000);        
    });

    $(window).scroll(function(){
        var winheight = $(window).scrollTop();
        var offset = $('#contacto').offset();
        var top = offset.top;
        var left = offset.left;
        
        if (winheight >= top-200) {
            $('.contacto .email h4').css('animation-play-state', 'running');
            $('.contacto .cellphone h4').css('animation-play-state','running');
        }
    });

    $(window).scroll(function () { 
        var winheight = $(window).scrollTop();
        var offset = $('#proyectos').offset();
        var top = offset.top;
        var left = offset.left;
        
        if(winheight >= top-200)
        {
            $('.proyecto a .proyecto-item').css({'animation-play-state':'running'})
        }
    });

    $(window).scroll(function(){
        var winheight   = $(window).scrollTop();
        var offset = $('#habilidades').offset();
        var top = offset.top;
        var left = offset.left;
        
        if (winheight >= top-200) {
            var html = $("#html-label").text();
            $("#html").css({"width":html});

            var css3 = $("#css3-label").text();
            $("#css3").css({'width':css3});

            var sassvar = $("#sassvar-label").text();
            $("#sassvar").css({'width':sassvar});

            var pugvar = $("#pugvar-label").text();
            $("#pugvar").css({'width':pugvar});

            var javascriptvar = $("#javascriptvar-label").text();
            $("#javascriptvar").css({'width':javascriptvar});

            var jqueryvar = $("#jqueryvar-label").text();
            $("#jqueryvar").css({'width':jqueryvar});

            var javavar = $("#javavar-label").text();
            $("#javavar").css({'width':javavar});

            var mysqlvar = $("#mysqlvar-label").text();
            $("#mysqlvar").css({'width':mysqlvar});

            var pythonvar = $("#pythonvar-label").text();
            $("#pythonvar").css({'width':pythonvar});

            var gitvar = $("#gitvar-label").text();
            $("#gitvar").css({'width':gitvar});

            var securityvar = $("#securityvar-label").text();
            $("#securityvar").css({'width':securityvar});        
        }
    })
    
});