$(function(){
	$('#menu').metisMenu();//导航
	function leftSubMenu(){
		$(".slimscrollleft").slimScroll({
	        height: "auto",
	        position: "right",
	        size: "7px",
	        color: "#bbb",
	        wheelStep: 5
	    })
	}
	function pageCntHeight(){
		var e=$(window).height();
		$(".lw-page-container").height(e-70);
	}
	leftSubMenu();
	pageCntHeight();
	$(window).resize(function(){
	  leftSubMenu();
	  pageCntHeight();
	});
	 Waves.init();
	
})
SyntaxHighlighter.all();