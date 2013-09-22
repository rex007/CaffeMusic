$(document).ready(function(){
	var akcije = $('.top-akcije'),
		dd = $('dd'),
		dl = $('dl');
		var price = akcije.siblings('span')
		// show top akcije
		akcije.on('mouseenter', function(){
		price.slideDown().animate({
				width: "25%",
				marginLeft: "0.2in",
				fontSize: "2em",
				borderWidth: "25px"
				}, 500 ).slideUp(100)
	});
		//akcije.on('mouseleave', function(){
		//$(this).fadeIn();
		//$(this).find('span').toggle();
	//});
// expand offer
	dd.hide();
	dl.on('mouseenter', 'dt', function(){
		var dt = $(this)
		dt.animate({
			left: '+5'
		},300).animate({
			left: '0'
		},300);
		dt.next().slideDown(300).siblings('dd').slideUp(300);
	});
	dl.on('mouseleave', function(){
		dd.slideUp();
	});
});