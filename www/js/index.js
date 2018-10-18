$(document).ready(function(){
    // $(window).scroll(function() {
    //     var headerHeight = $('#header').outerHeight() + 60;
    //     var navHeight = $('#lcms-nav').outerHeight();
    //     var scrollPos = $(window).scrollTop();
    //     var windowWidth = $(window).width();
    
    //     if (scrollPos >= headerHeight && windowWidth > 767) {
    //         $('#header').addClass('active');
    //     } else {
    //         $('#header').removeClass('active');
    //     }
    // });

    // $(window).scroll(function() {
    //     var hT = $('#services').offset().top,
    //         hH = $('#services').outerHeight(),
    //         wH = $(window).height(),
    //         wS = $(this).scrollTop();
    //     if (wS > (hT+hH-wH)){
    //         $('#header').addClass('active');
    //     } else {
    //         $('#header').removeClass('active');
    //     }
    //  });

     var element_position = $('#services').offset().top;

     $(window).on('scroll', function() {
         var y_scroll_pos = window.pageYOffset;
         var scroll_pos_test = element_position;
     
         if(y_scroll_pos > scroll_pos_test) {
            $('#header').addClass('active');
        } else {
            $('#header').removeClass('active');
        }
     });

    $('.find-out-more').click(function(){
        $('html, body').animate({
            scrollTop: $("#contact").offset().top
        }, 500);
    });
});

