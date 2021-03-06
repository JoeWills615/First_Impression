$(document).ready(() => {
  $(".nav1").css("display", "inline-block"); //Register
  $(".nav2").css("display", "inline-block"); //Login
  $(".nav3").css("display", "none"); //Logout
  $(".nav4").css("display", "none"); //Home
  $(".nav5").css("display", "none"); //Sign in as
});

$("#add-btn").on("click", event => {
  event.preventDefault();

  // make a newDate obj
  const newDate = {
    name: $("#name")
      .val()
      .trim(),
    when: $("#when")
      .val()
      .trim(),
    where: $("#where")
      .val()
      .trim(),
    typeOfDate: $("#typeOfDate")
      .val()
      .trim()
  };

  // send an AJAX POST-request with jQuery
  $.post("/api/new", newDate).then(data => {
    console.log(data);
  });

  // empty each input box by replacing the value with an empty string
  $("#name").val("");
  $("#when").val("");
  $("#where").val("");
  $("#typeOfDate").val("");
});
