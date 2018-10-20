$(document).ready(function(){
    $('.find-out-more').click(function(){
        $('html, body').animate({
            scrollTop: $("#contact").offset().top
        }, 500);
    });
});

