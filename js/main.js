$(document).ready(function() {

	//E-mail Ajax Send
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});
	$(function() {
	$('.menu a, .btn_podrobnee').each(function() {
		$(this).on('click', function(e) {
			e.preventDefault();
			var scrollTo = $(this).attr('href');
			var whitespace = scrollTo == '#s1' ? 70 : 30;
			$('html,body').animate({
				scrollTop: $(scrollTo).offset().top - whitespace
				}, 1000);
			});
		});
	});

	$(document).ready(function() {
	  $('.slider_box').slick({
	    // slidesToShow: 3,
	    // slidesToScroll: 1,
			arrows: false,
			dots: true,
			button:false,
	    autoplay: true,
	    autoplaySpeed: 40000,
			dots: true,
	  });
	});

});
