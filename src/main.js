import $ from 'jquery';



$(function(){
      $(".menu li a").on("mouseenter",function(){
        $(".menubox").stop().slideDown(100);
      })
      $("#nav").on("mouseleave",function(){
        $(".menubox").stop().slideUp(100);
      });

});