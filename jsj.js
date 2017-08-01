$(document).ready(function(){
	$(this.body).scrollTop(0);	

	// /********Drop Down********/
	var n_topic = $('#b_t_drp');
	var n_tpcs = $('#dropTpc');
	
	n_topic.hover(drop,nvmdrop);

	n_tpcs.hover(drop,nvmdrop);
	var drop = false;
	function drop(){
		n_tpcs.css("visibility","visible");

	}
	function nvmdrop(){
		n_tpcs.css("visibility","hidden");
					
	}
	
});