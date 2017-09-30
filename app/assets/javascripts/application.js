// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require turbolinks
//= require_tree .

var width = $(window).width();
var dropNumber = 25;
for (var i = 0; i < dropNumber; i++) {
  var speed = 1.5 - ('.' + (Math.floor(Math.random() * 5) + 4));
  var dropPlacement =  Math.floor(Math.random() * width) + 0;
  var ripplePlacment = dropPlacement - 20;
  var scale = Math.round((Math.random() * 5) + 5) / 10;
  var delay = Math.random();
  $('#container').append("<div class='box' style='transform: scale("+scale+","+scale+");'><div class='droplet' style='left:"+dropPlacement+"px;animation: move "+speed+"s infinite ease-in;animation-delay:"+delay+"s;'><div class='dropTop'></div><div class ='dropBottom'></div></div><div class='ripple' style='left:"+ripplePlacment+"px;animation: rippleGo "+speed+"s infinite;animation-delay:"+delay+"s;'></div></div>");
  };
