$(document).ready( function(){
	//alert(":)!")
  $(window).ready( function(){

   $("#carDiv").animate({left: '870px'},2000 );
    });

  var cheese = true;

    function slideMenuDown(){
    	if(cheese){
    		$( "#menuDiv" ).slideDown( 2000 )
    		cheese = false;
    	}else{
    		$( "#menuDiv" ).slideUp( 1000 )
    		cheese = true;
    	}
    };
    $( "#clickMenu" ).click( function(){
    	slideMenuDown();
    })

    $("#carDiv").ready( function(){
    	$("#aboutDiv").fadeIn(4000);
    })


})