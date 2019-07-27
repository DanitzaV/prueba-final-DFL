$(document).ready(function () {
    var navbarHeight = $("#navbar").height();

    $('.navbar a').bind("click", function (e) {

        var hash1 = $(this).attr("href"); //Get the target
        var scrollToPosition = $(hash1).offset().top - navbarHeight;
        $('html').animate({ scrollTop: scrollToPosition }, 800, function (target) {});
        window.location.hash = hash1;

        e.preventDefault();
    });
});