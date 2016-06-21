$(function() {
	"use strict";

	var topoffset = 100;

	$('body').scrollspy({
		target: '#navbar', 
		offset: topoffset
	});

	$('#navbar').on('activate.bs.scrollspy', function() {
		var hash = $(this).find('li.active a').attr('href');

		if(hash == '#services') {
			$('.col-md-4').addClass('wow fadeInLeft animated');
		}

		if(hash == '#contact') {
			$('#top').addClass('ontop wow fadeInUp animated');
		} else {
			$('#top').removeClass('ontop');
		}

		if(hash !=='#home') {
			$('nav').addClass('inbody');
		} else {
			$('nav').removeClass('inbody');
		}
	});

	$('a[href*="#"]:not([href="#"])').click(function() {
	    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
	      var target = $(this.hash);
	      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	      if (target.length) {
	        $('html, body').animate({
	          scrollTop: target.offset().top
	        }, 1000);
	        return false;
	      }
	    }
	  });

	function initialize() {
	  var mapProp = {
	    center:new google.maps.LatLng(10.823099,106.629664),
	    zoom:7,
	    mapTypeId:google.maps.MapTypeId.ROADMAP
	  };
	  var map=new google.maps.Map(document.getElementById('map'), mapProp);
	}
	google.maps.event.addDomListener(window, 'load', initialize);

});