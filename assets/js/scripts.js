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
    function setFlexImages() {
        if ( $('.flex-images').length != 0 ) {
            $('.flex-images').flexImages({rowHeight: 180});
        }
    }
    setFlexImages();
    //
    function setScrollspy() {
        if ( $('#header .sub-scroll-menu').length != 0 ) {
            $('#header .sub-scroll-menu').scrollspy({ offset: -260 });
        }
    }
    setScrollspy();
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
            margin: 15,
            loop: false,
            autoWidth: true,
            smartSpeed: 500
        });
    }
    //
    if ( $('.flickity-row').length != 0 ) {
        $('.flickity-row').flickity({
            freeScroll: true,
            cellSelector: '.item',
            draggable: true,
            contain: true,
            prevNextButtons: false,
            pageDots: false
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
            prevArrow: '<button type="button" class="slick-prev"><span class="arr lft"></span></button>',
            nextArrow: '<button type="button" class="slick-next"><span class="arr rgt"></span></button>',
            slidesToShow: 4,
            slidesToScroll: 1,
            responsive: [
                {
                  breakpoint: 1280,
                  settings: {
                    slidesToShow: 3
                  }
                },
                {
                  breakpoint: 768,
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
        blinkContent();
    });
    //
    $('.b-main-modal .main-modal-inner .content img').on('click touchstart', function() {
        blinkContent();
    });
    //
    $(window).keyup(function (event) {
        if ( event.keyCode == 37 ) {blinkContent();} //arrow left keyup
        if ( event.keyCode == 39 ) {blinkContent();} //arrow right keyup
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
    //костыль для страницы автора
    if ( $('body.author-page').is('.second-screen') ) {
        $(window).scroll(function () {
            if (parseInt($(window).width()) < 1281) {
                if ($(this).scrollTop() > 725) {
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
            }
            if (parseInt($(window).width()) < 769) {
                if ($(this).scrollTop() > 315) {
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
            }
        });
    }

    //
    var flag = false;
    $('.project-description .title').bind('click touchstart', function(){
        if (!flag) {
            flag = true;
            setTimeout(function(){ flag = false; }, 100);
            if ( $(window).width() <= 768 ) {
                $(this).toggleClass('open').siblings('.expand').toggleClass('open');
            }
        }
    });

    //костыль для страницы проекта
    if ( $('body.project-page').is('.second-screen') ) {
        $(window).scroll(function () {
            if (parseInt($(window).width()) < 1281) {
                if ($(this).scrollTop() > 770) {
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
            }
            if (parseInt($(window).width()) < 769) {
                if ($(this).scrollTop() > 385) {
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
            }
        });
    }

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
    //
    checkTheme();
    //
    var $carousel = $('.home-page .carousel').flickity();
    $carousel.on( 'select.flickity', function() {
        checkTheme();
    });

    // popup description positio
    function setDescHeight() {
        if ($(window).width() <= 1279) {
            var descHeight = $('.main-modal-inner .content img').height();
            $('.project-description').css('top', descHeight + 26);
        }
    };

    $('.b-works .item').on('click', function () {
        setDescHeight();
    });

    // set mustread-carousel arrow position
    function setCarouselArrowPosition() {
        var carouselHeightImage = $('.mustread-carousel .slick-slide img').height();
        var carouselArrowPosition = (carouselHeightImage - 35) / 2;
        $('.mustread-carousel .slick-arrow').css('top', carouselArrowPosition);
    };
    setCarouselArrowPosition();

    $(window).on('resize', function(){
        if ($(window).width() <= 1279) {
            setDescHeight();
        } else {
            $('.project-description').css('top', 'auto');
        }
        //
        setFlexImages();
        setScrollspy();
        setCarouselArrowPosition();
    });
});

// блинк проектов
function blinkContent() {
    $('.main-modal-inner .content').addClass('now-hidden');
    setTimeout(function() {
        $('.main-modal-inner .content').removeClass('now-hidden');
    }, 600);
}

// проверка темы для слайдера на главной
function checkTheme() {
    var homeCarouselSlide = $('.home-page .carousel-cell'),
        isSelectedSlide = $('.home-page .carousel-cell.is-selected'),
        themeChangeItems = $('.home-page').find('.static-banner-logo, .static-banner-menu, .flickity-prev-next-button.next, .flickity-page-dots, #header');
    if ( isSelectedSlide.hasClass('black-inner-theme') ) {
        themeChangeItems.addClass('black-inner-theme').removeClass('white-inner-theme');
    } else if ( isSelectedSlide.hasClass('white-inner-theme') ) {
        themeChangeItems.addClass('white-inner-theme').removeClass('black-inner-theme');
    }
}