$(document).ready(function() {
    $(".expand").click(function() {
        $("body").toggleClass("hide-side")
    });
    $(".left-side").css("height", $(window).height() - 51);
     $('body').scrollspy({target:".side-content",offset:70})
});
window.onresize = function() {
    $(".left-side").css("height", $(window).height() - 51)
};

$(function() {
//	$('#scroll').scrollspy();
    $(".logo").click(function() {
        $("#fame").css("display", "none");
        $(".box-main").css("display", "block")
    });
    $(".left-nav ul a,.frame-link").click(function() {
        $("#fame").attr("src", $(this).attr("href"));
        $("#fame").css("display", "block");
        $("#fame").removeClass("fame-bg");
        $(".box-main").css("display", "none");
        $(".left-nav .active").removeClass("active");
        $(this).parent().addClass("active")
    });
    $(".fame-bg").click(function() {
        $("#fame").addClass("fame-bg")
    });
    $(".left-nav>li>a").click(function() {
        $("#fame").css("display", "none");
        $(".box-main").css("display", "block")
    })
});
$(document).ready(function($) {
    $(".left-side .side-content").perfectScrollbar();
    //$(".right-side").perfectScrollbar()
});//滚动

$(function() {
    $(".scroll,.left-nav > li > a").click(function(event) {
        event.preventDefault();
        $("html,body").animate({
            scrollTop: $(this.hash).offset().top - 50
        }, 500)
    })
});
$(document).ready(function() {
    $(".panel-body dt a").click(function() {
        return false
    })
});


    

