jQuery(document).ready(function() {
    $("#nav li:has(ul)").doubleTapToGo();
    var a = 300, e = 400, t = 400, o = 300;
    jQuery(window).scroll(function() {
        jQuery(window).scrollTop() >= a ? jQuery("#go-top").fadeIn(e) : jQuery("#go-top").fadeOut(t);
    }), jQuery("#go-top a").click(function() {
        return jQuery("html, body").animate({
            scrollTop: 0
        }, o), !1;
    }), $("#intro-slider").flexslider({
        namespace: "flex-",
        controlsContainer: "",
        animation: "fade",
        controlNav: !1,
        directionNav: !0,
        smoothHeight: !0,
        slideshowSpeed: 7e3,
        animationSpeed: 600,
        randomize: !1
    }), $("form#contactForm button.submit").click(function() {
        $("#image-loader").fadeIn();
        var a = $("#contactForm #contactName").val(), e = $("#contactForm #contactEmail").val(), t = $("#contactForm #contactSubject").val(), o = $("#contactForm #contactMessage").val(), n = "contactName=" + a + "&contactEmail=" + e + "&contactSubject=" + t + "&contactMessage=" + o;
        return $.ajax({
            type: "POST",
            url: "inc/sendEmail.php",
            data: n,
            success: function(a) {
                "OK" == a ? ($("#image-loader").fadeOut(), $("#message-warning").hide(), $("#contactForm").fadeOut(), 
                $("#message-success").fadeIn()) : ($("#image-loader").fadeOut(), $("#message-warning").html(a), 
                $("#message-warning").fadeIn());
            }
        }), !1;
    });
});