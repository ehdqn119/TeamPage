/**
 * 
 */


$(document).ready(function(){
	
	
	var even_count = 0;
	
	$('#ro_img').click(function(){
		
		even_count += 1;
		
		var iphone_rotateX = $('#iphone').css('transform');
		
		
		
		if(even_count % 2 ==0){
			
			$('#iphone').css({
				'transition':'1s',
				'transform' : 'matrix3d(0.694658, -0.422817, -0.581958, 0, 0.71934, 0.40831, 0.56199, 0, 0, -0.809017, 0.587785, 0, 0,0,0,1)',
			});
			
			$('#side').css({
				width : '393',
				height : '780',
			});
			
			$('.event_text').css({
				
				'transition':'1s',
				'transform' : 'matrix3d(0.694658, -0.422817, -0.581958, 0, 0.71934, 0.40831, 0.56199, 0, 0, -0.809017, 0.587785, 0, 0,0,0,1)',
			});
		
		}
		
		else if (even_count % 2 ==1) {
			
			$('#iphone').css({
				'transition':'1s',
				'transform' : 'matrix(1,0,0,1,0,0)'
			});
			
			$('#side').css({
				
				width : '0',
				height: '0',
			});
			
			$('.event_text').css({
				
				'transition':'1s',
				'transform' : 'matrix(1,0,0,1,0,0)'
			});
			
		}

		var iphone_rotateX = $('#iphone').css('transform');
		var iphone_rotateZ = $('#iphone').css('transform');
	});
	
	
	$('#app_hover_ins').click(function(){
		$(location).attr('href','ins_project.html');
	});

	
	
});



