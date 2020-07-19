$(document).ready(function () {

    // navbar scroll down
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

    $('.ani-rb').mouseenter(function () {
        $(this).children('.icon').addClass('animate__animated')
        $(this).children('.icon').addClass('animate__rubberBand')
    })
    $('.ani-rb').mouseleave(function () {
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


    // search area
    $('.ani-search').on('click', function(){
        $('.search-area').toggleClass('dropdown')
    })
    $('.search-area>.close').on('click', function(){
        $('.search-area').addClass('dropdown')
    })
    $('.ani-bell, .ani-shopping').on('click', function(){
        $('.search-area').addClass('dropdown')
    })

    $('.ani-bell').on('click', function(){
        $('.bell-area').toggleClass('dropdown')
    })
    $('.bell-area>.close').on('click', function(){
        $('.bell-area').addClass('dropdown')
    })
    $('.ani-search, .ani-shopping').on('click', function(){
        $('.bell-area').addClass('dropdown')
    })

    $('.ani-shopping').on('click', function(){
        $('.shopping-area').toggleClass('dropdown')
    })
    $('.shopping-area>.close').on('click', function(){
        $('.shopping-area').addClass('dropdown')
    })
    $('.ani-search, .ani-bell').on('click', function(){
        $('.shopping-area').addClass('dropdown')
    })

    $('.nav-toggle').on('click', function(){
        $('.search-area, .bell-area, .shopping-area').addClass('dropdown')
    })


    //carousel
    $('.carousel-image').slick({
        infinite: false,
        slidesToShow: 4,
        slidesToScroll: 4,
        arrows: true,
        draggable: false,
        swipe: false,
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
        swipe: false,
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
        swipe: false,
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
        swipe: false,
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

    // sub-navbar
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

    // switch images
    if (window.innerWidth >= 767) {
        setTimeout(() => {
            $('.rec-1>.image-rec').toggleClass('switch')
            setInterval(() => {
                $('.rec-1>.image-rec').toggleClass('switch')
            }, 1800);
        }, 900);
        setTimeout(() => {
            $('.rec-2>.image-rec').toggleClass('switch')
            setInterval(() => {
                $('.rec-2>.image-rec').toggleClass('switch')
            }, 1800);
        }, 1800);
    } else {
        setTimeout(() => {
            $('.rec-1>.image-rec').toggleClass('switch')
            setInterval(() => {
                $('.rec-1>.image-rec').toggleClass('switch')
            }, 1200);
        }, 600);
        setTimeout(() => {
            $('.rec-2>.image-rec').toggleClass('switch')
            setInterval(() => {
                $('.rec-2>.image-rec').toggleClass('switch')
            }, 1200);
        }, 1200);
    }

    if (window.innerWidth >= 767) {
        setTimeout(() => {
            $('.sq-1>.col-md-8>.image-sq').toggleClass('switch')
            setInterval(() => {
                $('.sq-1>.col-md-8>.image-sq').toggleClass('switch')
            }, 1800);
        }, 900);
        setTimeout(() => {
            $('.sq-2>.col-md-6>.image-sq').toggleClass('switch')
            setInterval(() => {
                $('.sq-2>.col-md-6>.image-sq').toggleClass('switch')
            }, 1800);
        }, 1800);
    } else {
        setTimeout(() => {
            $('.sq-1>.col-md-8>.image-sq').toggleClass('switch')
            setInterval(() => {
                $('.sq-1>.col-md-8>.image-sq').toggleClass('switch')
            }, 1200);
        }, 600);
        setTimeout(() => {
            $('.sq-2>.col-md-6>.image-sq').toggleClass('switch')
            setInterval(() => {
                $('.sq-2>.col-md-6>.image-sq').toggleClass('switch')
            }, 1200);
        }, 1200);
    }

    // video
    $('.play-button').on('click', function () {
        $('.video-cover').fadeOut();

    })

});

var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;
function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        height: '720',
        width: '100%',
        videoId: 'cHLu3A1GzwM',
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
}

function onPlayerReady(event) {
    $('.play-button').on('click', function () {
        event.target.playVideo();
    })
}

var done = false;
function onPlayerStateChange(event) {
    if (event.data == YT.PlayerState.PLAYING && !done) {
        //setTimeout(stopVideo, 6000);
        done = true;
    }
}
function stopVideo() {
    player.stopVideo();
    
}

// onPlayerStateChange = function (event) {
//     if (event.data == YT.PlayerState.ENDED) {
//         $('.video-cover').fadeIn();
//     }
// }