$(document).ready(function(){
    //menu icon change
    $('button.navbar-toggler').on('click',function(){
        $('button.navbar-toggler span').toggleClass('fas, fa-times');
        $('.navbar').toggleClass('backgroundColor');
    });

    //banner slider
    $('.banner-slider').slick({
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: false,
        infinite: true,
        dots: true,
    });

    //testimonial slider
    $('.testimonial-slider').slick({
        autoplay: true,
        autoplaySpeed: 4000,
        slidesToShow: 2,
        arrows: false,
        infinite: true,
        dots: true,
        responsive: [
            {
              breakpoint: 767.98,
              settings: {
                slidesToShow: 1,
              }
            }
          ]
    });

    //brand slider
    $('.brand-slider').slick({
        autoplay: true,
        autoplaySpeed: 4000,
        slidesToShow: 5,
        arrows: true,
        infinite: true,
        centerMode: true,
        centerPadding: '0',
        prevArrow: '<i class="slick-prev prev-arrow fas fa-chevron-left"></i>',
        nextArrow: '<i class="slick-next next-arrow fas fa-chevron-right"></i>',
        responsive: [
            {
              breakpoint: 767.98,
              settings: {
                slidesToShow: 3,
              }
            }
          ]
    });

    //about video popup
    $('.venobox').venobox();

    //team member slide up and down
    $('#team .team-member').on('mouseenter',function(){
        $(this).find('p.common-p').slideDown(400);
    });

    $('#team .team-member').on('mouseleave',function(){
        $(this).find('p.common-p').slideUp(400);
    });

    //counter up js
    $('.counter').counterUp({
        delay: 5,
        time: 2000
    });

    //wow js plugin
    new WOW().init();


    //custom jquery code for functionalities
    let backToTop = $('#backToTop');
    let logo = $('.navbar .navbar-brand, #contact .copyright a, #contact .footer-logo a');
    let menu = $('.navbar');
    let html_body = $('html,body');
    // let logo = $('');
      
    $(window).on('scroll',function(){
        let scrolling = $(window).scrollTop();
          
        //sticky menu function
        if(scrolling > 120){
            menu.addClass('fixed-menu');
        }else{
            menu.removeClass('fixed-menu');
        }
          
        //back To Top hide/show function
        if(scrolling > 400){
            backToTop.fadeIn();
        }else{
            backToTop.fadeOut();
        }
    });
      
    //back To Top click function
    backToTop.on('click',function(){
        html_body.animate({
            scrollTop : 0
        },1200);

        $('.navbar .navbar-nav li.home').addClass('active').siblings().removeClass('active');
    });

    //click on logo
    logo.on('click',function(){
        html_body.animate({
            scrollTop : 0
        },1200);

        $('.navbar .navbar-nav li.home').addClass('active').siblings().removeClass('active');
    });

    //smooth scroll and active menu button code
    $('.navbar .navbar-nav .nav-item .nav-link').on('click', function(){
        //add active class in nav item
        $(this).parent().addClass('active').siblings().removeClass('active');
        //smooth scroll on menu click
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname){
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if(target.length){
                html_body.animate({
                    scrollTop: target.offset().top - 0
                },1000);
                return false;
            }
        }
    });


});