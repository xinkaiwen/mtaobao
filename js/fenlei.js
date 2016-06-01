$(function(){
	$(".ip").hide();
	$(".ip").eq(0).show();
	$(".xs-content li").click(function(){
		var i = $(this).index();
		$(".ip").hide();
	$(".ip").eq(i).show();

	})

	
})