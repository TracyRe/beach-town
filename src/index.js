import $ from 'jquery';
import './sass/styles.scss';
import './sass/events.scss';
console.log('hey');

$(document).ready(function(){
  $(".show-map").click(function(){
    var map = document.getElementById("map");
    $("#map").toggle();
    if (map.style.display === "none" ) {
      $(".show-map").text("Show Map!");
      console.log("hello I can't see the map");
    } else {
      $(".show-map").text("Hide Map");
      console.log("hello I can see the map");
    }
  });

  $(".show-map2").click(function(){
    var map = document.getElementById("map2");
    $("#map2").toggle();
    if (map.style.display === "none" ) {
      $(".show-map2").text("Show Map!");
      console.log("hello I can't see the map");
    } else {
      $(".show-map2").text("Hide Map");
      console.log("hello I can see the map");
    }
  });

  $(".menu").click(function(){
    $(".nav").toggle(); 
  });
});
