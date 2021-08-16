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


// $(".slider_box").slick();
$('.single-item').slick();

});
