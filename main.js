$(document).ready(function() {

// Eventi click

$(".next").click(
  function(){
    clickNext();
  }
);

$(".prev").click(
  function() {
    clickPrev();
  }
);

$(".nav i").click(
  function(){
    var circleIndex = $(this).index();
    $("img, .nav i").removeClass("active");
    var indexImg = circleIndex + 1;
    $("img:nth-child("+indexImg+")").addClass("active");
    $(this).addClass("active");
  }
);


// Funzioni Click

// Funzione next

function clickNext(){
  var imgActive = $("img.active");
  imgActive.removeClass("active");

  var circleActive = $("i.active");
  circleActive.removeClass("active");


  if(imgActive.hasClass("last")) {
    var nextImg = $("img.first");
    var nextCircle = $("i.first");
  } else {
    var nextImg = imgActive.next();
    var nextCircle = circleActive.next();
  }
  nextImg.addClass("active");
  nextCircle.addClass("active");
}

// Funzione prev

function clickPrev(){
  var imgActive = $("img.active");
  imgActive.removeClass("active");

  var circleActive = $("i.active");
  circleActive.removeClass("active");

  if(imgActive.hasClass("first")){
    var prevImg = $("img.last");
    var prevCircle = $("i.last");
  } else {
    var prevImg = imgActive.prev();
    var prevCircle = circleActive.prev();
  }
  prevImg.addClass("active");
  prevCircle.addClass("active");
}

// Frecce

$(document).keydown(
  function(e) {

    if(e.which == 37) {
        clickPrev();
    } else if(e.which == 39) {
        clickNext();
      }
  }
);


});
