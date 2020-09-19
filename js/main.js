   	/*-----------------------------------------
 				wow active
 	------------------------------------------*/

 	$(function () {
 		new WOW().init();
 	}); 

     /*----------------------------------------
            Video Plugin
        ----------------------------------------*/

    var $iframe = $('iframe'),
        $videoLink = $('.video-link'),
        playerTemplate =
        '<div class="player"><div class="player__video"><div class="video-filler"></div><button class="video-close">&times;</button><iframe class="video-iframe" src="{{iframevideo}}" frameborder="0" allowfullscreen></iframe></div><div/>';

    $videoLink.on('click', function (e) {
        var localTemplate = '',
            videoWidth = parseInt($(this).data('width')),
            videoHeight = parseInt($(this).data('height')),
            videoAspect = (videoHeight / videoWidth) * 100,
            // elements
            $player = null,
            $video = null,
            $close = null, 
            $iframe = null;

        e.preventDefault();

        localTemplate = playerTemplate.replace(
            '{{iframevideo}}',
            $(this).prop('href')
        );

        $player = $(localTemplate);

        $player.find('.video-filler').css('padding-top', videoAspect + '%');

        $close = $player.find('.video-close').on('click', function () {
            $(this)
                .off()
                .closest('.player')
                .hide()
                .remove();
        });

        $player.appendTo('body').addClass('js--show-video');
    })	

	     /*----------------------------------------
          app-screen slider
        ----------------------------------------*/
	
 	$('.app-slide-wprapper  ').owlCarousel({
 		loop: true,
 		margin: 20,
 		navText: ["<i class='fas fa-angle-left'></i>", "<i class='fas fa-angle-right'></i>"],
		responsive: {
 			0: {
 				items: 1
 			},
			360:{
				items: 2
			},
 			600: {
 				items: 3
 			},
 			1000: {
 				items: 4
 			}	
 		}
 	});



	     /*----------------------------------------
         Testimonial slider
        ----------------------------------------*/
	
 	$('.test-slider  ').owlCarousel({
 		loop: true,
 		margin: 20,
		 autoplay:true,
    autoplayTimeout:1000,
    autoplayHoverPause:true,
		responsive: {
 			0: {
 				items: 1
 			},
			360:{
				items: 1
			},
 			575: {
 				items: 2
 			},
 			1000: {
 				items: 3
 			}	
 		}
 	});

/*================================================
		SHOW & HIDE WHITE NAVIGATION BAR
=================================================*/

$(function () {
	//Show white menu on load
	menuShownScroll();

	$(window).scroll(function () {
		menuShownScroll();
	});

	function menuShownScroll() {
		if ($(window).scrollTop() >50) {

			$('nav').addClass('bac-hide');
			
			
			$("#back-to-top-btn").fadeIn();
			
		} else {
			$('nav').removeClass('bac-hide');
			
			// Hide Back to Top Button
			
			$("#back-to-top-btn").fadeOut();
		}
	};

});

/*================================================
		SHOW & HIDE WHITE NAVIGATION BAR ( Home 2)
=================================================*/

$(function () {
	//Show white menu on load
	menuShownScroll();

	$(window).scroll(function () {
		menuShownScroll();
	});

	function menuShownScroll() {
		if ($(window).scrollTop() >50) {

			if(!document.querySelector('nav').classList.contains('header-5')){
			$('nav').addClass('home-2-top');
			   }
			
			
		} else {
			$('nav').removeClass('home-2-top');
			
			
		}
	};

});


/*================================================
				SMOOTH SCROLL
=================================================*/

$(function () {
	$('a.smooth-scroll').click(function (event) {
		event.preventDefault();

		// Get section ID like #home, #about .. etc
		var section_id = $(this).attr("href");

		$("html, body").animate({
			scrollTop: $(section_id).offset().top - 64
		}, 1250, "easeInOutExpo");
		 setTimeout(function(){
			document.getElementById("mySidebar").style.width = "0px";
		},50);
	});
});
 	/*-----------------------------------------
 				wow active
 	------------------------------------------*/

 	$(function () {
 		new WOW().init();
 	});

 	/*----------------------------------------
 	          Preloader
 	 ----------------------------------------*/

 	$(window).on('load', function () {
 		$('#status').fadeOut();
 		$('#preloader').delay(350).fadeOut('slow');
 	});
	 
	     // Navigation hide on scroll on mobile screen
    $(window).on('scroll', function() {
        $('.navbar-collapse').collapse('hide')
    });