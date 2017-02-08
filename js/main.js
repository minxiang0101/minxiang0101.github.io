$(function(){
	$(window).on('load',function() { 
	    $("#loaderInner").fadeOut(); 
	    $("#loader").delay(400).fadeOut("slow"); 
	}); //载入动画
	
	$(window).on('scroll', function() {
        if ($(window).scrollTop() >= 75) {
            $("body").addClass("fixed-header");
        }
        else {
            return $("body").removeClass("fixed-header");
        }
    });//导航跟随
    
    $('.navbar-collapse ul li a').on("click", function (e) {
        var anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top - 50
        }, 1000);
        $(".navbar-collapse").collapse("hide");
        e.preventDefault();
    });//导航点击平滑滑动
    
    $('body').scrollspy({target:".navbar-collapse",offset:70})// 导航监听
    
	$("#typed").typed({
        stringsElement: $('#typed-strings'),
        typeSpeed: 100,
        backDelay: 2000,
        loop: false,
        cursorChar:'',
        contentType: 'html',
	});//	首屏打字机效果
	
	$('.progress-bar-style').each(function() {
		var progress = $(this).data("progress");
		var prog_width = progress+'%';
		if (progress <= 100) {
			$(this).append('<div class="bar-inner" style="width:'+prog_width+'"><span></span></div>');
		}else{
			$(this).append('<div class="bar-inner" style="width:100%"><span></span></div>');
		}
	});//介绍技能
	
	 $(window).on('load',function() { 
	    var grid_container = $('.portfolio-container'),
	    	grid_item = $('.grid-item');
	    	

	     grid_container.imagesLoaded(function () {
	        grid_container.isotope({
	            itemSelector: '.grid-item',
	       		layoutMode: 'masonry'
	        });
	    });

	});
})


