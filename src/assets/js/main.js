jQuery(function ($) {
    'use strict'; $(window).on('scroll', function () {
        if ($(this).scrollTop() > 120) { $('.navbar-area').addClass("is-sticky"); }
        else { $('.navbar-area').removeClass("is-sticky"); }
    });
    jQuery('.mean-menu').meanmenu({ meanScreenWidth: "991" });
    $(function () { $('.default-btn').on('mouseenter', function (e) { var parentOffset = $(this).offset(), relX = e.pageX - parentOffset.left, relY = e.pageY - parentOffset.top; $(this).find('span').css({ top: relY, left: relX }) }).on('mouseout', function (e) { var parentOffset = $(this).offset(), relX = e.pageX - parentOffset.left, relY = e.pageY - parentOffset.top; $(this).find('span').css({ top: relY, left: relX }) }); });
    $('.close-btn').on('click', function () { $('.search-overlay').fadeOut(); $('.search-btn').show(); $('.close-btn').removeClass('active'); });
    $('.search-btn').on('click', function () { $(this).hide(); $('.search-overlay').fadeIn(); $('.close-btn').addClass('active'); });
    $(".burger-menu").on('click', function () { $('.sidebar-modal').toggleClass('active'); });
    $(".sidebar-modal-close-btn").on('click', function () { $('.sidebar-modal').removeClass('active'); });
    $(".others-option-for-responsive .dot-menu").on("click", function () { $(".others-option-for-responsive .container .container").toggleClass("active"); });
    $('.home-slides').owlCarousel({ loop: true, nav: true, dots: false, autoplayHoverPause: true, items: 1, smartSpeed: 750, autoplay: false, navText: ["<i class='las la-arrow-left'></i>", "<i class='las la-arrow-right'></i>"], });
    $(".home-slides").on("translate.owl.carousel", function () { $(".main-slider-content h1").removeClass("animated fadeInUp").css("opacity", "0"); $(".main-slider-content p").removeClass("animated fadeInUp").css("opacity", "0"); $(".main-slider-content a").removeClass("animated fadeInUp").css("opacity", "0"); });
    $(".home-slides").on("translated.owl.carousel", function () { $(".main-slider-content h1").addClass("animated fadeInUp").css("opacity", "1"); $(".main-slider-content p").addClass("animated fadeInUp").css("opacity", "1"); $(".main-slider-content a").addClass("animated fadeInUp").css("opacity", "1"); });
    $(".home-slides").on("translate.owl.carousel", function () { $(".main-banner-content h1").removeClass("animated fadeInUp").css("opacity", "0"); $(".main-banner-content p").removeClass("animated fadeInUp").css("opacity", "0"); $(".main-banner-content a").removeClass("animated fadeInUp").css("opacity", "0"); });
    $(".home-slides").on("translated.owl.carousel", function () { $(".main-banner-content h1").addClass("animated fadeInUp").css("opacity", "1"); $(".main-banner-content p").addClass("animated fadeInUp").css("opacity", "1"); $(".main-banner-content a").addClass("animated fadeInUp").css("opacity", "1"); });
    $('.projects-slider').owlCarousel({ loop: true, nav: true, dots: false, smartSpeed: 500, margin: 30, autoplayHoverPause: true, autoplay: true, navText: ["<i class='las la-arrow-left'></i>", "<i class='las la-arrow-right'></i>"], responsive: { 0: { items: 1 }, 576: { items: 2 }, 768: { items: 2 }, 1024: { items: 3 }, 1200: { items: 4 } } });
    $('#datetimepicker').datepicker({ weekStart: 0, todayBtn: "linked", language: "es", orientation: "bottom auto", keyboardNavigation: false, autoclose: true });
    $('select').niceSelect(); jQuery('.skill-bar').each(function () { jQuery(this).find('.progress-content, .progress-content-two, .progress-content-three').animate({ width: jQuery(this).attr('data-percentage') }, 2000); jQuery(this).find('.progress-number-mark').animate({ left: jQuery(this).attr('data-percentage') }, { duration: 2000, step: function (now, fx) { var data = Math.round(now); jQuery(this).find('.percent').html(data + '%'); } }); });
    $('.odometer').appear(function (e) { var odo = $(".odometer"); odo.each(function () { var countNumber = $(this).attr("data-count"); $(this).html(countNumber); }); });
    $('.testimonial-slider').owlCarousel({ loop: true, nav: true, items: 1, dots: true, smartSpeed: 1000, animateOut: 'fadeOut', animateIn: 'fadeIn', margin: 0, autoplayHoverPause: true, autoplay: true, navText: ["<i class='las la-arrow-left'></i>", "<i class='las la-arrow-right'></i>"], });


    $('.partner-slider').owlCarousel({ loop: true, nav: false, dots: false, smartSpeed: 500, margin: 20, autoplayHoverPause: true, autoplay: true, responsive: { 0: { items: 1 }, 576: { items: 1 }, 768: { items: 2 }, 1024: { items: 3 }, 1200: { items: 4 } } });
    $('.core-services-slider').owlCarousel({ loop: true, nav: true, dots: false, smartSpeed: 500, margin: 30, autoplayHoverPause: true, autoplay: true, navText: ["<i class='las la-arrow-left'></i>", "<i class='las la-arrow-right'></i>"], responsive: { 0: { items: 1 }, 576: { items: 2 }, 768: { items: 2 }, 1024: { items: 3 }, 1200: { items: 3 } } });
    $('.popup-youtube').magnificPopup({ disableOn: 320, type: 'iframe', mainClass: 'mfp-fade', removalDelay: 160, preloader: false, fixedContentPos: false });
    $(".newsletter-form").validator().on("submit", function (event) { if (event.isDefaultPrevented()) { formErrorSub(); submitMSGSub(false, "Please enter your email correctly."); } else { event.preventDefault(); } });

    function callbackFunction(resp) {
        if (resp.result === "success") { formSuccessSub(); }
        else { formErrorSub(); }
    }
    function formSuccessSub() { $(".newsletter-form")[0].reset(); submitMSGSub(true, "Thank you for subscribing!"); setTimeout(function () { $("#validator-newsletter").addClass('hide'); }, 4000) }
    function formErrorSub() { $(".newsletter-form").addClass("animated shake"); setTimeout(function () { $(".newsletter-form").removeClass("animated shake"); }, 1000) }
    function submitMSGSub(valid, msg) {
        if (valid) { var msgClasses = "validation-success"; } else { var msgClasses = "validation-danger"; }
        $("#validator-newsletter").removeClass().addClass(msgClasses).text(msg);
    }
    $(".newsletter-form").ajaxChimp({ url: "https://envytheme.us20.list-manage.com/subscribe/post?u=60e1ffe2e8a68ce1204cd39a5&amp;id=42d6d188d9", callback: callbackFunction }); $('.feedback-slides').owlCarousel({ loop: true, nav: false, dots: true, autoplayHoverPause: true, autoplay: true, mouseDrag: true, margin: 0, navText: ["<i class='las la-angle-left'></i>", "<i class='las la-angle-right'></i>"], responsive: { 0: { items: 1, }, 576: { items: 2, }, 768: { items: 2, }, 1200: { items: 3, }, } }); $(function () { $('.accordion').find('.accordion-title').on('click', function () { $(this).toggleClass('active'); $(this).next().slideToggle('fast'); $('.accordion-content').not($(this).next()).slideUp('fast'); $('.accordion-title').not($(this)).removeClass('active'); }); }); $(function () { $(window).on('scroll', function () { var scrolled = $(window).scrollTop(); if (scrolled > 600) $('.go-top').addClass('active'); if (scrolled < 600) $('.go-top').removeClass('active'); }); $('.go-top').on('click', function () { $("html, body").animate({ scrollTop: "0" }, 500); }); }); $(window).on('load', function () { if ($(".wow").length) { var wow = new WOW({ boxClass: 'wow', animateClass: 'animated', offset: 20, mobile: true, live: true, }); wow.init(); } });
}(jQuery));