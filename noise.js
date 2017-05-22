$(document).ready( function() {

  var playByNote = function(musicNote) {
    var musicID = "#" + musicNote + "Audio";
    $(musicID)[0].load();
    $(musicID)[0].play();
  };

  $(".instrument").on("click", "button", function(event){
    var noteClass = $(this).attr("class");
    noteClass = noteClass.substr(-1);
    playByNote(noteClass);
  });

  $(".instrument").on("click", "button", function(event){
    var noteClass = $(this).attr("class");
    noteClass = noteClass.substr(-1);
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
