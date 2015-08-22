$(document).ready(function(){
    
    $("#btn1").click(function(){
        $(".thumbnail").animate({
            // left: '250px',
            height: '+=150px',
            width: '+=150px'
        });
        $(".thumbnail").css("z-index", "500");
    });

 $("#btn2").click(function(){
        $(".thumbnail").animate({
            // left: '250px',
            height: '-=150px',
            width: '-=150px'
        });
        $(".thumbnail").css("z-index", "500");
    });



});