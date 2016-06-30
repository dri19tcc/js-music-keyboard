$(document).ready( function() {
  var c = document.getElementById("cAudio");
  var d = document.getElementById("dAudio");
  var e = document.getElementById("eAudio");
  var f = document.getElementById("fAudio");
  var g = document.getElementById("gAudio");
  var a = document.getElementById("aAudio");
  var b = document.getElementById("bAudio");

  $('.note.c').click(function(){ // instead of .cl.ick can also use .mousedown.  Use .mouseover for "strumming"
    c.currentTime = 0;
    c.play();
  })

  $('.note.d').click(function(){
    d.currentTime = 0;
    d.play();
  })

  $('.note.e').click(function(){
    e.currentTime = 0;
    e.play();
  })

  $('.note.f').click(function(){
    f.currentTime = 0;
    f.play();
  })

  $('.note.g').click(function(){
    g.currentTime = 0;
    g.play();
  })

  $('.note.a').click(function(){
    a.currentTime = 0;
    a.play();
  })

  $('.note.b').click(function(){
    b.currentTime = 0;
    b.play();
  })

// keynotes
  $(document).keypress(function(){ // instead of .cl.ick can also use .mousedown.  Use .mouseover for "strumming"
    if (event.which === 97) {
      $('.note.c').addClass("active")
      c.currentTime = 0;
      c.play();
      setTimeout(function() {
        $('.note.c').removeClass("active")
      }, 200)
    } else if (event.which === 115) {
      $('.note.d').addClass("active")
      d.currentTime = 0;
      d.play();
      setTimeout(function() {
        $('.note.d').removeClass("active")
      }, 200)
    } else if (event.which === 100) {
      $('.note.e').addClass("active")
      e.currentTime = 0;
      e.play();
      setTimeout(function() {
        $('.note.e').removeClass("active")
      }, 200)
    } else if (event.which === 102) {
      $('.note.f').addClass("active")
      f.currentTime = 0;
      f.play();
      setTimeout(function() {
        $('.note.f').removeClass("active")
      }, 200)
    } else if (event.which === 103) {
      $('.note.g').addClass("active")
      g.currentTime = 0;
      g.play();
      setTimeout(function() {
        $('.note.g').removeClass("active")
      }, 200)
    } else if (event.which === 104) {
      $('.note.a').addClass("active")
      a.currentTime = 0;
      a.play();
      setTimeout(function() {
        $('.note.a').removeClass("active")
      }, 200)
    } else if (event.which === 106) {
      $('.note.b').addClass("active")
      b.currentTime = 0;
      b.play();
      setTimeout(function() {
        $('.note.b').removeClass("active")
      }, 200)
    }
  })
});
