import $ from 'jquery';
import './sass/styles.scss';
console.log('hey');


$(document).ready(function(){
  $("#show-map").click() {
    $(".map").show();
  }
});
