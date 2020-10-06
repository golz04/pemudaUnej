$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        margin:10,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:4
            }
        }
    })

	$(window).scroll(function() {
		if ($(window).scrollTop() >= 350) {
      		$(".navbar").css("background-color", "white");
                  $(".navbar a li").css("color", "black");
                  $(".navbar").css("box-shadow", "1px 1px 10px 1px #bfbfbf");
                  $(".navbar").css("transition", ".3s");
                  $(".logo-nav").css("width", "50px");
                  $(".logo-nav").css("height", "50px");
		} else {
      		$(".navbar").css("background-color", "transparent");
                  $(".navbar a li").css("color", "white");
                  $(".navbar").css("box-shadow", "none");
                  $(".navbar").css("transition", ".3s");
                  $(".logo-nav").css("width", "70px");
                  $(".logo-nav").css("height", "70px");
		}
	});

    $(".nav-open").click(function() {
        $(".nav-res").css("margin-top", "0");
    });
    $(".nav-close").click(function() {
        $(".nav-res").css("margin-top", "-5000px");
    });

    $("#go-down").click(function() {
        $('html, body').animate({
              scrollTop: $("#target-down").offset().top - 85
        }, 1000);
    });
});