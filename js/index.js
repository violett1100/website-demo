$(document).ready(function () {

    $(window).on('mousewheel', function (event) {
        if (window.innerWidth >= 767) {
            if (event.deltaY <= -1) {
                $('.navbar').removeClass('animate__slideInDown')
                $('.navbar').addClass('animate__slideOutUp')
            } else {
                $('.navbar').removeClass('animate__slideOutUp')
                $('.navbar').addClass('animate__slideInDown')
            }
        } else {
            $('.navbar').removeClass('animate__animated')
        }
    });


    $('.icon').click(function () {
        $(this).toggleClass('click')
    })

    $('.navbar-icon').mouseenter(function () {
        $(this).children('.icon').addClass('animate__animated')
        $(this).children('.icon').addClass('animate__rubberBand')
    })
    $('.navbar-icon').mouseleave(function () {
        $(this).children('.icon').removeClass('animate__animated')
        $(this).children('.icon').removeClass('animate__rubberBand')
    })

    $('.nav-toggle').on('click', function () {
        $('.navbar-icon-group').toggleClass('mob-hide')
        $('.dropdown-area').toggleClass('mob-hide')
        $('.dropdown-bg').toggleClass('mob-dropdown')
        $('.nav-toggle').toggleClass('close')

        $('.sub-nav').addClass('dropdown')
        $('.nav-1, .nav-2, .nav-3, .nav-4, .nav-5, .nav-6, .nav-7').addClass('dropdown')
        $('.dropdown-area').removeClass('pos-ab')
        $('.back-arrow-area').addClass('dropdown')
    })

    $('.arrow-area').on('click', function () {
        $(this).parents('.footer-flex-item').children('.flex').toggleClass('fold')
    })
    $('.arrow-area').on('click', function () {
        $(this).children('.down-arrow').toggleClass('fold')
    })

    $('.mob-language').parents('.navbar-icon').on('click', function () {
        $('.lang').parents('.container').toggleClass('dropdown')
    })
    $('.lang-col').children('.text').on('click', function () {
        $('.lang').parents('.container').addClass('dropdown')
    })


    $('.carousel-image').slick({
        infinite: false,
        slidesToShow: 4,
        slidesToScroll: 4,
        arrows: true,
        draggable: false,
        prevArrow: '<button class="slick-prev" aria-label="Previous" type="button"></button>',
        nextArrow: '<button class="slick-next" aria-label="Next" type="button"></button>',
        asNavFor: '.carousel-text',
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 450,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    });
    $('.carousel-text').slick({
        infinite: false,
        slidesToShow: 4,
        slidesToScroll: 4,
        asNavFor: '.carousel-image',
        arrows: false,
        draggable: false,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 450,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    });

    $('.carousel-image-T').slick({
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: true,
        draggable: false,
        prevArrow: '<button class="slick-prev" aria-label="Previous" type="button"></button>',
        nextArrow: '<button class="slick-next" aria-label="Next" type="button"></button>',
        asNavFor: '.carousel-text-T',
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    });
    $('.carousel-text-T').slick({
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 3,
        asNavFor: '.carousel-image-T',
        arrows: false,
        draggable: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    });


    if (window.innerWidth >= 767) {
        $('#nav-1').mouseenter(function () {
            $('.sub-nav').addClass('dropdown')
            $('.nav-1, .dropdown-bg').removeClass('dropdown')
        })
        $('#nav-2').mouseenter(function () {
            $('.sub-nav').addClass('dropdown')
            $('.nav-2, .dropdown-bg').removeClass('dropdown')
        })
        $('#nav-3').mouseenter(function () {
            $('.sub-nav').addClass('dropdown')
            $('.nav-3, .dropdown-bg').removeClass('dropdown')
        })
        $('#nav-4').mouseenter(function () {
            $('.sub-nav').addClass('dropdown')
            $('.nav-4, .dropdown-bg').removeClass('dropdown')
        })
        $('#nav-5').mouseenter(function () {
            $('.sub-nav').addClass('dropdown')
            $('.nav-5, .dropdown-bg').removeClass('dropdown')
        })
        $('#nav-6').mouseenter(function () {
            $('.sub-nav').addClass('dropdown')
            $('.nav-6, .dropdown-bg').removeClass('dropdown')
        })
        $('#nav-7').mouseenter(function () {
            $('.sub-nav').addClass('dropdown')
            $('.nav-7, .dropdown-bg').removeClass('dropdown')
        })
        $('.dropdown-area').mouseleave(function () {
            $('.nav-1, .nav-2, .nav-3, .nav-4, .nav-5, .nav-6, .nav-7, .dropdown-bg').addClass('dropdown')
        })
    } else {
        $('#nav-1').on('click', function () {
            $('.sub-nav').addClass('dropdown')
            $('.nav-1').removeClass('dropdown')
        })
        $('#nav-2').on('click', function () {
            $('.sub-nav').addClass('dropdown')
            $('.nav-2').removeClass('dropdown')
        })
        $('#nav-3').on('click', function () {
            $('.sub-nav').addClass('dropdown')
            $('.nav-3').removeClass('dropdown')
        })
        $('#nav-4').on('click', function () {
            $('.sub-nav').addClass('dropdown')
            $('.nav-4').removeClass('dropdown')
        })
        $('#nav-5').on('click', function () {
            $('.sub-nav').addClass('dropdown')
            $('.nav-5').removeClass('dropdown')
        })
        $('#nav-6').on('click', function () {
            $('.sub-nav').addClass('dropdown')
            $('.nav-6').removeClass('dropdown')
        })
        $('#nav-7').on('click', function () {
            $('.sub-nav').addClass('dropdown')
            $('.nav-7').removeClass('dropdown')
        })
        $('.sub-nav-item>.nav-link').on('click', function () {
            $('.navbar-icon-group').addClass('mob-hide')
            $('.dropdown-area').addClass('mob-hide')
            $('.dropdown-bg').addClass('mob-dropdown')
            $('.nav-toggle').removeClass('close')
    
            $('.sub-nav').addClass('dropdown')
            $('.nav-1, .nav-2, .nav-3, .nav-4, .nav-5, .nav-6, .nav-7').addClass('dropdown')
            $('.dropdown-area').removeClass('pos-ab')
            $('.back-arrow-area').addClass('dropdown')
        })

        $('#nav-1, #nav-2, #nav-3, #nav-4, #nav-5, #nav-6, #nav-7').on('click', function () {
            $('.dropdown-area').addClass('pos-ab')
            $('.back-arrow-area').removeClass('dropdown')
        })
        $('.back-arrow-area').on('click', function () {
            $('.dropdown-area').removeClass('pos-ab')
            $('.sub-nav').addClass('dropdown')
            $('.back-arrow-area').addClass('dropdown')
        })
    }
    

});