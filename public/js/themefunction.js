/*--------------------------------------
		CUSTOM FUNCTION WRITE HERE		
--------------------------------------*/
"use strict";
jQuery(document).on('ready', function() {

	if (navigator.userAgent.indexOf('Mac OS X') != -1) {
		$("body").addClass("mac");
	};
	if (navigator.userAgent.match(/(iPhone|iPod|iPad)/i)) {
		$("body").addClass("mac");
	};
	// if (navigator.userAgent.toUpperCase().indexOf('iPhone')>=0) {
	// 	$("body").addClass("mac");
	// };
	// if (navigator.userAgent.toUpperCase().indexOf('iPod')>=0) {
	// 	$("body").addClass("mac");
	// };
	/* ---------------------------------------
			STICKY HEADER
	--------------------------------------- */
	$('.rt-btnclose').click(function(){
		$('.rt-sidebarwrapper').css({'left' : '-650px'})
	});

	$('.rt-btnsidebar').click(function(){
		$('.rt-sidebarwrapper').css({'left' : '0'})
	});
	$('.rt-btncloselocation').click(function(){
		$('.rt-columone').css({'left' : '0'})
	});
	$('.rt-btncloselocationsidebar').click(function(){
		$('.rt-columone').css({'left' : '-450px'})
	});
	/* -------------------------------------
			FLAG DROPDOWN
	-------------------------------------- */
		$('.select-country').flagStrap({
			countries: {
				"US": "USD",
				"AU": "AUD",
				// "CA": "CAD",
				// "SG": "SGD",
				// "GB": "GBP",
			},
			buttonSize: "btn-sm",
			buttonType: "btn-info",
			labelMargin: "10px",
			scrollable: false,
			scrollableHeight: "150px"
		});
	/* -------------------------------------
			SCROLL TO TOP
	-------------------------------------- */
	$('.owl-carousel').owlCarousel({
		loop:true,
		margin:40,
		nav:true,
		dots:false,
		responsive:{
			0:{items:1},
			700:{items:2},
			1000:{items:3},
			1300:{items:4}
		}
	});
	$('#rt-datetimepicker').datetimepicker({
		format : 'dd MM yyyy,' ,
		pickTime: false ,
		autoclose: true,
	});
	$(document).on('change', '#at-asignedtasks', function(){
		$('.at-restaurantmapbox').toggleClass('at-zeroopacity');
	});

});