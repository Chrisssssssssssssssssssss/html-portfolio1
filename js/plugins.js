$(document).ready(function(){

	// Global Variables

		var toggle_primary_button = $('.wpburger'),
				toggle_primary_icon = $('.wpburger'),
				toggle_secondary_button = $('nav li span'),
				primary_menu = $('nav'),
				secondary_menu = $('nav ul ul'),
				webHeight = $(document).height(),
				window_width = $(window).width();

	// Company name and phone number on content area
	$("main * :not('h1')").each(function() {
		var regex1 = /(?![^<]+>)((\+\d{1,2}[\s.-])?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{6})/g;
		var regex2 = /(?![^<]+>)((\+\d{1,2}[\s.-])?\(?\d{3}\)?[\s.-]?\d{4}[\s.-]?\d{4})/g;
		var regex = /(?![^<]+>)((\+\d{1,2}[\s.-])?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4})/g;
				$(this).html(
						$(this).html()
						.replace(/CompanyName/gi, "<span class='comp'>$&</span>")
						.replace(regex1, "<strong>$&</strong>").replace(regex2, "<strong>$&</strong>").replace(regex, "<strong>$&</strong>"));
		});

		// Forms on content area
		var form = $('main').find('#myframe');
			if(form.length > 0) {
			document.getElementById('myframe').onload = function(){
			  calcHeight();
			};
		}

	// Add class to tab having drop down
	$( "nav li:has(ul)").find('span').addClass("active");

	//Multi-line Tab
	toggle_secondary_button.click(function(){
		$(this).parent("li").children("ul").slideToggle();
		$(this).toggleClass('active');
	});

	// Basic functionality for nav_toggle
	$(toggle_primary_button).click(function(){
		primary_menu.addClass('toggle_right_style');
		$('.toggle_right_nav').addClass('toggle_right_cont');
		$('body').addClass('active');
	});

	$('.toggle_nav_close, .menu_slide_right small').click(function(){
		primary_menu.removeClass('toggle_right_style')
		$('.toggle_right_nav').removeClass('toggle_right_cont');
		$('body').removeClass('active');
	});

	// Swap Elements
	function swap_this(){
		if(window_width <= 800){
			$('.logo').insertBefore('.wpburger');
			$('.nh-logo').insertBefore('.wpburger');
			$('#nav_area').insertBefore('header');
		} else if(window_width <= 1000 && window_width > 800) {
			$('.logo').insertAfter('header .wrapper');
		} else {
			$('.logo').insertAfter('.bnr_info');
		}
	}

	swap_this();

	// New Scroll Animation
	(function() {
  var Util,
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  Util = (function() {
    function Util() {}

    Util.prototype.extend = function(custom, defaults) {
      var key, value;
      for (key in custom) {
        value = custom[key];
        if (value != null) {
          defaults[key] = value;
        }
      }
      return defaults;
    };

    Util.prototype.isMobile = function(agent) {
      return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(agent);
    };

    return Util;

  })();

  this.WOW = (function() {
    WOW.prototype.defaults = {
      boxClass: 'wow',
      animateClass: 'animated',
      offset: 0,
      mobile: true
    };

    function WOW(options) {
      if (options == null) {
        options = {};
      }
      this.scrollCallback = __bind(this.scrollCallback, this);
      this.scrollHandler = __bind(this.scrollHandler, this);
      this.start = __bind(this.start, this);
      this.scrolled = true;
      this.config = this.util().extend(options, this.defaults);
    }

    WOW.prototype.init = function() {
      var _ref;
      this.element = window.document.documentElement;
      if ((_ref = document.readyState) === "interactive" || _ref === "complete") {
        return this.start();
      } else {
        return document.addEventListener('DOMContentLoaded', this.start);
      }
    };

    WOW.prototype.start = function() {
      var box, _i, _len, _ref;
      this.boxes = this.element.getElementsByClassName(this.config.boxClass);
      if (this.boxes.length) {
        if (this.disabled()) {
          return this.resetStyle();
        } else {
          _ref = this.boxes;
          for (_i = 0, _len = _ref.length; _i < _len; _i++) {
            box = _ref[_i];
            this.applyStyle(box, true);
          }
          window.addEventListener('scroll', this.scrollHandler, false);
          window.addEventListener('resize', this.scrollHandler, false);
          return this.interval = setInterval(this.scrollCallback, 50);
        }
      }
    };

    WOW.prototype.stop = function() {
      window.removeEventListener('scroll', this.scrollHandler, false);
      window.removeEventListener('resize', this.scrollHandler, false);
      if (this.interval != null) {
        return clearInterval(this.interval);
      }
    };

    WOW.prototype.show = function(box) {
      this.applyStyle(box);
      return box.className = "" + box.className + " " + this.config.animateClass;
    };

    WOW.prototype.applyStyle = function(box, hidden) {
      var delay, duration, iteration;
      duration = box.getAttribute('data-wow-duration');
      delay = box.getAttribute('data-wow-delay');
      iteration = box.getAttribute('data-wow-iteration');
      return box.setAttribute('style', this.customStyle(hidden, duration, delay, iteration));
    };

    WOW.prototype.resetStyle = function() {
      var box, _i, _len, _ref, _results;
      _ref = this.boxes;
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        box = _ref[_i];
        _results.push(box.setAttribute('style', 'visibility: visible;'));
      }
      return _results;
    };

    WOW.prototype.customStyle = function(hidden, duration, delay, iteration) {
      var style;
      style = hidden ? "visibility: hidden; -webkit-animation-name: none; -moz-animation-name: none; animation-name: none;" : "visibility: visible;";
      if (duration) {
        style += "-webkit-animation-duration: " + duration + "; -moz-animation-duration: " + duration + "; animation-duration: " + duration + ";";
      }
      if (delay) {
        style += "-webkit-animation-delay: " + delay + "; -moz-animation-delay: " + delay + "; animation-delay: " + delay + ";";
      }
      if (iteration) {
        style += "-webkit-animation-iteration-count: " + iteration + "; -moz-animation-iteration-count: " + iteration + "; animation-iteration-count: " + iteration + ";";
      }
      return style;
    };

    WOW.prototype.scrollHandler = function() {
      return this.scrolled = true;
    };

    WOW.prototype.scrollCallback = function() {
      var box;
      if (this.scrolled) {
        this.scrolled = false;
        this.boxes = (function() {
          var _i, _len, _ref, _results;
          _ref = this.boxes;
          _results = [];
          for (_i = 0, _len = _ref.length; _i < _len; _i++) {
            box = _ref[_i];
            if (!(box)) {
              continue;
            }
            if (this.isVisible(box)) {
              this.show(box);
              continue;
            }
            _results.push(box);
          }
          return _results;
        }).call(this);
        if (!this.boxes.length) {
          return this.stop();
        }
      }
    };

    WOW.prototype.offsetTop = function(element) {
      var top;
      top = element.offsetTop;
      while (element = element.offsetParent) {
        top += element.offsetTop;
      }
      return top;
    };

    WOW.prototype.isVisible = function(box) {
      var bottom, offset, top, viewBottom, viewTop;
      offset = box.getAttribute('data-wow-offset') || this.config.offset;
      viewTop = window.pageYOffset;
      viewBottom = viewTop + this.element.clientHeight - offset;
      top = this.offsetTop(box);
      bottom = top + box.clientHeight;
      return top <= viewBottom && bottom >= viewTop;
    };

    WOW.prototype.util = function() {
      return this._util || (this._util = new Util());
    };

    WOW.prototype.disabled = function() {
      return !this.config.mobile && this.util().isMobile(navigator.userAgent);
    };

    return WOW;

  })();

}).call(this);


