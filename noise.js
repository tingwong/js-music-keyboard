$(document).ready( function() {

  var playByNote = function(musicNote) {
    var musicID = "#" + musicNote + "Audio";
    $(musicID)[0].load();
    $(musicID)[0].play();
  };

  $(".instrument").on("click", "button", function(event){
    var noteClass = $(this).attr("class").substr(-1);
    playByNote(noteClass);
  });

  $("body").on("keydown", function(event){
    // If we wanted to map by keypress
    // var noteClass = event.key.toLowerCase();
    // If we wanted to map by keyboard
    var usedKeys = {"d": "c", "f": "d", "g": "e", "h": "f", "j":"g", "k":"a", "l":"b"};
    var noteClass = usedKeys[event.key.toLowerCase()];
    playByNote(noteClass);
  });
});




// var playByNote = function(musicNote) {
//   if ($(this).hasClass("c")) {
//     $("#cAudio")[0].load();
//     $("#cAudio")[0].play();
//   } else if ($(this).hasClass("d")) {
//     $("#dAudio")[0].load();
//     $("#dAudio")[0].play();
//   } else if ($(this).hasClass("e")) {
//     $("#eAudio")[0].load();
//     $("#eAudio")[0].play();
//   } else if ($(this).hasClass("f")) {
//     $("#fAudio")[0].load();
//     $("#fAudio")[0].play();
//   } else if ($(this).hasClass("g")) {
//     $("#gAudio")[0].load();
//     $("#gAudio")[0].play();
//   } else if ($(this).hasClass("a")) {
//     $("#aAudio")[0].load();
//     $("#aAudio")[0].play();
//   } else if ($(this).hasClass("b")) {
//     $("#bAudio")[0].load();
//     $("#bAudio")[0].play();
//   }
// };
