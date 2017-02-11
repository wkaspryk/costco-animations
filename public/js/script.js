//var transition= document.getElementsByClassName('grayloader');
        setTimeout(function() {
        	$('.grayloader .imagesfake').css('opacity', '0');
         
	            $('.grayloader .imagesfake').css('display', 'none');
	            
	            $('.grayloader .colors, .grayloader h4, .grayloader p, .grayloader a, .grayloader .search-details p').css('background-color', 'transparent');

	            $('.grayloader h4, .grayloader p').css('color', 'inherit');
				$('.grayloader a').css('color', '#007bda');
				$('.grayloader .search-tile').css('border-radius', '0');

	            $('.grayloader img').css('opacity', '1');
	            $('.grayloader .shadow1').removeClass('shadow1');
	            $('.grayloader div[class^="colors-"]').css('opacity', '1');
	            $('.grayloader .grayline').css('display', 'block');

        }, 4800);