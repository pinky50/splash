/*
* Custom js file
* Author: SarosIT
* (c) SarosIT
* Email: info@sarosit.com
* www.sarosit.com
*/

console.log('Developed by SarosIT. Visit us at http://sarosit.com');
//preloader
var prealoaderOption = $(window)
prealoaderOption.on('load', function () {
    var preloader = jQuery('.preloader')
    var preloaderArea = jQuery('.preloader-area')
    preloader.fadeOut()
    preloaderArea.delay(350).fadeOut('slow')
})

//nav scrolling
$(window).scroll(function () {
    var scrollTop = $(this).scrollTop()
    if (scrollTop > 20) {
        $('#myBtn').fadeIn(function () {
            $(this).css('display', 'block')
        })
    } else {
        $('#myBtn').fadeOut(function () {
            $(this).css('display', 'none')
        })
    }
})

// SmoothScroll
$('#myBtn').click(function () {
    //1 second of animation time
    //html works for FFX but not Chrome
    //body works for Chrome but not FFX
    //This strange selector seems to work universally
    $('html, body').animate({scrollTop: 0}, 1000)
})


//Search bar toggle
$(document).ready(function () {
    $('.search-icon').click(function () {
        $('.search').slideToggle()
    })
    $('.close').click(function () {
        $('.search').slideToggle()
    })
});

//Carousel
if ($('.carousel-wrap').length > 0) {
    //clients owlCarousel
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        navText: [
            "<i class='fa fa-caret-left'></i>",
            "<i class='fa fa-caret-right'></i>"
        ],
        autoplay: true,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 5
            }
        }
    })
}

// init Isotope
if( $('.grid').length > 0) {
    var $grid = $('.grid').isotope({
        itemSelector: '.element-item',
        layoutMode: 'fitRows',
        getSortData: {
            name: '.name',
            symbol: '.symbol',
            number: '.number parseInt',
            category: '[data-category]',
            weight: function (itemElem) {
                var weight = $(itemElem).find('.weight').text();
                return parseFloat(weight.replace(/[\(\)]/g, ''));
            }
        }
    });

    // filter functions
    var filterFns = {
        // show if number is greater than 50
        numberGreaterThan50: function () {
            var number = $(this).find('.number').text();
            return parseInt(number, 10) > 50;
        },
        // show if name ends with -ium
        ium: function () {
            var name = $(this).find('.name').text();
            return name.match(/ium$/);
        }
    };

    // bind filter button click
    $('#filters').on('click', 'button', function () {
        var filterValue = $(this).attr('data-filter');
        // use filterFn if matches value
        filterValue = filterFns[filterValue] || filterValue;
        $grid.isotope({filter: filterValue});
    });

    // bind sort button click
    $('#sorts').on('click', 'button', function () {
        var sortByValue = $(this).attr('data-sort-by');
        $grid.isotope({sortBy: sortByValue});
    });

    // change is-checked class on buttons
    $('.button-group').each(function (i, buttonGroup) {
        var $buttonGroup = $(buttonGroup);
        $buttonGroup.on('click', 'button', function () {
            $buttonGroup.find('.is-checked').removeClass('is-checked');
            $(this).addClass('is-checked');
        });
    });

}

//slick slider
if( $('.slider-for').length > 0) {
    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider-nav'
    });
    $('.slider-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        dots: true,
        focusOnSelect: true
    });

    $('a[data-slide]').click(function (e) {
        e.preventDefault();
        var slideno = $(this).data('slide');
        $('.slider-nav').slick('slickGoTo', slideno - 1);
    });

//tab
    function openCity(cityName) {
        var i;
        var x = document.getElementsByClassName("city");
        for (i = 0; i < x.length; i++) {
            x[i].style.display = "none";
        }
        document.getElementById(cityName).style.display = "block";
    }

    if ($('.autoplay').length > 0) {
        $('.autoplay').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
        });
    }
}

