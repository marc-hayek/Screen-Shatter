new function() {
	jQuery.fn.center = function () {
	    this.css("position","fixed");
	    this.css("top", Math.max(0, (($(window).height() - $(this).outerHeight()) / 2) + 
	                                                $(window).scrollTop()) + "px");
	    this.css("left", Math.max(0, (($(window).width() - $(this).outerWidth()) / 2) + 
	                                                $(window).scrollLeft()) + "px");
	    return this;
	}
	var soundUrl= chrome.extension.getURL('glass.mp3');
	var sound = new Audio(soundUrl); // buffers automatically when created
	var url = chrome.extension.getURL('img/crack.png');
					
	var $newdiv1 = $( "<div class='domthingy'><img src="+url+"></div>" );

	$("body").append($newdiv1);
	$(".domthingy").center();
	if(sound.paused){
		sound.play();
	}		
};
