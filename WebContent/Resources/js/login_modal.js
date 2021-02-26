/**
 * 
 */

$(document).ready (function(){
	

	
	$('a[title]').click	 (function(){
		
		
		
		$(document).on('click', 'a[href="#"]', function(e){
			e.preventDefault();
		});
		
		
		var top_position = $(document).scrollTop();
		var width = $(document).scrollLeft();
		
		
		var form_height = $('.form_flexbox').outerHeight(); 
		var form_width = $('.form_flexbox').outerWidth();

		
		$('.login_index').css({
			
			 display : 'block',
			 position : 'absolute',
			 'top' : top_position,
			 'background-color' : '#1f1f1f',
			 height : '100%',
			 width : '100%',
			 'z-index' : '2',
			
		});
		
		$('body').css ({
		
			'overflow-x': 'hidden',
	    	'overflow-y': 'hidden',
			
		})
		
		
		
		$('#close_img').click (function(){
			
			
			$('.login_index').css({
				
				 display : 'none',
				 'z-index' : '1',
			});
			
			$('body').css ({
				
				'overflow-x': 'scroll',
		    	'overflow-y': 'scroll',
				
			})
			
			
		});
		
		
	});
});	

	