$(document).ready(function() {


	// Small navbar when scrool
	// ==========================================================
	
	var brandBarH = $('#js-brand-bar').innerHeight();
	
	$(document).on('scroll', function() {

		var documentScroll = $(this).scrollTop();

		if (documentScroll > brandBarH) {
			$('#js-navbar').addClass('_small');

		} else {
			$('#js-navbar').removeClass('_small');
		}

	});


	// Smooth scroll to the pages block
	// ==========================================================

	$('#js-navbar-logo a').on('click', function(e) {

		e.preventDefault();

		var currentBlock = $(this).attr('href'),
			currentBlockOffset = $(currentBlock).offset().top;

		$('html, body').animate({
			scrollTop: currentBlockOffset
		}, 1000);

	});

	$('#js-navbar-panel a').on('click', function(e) {

		e.preventDefault();

		var currentBlock = $(this).attr('href'),
			currentBlockOffset = $(currentBlock).offset().top;

		$('html, body').animate({
			scrollTop: currentBlockOffset
		}, 1000);

		console.log(currentBlockOffset);


	});


	// Smooth scroll to the pages block
	// ==========================================================

	$('.js-tabs-panel-nav__link').on('click', function(e) {

		e.preventDefault();
		var tads = $(this),
			answerIdTads = tads.attr('href');

		if (!tads.hasClass('_selected')) {
			$('.js-tabs-panel-nav__link').removeClass('_selected');
			$('.js-tabs-panel-content').removeClass('_selected');
		}

		tads.addClass('_selected');
		$(answerIdTads).addClass('_selected');


	});



});