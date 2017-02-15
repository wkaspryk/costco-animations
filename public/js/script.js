//var transition= document.getElementsByClassName('grayloader');
setTimeout(function() {
	$('.grayloader .imagesfake').css('opacity', '0');
	
		$('.grayloader .imagesfake').css('display', 'none');
		

		setTimeout(function() {
			$('.grayloader h4, .grayloader p').css('color', 'inherit');
			$('.grayloader a').css('color', '#007bda');	
		}, 300);
		
		$('.grayloader .colors, .grayloader h4, .grayloader p, .grayloader a, .grayloader .search-details p').css('background-color', 'transparent');

		// $('.grayloader .search-tile').css('border-radius', '0');

		$('.grayloader img').css('opacity', '1');
		$('.grayloader .shadow1').removeClass('shadow1');
		$('.grayloader .shadow2').removeClass('shadow2');
		$('.grayloader div[class^="colors-"]').css('opacity', '1');
		$('.grayloader .grayline').css('opacity', '1');

		$('.grayloader h4, .grayloader p, .grayloader a, .grayloader .search-details p').css('user-select', 'auto');
		
}, 4800);