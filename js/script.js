$(document).ready(function(){
    $("h1").click(function(){

    alert("This is a heading")
    alert("I told you this is a HEADING")

});

$("button#green").click(function() {
    $("body").removeClass();
    $("body").addClass("green-background");

  });

  $("button#yellow").click(function() {
    $("body").removeClass();
    $("body").addClass("yellow-background");
  });

  $("button#red").click(function() {
    $("body").removeClass();
    $("body").addClass("red-background");
  });


jQuery("p").click(function(){
    $ (".warlus-show").fadeToggle();

});


jQuery("img").click(function(){

    alert("This is an image");
});
});