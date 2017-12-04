$(document).ready(function() {

	$('.locations .buttons .item').on('click', function(event) {
		var buttons = $('.locations .buttons .item'),
			curid = $(this).data('id'),
			containerBlock = $('.locations-type');
		containerBlock.hide();
		$('#'+curid).fadeIn(700);
		buttons.removeClass('active');
		$(this).addClass('active');
		event.stopPropagation();
	});
    //
    if ( $('#header .sub-scroll-menu').length != 0 ) {
        $('#header .sub-scroll-menu').scrollspy({ offset: -260 });
    }
    //
    $('.personal .item .main').on('click', function() {
        var parentItem = $(this).parents('.item'),
            allItems = $('.personal .item');

        if ( parentItem.hasClass('active') ) {
            parentItem.removeClass('active');
        } else {
            parentItem.addClass('active');
        }
    });
    //
    if ( $('.project-row').length != 0 ) {
        $('.project-row').owlCarousel({
            margin:15,
            loop:false,
            autoWidth:true,
            items:4
        });
    }
    //
    if ( $('.author-gal').length != 0 ) {
        $('.author-gal').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            dots: true,
            infinite: true,
        });

        $('.slick-slide').on('click', function() {
            $('.author-gal').slick('slickNext');
        });
    }
    //
    if ( $('.mustread-carousel').length != 0 ) {
        $('.mustread-carousel').slick({
            dots: false,
            infinite: true,
            speed: 300,
            centerMode: true,
            prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-arrow-left" aria-hidden="true"></i></button>',
            nextArrow: '<button type="button" class="slick-next"><i class="fa fa-arrow-right" aria-hidden="true"></i></button>',
            slidesToShow: 4,
            slidesToScroll: 1,
            responsive: [
                {
                  breakpoint: 768,
                  settings: {
                    slidesToShow: 3
                  }
                },
                {
                  breakpoint: 480,
                  settings: {
                    slidesToShow: 1
                  }
                }
            ]
        });
    }
    //
    $('.locations .headline').on('click', function() {
        $(this).parent().toggleClass('active');
    });
    //
    if ( $('.tipical-gallery').length != 0 ) {
        $('.tipical-gallery').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            dots: true,
            infinite: true,
        });

        $('.tipical-gallery .slick-slide').on('click', function() {
            $('.tipical-gallery').slick('slickNext');
        });
    }
    if ( $('.flex-images').length != 0 ) {
        $('.flex-images').flexImages({rowHeight: 180});
    }
    //
    $('.b-project-about .open').on('click', function() {
        $(this).parents().find('.expander').addClass('active');
        $(this).fadeOut(300);
    });
    //
    //Проверка, если в карусели один слайд
    $('.flickity-enabled').each( function() {
        if ( $(this).find('.flickity-slider').children('.carousel-cell').length == 1 ) {
            $(this).addClass('one-slide');;
        }
    });
    //Такая же проверка, но для слик-слайдера
    $('.slick-slider').each( function() {
        if ( $(this).find('.slick-track').children('.item').length == 1 ) {
            $(this).addClass('one-slick-slide');
        } else if ( $(this).find('.slick-track').children('.item').length == 0 ) {
            $(this).addClass('zero-slick-slide');
        }
    });
    //
    if ( $('[data-fancybox]').length != 0 ) {
        $('[data-fancybox]').fancybox();
    }
    //
    $('.b-main-modal .control-btn').on('click touchstart', function() {
        $('.main-modal-inner .content').addClass('now-hidden');
        setTimeout(function() {
            $('.main-modal-inner .content').removeClass('now-hidden');
        }, 600);
    });
    //
    if ($('body').is('.second-screen')) {
        $(window).scroll(function () {
            if ($(this).scrollTop() > $(window).height()) {
                $('header').addClass("sticky");
            }
            else {
                $('header').removeClass("sticky");
            }
            //
            if ($(this).scrollTop() > 1 ) {
                $('header').addClass('banner-bottom').removeClass('fade-fast');
            } else {
                $('header').removeClass('banner-bottom').addClass('fade-fast');
            }
        });
    }
    //
    if ($(this).scrollTop() > $(window).height()) {
        $('header').addClass("sticky");
    }
    else {
        $('header').removeClass("sticky");
    }
    //
    if ($(this).scrollTop() > 1 ) {
        $('header').addClass('banner-bottom').removeClass('fade-fast');
    } else {
        $('header').removeClass('banner-bottom').addClass('fade-fast');
    }
    //
    $('.project-description .title').on('click', function() {
        if ( $(window).width() < 480 ) {
            $(this).toggleClass('open').parents('.project-description').find('.expand').slideToggle( "slow" );
        }
    });
    //
    // init Isotope
    var $grid = $('.isotope-grid').isotope({
        itemSelector: '.item',
        layoutMode: 'masonry',
        percentPosition: true,
        masonry: {
            columnWidth: '.item'
        },
    });
    // filter items on button click
    $('.news-tags').on( 'click', 'a', function() {
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({ filter: filterValue });
    });
    // change is-checked class on buttons
    $('.news-tags').each( function( i, tagsGroup ) {
        var $tagsGroup = $( tagsGroup );
        $tagsGroup.on( 'click', 'a', function() {
            $tagsGroup.find('.active').removeClass('active');
            $( this ).addClass('active');
        });
    });
});

