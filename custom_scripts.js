/*
 *@author Kasun Peiris
 *@date 22/04/2015
 *@description: js fixes and tweaks for Bridge template.
 *@version 1.0
 */


/***@function:Scroll to anchor modified function :- ref:http://jsfiddle.net/BjpWB/4/***/
function scroll_to_anchor(anchor){
	//selecting the row that you want to anchor to 
 	var row = jQuery('').find(anchor);
    //animate it to the row
    jQuery('html,body').animate({scrollTop: row.offset().top-50},'slow');
    
}

/***@function: scroll to the anchor if directing from different page  ***/
function url_anchor(){
	//check if the user in the correct place 
	if(window.location.pathname==''){
		//variables for store the hash value and the id globally
		var hash=window.location.hash,
		id;
		//getting the hash value and removing the #
		if(hash != "") {
         id = hash.substr(1);//split the # and the value and get the value  	
       }
       console.log(id);
       //according to the id value run the scroll to anchor (add the anchor id or class)
       if(id===""|| id===""){
       		scroll_to_anchor('.'+id);//anchor it down to the row
       }
	}
	
}


var $portafolioImg=jQuery('.lightbox_single_portfolio');
/*** @function:: for display portafolio images in pretty photo ***/
function portafolio_Img(){
	
	//taking the each image url
	$portafolioImg.each(function(){
		
		//get the image source
		var imgSrc=jQuery(this).find('img').attr('src');
		
		//adding the image href 
		jQuery(this).attr('href',imgSrc);
		
		//adding the prettyPhoto rel to the ancor
		jQuery('.lightbox_single_portfolio').attr('rel','prettyPhoto');
		
		
	});
	
}

/*** @function :: function for testermonial flexible height.***/
function testermonial(){
		jQuery('.testimonial_content_inner').addClass('clearfix');
		setInterval( function() {
			//declairing the variabls inside the interval function so active slide will refresh 
			var slidesActive=jQuery('.testimonials .flex-active-slide'),
			 	slider_nav=jQuery('.flex-direction-nav'),
				slider_container=jQuery('.testimonials_holder');
      			
      			//setting the container height to active slider height
      			slider_container.height(slidesActive.height());
      			//adding the nav to active slider 
      			slidesActive.append(slider_nav);	
      			
    	}, 500);
		
}


/***@function:Equal Height***/
var contanier1=jQuery('.container1'),
	container2=jQuery('.container2');
function equal_height(container1,container2){
	
	container1.height(container2.outerHeight());
}
//styles or actions only for mobile devices
if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
	
	
}