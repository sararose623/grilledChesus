$(document).ready(function(){
    
    $("img").click(function(){
        $("#bigImage").animate({
            // left: '250px',
            height: '+=150px',
            width: '+=150px'
        });
        $("#bigImage").css("z-index", "500");
    });
    // $("bigImage").click(function(){
    // 	$("img").animate({
    // 		height: '-=150px',
    //         width: '-=150px'
    // 	});
    // });

});