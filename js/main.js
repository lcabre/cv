$(document).ready(function(){
	
	$(".nav a").on("click", function(){
		$(".nav").find(".active").removeClass("active");
		$(this).parent().addClass("active");
	});
	$(".nav a").on("hover", function(){
		$(".nav").find(".active").removeClass("active");
		$(this).parent().addClass("active");
	});
	$( ".nav a" ).hover(
		function() {
			$( this ).addClass( "active" );
		}, function() {
			$( this ).removeClass( "active" );
	});


	$(".smoothScroll").on("click", function(event){
		event.preventDefault();
		$('html, body').animate({
			scrollTop: $( $.attr(this, 'href') ).offset().top-40
		}, 700, 'easeInOutExpo');
	});


	/** Wayponts **/

	var anim = function() {
		$('.anim').waypoint( function( direction ) {
			if( direction === 'down' && !$(this).hasClass('animated') ) {
					$(this.element).addClass('fadeInUp animated');
			}
		} , { offset: '70%' } );
	};

	var animdown = function() {
		$('.animdown').waypoint( function( direction ) {
			if( direction === 'down' && !$(this).hasClass('animated') ) {
				$(this.element).addClass('fadeInDown animated');
				setTimeout(function(){
					$('.sobremi').addClass('fadeInUp animated');
				}, 500);
			}
		} , { offset: '70%' } );
	};

	var hab1 = function() {
		$('.hab1').waypoint( function( direction ) {
			if( direction === 'down' ) {
				$( ".hab1 .progreso" ).each(function( index ) {
					variable = $( this ).attr("porcentaje");
					$(this).css("width",variable+"%" );
				});
            }
        } , { offset: '35%' } );
	};

	var hab2 = function() {
		$('.hab2').waypoint( function( direction ) {
			if( direction === 'down' ) {
				$( ".hab2 .progreso" ).each(function( index ) {
					variable = $( this ).attr("porcentaje");
					$(this).css("width",variable+"%" );
				});
            }
        } , { offset: '35%' } );
	};

	var idiomas = function() {
		$('#idiomas').waypoint( function( direction ) {
			if( direction === 'down' ) {
				$( "#idiomas .progreso" ).each(function( index ) {
					variable = $( this ).attr("porcentaje");
					$(this).css("width",variable+"%" );
				});
            }
        } , { offset: '35%' } );
	};

	var fade = function() {
		$('.fade').waypoint( function( direction ) {
			if( direction === 'down' && !$(this).hasClass('animated') ) {
				$(this.element).addClass('fadeIn animated');
			}
		} , { offset: '70%' } );
	};

	var fadeleft = function() {
		$('.fadeleft').waypoint( function( direction ) {
			if( direction === 'down' && !$(this).hasClass('animated') ) {
				$(this.element).addClass('fadeInLeft animated');
			}
		} , { offset: '70%' } );
	};

	var faderight = function() {
		$('.faderight').waypoint( function( direction ) {
			if( direction === 'down' && !$(this).hasClass('animated') ) {
				$(this.element).addClass('fadeInRight animated');
			}
		} , { offset: '70%' } );
	};

	function isScrolledIntoView(elem)
	{
		var docViewTop = $(window).scrollTop();
		var docViewBottom = docViewTop + $(window).height();

		var elemTop = $(elem).offset().top;
		var elemBottom = elemTop + $(elem).height();

		return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
	}

	function circulolibre() {
		if(isScrolledIntoView("header")){
			$(".circulolibre").addClass('fadeOut animated');
			$(".circulolibre").one(whichAnimationEvent(),
				function(event) {
					$(".circulolibre").removeClass('fadeOut animated fadeInLeft'); 
				});
		}else{

			$(".circulolibre").addClass('fadeIn animated'); 
		}
	}

	function enter() {
		if($(window).scrollTop() != 0 ){
			$(".circulolibre").addClass('fadeIn animated'); 
		}
	}

	function whichAnimationEvent(){
		var t,
		el = document.createElement("fakeelement");

		var animations = {
			"animation"      : "animationend",
			"OAnimation"     : "oAnimationEnd",
			"MozAnimation"   : "animationend",
			"WebkitAnimation": "webkitAnimationEnd"
		}

		for (t in animations){
			if (el.style[t] !== undefined){
				return animations[t];
			}
		}
	}
	window.onscroll = function() {circulolibre()};
	fade();
    fadeleft();
    faderight();
    anim();
    hab1();
    hab2();
    idiomas();
    enter();
    animdown();
});