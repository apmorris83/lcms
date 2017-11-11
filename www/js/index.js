$(document).ready(function(){
    $(window).scroll(function() {
        var headerHeight = $('#header').outerHeight() + 60;
        var navHeight = $('#lcms-nav').outerHeight();
        var scrollPos = $(window).scrollTop();
        var windowWidth = $(window).width();
    
        if (scrollPos >= headerHeight && windowWidth > 767) {
            $('#lcms-nav').addClass('nav-fixed');
            $('#header').css('margin-top', navHeight);
        } else {
            $('#lcms-nav').removeClass('nav-fixed');
            $('#header').css('margin-top', '0');
        }
    });
});

