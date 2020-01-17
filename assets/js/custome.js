$(document).ready(function() {
    "use strict";
    var dialog = '',
        catergoryName = "all",
        options = [],
        map = '',
        cityLat = '',
        cityLng = '',
        videoLink = "";
    $('.modal').modal();
    $(".button-collapse").sideNav({
        closeOnClick: true
    });
    $('select').material_select();
    $('.collapsible').collapsible();
    $('.slider').slider({
        full_width: true
    });
    $('.carousel').carousel();
    setInterval(function() {
        $('.carousel').carousel('next');
    }, 7000);
    $('.scrollspy').scrollSpy({
        scrollOffset: 0
    });
    $('.parallax').parallax();
    $('.materialize-textarea').trigger('autoresize');
    Materialize.updateTextFields();
    $('.dropdown-button').dropdown({
        hover: true
    });
    $('.tooltipped').tooltip({
        delay: 50
    });
    $('.search-box .autocomplete').autocomplete({
        data: {
            "Web Design": null,
            "Mobile Applications": null,
            "Web Developing": null,
            "SEO": null
        },
        limit: 20
    });
    $("#top-btn").on('click', function(e) {
        $('html,body').stop(true, false).animate({
            scrollTop: 0
        }, 2000);
    });
    $(".btn,.btn-floating ").on('click', function() {
        dialog = $(this).attr("data-dialog");
        Materialize.toast(dialog, 3000);
    });
    $(".carousel-control .next").on('click', function(e) {
        e.preventDefault();
        $(this).parent(".carousel-control").prev('.carousel').carousel('next', 1);
    });
    $(".carousel-control .prev").on('click', function(e) {
        e.preventDefault();
        $(this).parent(".carousel-control").prev('.carousel').carousel('prev', 1);
    });

    function categoryFilter() {
        $(".category." + catergoryName).show("400");
        $(".category:not(." + catergoryName + ")").hide("400");
        $(".filter-menu li[data-filter='" + catergoryName + "']").addClass("active").siblings("li").removeClass("active");
    }
    categoryFilter();
    $(".filter-menu li").on('click', function(e) {
        e.preventDefault();
        catergoryName = $(this).attr("data-filter");
        categoryFilter();
    });
    $("body:not(.demos)").append("<div id='options'></div>");
    $("#options").load("option-box.html");
    options = [{
        selector: '#achievements',
        offset: 200,
        callback: function() {
            $('.counter').countTo({
                speed: 2000
            });
        }
    }, {
        selector: '#about',
        offset: 0,
        callback: function() {
            Materialize.fadeInImage($('#about .section-content'));
        }
    }, {
        selector: '#services',
        offset: 0,
        callback: function() {
            Materialize.fadeInImage($('#services .section-content'));
        }
    }, {
        selector: '#achievements',
        offset: 0,
        callback: function() {
            Materialize.fadeInImage($('#achievements .section-content'));
        }
    }, {
        selector: '#portfolio',
        offset: 0,
        callback: function() {
            Materialize.fadeInImage($('#portfolio .section-content'));
        }
    }, {
        selector: '#buy-theme ',
        offset: 0,
        callback: function() {
            Materialize.fadeInImage($('#buy-theme .section-content'));
        }
    }, {
        selector: 'footer .social-links',
        offset: 0,
        callback: function() {
            Materialize.showStaggeredList('footer .social-links');
        }
    }, {
        selector: '#team',
        offset: 0,
        callback: function() {
            Materialize.showStaggeredList('#team .row');
        }
    }, {
        selector: '#price-table',
        offset: 0,
        callback: function() {
            Materialize.showStaggeredList('#price-table .row');
        }
    }, {
        selector: '#clients',
        offset: 0,
        callback: function() {
            Materialize.fadeInImage('#clients .section-content');
        }
    }, {
        selector: '#testimonials',
        offset: 0,
        callback: function() {
            Materialize.fadeInImage('#testimonials .section-content');
        }
    }, {
        selector: '#contact',
        offset: 0,
        callback: function() {
            Materialize.fadeInImage('#contact .section-content');
        }
    }, {
        selector: '#contact-info',
        offset: 0,
        callback: function() {
            Materialize.fadeInImage('#contact-info .section-content');
        }
    }, {
        selector: '#blog',
        offset: 0,
        callback: function() {
            Materialize.fadeInImage('#blog .section-content');
        }
    }];
    Materialize.scrollFire(options);
    $(".navbar-fixed  .button-collapse").on('click', function() {
        $("#nav-mobile li").css("opacity", "0");
        Materialize.showStaggeredList('#nav-mobile ');
    });
});
$(window).scroll(function() {
    "use strict";
    if ($(this).scrollTop() > 600) {
        $("#top-btn").addClass("show");
    } else {
        $("#top-btn").removeClass("show");
    }
});
$(window).on('load', function() {
    "use strict";
    $("#loadingscreen").fadeOut(800, function() {
        $(this).fadeOut(800, function() {
            $(this).remove();
        });
    });
});