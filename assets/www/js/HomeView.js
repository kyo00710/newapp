var HomeView = function(store){

	this.initialize = function(){
		//Define a div wrapper for the vie. The div wrapper is used to attach events.
		this.el = $('<div/>');
		this.el.on('keyup', '.search-key', this.findByName);
	}
	
	this.render = function(){
		this.el.html(HomeView.template());
		return this;
	};
	
	this.findByName = function() {
	   
	 var self= this;
	 	store.findByName($('.search-key').val(), function(employees) {
		 	$('.employee-list').html(HomeView.liTemplate(employees));
		 });  
	};

	this.initialize();
	
};



    

// add the 2 templates as static members of HomeView
HomeView.template = Handlebars.compile($("#home-tpl").html());
HomeView.liTemplate = Handlebars.compile($("#employee-li-tpl").html());