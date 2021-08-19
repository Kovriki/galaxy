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

// 	$(document).ready(function() {
// 	  $('.slider_box').slick({
// 	    // slidesToShow: 3,
// 	    // slidesToScroll: 1,
// 			arrows: false,
// 			dots: true,
// 			button:false,
// 	    autoplay: true,
// 	    autoplaySpeed: 40000,
// 			dots: true,
// 			onAfterChange : function() {
// 					 player.stopVideo();
// 	  },
// 	});
// })


///////
$('.slider_box').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 30000,
      dots: true,
      infinite: true,
      adaptiveHeight: true,
      arrows: false
  });

  var video = $('.slider_box .slick-active').find('video').get(0).play();

  $('.slider_box').on('afterChange', function(event, slick, currentSlide, nextSlide){
    $('.slider_box .slick-slide').find('video').get(0).pause();
    var video = $('slider_box .slick-active').find('video').get(0).play();
});

/////////
//
// $('video').on('beforeChange', function(event, slick, currentSlide, nextSlide){
//     var data = {"event":"command","func":"pauseVideo","args":""};
//     var message = JSON.stringify(data);
//     $("video", slick.$slides[currentSlide])[0].contentWindow.postMessage(message, '*');
// });


/////////


// остановка автослайдера при воспроизведении видео
// function onPlayerReady() {
//     $("#slide-video").on("click", function() {
//
//         // pause the slider
//         $('#slider').slick('slickPause');
//
//         $(this).css('background','transparent');
//         $("#player").show();
//         player.playVideo();
//     });
// }




	// $('.slider_box').on('afterChange', function(event, slick, currentSlide){
	//   if (currentSlide == 2) {
	//     $('.slider_box').slick('slickPause');
	//     myVideo.play();
	//   }
	// });

});
