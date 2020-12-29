$(document).ready( function() {
function resizeHeaderSlider(){
		
		var h =  Math.min($(window).width() * .48, $(window).height() - 180 - 15 );
		if( $(window).width() > 960 ){
			h = Math.max(h, 540);
		}
		
		$('.hero-slider .image-holder').height( h );
		$('.hero-slider .data').css('bottom', parseInt(h*.12) );
		
		if( $(window).width() > 960 ){
			$('.hero-slider .flickity-prev-next-button').css('top', '50%');
		}else{
			$('.hero-slider .flickity-prev-next-button').css('top', h*.5);
		}
		
	}
	
	resizeHeaderSlider(); //Set image height
	
	$(window).resize(function(){
		resizeHeaderSlider();		
		heroSlider.flickity('resize');
		
		resizeMainBanner();
	});
	
	var heroSlider = $('.hero-slider').flickity({
		cellSelector: '.item',
		wrapAround: true,
		autoPlay: $(window).width() > 960 ? 7000 : false,
		selectedAttraction: 0.012,
		friction: 0.2,
		adaptiveHeight: true,
		pauseAutoPlayOnHover: false,
		pageDots: false,
		prevNextButtons: true,
		arrowShape: { 
  			x0: 25,
  			x1: 60, y1: 40,
  			x2: 65, y2: 35,
  			x3: 35
		}
	});
	
	
	resizeHeaderSlider(); //Set nav-button top position
	
	$('.hero-slider').each(function(){
	
		$(this).lightGallery({
    		selector: '.box-btn.video,.video-button',
			download: false,
			counter: false,
			videoMaxWidth: 1440
		});
		
    });
});    