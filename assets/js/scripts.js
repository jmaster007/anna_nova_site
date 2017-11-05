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
        $('#header .sub-scroll-menu').scrollspy({ offset: -80 });
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
});