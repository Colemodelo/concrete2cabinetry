/*
	Telephasic by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	var	$window = $(window),
		$body = $('body');

	// Breakpoints.
		breakpoints({
			normal:    [ '1081px',  '1280px'  ],
			narrow:    [ '821px',   '1080px'  ],
			narrower:  [ '737px',   '820px'   ],
			mobile:    [ '481px',   '736px'   ],
			mobilep:   [ null,      '480px'   ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Dropdowns.
		$('#nav > ul').dropotron({
			mode: 'fade',
			speed: 300,
			alignment: 'center',
			noOpenerFade: true
		});

	// Nav.

		// Buton.
			$(
				'<div id="navButton">' +
					'<a href="#navPanel" class="toggle"></a>' +
				'</div>'
			)
				.appendTo($body);

		// Panel.
			$(
				'<div id="navPanel">' +
					'<nav>' +
						'<a href="index.html" class="link depth-0">Home</a>' +
						$('#nav').navList() +
					'</nav>' +
				'</div>'
			)
				.appendTo($body)
				.panel({
					delay: 500,
					hideOnClick: true,
					resetScroll: true,
					resetForms: true,
					side: 'top',
					target: $body,
					visibleClass: 'navPanel-visible'
				});

})(jQuery);

document.querySelector(".prevBtn").addEventListener("click", () => {
	changeSlides(-1);
 });
 document.querySelector(".nextBtn").addEventListener("click", () => {
	changeSlides(1);
 });
 var slideIndex = 1;
 showSlides(slideIndex);
 function changeSlides(n) {
	showSlides((slideIndex += n));
 }
 function currentSlide(n) {
	showSlides((slideIndex = n));
 }
 function showSlides(n) {
	var i;
	var slides = document.getElementsByClassName("Slide");
	var dots = document.getElementsByClassName("Navdot");
	if (n > slides.length) {
	   slideIndex = 1;
	}
	if (n < 1) {
	   slideIndex = slides.length;
	}
	Array.from(slides).forEach(item => (item.style.display = "none"));
	Array.from(dots).forEach(
	   item => (item.className = item.className.replace(" selected", ""))
	);
	slides[slideIndex - 1].style.display = "block";
	dots[slideIndex - 1].className += " selected";
 }

//  Navbar scroll dissappear
 var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("nav").style.top = "0";
  } else {
    document.getElementById("nav").style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
} 