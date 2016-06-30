$(document).ready( function() {
  var c = document.getElementById("cAudio")
  var d = document.getElementById("dAudio")
  var e = document.getElementById("eAudio")
  var f = document.getElementById("fAudio")
  var g = document.getElementById("gAudio")
  var a = document.getElementById("aAudio")
  var b = document.getElementById("bAudio")

  var hover = false
  $("#hover").on("click", function() {
    hover = !hover
    $(this).html(hover ? "Click Play" : "Hover Play")
  })

  $('.note.c').click(function(){ // instead of .cl.ick can also use .mousedown.  Use .mouseover for "strumming"
    if (!hover) {
      c.currentTime = 0; // instead of currentTime you can use .load()
      c.play();
    }
  })

  $('.note.c').mouseover(function(){
    if (hover) {
      c.currentTime = 0;
      c.play();
    }
  })

  $('.note.d').click(function(){
    if (!hover) {
      d.currentTime = 0;
      d.play();
    }
  })

  $('.note.d').mouseover(function(){
    if (hover) {
      d.currentTime = 0;
      d.play();
    }
  })

  $('.note.e').click(function(){
    if (!hover) {
      e.currentTime = 0;
      e.play();
    }
  })

  $('.note.e').mouseover(function(){
    if (hover) {
      e.currentTime = 0;
      e.play();
    }
  })

  $('.note.f').click(function(){
    if (!hover) {
      f.currentTime = 0;
      f.play();
    }
  })

  $('.note.f').mouseover(function(){
    if (hover) {
      f.currentTime = 0;
      f.play();
    }
  })

  $('.note.g').click(function(){
    if (!hover) {
      g.currentTime = 0;
      g.play();
    }
  })

  $('.note.g').mouseover(function(){
    if (hover) {
      g.currentTime = 0;
      g.play();
    }
  })

  $('.note.a').click(function(){
    if (!hover) {
      a.currentTime = 0;
      a.play();
    }
  })

  $('.note.a').mouseover(function(){
    if (hover) {
      a.currentTime = 0;
      a.play();
    }
  })

  $('.note.b').click(function(){
    if (!hover) {
      b.currentTime = 0;
      b.play();
    }
  })

  $('.note.b').mouseover(function(){
    if (hover) {
      b.currentTime = 0;
      b.play();
    }
  })

// keynotes
  $(document).keypress(function(){ // instead of .cl.ick can also use .mousedown.  Use .mouseover for "strumming"
    if (event.which === 97) {
      $('.note.c').addClass("active")
      c.currentTime = 0;
      c.play();
      setTimeout(function() {
        $('.note.c').removeClass("active")
      }, 300)
    } else if (event.which === 115) {
      $('.note.d').addClass("active")
      d.currentTime = 0;
      d.play();
      setTimeout(function() {
        $('.note.d').removeClass("active")
      }, 300)
    } else if (event.which === 100) {
      $('.note.e').addClass("active")
      e.currentTime = 0;
      e.play();
      setTimeout(function() {
        $('.note.e').removeClass("active")
      }, 300)
    } else if (event.which === 102) {
      $('.note.f').addClass("active")
      f.currentTime = 0;
      f.play();
      setTimeout(function() {
        $('.note.f').removeClass("active")
      }, 300)
    } else if (event.which === 103) {
      $('.note.g').addClass("active")
      g.currentTime = 0;
      g.play();
      setTimeout(function() {
        $('.note.g').removeClass("active")
      }, 300)
    } else if (event.which === 104) {
      $('.note.a').addClass("active")
      a.currentTime = 0;
      a.play();
      setTimeout(function() {
        $('.note.a').removeClass("active")
      }, 300)
    } else if (event.which === 106) {
      $('.note.b').addClass("active")
      b.currentTime = 0;
      b.play();
      setTimeout(function() {
        $('.note.b').removeClass("active")
      }, 300)
    }
  })
});

// The below is my code refactored, brought to you by jeremy
// But it is only for mouseclicks, no keyboard functionality
// in html, you can have a data-note="c", it's not user facing
// that helps more for refactoring and will be used for keyboard
// it's written into the html spec

// $(document).ready(function() {
//   $('note').mousedown(function(event) { // instead of this line, use the data from the html
//     var note_id = $(this).data('note') + "Audio"
//     var note_id = $(this).text() + "Audio"
//     var note = $("#" + note_id)[0]
//     note.load()
//     note.play()
//   })
// })

// More re
