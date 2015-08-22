$(document).ready(function(){

!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';
if(!d.getElementById(id)){js=d.createElement(s);
	js.id=id;js.src=p+"://platform.twitter.com/widgets.js";
	fjs.parentNode.insertBefore(js,fjs);}
}(document,"script","twitter-wjs");





var myCenter=new google.maps.LatLng(40.730941, -73.997761);

function initialize()
{
var mapProp = {
  center:myCenter,
  zoom:5,
  mapTypeId:google.maps.MapTypeId.ROADMAP
  };

var map=new google.maps.Map(document.getElementById("#map"),mapProp);

var marker=new google.maps.Marker({
  position:myCenter,
  icon:'images/fb.png'
  });

marker.setMap(map);
}

google.maps.event.addDomListener(window, 'load', initialize);

});	