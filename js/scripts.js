$(document).ready(function() {
  $("button#cat").click(function() {
    $("ul#user").prepend("<li>Meow, Meow</li>");
    $("#dog-img").hide();
    $("#cat-img").show();
    $("ul#user").children("li").first().click(function() {
      $(this).remove();
    });
    // $("ul#webpage").children("li").first().click(function() {
    //   $(this).remove();
    // });
  });



  $("button#dog").click(function() {
    $("ul#user").prepend("<li>Woof, woof</li>");
    $("#dog-img").show();
    $("#cat-img").hide();
    $("ul#user").append("click to clear selection");
    $("ul#user").click(function() {
      $(this).remove();
    })

    $("ul#user").children("li").first().click(function() {
      $(this).remove();
    $("ul#user").siblings("li").first().click(function() {
      $(this).remove();
    });
    // $("ul#webpage").children("li").first().click(function() {
    //   $(this).remove();
    });
  });
});