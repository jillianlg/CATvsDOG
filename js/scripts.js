$(document).ready(function() {
  $("button#cat").click(function() {
    $("ul#user").prepend("<li>Meow, Meow</li>");
    $("ul#user").children("li").first().click(function() {
      $(this).remove();
    });
    $("ul#webpage").children("li").first().click(function() {
      $(this).remove();
    });
  });


  $("button#dog").click(function() {
    $("ul#user").prepend("<li>Woof, woof</li>");
    $("ul#user").before("<li>Dog</li>");
    $("ul#user").children("li").first().click(function() {
      $(this).remove();
    });
    $("ul#webpage").children("li").first().click(function() {
      $(this).remove();
    });
  });
});