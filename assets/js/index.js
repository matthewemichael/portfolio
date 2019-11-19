$('.nav').click(function() {
    var id = $(this).attr('id');
    $('html, body').animate({
        scrollTop: ($('#' + id + '.section').offset().top)
    }, 1000);
});

$('.navbar-nav>li>a').on('click', function(){
    $('.navbar-collapse').collapse('hide');
});

// $(window).on('resize', function() {
//     if($(window).width() < 768) {
//         $('nav').addClass('navbar-light bg-light');
//     }
//     else if($(window).width() > 768) {
//         $('nav').removeClass('navbar-light bg-light')
//     }
// });

