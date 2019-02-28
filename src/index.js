import $ from 'jquery';
import './sass/styles.scss';
console.log('hey');


$(document).ready(function(){
  $("#show-map").click(function(){
    var map = document.getElementById("map");
    $("#map").toggle();
    if (map.style.visibility === "none" ) {
      $("#show-map").text("Show Map!");
    } else {
      $("#show-map").text("Hide Map");
    }
  });
});