wow = new WOW(
  {
    animateClass: 'animated',
    offset: 100
  }
);
wow.init();
// END NEW

// Active
var links = document.querySelectorAll('nav ul li a, .footer_nav ul li a');
links.forEach(function (element) {
  element.addEventListener('click', function (e) {
    // PreventDefault to prevent redirect
    // e.preventDefault();
    links.forEach(function (element) {
      element.classList.remove('active');
    });
    this.classList.add('active');
  });
});

	// Reset all configs when width > 800
	$(window).resize(function(){
		window_width = $(this).width();

		swap_this();

		if(window_width > 800) {

			secondary_menu.removeAttr('style');
			toggle_secondary_button.removeClass("active");
			$('body').removeClass('active');
		}

	});

	$('.rslides').responsiveSlides();
	$('.box_skitter_large').skitter({
		theme: 'square',
		numbers_align: 'center',
		progressbar: false,
		navigation: true,
		numbers: false,
		dots:false,
		preview: false,
		interval: 4000
	});

// Change Text
	$(".main-entry").html($(".main-entry").html().replace("EverHealth Homecare Solutions", "<span class='comp'>EverHealth Homecare Solutions</span>"));

	$('.back_top').click(function () { // back to top
		$("html, body").animate({
			scrollTop: 0
		}, 900);
		return false;
	});

	$(window).scroll(function(){  // fade in fade out button
	var windowScroll = $(this).scrollTop();

		if (windowScroll > (webHeight * 0.5) ) {
			$(".back_top").fadeIn();
		} else{
			$(".back_top").fadeOut()
		};

		// For (AddThis) Plugins
		if($('body #at-share-dock').hasClass('at-share-dock')) {
			$('.back_top').addClass('withAddThis_plugins');
			$('.footer_btm').addClass('withAddThis_ftr_btm');
		} else {
			$('.back_top').removeClass('withAddThis_plugins');
			$('.footer_btm').removeClass('withAddThis_ftr_btm');
		}
		// End (AddThis) Plugins

	});

});
