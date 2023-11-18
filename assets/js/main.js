$(document).ready(function(){

    // owl carousel banner
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        autoplay:true,
        autoplayTimeout:5000,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });


    // project show more button
    $(".extra-work").hide();


    $(".show-more").click(function(){
        $(".extra-work").toggle();
    });

});