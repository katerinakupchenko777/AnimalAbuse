// $(document).ready(function(){
// 	$(this.body).scrollTop(0);	

// 	// /********Drop Down********/
// 	var n_topic = $('#b_t_drp');
// 	var n_tpcs = $('#dropTpc');
	
// 	n_topic.hover(drop,nvmdrop);

// 	n_tpcs.hover(drop,nvmdrop);
// 	var drop = false;
// 	function drop(){
// 		n_tpcs.css("visibility","visible");

// 	}
// 	function nvmdrop(){
// 		n_tpcs.css("visibility","hidden");
					
// 	}
	
// });

$(document).ready(function(){
	$(this.body).scrollTop(0);	

	// /********Drop Down********/
	var n_topic = $('#b_t_drp');
	var n_tpcs = $('#dropTpc');
	var nav = $('#b_nav');
	var n = $('#b_t_drp').position();
	var w = $('#b_t_drp').width();
	console.log(w)
	// n_tpcs.hover(drop,nvmdrop);

	var droped = false;
	function drop(){
		n_tpcs.css("visibility","visible");

	}
	function nvmdrop(){
		n_tpcs.css("visibility","hidden");
					
	}

	nav.hover(function(e){

		console.log(e.pageX)
		if( e.pageX >= n.left-60 && e.pageX <= n.left-60+w+90){
			drop()	
		}

	},nvmdrop);

	n_topic.hover(function(e){

		console.log(e.pageX)
		if( e.pageX >= n.left-60 && e.pageX <= n.left-60+w+90){
			drop()	
		}

	});

	
});