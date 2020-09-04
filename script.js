
//parallax

// jumbotron
$(window).on('load', function() {
    $('.jumbotron .display-4').addClass('muncul');
    $('.jumbotron a').addClass('muncul');
});


$(window).scroll(function() {
    var wScroll = $(this).scrollTop();


    //display-4   
    if(wScroll > $('.jumbotron .display-4').offset().top) {
        $('.navbar').addClass('bg-white shadow-sm');
        $('.navbar-brand').addClass('scroll');
        $('.nav-link').addClass('scroll');
    }else{
        $('.navbar').removeClass('bg-white shadow-sm');
        $('.navbar-brand').removeClass('scroll');
        $('.nav-link').removeClass('scroll');
    }

    //info-panel
    if (wScroll > $('.info-panel').offset().top - 350){
        $('.info-panel').addClass('muncul');
    }

    // workspace
    if (wScroll > $('.workingspace').offset().top - 300){
        $('.workspace-kiri').addClass('muncul');
        $('.workspace-kanan').addClass('muncul');
    }

});