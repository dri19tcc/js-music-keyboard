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
    console.log(event);

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
      c.currentTime = 0;
      c.play();
    } else if (event.which === 115) {
      d.currentTime = 0;
      d.play();
    } else if (event.which === 100) {
      e.currentTime = 0;
      e.play();
    } else if (event.which === 102) {
      f.currentTime = 0;
      f.play();
    } else if (event.which === 103) {
      g.currentTime = 0;
      g.play();
    } else if (event.which === 104) {
      a.currentTime = 0;
      a.play();
    } else if (event.which === 106) {
      b.currentTime = 0;
      b.play();
    }
  })
});
